export const dynamic = "force-dynamic"

import Redis from "ioredis"
import WaitlistTable from "./WaitlistTable"

interface WaitlistEntry {
  email: string
  submittedAt: string
}

function makeRedis() {
  const url = process.env.REDIS_URL!
  const tls = url.startsWith("rediss://") ? { rejectUnauthorized: false } : undefined
  return new Redis(url, { maxRetriesPerRequest: 1, tls })
}

async function getEntries(): Promise<WaitlistEntry[]> {
  const redis = makeRedis()
  try {
    const raw = await redis.lrange("waitlist", 0, -1)
    return raw.map((entry) => JSON.parse(entry) as WaitlistEntry).reverse()
  } catch {
    return []
  } finally {
    redis.disconnect()
  }
}

export default async function AdminPage() {
  const entries = await getEntries()

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-foreground">Waitlist</h1>
          <a
            href="/api/waitlist/export"
            className="text-sm px-4 py-2 bg-foreground text-background rounded-lg font-medium hover:opacity-80"
          >
            Export CSV
          </a>
        </div>
        <p className="text-muted-foreground mb-6">
          {entries.length} {entries.length === 1 ? "person" : "people"} signed up
        </p>

        {entries.length === 0 ? (
          <p className="text-muted-foreground">No submissions yet.</p>
        ) : (
          <WaitlistTable entries={entries} />
        )}
      </div>
    </div>
  )
}
