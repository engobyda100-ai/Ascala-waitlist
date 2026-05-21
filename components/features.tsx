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
    <section ref={ref} className="py-24 px-6 bg-gradient-to-r from-white via-[#E6CFB0]/20 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Built for Founders
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Everything you need to validate your SaaS before launch
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`p-6 border-2 border-[#C26A43]/20 rounded-2xl hover:border-[#C26A43]/50 hover:bg-[#C26A43]/5 transition-all duration-500 group ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isInView ? `${(index + 1) * 100}ms` : '0ms',
                }}
              >
                <div className="mb-4 p-3 bg-[#C26A43]/10 group-hover:bg-[#C26A43]/20 w-fit rounded-lg transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#C26A43] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
