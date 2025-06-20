"use client"

import { useState } from "react"
import styles from "./toast.module.css"

export function Toast() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  const handleClose = () => {
    setIsHidden(true)
    setTimeout(() => setIsVisible(false), 500)
  }

  const handleClick = () => {
    window.open("https://wa.me/593988957707?text=Hola, quiero información sobre los cursos de Orionacademy", "_blank")
  }

  if (!isVisible) return null

  return (
    <div className={`${styles.toast} ${isHidden ? styles.hidden : ""}`} onClick={handleClick}>
      <div className={styles.toastContent}>
        <span className={styles.toastIcon}>🎁</span>
        <div className={styles.toastText}>
          <div className={styles.toastTitle}>¡Escríbenos ahora!</div>
          <div className={styles.toastMessage}>Contáctanos y llévate un premio especial 🏆</div>
        </div>
        <button
          className={styles.toastClose}
          onClick={(e) => {
            e.stopPropagation()
            handleClose()
          }}
        >
          ×
        </button>
      </div>
    </div>
  )
}
