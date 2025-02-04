
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get("IsLogin")?.value;
  
  if (isLogin !== "1" && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLogin === "1" && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
