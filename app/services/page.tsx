import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive design solutions tailored to your unique needs—from architectural planning to interior
              styling and complete turnkey execution
            </p>
          </div>
        </div>
      </section>

      {/* Civil Architecture */}
      <section id="architecture" className="pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Civil Architecture</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our architectural services encompass complete design and planning for a wide range of building types. We
                combine innovative structural solutions with aesthetic excellence to create buildings that are both
                functional and inspiring.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Residential Architecture",
                  "Commercial Architecture",
                  "Industrial Architecture",
                  "Structural Design & Engineering",
                  "Sustainable Architecture",
                  "Adaptive Reuse & Renovation",
                ].map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <Button asChild>
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-sm overflow-hidden">
                  <img
                    src="/indian-residential-architecture.jpg"
                    alt="Residential"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="/indian-commercial-architecture.jpg"
                    alt="Commercial"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-12">
                <div className="aspect-square rounded-sm overflow-hidden">
                  <img
                    src="/indian-industrial-architecture.jpg"
                    alt="Industrial"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-[3/4] rounded-sm overflow-hidden">
                  <img
                    src="/indian-sustainable-building.jpg"
                    alt="Sustainable"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-serif mb-3">Residential Architecture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Custom homes, villas, apartments, and multi-family residences designed to reflect your lifestyle and
                enhance everyday living.
              </p>
              <Link
                href="/projects?category=residential"
                className="inline-flex items-center text-sm font-medium hover:text-secondary transition-colors"
              >
                View Projects <ArrowRight className="ml-2" size={16} />
              </Link>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-serif mb-3">Commercial Architecture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Office buildings, retail spaces, hotels, and mixed-use developments that balance functionality with
                striking design.
              </p>
              <Link
                href="/projects?category=commercial"
                className="inline-flex items-center text-sm font-medium hover:text-secondary transition-colors"
              >
                View Projects <ArrowRight className="ml-2" size={16} />
              </Link>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-serif mb-3">Industrial Architecture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Warehouses, manufacturing facilities, and industrial complexes optimized for operational efficiency and
                safety.
              </p>
              <Link
                href="/projects?category=industrial"
                className="inline-flex items-center text-sm font-medium hover:text-secondary transition-colors"
              >
                View Projects <ArrowRight className="ml-2" size={16} />
              </Link>
            </Card>
          </div>

          {/* Civil Architecture Process */}
          <div className="mt-20 pt-20 border-t">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-serif mb-4">Our Architecture Process</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A systematic 8-step approach to bringing your architectural vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Consultation",
                  description: "Discuss project requirements, budget, and timeline with comprehensive site evaluation",
                },
                {
                  number: "02",
                  title: "Site Analysis",
                  description: "Study topography, climate, environmental factors, and local building regulations",
                },
                {
                  number: "03",
                  title: "Design Development",
                  description: "Create conceptual designs with floor plans, elevations, and cross-sections",
                },
                {
                  number: "04",
                  title: "Schematic Design",
                  description: "Refine designs with detailed site plans, layouts, and structural systems",
                },
                {
                  number: "05",
                  title: "Design Documentation",
                  description: "Prepare construction drawings, specifications, schedules, and obtain permits",
                },
                {
                  number: "06",
                  title: "Tendering & Procurement",
                  description: "Invite contractor bids, evaluate proposals, and award the contract",
                },
                {
                  number: "07",
                  title: "Construction Administration",
                  description: "Oversee construction, monitor progress, and ensure design compliance",
                },
                {
                  number: "08",
                  title: "Project Completion",
                  description: "Final inspections, certificates of occupancy, and project handover",
                },
              ].map((step) => (
                <Card key={step.number} className="p-6 relative">
                  <div className="text-5xl font-serif text-secondary/20 mb-3">{step.number}</div>
                  <h4 className="text-lg font-serif mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interior Design */}
      <section id="interior" className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden">
                    <img
                      src="/indian-residential-interior.jpg"
                      alt="Residential Interior"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-square rounded-sm overflow-hidden">
                    <img
                      src="/indian-office-interior.jpg"
                      alt="Office Interior"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-12">
                  <div className="aspect-square rounded-sm overflow-hidden">
                    <img
                      src="/indian-hospitality-interior.jpg"
                      alt="Hospitality Interior"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-sm overflow-hidden">
                    <img
                      src="/indian-retail-interior.jpg"
                      alt="Retail Interior"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Interior Design</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Transform your interiors into beautifully curated spaces that reflect your personality and purpose. Our
                interior design team creates cohesive environments through thoughtful space planning, material
                selection, and styling.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Residential Interiors",
                  "Commercial Interiors",
                  "Office Interiors",
                  "Hospitality Interiors",
                  "Retail Interiors",
                  "Custom Furniture Design",
                ].map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <Button asChild>
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Interior Design Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-background">
              <h3 className="text-xl font-serif mb-3">Residential Interiors</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Living rooms, bedrooms, kitchens, and complete home styling that creates warm, inviting spaces for
                modern living.
              </p>
              <Link
                href="/projects?category=residential-interior"
                className="inline-flex items-center text-sm font-medium hover:text-secondary transition-colors"
              >
                View Projects <ArrowRight className="ml-2" size={16} />
              </Link>
            </Card>

            <Card className="p-8 bg-background">
              <h3 className="text-xl font-serif mb-3">Office Interiors</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Productive workspaces that inspire collaboration and creativity while reflecting your brand identity and
                culture.
              </p>
              <Link
                href="/projects?category=office-interior"
                className="inline-flex items-center text-sm font-medium hover:text-secondary transition-colors"
              >
                View Projects <ArrowRight className="ml-2" size={16} />
              </Link>
            </Card>

            <Card className="p-8 bg-background">
              <h3 className="text-xl font-serif mb-3">Hospitality Interiors</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Restaurants, hotels, and hospitality venues designed to create memorable guest experiences and
                atmosphere.
              </p>
              <Link
                href="/projects?category=hospitality-interior"
                className="inline-flex items-center text-sm font-medium hover:text-secondary transition-colors"
              >
                View Projects <ArrowRight className="ml-2" size={16} />
              </Link>
            </Card>
          </div>

          {/* Interior Design Process */}
          <div className="mt-20 pt-20 border-t border-border/50">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-serif mb-4">Our Interior Design Process</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A refined 7-step journey from concept to completion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Initial Consultation",
                  description: "Understand your vision, lifestyle, budget, and existing space conditions",
                },
                {
                  number: "02",
                  title: "Space Planning",
                  description: "Create functional layouts optimizing flow, circulation, and ergonomics",
                },
                {
                  number: "03",
                  title: "Design Concept",
                  description: "Develop mood boards, color schemes, materials, and furniture styles",
                },
                {
                  number: "04",
                  title: "Design Development",
                  description: "Refine concepts with detailed drawings, 3D visualizations, and specifications",
                },
                {
                  number: "05",
                  title: "Material Selection",
                  description: "Source and select finishes, furniture, fixtures, and accessories",
                },
                {
                  number: "06",
                  title: "Installation",
                  description: "Oversee installation of finishes, furniture placement, and quality control",
                },
                {
                  number: "07",
                  title: "Project Completion",
                  description: "Final walkthrough, punch lists, and delivery of care instructions",
                },
              ].map((step, index) => (
                <Card key={step.number} className={`p-6 relative ${
                  index >= 4 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${
                  index === 6 ? 'lg:col-start-2' : ''
                }`}>
                  <div className="text-5xl font-serif text-secondary/20 mb-3">{step.number}</div>
                  <h4 className="text-lg font-serif mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Solutions */}
      <section id="turnkey" className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Turnkey Solutions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete design-build services that take your project from initial concept through final execution with a
              single point of responsibility
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="/indian-turnkey-construction.jpg"
                alt="Turnkey Solutions"
                className="object-cover w-full h-full"
              />
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4">End-to-End Project Management</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our turnkey solutions provide seamless integration of architecture, interior design, and construction
                management. We handle every aspect of your project, ensuring quality control, timeline adherence, and
                budget management from start to finish.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">What's Included</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} />
                      <span>Architectural Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} />
                      <span>Interior Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} />
                      <span>Engineering & MEP</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} />
                      <span>Permit Processing</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Our Responsibility</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} />
                      <span>Construction Management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} />
                      <span>Vendor Coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} />
                      <span>Quality Assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} />
                      <span>Final Handover</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Services */}
      <section id="consultation" className="py-20 px-6 lg:px-12 bg-secondary text-secondary-foreground">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Consultation Services</h2>
            <p className="text-lg text-secondary-foreground/90 leading-relaxed mb-8">
              Expert guidance for your project at any stage—from site selection and feasibility studies to design review
              and construction advisory
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 bg-background text-foreground text-left">
                <h3 className="font-serif text-lg mb-2">Initial Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  One-on-one session to discuss your vision, budget, and project feasibility
                </p>
              </Card>

              <Card className="p-6 bg-background text-foreground text-left">
                <h3 className="font-serif text-lg mb-2">Design Review</h3>
                <p className="text-sm text-muted-foreground">
                  Expert evaluation of existing plans with recommendations for improvement
                </p>
              </Card>

              <Card className="p-6 bg-background text-foreground text-left">
                <h3 className="font-serif text-lg mb-2">Project Advisory</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing guidance throughout your project's design and construction phases
                </p>
              </Card>
            </div>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Let's bring your vision to life</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you need architecture, interior design, or complete turnkey solutions, we're here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
