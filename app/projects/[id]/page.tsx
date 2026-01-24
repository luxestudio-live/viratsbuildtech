import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Img } from "@/components/img"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, CheckCircle2, ArrowLeft, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { ImageComparison } from "@/components/image-comparison"

export function generateStaticParams() {
  return [
    { id: '1' },
  ]
}

// Mock project data
const projectData = {
  1: {
    title: "Riverside Residence",
    category: "Civil Architecture",
    subcategory: "Residential",
    location: "Mumbai, Maharashtra",
    year: "2023",
    area: "4,500 sq ft",
    client: "Private Client",
    heroImage: "/indian-project-riverside-hero.jpg",
    overview:
      "A stunning modern residence positioned along the riverbank, designed to maximize natural light and panoramic water views. The three-story home features clean lines, extensive glazing, and outdoor living spaces that blur the boundaries between interior and exterior.",
    clientBrief:
      "Our clients wanted a contemporary family home that would take advantage of the spectacular river location while providing privacy and comfort. They requested an open-plan layout, sustainable features, and spaces that could accommodate both daily family life and entertaining guests.",
    blueprints: [
      "/indian-riverside-floorplan-1.jpg",
      "/indian-riverside-floorplan-2.jpg",
      "/indian-riverside-site-plan.jpg",
    ],
    constructionPhotos: [
      "/indian-riverside-construction-1.jpg",
      "/indian-riverside-construction-2.jpg",
      "/indian-riverside-construction-3.jpg",
      "/indian-riverside-construction-4.jpg",
    ],
    finalPhotos: [
      "/indian-riverside-final-1.jpg",
      "/indian-riverside-final-2.jpg",
      "/indian-riverside-final-3.jpg",
      "/indian-riverside-final-4.jpg",
      "/indian-riverside-final-5.jpg",
      "/indian-riverside-final-6.jpg",
    ],
    beforeImage: "/indian-riverside-before.jpg",
    afterImage: "/indian-riverside-after.jpg",
    materials: [
      "Structural steel frame",
      "Floor-to-ceiling glass panels",
      "Natural stone cladding",
      "Hardwood flooring",
      "Green roof system",
    ],
    features: [
      "Passive solar design",
      "Rainwater harvesting system",
      "Geothermal heating and cooling",
      "Smart home integration",
      "Infinity pool overlooking river",
    ],
    testimonial: {
      content:
        "Virats BuildTech transformed our vision into reality beyond what we imagined. The attention to detail, innovative design solutions, and commitment to sustainability resulted in a home that is both beautiful and functional. We couldn't be happier with the outcome.",
      author: "Michael & Sarah Thompson",
      rating: 5,
    },
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Image */}
      <section className="pt-20">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <Img
            src={project.heroImage || "/placeholder.svg"}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Project Header */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link href="/projects">
                <ArrowLeft className="mr-2" size={16} />
                Back to Projects
              </Link>
            </Button>
            <Badge variant="secondary">{project.category}</Badge>
            <Badge variant="outline">{project.subcategory}</Badge>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif mb-6">{project.title}</h1>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-secondary shrink-0 mt-1" size={20} />
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium">{project.location}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="text-secondary shrink-0 mt-1" size={20} />
              <div>
                <div className="text-sm text-muted-foreground">Completed</div>
                <div className="font-medium">{project.year}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-secondary shrink-0 mt-1" size={20} />
              <div>
                <div className="text-sm text-muted-foreground">Client</div>
                <div className="font-medium">{project.client}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
              <div>
                <div className="text-sm text-muted-foreground">Area</div>
                <div className="font-medium">{project.area}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6">Client Brief</h2>
              <p className="text-muted-foreground leading-relaxed">{project.clientBrief}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprints / Floor Plans */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-4xl font-serif mb-12">Blueprints & Floor Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.blueprints.map((blueprint, index) => (
              <div key={index} className="aspect-[3/4] rounded-sm overflow-hidden border border-border">
                <Img
                  src={blueprint || "/placeholder.svg"}
                  alt={`Floor plan ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Phase */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-4xl font-serif mb-12">Construction Phase</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.constructionPhotos.map((photo, index) => (
              <div key={index} className="aspect-[4/3] rounded-sm overflow-hidden">
                <Img
                  src={photo || "/placeholder.svg"}
                  alt={`Construction ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Completion Gallery */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-4xl font-serif mb-12">Final Completion</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.finalPhotos.map((photo, index) => (
              <div
                key={index}
                className={`rounded-sm overflow-hidden ${index === 0 ? "md:col-span-2 md:row-span-2" : "aspect-[4/3]"}`}
              >
                <Img
                  src={photo || "/placeholder.svg"}
                  alt={`Final ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Comparison */}
      <section className="py-20 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Before & After</h2>
          <div className="max-w-4xl mx-auto">
            <ImageComparison beforeImage={project.beforeImage} afterImage={project.afterImage} />
          </div>
        </div>
      </section>

      {/* Materials & Features */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-10">
              <h3 className="text-2xl font-serif mb-6">Materials Used</h3>
              <ul className="space-y-3">
                {project.materials.map((material, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span>{material}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-10">
              <h3 className="text-2xl font-serif mb-6">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 px-6 lg:px-12 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: project.testimonial.rating }).map((_, i) => (
              <Star key={i} className="fill-secondary-foreground text-secondary-foreground" size={24} />
            ))}
          </div>
          <blockquote className="text-2xl font-serif leading-relaxed mb-8">"{project.testimonial.content}"</blockquote>
          <p className="text-lg font-medium">{project.testimonial.author}</p>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif">More Projects</h2>
            <Button asChild variant="outline">
              <Link href="/projects">View All</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 2, title: "Downtown Office Tower", image: "/project-downtown-office.jpg" },
              { id: 4, title: "Luxury Penthouse Interior", image: "/project-penthouse-interior.jpg" },
              { id: 8, title: "Hillside Villa", image: "/project-hillside-villa.jpg" },
            ].map((relatedProject) => (
              <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`} className="group block">
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-4">
                  <Img
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-serif">{relatedProject.title}</h3>
                  <ArrowRight className="mt-1 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
