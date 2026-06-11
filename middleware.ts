import { NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  isValidLocale,
  localizePath,
  LOCALE_HEADER,
} from "@/lib/i18n";

const PATHNAME_HEADER = "x-pathname";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/").filter(Boolean)[0];

  if (segment && isValidLocale(segment)) {
    const response = NextResponse.next();
    response.headers.set(LOCALE_HEADER, segment);
    response.headers.set(PATHNAME_HEADER, pathname);
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = localizePath(pathname, defaultLocale);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - API routes
     * - Next.js internals
     * - static files in /public (paths with a file extension)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
