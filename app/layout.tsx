import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

export const metadata: Metadata = {
  title: "Re: AI-Enabled Circular R&D Engine",
  description:
    "Use AI to redesign your clothes and bring them to life through collaborative upcycling. A playground for wardrobe reinvention.",
  generator: "v0.app",
}

const Brockmann = localFont({
  src: [
    { path: "../public/fonts/brockmann-medium-webfont.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/brockmann-medium.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${Brockmann.variable}`}>{children}</body>
    </html>
  )
}
