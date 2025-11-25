import { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')

  const translations = {
    en: {
      nav: {
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        title: "Software Developer",
        description: "Full Stack Developer specializing in building elegant, scalable solutions for complex problems. With over 5 years of experience, I craft web and mobile applications using React, Node.js, and Ruby on Rails. I thrive in remote environments, collaborating with teams across the US, Canada, and Mexico to deliver high-quality software that makes a difference. Passionate about clean code, continuous learning, and turning ambitious ideas into reality.",
        viewProjects: "View Projects",
        downloadCV: "Download CV",
        contact: "Contact"
      },
      about: {
        title: "About Me",
        intro1: "Full Stack Developer with 5+ years of proven expertise in building high-impact web and mobile applications. I specialize in creating intuitive user experiences backed by robust, scalable architectures. My approach combines technical excellence with a deep understanding of business needs, ensuring every solution I build drives real value.",
        intro2: "Throughout my career, I've worked across diverse industries from fintech and enterprise platforms to e-commerce and food safety architecting solutions that solve complex challenges. I've built payment systems, document processing platforms, authentication systems, and real-time inventory management tools. I thrive in collaborative remote environments and believe that great software comes from continuous learning, clean code practices, and genuine passion for the craft.",
        experience: "Work Experience",
        present: "Present",
        education: "Education",
        educationDetail: "Information and Communication Technologies",
        university: "Universidad Tecnológica de Ciudad Juárez | 2017",
        technicalSkills: "Technical Skills",
        softSkills: "Soft Skills",
        skills: {
          teamwork: "Teamwork",
          communication: "Communication",
          problemSolving: "Problem Solving",
          continuousLearning: "Continuous Learning"
        }
      },
      projects: {
        title: "My Projects",
        viewProject: "View Project",
        projects: [
          {
            title: "Liebresly",
            description: "Local marketplace mobile app connecting users with verified services, buying/selling used items, and a money-free exchange system. Features AI verification, integrated messaging, and proximity search."
          },
          {
            title: "Lenia",
            description: "Business SaaS system for quote management. Allows managing products, services, and clients, generating professional PDF documents. Free platform with 4.8 stars and 127+ reviews."
          },
          {
            title: "Teregalo",
            description: "Web app for organizing digital gift exchanges (secret santa). Automatic drawing system with WhatsApp invitations, wish lists, and participant management. Features festive animations and multi-language support."
          },
          {
            title: "PetFlip",
            description: "Interactive entertainment platform where users can play and win prizes with their favorite pets. Combines gaming elements with a pet-centered reward system."
          },
          {
            title: "IQKitchen",
            description: "HACCP app in React Native (Expo) to ensure food safety. Developed features that improved process efficiency by 60%."
          },
          {
            title: "PideDirecto",
            description: "Food delivery web application developed with React. Improved user experience, achieving a 15% increase in order completion rates."
          },
          {
            title: "Calistenia Juárez",
            description: "Web directory of public calisthenics parks in Ciudad Juárez. Makes it easy for residents to find free spaces for bodyweight training."
          }
        ]
      },
      contact: {
        title: "Contact",
        subtitle: "Have a project in mind? I'd love to hear from you!",
        whatsapp: "WhatsApp"
      }
    },
    es: {
      nav: {
        about: "Sobre Mí",
        projects: "Proyectos",
        contact: "Contacto"
      },
      hero: {
        title: "Desarrollador de Software",
        description: "Desarrollador Full Stack especializado en construir soluciones elegantes y escalables para problemas complejos. Con más de 5 años de experiencia, creo aplicaciones web y móviles usando React, Node.js y Ruby on Rails. Me desenvuelvo muy bien en entornos remotos, colaborando con equipos en US, Canadá y México para entregar software de alta calidad que marca la diferencia. Apasionado por el código limpio, el aprendizaje continuo y convertir ideas ambiciosas en realidad.",
        viewProjects: "Ver Proyectos",
        downloadCV: "Descargar CV",
        contact: "Contacto"
      },
      about: {
        title: "Sobre Mí",
        intro1: "Desarrollador Full Stack con más de 5 años de experiencia comprobada construyendo aplicaciones web y móviles de alto impacto. Me especializo en crear experiencias de usuario intuitivas respaldadas por arquitecturas robustas y escalables. Mi enfoque combina excelencia técnica con una comprensión profunda de las necesidades del negocio, asegurando que cada solución que construyo genere valor real.",
        intro2: "A lo largo de mi carrera, he trabajado en diversas industrias—desde fintech y plataformas empresariales hasta e-commerce y seguridad alimentaria—arquitecturando soluciones que resuelven desafíos complejos. He construido sistemas de pago, plataformas de procesamiento de documentos, sistemas de autenticación y herramientas de gestión de inventario en tiempo real. Me desenvuelvo muy bien en entornos remotos colaborativos y creo que el gran software viene del aprendizaje continuo, prácticas de código limpio y una pasión genuina por el oficio.",
        experience: "Experiencia Laboral",
        present: "Presente",
        education: "Educación",
        educationDetail: "Tecnologías de la Información y Comunicación",
        university: "Universidad Tecnológica de Ciudad Juárez | 2017",
        technicalSkills: "Habilidades Técnicas",
        softSkills: "Habilidades Blandas",
        skills: {
          teamwork: "Trabajo en Equipo",
          communication: "Comunicación",
          problemSolving: "Resolución de Problemas",
          continuousLearning: "Aprendizaje Continuo"
        }
      },
      projects: {
        title: "Mis Proyectos",
        viewProject: "Ver Proyecto",
        projects: [
          {
            title: "Liebresly",
            description: "Aplicación móvil de marketplace local que conecta usuarios con servicios verificados, compra/venta de artículos usados y sistema de intercambio sin dinero. Incluye verificación con IA, mensajería integrada y búsqueda por proximidad."
          },
          {
            title: "Lenia",
            description: "Sistema SaaS empresarial para gestión de cotizaciones. Permite administrar productos, servicios y clientes, generando documentos PDF profesionales. Plataforma gratuita con 4.8 estrellas y 127+ reseñas."
          },
          {
            title: "Teregalo",
            description: "Aplicación web para organizar intercambios de regalos digitales (amigo secreto). Sistema de sorteo automático con invitaciones por WhatsApp, listas de deseos y gestión de participantes. Incluye animaciones festivas y soporte multiidioma."
          },
          {
            title: "PetFlip",
            description: "Plataforma interactiva de entretenimiento donde los usuarios pueden jugar y ganar premios con sus mascotas favoritas. Combina elementos de juego con un sistema de recompensas centrado en mascotas."
          },
          {
            title: "IQKitchen",
            description: "App HACCP en React Native (Expo) para garantizar la seguridad alimentaria. Desarrollé funcionalidades que mejoraron la eficiencia de procesos en un 60%."
          },
          {
            title: "PideDirecto",
            description: "Aplicación web de entrega de comida desarrollada con React. Mejoré la experiencia de usuario, logrando un aumento del 15% en tasas de finalización de pedidos."
          },
          {
            title: "Calistenia Juárez",
            description: "Directorio web de parques públicos de calistenia en Ciudad Juárez. Facilita a los residentes encontrar espacios gratuitos para entrenamiento con peso corporal."
          }
        ]
      },
      contact: {
        title: "Contacto",
        subtitle: "¿Tienes un proyecto en mente? ¡Me encantaría saber de ti!",
        whatsapp: "WhatsApp"
      }
    }
  }

  const t = translations[language]

  const projects = [
    {
      id: 1,
      title: "Liebresly",
      description: "Aplicación móvil de marketplace local que conecta usuarios con servicios verificados, compra/venta de artículos usados y sistema de intercambio sin dinero. Incluye verificación con IA, mensajería integrada y búsqueda por proximidad.",
      link: "https://liebresly.com",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=500&fit=crop&q=80",
      tags: ["React Native", "Mobile App", "Marketplace", "AI"]
    },
    {
      id: 2,
      title: "Lenia",
      description: "Sistema SaaS empresarial para gestión de cotizaciones. Permite administrar productos, servicios y clientes, generando documentos PDF profesionales. Plataforma gratuita con 4.8 estrellas y 127+ reseñas.",
      link: "https://leniamx.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
      tags: ["SaaS", "React", "Node.js", "PDF Generation"]
    },
    {
      id: 3,
      title: "Teregalo",
      description: "Aplicación web para organizar intercambios de regalos digitales (amigo secreto). Sistema de sorteo automático con invitaciones por WhatsApp, listas de deseos y gestión de participantes. Incluye animaciones festivas y soporte multiidioma.",
      link: "https://teregalo.online",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=500&fit=crop&q=80",
      tags: ["Next.js", "Firebase", "TypeScript", "i18n"]
    },
    {
      id: 4,
      title: "PetFlip",
      description: "Plataforma interactiva de entretenimiento donde los usuarios pueden jugar y ganar premios con sus mascotas favoritas. Combina elementos de juego con un sistema de recompensas centrado en mascotas.",
      link: "https://petflip.mx",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=500&fit=crop&q=80",
      tags: ["React", "Gaming", "Web App"]
    },
    {
      id: 5,
      title: "IQKitchen",
      description: "App HACCP en React Native (Expo) para garantizar la seguridad alimentaria. Desarrollé funcionalidades que mejoraron la eficiencia de procesos en un 60%.",
      link: "#",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop&q=80",
      tags: ["React Native", "Expo", "Food Safety", "Mobile"]
    },
    {
      id: 6,
      title: "PideDirecto",
      description: "Aplicación web de entrega de comida desarrollada con React. Mejoré la experiencia de usuario, logrando un aumento del 15% en tasas de finalización de pedidos.",
      link: "#",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=500&fit=crop&q=80",
      tags: ["React", "Food Delivery", "E-commerce"]
    },
    {
      id: 7,
      title: "Calistenia Juárez",
      description: "Directorio web de parques públicos de calistenia en Ciudad Juárez. Facilita a los residentes encontrar espacios gratuitos para entrenamiento con peso corporal.",
      link: "https://calisteniajrz.netlify.app",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=500&fit=crop&q=80",
      tags: ["Web", "Directory", "Fitness"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-100">
      {/* Header/Navegación */}
      <header className="bg-white/90 backdrop-blur-xl shadow-lg fixed w-full top-0 z-50 border-b-2 border-teal-200">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent hover:scale-110 transition">
              &lt;JOR /&gt;
            </a>
            <div className="flex items-center gap-6">
              <ul className="hidden md:flex gap-6">
                <li><a href="#about" className="text-gray-700 hover:text-teal-600 transition font-medium">{t.nav.about}</a></li>
                <li><a href="#projects" className="text-gray-700 hover:text-cyan-600 transition font-medium">{t.nav.projects}</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">{t.nav.contact}</a></li>
              </ul>
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition shadow-lg hover:shadow-2xl"
              >
                {language === 'en' ? '🇲🇽 ES' : '🇺🇸 EN'}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-orange-400/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold">👋 {language === 'en' ? 'Welcome!' : '¡Bienvenido!'}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4 animate-fade-in">
            Jesús Ochoa Rabelo
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-8">
            {t.hero.title}
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            {t.hero.description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
              {t.hero.viewProjects}
              <span className="inline-block ml-2 group-hover:translate-x-1 transition">→</span>
            </a>
            <a href="/cv.pdf" download className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:from-cyan-600 hover:to-blue-700 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
              📄 {t.hero.downloadCV}
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl border-3 border-purple-500 bg-purple-50 text-purple-700 font-bold hover:bg-purple-100 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
              {t.hero.contact}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            {t.about.title}
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full mb-12"></div>

          <div className="text-gray-800 space-y-6 text-lg leading-relaxed mb-12 font-medium">
            <p className="bg-gradient-to-r from-cyan-50 to-blue-100 p-6 rounded-xl border-2 border-cyan-200 shadow-lg">
              {t.about.intro1}
            </p>
            <p className="bg-gradient-to-r from-teal-50 to-cyan-100 p-6 rounded-xl border-2 border-teal-200 shadow-lg">
              {t.about.intro2}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                💼 {t.about.experience}
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-bold text-gray-900">Modyo</h5>
                  <p className="text-sm text-gray-600">Full Stack RoR Developer | Sep 2024 - {t.about.present}</p>
                  <p className="text-xs text-gray-500 mt-1">Project: DialogEdu</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h5 className="font-bold text-gray-900">Mind (micheldada/arkusnexus)</h5>
                  <p className="text-sm text-gray-600">Ruby on Rails Developer | 2021 - Sep 2024</p>
                  <p className="text-xs text-gray-500 mt-1">Projects: Notary, Tigo Money, Fixle</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-bold text-gray-900">Hipergas</h5>
                  <p className="text-sm text-gray-600">Software Developer | 2019 - 2021</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-bold text-gray-900">Delphi Technologies</h5>
                  <p className="text-sm text-gray-600">IT/Developer | 2017 - 2019</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-purple-100">
              <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                🎓 {t.about.education}
              </h4>
              <p className="font-semibold text-gray-900">{t.about.educationDetail}</p>
              <p className="text-gray-600 mt-2">{t.about.university}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-8 rounded-2xl shadow-xl border-2 border-teal-300 mb-8">
            <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              ⚡ {t.about.technicalSkills}
            </h4>
            <div className="flex flex-wrap gap-3">
              {["React", "React Native", "Node.js", "Next.js", "TypeScript", "Ruby on Rails", "PostgreSQL", "Redux", "Docker", "AWS", "Git", "Ionic", "Hotwire"].map((skill, i) => {
                const gradients = [
                  "from-purple-500 to-pink-500",
                  "from-cyan-500 to-blue-500",
                  "from-orange-500 to-red-500",
                  "from-green-500 to-teal-500",
                  "from-indigo-500 to-purple-500",
                  "from-pink-500 to-rose-500",
                  "from-blue-500 to-indigo-500",
                  "from-teal-500 to-cyan-500"
                ];
                return (
                  <span key={skill} className={`px-5 py-2 rounded-xl bg-gradient-to-r ${gradients[i % gradients.length]} text-white font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition`}>
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl shadow-xl border-2 border-green-300">
            <h4 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              ✨ {t.about.softSkills}
            </h4>
            <div className="flex flex-wrap gap-3">
              {[t.about.skills.teamwork, t.about.skills.communication, t.about.skills.problemSolving, t.about.skills.continuousLearning].map((skill, i) => {
                const gradients = [
                  "from-green-500 to-emerald-500",
                  "from-lime-500 to-green-500",
                  "from-emerald-500 to-teal-500",
                  "from-teal-500 to-cyan-500"
                ];
                return (
                  <span key={skill} className={`px-5 py-2 rounded-xl bg-gradient-to-r ${gradients[i]} text-white font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition`}>
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-teal-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
            {t.projects.title}
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 mx-auto rounded-full mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {t.projects.projects[index].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium border border-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                         className="flex-1 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition shadow-lg hover:shadow-xl transform hover:scale-105">
                        {t.projects.viewProject} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
            {t.contact.title}
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-700 mb-12">
            {t.contact.subtitle}
          </p>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="space-y-6">
              <a href="mailto:jesus.ochoa.rabelo@gmail.com"
                 className="group block p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition border border-blue-100">
                <div className="text-4xl mb-2">✉️</div>
                <div className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">Email</div>
                <div className="text-blue-600 font-medium">jesus.ochoa.rabelo@gmail.com</div>
              </a>

              <div className="grid md:grid-cols-2 gap-4">
                <a href="tel:+526563880717"
                   className="group block p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition border border-green-100">
                  <div className="text-3xl mb-2">📞</div>
                  <div className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition">Phone</div>
                  <div className="text-green-600 font-medium">+52 656 388 07 17</div>
                </a>

                <a href="https://wa.me/526566763854" target="_blank" rel="noopener noreferrer"
                   className="group block p-6 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition border border-emerald-100">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition">{t.contact.whatsapp}</div>
                  <div className="text-emerald-600 font-medium">+52 656 676 38 54</div>
                </a>
              </div>

              <div className="flex gap-4 justify-center pt-6">
                <a href="https://github.com/jOR13" target="_blank" rel="noopener noreferrer"
                   className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-bold hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/jesus-ochoa-rabelo" target="_blank" rel="noopener noreferrer"
                   className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold hover:from-cyan-700 hover:to-blue-800 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-900 via-emerald-900 to-green-900 text-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
              Jesús Ochoa Rabelo
            </h3>
            <p className="text-gray-200 font-medium">Software Developer • Full Stack • Remote Work</p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto my-6"></div>
            <p className="text-sm text-gray-300">&copy; 2024 Jesús Ochoa. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
