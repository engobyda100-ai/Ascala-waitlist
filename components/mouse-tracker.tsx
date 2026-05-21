"use client"

import { useEffect, useState } from "react"

export function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [hue, setHue] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    let animationId: number
    const animate = () => {
      setHue((prev) => (prev + 2) % 360)
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div
      className={`pointer-events-none fixed w-48 h-48 rounded-full transition-opacity duration-300 ${
        isVisible ? "opacity-10" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, hsl(${hue}, 100%, 50%) 0%, hsla(${hue}, 100%, 40%, 0.15) 30%, transparent 60%)`,
        boxShadow: `0 0 30px hsla(${hue}, 100%, 50%, 0.3)`,
      }}
    />
  )
}
