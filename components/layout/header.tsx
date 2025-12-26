"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Phone, Calendar } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Inicio", href: "/" },
        { name: "Especialidades", href: "/especialidades" },
        { name: "Sobre el Doctor", href: "/sobre-mi" },
        { name: "Preguntas Frecuentes", href: "/faq" },
        { name: "Contacto", href: "/contacto" },
    ]

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-transparent",
                isScrolled ? "shadow-sm border-border" : ""
            )}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo area */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="font-bold text-xl">JS</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg leading-none text-primary">Dr. Javier Stigliano</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Mastología y Ginecología</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors hover:text-primary",
                                    isActive ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all" />
                                )}
                            </Link>
                        )
                    })}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <ModeToggle />
                    <Button variant="outline" size="sm" asChild className="hidden lg:flex">
                        <Link href="https://wa.me/5491130246736" target="_blank">
                            <Phone className="w-4 h-4 mr-2" />
                            WhatsApp
                        </Link>
                    </Button>
                    <Button asChild className="bg-primary hover:bg-primary/90">
                        <Link href="/contacto#turnos">
                            <Calendar className="w-4 h-4 mr-2" />
                            Pedir Turno
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="w-6 h-6" />
                            <span className="sr-only">Menú</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[350px] border-l-border p-6 pt-14 bg-background">
                        <div className="flex flex-col h-full">
                            <div className="border-b border-dashed border-border pb-6 mb-2">
                                <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary shadow-sm shadow-primary/10 rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg">
                                        JS
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-lg text-foreground leading-none tracking-tight">Dr. Javier Stigliano</span>
                                        <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mt-1">Mastología y Ginecología</span>
                                    </div>
                                </div>
                            </div>

                            <nav className="flex-1 flex flex-col gap-1">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center justify-between text-base font-medium px-3 py-3 rounded-lg transition-colors border-l-2",
                                                isActive
                                                    ? "text-primary bg-primary/5 border-l-primary font-bold shadow-sm"
                                                    : "text-muted-foreground hover:text-primary hover:bg-muted border-l-transparent"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </nav>

                            <div className="mt-auto pt-6 border-t space-y-3">
                                <div className="flex items-center justify-between px-1 mb-2">
                                    <span className="text-sm font-medium text-muted-foreground">Tema</span>
                                    <ModeToggle />
                                </div>
                                <Button className="w-full justify-center bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/10" size="lg" asChild>
                                    <Link href="/contacto#turnos">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Solicitar Turno
                                    </Link>
                                </Button>
                                <Button variant="outline" className="w-full justify-center border-border text-foreground hover:bg-muted hover:text-primary" size="lg" asChild>
                                    <Link href="https://wa.me/5491130246736">
                                        <Phone className="w-4 h-4 mr-2" />
                                        WhatsApp
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
