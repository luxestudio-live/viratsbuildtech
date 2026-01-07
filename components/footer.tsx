import Link from "next/link"
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-4">VIRATS BUILDTECH</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Transforming spaces through innovative architecture and timeless interior design.
            </p>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-secondary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-secondary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-secondary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#architecture" className="hover:text-secondary transition-colors">
                  Civil Architecture
                </Link>
              </li>
              <li>
                <Link href="/services#interior" className="hover:text-secondary transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services#turnkey" className="hover:text-secondary transition-colors">
                  Turnkey Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#consultation" className="hover:text-secondary transition-colors">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 shrink-0" />
                <span>hello@viratsbuildtech.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>Bandra-Kurla Complex, Bandra East, Mumbai, Maharashtra 400051, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; 2025 Virats BuildTech. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-secondary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
