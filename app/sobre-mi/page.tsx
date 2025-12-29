"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Award, BookOpen, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"


export default function AboutPage() {
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
        <div className="bg-background">
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">Sobre el Dr. Javier Stigliano</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Especialista en Mastología y Ginecología con una sólida trayectoria hospitalaria, académica y de investigación.
                    </p>
                </motion.div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        variants={staggerContainer}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-12 items-start"
                    >
                        {/* Photo Side */}
                        <motion.div variants={fadeIn} className="w-full md:w-1/3 sticky top-24">
                            <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden relative shadow-lg group">
                                <img
                                    src="/dr-stigliano.jpg"
                                    alt="Dr. Javier Stigliano - Foto Vertical"
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

                        {/* Content Side */}
                        <motion.div variants={fadeIn} className="w-full md:w-2/3 space-y-12">

                            {/* Bio intro */}
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed text-muted-foreground italic">
                                    "Mi compromiso es brindar una atención médica de excelencia, basada en la evidencia científica y la calidez humana."
                                </p>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Soy médico especialista en <strong>Ginecología y Obstetricia</strong> y <strong>Mastología</strong>, con un enfoque integral en la salud de la mujer. Mi práctica combina la rigurosidad científica, fruto de años de experiencia hospitalaria de alta complejidad, con un trato humano y personalizado.
                                </p>
                            </div>

                            {/* Positions */}
                            <motion.div variants={fadeIn}>
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Building className="w-6 h-6 text-primary" /> Cargos Actuales
                                </h2>
                                <div className="grid gap-4">
                                    <Card className="border-l-4 border-l-primary shadow-sm bg-card hover:shadow-md transition-shadow">
                                        <CardContent className="pt-6">
                                            <h3 className="font-semibold text-lg text-foreground">Hospital Nacional Posadas</h3>
                                            <ul className="mt-2 space-y-1 text-muted-foreground">
                                                <li>• Jefe de Patología Mamaria</li>
                                                <li>• Director de la Unidad de Mastología</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-l-4 border-l-teal-500 shadow-sm bg-teal-50/30 dark:bg-teal-900/10 hover:shadow-md transition-shadow">
                                        <CardContent className="pt-6">
                                            <h3 className="font-semibold text-lg text-foreground">Universidad de Buenos Aires (UBA)</h3>
                                            <ul className="mt-2 space-y-1 text-muted-foreground">
                                                <li>• Profesor Adjunto de Ginecología</li>
                                                <li>• Coordinador de la Unidad Docente Hospitalaria Posadas</li>
                                                <li>• Director de la Sede Posadas (Carrera Mastología)</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>

                            {/* Education */}
                            <motion.div variants={fadeIn}>
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <BookOpen className="w-6 h-6 text-primary" /> Formación Académica
                                </h2>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Especialista Universitaria en Ginecología", org: "Universidad de Buenos Aires (UBA)" },
                                        { title: "Especialista en Mastología", org: "Sociedad Argentina de Mastología (SAMAS)" },
                                        { title: "Médico Legista", org: "Universidad Católica Argentina (UCA)" },
                                        { title: "Magister en Educación para Profesionales de la Salud", org: "" },
                                    ].map((edu, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-foreground">{edu.title}</h4>
                                                {edu.org && <p className="text-muted-foreground text-sm">{edu.org}</p>}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Distinctions */}
                            <motion.div variants={fadeIn}>
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Award className="w-6 h-6 text-amber-500" /> Distinciones
                                </h2>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li className="bg-amber-50/50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-100 dark:border-amber-900/30">
                                        <strong className="text-foreground">Personalidad Destacada en Salud</strong> <br />
                                        <span className="text-sm">Legislatura CABA (2021)</span>
                                    </li>
                                    <li className="bg-muted/50 p-4 rounded-lg border border-border">
                                        <strong className="text-foreground">Prize to the Leader in Research</strong> (2019)
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
