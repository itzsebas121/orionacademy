"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, Award, Target, Users, Star, Zap, ChevronLeft } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import styles from "./carousel.module.css"
import { useState, useRef } from "react"

const courses = [
  {
    id: "curso-vacacional",
    title: "Curso Vacacional de Seguridad",
    description: "Curso intensivo diseñado para estudiantes que desean aprovechar sus vacaciones para formarse.",
    image: "/images/CursoVacacional/curso-vacacional.webp",
    badge: { icon: Star, text: "Destacado" },
    features: [
      { icon: Clock, text: "2 semanas intensivas" },
      { icon: Award, text: "Certificación oficial" },
      { icon: Target, text: "Prácticas en polígono" },
      { icon: Users, text: "Horarios flexibles" },
    ],
    link: "/curso-vacacional",
  },
  {
  id: "curso-poligono-virtual",
  title: "Curso de Polígono Virtual de Tiro",
  description: "Entrenamiento virtual para mejorar habilidades en tiro y control de armas.",
  image: "/placeholder.svg?height=200&width=320",
  badge: { icon: Star, text: "Tecnológico" },
  features: [
    { icon: Clock, text: "4 semanas online" },
    { icon: Award, text: "Certificado digital" },
    { icon: Target, text: "Simulador avanzado" },
    { icon: Users, text: "Acceso 24/7" },
  ],
  link: "/curso-poligono-virtual",
},
  {
  id: "curso-primer-nivel",
  title: "Curso de Primer Nivel",
  description: "Formación básica para quienes inician su carrera en seguridad privada.",
  image: "/placeholder.svg?height=200&width=320",
  badge: { icon: Star, text: "Recomendado" },
  features: [
    { icon: Clock, text: "4 semanas de formación" },
    { icon: Award, text: "Certificado válido" },
    { icon: Target, text: "Entrenamiento práctico" },
    { icon: Users, text: "Clases presenciales y online" },
  ],
  link: "/curso-primer-nivel",
},
{
  id: "curso-supervisor",
  title: "Curso de Supervisor de Seguridad",
  description: "Capacitación para supervisores encargados de coordinar equipos de seguridad.",
  image: "/placeholder.svg?height=200&width=320",
  badge: { icon: Star, text: "Especializado" },
  features: [
    { icon: Clock, text: "3 semanas intensivas" },
    { icon: Award, text: "Diploma de supervisor" },
    { icon: Target, text: "Simulacros y casos reales" },
    { icon: Users, text: "Tutorías personalizadas" },
  ],
  link: "/curso-supervisor",
},
{
  id: "curso-bares-restaurantes",
  title: "Curso de Seguridad en Bares y Restaurantes",
  description: "Entrenamiento específico para seguridad en establecimientos de ocio y restauración.",
  image: "/placeholder.svg?height=200&width=320",
  badge: { icon: Star, text: "Novedad" },
  features: [
    { icon: Clock, text: "2 semanas prácticas" },
    { icon: Award, text: "Certificación oficial" },
    { icon: Target, text: "Manejo de conflictos" },
    { icon: Users, text: "Horarios flexibles" },
  ],
  link: "/curso-bares-restaurantes",
},

{
  id: "curso-control-eventos",
  title: "Curso de Control de Eventos Públicos",
  description: "Formación para gestionar la seguridad en eventos masivos y públicos.",
  image: "/placeholder.svg?height=200&width=320",
  badge: { icon: Star, text: "Profesional" },
  features: [
    { icon: Clock, text: "3 semanas intensivas" },
    { icon: Award, text: "Diploma reconocido" },
    { icon: Target, text: "Prácticas en eventos reales" },
    { icon: Users, text: "Soporte post-curso" },
  ],
  link: "/curso-control-eventos-publicos",
}

]

export function Carousel() {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  // Duplicar cursos para efecto infinito
  const extendedCourses = [...courses, ...courses, ...courses]

  const slideWidth = 340 // 320px + 20px gap

  const goToNext = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)

    setTimeout(() => {
      setIsTransitioning(false)
      // Reset cuando llegamos al final del primer set
      if (currentIndex + 1 >= courses.length) {
        setCurrentIndex(0)
      }
    }, 500)
  }

  const goToPrev = () => {
    if (isTransitioning) return

    setIsTransitioning(true)

    if (currentIndex === 0) {
      // Si estamos al inicio, ir al final
      setCurrentIndex(courses.length - 1)
    } else {
      setCurrentIndex((prev) => prev - 1)
    }

    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  // Calcular el transform basado en el índice actual
  const getTransform = () => {
    // Empezamos desde el segundo set de cursos para permitir navegación hacia atrás
    const baseOffset = courses.length * slideWidth
    const currentOffset = currentIndex * slideWidth
    return -(baseOffset + currentOffset)
  }

  return (
    <section className={styles.carousel} ref={ref}>
      <div className="container">
        <div className={`animate-on-scroll ${isVisible ? "fade-in-up" : ""}`}>
          <h2 className={styles.carouselTitle}>Nuestros Cursos</h2>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            <div
              ref={trackRef}
              className={styles.carouselTrack}
              style={{
                transform: `translateX(${getTransform()}px)`,
                transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
                animationPlayState: isTransitioning ? "paused" : "running",
              }}
            >
              {extendedCourses.map((course, index) => {
                const BadgeIcon = course.badge.icon
                return (
                  <div key={`${course.id}-${index}`} className={styles.carouselSlide}>
                    <div className={styles.courseCard}>
                      <div className={styles.courseImageContainer}>
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          width={320}
                          height={200}
                          className={styles.courseImage}
                        />
                        <span className={styles.courseBadge}>
                          <BadgeIcon size={12} />
                          {course.badge.text}
                        </span>
                      </div>
                      <div className={styles.courseContent}>
                        <h3 className={styles.courseTitle}>{course.title}</h3>
                        <p className={styles.courseDescription}>{course.description}</p>
                        <ul className={styles.courseFeatures}>
                          {course.features.map((feature, featureIndex) => {
                            const IconComponent = feature.icon
                            return (
                              <li key={featureIndex}>
                                <IconComponent size={14} className={styles.featureIcon} />
                                {feature.text}
                              </li>
                            )
                          })}
                        </ul>
                        <Link href={course.link} className={`btn btn-primary ${styles.courseButton}`}>
                          Ver detalles
                          <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.carouselControls}>
            <button
              className={styles.carouselButton}
              onClick={goToPrev}
              disabled={isTransitioning}
              aria-label="Curso anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={styles.carouselButton}
              onClick={goToNext}
              disabled={isTransitioning}
              aria-label="Siguiente curso"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicadores de posición */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "2rem",
          }}
        >
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsTransitioning(false), 500)
                }
              }}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: currentIndex === index ? "var(--color-conchevino)" : "var(--border-color)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              aria-label={`Ir al curso ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
