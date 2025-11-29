import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for DGII validation page
export const metadata: Metadata = {
  title: "Sistema Datamatrix - Validación de Documentos | DGII",
  description:
    "Sistema de validación de documentos de placas provisionales de la Dirección General de Impuestos Internos",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

// ... existing code ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
