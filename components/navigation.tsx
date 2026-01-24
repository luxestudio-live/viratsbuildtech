"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/team", label: "Team" },
    { href: "/reviews", label: "Reviews" },
    { href: "/blog", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-serif tracking-tight hover:text-secondary transition-colors duration-300">
            VIRATS BUILDTECH
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium hover:text-secondary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild size="sm" className="button-hover">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-300" 
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Premium */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-background/98 backdrop-blur-md animate-fade-in-up">
            <div className="flex flex-col h-full px-6 py-8 space-y-6">
              <div className="space-y-4">
                {navLinks.map((link, index) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium hover:text-secondary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-muted/50"
                    style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s forwards`, opacity: 0 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex-1" />

              <div className="space-y-4 pb-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full button-hover text-base font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Book Consultation</Link>
                </Button>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground text-center">
                    Transform Your Space Today
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
