import type { Metadata } from "next"
import CursoVacacionalClientPage from "./CursoVacacionalClientPage"

export const metadata: Metadata = {
  title: "Curso Vacacional de Seguridad - OrionAcademy",
  description:
    "Curso intensivo de seguridad privada diseñado para estudiantes. Aprovecha tus vacaciones para formarte profesionalmente.",
  keywords: "curso vacacional, seguridad privada, curso intensivo, vacaciones, estudiantes",
}

export default function CursoVacacionalPage() {
  return <CursoVacacionalClientPage />
}
