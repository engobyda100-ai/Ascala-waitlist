"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Shiny gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C26A43]/80 via-[#C26A43]/60 to-[#C26A43]/40 backdrop-blur-md" />
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />

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
          className="group relative overflow-hidden bg-white text-primary font-semibold px-8 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-110 active:scale-95"
        >
          <span className="relative z-10">Join Waitlist</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
        </Button>
      </div>
    </nav>
  )
}
