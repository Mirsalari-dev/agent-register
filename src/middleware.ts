import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Explicitly specify the return type as NextResponse
export default function middleware(req: NextRequest): NextResponse {
  const url = req.nextUrl;
  const searchParams = url.searchParams;
  if (url.pathname === "/confirm" && !searchParams.get("user")) {
    return NextResponse.redirect(url.origin);
  }

  // Return a default response if no redirection is needed
  return NextResponse.next();
}
