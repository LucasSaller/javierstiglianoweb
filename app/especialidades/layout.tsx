import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Especialidades Médicas | Mastología y Ginecología",
    description: "Servicios médicos especializados: Patología mamaria (mastología), ginecología integral y oncológica, y medicina legal.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
