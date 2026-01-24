import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Briefcase, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto scroll-animate\">
          <Button variant="outline" size="sm" asChild className="mb-6 bg-transparent">
            <Link href="/careers">
              <ArrowLeft className="mr-2" size={16} />
              Back to Careers
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-serif">Senior Architect</h1>
            <Badge variant="secondary">Architecture</Badge>
          </div>

          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Architecture City, AC</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>Full-time</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={18} />
              <span>8+ years experience</span>
            </div>
          </div>

          <Button size="lg">Apply Now</Button>
        </div>
      </section>

      {/* Job Details */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-10 space-y-8 scroll-animate\">
            <div>
              <h2 className="text-2xl font-serif mb-4">About the Role</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're seeking an experienced Senior Architect to join our growing team. You'll lead complex
                architectural projects from concept through construction, mentor junior team members, and contribute to
                our studio's design excellence. This role offers the opportunity to work on diverse project types
                including residential, commercial, and institutional buildings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {[
                  "Lead design development for multiple projects simultaneously",
                  "Collaborate with clients to understand project requirements and vision",
                  "Produce architectural drawings, specifications, and documentation",
                  "Coordinate with engineers, consultants, and contractors",
                  "Mentor and guide junior architects and interns",
                  "Conduct site visits and construction administration",
                  "Ensure projects meet code requirements and design standards",
                  "Participate in business development and client presentations",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Qualifications</h2>
              <ul className="space-y-3">
                {[
                  "Professional architecture degree (B.Arch or M.Arch)",
                  "Licensed architect in good standing",
                  "8+ years of professional experience in architecture",
                  "Proficiency in Revit, AutoCAD, and Adobe Creative Suite",
                  "Experience with 3D modeling and rendering software",
                  "Strong design sensibility and technical skills",
                  "Excellent communication and presentation abilities",
                  "Experience managing projects and teams",
                  "Knowledge of building codes and construction methods",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">What We Offer</h2>
              <ul className="space-y-3">
                {[
                  "Competitive salary commensurate with experience",
                  "Comprehensive benefits package including health, dental, and vision",
                  "401(k) with company match",
                  "Professional development opportunities and continuing education",
                  "Flexible work arrangements",
                  "Collaborative studio environment with talented colleagues",
                  "Exposure to diverse, award-winning projects",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">How to Apply</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To apply, please send your resume, cover letter, and portfolio (PDF format, max 10MB) to
                careers@viratsbuildtech.com with "Senior Architect Application" in the subject line. We review
                applications on a rolling basis and will contact qualified candidates for interviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Apply via Email</Button>
                <Button variant="outline" size="lg">
                  Upload Documents
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
