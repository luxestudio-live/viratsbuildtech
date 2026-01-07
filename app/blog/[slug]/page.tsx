import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Image */}
      <section className="pt-20">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img src="/blog-post-hero.jpg" alt="Blog post hero" className="object-cover w-full h-full" />
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2" size={16} />
                Back to Blog
              </Link>
            </Button>
            <Badge variant="secondary">Sustainability</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            The Future of Sustainable Architecture in 2025
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>March 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <span>By David Chen</span>
            </div>
            <Button variant="ghost" size="sm" className="ml-auto">
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground">
            As we move further into 2025, sustainable architecture has evolved from a niche concern to an industry
            imperative. The built environment accounts for nearly 40% of global carbon emissions, making the choices we
            make today crucial for tomorrow's world.
          </p>

          <h2 className="text-3xl font-serif mt-12 mb-4">The Rise of Net-Zero Buildings</h2>
          <p className="leading-relaxed text-muted-foreground">
            Net-zero energy buildings are becoming the new standard. These structures produce as much renewable energy
            as they consume annually, achieved through a combination of energy-efficient design, high-performance
            building envelopes, and on-site renewable energy generation.
          </p>

          <h2 className="text-3xl font-serif mt-12 mb-4">Innovative Materials</h2>
          <p className="leading-relaxed text-muted-foreground">
            The materials revolution is reshaping how we build. Cross-laminated timber (CLT) offers a sustainable
            alternative to steel and concrete for mid-rise construction. Hempcrete, recycled plastics, and bio-based
            insulation materials are gaining traction as architects seek to reduce embodied carbon.
          </p>

          <h2 className="text-3xl font-serif mt-12 mb-4">Biophilic Design Integration</h2>
          <p className="leading-relaxed text-muted-foreground">
            Connecting occupants with nature isn't just aesthetically pleasing—it's essential for wellbeing.
            Incorporating natural light, ventilation, green walls, and views of nature has been shown to improve
            productivity, reduce stress, and enhance overall health.
          </p>

          <h2 className="text-3xl font-serif mt-12 mb-4">Smart Technology and IoT</h2>
          <p className="leading-relaxed text-muted-foreground">
            Building management systems powered by AI and IoT sensors optimize energy use in real-time, learning from
            occupancy patterns and weather data to minimize waste while maintaining comfort. These technologies are
            making buildings not just sustainable, but intelligent.
          </p>

          <h2 className="text-3xl font-serif mt-12 mb-4">Conclusion</h2>
          <p className="leading-relaxed text-muted-foreground">
            The future of architecture is undeniably green. As designers, we have both the responsibility and the
            opportunity to shape a built environment that harmonizes with nature rather than working against it. The
            innovations we're seeing today are just the beginning of a transformation that will define architecture for
            generations to come.
          </p>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-serif mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Biophilic Design Principles",
                image: "/blog-biophilic-design.jpg",
                slug: "biophilic-design-principles",
              },
              {
                title: "Sustainable Materials Guide",
                image: "/blog-sustainable-materials.jpg",
                slug: "sustainable-materials-guide",
              },
              {
                title: "Smart Home Integration",
                image: "/blog-smart-home.jpg",
                slug: "smart-home-integration",
              },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="aspect-[16/10] rounded-sm overflow-hidden mb-4">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-serif group-hover:text-secondary transition-colors">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
