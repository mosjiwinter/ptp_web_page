import Link from "next/link"
import Image from "next/image";
import { ArrowRight, CheckCircle, Fuel, Shield, TruckIcon, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20 text-white">
        <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
            <p className="mt-4 text-xl text-zinc-200">
              Comprehensive solutions for oil transportation and tank maintenance
            </p>
          </div>
        </div>
      </section>

      {/* Oil Transportation */}
      <section id="transportation" className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Oil transportation"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">
                <TruckIcon className="mr-1 h-4 w-4" />
                Transportation
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Oil Transportation</h2>
              <div className="mt-6 space-y-4">
                <p>
                  We provide safe and efficient transportation of crude oil and refined petroleum products with our
                  modern fleet of tanker trucks and experienced drivers.
                </p>
                <p>Our oil transportation services include:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Long-distance crude oil transportation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Local delivery of refined petroleum products</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Emergency fuel delivery services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Specialized handling of hazardous materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Real-time shipment tracking and monitoring</span>
                  </li>
                </ul>
                <p>
                  All our transportation operations adhere to the highest safety standards and comply with all relevant
                  regulations to ensure the safe delivery of your valuable products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tank Construction */}
      <section id="construction" className="bg-zinc-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">
                <Fuel className="mr-1 h-4 w-4" />
                Construction
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Tank Construction</h2>
              <div className="mt-6 space-y-4">
                <p>
                  We design and construct custom oil storage tanks built to international standards and tailored to your
                  specific requirements. Our engineering team ensures that each tank meets the highest quality and
                  safety specifications.
                </p>
                <p>Our tank construction services include:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Above-ground storage tanks (AST)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Underground storage tanks (UST)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Floating roof tanks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Fixed roof tanks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Custom tank designs for specialized applications</span>
                  </li>
                </ul>
                <p>
                  We use only the highest quality materials and advanced construction techniques to ensure the longevity
                  and reliability of our tanks.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?"
                  alt="Tank construction"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section id="maintenance" className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Tank maintenance"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">
                <Wrench className="mr-1 h-4 w-4" />
                Maintenance
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Maintenance Services</h2>
              <div className="mt-6 space-y-4">
                <p>
                  We provide comprehensive maintenance services for all types of oil storage tanks to ensure their
                  optimal performance, safety, and compliance with regulations.
                </p>
                <p>Our maintenance services include:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Routine inspections and preventive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Tank cleaning and degassing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Corrosion protection and coating</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Leak detection and repair</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Emergency repair services</span>
                  </li>
                </ul>
                <p>
                  Our team of certified technicians is available 24/7 to address any maintenance needs and ensure the
                  continuous operation of your storage facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section id="consulting" className="bg-zinc-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-800">
                <Shield className="mr-1 h-4 w-4" />
                Consulting
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Consulting Services</h2>
              <div className="mt-6 space-y-4">
                <p>
                  We offer expert consulting services to help you optimize your oil storage and transportation
                  operations, improve safety, and ensure compliance with industry regulations.
                </p>
                <p>Our consulting services include:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Facility design and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Safety and compliance audits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Risk assessment and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Environmental impact studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 text-amber-600" />
                    <span>Staff training and development</span>
                  </li>
                </ul>
                <p>
                  Our consultants bring decades of industry experience to help you address challenges and identify
                  opportunities for improvement in your operations.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Consulting services"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16 text-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Work With Us?</h2>
            <p className="mt-4 text-lg">
              Contact us today to discuss your oil transportation and tank maintenance needs.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

