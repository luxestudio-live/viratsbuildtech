"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, MessageCircle, Instagram, Linkedin, Facebook, Youtube } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl scroll-animate">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your project? We'd love to hear from you. Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 animate-fade-in-up-stagger">
            {/* Contact Form */}
            <Card className="p-8 lg:p-12 scroll-animate\">
              <h2 className="text-2xl font-serif mb-6">Project Inquiry Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-architecture">Residential Architecture</SelectItem>
                      <SelectItem value="commercial-architecture">Commercial Architecture</SelectItem>
                      <SelectItem value="industrial-architecture">Industrial Architecture</SelectItem>
                      <SelectItem value="residential-interior">Residential Interior</SelectItem>
                      <SelectItem value="commercial-interior">Commercial Interior</SelectItem>
                      <SelectItem value="turnkey">Turnkey Solution</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-100k">Under $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                        <SelectItem value="short">3-6 months</SelectItem>
                        <SelectItem value="medium">6-12 months</SelectItem>
                        <SelectItem value="long">12+ months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="mt-2"
                    placeholder="Tell us about your project, vision, and any specific requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="scroll-animate">
              <div className="space-y-8 mb-12 animate-fade-in-up-stagger\">
                <Card className="p-6 scroll-animate\">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm mb-2">Mon-Fri 9am-6pm IST</p>
                      <a href="tel:+919876543210" className="text-secondary hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 scroll-animate\">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm mb-2">Response within 24 hours</p>
                      <a href="mailto:hello@viratsbuildtech.com" className="text-secondary hover:underline">
                        hello@viratsbuildtech.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 scroll-animate\">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0\">
                      <MapPin className="text-secondary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Location</h3>
                      <p className="text-muted-foreground text-sm mb-2">Visit us by appointment</p>
                      <p className="text-sm">
                        Bandra-Kurla Complex,
                        <br />
                        Bandra East, Mumbai, Maharashtra 400051
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-secondary text-secondary-foreground">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="text-secondary-foreground" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-secondary-foreground/80 text-sm mb-3">Quick response via WhatsApp</p>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                        asChild
                      >
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Instagram className="text-secondary" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Follow Us</h3>
                      <p className="text-muted-foreground text-sm mb-4">Stay connected on social media</p>
                      <div className="flex gap-3">
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram size={18} />
                        </a>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook size={18} />
                        </a>
                        <a
                          href="https://youtube.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors"
                          aria-label="YouTube"
                        >
                          <Youtube size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-muted rounded-sm p-8">
                <h3 className="text-xl font-serif mb-4">Book a Free Consultation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Schedule a complimentary 30-minute consultation to discuss your project requirements and explore how
                  we can help bring your vision to life.
                </p>
                <Button size="lg" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="aspect-[21/9] rounded-sm overflow-hidden bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6261486192296!2d72.8685927!3d19.0625962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f90b7c5c7d%3A0x69e49dcdb1e4f6a2!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location map"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
