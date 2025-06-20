"use client"

import Image from "next/image"
import {
  Clock,
  Coffee,
  Award,
  Target,
  Users,
  Calendar,
  DollarSign,
  MapPin,
  Mail,
  CheckCircle,
  Star,
  Shield,
  BookOpen,
  Zap,
  Phone,
  MessageCircle,
  GraduationCap,
  Trophy,
  FileText,
  Video,
  UserCheck,
} from "lucide-react"
import { Gallery } from "@/components/gallery/gallery"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function CursoVacacionalClientPage() {
  const heroRef = useScrollAnimation(0.1)
  const infoRef = useScrollAnimation(0.2)
  const modulesRef = useScrollAnimation(0.2)
  const benefitsRef = useScrollAnimation(0.2)
  const testimonialsRef = useScrollAnimation(0.2)

  return (
    <section>
      <section
        style={{
          backgroundImage: "url(/images/CursoVacacional/curso-vacacional.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "8rem 0",
          color: "white",
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
        }}
        ref={heroRef.ref}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, var(--color-conchevino) 0%, rgba(114, 47, 55, 0.4) 100%)",
            backdropFilter: "blur(2px)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div className={`animate-on-scroll ${heroRef.isVisible ? "fade-in-up" : ""}`}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "var(--color-gold)",
                color: "var(--color-conchevino)",
                padding: "0.75rem 1.5rem",
                borderRadius: "2rem",
                fontSize: "0.875rem",
                fontWeight: "600",
                marginBottom: "2rem",
              }}
            >
              <Star size={16} />
              Curso Más Demandado
            </div>
          </div>

          <h1
            className={`animate-on-scroll ${heroRef.isVisible ? "fade-in-up stagger-1" : ""}`}
            style={{ fontSize: "4rem", fontWeight: "bold", marginBottom: "1.5rem", lineHeight: 1.2 }}
          >
            Curso Vacacional de Seguridad
          </h1>

          <p
            className={`animate-on-scroll ${heroRef.isVisible ? "fade-in-up stagger-2" : ""}`}
            style={{ fontSize: "1.25rem", maxWidth: "700px", margin: "0 auto 3rem", opacity: 0.9 }}
          >
            Transforma tus vacaciones en una oportunidad de crecimiento profesional. Obtén tu certificación en seguridad
            privada con nuestro programa intensivo avalado por el Ministerio del Interior.
          </p>

          <div
            className={`animate-on-scroll ${heroRef.isVisible ? "fade-in-up stagger-3" : ""}`}
            style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="#inscripcion"
              className="btn"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-conchevino)",
                padding: "1.25rem 2.5rem",
                fontSize: "1.1rem",
              }}
            >
              <Calendar size={16} />
              Inscríbete Ahora
            </a>
            <a
              href="#informacion"
              className="btn btn-secondary"
              style={{ color: "white", borderColor: "white", padding: "1.25rem 2.5rem", fontSize: "1.1rem" }}
            >
              <Target size={16} />
              Ver Detalles
            </a>
          </div>
        </div>
      </section>

      {/* Información destacada mejorada */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--bg-primary)" }} ref={infoRef.ref}>
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <span
              style={{
                color: "var(--color-conchevino)",
                fontWeight: "600",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <Shield size={16} />
              FORMACIÓN PROFESIONAL
            </span>
            <h2
              id="informacion"
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "var(--color-conchevino)",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              ¿Por qué elegir nuestro Curso Vacacional?
            </h2>
            <p
              style={{ color: "var(--text-secondary)", marginBottom: "3rem", lineHeight: 1.6, fontSize: "1.1rem" }}
            >
              Diseñado especialmente para estudiantes que quieren aprovechar sus vacaciones de manera productiva.
              Nuestro programa intensivo te permite obtener una certificación profesional reconocida nacionalmente
              en tiempo récord, con metodología práctica y tecnología de vanguardia.
            </p>
          </div>
          <div className="grid grid-2" style={{ gap: "5rem", alignItems: "center" }}>
            <div className={`animate-on-scroll ${infoRef.isVisible ? "fade-in-left" : ""}`}>


              <div style={{ display: "grid", gap: "1.5rem", marginBottom: "3rem" }}>
                {[
                  {
                    icon: Calendar,
                    title: "Duración Intensiva",
                    desc: "2 semanas completas - 80 horas académicas certificadas",
                  },
                  {
                    icon: Clock,
                    title: "Horarios Optimizados",
                    desc: "Lunes a viernes 8:00 AM - 5:00 PM con descansos programados",
                  },
                  {
                    icon: DollarSign,
                    title: "Inversión Accesible",
                    desc: "$180 USD - Descuento estudiantil del 20% disponible",
                  },
                  {
                    icon: Award,
                    title: "Certificación Oficial",
                    desc: "Avalada por el Ministerio del Interior - Válida en todo Ecuador",
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        padding: "1.5rem",
                        backgroundColor: "var(--bg-secondary)",
                        borderRadius: "1rem",
                        transition: "all 0.3s ease",
                        border: "1px solid transparent",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateX(10px)"
                        e.currentTarget.style.boxShadow = "0 10px 30px var(--shadow)"
                        e.currentTarget.style.borderColor = "var(--color-conchevino)"
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateX(0)"
                        e.currentTarget.style.boxShadow = "none"
                        e.currentTarget.style.borderColor = "transparent"
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "var(--color-conchevino)",
                          color: "white",
                          padding: "1rem",
                          borderRadius: "0.75rem",
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h4
                          style={{
                            fontWeight: "700",
                            color: "var(--text-primary)",
                            marginBottom: "0.5rem",
                            fontSize: "1.1rem",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              
            </div>

            <div className={`animate-on-scroll ${infoRef.isVisible ? "fade-in-right" : ""}`} style={{ display: "flex", height: "100%", alignItems: "center" }}>
              <div style={{ position: "relative" }}>
                <Image
                  src="/images/CursoVacacional/curso-vacacional.webp"
                  alt="Estudiantes en curso vacacional"
                  width={700}
                  height={600}
                  style={{
                    borderRadius: "1.5rem",
                    width: "100%",
                    height: "auto",
                    boxShadow: "0 25px 50px var(--shadow)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "2rem",
                    right: "2rem",
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    padding: "1.5rem",
                    borderRadius: "1rem",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                    <Trophy size={20} style={{ color: "var(--color-gold)" }} />
                    <span style={{ fontWeight: "600", color: "var(--color-conchevino)" }}>Próximo Inicio</span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                    01 de Julio - Cupos limitados disponibles
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <a href="#inscripcion" className="btn btn-primary" style={{ fontSize: "1.1rem" }}>
                  <CheckCircle size={16} />
                  Inscríbete Ahora
                </a>
                <a href="#modulos" className="btn btn-secondary" style={{ fontSize: "1.1rem" }}>
                  <BookOpen size={16} />
                  Ver Programa
                </a>
              </div>
        </div>
      </section>

      <section id="modulos" style={{ padding: "6rem 0", backgroundColor: "var(--bg-secondary)" }} ref={modulesRef.ref}>
        <div className="container">
          <div className={`animate-on-scroll ${modulesRef.isVisible ? "fade-in-up" : ""}`}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "bold",
                color: "var(--color-conchevino)",
                marginBottom: "1rem",
              }}
            >
              Programa Académico Completo
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                marginBottom: "4rem",
                maxWidth: "700px",
                margin: "0 auto 4rem",
              }}
            >
              Curriculum diseñado por expertos en seguridad con metodología teórico-práctica y tecnología de vanguardia
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: "2rem" }}>
            {[
              {
  title: "Entrenamiento en Polígono Virtual",
  description: "Simulaciones avanzadas con tecnología VR para mejorar la precisión, reflejos y seguridad en el manejo de armas.",
  icon: Zap,
  duration: "20 horas",
  topics: [
    "Simulador virtual de tiro",
    "Técnicas de puntería",
    "Normas de seguridad balística",
    "Manejo responsable de armas",
  ],
  delay: "stagger-1",
},
{
  title: "Técnicas de Defensa Personal",
  description: "Aprende a neutralizar amenazas, defenderte eficazmente y proteger a terceros en situaciones reales.",
  icon: Shield,
  duration: "16 horas",
  topics: [
    "Defensa sin armas",
    "Reducción de agresores",
    "Uso proporcional de la fuerza",
    "Control físico de situaciones",
  ],
  delay: "stagger-2",
},
{
  title: "Primeros Auxilios en Seguridad",
  description: "Formación en respuesta rápida ante emergencias médicas, con énfasis en escenarios operativos.",
  icon: UserCheck,
  duration: "12 horas",
  topics: [
    "RCP básico y DEA",
    "Atención a heridas y traumas",
    "Manejo de emergencias",
    "Evacuación segura",
  ],
  delay: "stagger-3",
},
{
  title: "Reconocimientos y Premios",
  description: "Valoramos tu esfuerzo. Entrega de premios a los mejores desempeños en prácticas y simulacros.",
  icon: Award,
  duration: "—",
  topics: [
    "Evaluación por desempeño",
    "Reconocimiento a la excelencia",
    "Premios sorpresa",
    "Entrega de certificados",
  ],
  delay: "stagger-4",
},
{
  title: "Refrigerios e Hidratación",
  description: "Durante todo el curso contarás con refrigerios, bebidas y espacios de descanso.",
  icon: Coffee,
  duration: "Incluido",
  topics: [
    "Snacks saludables",
    "Bebidas frías y calientes",
    "Pausas programadas",
    "Zona de descanso",
  ],
  delay: "stagger-5",
},
{
  title: "Instructores Expertos",
  description: "Formación guiada por profesionales certificados con experiencia real en seguridad y defensa.",
  icon: GraduationCap,
  duration: "—",
  topics: [
    "Instructores activos",
    "Certificaciones oficiales",
    "Experiencia en campo",
    "Acompañamiento personalizado",
  ],
  delay: "stagger-6",
}

            ].map((module, index) => {
              const IconComponent = module.icon
              return (
                <div
                  key={index}
                  className={`animate-on-scroll ${modulesRef.isVisible ? `fade-in-up ${module.delay}` : ""}`}
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    padding: "2.5rem",
                    borderRadius: "1.5rem",
                    boxShadow: "0 10px 30px var(--shadow)",
                    transition: "all 0.4s ease",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid transparent",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)"
                    e.currentTarget.style.boxShadow = "0 25px 50px var(--shadow-hover)"
                    e.currentTarget.style.borderColor = "var(--color-conchevino)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 10px 30px var(--shadow)"
                    e.currentTarget.style.borderColor = "transparent"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "1.5rem",
                      right: "1.5rem",
                      background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))",
                      color: "var(--color-conchevino)",
                      padding: "0.5rem 1rem",
                      borderRadius: "1.5rem",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <Clock size={12} />
                    {module.duration}
                  </div>

                  <div
                    style={{
                      backgroundColor: "var(--color-conchevino)",
                      color: "white",
                      borderRadius: "1rem",
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <IconComponent size={32} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      color: "var(--text-primary)",
                      lineHeight: 1.3,
                    }}
                  >
                    {module.title}
                  </h3>

                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {module.description}
                  </p>

                  <div style={{ marginBottom: "1rem" }}>
                    <h4
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        color: "var(--color-conchevino)",
                        marginBottom: "0.75rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <FileText size={14} />
                      Temas Principales:
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {module.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginBottom: "0.5rem",
                            color: "var(--text-secondary)",
                            fontSize: "0.85rem",
                          }}
                        >
                          <CheckCircle size={12} style={{ color: "var(--color-conchevino)" }} />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section style={{ padding: "6rem 0", backgroundColor: "var(--bg-primary)" }} ref={benefitsRef.ref}>
        <div className="container">
          <div className={`animate-on-scroll ${benefitsRef.isVisible ? "fade-in-up" : ""}`}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "var(--color-conchevino)",
                marginBottom: "1rem",
              }}
            >
              Beneficios Exclusivos
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                marginBottom: "4rem",
                maxWidth: "600px",
                margin: "0 auto 4rem",
              }}
            >
              Más que un curso, una experiencia completa de formación profesional
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: "2rem" }}>
            {[
              {
                icon: Trophy,
                title: "Certificación Inmediata",
                description: "Recibe tu certificado el mismo día de graduación, listo para trabajar",
                delay: "stagger-1",
              },
              {
                icon: Video,
                title: "Material Digital",
                description: "Acceso de por vida a videos, manuales y actualizaciones normativas",
                delay: "stagger-3",
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className={`animate-on-scroll ${benefitsRef.isVisible ? `fade-in-scale ${benefit.delay}` : ""}`}
                  style={{
                    padding: "2rem",
                    backgroundColor: "var(--bg-secondary)",
                    borderRadius: "1rem",
                    boxShadow: "0 5px 15px var(--shadow)",
                    transition: "all 0.3s ease",
                    textAlign: "center",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)"
                    e.currentTarget.style.boxShadow = "0 20px 40px var(--shadow-hover)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 5px 15px var(--shadow)"
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "var(--color-conchevino)",
                      color: "white",
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                    }}
                  >
                    <IconComponent size={28} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      color: "var(--text-primary)",
                      marginBottom: "1rem",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--bg-secondary)" }} ref={testimonialsRef.ref}>
        <div className="container">
          <div className={`animate-on-scroll ${testimonialsRef.isVisible ? "fade-in-up" : ""}`}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "var(--color-conchevino)",
                marginBottom: "4rem",
              }}
            >
              Lo que Dicen Nuestros Graduados
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: "2rem" }}>
            {[
              {
                name: "Carlos Rodríguez",
                role: "Supervisor de Seguridad",
                comment:
                  "El curso vacacional cambió mi vida. En solo 2 semanas obtuve las herramientas necesarias para conseguir un excelente empleo.",
                rating: 5,
                delay: "stagger-1",
              },
              {
                name: "María González",
                role: "Agente de Seguridad",
                comment:
                  "La metodología es excelente y los instructores muy preparados. El polígono virtual es una experiencia increíble.",
                rating: 5,
                delay: "stagger-2",
              },
              {
                name: "Andrés López",
                role: "Coordinador de Seguridad",
                comment:
                  "Recomiendo OrionAcademy al 100%. La certificación me abrió muchas puertas en el sector de seguridad privada.",
                rating: 5,
                delay: "stagger-3",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`animate-on-scroll ${testimonialsRef.isVisible ? `fade-in-up ${testimonial.delay}` : ""}`}
                style={{
                  padding: "2rem",
                  backgroundColor: "var(--bg-primary)",
                  borderRadius: "1rem",
                  boxShadow: "0 5px 15px var(--shadow)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)"
                  e.currentTarget.style.boxShadow = "0 15px 35px var(--shadow-hover)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 5px 15px var(--shadow)"
                }}
              >
                <div style={{ display: "flex", marginBottom: "1rem" }}>
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} size={16} style={{ color: "var(--color-gold)", fill: "var(--color-gold)" }} />
                  ))}
                </div>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "1.5rem",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.comment}"
                </p>
                <div>
                  <h4 style={{ fontWeight: "600", color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                    {testimonial.name}
                  </h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery title="Galería del Curso Vacacional" />

      <section
        id="inscripcion"
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, var(--color-conchevino) 0%, var(--color-conchevino-dark) 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-50%",
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />

        <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              padding: "0.75rem 1.5rem",
              borderRadius: "2rem",
              marginBottom: "2rem",
            }}
          >
            <Zap size={16} />
            ¡Últimos Cupos Disponibles!
          </div>

          <h2 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "1rem" }}>¡Inscríbete Ahora!</h2>
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "3rem",
              opacity: 0.7,
              maxWidth: "700px",
              margin: "0 auto 3rem",
            }}
          >
            No pierdas la oportunidad de transformar tu futuro profesional. Cupos limitados para garantizar la calidad
            de la formación.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {[
              {
                icon: Users,
                title: "Inscripciones abiertas",
                desc: "Inscribete ya! ",
              },
              { icon: Award, title: "Certificación Válida", desc: "Reconocida en todo el territorio ecuatoriano" },
              { icon: Target, title: "Prácticas Incluidas", desc: "Polígono virtual y simulacros reales" },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "50%",
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <IconComponent size={32} />
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>{feature.title}</h3>
                  <p style={{ opacity: 0.8, lineHeight: 1.5 }}>{feature.desc}</p>
                </div>
              )
            })}
          </div>

          <div
            style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}
          >
            <a
              href="https://wa.me/593988957707?text=Quiero información sobre el Curso Vacacional"
              className="btn"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-conchevino)",
                padding: "1.25rem 2.5rem",
                fontSize: "1.1rem",
              }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="tel:+593988957707"
              className="btn"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid white",
                padding: "1.25rem 2.5rem",
                fontSize: "1.1rem",
              }}
            >
              <Phone size={16} />
              Llamar Ahora
            </a>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              padding: "2rem",
              borderRadius: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Información de Contacto</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <MapPin size={16} />
                <span>Av. Confraternidad y calle 7, Ambato</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <Mail size={16} />
                <span>academy@orionseg.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <Phone size={16} />
                <span>+593 98 895 7707</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
