"use client"

import Link from "next/link"
import { Fragment } from "react"
import { motion } from "framer-motion"
import { tinaField, useTina } from "tinacms/dist/react"
import { ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { IconoContenido } from "@/components/icono-contenido"
import { EncabezadoPagina } from "@/components/paginas/encabezado-pagina"
import { estiloDeColor } from "@/lib/estilos-contenido"
import type { ContenidoTina } from "@/lib/contenido"
import type { EspecialidadesQuery } from "@/tina/__generated__/types"

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
}

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
}

export function EspecialidadesVista(props: ContenidoTina<EspecialidadesQuery>) {
    const { data } = useTina(props)
    const pagina = data.especialidades

    return (
        <div className="bg-background min-h-screen pb-20">
            <EncabezadoPagina encabezado={pagina.encabezado} />

            <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={staggerContainer}
                viewport={{ once: true }}
                className="container mx-auto px-4 py-12 max-w-4xl"
            >
                <div className="grid gap-8">
                    {pagina.especialidades?.map((especialidad, indice: number) => {
                        if (!especialidad) return null
                        const estilo = estiloDeColor(especialidad.color)
                        return (
                            <Fragment key={especialidad.ancla || indice}>
                                {indice > 0 && <hr className="my-8 border-border" />}
                                <motion.div variants={fadeIn} id={especialidad.ancla || undefined} className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 ${estilo.fondoIcono} rounded-lg flex items-center justify-center ${estilo.textoIcono}`}>
                                            <IconoContenido nombre={especialidad.icono} className="w-6 h-6" />
                                        </div>
                                        <h2 data-tina-field={tinaField(especialidad, "titulo")} className="text-3xl font-bold text-foreground">{especialidad.titulo}</h2>
                                    </div>
                                    <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
                                        <p data-tina-field={tinaField(especialidad, "descripcion")} className="text-muted-foreground">{especialidad.descripcion}</p>
                                    </div>
                                    {(especialidad.desplegables?.length ?? 0) > 0 && (
                                        <Accordion type="single" collapsible className="w-full bg-card rounded-xl px-4 border border-border shadow-sm">
                                            {especialidad.desplegables?.map((desplegable, indiceDesplegable: number) => desplegable && (
                                                <AccordionItem key={indiceDesplegable} value={`item-${indiceDesplegable}`} data-tina-field={tinaField(desplegable)}>
                                                    <AccordionTrigger data-tina-field={tinaField(desplegable, "titulo")} className="text-foreground text-left">{desplegable.titulo}</AccordionTrigger>
                                                    <AccordionContent className="text-muted-foreground">
                                                        {desplegable.texto && <p data-tina-field={tinaField(desplegable, "texto")} className="mb-2 last:mb-0">{desplegable.texto}</p>}
                                                        {(desplegable.puntos?.length ?? 0) > 0 && (
                                                            <ul className="list-disc pl-4 space-y-1">
                                                                {desplegable.puntos?.map((punto, indicePunto: number) => (
                                                                    <li key={indicePunto} data-tina-field={tinaField(desplegable, "puntos", indicePunto)}>{punto}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    )}
                                </motion.div>
                            </Fragment>
                        )
                    })}
                </div>

                <motion.div variants={fadeIn} className="mt-16 text-center">
                    <h3 data-tina-field={tinaField(pagina.llamado, "titulo")} className="text-2xl font-bold mb-4">{pagina.llamado?.titulo}</h3>
                    <Button size="lg" className="bg-primary text-white rounded-full px-8 hover:scale-105 transition-transform" asChild>
                        <Link href="/contacto" data-tina-field={tinaField(pagina.llamado, "boton")}>
                            {pagina.llamado?.boton} <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    )
}
