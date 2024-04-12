import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { JWT_ACCESS_TOKEN_KEY } from "./utils/cookies/token";

// Explicitly specify the return type as NextResponse
export default function middleware(req: NextRequest): NextResponse {
  // req.cookies.get(JWT_ACCESS_TOKEN_KEY)
  const url = req.nextUrl;
  const searchParams = url.searchParams;
  if (url.pathname === "/confirm" && !searchParams.get("user")) {
    return NextResponse.redirect(url.origin);
  }
  if (!req.cookies.get(JWT_ACCESS_TOKEN_KEY) && url.pathname === "/status") {
    return NextResponse.redirect(url.origin);
  }

  // Return a default response if no redirection is needed
  return NextResponse.next();
}
