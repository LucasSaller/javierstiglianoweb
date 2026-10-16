"use client"

import type { ReactNode } from "react"
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text"

type PropsConHijos = { children?: ReactNode } | undefined
type PropsEnlace = { url?: string; children?: ReactNode } | undefined

/** Muestra un campo "rich-text" de Tina con los estilos del sitio. */
export function TextoEnriquecido({ contenido }: { contenido: TinaMarkdownContent | TinaMarkdownContent[] | null | undefined }) {
    if (!contenido) return null
    return (
        <TinaMarkdown
            content={contenido}
            components={{
                a: (props: PropsEnlace) => (
                    <a href={props?.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                        {props?.children}
                    </a>
                ),
                ul: (props: PropsConHijos) => <ul className="list-disc pl-4 space-y-2">{props?.children}</ul>,
                ol: (props: PropsConHijos) => <ol className="list-decimal pl-4 space-y-2">{props?.children}</ol>,
                p: (props: PropsConHijos) => <p className="mb-2 last:mb-0">{props?.children}</p>,
            }}
        />
    )
}
