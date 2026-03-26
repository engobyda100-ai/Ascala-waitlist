import { NextResponse } from "next/server"
import { kv } from "@vercel/kv"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as { email?: string } | null
    const email = body?.email?.trim()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    const existing = await kv.lrange<string>("waitlist", 0, -1)
    const alreadyExists = existing.some((entry) => {
      try { return (JSON.parse(entry) as { email: string }).email === email } catch { return false }
    })

    if (!alreadyExists) {
      await kv.lpush("waitlist", JSON.stringify({ email, submittedAt: new Date().toISOString() }))
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Unable to process the submission" }, { status: 500 })
  }
}
