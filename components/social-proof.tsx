"use client"

import { useInView } from "@/hooks/use-in-view"

export function SocialProof() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-20 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Avatar stack */}
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-3 border-background bg-gradient-to-br flex items-center justify-center text-white font-semibold text-sm shadow-md"
                  style={{
                    background: `linear-gradient(135deg, hsl(${15 + i * 8}, 65%, ${55 - i * 3}%), hsl(${15 + i * 8}, 70%, ${40 - i * 3}%))`,
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-3 border-background bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shadow-md">
                +500
              </div>
            </div>
          </div>

          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Join <span className="text-primary">500+ founders</span> already on the waitlist
          </p>
          <p className="text-muted-foreground mt-2">
            Be first to test your SaaS with AI personas
          </p>
        </div>
      </div>
    </section>
  )
}
