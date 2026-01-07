import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Users, Award, Clock, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-balance">
                Crafting spaces that inspire
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Award-winning architecture and interior design firm specializing in residential and commercial projects
                that blend innovation with timeless elegance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="/indian-modern-architecture-building.jpg"
                alt="Modern architecture"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From concept to completion, we deliver comprehensive design solutions tailored to your vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6">
                <img
                  src="/indian-architectural-blueprints.jpg"
                  alt="Civil Architecture"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Civil Architecture</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Innovative structural design for residential, commercial, and industrial projects with sustainable
                practices.
              </p>
              <Link
                href="/services#architecture"
                className="inline-flex items-center text-sm font-medium hover:text-secondary transition-colors"
              >
                Learn more <ArrowRight className="ml-2" size={16} />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6">
                <img
                  src="/indian-luxury-living-room.jpg"
                  alt="Interior Design"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Interior Design</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Transforming interiors with sophisticated design solutions for homes, offices, and hospitality spaces.
              </p>
              <Link
                href="/services#interior"
                className="inline-flex items-center text-sm font-medium hover:text-secondary transition-colors"
              >
                Learn more <ArrowRight className="ml-2" size={16} />
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6">
                <img
                  src="/indian-construction-project.jpg"
                  alt="Turnkey Solutions"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3">Turnkey Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Complete design-build services from initial concept through final construction and installation.
              </p>
              <Link
                href="/services#turnkey"
                className="inline-flex items-center text-sm font-medium hover:text-secondary transition-colors"
              >
                Learn more <ArrowRight className="ml-2" size={16} />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Featured Projects</h2>
              <p className="text-muted-foreground">Discover our latest architectural and design achievements</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/projects">View All</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/projects/1" className="group block">
              <div className="aspect-[3/2] rounded-sm overflow-hidden mb-4">
                <img
                  src="/indian-modern-residential-villa.jpg"
                  alt="Riverside Residence"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-serif mb-1">Riverside Residence</h3>
                  <p className="text-sm text-muted-foreground">Residential Architecture</p>
                </div>
                <ArrowRight className="mt-1 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>

            <Link href="/projects/2" className="group block">
              <div className="aspect-[3/2] rounded-sm overflow-hidden mb-4">
                <img
                  src="/indian-commercial-office-building.jpg"
                  alt="Downtown Office Tower"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-serif mb-1">Downtown Office Tower</h3>
                  <p className="text-sm text-muted-foreground">Commercial Architecture</p>
                </div>
                <ArrowRight className="mt-1 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>

            <Link href="/projects/3" className="group block">
              <div className="aspect-[3/2] rounded-sm overflow-hidden mb-4">
                <img
                  src="/indian-luxury-penthouse-interior.jpg"
                  alt="Luxury Penthouse Interior"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-serif mb-1">Luxury Penthouse Interior</h3>
                  <p className="text-sm text-muted-foreground">Interior Design</p>
                </div>
                <ArrowRight className="mt-1 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>

            <Link href="/projects/4" className="group block">
              <div className="aspect-[3/2] rounded-sm overflow-hidden mb-4">
                <img
                  src="/indian-restaurant-interior.jpg"
                  alt="Urban Bistro Interior"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-serif mb-1">Urban Bistro Interior</h3>
                  <p className="text-sm text-muted-foreground">Hospitality Design</p>
                </div>
                <ArrowRight className="mt-1 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Design philosophy rooted in purpose
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-primary-foreground/90">
                We believe great design transcends aesthetics. Every project begins with understanding your story, your
                needs, and your aspirations. Our approach combines meticulous attention to detail with innovative
                thinking to create spaces that are both beautiful and functional.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/about">About Our Process</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="p-6 bg-background text-foreground">
                  <div className="text-4xl font-serif mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </Card>
                <Card className="p-6 bg-background text-foreground">
                  <div className="text-4xl font-serif mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
              </div>
              <div className="space-y-6 mt-12">
                <Card className="p-6 bg-background text-foreground">
                  <div className="text-4xl font-serif mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Design Awards</div>
                </Card>
                <Card className="p-6 bg-background text-foreground">
                  <div className="text-4xl font-serif mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Why Choose Virats BuildTech</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Excellence in every detail, dedication in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Award className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Award-Winning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recognized excellence in architectural and interior design
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Users className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Skilled professionals with decades of combined experience
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <CheckCircle2 className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Uncompromising standards in materials and execution
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Clock className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-serif mb-2">On-Time Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proven track record of meeting deadlines consistently
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A systematic approach to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "Understanding your needs, vision, and project requirements",
              },
              {
                number: "02",
                title: "Design",
                description: "Creating detailed concepts, plans, and 3D visualizations",
              },
              {
                number: "03",
                title: "Development",
                description: "Refining designs and preparing construction documentation",
              },
              {
                number: "04",
                title: "Delivery",
                description: "Executing the build with precision and quality oversight",
              },
            ].map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-serif text-secondary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground">Hear from those who've experienced our work firsthand</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Homeowner",
                content:
                  "Virats BuildTech transformed our house into a dream home. Their attention to detail and creative vision exceeded all expectations.",
                rating: 5,
              },
              {
                name: "Rajesh Malhotra",
                role: "Business Owner",
                content:
                  "The team delivered our commercial space on time and within budget. The design is both functional and stunning.",
                rating: 5,
              },
              {
                name: "Anjali Patel",
                role: "Real Estate Developer",
                content:
                  "Working with Virats BuildTech has been exceptional. Their architectural expertise and professionalism are unmatched.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="fill-secondary text-secondary" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-12 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Ready to start your project?</h2>
          <p className="text-lg mb-8 leading-relaxed text-secondary-foreground/90">
            Let's discuss how we can bring your architectural and design vision to life. Schedule a complimentary
            consultation with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground/20 hover:bg-secondary-foreground/10 bg-transparent"
            >
              <Link href="/projects">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
