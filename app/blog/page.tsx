import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    slug: "future-of-sustainable-architecture",
    title: "The Future of Sustainable Architecture in 2025",
    excerpt:
      "Exploring emerging trends in green building practices, renewable materials, and energy-efficient design principles shaping the architectural landscape.",
    category: "Sustainability",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: "/indian-blog-sustainable-architecture.jpg",
  },
  {
    slug: "minimalist-interior-design-trends",
    title: "Minimalist Interior Design: Less is More",
    excerpt:
      "Discover how minimalist principles create calm, functional spaces that stand the test of time while maximizing comfort and visual appeal.",
    category: "Interior Design Tips",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "/indian-blog-minimalist-design.jpg",
  },
  {
    slug: "riverside-residence-case-study",
    title: "Case Study: Riverside Residence",
    excerpt:
      "An in-depth look at our award-winning residential project, from initial concept through construction challenges to final completion.",
    category: "Case Studies",
    date: "March 5, 2025",
    readTime: "10 min read",
    image: "/indian-blog-case-study-riverside.jpg",
  },
  {
    slug: "biophilic-design-principles",
    title: "Bringing Nature Indoors: Biophilic Design",
    excerpt:
      "Learn how integrating natural elements into architecture and interiors improves wellbeing, productivity, and connection to the environment.",
    category: "Architecture Trends",
    date: "February 28, 2025",
    readTime: "7 min read",
    image: "/indian-blog-biophilic-design.jpg",
  },
  {
    slug: "commercial-space-planning-guide",
    title: "Essential Guide to Commercial Space Planning",
    excerpt:
      "Professional insights on optimizing office layouts for collaboration, productivity, and employee satisfaction in the modern workplace.",
    category: "Interior Design Tips",
    date: "February 20, 2025",
    readTime: "9 min read",
    image: "/indian-blog-commercial-planning.jpg",
  },
  {
    slug: "adaptive-reuse-architecture",
    title: "Adaptive Reuse: Giving New Life to Old Buildings",
    excerpt:
      "The art and challenge of transforming historic structures into contemporary spaces while preserving architectural heritage.",
    category: "Architecture Trends",
    date: "February 15, 2025",
    readTime: "8 min read",
    image: "/indian-blog-adaptive-reuse.jpg",
  },
  {
    slug: "color-psychology-interiors",
    title: "Color Psychology in Interior Design",
    excerpt:
      "Understanding how color choices influence mood, perception, and behavior in residential and commercial spaces.",
    category: "Interior Design Tips",
    date: "February 8, 2025",
    readTime: "6 min read",
    image: "/indian-blog-color-psychology.jpg",
  },
  {
    slug: "smart-home-integration",
    title: "Integrating Smart Technology in Modern Homes",
    excerpt: "How to seamlessly incorporate home automation and smart systems without compromising design aesthetics.",
    category: "Architecture Trends",
    date: "February 1, 2025",
    readTime: "7 min read",
    image: "/indian-blog-smart-home.jpg",
  },
  {
    slug: "sustainable-materials-guide",
    title: "A Guide to Sustainable Building Materials",
    excerpt:
      "Comprehensive overview of eco-friendly materials, their benefits, and how to incorporate them into your next project.",
    category: "Sustainability",
    date: "January 25, 2025",
    readTime: "10 min read",
    image: "/indian-blog-sustainable-materials.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">Insights & Resources</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert perspectives on architecture, interior design, sustainability, and industry trends
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    Featured
                  </Badge>
                  <h2 className="text-3xl font-serif mb-4 group-hover:text-secondary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center text-sm font-medium group-hover:text-secondary transition-colors">
                    Read article <ArrowRight className="ml-2" size={16} />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-serif mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <Badge variant="outline" className="w-fit mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-serif mb-3 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-serif mb-12 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Architecture Trends", count: 24 },
              { name: "Interior Design Tips", count: 31 },
              { name: "Case Studies", count: 18 },
              { name: "Sustainability", count: 15 },
            ].map((category) => (
              <Card key={category.name} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="font-serif text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} articles</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
