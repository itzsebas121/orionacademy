import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toast } from "@/components/toast/toast"
import { Header } from "@/components/header/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OrionAcademy - Formación y Capacitación en Seguridad en Ecuador",
  description:
    "Centro de formación especializado en seguridad privada, cursos vacacionales, defensa personal y polígono virtual de tiro. Avalado por el Ministerio del Interior de Ecuador.",
  keywords: [
    "seguridad privada",
    "cursos de seguridad",
    "polígono virtual de tiro",
    "curso vacacional",
    "OrionAcademy",
    "capacitación en seguridad",
    "defensa personal",
    "primeros auxilios",
    "Ecuador",
  ],
  authors: [{ name: "OrionAcademy", url: "https://orionacademy.netlify.app" }],
  openGraph: {
    title: "OrionAcademy - Formación en Seguridad en Ecuador",
    description:
      "Cursos intensivos en seguridad privada, polígono virtual, defensa personal y más. Certificación avalada por el Ministerio del Interior.",
    url: "https://orionacademy.netlify.app",
    siteName: "OrionAcademy",
    type: "website",
    locale: "es_EC",
    images: [
      {
          url: "/Images/CursoVacacional/curso-vacacional.web", 
        width: 1200,
        height: 630,
        alt: "OrionAcademy - Formación en Seguridad",
      },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo.ico", 
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Toast />
        </ThemeProvider>
      </body>
    </html>
  )
}
