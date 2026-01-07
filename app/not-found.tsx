import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-2xl text-center">
          <h1 className="text-9xl font-serif mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="mr-2" size={20} />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                <ArrowLeft className="mr-2" size={20} />
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
