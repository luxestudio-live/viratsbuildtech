import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto scroll-animate\">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-serif mb-4">What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences and understanding how you use our
                site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use cookies for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Essential website functionality</li>
                <li>Remembering your preferences and settings</li>
                <li>Understanding how visitors use our website</li>
                <li>Improving our services and user experience</li>
                <li>Analytics and performance monitoring</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Types of Cookies We Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.
                They enable basic functions like page navigation and access to secure areas.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Analytics Cookies:</strong> We use these cookies to understand how visitors interact with our
                website, helping us improve functionality and content.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Preference Cookies:</strong> These cookies remember your choices and preferences to provide a
                more personalized experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Most web browsers allow you to control cookies through their settings. You can choose to block or delete
                cookies, though this may affect your ability to use certain features of our website. Visit your
                browser's help section for more information on managing cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, please contact us at privacy@viratsbuildtech.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
