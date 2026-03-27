import Redis from "ioredis"

function makeRedis() {
  const url = process.env.REDIS_URL!
  const tls = url.startsWith("rediss://") ? { rejectUnauthorized: false } : undefined
  return new Redis(url, { maxRetriesPerRequest: 1, tls })
}

export async function GET() {
  const redis = makeRedis()
  try {
    const raw = await redis.lrange("waitlist", 0, -1)
    const entries = raw
      .map((item) => {
        try { return JSON.parse(item) as { email: string; submittedAt: string } } catch { return null }
      })
      .filter(Boolean)
      .reverse()

    const csv = [
      "Email,Submitted At",
      ...entries.map((e) => `${e!.email},${new Date(e!.submittedAt).toLocaleString()}`),
    ].join("\n")

    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="waitlist-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    })
  } finally {
    redis.disconnect()
  }
}
