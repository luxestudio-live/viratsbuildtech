import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Img } from "@/components/img"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const teamMembers = {
  leadership: [
    {
      name: "Arjun Sharma",
      role: "Founding Principal & Lead Architect",
      image: "/indian-team-arjun-sharma.jpg",
      bio: "With over 20 years of experience, Arjun leads our architectural vision and oversees all major projects. He holds a Master's in Architecture from IIT Delhi and is a licensed architect registered with the Council of Architecture.",
      linkedin: "#",
      email: "arjun@viratsbuildtech.com",
    },
    {
      name: "Priya Kapoor",
      role: "Co-Founder & Design Director",
      image: "/indian-team-priya-kapoor.jpg",
      bio: "Priya brings 18 years of interior design expertise, specializing in residential and hospitality projects. She studied at NID Ahmedabad and has won numerous industry awards.",
      linkedin: "#",
      email: "priya@viratsbuildtech.com",
    },
  ],
  architects: [
    {
      name: "Rohan Malhotra",
      role: "Senior Architect",
      image: "/indian-team-rohan-malhotra.jpg",
      bio: "Specializes in sustainable commercial architecture with GRIHA certification and 12 years of experience.",
    },
    {
      name: "Kavya Reddy",
      role: "Project Architect",
      image: "/indian-team-kavya-reddy.jpg",
      bio: "Expert in residential design with a focus on modern minimalist aesthetics and 8 years of practice.",
    },
    {
      name: "Aditya Singh",
      role: "Architect",
      image: "/indian-team-aditya-singh.jpg",
      bio: "Passionate about adaptive reuse and heritage conservation with 6 years of specialized experience.",
    },
  ],
  interior: [
    {
      name: "Ananya Desai",
      role: "Senior Interior Designer",
      image: "/indian-team-ananya-desai.jpg",
      bio: "15 years creating sophisticated interiors for high-end residential and commercial clients.",
    },
    {
      name: "Vikram Patel",
      role: "Interior Designer",
      image: "/indian-team-vikram-patel.jpg",
      bio: "Specializes in hospitality and retail design with a keen eye for material selection and color.",
    },
    {
      name: "Meera Gupta",
      role: "Interior Designer",
      image: "/indian-team-meera-gupta.jpg",
      bio: "Expert in space planning and custom furniture design with 7 years of experience.",
    },
  ],
  support: [
    {
      name: "Karthik Iyer",
      role: "Project Manager",
      image: "/indian-team-karthik-iyer.jpg",
      bio: "Ensures projects run smoothly from concept to completion with 10 years of construction management.",
    },
    {
      name: "Neha Verma",
      role: "Business Development Director",
      image: "/indian-team-neha-verma.jpg",
      bio: "Connects clients with our design solutions and manages all business operations.",
    },
    {
      name: "Rahul Nair",
      role: "Technical Coordinator",
      image: "/indian-team-rahul-nair.jpg",
      bio: "Handles all technical documentation, permits, and engineering coordination.",
    },
  ],
}

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl scroll-animate">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">Our Team</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the talented professionals behind every project—architects, designers, and specialists dedicated to
              excellence
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-serif mb-12 scroll-animate">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up-stagger">
            {teamMembers.leadership.map((member) => (
              <Card key={member.name} className="p-8 scroll-animate\">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 aspect-square rounded-sm overflow-hidden shrink-0">
                    <Img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif mb-1">{member.name}</h3>
                    <p className="text-secondary mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:bg-muted transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border hover:bg-muted transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Team */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-serif mb-12 scroll-animate">Architecture Team</h2>
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up-stagger">
            {teamMembers.architects.map((member) => (
              <Card key={member.name} className="p-6 bg-background scroll-animate\">
                <div className="aspect-square rounded-sm overflow-hidden mb-4">
                  <Img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <p className="text-sm text-secondary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Design Team */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-serif mb-12 scroll-animate">Interior Design Team</h2>
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up-stagger">
            {teamMembers.interior.map((member) => (
              <Card key={member.name} className="p-6 scroll-animate\">
                <div className="aspect-square rounded-sm overflow-hidden mb-4">
                  <Img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <p className="text-sm text-secondary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project & Support Team */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-serif mb-12 scroll-animate">Project & Support Team</h2>
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up-stagger">
            {teamMembers.support.map((member) => (
              <Card key={member.name} className="p-6 bg-background scroll-animate\">
                <div className="aspect-square rounded-sm overflow-hidden mb-4">
                  <Img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <p className="text-sm text-secondary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Join our team</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're always looking for talented architects and designers to join our growing team
          </p>
          <Button asChild size="lg">
            <Link href="/careers">View Open Positions</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
