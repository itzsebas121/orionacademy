import type { Metadata } from "next"
import { ContactPage } from "./ContactPage"

export const metadata: Metadata = {
  title: "Contacto - OrionAcademy",
  description:
    "Contáctanos para más información sobre nuestros cursos de seguridad privada. Ubicación, teléfonos y redes sociales.",
  keywords: "contacto, OrionAcademy, información, ubicación, teléfono, redes sociales",
}

export default function Contacto() {
  return <ContactPage />
}
