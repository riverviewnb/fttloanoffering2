import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('authorized')?.value;

  if (request.nextUrl.pathname !== '/login' && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Protect all routes except:
     * - static files
     * - API routes
     * - login page itself
     */
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
};
