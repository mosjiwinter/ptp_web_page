import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20 text-white">
        <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Our Company</h1>
            <p className="mt-4 text-xl text-zinc-200">
              A trusted partner in oil transportation and tank maintenance for over two decades
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our History</h2>
              <div className="mt-6 space-y-4">
                <p>
                  Founded in 2000, OilTrans began as a small oil transportation company with just three trucks. Over the
                  years, we&apos;ve grown into a comprehensive service provider for the oil industry, expanding our
                  operations to include tank construction and maintenance.
                </p>
                <p>
                  Our journey has been marked by a commitment to safety, reliability, and innovation. We &apos;ve continuously
                  invested in modern equipment and training for our team to ensure we deliver the highest quality
                  services to our clients.
                </p>
                <p>
                  Today, we&apos;re proud to be one of the leading companies in the oil transportation and tank maintenance
                  industry, serving clients across the country with our fleet of modern tankers and team of skilled
                  technicians.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Company history"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-zinc-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Mission & Values</h2>
            <p className="mt-4 text-muted-foreground">
              We are guided by a clear mission and strong values that define everything we do
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Our Mission</h3>
              <p>
                To provide safe, efficient, and reliable oil transportation and tank maintenance services that exceed
                our clients&apos; expectations while maintaining the highest standards of safety and environmental
                responsibility.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">Our Vision</h3>
              <p>
                To be the industry leader in oil transportation and tank services, recognized for our commitment to
                excellence, innovation, and sustainable practices that benefit our clients, employees, and the
                communities we serve.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="mb-6 text-center text-xl font-bold">Our Core Values</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
                <CheckCircle className="mb-4 h-8 w-8 text-amber-600" />
                <h4 className="mb-2 font-bold">Safety First</h4>
                <p className="text-sm text-muted-foreground">
                  We prioritize the safety of our employees, clients, and the environment in all our operations.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
                <CheckCircle className="mb-4 h-8 w-8 text-amber-600" />
                <h4 className="mb-2 font-bold">Integrity</h4>
                <p className="text-sm text-muted-foreground">
                  We conduct our business with honesty, transparency, and ethical standards.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
                <CheckCircle className="mb-4 h-8 w-8 text-amber-600" />
                <h4 className="mb-2 font-bold">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  We strive for excellence in every aspect of our services and operations.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center">
                <CheckCircle className="mb-4 h-8 w-8 text-amber-600" />
                <h4 className="mb-2 font-bold">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  We continuously seek innovative solutions to improve our services and processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Leadership Team</h2>
            <p className="mt-4 text-muted-foreground">
              Meet the experienced professionals who lead our company to success
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="/placeholder.svg?height=200&width=200" alt="CEO" className="h-40 w-40 object-cover" />
              </div>
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-amber-600">Chief Executive Officer</p>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                With over 30 years of experience in the oil industry, John leads our company with vision and expertise.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="/placeholder.svg?height=200&width=200" alt="COO" className="h-40 w-40 object-cover" />
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-amber-600">Chief Operations Officer</p>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Sarah oversees all operational aspects of our business, ensuring efficiency and excellence in our
                services.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <img src="/placeholder.svg?height=200&width=200" alt="CTO" className="h-40 w-40 object-cover" />
              </div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-amber-600">Chief Technical Officer</p>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Michael leads our technical team, driving innovation and ensuring the highest standards in our tank
                construction and maintenance services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

