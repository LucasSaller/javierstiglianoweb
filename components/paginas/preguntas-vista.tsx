"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { tinaField, useTina } from "tinacms/dist/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { EncabezadoPagina } from "@/components/paginas/encabezado-pagina"
import { TextoEnriquecido } from "@/components/texto-enriquecido"
import { linkWhatsapp } from "@/lib/estilos-contenido"
import type { ContenidoTina } from "@/lib/contenido"
import type { PreguntasQuery } from "@/tina/__generated__/types"
import datosSitio from "@/content/sitio/datos.json"

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

export function PreguntasVista(props: ContenidoTina<PreguntasQuery>) {
    const { data } = useTina(props)
    const pagina = data.preguntas

    return (
        <div className="bg-background min-h-screen pb-20">
            <EncabezadoPagina encabezado={pagina.encabezado} />

            <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={staggerContainer}
                viewport={{ once: true }}
                className="container mx-auto px-4 py-12 max-w-3xl"
            >
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {pagina.preguntas?.map((item, indice: number) => item && (
                        <motion.div key={indice} variants={fadeIn}>
                            <AccordionItem value={`item-${indice}`} data-tina-field={tinaField(item)} className="border border-border rounded-lg px-4 bg-card shadow-sm hover:shadow-md transition-shadow">
                                <AccordionTrigger data-tina-field={tinaField(item, "pregunta")} className="text-lg font-medium text-foreground text-left">{item.pregunta}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <div data-tina-field={tinaField(item, "respuesta")}>
                                        <TextoEnriquecido contenido={item.respuesta} />
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>

                <motion.div variants={fadeIn} className="mt-12 p-8 bg-primary/5 rounded-2xl text-center border border-primary/10">
                    <h3 data-tina-field={tinaField(pagina.cierre, "titulo")} className="font-semibold text-lg text-primary mb-2">{pagina.cierre?.titulo}</h3>
                    <p data-tina-field={tinaField(pagina.cierre, "texto")} className="text-muted-foreground mb-6">{pagina.cierre?.texto}</p>
                    <Button variant="outline" className="bg-background hover:bg-muted rounded-full px-8" asChild>
                        <Link href={linkWhatsapp(datosSitio.whatsapp)} target="_blank" data-tina-field={tinaField(pagina.cierre, "boton")}>{pagina.cierre?.boton}</Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    )
}
