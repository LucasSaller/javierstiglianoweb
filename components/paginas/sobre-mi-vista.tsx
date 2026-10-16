"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { tinaField, useTina } from "tinacms/dist/react"
import { Award, BookOpen, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EncabezadoPagina } from "@/components/paginas/encabezado-pagina"
import { TextoEnriquecido } from "@/components/texto-enriquecido"
import { estiloDeColor } from "@/lib/estilos-contenido"
import type { ContenidoTina } from "@/lib/contenido"
import type { SobreMiQuery } from "@/tina/__generated__/types"

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

export function SobreMiVista(props: ContenidoTina<SobreMiQuery>) {
    const { data } = useTina(props)
    const pagina = data.sobreMi

    return (
        <div className="bg-background min-h-screen">
            <EncabezadoPagina encabezado={pagina.encabezado} anchoTexto="max-w-3xl" />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        variants={staggerContainer}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-12 items-start"
                    >
                        {/* Foto */}
                        <motion.div variants={fadeIn} className="w-full md:w-1/3 sticky top-24">
                            <div data-tina-field={tinaField(pagina, "foto")} className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden relative shadow-lg group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={pagina.foto || "/dr-stigliano.jpg"}
                                    alt="Dr. Javier Stigliano"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-6 flex flex-col gap-3">
                                <Button className="w-full rounded-full" asChild>
                                    <Link href="/contacto">Solicitar Turno</Link>
                                </Button>
                                <Button variant="outline" className="w-full rounded-full" asChild>
                                    <Link href="/especialidades">Ver Especialidades</Link>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Contenido */}
                        <motion.div variants={fadeIn} className="w-full md:w-2/3 space-y-12">
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                {pagina.cita && (
                                    <p data-tina-field={tinaField(pagina, "cita")} className="text-lg leading-relaxed text-muted-foreground italic">
                                        “{pagina.cita}”
                                    </p>
                                )}
                                <div data-tina-field={tinaField(pagina, "bio")} className="text-lg leading-relaxed text-muted-foreground [&_strong]:text-foreground">
                                    <TextoEnriquecido contenido={pagina.bio} />
                                </div>
                            </div>

                            {/* Cargos */}
                            <motion.div variants={fadeIn}>
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Building className="w-6 h-6 text-primary" /> Cargos Actuales
                                </h2>
                                <div className="grid gap-4">
                                    {pagina.cargos?.map((cargo, indice: number) => cargo && (
                                        <Card key={indice} data-tina-field={tinaField(cargo)} className={`border-l-4 shadow-sm hover:shadow-md transition-shadow ${estiloDeColor(cargo.estilo).bordeIzquierdo}`}>
                                            <CardContent className="pt-6">
                                                <h3 data-tina-field={tinaField(cargo, "institucion")} className="font-semibold text-lg text-foreground">{cargo.institucion}</h3>
                                                <ul className="mt-2 space-y-1 text-muted-foreground">
                                                    {cargo.puestos?.map((puesto, indicePuesto: number) => (
                                                        <li key={indicePuesto} data-tina-field={tinaField(cargo, "puestos", indicePuesto)}>• {puesto}</li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Formación */}
                            <motion.div variants={fadeIn}>
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <BookOpen className="w-6 h-6 text-primary" /> Formación Académica
                                </h2>
                                <ul className="space-y-4">
                                    {pagina.formacion?.map((estudio, indice: number) => estudio && (
                                        <li key={indice} data-tina-field={tinaField(estudio)} className="flex gap-4 items-start">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                                            <div>
                                                <h4 data-tina-field={tinaField(estudio, "titulo")} className="font-semibold text-foreground">{estudio.titulo}</h4>
                                                {estudio.institucion && <p data-tina-field={tinaField(estudio, "institucion")} className="text-muted-foreground text-sm">{estudio.institucion}</p>}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Distinciones */}
                            <motion.div variants={fadeIn}>
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Award className="w-6 h-6 text-amber-500" /> Distinciones
                                </h2>
                                <ul className="space-y-4 text-muted-foreground">
                                    {pagina.distinciones?.map((distincion, indice: number) => distincion && (
                                        <li
                                            key={indice}
                                            data-tina-field={tinaField(distincion)}
                                            className={distincion.destacada
                                                ? "bg-amber-50/50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-100 dark:border-amber-900/30"
                                                : "bg-muted/50 p-4 rounded-lg border border-border"}
                                        >
                                            <strong data-tina-field={tinaField(distincion, "titulo")} className="text-foreground">{distincion.titulo}</strong>
                                            {distincion.detalle && (
                                                <>
                                                    <br />
                                                    <span data-tina-field={tinaField(distincion, "detalle")} className="text-sm">{distincion.detalle}</span>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
