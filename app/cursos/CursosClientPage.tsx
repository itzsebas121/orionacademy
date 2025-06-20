"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Clock, Users, Star, Trophy, ChevronRight, DollarSign, MapPin, Phone, CheckCircle } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function CursosClientPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const guardRef = useRef<HTMLDivElement>(null)
  const coursesRef = useRef<HTMLDivElement>(null)
  const course1Ref = useRef<HTMLDivElement>(null)
  const course2Ref = useRef<HTMLDivElement>(null)
  const course3Ref = useRef<HTMLDivElement>(null)
  const course4Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación inicial del héroe
      gsap.fromTo(
        guardRef.current,
        { opacity: 0, x: -100, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 1.5, ease: "power3.out" },
      )

      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.2, ease: "power2.out" },
      )

      // Animación de los cursos con efectos parallax
      const courses = [course1Ref.current, course2Ref.current, course3Ref.current, course4Ref.current]

      courses.forEach((course, index) => {
        if (course) {
          gsap.fromTo(
            course,
            {
              opacity: 0,
              y: 100,
              rotationX: 45,
              scale: 0.8,
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: course,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.2,
            },
          )

          // Efecto parallax en las imágenes (solo en desktop)
          if (window.innerWidth > 768) {
            gsap.to(course.querySelector(".course-image"), {
              y: -50,
              ease: "none",
              scrollTrigger: {
                trigger: course,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            })
          }
        }
      })

      // Animación de texto que aparece mientras scrolleas
      gsap.utils.toArray(".reveal-text").forEach((text: any) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: 30, skewY: 7 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Efecto de brillo en los botones
      gsap.utils.toArray(".glow-button").forEach((button: any) => {
        gsap.set(button, { "--glow-opacity": 0 })

        button.addEventListener("mouseenter", () => {
          gsap.to(button, { "--glow-opacity": 1, duration: 0.3 })
        })

        button.addEventListener("mouseleave", () => {
          gsap.to(button, { "--glow-opacity": 0, duration: 0.3 })
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const courses = [
    {
      id: "curso-vacacional",
      title: "Curso Vacacional de Seguridad",
      subtitle: "Formación Intensiva de Élite",
      description:
        "Transforma tus vacaciones en una oportunidad de oro. Programa intensivo de 2 semanas que te convertirá en un profesional certificado de seguridad privada.",
      image: "/images/CursoVacacional/curso-vacacional.webp",
      price: "$50",
      duration: "3 semanas",
      students: "500+ graduados",
      rating: "4.9/5",
      features: ["Certificación oficial", "Polígono virtual", "Horarios flexibles", "Bolsa de empleo"],
      color: "from-red-600 to-red-800",
      link: "/curso-vacacional",
    }
  ]

  return (
    <main
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, var(--color-conchevino) 0%, var(--color-conchevino-dark) 50%, var(--color-conchevino) 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: "2rem 0",
        }}
      >
        {/* Efectos de fondo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(212, 55, 55, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            <div ref={guardRef} style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "-80px",
                  right: "40px",
                  bottom: "-20px",
                  background: "linear-gradient(45deg, var(--conchevino), var(--color-gold-light))",
                  borderRadius: "2rem",
                  filter: "blur(20px)",
                  opacity: 0.5,
                }}
              />
              <Image
                src="/hero.webp"
                alt="Guardia de seguridad profesional"
                width={200}
                height={200}
                style={{
                  borderRadius: "2rem",
                  width: "70%",
                  height: "80%",
                  position: "relative",
                  zIndex: 2,
                }}
                className="course-image"
              />
            </div>

            <div>
              <div
                className="hero-text"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, var(--color-gold), var(--color-gold-light))",
                  color: "var(--color-conchevino)",
                  padding: "0.75rem 2rem",
                  borderRadius: "2rem",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  marginBottom: "2rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                <Shield size={16} style={{ display: "inline", marginRight: "0.5rem" }} />
                Academia de Élite
              </div>

              <h1
                className="hero-text hero-title"
                style={{
                  fontSize: "4rem",
                  fontWeight: "900",
                  marginBottom: "1.5rem",
                  lineHeight: 1.1,
                  background: "linear-gradient(135deg, #ffffff 0%, var(--color-gold) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                La Mejor Academia de Seguridad
              </h1>

              <p
                className="hero-text hero-description"
                style={{
                  fontSize: "1.3rem",
                  marginBottom: "2rem",
                  opacity: 0.9,
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.9)",
                }}
              >
                Donde los profesionales de seguridad nacen y se forjan. Tecnología de vanguardia, instructores de élite
                y certificaciones que abren puertas en toda Colombia.
              </p>

              <div className="hero-text hero-badges" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "2rem",
                    backdropFilter: "blur(10px)",
                    color: "white",
                  }}
                >
                  <Trophy size={16} style={{ color: "var(--color-gold)" }} />
                  <span>+2000 Graduados</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "2rem",
                    backdropFilter: "blur(10px)",
                    color: "white",
                  }}
                >
                  <Star size={16} style={{ color: "var(--color-gold)" }} />
                  <span>4.9/5 Calificación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de cursos */}
      <section ref={coursesRef} style={{ padding: "8rem 0 4rem", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "6rem" }}>
            <h2
              className="reveal-text courses-title"
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                marginBottom: "1rem",
                background: "linear-gradient(135deg, var(--color-conchevino) 0%, var(--color-gold) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nuestros Programas de Élite
            </h2>
            <p
              className="reveal-text courses-subtitle"
              style={{ fontSize: "1.2rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}
            >
              Cada curso está diseñado para crear profesionales excepcionales en seguridad privada
            </p>
          </div>

          {/* Cursos individuales */}
          {courses.map((course, index) => (
            <div
              key={course.id}
              ref={index === 0 ? course1Ref : index === 1 ? course2Ref : index === 2 ? course3Ref : course4Ref}
              style={{
                marginBottom: "6rem",
                perspective: "1000px",
              }}
            >
              <div
                className="course-card"
                style={{
                  background: `linear-gradient(135deg, var(--color-conchevino) 0%, var(--color-conchevino-dark) 100%)`,
                  borderRadius: "2rem",
                  overflow: "hidden",
                  position: "relative",
                  minHeight: "500px",
                  border: "1px solid var(--border-color)",
                }}
              >
                {/* Efectos de fondo */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(1px)",
                  }}
                />

                <div
                  className="course-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    alignItems: "center",
                    minHeight: "500px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Contenido */}
                  <div className="course-content" style={{ padding: "3rem", color: "white" }}>
                    <div
                      style={{
                        display: "inline-block",
                        background: "rgba(255, 255, 255, 0.2)",
                        padding: "0.5rem 1.5rem",
                        borderRadius: "2rem",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        marginBottom: "1rem",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "white",
                      }}
                    >
                      {course.subtitle}
                    </div>

                    <h3
                      className="course-title"
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: "900",
                        marginBottom: "1rem",
                        lineHeight: 1.2,
                        color: "white",
                      }}
                    >
                      {course.title}
                    </h3>

                    <p
                      className="course-description"
                      style={{
                        fontSize: "1.1rem",
                        marginBottom: "2rem",
                        opacity: 0.9,
                        lineHeight: 1.6,
                        color: "rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      {course.description}
                    </p>

                    {/* Estadísticas */}
                    <div
                      className="course-stats"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "1rem",
                        marginBottom: "2rem",
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          padding: "1rem",
                          borderRadius: "1rem",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                          <DollarSign size={16} style={{ color: "var(--color-gold)" }} />
                          <span style={{ fontSize: "0.9rem", opacity: 0.8, color: "white" }}>Inversión</span>
                        </div>
                        <div style={{ fontSize: "1.3rem", fontWeight: "700", color: "white" }}>{course.price}</div>
                      </div>

                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          padding: "1rem",
                          borderRadius: "1rem",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                          <Clock size={16} style={{ color: "var(--color-gold)" }} />
                          <span style={{ fontSize: "0.9rem", opacity: 0.8, color: "white" }}>Duración</span>
                        </div>
                        <div style={{ fontSize: "1.3rem", fontWeight: "700", color: "white" }}>{course.duration}</div>
                      </div>

                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          padding: "1rem",
                          borderRadius: "1rem",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                          <Users size={16} style={{ color: "var(--color-gold)" }} />
                          <span style={{ fontSize: "0.9rem", opacity: 0.8, color: "white" }}>Graduados</span>
                        </div>
                        <div style={{ fontSize: "1.3rem", fontWeight: "700", color: "white" }}>{course.students}</div>
                      </div>

                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          padding: "1rem",
                          borderRadius: "1rem",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                          <Star size={16} style={{ color: "var(--color-gold)" }} />
                          <span style={{ fontSize: "0.9rem", opacity: 0.8, color: "white" }}>Calificación</span>
                        </div>
                        <div style={{ fontSize: "1.3rem", fontWeight: "700", color: "white" }}>{course.rating}</div>
                      </div>
                    </div>

                    {/* Características */}
                    <div style={{ marginBottom: "2rem" }}>
                      <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
                        Incluye:
                      </h4>
                      <div
                        className="course-features"
                        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem" }}
                      >
                        {course.features.map((feature, featureIndex) => (
                          <div key={featureIndex} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <CheckCircle size={14} style={{ color: "var(--color-gold)" }} />
                            <span style={{ fontSize: "0.9rem", color: "white" }}>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={course.link}
                      className="glow-button"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        background: "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)",
                        color: "var(--color-conchevino)",
                        padding: "1rem 2rem",
                        borderRadius: "2rem",
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.7)",
                        position: "relative",
                        overflow: "hidden",
                        margin:"0 auto",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)"
                        e.currentTarget.style.boxShadow = "0 0 30px 10px rgba(212, 175, 55, 0.3)"
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)"
                        e.currentTarget.style.boxShadow = "0 0 0 0 rgba(212, 175, 55, 0.7)"
                      }}
                    >
                      Ver Detalles
                      <ChevronRight size={16} />
                    </Link>
                  </div>

                  {/* Imagen */}
                  <div className="course-image-container" style={{ padding: "2rem", position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        right: "1rem",
                        bottom: "1rem",
                        background: "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                        borderRadius: "1.5rem",
                        filter: "blur(20px)",
                      }}
                    />
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={600}
                      height={400}
                      style={{
                        borderRadius: "1.5rem",
                        width: "100%",
                        height: "auto",
                        position: "relative",
                        zIndex: 2,
                      }}
                      className="course-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, var(--color-conchevino) 0%, var(--color-conchevino-dark) 100%)",
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
            background: "radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />

        <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
          <h2
            className="reveal-text cta-title"
            style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "1rem", color: "white" }}
          >
            ¿Listo para Ser un Profesional de Élite?
          </h2>
          <p
            className="reveal-text cta-description"
            style={{
              fontSize: "1.2rem",
              marginBottom: "3rem",
              opacity: 0.9,
              maxWidth: "600px",
              margin: "0 auto 3rem",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Únete a los miles de profesionales que han transformado su futuro con OrionAcademy
          </p>

          <div
            className="cta-buttons"
            style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="https://api.whatsapp.com/send?phone=593988957707&text=Hola%2C+quiero+informacion+sobre+el+curso+vacacional"
              className="glow-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)",
                color: "var(--color-conchevino)",
                padding: "1.25rem 2.5rem",
                borderRadius: "2rem",
                fontSize: "1.1rem",
                fontWeight: "700",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <Phone size={16} />
              Contactar Ahora
            </a>
            <Link
              href="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                padding: "1.25rem 2.5rem",
                borderRadius: "2rem",
                fontSize: "1.1rem",
                fontWeight: "700",
                textDecoration: "none",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)"
              }}
            >
              <MapPin size={16} />
              Visítanos
            </Link>
          </div>
        </div>
      </section>

      {/* Estilos CSS responsivos */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          
          .hero-title {
            font-size: 3rem !important;
          }
          
          .hero-description {
            font-size: 1.1rem !important;
          }
          
          .courses-title {
            font-size: 2.5rem !important;
          }
          
          .course-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          
          .course-content {
            padding: 2rem !important;
            order: 2;
          }
          
          .course-image-container {
            padding: 1rem !important;
            order: 1;
          }
          
          .course-title {
            font-size: 2rem !important;
          }
          
          .course-stats {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.5rem !important;
          }
          
          .course-features {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          
          .hero-description {
            font-size: 1rem !important;
          }
          
          .hero-badges {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .courses-title {
            font-size: 2rem !important;
          }
          
          .courses-subtitle {
            font-size: 1rem !important;
          }
          
          .course-title {
            font-size: 1.8rem !important;
          }
          
          .course-description {
            font-size: 1rem !important;
          }
          
          .course-stats {
            grid-template-columns: 1fr !important;
          }
          
          .cta-title {
            font-size: 2rem !important;
          }
          
          .cta-description {
            font-size: 1rem !important;
          }
          
          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .cta-buttons a {
            width: 100% !important;
            max-width: 300px !important;
            justify-content: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem !important;
          }
          
          .courses-title {
            font-size: 1.8rem !important;
          }
          
          .course-title {
            font-size: 1.5rem !important;
          }
          
          .course-content {
            padding: 1.5rem !important;
          }
          
          .cta-title {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </main>
  )
}
