"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Stethoscope, Baby, ShieldAlert, Activity } from "lucide-react"


export default function SpecialtiesPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.1
            }
        },
        viewport: { once: true }
    };

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Premium Header */}
            <section className="relative bg-muted/30 dark:bg-background py-16 md:py-24 text-foreground overflow-hidden">
                {/* Background Patterns & Effects */}
                <div className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
                </div>

                {/* Spotlights */}
                <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full dark:opacity-20 pointer-events-none" />
                <div className="absolute top-0 -right-1/4 w-1/2 h-full bg-primary/20 skew-x-12 translate-x-10 blur-[120px] rounded-full dark:opacity-30 pointer-events-none" />
                <div className="absolute -bottom-1/2 left-1/4 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full dark:opacity-20 pointer-events-none" />

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container relative mx-auto px-4 text-center z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">Especialidades Médicas</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Abordaje integral de la salud femenina con tecnología de vanguardia y evidencia científica actualizada.
                    </p>
                </motion.div>
            </section>

            <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={staggerContainer}
                viewport={{ once: true }}
                className="container mx-auto px-4 py-12 max-w-4xl"
            >
                <div className="grid gap-8">

                    {/* Mastologia */}
                    <motion.div variants={fadeIn} id="mastologia" className="scroll-mt-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <Stethoscope className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">Mastología y Patología Mamaria</h2>
                        </div>
                        <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
                            <p className="text-muted-foreground">
                                La mastología es la especialidad dedicada a la prevención, diagnóstico y tratamiento de las afecciones de la glándula mamaria, tanto benignas como malignas. El control anual es fundamental para la detección temprana del cáncer de mama.
                            </p>
                        </div>
                        <Accordion type="single" collapsible className="w-full bg-card rounded-xl px-4 border border-border shadow-sm">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-foreground">¿Cuándo consultar a un mastólogo?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Se recomienda una consulta anual de control a partir de los 35-40 años, o antes si existen antecedentes familiares de cáncer de mama. También debe consultar si nota bultos, cambios en la piel, secreción por pezón o dolor persistente.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-foreground">Procedimientos frecuentes</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    <ul className="list-disc pl-4 space-y-1">
                                        <li>Examen físico mamario detallado.</li>
                                        <li>Solicitud y análisis de Mamografía Digital y Ecografía Mamaria.</li>
                                        <li>Punciones biópsicas (guiadas por eco o estereotaxia) ante hallazgos sospechosos.</li>
                                        <li>Cirugía conservadora de la mama y oncoplástica.</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>

                    <hr className="my-8 border-border" />

                    {/* Ginecologia */}
                    <motion.div variants={fadeIn} id="ginecologia" className="scroll-mt-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center text-chart-2">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">Ginecología Integral</h2>
                        </div>
                        <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
                            <p className="text-muted-foreground">
                                Acompañamos a la mujer en todas las etapas de su vida, desde la adolescencia hasta la menopausia, priorizando la prevención y la salud reproductiva.
                            </p>
                        </div>
                        <Accordion type="single" collapsible className="w-full bg-card rounded-xl px-4 border border-border shadow-sm">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-foreground">Controles periódicos</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    El control ginecológico anual incluye la toma de Papanicolau (PAP) y Colposcopía para la prevención del cáncer de cuello uterino, además de la revisión mamaria y ecográfica.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-foreground">Anticoncepción y Planificación Familiar</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Asesoramiento personalizado sobre métodos anticonceptivos (orales, DIU, implantes) acorde a las necesidades y antecedentes de cada paciente.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-foreground">Menopausia y Climaterio</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    Tratamiento de los síntomas asociados al cese de la menstruación (sofocos, sequedad, cambios de humor) y prevención de la osteoporosis.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>

                    <hr className="my-8 border-border" />

                    {/* Obstetricia */}
                    <motion.div variants={fadeIn} id="obstetricia" className="scroll-mt-24">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-pink-50 dark:bg-pink-900/10 rounded-lg flex items-center justify-center text-pink-500">
                                <Baby className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">Obstetricia</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Control prenatal, monitoreo del embarazo y asistencia del parto, asegurando el bienestar del binomio madre-hijo.
                        </p>
                    </motion.div>
                </div>

                <motion.div variants={fadeIn} className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">¿Tenés dudas sobre tu salud?</h3>
                    <Button size="lg" className="bg-primary text-white rounded-full px-8 hover:scale-105 transition-transform" asChild>
                        <Link href="/contacto">
                            Solicitar Turno de Consulta <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    )
}
