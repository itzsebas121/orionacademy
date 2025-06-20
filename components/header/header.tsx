"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "../theme-provider"
import { Menu, X, Sun, Moon, Monitor, Home, BookOpen, Phone, ChevronDown } from "lucide-react"
import styles from "./header.module.css"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const themeDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setThemeDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const { theme, setTheme } = useTheme()

  const themeOptions = [
    { value: "light" as const, label: "Claro", icon: Sun },
    { value: "dark" as const, label: "Oscuro", icon: Moon },
    { value: "system" as const, label: "Sistema", icon: Monitor },
  ]

  const getCurrentThemeIcon = () => {
    const currentTheme = themeOptions.find((option) => option.value === theme)
    return currentTheme ? currentTheme.icon : Monitor
  }

  const CurrentThemeIcon = getCurrentThemeIcon()

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.ico"
              alt="OrionAcademy Logo"
              width={50}
              height={50}
              className={styles.logoImage}
            />
            <span className={styles.logoText}>OrionAcademy</span>
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link href="/" className={styles.navLink}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/cursos" className={styles.navLink}>
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className={styles.navLink}>
                  Contacto
                </Link>
              </li>
            </ul>

            <div className={styles.themeSelector} ref={themeDropdownRef}>
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className={styles.themeToggle}
                title="Cambiar tema"
              >
                <CurrentThemeIcon size={16} />
                <ChevronDown size={14} />
              </button>

              <div className={`${styles.themeDropdown} ${themeDropdownOpen ? styles.open : ""}`}>
                {themeOptions.map((option) => {
                  const IconComponent = option.icon
                  return (
                    <button
                      key={option.value}
                      onClick={() => {
                        setTheme(option.value)
                        setThemeDropdownOpen(false)
                      }}
                      className={`${styles.themeOption} ${theme === option.value ? styles.active : ""}`}
                    >
                      <IconComponent size={16} />
                      {option.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <button className={styles.mobileMenuButton} onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${mobileMenuOpen ? styles.open : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c951035e-990c-4006-b56c-4c2793afb59c_removalai_preview-MWWFX4cFpZ6eyGx9Qe4H8rCVUljBSp.png"
              alt="OrionAcademy Logo"
              width={40}
              height={40}
              className={styles.logoImage}
            />
            <span className={styles.logoText}>OrionAcademy</span>
          </Link>
          <button className={styles.mobileMenuClose} onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className={styles.mobileNavList}>
          <li>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Home size={20} />
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/cursos" onClick={() => setMobileMenuOpen(false)}>
              <BookOpen size={20} />
              Cursos
            </Link>
          </li>
          <li>
            <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
              <Phone size={20} />
              Contacto
            </Link>
          </li>
        </ul>

        <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)" }}>
          <h4 style={{ marginBottom: "1rem", color: "var(--text-secondary)", fontSize: "0.875rem" }}>Tema</h4>
          {themeOptions.map((option) => {
            const IconComponent = option.icon
            return (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value)
                  setMobileMenuOpen(false)
                }}
                className={`${styles.themeOption} ${theme === option.value ? styles.active : ""}`}
                style={{ width: "100%", marginBottom: "0.5rem" }}
              >
                <IconComponent size={16} />
                {option.label}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
