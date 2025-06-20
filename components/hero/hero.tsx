import Link from "next/link"
import styles from "./hero.module.css"

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Centro de Formación y Capacitación en Seguridad</h1>
          <p className={styles.heroSubtitle}>
            Especialistas en seguridad privada con cursos avalados por el Ministerio del Interior. Únete a nuestro curso
            vacacional y entrena en nuestro polígono virtual de tiro.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/curso-vacacional" className={`${styles.heroButton} ${styles.heroPrimary}`}>
              Curso Vacacional 🎯
            </Link>
            <Link href="/poligono-virtual" className={`${styles.heroButton} ${styles.heroSecondary}`}>
              Polígono Virtual
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
