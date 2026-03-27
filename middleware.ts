import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow the login page and login API through
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next()
  }

  // Allow the public waitlist submission endpoint
  if (pathname === "/api/waitlist" || pathname === "/api/waitlist/") {
    return NextResponse.next()
  }

  // Protect admin pages and admin-only API routes (export, delete)
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/waitlist/")) {
    const auth = request.cookies.get("admin_auth")?.value
    if (auth !== "ascala") {
      const loginUrl = new URL("/admin/login", request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/waitlist/:path*"],
}
