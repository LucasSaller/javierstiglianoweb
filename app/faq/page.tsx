import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
    title: "Preguntas Frecuentes | Dr. Javier Stigliano",
    description: "Respuestas a dudas comunes sobre mastología, ginecología, turnos y coberturas.",
}

export default function FAQPage() {
    return (
        <div className="bg-background min-h-screen pb-20">
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">Preguntas Frecuentes</h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Resolvemos tus dudas principales antes de la consulta.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <Accordion type="single" collapsible className="w-full space-y-4">

                    <AccordionItem value="item-1" className="border border-border rounded-lg px-4 bg-card shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-foreground">¿Cómo solicito un turno?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Podes solicitar turno las 24hs a través de nuestra plataforma online DrApp haciendo clic en el botón "Reservar Turno" de este sitio. También podes escribirnos por WhatsApp para consultas específicas o urgencias.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-border rounded-lg px-4 bg-card shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-foreground">¿Qué obras sociales atienden?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Atendemos de forma particular y por OSDE y OMINT. Para otras coberturas, emitimos factura para reintegro, pero te sugerimos consultar previamente con tu obra social los montos a reintegrar.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-border rounded-lg px-4 bg-card shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-foreground">¿A partir de qué edad debo hacerme una mamografía?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            La Sociedad Argentina de Mastología recomienda una mamografía anual a partir de los 40 años en mujeres asintomáticas y sin antecedentes directos. Si tenés antecedentes familiares de cáncer de mama, consultá para iniciar los controles antes (generalmente 10 años antes de la edad de diagnóstico del familiar).
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-border rounded-lg px-4 bg-card shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-foreground">¿Es dolorosa la punción mamaria?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Es un procedimiento tolerado muy bien por la mayoría de las pacientes. Se utiliza anestesia local para minimizar las molestias. Es un estudio rápido y fundamental para el diagnóstico preciso de nódulos o calcificaciones.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border border-border rounded-lg px-4 bg-card shadow-sm">
                        <AccordionTrigger className="text-lg font-medium text-foreground">¿Debo llevar estudios previos a la consulta?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Sí, es muy importante que traigas todos tus estudios anteriores (mamografías, ecografías, resonancias, biopsias), no solo los informes sino también las imágenes. Esto nos permite evaluar la evolución y cambios a lo largo del tiempo.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

                <div className="mt-12 p-6 bg-primary/5 rounded-xl text-center border border-primary/10">
                    <h3 className="font-semibold text-lg text-primary mb-2">¿No encontraste tu respuesta?</h3>
                    <p className="text-muted-foreground mb-4">Escribinos por WhatsApp y te responderemos a la brevedad.</p>
                    <Button variant="outline" className="bg-background hover:bg-muted" asChild>
                        <Link href="https://wa.me/5491130246736">Contactar por WhatsApp</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
