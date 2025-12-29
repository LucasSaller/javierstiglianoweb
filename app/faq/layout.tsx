import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Preguntas Frecuentes | Dr. Javier Stigliano",
    description: "Respuestas a dudas comunes sobre mastología, ginecología, turnos y coberturas.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
