"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Img } from "@/components/img"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Riverside Residence",
    category: "architecture",
    subcategory: "residential",
    image: "/indian-project-riverside-residence.jpg",
    description: "Modern luxury villa with panoramic river views",
  },
  {
    id: 2,
    title: "Downtown Office Tower",
    category: "architecture",
    subcategory: "commercial",
    image: "/indian-project-downtown-office.jpg",
    description: "20-story sustainable office building in city center",
  },
  {
    id: 3,
    title: "Industrial Park Complex",
    category: "architecture",
    subcategory: "industrial",
    image: "/indian-project-industrial-park.jpg",
    description: "State-of-the-art manufacturing facility and warehouse",
  },
  {
    id: 4,
    title: "Luxury Penthouse Interior",
    category: "interior",
    subcategory: "residential",
    image: "/indian-project-penthouse-interior.jpg",
    description: "Elegant contemporary design with custom furniture",
  },
  {
    id: 5,
    title: "Tech Startup Office",
    category: "interior",
    subcategory: "office",
    image: "/indian-project-tech-office.jpg",
    description: "Collaborative workspace promoting innovation",
  },
  {
    id: 6,
    title: "Urban Bistro Interior",
    category: "interior",
    subcategory: "hospitality",
    image: "/indian-project-bistro-interior.jpg",
    description: "Warm inviting atmosphere for dining experience",
  },
  {
    id: 7,
    title: "Boutique Retail Store",
    category: "interior",
    subcategory: "retail",
    image: "/indian-project-retail-store.jpg",
    description: "Sophisticated retail environment with custom displays",
  },
  {
    id: 8,
    title: "Hillside Villa",
    category: "architecture",
    subcategory: "residential",
    image: "/indian-project-hillside-villa.jpg",
    description: "Sustainable home integrated with natural landscape",
  },
  {
    id: 9,
    title: "Modern Loft Conversion",
    category: "interior",
    subcategory: "residential",
    image: "/indian-project-loft-conversion.jpg",
    description: "Industrial chic transformation of historic building",
  },
  {
    id: 10,
    title: "Corporate Headquarters",
    category: "architecture",
    subcategory: "commercial",
    image: "/indian-project-corporate-hq.jpg",
    description: "Iconic building embodying brand identity",
  },
  {
    id: 11,
    title: "Seaside Resort Interior",
    category: "interior",
    subcategory: "hospitality",
    image: "/indian-project-seaside-resort.jpg",
    description: "Coastal luxury with breathtaking ocean views",
  },
  {
    id: 12,
    title: "Contemporary Kitchen Design",
    category: "interior",
    subcategory: "residential",
    image: "/indian-project-kitchen-design.jpg",
    description: "Minimalist kitchen with premium materials",
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    if (filter === "architecture") return project.category === "architecture"
    if (filter === "interior") return project.category === "interior"
    if (filter === "residential") return project.subcategory === "residential" || project.category === "architecture"
    if (filter === "commercial")
      return (
        project.subcategory === "commercial" || project.subcategory === "office" || project.category === "architecture"
      )
    return true
  })

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl scroll-animate">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our portfolio of architectural and interior design projects across residential, commercial, and
              industrial sectors
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "architecture" ? "default" : "outline"}
              onClick={() => setFilter("architecture")}
              className="rounded-full"
            >
              Civil Architecture
            </Button>
            <Button
              variant={filter === "interior" ? "default" : "outline"}
              onClick={() => setFilter("interior")}
              className="rounded-full"
            >
              Interior Design
            </Button>
            <Button
              variant={filter === "residential" ? "default" : "outline"}
              onClick={() => setFilter("residential")}
              className="rounded-full"
            >
              Residential
            </Button>
            <Button
              variant={filter === "commercial" ? "default" : "outline"}
              onClick={() => setFilter("commercial")}
              className="rounded-full"
            >
              Commercial
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up-stagger">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group block scroll-animate\">
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-4">
                  <Img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-serif mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                    <span className="inline-block text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                      {project.category === "architecture" ? "Civil Architecture" : "Interior Design"}
                    </span>
                  </div>
                  <ArrowRight className="mt-1 group-hover:translate-x-1 transition-transform shrink-0" size={20} />
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
