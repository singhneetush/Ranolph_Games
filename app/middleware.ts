// app/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('isLoggedIn');

  // If the user is not logged in and is trying to access a protected route, redirect to login
  if (!isLoggedIn && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Apply middleware to all routes except API, static files, and favicon
export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'], // Match all routes except for excluded patterns
};
