import { NextResponse } from "next/server.js";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locals = ["en", "bn", "fr"];
let defaultLocale = "en";

function getLocale(request) {
  const acceptedLanguages = request.headers.get("Accept-Language") ?? undefined;

  let headers = { "accept-language": acceptedLanguages };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locals, defaultLocale);
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locals.every((locale) => {
    return !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`;
  });

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}/`, request.url),
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
