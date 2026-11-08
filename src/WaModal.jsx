import { useEffect, useRef, useState } from 'react'
import { track } from './stats.js'

const PHONE = '526566763854'

const COPY = {
  en: {
    title: 'whatsapp — jor13',
    intro: 'Type a message and it opens in WhatsApp, ready to send.',
    hint: '↵ send · shift+↵ new line · esc close',
    send: 'Send ↵',
    open: 'Open chat →',
    empty: 'nothing typed? that’s fine, go straight to the chat.',
    ready: 'ready: WhatsApp opens with your message.',
    prompt: 'message ›',
    cancel: 'Cancel',
    chips: [
      ['/hire', "Hi Jesús! I saw your portfolio and I'd like to talk about a role on our team."],
      ['/project', "Hi Jesús! I have a project in mind and I'd like a quote."],
      ['/hello', 'Hi Jesús! 👋'],
    ],
  },
  es: {
    title: 'whatsapp — jor13',
    intro: 'Escribe tu mensaje y se abre en WhatsApp listo para enviar.',
    hint: '↵ enviar · shift+↵ salto de línea · esc cerrar',
    send: 'Enviar ↵',
    open: 'Abrir chat →',
    empty: '¿sin mensaje? no pasa nada, entra directo al chat.',
    ready: 'listo: WhatsApp se abre con tu mensaje.',
    prompt: 'mensaje ›',
    cancel: 'Cancelar',
    chips: [
      ['/vacante', '¡Hola Jesús! Vi tu portafolio y me gustaría platicar sobre una vacante en nuestro equipo.'],
      ['/proyecto', '¡Hola Jesús! Tengo un proyecto en mente y me gustaría una cotización.'],
      ['/hola', '¡Hola Jesús! 👋'],
    ],
  },
}

export default function WaModal({ open, onClose, lang }) {
  const c = COPY[lang] || COPY.en
  const [msg, setMsg] = useState('')
  const ta = useRef(null)
  const text = msg.trim()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    setTimeout(() => ta.current?.focus(), 30)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [open, onClose])

  // Grow the textarea with its content.
  useEffect(() => {
    const el = ta.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 180) + 'px'
  }, [msg, open])

  if (!open) return null

  const go = () => {
    const url = `https://wa.me/${PHONE}` + (text ? `?text=${encodeURIComponent(text)}` : '')
    track('contact', text ? 'whatsapp_msg' : 'whatsapp')
    window.open(url, '_blank', 'noopener,noreferrer')
    setMsg('')
    onClose()
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); go() }
  }

  return (
    <div className="wam-back" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="wam" role="dialog" aria-modal="true" aria-label="WhatsApp">
        <div className="wam-bar">
          <button className="dot r" onClick={onClose} aria-label={c.cancel} />
          <span className="dot y" /><span className="dot g" />
          <span className="wam-title mono">{c.title}</span>
        </div>
        <div className="wam-body mono">
          <div className="wam-line"><span className="lime">$</span> whatsapp --to jesus</div>
          <div className="wam-line muted">{c.intro}</div>
          <div className="wam-chips">
            {c.chips.map(([k, v]) => (
              <button key={k} type="button" onClick={() => { setMsg(v); ta.current?.focus() }}>{k}</button>
            ))}
          </div>
          <label className="wam-prompt">
            <span className="lime">{c.prompt}</span>
            <textarea
              ref={ta}
              rows={1}
              value={msg}
              maxLength={1000}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              aria-label="Message"
            />
          </label>
          <div className="wam-line dim">// {text ? c.ready : c.empty}</div>
        </div>
        <div className="wam-foot">
          <span className="wam-hint mono">{c.hint}</span>
          <div className="cta">
            <button className="btn2" onClick={onClose}>{c.cancel}</button>
            <button className="btn wa-go" onClick={go}>{text ? c.send : c.open}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
