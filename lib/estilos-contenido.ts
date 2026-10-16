/** Clases de Tailwind según el "color" elegido en el panel. Escritas completas para que Tailwind las detecte. */
export type EstiloColor = {
    borde: string
    bordeIzquierdo: string
    fondoIcono: string
    textoIcono: string
    vineta: string
    enlace: string
}

const ESTILOS_POR_COLOR: Record<string, EstiloColor> = {
    principal: {
        borde: "border-t-primary",
        bordeIzquierdo: "border-l-primary bg-card",
        fondoIcono: "bg-primary/10",
        textoIcono: "text-primary",
        vineta: "bg-primary",
        enlace: "text-primary",
    },
    secundario: {
        borde: "border-t-chart-2",
        bordeIzquierdo: "border-l-teal-500 bg-teal-50/30 dark:bg-teal-900/10",
        fondoIcono: "bg-chart-2/10",
        textoIcono: "text-chart-2",
        vineta: "bg-chart-2",
        enlace: "text-chart-2",
    },
}

export function estiloDeColor(color?: string | null): EstiloColor {
    return ESTILOS_POR_COLOR[color ?? ""] ?? ESTILOS_POR_COLOR.principal
}

/** Arma el link de WhatsApp a partir del número guardado en el panel. */
export function linkWhatsapp(numero?: string | null, mensaje?: string): string {
    const numeroLimpio: string = (numero ?? "").replace(/\D/g, "")
    const textoMensaje: string = mensaje ? `?text=${encodeURIComponent(mensaje)}` : ""
    return `https://wa.me/${numeroLimpio}${textoMensaje}`
}

/** Arma el link tel: a partir de un teléfono como "11 7544-5430" o "2081-6169" (asume área 11). */
export function linkTelefono(telefono?: string | null): string {
    const soloDigitos: string = (telefono ?? "").replace(/\D/g, "")
    const conArea: string = soloDigitos.length === 8 ? `11${soloDigitos}` : soloDigitos
    return `tel:+54${conArea}`
}
