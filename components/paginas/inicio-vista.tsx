"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { tinaField, useTina } from "tinacms/dist/react"
import { ArrowRight, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { IconoContenido } from "@/components/icono-contenido"
import { FotoContenido } from "@/components/foto-contenido"
import { estiloDeColor, linkWhatsapp } from "@/lib/estilos-contenido"
import type { ContenidoTina } from "@/lib/contenido"
import type { InicioQuery } from "@/tina/__generated__/types"
import datosSitio from "@/content/sitio/datos.json"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
}

export function InicioVista(props: ContenidoTina<InicioQuery>) {
  const { data } = useTina(props)
  const pagina = data.inicio
  const { portada, credenciales, areas, trayectoria, llamado } = pagina

  return (
    <div className="flex flex-col min-h-screen">

      {/* Portada */}
      <section className="relative bg-background pt-8 pb-20 md:py-24 lg:py-32 text-foreground overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
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
            {portada?.etiqueta && (
              <div data-tina-field={tinaField(portada, "etiqueta")} className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                {portada.etiqueta}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
              <span data-tina-field={tinaField(portada, "tituloAntes")}>{portada?.tituloAntes}</span>{" "}
              <span data-tina-field={tinaField(portada, "tituloDestacado")} className="text-primary">{portada?.tituloDestacado}</span>
              {portada?.tituloDespues && (
                <>
                  , <br className="hidden md:block" />
                  <span data-tina-field={tinaField(portada, "tituloDespues")}>{portada.tituloDespues}</span>
                </>
              )}
            </h1>
            <p data-tina-field={tinaField(portada, "subtitulo")} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {portada?.subtitulo}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 text-base" asChild>
                <Link href="/contacto#turnos" data-tina-field={tinaField(portada, "botonPrincipal")}>
                  {portada?.botonPrincipal} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-input bg-background/50 hover:bg-accent hover:text-accent-foreground" asChild>
                <Link href="/sobre-mi" data-tina-field={tinaField(portada, "botonSecundario")}>
                  {portada?.botonSecundario}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credenciales */}
      <section className="py-12 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {credenciales?.map((credencial, indice: number) => credencial && (
              <motion.div key={indice} variants={fadeIn} data-tina-field={tinaField(credencial)} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <IconoContenido nombre={credencial.icono} className="w-8 h-8" />
                </div>
                <div>
                  <h3 data-tina-field={tinaField(credencial, "titulo")} className="font-semibold text-lg text-foreground">{credencial.titulo}</h3>
                  <p data-tina-field={tinaField(credencial, "subtitulo")} className="text-sm text-muted-foreground">{credencial.subtitulo}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Áreas de atención */}
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
            <h2 data-tina-field={tinaField(areas, "titulo")} className="text-3xl font-bold text-foreground mb-4">{areas?.titulo}</h2>
            <p data-tina-field={tinaField(areas, "texto")} className="text-muted-foreground">{areas?.texto}</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {areas?.tarjetas?.map((tarjeta, indice: number) => {
              if (!tarjeta) return null
              const estilo = estiloDeColor(tarjeta.color)
              return (
                <motion.div key={indice} variants={fadeIn}>
                  <Card data-tina-field={tinaField(tarjeta)} className={`hover:shadow-lg transition-shadow border-t-4 ${estilo.borde} bg-card text-card-foreground`}>
                    <CardHeader>
                      <div className={`w-12 h-12 ${estilo.fondoIcono} rounded-lg flex items-center justify-center ${estilo.textoIcono} mb-4`}>
                        <IconoContenido nombre={tarjeta.icono} className="w-6 h-6" />
                      </div>
                      <CardTitle data-tina-field={tinaField(tarjeta, "titulo")} className="text-xl">{tarjeta.titulo}</CardTitle>
                      <CardDescription data-tina-field={tinaField(tarjeta, "subtitulo")}>{tarjeta.subtitulo}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6 text-muted-foreground text-sm">
                        {tarjeta.puntos?.map((punto, indicePunto: number) => (
                          <li key={indicePunto} data-tina-field={tinaField(tarjeta, "puntos", indicePunto)} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${estilo.vineta}`} /> {punto}
                          </li>
                        ))}
                      </ul>
                      {tarjeta.enlace && (
                        <Button variant="link" className={`p-0 h-auto ${estilo.enlace} font-semibold`} asChild>
                          <Link href={tarjeta.enlace}>Saber más <ArrowRight className="w-4 h-4 ml-1" /></Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Trayectoria */}
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
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
              <div data-tina-field={tinaField(trayectoria, "foto")} className="aspect-square rounded-2xl bg-muted overflow-hidden relative shadow-2xl skew-y-3 transition-transform duration-500 group-hover:skew-y-0 group-hover:scale-[1.02]">
                <FotoContenido src={trayectoria?.foto} alt={datosSitio.nombre} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
            </motion.div>
            <motion.div variants={fadeIn} className="md:w-1/2 space-y-6">
              <h2 data-tina-field={tinaField(trayectoria, "titulo")} className="text-3xl font-bold text-foreground">{trayectoria?.titulo}</h2>
              <p data-tina-field={tinaField(trayectoria, "parrafoDestacado")} className="text-lg text-muted-foreground leading-relaxed">{trayectoria?.parrafoDestacado}</p>
              <p data-tina-field={tinaField(trayectoria, "parrafo")} className="text-muted-foreground">{trayectoria?.parrafo}</p>
              <Button asChild>
                <Link href="/sobre-mi" data-tina-field={tinaField(trayectoria, "boton")}>{trayectoria?.boton}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Llamado final */}
      <section className="py-24 bg-muted/30 dark:bg-muted/10 text-foreground relative overflow-hidden border-y border-border">
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
            <h2 data-tina-field={tinaField(llamado, "titulo")} className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{llamado?.titulo}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              <span data-tina-field={tinaField(llamado, "texto")}>{llamado?.texto}</span> <br />
              <span data-tina-field={tinaField(llamado, "ubicaciones")}>{llamado?.ubicaciones}</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 text-lg font-semibold shadow-lg transition-all hover:scale-105" asChild>
                <Link href="/contacto#turnos" data-tina-field={tinaField(llamado, "botonTurno")}>
                  <Calendar className="mr-2 w-5 h-5" /> {llamado?.botonTurno}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-lg font-semibold transition-all hover:scale-105 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-background bg-transparent shadow-sm"
                asChild
              >
                <Link href={linkWhatsapp(datosSitio.whatsapp)} target="_blank" data-tina-field={tinaField(llamado, "botonWhatsapp")}>
                  <MessageCircle className="mr-2 w-5 h-5" /> {llamado?.botonWhatsapp}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
