import type { Metadata } from "next"
import { CursosClientPage } from "./CursosClientPage"

export const metadata: Metadata = {
  title: "Cursos de Seguridad Privada - OrionAcademy",
  description:
    "Descubre todos nuestros cursos de seguridad privada avalados por el Ministerio del Interior. Formación profesional de élite.",
  keywords: "cursos seguridad privada, formación profesional, certificación, OrionAcademy, polígono virtual",
}

export default function CursosPage() {
  return <CursosClientPage />
}
