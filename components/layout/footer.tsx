import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">JS</div>
                            <span className="font-bold text-lg text-primary">Dr. Javier Stigliano</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Especialista en Mastología, Ginecología y Obstetricia. Atención humanizada con evidencia científica y sólida trayectoria hospitalaria.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            {/* Add more social if confirmed */}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="font-semibold text-primary mb-4">Navegación</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link></li>
                            <li><Link href="/sobre-mi" className="text-muted-foreground hover:text-primary transition-colors">Sobre el Doctor</Link></li>
                            <li><Link href="/especialidades" className="text-muted-foreground hover:text-primary transition-colors">Especialidades</Link></li>
                            <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">Preguntas Frecuentes</Link></li>
                            <li><Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-primary mb-4">Información de Contacto</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-primary">Consultorio Haedo</strong>
                                        <span className="text-muted-foreground block">Remedios de Escalada de San Martín 47, 1º D</span>
                                        <span className="text-muted-foreground block">Haedo, Buenos Aires</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-secondary-foreground shrink-0" />
                                    <a href="tel:+541120816169" className="text-muted-foreground hover:text-primary">2081-6169</a>
                                </div>
                            </div>

                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-primary">Horarios de Atención</strong>
                                        <span className="text-muted-foreground block">Jueves: 14:00 - 18:00 hs</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-primary">Clínica Santa Isabel</strong>
                                        <span className="text-muted-foreground block">Lunes: 16:00 - 20:00 hs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Dr. Javier Stigliano. Todos los derechos reservados.</p>
                    <div className="mt-2 space-x-4">
                        <Link href="/legales" className="hover:underline">Aviso Legal</Link>
                        <Link href="/privacidad" className="hover:underline">Política de Privacidad</Link>
                    </div>
                    <p className="mt-4 text-[10px] text-muted-foreground/60">
                        La información en este sitio es educativa y no reemplaza la consulta profesional. Ante una emergencia, acuda a la guardia más cercana.
                    </p>
                </div>
            </div>
        </footer>
    )
}
