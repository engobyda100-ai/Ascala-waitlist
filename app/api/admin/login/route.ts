import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { password } = (await request.json()) as { password: string }

  if (password !== "ascala") {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set("admin_auth", "ascala", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  })
  return response
}
