"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

interface WaitlistFormProps {
  className?: string
}

export function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setStatus("success")
    setEmail("")
  }

  if (status === "success") {
    return (
      <div className={`flex items-center justify-center gap-3 p-6 bg-primary/5 border border-primary/20 rounded-2xl animate-fade-in ${className}`}>
        <CheckCircle2 className="w-6 h-6 text-primary" />
        <span className="text-lg font-semibold text-foreground">
          {"You're on the list! We'll be in touch soon."}
        </span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 max-w-lg mx-auto ${className}`}>
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === "error") setStatus("idle")
          }}
          className="h-14 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-0 rounded-full px-6 text-base transition-all duration-300"
        />
        {status === "error" && (
          <p className="text-destructive text-sm mt-2 text-left pl-4">{errorMessage}</p>
        )}
      </div>
      <Button 
        type="submit"
        disabled={status === "loading"}
        className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold whitespace-nowrap rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-base"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  )
}
