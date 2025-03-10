import Link from "next/link"
import { ArrowRight, CheckCircle, Fuel, MapPin, Phone, TruckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FormattedDate } from "@/components/formatted-date"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20 text-white">
        <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Premier Oil Transport & Tank Maintenance
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl">
                  Reliable oil transportation and expert tank maintenance services for the energy industry.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/services">
                  <Button size="lg" className="bg-amber-500 text-black hover:bg-amber-400">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-4 text-muted-foreground">Comprehensive solutions for the oil industry</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
              <div className="mb-4 rounded-full bg-amber-100 p-3">
                <TruckIcon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Oil Transportation</h3>
              <p className="text-muted-foreground">
                Safe and efficient transportation of oil products with our modern fleet of tankers.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
              <div className="mb-4 rounded-full bg-amber-100 p-3">
                <Fuel className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Tank Construction</h3>
              <p className="text-muted-foreground">
                Custom design and construction of oil storage tanks built to international standards.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
              <div className="mb-4 rounded-full bg-amber-100 p-3">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Maintenance Services</h3>
              <p className="text-muted-foreground">
                Comprehensive maintenance and repair services for all types of oil storage facilities.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-zinc-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Our Company</h2>
              <p className="text-muted-foreground">
                With over 20 years of experience in the oil industry, we've built a reputation for reliability, safety,
                and excellence in all our operations.
              </p>
              <p className="text-muted-foreground">
                Our team of experts is dedicated to providing the highest quality services for oil transportation and
                tank maintenance.
              </p>
              <div>
                <Link href="/about">
                  <Button variant="outline">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Oil storage facility"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Latest News</h2>
            <p className="mt-4 text-muted-foreground">Stay updated with our company news and industry insights</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border bg-card shadow-sm">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="News image"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="text-sm text-muted-foreground">
                  <FormattedDate date={new Date(2023, 11, 15)} />
                </div>
                <h3 className="mt-2 text-xl font-bold">ใหม่ Fleet Expansion</h3>
                <p className="mt-2 text-muted-foreground">
                  We're excited to announce the expansion of our transportation fleet with 10 new tanker trucks.
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border bg-card shadow-sm">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="News image"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="text-sm text-muted-foreground">
                  <FormattedDate date={new Date(2023, 10, 28)} />
                </div>
                <h3 className="mt-2 text-xl font-bold">Safety Award Recognition</h3>
                <p className="mt-2 text-muted-foreground">
                  OilTrans has been recognized with the Industry Safety Excellence Award for the third consecutive year.
                </p>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border bg-card shadow-sm">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="News image"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="text-sm text-muted-foreground">
                  <FormattedDate date={new Date(2023, 9, 10)} />
                </div>
                <h3 className="mt-2 text-xl font-bold">New Maintenance Facility</h3>
                <p className="mt-2 text-muted-foreground">
                  We've opened a new state-of-the-art maintenance facility to better serve our clients in the eastern
                  region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="bg-zinc-900 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
              <p className="text-zinc-200">
                Contact us today to discuss your oil transportation and tank maintenance needs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <span>080-657-8988</span>
                  <span>(office)</span> 
                  <span>or</span>
                  <span>085-496-3556</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  {/* <span>PTP Tank & Trailer Co., Ltd. (Chang Jin Transport Co., Ltd.)</span> */}
                  <span>61 Moo 9, Suan Dok Mai Subdistrict, Sao Hai District, Saraburi</span>
                </div>
              </div>
              <div>
                <Link href="/contact">
                  <Button className="bg-amber-500 text-black hover:bg-amber-400">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            {/* <div className="overflow-hidden rounded-lg">
              <img

                // src="/placeholder.svg?height=600&width=800"
                alt="Contact our team"
                className="h-full w-full object-cover"
              />
            </div> */
            }
            <div className="overflow-hidden rounded-lg">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.0576306281832!2d100.87396565255047!3d14.524896970444074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311de9d756100395%3A0xe5349d7195ee0dcd!2z4Lia4LiI4LiBLuC4nuC4teC4l-C4teC4nuC4tSDguYHguJfguIfguITguYwg4LmB4Lit4LiZ4LiU4LmM4LmA4LiX4Lij4Lil4LmA4Lil4Lit4Lij4LmMICjguJrguIjguIEu4LiK4LmI4Liy4LiH4LiI4Li04LmJ4LiZIOC4l-C4o-C4suC4meC4quC4m-C4reC4o-C5jOC4lSkg4LiL4LmI4Lit4LihIOC4quC4o-C5ieC4suC4hyDguYHguJfguIfguIHguYzguJnguYnguLPguKHguLHguJkg4Lia4Lix4LiX4LiX4Lit4Lih4LmC4Lir4Lil4LiUIOC4p-C4seC4lOC4meC5ieC4syDguILguJnguKrguYjguIfguJnguYnguLPguKHguLHguJk!5e0!3m2!1sen!2sth!4v1741598666769!5m2!1sen!2sth"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

