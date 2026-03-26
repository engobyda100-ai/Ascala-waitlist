import { NextResponse } from "next/server"
import Redis from "ioredis"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function getRedis() {
  return new Redis(process.env.REDIS_URL!, { maxRetriesPerRequest: 1, lazyConnect: true })
}

export async function POST(request: Request) {
  const redis = getRedis()
  try {
    const body = (await request.json().catch(() => null)) as { email?: string } | null
    const email = body?.email?.trim()

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    const existing = await redis.lrange("waitlist", 0, -1)
    const alreadyExists = existing.some((entry) => {
      try { return (JSON.parse(entry) as { email: string }).email === email } catch { return false }
    })

    if (!alreadyExists) {
      await redis.lpush("waitlist", JSON.stringify({ email, submittedAt: new Date().toISOString() }))
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  } finally {
    redis.disconnect()
  }
}
