"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle, Send } from "lucide-react"

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main>
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-conchevino) 0%, var(--color-conchevino-dark) 100%)",
          color: "white",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>Contáctanos</h1>
          <p style={{ fontSize: "1.25rem", opacity: 0.9 }}>
            Estamos aquí para resolver todas tus dudas sobre nuestros cursos
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--bg-primary)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: "4rem", alignItems: "start" }}>
            {/* Contact Information */}
            <div>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "var(--color-conchevino)",
                  marginBottom: "2rem",
                }}
              >
                Información de Contacto
              </h2>

              <div style={{ marginBottom: "3rem" }}>
                {[
                  {
                    icon: MapPin,
                    title: "Dirección",
                    content: "Av. Confraternidad y calle 7, Ambato - Ecuador",
                  },
                  {
                    icon: Phone,
                    title: "WhatsApp",
                    content: "+593 98 895 7707",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "academy@orionseg.com",
                  },
                  {
                    icon: Clock,
                    title: "Horarios",
                    content: "Lun - Vie: 8:00 AM - 6:00 PM\nSáb: 8:00 AM - 2:00 PM",
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
                        marginBottom: "2rem",
                        padding: "1.5rem",
                        backgroundColor: "var(--bg-secondary)",
                        borderRadius: "1rem",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "translateX(5px)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                    >
                      <div
                        style={{
                          backgroundColor: "var(--color-conchevino)",
                          color: "white",
                          padding: "0.75rem",
                          borderRadius: "0.5rem",
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: "600",
                            color: "var(--text-primary)",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ color: "var(--text-secondary)", whiteSpace: "pre-line" }}>{item.content}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Social Media */}
              <div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                    marginBottom: "1rem",
                  }}
                >
                  Síguenos en Redes Sociales
                </h3>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {[
                    {
                      icon: Facebook,
                      name: "Facebook",
                      color: "#1877F2",
                      url: "https://www.facebook.com/profile.php?id=61573721161416",
                    },
                    {
                      icon: Instagram,
                      name: "Instagram",
                      color: "#E4405F",
                      url: "https://www.instagram.com/orionacademy_ec",
                    },
                    {
                      icon: TikTokIcon,
                      name: "TikTok",
                      color: "#000000",
                      url: "https://www.tiktok.com/@orionacademy_ec/",
                    },
                    {
                      icon: MessageCircle,
                      name: "WhatsApp",
                      color: "#25D366",
                      url: "https://wa.me/593988957707",
                    },
                  ].map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.75rem 1rem",
                          backgroundColor: "var(--bg-secondary)",
                          borderRadius: "0.5rem",
                          textDecoration: "none",
                          color: "var(--text-primary)",
                          transition: "all 0.3s ease",
                          border: `2px solid transparent`,
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = social.color
                          e.currentTarget.style.transform = "translateY(-2px)"
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = "transparent"
                          e.currentTarget.style.transform = "translateY(0)"
                        }}
                      >
                        <IconComponent size={20} style={{ color: social.color }} />
                        {social.name}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              style={{
                backgroundColor: "var(--bg-secondary)",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 10px 30px var(--shadow)",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "var(--color-conchevino)",
                  marginBottom: "2rem",
                }}
              >
                Envíanos un Mensaje
              </h2>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "2px solid var(--border-color)",
                      borderRadius: "0.5rem",
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      fontSize: "1rem",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-conchevino)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                  />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "2px solid var(--border-color)",
                      borderRadius: "0.5rem",
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      fontSize: "1rem",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-conchevino)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                  />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="phone"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "2px solid var(--border-color)",
                      borderRadius: "0.5rem",
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      fontSize: "1rem",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-conchevino)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                  />
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "2px solid var(--border-color)",
                      borderRadius: "0.5rem",
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
                      fontSize: "1rem",
                      transition: "border-color 0.3s ease",
                      resize: "vertical",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-conchevino)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  <Send size={16} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--bg-secondary)" }}>
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "var(--color-conchevino)",
              marginBottom: "3rem",
            }}
          >
            Nuestra Ubicación
          </h2>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "400px",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 10px 30px var(--shadow)",
            }}
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-78.6317%2C-1.3116%2C-78.5917%2C-1.2716&layer=mapnik&marker=-1.291601%2C-78.604066"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación OrionAcademy - Av. Confraternidad y calle 7, Ambato, Ecuador"
            />

            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                right: "1rem",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                padding: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "var(--text-primary)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <MapPin size={20} style={{ color: "var(--color-conchevino)" }} />
                <h3 style={{ fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>OrionAcademy</h3>
              </div>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Av. Confraternidad y calle 7, Ambato - Ecuador
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
