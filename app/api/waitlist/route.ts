import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json")

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

    const raw = await fs.readFile(DATA_FILE, "utf-8").catch(() => "[]")
    const list = JSON.parse(raw) as { email: string; submittedAt: string }[]

    if (!list.some((entry) => entry.email === email)) {
      list.push({ email, submittedAt: new Date().toISOString() })
      await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2))
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Unable to process the submission" }, { status: 500 })
  }
}
