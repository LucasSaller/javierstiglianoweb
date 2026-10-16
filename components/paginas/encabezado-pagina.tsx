"use client"

import { motion } from "framer-motion"
import { tinaField } from "tinacms/dist/react"

type EncabezadoConTina = { titulo?: string | null; subtitulo?: string | null } | null | undefined

/** Encabezado con fondo de puntos y luces, compartido por las páginas internas. */
export function EncabezadoPagina({ encabezado, anchoTexto = "max-w-2xl" }: { encabezado: EncabezadoConTina; anchoTexto?: string }) {
    return (
        <section className="relative bg-muted/30 dark:bg-background py-16 md:py-24 text-foreground overflow-hidden">
            <div className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
            </div>
            <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full dark:opacity-20 pointer-events-none" />
            <div className="absolute top-0 -right-1/4 w-1/2 h-full bg-primary/20 skew-x-12 translate-x-10 blur-[120px] rounded-full dark:opacity-30 pointer-events-none" />
            <div className="absolute -bottom-1/2 left-1/4 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full dark:opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container relative mx-auto px-4 text-center z-10"
            >
                <h1 data-tina-field={tinaField(encabezado, "titulo")} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
                    {encabezado?.titulo}
                </h1>
                <p data-tina-field={tinaField(encabezado, "subtitulo")} className={`text-lg md:text-xl text-muted-foreground ${anchoTexto} mx-auto leading-relaxed`}>
                    {encabezado?.subtitulo}
                </p>
            </motion.div>
        </section>
    )
}
