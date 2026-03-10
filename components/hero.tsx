"use client"

import Image from "next/image"
import { WaitlistForm } from "@/components/waitlist-form"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Logo centered */}
        <div className="mb-2 opacity-0 animate-fade-in">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Main%20logo-oEntXT5STuarfEErvtwYhxVRp1UzIQ.png"
            alt="Ascala"
            width={700}
            height={210}
            className="h-48 md:h-60 lg:h-72 w-auto mx-auto"
            priority
          />
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-2 opacity-0 animate-fade-in-up animation-delay-100">
          <span className="text-balance">Ship Your SaaS with Confidence.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 opacity-0 animate-fade-in-up animation-delay-200">
          AI Persona Simulated Testing
        </p>

        <div id="waitlist" className="opacity-0 animate-fade-in-up animation-delay-300">
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}
