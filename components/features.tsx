"use client"

import { useInView } from "@/hooks/use-in-view"
import { Bot, LayoutDashboard, Rocket, Shield } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Personas",
    description: "Realistic AI users that behave like your target customers. Test every user flow before launch.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Metrics Dashboard",
    description: "Track activation rates, time-to-value, and feature adoption with a purpose-built dashboard.",
  },
  {
    icon: Rocket,
    title: "Speed of Feedback",
    description: "Get insights in hours, not weeks. Iterate faster and ship with confidence.",
  },
  {
    icon: Shield,
    title: "Founder Confidence",
    description: "Make data-driven decisions. Know your product is ready before real users touch it.",
  },
]

export function Features() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Built for Founders
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Everything you need to validate your SaaS before launch
          </p>
        </div>
      </div>
    </section>
  )
}
