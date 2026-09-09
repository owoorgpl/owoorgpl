import { defineMiddleware } from 'astro:middleware';
import {
	DEFAULT_LOCALE,
	SUPPORTED_LOCALES,
	getLocaleFromPath,
	getLocaleFromHeader,
	type Locale,
} from './lib/locale';

const LOCALE_COOKIE = 'locale';
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function shouldBypassMiddleware(pathname: string) {
	return (
		pathname.startsWith('/_astro') ||
		pathname.startsWith('/api/') ||
		pathname.includes('.')
	);
}

export const onRequest = defineMiddleware((context, next) => {
	// Astro preserves context.locals across rewrites. Bailing out here prevents overriding it
	if (context.locals.locale) {
		return next();
	}

	const { url, request, cookies } = context;
	const pathname = url.pathname;

	if (shouldBypassMiddleware(pathname)) {
		return next();
	}

	const pathLocale = getLocaleFromPath(pathname);

	const cookieLocale = cookies.get(LOCALE_COOKIE)?.value as
		Locale | undefined;
	const headerLocale = getLocaleFromHeader(
		request.headers.get('accept-language') ?? undefined,
	);

	// Priority: URL prefix > cookie > browser header > default
	const resolvedLocale: Locale =
		pathLocale ??
		(cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)
			? cookieLocale
			: null) ??
		headerLocale ??
		DEFAULT_LOCALE;

    // Enforce prefix-based routing: redirect non-default locales to prefixed URLs
    if (!pathLocale && resolvedLocale !== DEFAULT_LOCALE) {
        cookies.set(LOCALE_COOKIE, resolvedLocale, {
            path: '/',
            sameSite: 'lax',
            maxAge: LOCALE_COOKIE_MAX_AGE,
        });
        return context.redirect(`/${resolvedLocale}${pathname}`, 307);
    }

	// Assign the resolved locale to locals - this is what we use to get locale
	context.locals.locale = resolvedLocale;

	if (cookieLocale !== resolvedLocale) {
		cookies.set(LOCALE_COOKIE, resolvedLocale, {
			path: '/',
			sameSite: 'lax',
			maxAge: LOCALE_COOKIE_MAX_AGE,
		});
	}

	if (pathLocale) {
		const segments = pathname.split('/');
		if (segments[1] === pathLocale) {
			segments.splice(1, 1); // locale segment only
		}
		const stripped = segments.join('/') || '/';

		return context.rewrite(new URL(stripped, context.url));
	}

	return next();
});
