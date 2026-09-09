import type { APIContext } from "astro";

export type Locale = 'pl' | 'en';

export const DEFAULT_LOCALE: Locale = 'pl';
export const SUPPORTED_LOCALES: Locale[] = ['pl', 'en'];

const PREFIXED_LOCALES = SUPPORTED_LOCALES.filter(
	(l): l is Locale => l !== DEFAULT_LOCALE,
);
const PREFIX_REGEX =
	PREFIXED_LOCALES.length > 0
		? new RegExp(`^/(${PREFIXED_LOCALES.join('|')})(?:/|$)`)
		: null;

export function getLocaleFromPath(pathname: string): Locale | null {
	if (!PREFIX_REGEX) return null;
	const match = pathname.match(PREFIX_REGEX);
	return match ? (match[1] as Locale) : null;
}
export function stripLocaleFromPath(pathname: string): string {
	if (!PREFIX_REGEX) return pathname || '/';
	const stripped = pathname.replace(PREFIX_REGEX, '/');
	return stripped || '/';
}

export function getLocaleFromHeader(acceptLanguage?: string): Locale | null {
	if (!acceptLanguage) return null;
	const preferred = acceptLanguage
		.split(',')[0]
		?.split('-')[0]
		?.toLowerCase();
	return SUPPORTED_LOCALES.includes(preferred as Locale)
		? (preferred as Locale)
		: null;
}

export function getCurrentLocaleFromContext(context: APIContext): Locale {
	return context.locals.locale ?? context.currentLocale ?? DEFAULT_LOCALE;
}