"use client"

import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text"

/** Muestra un campo "rich-text" de Tina con los estilos del sitio. */
export function TextoEnriquecido({ contenido }: { contenido: TinaMarkdownContent | TinaMarkdownContent[] | null | undefined }) {
    if (!contenido) return null
    return (
        <TinaMarkdown
            content={contenido}
            components={{
                a: (props) => (
                    <a href={props?.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                        {props?.children}
                    </a>
                ),
                ul: (props) => <ul className="list-disc pl-4 space-y-2">{props?.children}</ul>,
                ol: (props) => <ol className="list-decimal pl-4 space-y-2">{props?.children}</ol>,
                p: (props) => <p className="mb-2 last:mb-0">{props?.children}</p>,
            }}
        />
    )
}
