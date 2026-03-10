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

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:bg-white/80 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/15 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
