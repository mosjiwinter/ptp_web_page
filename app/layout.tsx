import type React from "react"
import type { Metadata } from "next"
import { Prompt, Noto_Sans_Thai } from "next/font/google"
import "./globals.css"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const prompt = Prompt({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-prompt",
  display: "swap",
})

// Define the Noto Sans Thai font for Thai text
const notoThai = Noto_Sans_Thai({
  weight: ["400", "500", "600", "700"],
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
})

export const metadata: Metadata = {
  title: "OilTrans - Oil Transportation & Tank Maintenance",
  description: "Professional oil transportation and tank maintenance services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className={`${prompt.variable} ${notoThai.variable}`}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </body>
  </html>
  )
}

