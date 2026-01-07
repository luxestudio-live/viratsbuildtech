import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, Play } from "lucide-react"
import Link from "next/link"

const reviews = [
  {
    name: "Anjali Mehta",
    role: "Homeowner",
    project: "Riverside Residence",
    rating: 5,
    content:
      "Virats BuildTech transformed our house into a dream home. Their attention to detail and creative vision exceeded all expectations. Every aspect of the design process was handled professionally, and the final result is simply stunning. We receive compliments from everyone who visits.",
    image: "/indian-review-anjali-mehta.jpg",
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    project: "Downtown Office Tower",
    rating: 5,
    content:
      "The team delivered our commercial space on time and within budget. The design is both functional and stunning, creating an environment that our employees love. Virats BuildTech's expertise in commercial architecture is truly exceptional.",
    image: "/indian-review-rajesh-kumar.jpg",
  },
  {
    name: "Deepika Sharma",
    role: "Real Estate Developer",
    project: "Luxury Penthouse Interior",
    rating: 5,
    content:
      "Working with Virats BuildTech has been exceptional. Their architectural expertise and professionalism are unmatched. They understood our vision perfectly and delivered beyond what we imagined. The penthouse interiors have become a benchmark in luxury design.",
    image: "/indian-review-deepika-sharma.jpg",
  },
  {
    name: "Sanjay Kapoor",
    role: "Restaurant Owner",
    project: "Urban Bistro Interior",
    rating: 5,
    content:
      "Virats BuildTech designed an interior that perfectly captures our brand and creates an unforgettable dining experience. Their hospitality design expertise shows in every detail. Customer feedback has been overwhelmingly positive.",
    image: "/indian-review-sanjay-kapoor.jpg",
  },
  {
    name: "Pooja Deshmukh",
    role: "Homeowner",
    project: "Hillside Villa",
    rating: 5,
    content:
      "From the first consultation to final completion, Virats BuildTech demonstrated exceptional skill and dedication. Our hillside villa is a masterpiece that seamlessly integrates with the landscape. We couldn't be happier.",
    image: "/indian-review-pooja-deshmukh.jpg",
  },
  {
    name: "Amit Bose",
    role: "CEO",
    project: "Corporate Headquarters",
    rating: 5,
    content:
      "Virats BuildTech delivered a headquarters building that embodies our company's values and vision. The design is iconic, functional, and sustainable. Their comprehensive approach to the project was impressive.",
    image: "/indian-review-amit-bose.jpg",
  },
  {
    name: "Nisha Rao",
    role: "Boutique Owner",
    project: "Retail Store Interior",
    rating: 5,
    content:
      "The retail interior Virats BuildTech created has significantly enhanced our customer experience and sales. Their understanding of retail design psychology and aesthetics is outstanding.",
    image: "/indian-review-nisha-rao.jpg",
  },
  {
    name: "Vivek Chawla",
    role: "Homeowner",
    project: "Modern Loft Conversion",
    rating: 5,
    content:
      "Virats BuildTech transformed our industrial loft into a stunning modern home. The design maximizes space and light while maintaining the building's character. We're thrilled with the result.",
    image: "/indian-review-vivek-chawla.jpg",
  },
  {
    name: "Shreya Pillai",
    role: "Hotel Owner",
    project: "Seaside Resort Interior",
    rating: 5,
    content:
      "The resort interiors Virats BuildTech designed have elevated our guest experience to new heights. Every room tells a story and creates lasting memories. Our booking rates have increased significantly.",
    image: "/indian-review-shreya-pillai.jpg",
  },
]

const videoTestimonials = [
  {
    name: "Aryan & Isha Khanna",
    project: "Family Home Renovation",
    thumbnail: "/indian-video-testimonial-1.jpg",
  },
  {
    name: "TechCorp Solutions Pvt Ltd",
    project: "Office Redesign",
    thumbnail: "/indian-video-testimonial-2.jpg",
  },
  {
    name: "The Mumbai Grand Hotel",
    project: "Complete Interior Overhaul",
    thumbnail: "/indian-video-testimonial-3.jpg",
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">Client Reviews</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hear directly from our clients about their experiences working with Virats BuildTech
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <Card className="p-12 text-center bg-secondary text-secondary-foreground">
            <div className="max-w-2xl mx-auto">
              <div className="text-6xl font-serif mb-4">4.9</div>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="fill-secondary-foreground text-secondary-foreground" size={28} />
                ))}
              </div>
              <p className="text-lg text-secondary-foreground/90">Based on 150+ client reviews</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-serif mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="fill-secondary text-secondary" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">"{review.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">Project: {review.project}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl font-serif mb-12">Video Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <button
                key={index}
                className="group relative aspect-video rounded-sm overflow-hidden cursor-pointer"
                aria-label={`Play video testimonial from ${video.name}`}
              >
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/90 flex items-center justify-center">
                    <Play className="text-primary ml-1" size={28} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary to-transparent">
                  <div className="text-primary-foreground font-semibold">{video.name}</div>
                  <div className="text-primary-foreground/80 text-sm">{video.project}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Integration */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Find Us on Google</h2>
            <p className="text-muted-foreground mb-8">Read more reviews on our Google Business profile</p>
            <Button asChild size="lg" variant="outline">
              <a href="https://google.com/business" target="_blank" rel="noopener noreferrer">
                View Google Reviews
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <Card className="p-6 text-center">
              <div className="text-4xl font-serif mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Total Reviews</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-serif mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-serif mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-serif mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Become our next success story</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
            Join our growing list of satisfied clients and experience the Virats BuildTech difference
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
