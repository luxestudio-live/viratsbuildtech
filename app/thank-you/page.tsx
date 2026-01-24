import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-2xl text-center scroll-animate\">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 mb-6">
            <CheckCircle2 className="text-secondary" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Thank You!</h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We've received your inquiry and will get back to you within 24 hours. Our team is excited to learn more
            about your project and explore how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Return Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">Browse Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
