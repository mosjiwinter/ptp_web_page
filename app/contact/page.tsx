"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)

    // Show success toast
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20 text-white">
        <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-4 text-xl text-zinc-200">
              Get in touch with our team for any inquiries or to request a quote
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground">
                We're here to answer any questions you may have about our services. Reach out to us and we'll respond as
                soon as we can.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-amber-600" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="mt-1">085-496-3556</p>
                    <p className="mt-1">080-657-8988</p>
                    <p className="text-sm text-muted-foreground">Monday to Saturday, 8am to 5pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-amber-600" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="mt-1">info@oiltrans.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond as soon as possible</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-amber-600" />
                  <div>
                    <h3 className="font-bold">Office</h3>
                    <p className="mt-1">61 Moo 9, Suan Dok Mai Subdistrict, Sao Hai District, Saraburi</p>
                    <p className="text-sm text-muted-foreground">Come visit our headquarters</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-bold">Follow Us</h3>
                <div className="mt-4 flex space-x-4">
                  <Link href="https://facebook.com" className="text-zinc-600 hover:text-amber-600">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="https://instagram.com" className="text-zinc-600 hover:text-amber-600">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  {/* <Link href="https://linkedin.com" className="text-zinc-600 hover:text-amber-600">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link> */}
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border bg-card p-6 shadow-sm">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-400">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-zinc-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Our Location</h2>
          <div className="overflow-hidden rounded-lg border shadow-sm">
            {/* Replace with actual map embed */}
            <div className="aspect-video bg-muted">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.0576306281832!2d100.87396565255047!3d14.524896970444074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311de9d756100395%3A0xe5349d7195ee0dcd!2z4Lia4LiI4LiBLuC4nuC4teC4l-C4teC4nuC4tSDguYHguJfguIfguITguYwg4LmB4Lit4LiZ4LiU4LmM4LmA4LiX4Lij4Lil4LmA4Lil4Lit4Lij4LmMICjguJrguIjguIEu4LiK4LmI4Liy4LiH4LiI4Li04LmJ4LiZIOC4l-C4o-C4suC4meC4quC4m-C4reC4o-C5jOC4lSkg4LiL4LmI4Lit4LihIOC4quC4o-C5ieC4suC4hyDguYHguJfguIfguIHguYzguJnguYnguLPguKHguLHguJkg4Lia4Lix4LiX4LiX4Lit4Lih4LmC4Lir4Lil4LiUIOC4p-C4seC4lOC4meC5ieC4syDguILguJnguKrguYjguIfguJnguYnguLPguKHguLHguJk!5e0!3m2!1sen!2sth!4v1741598666769!5m2!1sen!2sth"
            width="100%"
            height="1200"
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

