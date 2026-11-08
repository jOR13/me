import { useCallback, useEffect, useState } from 'react'
import { track, trackVisit } from './stats.js'
import Waves from './Waves.jsx'
import WaModal from './WaModal.jsx'
import './App.css'

const LINKS = [
  ['GitHub', 'https://github.com/jOR13'],
  ['LinkedIn', 'https://linkedin.com/in/jesus-ochoa-rabelo'],
  ['WhatsApp', 'https://wa.me/526566763854'],
]
const EMAIL = 'jesus.ochoa.rabelo@gmail.com'
const WA = 'https://wa.me/526566763854'

const T = {
  en: {
    nav: ['work', 'experience', 'contact'],
    stack: 'RAILS · REACT · NEXT.JS · WORDPRESS',
    summary: '9+ years building web and mobile products for teams in the US, Canada, Chile and Mexico. Ruby on Rails, React, Next.js and WordPress, from first commit to production.',
    viewWork: 'View work →',
    cv: 'Download CV',
    role: 'Full-Stack Developer',
    location: 'Ciudad Juárez, MX · Remote',
    available: 'available',
    sections: ['Experience', 'Projects', 'Stack'],
    present: 'Present',
    newTag: 'NEW · 2026',
    contactTitle: ["Let's build", 'something ', 'together.'],
    jobs: [
      { c: 'Modyo', r: 'Full-Stack Ruby on Rails Developer · Contractor', d: 'Sep 2024 — Present', b: ['Features and platform improvements for DialogEDU (Rails, Stimulus, React).', 'Full-stack ownership of new functionality and fixes with the Chilean team.'] },
      { c: 'Mind (micheldada / arkusnexus)', r: 'Ruby on Rails Developer', d: '2021 — Sep 2024', b: ['Notary: OCR verification of payment proofs, 40% faster document processing.', 'Tigo Money: transfers and QR payments across five LATAM countries.', 'Breakthrough Broker and Fixle: real estate marketing features and a REST API from scratch.'] },
      { c: 'Hipergas', r: 'Software Developer', d: '2019 — 2021', b: ['Invoice portal (React + Rails API) connected to Business Central ERP.', 'React Native gas sales app with Rails API.'] },
      { c: 'Delphi Technologies', r: 'IT Coordinator / Developer', d: '2017 — 2019', b: ['Inventory and production apps in C#, MSSQL and DevExpress.'] },
    ],
    projects: [
      { n: 'cuicui', d: 'Multiplayer 3D social game on real maps of Mexican cities: avatars, proximity voice chat, 20+ mini-games and an in-game economy.', t: 'Next.js · 3D · real-time · PWA', u: 'https://cuicui.com.mx', feat: true },
      { n: 'Teregalo', d: 'Gift exchange platform with automatic draw, WhatsApp invites and wish lists.', t: 'Next.js · Firebase · TypeScript', u: 'https://teregalo.online' },
      { n: 'Juárez Survivor', d: 'Arcade game with 5 mini-games inspired by Ciudad Juárez, on the App Store.', t: 'React Native · Expo', u: 'https://apps.apple.com/app/juarez-survivor/id6758858775' },
      { n: 'IQKitchen', d: 'HACCP food safety app that improved process efficiency by 60%.', t: 'React Native · Expo' },
      { n: 'PideDirecto', d: 'Food delivery web app; raised order completion by 15%.', t: 'React' },
      { n: 'Calistenia Juárez', d: 'Directory of public calisthenics parks in Ciudad Juárez.', t: 'Web', u: 'https://calisteniajrz.netlify.app' },
    ],
  },
  es: {
    nav: ['proyectos', 'experiencia', 'contacto'],
    stack: 'RAILS · REACT · NEXT.JS · WORDPRESS',
    summary: 'Más de 9 años construyendo productos web y móviles para equipos en Estados Unidos, Canadá, Chile y México. Ruby on Rails, React, Next.js y WordPress, del primer commit a producción.',
    viewWork: 'Ver proyectos →',
    cv: 'Descargar CV',
    role: 'Desarrollador Full-Stack',
    location: 'Ciudad Juárez, MX · Remoto',
    available: 'disponible',
    sections: ['Experiencia', 'Proyectos', 'Stack'],
    present: 'Actual',
    newTag: 'NUEVO · 2026',
    contactTitle: ['Construyamos', 'algo ', 'juntos.'],
    jobs: [
      { c: 'Modyo', r: 'Desarrollador Full-Stack Ruby on Rails · Contractor', d: 'Sep 2024 — Presente', b: ['Funcionalidades y mejoras de plataforma para DialogEDU (Rails, Stimulus, React).', 'Desarrollo full-stack de nuevas funciones y correcciones con el equipo de Chile.'] },
      { c: 'Mind (micheldada / arkusnexus)', r: 'Desarrollador Ruby on Rails', d: '2021 — Sep 2024', b: ['Notary: verificación de comprobantes de pago con OCR, 40% más rápido el procesamiento.', 'Tigo Money: transferencias y pagos con QR en cinco países de LATAM.', 'Breakthrough Broker y Fixle: marketing inmobiliario y una API REST desde cero.'] },
      { c: 'Hipergas', r: 'Desarrollador de Software', d: '2019 — 2021', b: ['Portal de facturas (React + API en Rails) conectado al ERP Business Central.', 'App de venta de gas en React Native con API en Rails.'] },
      { c: 'Delphi Technologies', r: 'Coordinador de TI / Desarrollador', d: '2017 — 2019', b: ['Apps de inventario y producción en C#, MSSQL y DevExpress.'] },
    ],
    projects: [
      { n: 'cuicui', d: 'Juego social multijugador en 3D sobre el mapa real de ciudades de México: monitos, chat de voz por cercanía, 20+ minijuegos y economía propia.', t: 'Next.js · 3D · tiempo real · PWA', u: 'https://cuicui.com.mx', feat: true },
      { n: 'Teregalo', d: 'Plataforma de intercambio de regalos con sorteo automático, invitaciones por WhatsApp y listas de deseos.', t: 'Next.js · Firebase · TypeScript', u: 'https://teregalo.online' },
      { n: 'Juárez Survivor', d: 'Juego arcade con 5 minijuegos inspirados en Ciudad Juárez, en el App Store.', t: 'React Native · Expo', u: 'https://apps.apple.com/app/juarez-survivor/id6758858775' },
      { n: 'IQKitchen', d: 'App HACCP de seguridad alimentaria que mejoró la eficiencia de procesos un 60%.', t: 'React Native · Expo' },
      { n: 'PideDirecto', d: 'App web de pedidos de comida; aumentó la finalización de pedidos un 15%.', t: 'React' },
      { n: 'Calistenia Juárez', d: 'Directorio de parques públicos de calistenia en Ciudad Juárez.', t: 'Web', u: 'https://calisteniajrz.netlify.app' },
    ],
  },
}

const SKILLS = [
  ['Backend', ['Ruby on Rails', 'Hotwire · Stimulus', 'Node.js · REST']],
  ['Frontend', ['React · Next.js', 'TypeScript', 'Tailwind']],
  ['Mobile & CMS', ['React Native · Expo', 'WordPress · PHP', 'PWA']],
  ['Data & tools', ['PostgreSQL · MySQL', 'Firebase · AWS', 'Docker · Git']],
]

function Section({ id, n, title, children }) {
  return (
    <section className="s" id={id}>
      <div className="wrap">
        <div className="sh"><span className="n mono">{n}</span><h2>{title}</h2></div>
        {children}
      </div>
    </section>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => (navigator.language || 'en').startsWith('es') ? 'es' : 'en')
  const t = T[lang]
  const cvHref = `${import.meta.env.BASE_URL}cv.pdf`
  const [stats, setStats] = useState(null)
  const [waOpen, setWaOpen] = useState(false)
  const closeWa = useCallback(() => setWaOpen(false), [])
  const openWa = (e) => { e.preventDefault(); setWaOpen(true) }
  const linkClick = (l) => (e) => (l === 'WhatsApp' ? openWa(e) : track('contact', l.toLowerCase()))
  useEffect(() => { trackVisit().then(setStats) }, [])
  const onCv = () => {
    track('cv_download').then((v) => v && setStats((s) => ({ ...s, cv_downloads: v })))
  }
  const fmt = (n) => new Intl.NumberFormat(lang === 'es' ? 'es-MX' : 'en-US').format(n)

  return (
    <>
      <Waves />
      <WaModal open={waOpen} onClose={closeWa} lang={lang} />

      <nav className="nav">
        <div className="wrap">
          <a href="#" className="mono lime">~/jor13</a>
          <div className="links mono">
            <a href="#work">{t.nav[0]}</a>
            <a href="#experience">{t.nav[1]}</a>
            <a href="#contact">{t.nav[2]}</a>
            <a href={cvHref} download="Jesus-Ochoa-Rabelo-CV.pdf" onClick={onCv} className="lime">cv.pdf ↓</a>
            <button className="lang" onClick={() => setLang(lang === 'en' ? 'es' : 'en')} aria-label="Change language">
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="loc mono">{t.location} · <span className="lime">● {t.available}</span></div>
          <h1>Jesús Ochoa Rabelo</h1>
          <div className="role">{t.role}</div>
          <p className="summary">{t.summary}</p>
          <div className="hbar">
            <div className="clinks mono">
              <a href={`mailto:${EMAIL}`} onClick={() => track('contact', 'email')}>Email ↗</a>
              {LINKS.map(([l, u]) => <a key={l} href={u} target="_blank" rel="noopener noreferrer" onClick={linkClick(l)}>{l} ↗</a>)}
            </div>
            <div className="cta">
              <a className="btn2 wa" href={WA} target="_blank" rel="noopener noreferrer" onClick={openWa}>WhatsApp</a>
              <a className="btn" href={cvHref} download="Jesus-Ochoa-Rabelo-CV.pdf" onClick={onCv}>{t.cv}</a>
            </div>
          </div>
        </div>
      </header>

      <Section id="experience" n="01" title={t.sections[0]}>
        {t.jobs.map((j) => (
          <div className="job" key={j.c}>
            <div className="d mono">{j.d}</div>
            <div>
              <h3>{j.c}</h3>
              <div className="r">{j.r}</div>
              <ul>{j.b.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        ))}
      </Section>

      <Section id="work" n="02" title={t.sections[1]}>
        <div className="pgrid">
          {t.projects.map((p) => {
            const Tag = p.u ? 'a' : 'div'
            return (
              <Tag key={p.n} className={`p ${p.feat ? 'feat' : ''}`} {...(p.u ? { href: p.u, target: '_blank', rel: 'noopener noreferrer', onClick: () => track('project', p.n) } : {})}>
                {p.feat && <div className="mono lime tag">{t.newTag}</div>}
                <h3>{p.n}{p.u && <span className="arrow"> ↗</span>}</h3>
                <p>{p.d}</p>
                <div className="tech mono">{p.t}</div>
              </Tag>
            )
          })}
        </div>
      </Section>

      <Section id="skills" n="03" title={t.sections[2]}>
        <div className="skills">
          {SKILLS.map(([h, items]) => (
            <div key={h}>
              <h4 className="mono">{h}</h4>
              {items.map((i) => <div key={i}>{i}</div>)}
            </div>
          ))}
        </div>
      </Section>

      <footer id="contact">
        <div className="wrap">
          <div className="contact">
            <h2>{t.contactTitle[0]}<br />{t.contactTitle[1]}<span className="lime">{t.contactTitle[2]}</span></h2>
            <div>
              <a className="btn" href={`mailto:${EMAIL}`} onClick={() => track('contact', 'email')}>{EMAIL}</a>
              <div className="clinks mono">
                {LINKS.map(([l, u]) => <a key={l} href={u} target="_blank" rel="noopener noreferrer" onClick={linkClick(l)}>{l} ↗</a>)}
                <a href={cvHref} download="Jesus-Ochoa-Rabelo-CV.pdf" onClick={onCv}>CV.pdf ↓</a>
              </div>
            </div>
          </div>
          <div className="copy mono">
            © {new Date().getFullYear()} Jesús Ochoa Rabelo · Ciudad Juárez, MX
            {stats?.visits != null && (
              <span className="counter"> · {fmt(stats.visits)} {lang === 'es' ? 'visitas' : 'visits'} · {fmt(stats.cv_downloads ?? 0)} {lang === 'es' ? 'descargas del CV' : 'CV downloads'}</span>
            )}
          </div>
        </div>
      </footer>
    </>
  )
}
