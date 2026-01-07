"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-serif tracking-tight">
            VIRATS BUILDTECH
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm hover:text-muted-foreground transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-sm hover:text-muted-foreground transition-colors">
              Projects
            </Link>
            <Link href="/team" className="text-sm hover:text-muted-foreground transition-colors">
              Team
            </Link>
            <Link href="/reviews" className="text-sm hover:text-muted-foreground transition-colors">
              Reviews
            </Link>
            <Link href="/blog" className="text-sm hover:text-muted-foreground transition-colors">
              Insights
            </Link>
            <Link href="/contact" className="text-sm hover:text-muted-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link href="/about" className="block text-sm hover:text-muted-foreground transition-colors">
              About
            </Link>
            <Link href="/services" className="block text-sm hover:text-muted-foreground transition-colors">
              Services
            </Link>
            <Link href="/projects" className="block text-sm hover:text-muted-foreground transition-colors">
              Projects
            </Link>
            <Link href="/team" className="block text-sm hover:text-muted-foreground transition-colors">
              Team
            </Link>
            <Link href="/reviews" className="block text-sm hover:text-muted-foreground transition-colors">
              Reviews
            </Link>
            <Link href="/blog" className="block text-sm hover:text-muted-foreground transition-colors">
              Insights
            </Link>
            <Link href="/contact" className="block text-sm hover:text-muted-foreground transition-colors">
              Contact
            </Link>
            <Button asChild size="sm" className="w-full">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
