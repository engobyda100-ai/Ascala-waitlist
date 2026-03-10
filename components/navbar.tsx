"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glass gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/80 via-orange-50/70 to-amber-100/60 backdrop-blur-md" />
      <div className="absolute inset-0 bg-white/50 backdrop-blur-md" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20Icon-zTzwIoQoZwysr3bSKLX9mWkWJIhJZC.png"
          alt="Ascala"
          width={48}
          height={48}
          className="h-10 w-auto"
        />
        <Button 
          onClick={scrollToWaitlist}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
        >
          Join Waitlist
        </Button>
      </div>
    </nav>
  )
}
