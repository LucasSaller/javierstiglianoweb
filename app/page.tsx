"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, ShieldCheck, Award, HeartHandshake, Stethoscope, Baby, Clock, MapPin, Calendar, MessageCircle } from "lucide-react"

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
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
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-background pt-8 pb-20 md:py-24 lg:py-32 text-foreground overflow-hidden">
        {/* Background Patterns & Effects */}
        <div className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        {/* Spotlights */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full dark:opacity-20 pointer-events-none" />
        <div className="absolute top-0 -right-1/4 w-1/2 h-full bg-primary/20 skew-x-12 translate-x-10 blur-[120px] rounded-full dark:opacity-30 pointer-events-none" />
        <div className="absolute -bottom-1/2 left-1/4 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full dark:opacity-20 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6 text-left"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Atención en Haedo y CABA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Especialista en <span className="text-primary">Mastología</span> <br className="hidden md:block" />
              y Salud de la Mujer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Dr. Javier Stigliano. Diagnóstico preciso, tratamiento humano y acompañamiento integral. Jefe de Patología Mamaria del Hospital Posadas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base" asChild>
                <Link href="/contacto#turnos">
                  Solicitar Turno Online <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-input bg-background/50 hover:bg-accent hover:text-accent-foreground" asChild>
                <Link href="/sobre-mi">
                  Conocer al Doctor
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Hospital Posadas</h3>
                <p className="text-sm text-muted-foreground">Jefe de Patología Mamaria</p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Docente UBA</h3>
                <p className="text-sm text-muted-foreground">Profesor y Coordinador</p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Trato Humano</h3>
                <p className="text-sm text-muted-foreground">Acompañamiento cercano</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialties Preview */}
      <section className="py-24 bg-muted/30 relative text-foreground overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Áreas de Atención</h2>
            <p className="text-muted-foreground">
              Enfoque integral en la salud femenina, desde la prevención y el control anual hasta el diagnóstico y tratamiento de patologías complejas.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-primary bg-card text-card-foreground">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Mastología</CardTitle>
                  <CardDescription>Especialidad principal</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Diagnóstico de nódulos y patologías.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Punciones y biopsias mamarias.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Cirugía mamaria y reconstrucción.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Asesoramiento genético.</li>
                  </ul>
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold" asChild>
                    <Link href="/especialidades#mastologia">Saber más <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-chart-2 bg-card text-card-foreground">
                <CardHeader>
                  <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center text-chart-2 mb-4">
                    <Baby className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Ginecología Integral</CardTitle>
                  <CardDescription>Controles y Salud Femenina</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-chart-2" /> Control anual ginecológico (PAP/Colpo).</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-chart-2" /> Anticoncepción y planificación.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-chart-2" /> Menopausia y climaterio.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-chart-2" /> Salud reproductiva.</li>
                  </ul>
                  <Button variant="link" className="p-0 h-auto text-chart-2 font-semibold" asChild>
                    <Link href="/especialidades#ginecologia">Saber más <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <motion.div variants={fadeIn} className="md:w-1/2 relative group">
              {/* Decorative background for the photo */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="aspect-square rounded-2xl bg-muted overflow-hidden relative shadow-2xl skew-y-3 transition-transform duration-500 group-hover:skew-y-0 group-hover:scale-[1.02]">
                {/* Placeholder for Doctor's Photo */}
                <img
                  src="/dr-stigliano.jpg"
                  alt="Dr. Javier Stigliano"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
            </motion.div>
            <motion.div variants={fadeIn} className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Trayectoria y Compromiso</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como Jefe de Patología Mamaria del Hospital Nacional Posadas y docente de la UBA, combino la experiencia académica de alto nivel con una atención cálida y personalizada en el consultorio.
              </p>
              <p className="text-muted-foreground">
                Entiendo que la salud mamaria genera ansiedades y dudas. Mi objetivo es brindarte claridad, un diagnóstico preciso y el mejor camino terapéutico, acompañándote en cada paso.
              </p>
              <Button asChild>
                <Link href="/sobre-mi">Leer Bio Completa</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact / CTA */}
      <section className="py-24 bg-muted/30 dark:bg-muted/10 text-foreground relative overflow-hidden border-y border-border">
        {/* Subtle Background pattern */}
        <div className="absolute inset-0 w-full h-full opacity-[0.05] dark:opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Tu salud es prioridad</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Reserva tu turno de manera online o consulta por WhatsApp para urgencias. <br />
              Atención en Haedo y Clínica Santa Isabel.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 text-lg font-semibold shadow-lg transition-all hover:scale-105" asChild>
                <Link href="/contacto#turnos">
                  <Calendar className="mr-2 w-5 h-5" /> Reservar Turno
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-lg font-semibold transition-all hover:scale-105 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-background bg-transparent shadow-sm"
                asChild
              >
                <Link href="https://wa.me/5491130246736" target="_blank">
                  <MessageCircle className="mr-2 w-5 h-5" /> Enviar WhatsApp
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
