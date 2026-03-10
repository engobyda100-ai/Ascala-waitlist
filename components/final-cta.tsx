"use client"

import { useInView } from "@/hooks/use-in-view"
import { WaitlistForm } from "@/components/waitlist-form"

export function FinalCTA() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Ready to Ship with Confidence?
        </h2>
        <p className={`text-xl text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Join the waitlist and be among the first founders to test with AI personas.
        </p>
        <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}
