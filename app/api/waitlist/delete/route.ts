import { NextResponse } from "next/server"
import Redis from "ioredis"

function makeRedis() {
  const url = process.env.REDIS_URL!
  const tls = url.startsWith("rediss://") ? { rejectUnauthorized: false } : undefined
  return new Redis(url, { maxRetriesPerRequest: 1, tls })
}

export async function POST(request: Request) {
  const redis = makeRedis()
  try {
    const { emails } = (await request.json()) as { emails: string[] }
    if (!Array.isArray(emails) || emails.length === 0) {
      return NextResponse.json({ error: "No emails provided" }, { status: 400 })
    }

    const raw = await redis.lrange("waitlist", 0, -1)
    for (const item of raw) {
      try {
        const parsed = JSON.parse(item) as { email: string }
        if (emails.includes(parsed.email)) {
          await redis.lrem("waitlist", 0, item)
        }
      } catch {}
    }

    return NextResponse.json({ ok: true })
  } finally {
    redis.disconnect()
  }
}
