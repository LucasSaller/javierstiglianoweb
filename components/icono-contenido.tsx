import { Award, HeartHandshake, Ribbon, ShieldCheck, Stethoscope, type LucideProps } from "lucide-react"
import type { ComponentType } from "react"
import { UteroIcon } from "@/components/icons/utero"

const ICONOS_POR_NOMBRE: Record<string, ComponentType<LucideProps>> = {
    lazo: Ribbon,
    utero: UteroIcon as ComponentType<LucideProps>,
    escudo: ShieldCheck,
    medalla: Award,
    manos: HeartHandshake,
    estetoscopio: Stethoscope,
}

/** Muestra el ícono elegido en el panel por su nombre (ej: "lazo", "utero"). */
export function IconoContenido({ nombre, className }: { nombre?: string | null; className?: string }) {
    const IconoElegido: ComponentType<LucideProps> = ICONOS_POR_NOMBRE[nombre ?? ""] ?? Stethoscope
    return <IconoElegido className={className} />
}
