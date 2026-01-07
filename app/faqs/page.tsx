import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Virats BuildTech offer?",
        answer:
          "We offer comprehensive architectural and interior design services including residential architecture, commercial architecture, industrial design, interior design for all space types, turnkey solutions, and consultation services. We handle projects from initial concept through final construction.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "While our main office is located in Architecture City, we work on projects nationwide and select international projects. We're licensed architects in multiple states and have experience managing remote projects with our established network of contractors and suppliers.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary significantly based on scope and complexity. A residential design project typically takes 3-6 months for design development, followed by 6-12 months for construction. Commercial projects may take longer. We provide detailed timeline estimates during our initial consultation.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        question: "What is your design process?",
        answer:
          "Our process follows four main phases: Discovery (understanding your needs and vision), Design (creating concepts and visualizations), Development (refining plans and specifications), and Delivery (construction oversight and completion). Each phase includes multiple touchpoints and client reviews.",
      },
      {
        question: "How involved will I be in the process?",
        answer:
          "We believe in collaborative design. You'll be involved at key decision points throughout the project, from concept approval to material selection to final walk-through. We schedule regular check-ins and provide multiple opportunities for feedback while handling the technical details.",
      },
      {
        question: "Do you handle permits and approvals?",
        answer:
          "Yes, we manage all permit applications and regulatory approvals as part of our service. We're familiar with local building codes and zoning requirements, and we work directly with authorities to ensure all necessary approvals are obtained.",
      },
    ],
  },
  {
    category: "Costs & Pricing",
    questions: [
      {
        question: "How much do your services cost?",
        answer:
          "Our fees vary based on project scope, complexity, and service type. Architectural design fees typically range from 8-15% of construction costs. Interior design may be charged hourly, flat fee, or percentage-based. We provide detailed fee proposals after our initial consultation.",
      },
      {
        question: "What payment structure do you use?",
        answer:
          "We typically structure payments in phases aligned with project milestones: initial retainer upon contract signing, followed by payments at schematic design completion, design development completion, construction documents completion, and construction administration. Specific terms are outlined in our contract.",
      },
      {
        question: "Are there additional costs beyond your fees?",
        answer:
          "Our professional fees cover design services. Additional costs may include engineering consultants, permit fees, specialty consultants (lighting, acoustics), and construction costs. We provide a comprehensive cost breakdown during the proposal phase so there are no surprises.",
      },
    ],
  },
  {
    category: "Projects & Portfolio",
    questions: [
      {
        question: "Can I see examples of your work?",
        answer:
          "Our portfolio showcases completed projects across various categories. You can browse our projects online, and during consultation, we can share additional examples similar to your project type. We're also happy to provide client references upon request.",
      },
      {
        question: "Do you work on renovation projects?",
        answer:
          "Yes, we have extensive experience with renovations, additions, and adaptive reuse projects. Whether it's updating a single room or completely transforming a building, we approach renovations with the same level of design excellence as new construction.",
      },
      {
        question: "What is your approach to sustainable design?",
        answer:
          "Sustainability is integrated into every project. We prioritize energy efficiency, sustainable materials, passive design strategies, and long-term durability. Many of our projects achieve LEED certification, though we believe true sustainability goes beyond certifications to encompass lifecycle thinking.",
      },
    ],
  },
]

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our services, process, and how we can help with your project
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-serif mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`} className="border rounded-sm px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Still have questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We're here to help. Contact us directly or schedule a consultation to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:hello@viratsbuildtech.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
