import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Img } from "@/components/img"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">About Virats BuildTech</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A legacy of architectural excellence and design innovation spanning over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <Img
                src="/indian-architecture-firm-office.jpg"
                alt="Virats BuildTech Studio"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Creating timeless spaces since 2009</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Virats BuildTech is a multi-award-winning architecture and interior design firm dedicated to transforming
                  spaces into extraordinary experiences. Founded by a team of visionary architects and designers, we've
                  grown from a small studio to a full-service design firm with a portfolio spanning residential,
                  commercial, and industrial projects.
                </p>
                <p>
                  Our approach combines innovative thinking with meticulous craftsmanship. We believe that great design
                  isn't just about aesthetics—it's about creating environments that enhance the way people live and
                  work. Every project is an opportunity to push boundaries while respecting context, sustainability, and
                  functionality.
                </p>
                <p>
                  With a team of 30+ talented professionals including architects, interior designers, project managers,
                  and consultants, we deliver comprehensive design solutions from concept through construction. Our
                  commitment to excellence has earned us recognition from leading design institutions and, most
                  importantly, the trust of our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-6">
                <Eye className="text-secondary" size={24} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized globally as pioneers in sustainable, human-centered design that inspires and endures.
                We envision a future where architecture and interiors seamlessly blend innovation, beauty, and
                environmental responsibility to create spaces that positively impact communities and stand the test of
                time.
              </p>
            </Card>

            <Card className="p-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-6">
                <Target className="text-secondary" size={24} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional architectural and interior design solutions that exceed client expectations while
                maintaining the highest standards of quality, sustainability, and innovation. We are committed to
                understanding each client's unique vision and translating it into spaces that are both functional and
                inspiring.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Design Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our design philosophy is built on three fundamental principles that guide every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square rounded-sm overflow-hidden mb-6">
                <Img
                  src="/indian-minimalist-architecture.jpg"
                  alt="Functionality"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-serif mb-3">Functionality First</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We prioritize how spaces work for the people who use them, ensuring every design decision serves a
                purpose while enhancing daily experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square rounded-sm overflow-hidden mb-6">
                <Img
                  src="/indian-sustainable-architecture.jpg"
                  alt="Sustainability"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-serif mb-3">Sustainable Innovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Environmental responsibility is woven into our design process, using sustainable materials and practices
                that minimize impact while maximizing longevity.
              </p>
            </div>

            <div className="text-center">
              <div className="aspect-square rounded-sm overflow-hidden mb-6">
                <Img
                  src="/indian-timeless-interior-design.jpg"
                  alt="Timelessness"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-serif mb-3">Timeless Beauty</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We create designs that transcend trends, combining classic principles with contemporary sensibilities to
                ensure enduring aesthetic appeal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Process</h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              A proven methodology that ensures exceptional results from concept to completion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Research",
                description:
                  "We begin by deeply understanding your needs, aspirations, site context, and project requirements through comprehensive consultations and research.",
              },
              {
                step: "02",
                title: "Concept Design",
                description:
                  "Our team develops initial concepts with sketches, mood boards, and 3D visualizations to explore design directions and establish the project vision.",
              },
              {
                step: "03",
                title: "Design Development",
                description:
                  "We refine the selected concept, creating detailed plans, specifications, material selections, and construction documentation with precision.",
              },
              {
                step: "04",
                title: "Construction & Execution",
                description:
                  "We oversee the build process, ensuring quality control, managing contractors, and maintaining constant communication until successful completion.",
              },
            ].map((phase) => (
              <Card key={phase.step} className="p-8 bg-background text-foreground">
                <div className="text-5xl font-serif text-secondary/30 mb-4">{phase.step}</div>
                <h3 className="text-xl font-serif mb-3">{phase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Certifications & Awards</h2>
            <p className="text-lg text-muted-foreground">Recognition of our commitment to excellence in design</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "AIA National Design Award 2024",
              "Best Commercial Design 2023",
              "Sustainable Architecture Award 2023",
              "Interior Design Excellence 2022",
              "LEED Platinum Certified",
              "AIA Gold Medal Finalist",
              "Best Residential Project 2021",
              "Innovation in Design 2020",
            ].map((award, index) => (
              <Card key={index} className="p-6 text-center">
                <Award className="mx-auto mb-3 text-secondary" size={32} />
                <p className="text-sm leading-relaxed">{award}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to work with us?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how we can bring your vision to life with our expertise and dedication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
