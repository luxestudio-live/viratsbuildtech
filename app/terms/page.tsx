import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto scroll-animate\">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-serif mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the services of Virats BuildTech, you agree to be bound by these
                Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Virats BuildTech provides professional architectural and interior design services. The scope, timeline, and fees
                for each project are defined in individual service agreements. We reserve the right to refuse service to
                anyone for any reason at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All designs, drawings, documents, and other materials created by Virats BuildTech remain our intellectual
                property unless otherwise specified in a written agreement. Clients receive a license to use these
                materials for the specific project for which they were created.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Clients agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Make timely decisions and approvals</li>
                <li>Pay fees according to the agreed schedule</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Virats BuildTech shall not be liable for any indirect, incidental, special, or consequential damages arising out
                of or related to our services. Our total liability shall not exceed the fees paid for the specific
                project in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate a service agreement with written notice. Termination terms, including payment
                for work completed, are specified in individual project agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to our website. Your continued use of our services constitutes acceptance of modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms and Conditions, contact us at:
                <br />
                <br />
                Virats BuildTech
                <br />
                123 Design Street, Architecture City, AC 12345
                <br />
                Email: legal@viratsbuildtech.com
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
