"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen">

            {/* Header */}
            <section className="relative bg-muted/30 dark:bg-background py-16 md:py-24 text-foreground overflow-hidden">
                {/* Background Pattern - Modern Dot Grid */}
                <div className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                </div>

                {/* Spotlight Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-primary/10 dark:to-transparent pointer-events-none" />

                {/* Bottom Fade - Smooth transition to content */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

                <div className="container relative mx-auto px-4 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">Contacto y Turnos</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Estamos para atenderte. Reserva tu turno online de forma rápida o contáctanos por WhatsApp para consultas.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 -mt-8">

                {/* Quick Actions Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12" id="turnos">
                    {/* DrApp Card */}
                    <Card className="bg-card hover:shadow-lg transition-all border-l-4 border-l-teal-500 overflow-hidden relative">
                        <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Recomendado</div>
                        <CardContent className="pt-8 pb-8 flex flex-col items-center text-center space-y-4">
                            <div className="h-16 w-16 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 mb-2">
                                <Calendar className="h-8 w-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">Turnos Online</h2>
                            <p className="text-muted-foreground max-w-sm">
                                Gestiona tu turno de manera autónoma las 24hs a través de nuestra plataforma digital.
                            </p>
                            <Button size="lg" className="w-full max-w-xs bg-teal-600 hover:bg-teal-700 text-white" asChild>
                                <a href="https://consultorioginecologiaymastologiastigliano.drapp.com.ar" target="_blank" rel="noopener noreferrer">
                                    Reservar Turno Ahora
                                </a>
                            </Button>
                            <p className="text-xs text-muted-foreground mt-2">Plataforma segura DrApp</p>
                        </CardContent>
                    </Card>

                    {/* WhatsApp Card */}
                    <Card className="bg-card hover:shadow-lg transition-all border-l-4 border-l-green-500">
                        <CardContent className="pt-8 pb-8 flex flex-col items-center text-center space-y-4">
                            <div className="h-16 w-16 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                                <MessageCircle className="h-8 w-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">WhatsApp</h2>
                            <p className="text-muted-foreground max-w-sm">
                                Escribinos para consultas puntuales o urgencias. Te responderemos a la brevedad.
                            </p>
                            <Button size="lg" variant="outline" className="w-full max-w-xs border-green-600 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/30" asChild>
                                <a href="https://wa.me/5491130246736" target="_blank" rel="noopener noreferrer">
                                    Enviar Mensaje
                                </a>
                            </Button>
                            <p className="text-xs text-muted-foreground mt-2">Respuesta habitual: Lun a Vie 9-18hs</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Contact Form */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border">
                            <h3 className="text-2xl font-semibold mb-6 text-foreground">Envíanos un mensaje</h3>
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Nombre y Apellido</Label>
                                        <Input id="name" placeholder="Tu nombre" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Teléfono</Label>
                                        <Input id="phone" placeholder="Ej: 11 1234 5678" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="tu@email.com" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Motivo de consulta</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona un motivo" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="turno">Consulta por Turnos</SelectItem>
                                            <SelectItem value="mastologia">Consulta Mastología</SelectItem>
                                            <SelectItem value="ginecologia">Consulta Ginecología</SelectItem>
                                            <SelectItem value="otro">Otro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Mensaje</Label>
                                    <Textarea id="message" placeholder="¿En qué podemos ayudarte?" className="min-h-[120px]" />
                                </div>

                                <Button type="submit" className="w-full md:w-auto px-8">
                                    Enviar Mensaje
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Locations Info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-foreground">Nuestros Consultorios</h3>

                        {/* Location 1 */}
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-foreground">Consultorio Haedo</h4>
                                        <p className="text-sm text-muted-foreground">Remedios de Escalada de San Martín 47, 1º piso Dto D</p>
                                        <p className="text-sm text-muted-foreground/80 mt-1">Haedo, Provincia de Buenos Aires</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-primary shrink-0" />
                                    <p className="text-sm text-muted-foreground">Jueves: 14:00 - 18:00 hs</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary shrink-0" />
                                    <p className="text-sm text-muted-foreground">2081-6169</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Location 2 */}
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-foreground">Clínica Santa Isabel</h4>
                                        <p className="text-sm text-muted-foreground">Atención Externa</p>
                                        <p className="text-sm text-muted-foreground/80 mt-1">CABA</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-primary shrink-0" />
                                    <p className="text-sm text-muted-foreground">Lunes: 16:00 - 20:00 hs</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary shrink-0" />
                                    <p className="text-sm text-muted-foreground">4670-8000</p>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-4 flex gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0" />
                            <p className="text-sm text-amber-800 dark:text-amber-300">
                                <strong>Importante:</strong> Si decide asistir sin turno previo, por favor confirme telefónicamente que el Dr. se encuentre atendiendo.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
