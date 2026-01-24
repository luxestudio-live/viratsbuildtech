import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase } from "lucide-react"
import Link from "next/link"

const openPositions = [
  {
    id: 1,
    title: "Senior Architect",
    department: "Architecture",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "8+ years",
    description:
      "Lead architectural projects from concept to completion, mentor junior team members, and contribute to design excellence.",
  },
  {
    id: 2,
    title: "Interior Designer",
    department: "Interior Design",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Create innovative interior design solutions for residential and commercial projects with attention to detail and client needs.",
  },
  {
    id: 3,
    title: "Project Manager",
    department: "Operations",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Coordinate project timelines, budgets, and stakeholder communication to ensure successful project delivery.",
  },
  {
    id: 4,
    title: "Junior Architect",
    department: "Architecture",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "0-2 years",
    description:
      "Join our architecture team to develop technical skills, support senior architects, and contribute to exciting projects.",
  },
  {
    id: 5,
    title: "3D Visualization Specialist",
    department: "Design",
    location: "Remote",
    type: "Contract",
    experience: "3+ years",
    description:
      "Create stunning 3D renderings and visualizations for architectural and interior design projects using industry-leading software.",
  },
]

const benefits = [
  "Competitive salary and performance bonuses",
  "Comprehensive health, dental, and vision insurance",
  "401(k) retirement plan with company match",
  "Generous paid time off and holidays",
  "Professional development and continuing education",
  "Flexible work arrangements",
  "Collaborative and creative work environment",
  "Modern office with state-of-the-art tools",
]

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl scroll-animate">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Be part of a talented team creating exceptional architectural and design solutions that shape the built
              environment
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up-stagger\">
            <div className="scroll-animate\">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Why Virats BuildTech?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Virats BuildTech, we believe that great design comes from great people. We foster a culture of creativity,
                collaboration, and continuous learning. Our team works on diverse, challenging projects that push the
                boundaries of architecture and design while maintaining work-life balance and professional growth.
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">What We Offer</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-sm overflow-hidden scroll-animate\">
              <img
                src="/indian-careers-team-photo.jpg"
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 scroll-animate\">Open Positions</h2>
          <div className="space-y-6 animate-fade-in-up-stagger\">
            {openPositions.map((position) => (
              <Card key={position.id} className="p-8 hover:shadow-lg transition-shadow scroll-animate\">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-serif">{position.title}</h3>
                      <Badge variant="secondary">{position.department}</Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/careers/${position.id}`}>View Details</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Role */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center scroll-animate\">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Don't see the right role?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're always interested in meeting talented professionals. Send us your portfolio and resume, and we'll keep
            you in mind for future opportunities.
          </p>
          <Button asChild size="lg">
            <a href="mailto:careers@viratsbuildtech.com">Send Your Portfolio</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
