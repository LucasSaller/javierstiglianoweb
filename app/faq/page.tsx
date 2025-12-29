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


export default function FAQPage() {
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">Preguntas Frecuentes</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Resolvemos tus dudas principales antes de la consulta.
                    </p>
                </motion.div>
            </section>

            <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={staggerContainer}
                viewport={{ once: true }}
                className="container mx-auto px-4 py-12 max-w-3xl"
            >
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <motion.div variants={fadeIn}>
                        <AccordionItem value="item-1" className="border border-border rounded-lg px-4 bg-card shadow-sm hover:shadow-md transition-shadow">
                            <AccordionTrigger className="text-lg font-medium text-foreground">¿Cómo solicito un turno?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Podes solicitar turno las 24hs a través de nuestra plataforma online DrApp haciendo clic en el botón "Reservar Turno" de este sitio. También podes escribirnos por WhatsApp para consultas específicas o urgencias.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <AccordionItem value="item-2" className="border border-border rounded-lg px-4 bg-card shadow-sm hover:shadow-md transition-shadow">
                            <AccordionTrigger className="text-lg font-medium text-foreground">¿Qué obras sociales atienden?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Atendemos de forma particular y por OSDE y OMINT. Para otras coberturas, emitimos factura para reintegro, pero te sugerimos consultar previamente con tu obra social los montos a reintegrar.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <AccordionItem value="item-3" className="border border-border rounded-lg px-4 bg-card shadow-sm hover:shadow-md transition-shadow">
                            <AccordionTrigger className="text-lg font-medium text-foreground text-left">¿A partir de qué edad debo hacerme una mamografía?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                La Sociedad Argentina de Mastología recomienda una mamografía anual a partir de los 40 años en mujeres asintomáticas y sin antecedentes directos. Si tenés antecedentes familiares de cáncer de mama, consultá para iniciar los controles antes.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <AccordionItem value="item-4" className="border border-border rounded-lg px-4 bg-card shadow-sm hover:shadow-md transition-shadow">
                            <AccordionTrigger className="text-lg font-medium text-foreground">¿Es dolorosa la punción mamaria?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Es un procedimiento tolerado muy bien por la mayoría de las pacientes. Se utiliza anestesia local para minimizar las molestias. Es un estudio rápido y fundamental para el diagnóstico preciso de nódulos o calcificaciones.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <AccordionItem value="item-5" className="border border-border rounded-lg px-4 bg-card shadow-sm hover:shadow-md transition-shadow">
                            <AccordionTrigger className="text-lg font-medium text-foreground">¿Debo llevar estudios previos?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Sí, es muy importante que traigas todos tus estudios anteriores (mamografías, ecografías, resonancias, biopsias), no solo los informes sino también las imágenes.
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                </Accordion>

                <motion.div variants={fadeIn} className="mt-12 p-8 bg-primary/5 rounded-2xl text-center border border-primary/10">
                    <h3 className="font-semibold text-lg text-primary mb-2">¿No encontraste tu respuesta?</h3>
                    <p className="text-muted-foreground mb-6">Escribinos por WhatsApp y te responderemos a la brevedad.</p>
                    <Button variant="outline" className="bg-background hover:bg-muted rounded-full px-8" asChild>
                        <Link href="https://wa.me/5491130246736">Contactar por WhatsApp</Link>
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    )
}
