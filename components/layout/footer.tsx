import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"
import { linkTelefono } from "@/lib/estilos-contenido"
import datosSitio from "@/content/sitio/datos.json"

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">JS</div>
                            <span className="font-bold text-lg text-primary">{datosSitio.nombre}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {datosSitio.descripcionPie}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href={`https://www.instagram.com/${datosSitio.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" /> @{datosSitio.instagram}
                            </a>
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
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            {datosSitio.consultorios.map((consultorio) => (
                                <div key={consultorio.nombre} className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-primary">{consultorio.nombre}</strong>
                                        {consultorio.direccion && <span className="text-muted-foreground block">{consultorio.direccion}</span>}
                                        <span className="text-muted-foreground flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {consultorio.horario}</span>
                                        {consultorio.telefono && (
                                            <a href={linkTelefono(consultorio.telefono)} className="text-muted-foreground hover:text-primary flex items-center gap-1">
                                                <Phone className="w-3.5 h-3.5" /> {consultorio.telefono}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                                <a href={`mailto:${datosSitio.email}`} className="text-muted-foreground hover:text-primary break-all">{datosSitio.email}</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} {datosSitio.nombre}. Todos los derechos reservados.</p>
                    <p className="mt-4 text-[10px] text-muted-foreground/60">
                        {datosSitio.avisoLegal}
                    </p>
                </div>
            </div>
        </footer>
    )
}
