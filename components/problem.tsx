"use client"

import { useInView } from "@/hooks/use-in-view"
import { EyeOff, Clock, BarChart3 } from "lucide-react"

const painPoints = [
  {
    icon: EyeOff,
    title: "Blind Spots in UX",
    description: "You can't see what users struggle with until they churn. By then, it's too late.",
  },
  {
    icon: Clock,
    title: "Slow Feedback Loops",
    description: "Waiting weeks for user feedback means shipping features nobody asked for.",
  },
  {
    icon: BarChart3,
    title: "Lack of Real Metrics",
    description: "Gut feelings don't scale. You need data-driven insights before launch.",
  },
]

export function Problem() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            The Problem with Launching Blind
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Every SaaS founder faces these challenges before launch
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={point.title}
              className={`p-8 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
