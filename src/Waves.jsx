import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Waves() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x0a0a0b, 5, 26)
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200)

    const geo = new THREE.PlaneGeometry(60, 30, 120, 60)
    geo.rotateX(-Math.PI / 2)
    const base = geo.attributes.position.array.slice()
    const mat = new THREE.PointsMaterial({ color: 0xb4f461, size: 0.06, transparent: true, opacity: 0.55 })
    scene.add(new THREE.Points(geo, mat))

    let mx = 0
    const onMove = (e) => { mx = e.clientX / window.innerWidth - 0.5 }
    const resize = () => {
      const w = window.innerWidth, h = window.innerHeight
      renderer.setSize(w, h, false)
      canvas.style.height = h + 'px'
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }

    let raf
    const frame = (t) => {
      const p = geo.attributes.position.array
      for (let i = 0; i < p.length; i += 3) {
        const x = base[i], z = base[i + 2]
        p[i + 1] = Math.sin(x * 0.35 + t * 0.0009) * 0.5 + Math.cos(z * 0.45 + t * 0.0007) * 0.45 + Math.sin((x + z) * 0.2 + t * 0.0005) * 0.3
      }
      geo.attributes.position.needsUpdate = true
      camera.position.set(mx * 2, 2.0, 9)
      camera.lookAt(0, 0, -6)
      renderer.render(scene, camera)
      if (!reduce) raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      geo.dispose(); mat.dispose(); renderer.dispose()
    }
  }, [])

  return <canvas ref={ref} className="waves" aria-hidden="true" />
}
