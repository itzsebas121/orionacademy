"use client"

import { Hero } from "@/app/hero/hero"
import { Carousel } from "@/components/carousel/carousel"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Shield, Users, Award, Target, Clock, Star } from "lucide-react"

export default function HomePage() {
  const statsRef = useScrollAnimation(0.3)
  const featuresRef = useScrollAnimation(0.2)

  return (
    <main>
      <Hero />
      <Carousel />

      <section style={{ padding: "4rem 0", backgroundColor: "var(--bg-primary)" }} ref={statsRef.ref}>
        <div className="container">
          <div className={`animate-on-scroll ${statsRef.isVisible ? "fade-in-up" : ""}`}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "var(--color-conchevino)",
                marginBottom: "3rem",
              }}
            >
              Nuestros Números
            </h2>
          </div>

          <div className="grid grid-4" style={{ gap: "2rem" }}>
            {[
              { icon: Users, number: "500+", label: "Estudiantes Graduados", delay: "stagger-1" },
              { icon: Award, number: "15+", label: "Años de Experiencia", delay: "stagger-2" },
              { icon: Shield, number: "98%", label: "Tasa de Aprobación", delay: "stagger-3" },
              { icon: Star, number: "4.9", label: "Calificación Promedio", delay: "stagger-4" },
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className={`animate-on-scroll ${statsRef.isVisible ? `fade-in-scale ${stat.delay}` : ""}`}
                  style={{
                    textAlign: "center",
                    padding: "2rem",
                    backgroundColor: "var(--bg-secondary)",
                    borderRadius: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)"
                    e.currentTarget.style.boxShadow = "0 20px 40px var(--shadow)"
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "var(--color-conchevino)",
                      color: "white",
                      borderRadius: "50%",
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                    }}
                  >
                    <IconComponent size={32} />
                  </div>
                  <h3
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      color: "var(--color-conchevino)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.number}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontWeight: "500" }}>{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 0", backgroundColor: "var(--bg-secondary)" }} ref={featuresRef.ref}>
        <div className="container">
          <div className={`animate-on-scroll ${featuresRef.isVisible ? "fade-in-up" : ""}`}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "var(--color-conchevino)",
                marginBottom: "1rem",
              }}
            >
              ¿Por qué Elegir OrionAcademy?
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-secondary)",
                fontSize: "1.1rem",
                marginBottom: "3rem",
                maxWidth: "600px",
                margin: "0 auto 3rem",
              }}
            >
              Somos líderes en formación de seguridad privada con metodología innovadora y tecnología de vanguardia
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: "2rem" }}>
            {[
              {
                icon: Shield,
                title: "Certificación Oficial",
                description: "Todos nuestros cursos están avalados por el Ministerio del Interior de Colombia",
                delay: "stagger-1",
              },
              {
                icon: Target,
                title: "Polígono Virtual",
                description: "Entrenamiento con simuladores de realidad virtual de última generación",
                delay: "stagger-2",
              },
              {
                icon: Clock,
                title: "Horarios Flexibles",
                description: "Adaptamos nuestros horarios a tu disponibilidad con modalidades presencial y virtual",
                delay: "stagger-3",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className={`animate-on-scroll ${featuresRef.isVisible ? `fade-in-up ${feature.delay}` : ""}`}
                  style={{
                    padding: "2rem",
                    backgroundColor: "var(--bg-primary)",
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
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "var(--text-primary)",
                      marginBottom: "1rem",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
