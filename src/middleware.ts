import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/auth";

type Role = keyof typeof roleBasedRoutes;

const authRoutes = ["/login", "/signup"];
const roleBasedRoutes = {
  User: ["/profile"],
  Admin: ["/admin", "/profile"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl;

  //{
  //   email: "codernoyon@gmail.com",
  //   role: "User",
  //   iat: 1728718289,
  //   exp: 1728804689,
  // };

  const user = await getCurrentUser();

  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/profile",
    "/profile/:path*",
    "/profile/:page*",
    "/admin",
    "/login",
    "/signup",
  ],
};
