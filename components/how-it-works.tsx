"use client"

import { useInView } from "@/hooks/use-in-view"
import { Link2, Users, Zap } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Your App and Provide Context",
    description: "Integrate Ascala with your SaaS in minutes. No complex setup required.",
  },
  {
    number: "02",
    icon: Users,
    title: "AI Personas Simulate Users",
    description: "Our AI creates realistic user personas that navigate your app like real customers would.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Get Metrics Instantly",
    description: "Receive SaaS-specific metrics, UX insights, and actionable recommendations.",
  },
]

export function HowItWorks() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            How It Works
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Three simple steps to launch with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`relative p-8 text-center rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-lg shadow-primary/5 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-7xl font-bold text-primary/10">
                {step.number}
              </span>
              <div className="relative z-10 mt-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
