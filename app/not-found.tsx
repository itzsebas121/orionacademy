"use client"

import Link from "next/link"
import { Home, ArrowLeft, Search, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        <div
          style={{
            fontSize: "8rem",
            fontWeight: "900",
            background: "linear-gradient(135deg, var(--color-conchevino), var(--color-gold))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "1rem",
            animation: "pulse 2s infinite",
          }}
        >
          404
        </div>

        {/* Título */}
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "var(--text-primary)",
            marginBottom: "1rem",
            animation: "fadeInUp 0.8s ease-out",
          }}
        >
          Página No Encontrada
        </h1>

        {/* Descripción */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            marginBottom: "3rem",
            lineHeight: 1.6,
            animation: "fadeInUp 0.8s ease-out 0.2s both",
          }}
        >
          Lo sentimos, la página que buscas no existe o ha sido movida. Te ayudamos a encontrar lo que necesitas.
        </p>

        {/* Botones de acción */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
            animation: "fadeInUp 0.8s ease-out 0.4s both",
          }}
        >
          <Link href="/" className="btn btn-primary" style={{ fontSize: "1.1rem" }}>
            <Home size={16} />
            Ir al Inicio
          </Link>
          <Link href="/cursos" className="btn btn-secondary" style={{ fontSize: "1.1rem" }}>
            <Search size={16} />
            Ver Cursos
          </Link>
          <Link href="/contacto" className="btn btn-secondary" style={{ fontSize: "1.1rem" }}>
            <Phone size={16} />
            Contacto
          </Link>
        </div>

        {/* Enlaces útiles */}
        <div
          style={{
            padding: "2rem",
            backgroundColor: "var(--bg-secondary)",
            borderRadius: "1rem",
            animation: "fadeInUp 0.8s ease-out 0.6s both",
          }}
        >
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Enlaces Útiles
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { href: "/curso-vacacional", title: "Curso Vacacional", desc: "Formación intensiva" },
              { href: "/poligono-virtual", title: "Polígono Virtual", desc: "Entrenamiento VR" },
              { href: "/contacto", title: "Contacto", desc: "Información y soporte" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                style={{
                  display: "block",
                  padding: "1rem",
                  backgroundColor: "var(--bg-primary)",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  color: "var(--text-primary)",
                  transition: "all 0.3s ease",
                  border: "1px solid var(--border-color)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow = "0 5px 15px var(--shadow)"
                  e.currentTarget.style.borderColor = "var(--color-conchevino)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.borderColor = "var(--border-color)"
                }}
              >
                <h4 style={{ fontWeight: "600", marginBottom: "0.25rem" }}>{link.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Botón de regreso */}
        <div style={{ marginTop: "2rem", animation: "fadeInUp 0.8s ease-out 0.8s both" }}>
          <button
            onClick={() => window.history.back()}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-conchevino)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              margin: "0 auto",
              fontSize: "1rem",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateX(-5px)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateX(0)"
            }}
          >
            <ArrowLeft size={16} />
            Volver atrás
          </button>
        </div>
      </div>
    </main>
  )
}
