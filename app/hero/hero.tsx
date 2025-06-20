"use client"

import Link from "next/link"
import { Calendar, Target, Star, Zap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import styles from "./hero.module.css"

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className={styles.hero} ref={ref}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={`animate-on-scroll ${isVisible ? "fade-in-up" : ""}`}>
            <div className={styles.heroBadge}>
              <Star size={16} />
              Orionacademy
            </div>
          </div>

          <h1 className={`${styles.heroTitle} animate-on-scroll ${isVisible ? "fade-in-up stagger-1" : ""}`}>
            Orionacademy <br />Centro de Formación y Capacitación en Seguridad
          </h1>

          <p className={`${styles.heroSubtitle} animate-on-scroll ${isVisible ? "fade-in-up stagger-2" : ""}`}>
            Especialistas en seguridad privada con cursos avalados por el Ministerio del Interior. Únete a nuestro curso
            vacacional y entrena en nuestro polígono virtual de tiro.
          </p>

          <div className={`${styles.heroButtons} animate-on-scroll ${isVisible ? "fade-in-up stagger-3" : ""}`}>
            <Link href="/curso-vacacional" className={`${styles.heroButton} ${styles.heroPrimary}`}>
              <Calendar size={16} />
              Curso Vacacional
              <Zap size={14} />
            </Link>
            <Link href="/poligono-virtual" className={`${styles.heroButton} ${styles.heroSecondary}`}>
              <Target size={16} />
              Polígono Virtual
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
