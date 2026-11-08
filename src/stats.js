// Tiny Supabase client for anonymous portfolio analytics (no SDK, no cookies, no IPs).
const SB_URL = import.meta.env.VITE_SUPABASE_URL
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const enabled = Boolean(SB_URL && KEY)
const headers = { apikey: KEY, 'Content-Type': 'application/json' }

function context() {
  let referrer = null
  try {
    const utm = new URLSearchParams(location.search).get('utm_source')
    if (utm) referrer = utm.toLowerCase()
    else if (document.referrer) {
      const host = new URL(document.referrer).hostname.replace(/^www\./, '')
      if (host !== location.hostname) referrer = host
    }
  } catch { /* ignore */ }
  let tz = null
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone } catch { /* ignore */ }
  const ua = navigator.userAgent || ''
  const device = /iPad|Tablet/i.test(ua) ? 'tablet' : /Mobi|Android|iPhone/i.test(ua) ? 'mobile' : 'desktop'
  return { p_referrer: referrer, p_lang: (navigator.language || '').slice(0, 10), p_tz: tz, p_device: device }
}

// type: 'visit' | 'cv_download' | 'contact' | 'project'
export async function track(type, label = null) {
  if (!enabled) return null
  try {
    const res = await fetch(`${SB_URL}/rest/v1/rpc/portfolio_track`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ p_type: type, p_label: label, ...context() }),
      keepalive: true,
    })
    if (!res.ok) return null
    const v = await res.json()
    return v == null ? null : Number(v)
  } catch {
    return null
  }
}

export async function getStats() {
  if (!enabled) return null
  try {
    const res = await fetch(`${SB_URL}/rest/v1/portfolio_stats?select=key,value`, { headers })
    if (!res.ok) return null
    return Object.fromEntries((await res.json()).map((r) => [r.key, Number(r.value)]))
  } catch {
    return null
  }
}

// One visit per browser session so refreshes don't inflate the number.
export async function trackVisit() {
  let counted = false
  try { counted = sessionStorage.getItem('jor-visit') === '1' } catch { /* storage blocked */ }
  if (!counted) {
    // Mark before the request so a double-mounted effect can't count twice.
    try { sessionStorage.setItem('jor-visit', '1') } catch { /* storage blocked */ }
    await track('visit')
  }
  return getStats()
}
