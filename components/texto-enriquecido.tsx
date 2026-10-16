"use client"

import type { ReactNode } from "react"
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text"

type PropsConHijos = { children?: ReactNode } | undefined
type PropsEnlace = { url?: string; children?: ReactNode } | undefined

const CLASE_ENLACE: string = "text-primary underline"
const CLASE_LISTA: string = "list-disc pl-4 space-y-2"
const CLASE_PARRAFO: string = "mb-2 last:mb-0"

/** Convierte **negrita** y [texto](url) de una línea de markdown en elementos de React. */
function convertirLineaMarkdown(lineaMarkdown: string): ReactNode[] {
    const patronEnLinea: RegExp = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g
    const elementos: ReactNode[] = []
    let ultimoIndice: number = 0
    let coincidencia: RegExpExecArray | null
    while ((coincidencia = patronEnLinea.exec(lineaMarkdown)) !== null) {
        if (coincidencia.index > ultimoIndice) elementos.push(lineaMarkdown.slice(ultimoIndice, coincidencia.index))
        if (coincidencia[1] !== undefined) {
            elementos.push(<strong key={coincidencia.index}>{coincidencia[1]}</strong>)
        } else {
            elementos.push(
                <a key={coincidencia.index} href={coincidencia[3]} target="_blank" rel="noopener noreferrer" className={CLASE_ENLACE}>
                    {coincidencia[2]}
                </a>
            )
        }
        ultimoIndice = coincidencia.index + coincidencia[0].length
    }
    if (ultimoIndice < lineaMarkdown.length) elementos.push(lineaMarkdown.slice(ultimoIndice))
    return elementos
}

/** Muestra markdown simple (párrafos, listas, negrita y links), como lo guarda Tina en los JSON. */
function MarkdownSimple({ textoMarkdown }: { textoMarkdown: string }) {
    const bloques: string[] = textoMarkdown.split(/\n\s*\n/).map((bloque: string) => bloque.trim()).filter(Boolean)
    return (
        <>
            {bloques.map((bloque: string, indiceBloque: number) => {
                const lineas: string[] = bloque.split("\n").map((linea: string) => linea.trim()).filter(Boolean)
                const esLista: boolean = lineas.every((linea: string) => /^[*-]\s+/.test(linea))
                if (esLista) {
                    return (
                        <ul key={indiceBloque} className={CLASE_LISTA}>
                            {lineas.map((linea: string, indiceLinea: number) => (
                                <li key={indiceLinea}>{convertirLineaMarkdown(linea.replace(/^[*-]\s+/, ""))}</li>
                            ))}
                        </ul>
                    )
                }
                return <p key={indiceBloque} className={CLASE_PARRAFO}>{convertirLineaMarkdown(lineas.join(" "))}</p>
            })}
        </>
    )
}

/**
 * Muestra un campo "rich-text" de Tina con los estilos del sitio.
 * Acepta lo que devuelve Tina Cloud (árbol de nodos) o el markdown guardado en el JSON del repo.
 */
export function TextoEnriquecido({ contenido }: { contenido: TinaMarkdownContent | TinaMarkdownContent[] | string | null | undefined }) {
    if (!contenido) return null
    if (typeof contenido === "string") return <MarkdownSimple textoMarkdown={contenido} />
    return (
        <TinaMarkdown
            content={contenido}
            components={{
                a: (props: PropsEnlace) => (
                    <a href={props?.url} target="_blank" rel="noopener noreferrer" className={CLASE_ENLACE}>
                        {props?.children}
                    </a>
                ),
                ul: (props: PropsConHijos) => <ul className={CLASE_LISTA}>{props?.children}</ul>,
                ol: (props: PropsConHijos) => <ol className="list-decimal pl-4 space-y-2">{props?.children}</ol>,
                p: (props: PropsConHijos) => <p className={CLASE_PARRAFO}>{props?.children}</p>,
            }}
        />
    )
}
