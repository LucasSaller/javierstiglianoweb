"use client"

import { useState, type SyntheticEvent } from "react"

const FOTO_POR_DEFECTO: string = "/imagenes/dr-stigliano.jpg"

/**
 * Imagen cargada desde el panel. Tina Cloud puede devolver la URL de su servidor de imágenes;
 * si esa URL falla, se usa la copia del mismo archivo que está en /public/imagenes.
 */
export function FotoContenido({ src, alt, className }: { src?: string | null; alt: string; className?: string }) {
    const [usarCopiaLocal, setUsarCopiaLocal] = useState<boolean>(false)
    const nombreArchivo: string = (src ?? "").split("/").pop() || ""
    const rutaLocal: string = nombreArchivo ? `/imagenes/${nombreArchivo}` : FOTO_POR_DEFECTO
    const srcFinal: string = !src ? FOTO_POR_DEFECTO : usarCopiaLocal ? rutaLocal : src

    const alFallarCarga = (evento: SyntheticEvent<HTMLImageElement>): void => {
        if (!usarCopiaLocal) setUsarCopiaLocal(true)
        else evento.currentTarget.src = FOTO_POR_DEFECTO
    }

    // eslint-disable-next-line @next/next/no-img-element
    return <img src={srcFinal} alt={alt} className={className} onError={alFallarCarga} />
}
