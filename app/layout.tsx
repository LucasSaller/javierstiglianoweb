import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter for clean medical look
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dr. Javier Stigliano | Mastología y Ginecología",
  description: "Especialista en Patología Mamaria, Ginecología y Obstetricia. Atención experta y humanizada en Haedo y CABA. Turnos online disponibles.",
  keywords: ["Mastólogo", "Ginecólogo", "Patología Mamaria", "Haedo", "Dr. Stigliano", "Salud Mujer", "Hospital Posadas"],
  openGraph: {
    title: "Dr. Javier Stigliano | Mastología y Ginecología",
    description: "Atención especializada en salud de la mujer. Prevención, diagnóstico y tratamiento.",
    type: "website",
    locale: "es_AR",
  }
};

import { ThemeProvider } from "@/components/theme-provider"

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
