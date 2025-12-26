import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
    title: "Sobre el Dr. Javier Stigliano | Trayectoria y Formación",
    description: "Conoce la trayectoria del Dr. Javier Stigliano, Jefe de Patología Mamaria del Hospital Posadas y docente de la UBA.",
}

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Premium Header */}
            <section className="relative bg-muted/30 dark:bg-background py-16 md:py-24 text-foreground overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                </div>

                {/* Spotlight Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-primary/10 dark:to-transparent pointer-events-none" />

                {/* Bottom Fade - Smooth transition to content */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

                <div className="container relative mx-auto px-4 text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">Sobre el Dr. Javier Stigliano</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Especialista en Mastología y Ginecología con una sólida trayectoria hospitalaria, académica y de investigación.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Photo Side */}
                        <div className="w-full md:w-1/3 sticky top-24">
                            <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden relative shadow-lg">
                                <img
                                    src="/dr-stigliano.jpg"
                                    alt="Dr. Javier Stigliano - Foto Vertical"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-6 flex flex-col gap-3">
                                <Button className="w-full" asChild>
                                    <Link href="/contacto">Solicitar Turno</Link>
                                </Button>
                                <Button variant="outline" className="w-full" asChild>
                                    <Link href="/especialidades">Ver Especialidades</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-2/3 space-y-12">

                            {/* Bio intro */}
                            <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Soy médico especialista en <strong>Ginecología y Obstetricia</strong> y <strong>Mastología</strong>, con un enfoque integral en la salud de la mujer. Mi práctica combina la rigurosidad científica, fruto de años de experiencia hospitalaria de alta complejidad, con un trato humano y personalizado.
                                </p>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    Actualmente me desempeño como <strong>Jefe de Patología Mamaria</strong> y Director de la Unidad de Mastología del Hospital Nacional Posadas, centro de referencia nacional.
                                </p>
                            </div>

                            {/* Positions */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Building className="w-6 h-6 text-primary" /> Cargos Actuales
                                </h2>
                                <div className="grid gap-4">
                                    <Card className="border-l-4 border-l-primary shadow-sm bg-card">
                                        <CardContent className="pt-6">
                                            <h3 className="font-semibold text-lg text-foreground">Hospital Nacional Posadas</h3>
                                            <ul className="mt-2 space-y-1 text-muted-foreground">
                                                <li>• Jefe de Patología Mamaria</li>
                                                <li>• Director de la Unidad de Mastología</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-l-4 border-l-teal-500 shadow-sm bg-teal-50/30 dark:bg-teal-950/30">
                                        <CardContent className="pt-6">
                                            <h3 className="font-semibold text-lg text-foreground">Universidad de Buenos Aires (UBA)</h3>
                                            <ul className="mt-2 space-y-1 text-muted-foreground">
                                                <li>• Profesor Adjunto de Ginecología (UDH Posadas)</li>
                                                <li>• Coordinador de la Unidad Docente Hospitalaria Posadas</li>
                                                <li>• Jefe de Trabajos Prácticos de Anatomía</li>
                                                <li>• Director de la Sede Posadas (Carrera Especialista en Mastología)</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* Education */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <BookOpen className="w-6 h-6 text-primary" /> Formación Académica
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex gap-4 items-start">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-foreground">Especialista Universitaria en Ginecología</h4>
                                            <p className="text-muted-foreground">Universidad de Buenos Aires (UBA)</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-foreground">Especialista en Mastología</h4>
                                            <p className="text-muted-foreground">Sociedad Argentina de Mastología (SAMAS)</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-foreground">Médico Legista</h4>
                                            <p className="text-muted-foreground">Universidad Católica Argentina (UCA)</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-foreground">Magister en Educación para Profesionales de la Salud</h4>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-foreground">Magister en Dirección de Centros de Salud</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Distinctions */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Award className="w-6 h-6 text-amber-500" /> Distinciones
                                </h2>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li className="bg-amber-50/50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-100 dark:border-amber-900">
                                        <strong className="text-foreground">Personalidad Destacada en el ámbito de la Salud</strong> <br />
                                        <span className="text-sm">Legislatura de la Ciudad Autónoma de Buenos Aires (2021)</span>
                                    </li>
                                    <li className="bg-muted p-4 rounded-lg border border-border">
                                        <strong className="text-foreground">Prize to the Leader in Research and Health Sciences</strong> (Medellín, Col. 2019)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
