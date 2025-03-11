"use client"

import { useState } from "react"
import Link from "next/link"
import { Fuel, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MultiLanguageText } from "@/components/multi-language-text"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const closeSheet = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Fuel className="h-6 w-6 text-amber-600" />
          <span className="text-xl font-bold">OilTrans</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            <MultiLanguageText en="Home" th="หน้าหลัก" />
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            <MultiLanguageText en="About" th="เกี่ยวกับเรา" />
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            <MultiLanguageText en="Services" th="บริการ" />
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            <MultiLanguageText en="Contact" th="ติดต่อ" />
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contact" className="hidden md:block">
            <Button>
              <MultiLanguageText en="Get a Quote" th="ขอใบเสนอราคา" />
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 pt-6">
                <Link href="/" onClick={closeSheet} className="text-lg font-medium">
                  <MultiLanguageText en="Home" th="หน้าหลัก" />
                </Link>
                <Link href="/about" onClick={closeSheet} className="text-lg font-medium">
                  <MultiLanguageText en="About" th="เกี่ยวกับเรา" />
                </Link>
                <Link href="/services" onClick={closeSheet} className="text-lg font-medium">
                  <MultiLanguageText en="Services" th="บริการ" />
                </Link>
                <Link href="/contact" onClick={closeSheet} className="text-lg font-medium">
                  <MultiLanguageText en="Contact" th="ติดต่อ" />
                </Link>
                <Link href="/contact" onClick={closeSheet}>
                  <Button className="w-full">
                    <MultiLanguageText en="Get a Quote" th="ขอใบเสนอราคา" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

