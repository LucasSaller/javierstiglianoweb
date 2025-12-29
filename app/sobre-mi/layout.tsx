import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sobre el Dr. Javier Stigliano | Trayectoria y Formación",
    description: "Conoce la trayectoria del Dr. Javier Stigliano, Jefe de Patología Mamaria del Hospital Posadas y docente de la UBA.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
