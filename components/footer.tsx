import Link from "next/link"
import { Facebook, Fuel, Instagram,  Mail, MapPin, Phone } from "lucide-react"
import { MultiLanguageText } from "@/components/multi-language-text"

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-200">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Fuel className="h-6 w-6 text-amber-400" />
              <span className="text-xl font-bold text-white">PTP Trans</span>
            </Link>
            <p className="mt-4 max-w-xs">
            PTP Tank & Trailer Co., Ltd.
            </p>
            <p className="mt-4 max-w-xs">
            (Chang Jin Transport Co., Ltd.)
            </p>
            <p className="mt-4 max-w-xs">
               <MultiLanguageText
               en="Professional oil transportation and tank maintenance services for the energy industry."
               th="บริการขนส่งน้ำมันและบำรุงรักษาถังระดับมืออาชีพสำหรับอุตสาหกรรมพลังงาน"/>

            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-400">
                <MultiLanguageText
                en="Home"
                th="หน้าหลัก"/>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400">
                <MultiLanguageText
                en="About Us"
                th="เกี่ยวกับเรา"/>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400">
                  <MultiLanguageText
                  en="Services"
                  th="บริการ"/>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400">
                  <MultiLanguageText
                  en="Contact"
                  th="ติดต่อ"/>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#transportation" className="hover:text-amber-400">
                <MultiLanguageText
                en="Oil Transportation"
                th="การขนส่งน้ำมัน"/>
                </Link>
              </li>
              <li>
                <Link href="/services#construction" className="hover:text-amber-400">
                <MultiLanguageText
                en="Oil Tank Construction"
                th="การสร้างแท้งน้ำมัน"/>
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="hover:text-amber-400">
                <MultiLanguageText
                en="Tank Maintenance Services"
                th="บริการบำรุงรักษาถัง"/>
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="hover:text-amber-400">
                <MultiLanguageText
                en="Oil Tank Consulting"
                th="การให้คำปรึกษาเกี่ยวกับถังน้ำมัน"/>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+660-657-8988
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>info@oiltrans.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span>
                <MultiLanguageText
                    en="61 Moo 9, Suan Dok Mai Subdistrict, Sao Hai District, Saraburi"
                    th="61 หมู่ 9 ตำบลสวนดอกไม้ อำเภอเสาไห้ จังหวัดสระบุรี"/>
                </span>
              </li>
              <li className="mt-4 flex items-center gap-4">
                <Link href="https://facebook.com" className="hover:text-amber-400">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://instagram.com" className="hover:text-amber-400">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>

              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} OilTrans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

