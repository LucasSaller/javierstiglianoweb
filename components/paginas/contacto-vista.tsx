"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { tinaField, useTina } from "tinacms/dist/react"
import { AlertCircle, Calendar, Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EncabezadoPagina } from "@/components/paginas/encabezado-pagina"
import { linkTelefono, linkWhatsapp } from "@/lib/estilos-contenido"
import type { ContenidoTina } from "@/lib/contenido"
import type { ContactoQuery, SitioQuery } from "@/tina/__generated__/types"

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

type PropsContacto = {
    contacto: ContenidoTina<ContactoQuery>
    sitio: ContenidoTina<SitioQuery>
}

export function ContactoVista({ contacto, sitio }: PropsContacto) {
    const pagina = useTina(contacto).data.contacto
    const datos = useTina(sitio).data.sitio

    const [nombreCompleto, setNombreCompleto] = useState<string>("")
    const [telefono, setTelefono] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [motivoConsulta, setMotivoConsulta] = useState<string>("")
    const [mensaje, setMensaje] = useState<string>("")
    const [errorFormulario, setErrorFormulario] = useState<string>("")

    const enviarPorWhatsapp = (evento: FormEvent<HTMLFormElement>): void => {
        evento.preventDefault()
        if (!nombreCompleto.trim() || !mensaje.trim()) {
            setErrorFormulario("Completá tu nombre y el mensaje para poder enviarlo.")
            return
        }
        setErrorFormulario("")
        const lineasEncabezado: string[] = [
            `Hola Dr. Stigliano, soy ${nombreCompleto.trim()}.`,
            motivoConsulta ? `Motivo: ${motivoConsulta}` : "",
            telefono.trim() ? `Teléfono: ${telefono.trim()}` : "",
            email.trim() ? `Email: ${email.trim()}` : "",
        ].filter((linea: string) => linea !== "")
        const textoCompleto: string = `${lineasEncabezado.join("\n")}\n\n${mensaje.trim()}`
        window.open(linkWhatsapp(datos.whatsapp, textoCompleto), "_blank", "noopener,noreferrer")
    }

    return (
        <div className="bg-background min-h-screen">
            <EncabezadoPagina encabezado={pagina.encabezado} />

            <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={staggerContainer}
                viewport={{ once: true }}
                className="container mx-auto px-4 py-12 -mt-8"
            >
                {/* Turnos y WhatsApp */}
                <div className="grid md:grid-cols-2 gap-6 mb-12" id="turnos">
                    <motion.div variants={fadeIn}>
                        <Card className="bg-card hover:shadow-lg transition-all border-l-4 border-l-teal-500 overflow-hidden relative group">
                            {pagina.turnosOnline?.etiqueta && (
                                <div data-tina-field={tinaField(pagina.turnosOnline, "etiqueta")} className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">{pagina.turnosOnline.etiqueta}</div>
                            )}
                            <CardContent className="pt-8 pb-8 flex flex-col items-center text-center space-y-4">
                                <div className="h-16 w-16 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 mb-2 transition-transform group-hover:scale-110">
                                    <Calendar className="h-8 w-8" />
                                </div>
                                <h2 data-tina-field={tinaField(pagina.turnosOnline, "titulo")} className="text-2xl font-bold text-foreground">{pagina.turnosOnline?.titulo}</h2>
                                <p data-tina-field={tinaField(pagina.turnosOnline, "texto")} className="text-muted-foreground max-w-sm">{pagina.turnosOnline?.texto}</p>
                                <Button size="lg" className="w-full max-w-xs bg-teal-600 hover:bg-teal-700 text-white rounded-full" asChild>
                                    <a href={datos.urlTurnosOnline || "#"} target="_blank" rel="noopener noreferrer" data-tina-field={tinaField(pagina.turnosOnline, "boton")}>
                                        {pagina.turnosOnline?.boton}
                                    </a>
                                </Button>
                                <p data-tina-field={tinaField(pagina.turnosOnline, "nota")} className="text-xs text-muted-foreground mt-2">{pagina.turnosOnline?.nota}</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                        <Card className="bg-card hover:shadow-lg transition-all border-l-4 border-l-green-500 group">
                            <CardContent className="pt-8 pb-8 flex flex-col items-center text-center space-y-4">
                                <div className="h-16 w-16 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-2 transition-transform group-hover:scale-110">
                                    <MessageCircle className="h-8 w-8" />
                                </div>
                                <h2 data-tina-field={tinaField(pagina.whatsapp, "titulo")} className="text-2xl font-bold text-foreground">{pagina.whatsapp?.titulo}</h2>
                                <p data-tina-field={tinaField(pagina.whatsapp, "texto")} className="text-muted-foreground max-w-sm">{pagina.whatsapp?.texto}</p>
                                <Button size="lg" variant="outline" className="w-full max-w-xs border-green-600 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/30 rounded-full" asChild>
                                    <a href={linkWhatsapp(datos.whatsapp)} target="_blank" rel="noopener noreferrer" data-tina-field={tinaField(pagina.whatsapp, "boton")}>
                                        {pagina.whatsapp?.boton}
                                    </a>
                                </Button>
                                <p data-tina-field={tinaField(pagina.whatsapp, "nota")} className="text-xs text-muted-foreground mt-2">{pagina.whatsapp?.nota}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Formulario */}
                    <motion.div variants={fadeIn} className="lg:col-span-2 space-y-8">
                        <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border">
                            <h3 data-tina-field={tinaField(pagina.formulario, "titulo")} className="text-2xl font-semibold mb-6 text-foreground">{pagina.formulario?.titulo}</h3>
                            <form className="space-y-4" onSubmit={enviarPorWhatsapp} noValidate>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Nombre y Apellido</Label>
                                        <Input id="name" placeholder="Tu nombre" className="rounded-lg" value={nombreCompleto} onChange={(e) => { setNombreCompleto(e.target.value); setErrorFormulario("") }} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Teléfono</Label>
                                        <Input id="phone" type="tel" placeholder="Ej: 11 1234 5678" className="rounded-lg" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="tu@email.com" className="rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Motivo de consulta</Label>
                                    <Select value={motivoConsulta} onValueChange={setMotivoConsulta}>
                                        <SelectTrigger className="rounded-lg" data-tina-field={tinaField(pagina.formulario, "motivos")}>
                                            <SelectValue placeholder="Seleccioná un motivo" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {pagina.formulario?.motivos?.filter((motivo): motivo is string => Boolean(motivo)).map((motivo: string) => (
                                                <SelectItem key={motivo} value={motivo}>{motivo}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Mensaje</Label>
                                    <Textarea id="message" placeholder="¿En qué podemos ayudarte?" className="min-h-[120px] rounded-lg" value={mensaje} onChange={(e) => { setMensaje(e.target.value); setErrorFormulario("") }} />
                                    {errorFormulario && <p className="text-sm text-destructive">{errorFormulario}</p>}
                                </div>
                                <Button type="submit" className="w-full md:w-auto px-8 rounded-full">
                                    <MessageCircle className="w-4 h-4 mr-2" /> Enviar por WhatsApp
                                </Button>
                                <p className="text-xs text-muted-foreground">Se abre WhatsApp con tu mensaje listo para enviar.</p>
                            </form>
                        </div>
                    </motion.div>

                    {/* Consultorios */}
                    <motion.div variants={fadeIn} className="space-y-6">
                        <h3 data-tina-field={tinaField(pagina, "tituloConsultorios")} className="text-xl font-semibold text-foreground">{pagina.tituloConsultorios}</h3>

                        {datos.consultorios?.map((consultorio, indice: number) => consultorio && (
                            <Card key={indice} data-tina-field={tinaField(consultorio)} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <div>
                                            <h4 data-tina-field={tinaField(consultorio, "nombre")} className="font-bold text-foreground">{consultorio.nombre}</h4>
                                            {consultorio.direccion && <p data-tina-field={tinaField(consultorio, "direccion")} className="text-sm text-muted-foreground text-left">{consultorio.direccion}</p>}
                                            {consultorio.localidad && <p data-tina-field={tinaField(consultorio, "localidad")} className="text-sm text-muted-foreground/80 mt-1 text-left">{consultorio.localidad}</p>}
                                        </div>
                                    </div>
                                    {consultorio.horario && (
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-5 h-5 text-primary shrink-0" />
                                            <p data-tina-field={tinaField(consultorio, "horario")} className="text-sm text-muted-foreground">{consultorio.horario}</p>
                                        </div>
                                    )}
                                    {consultorio.telefono && (
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-primary shrink-0" />
                                            <a href={linkTelefono(consultorio.telefono)} data-tina-field={tinaField(consultorio, "telefono")} className="text-sm text-muted-foreground hover:text-primary">{consultorio.telefono}</a>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}

                        <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                            {datos.email && (
                                <a href={`mailto:${datos.email}`} data-tina-field={tinaField(datos, "email")} className="flex items-center gap-3 text-muted-foreground hover:text-primary break-all">
                                    <Mail className="w-5 h-5 text-primary shrink-0" /> {datos.email}
                                </a>
                            )}
                            {datos.instagram && (
                                <a href={`https://www.instagram.com/${datos.instagram}`} target="_blank" rel="noopener noreferrer" data-tina-field={tinaField(pagina, "textoInstagram")} className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                                    <Instagram className="w-5 h-5 text-primary shrink-0" /> {pagina.textoInstagram}: @{datos.instagram}
                                </a>
                            )}
                        </div>

                        {pagina.avisoSinTurno && (
                            <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl p-4 flex gap-3">
                                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0" />
                                <p data-tina-field={tinaField(pagina, "avisoSinTurno")} className="text-sm text-amber-800 dark:text-amber-200 text-left">
                                    <strong>Importante:</strong> {pagina.avisoSinTurno}
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
