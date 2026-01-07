import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-serif mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Virats BuildTech ("we," "our," or "us") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Project details and requirements you share with us</li>
                <li>Communication preferences and feedback</li>
                <li>Payment and billing information for services rendered</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your inquiries and respond to your requests</li>
                <li>Send you updates about projects and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect our rights and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy or as required by law. We may share information with service
                providers, contractors, and consultants who assist in our operations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also object to or
                restrict certain processing of your data. To exercise these rights, please contact us at
                privacy@viratsbuildtech.com.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                <br />
                Virats BuildTech
                <br />
                123 Design Street, Architecture City, AC 12345
                <br />
                Email: privacy@viratsbuildtech.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
