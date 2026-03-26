"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const slides = [
  { src: "/demo-1.png", alt: "One Workspace" },
  { src: "/demo-2.png", alt: "Give Context" },
  { src: "/demo-3.png", alt: "Choose Your AI-Persona Tests" },
  { src: "/demo-4.png", alt: "Interact with Ascala Intelligence" },
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
        </div>

        <div className="flex flex-col gap-8">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={2732}
                height={1536}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
