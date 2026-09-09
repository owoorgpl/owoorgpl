import type { APIContext } from "astro";
import { getCurrentLocaleFromContext } from "../lib/locale";

const modules = import.meta.glob<Record<string, unknown>>(
	'../content/**/*.json',
);

export async function getTranslatedData<T>(
	name: string,
	locale: string,
): Promise<T | null> {
	const path = `../content/${locale}/${name}.json`;

	const loader = modules[path];
	if (!loader) {
		return null;
	}

	const module = await loader();

	const data =
		module && typeof module === 'object' && 'default' in module
			? module.default
			: module;


	return data as T;
}

export async function getTranslatedDataForCurrentLocale<T>(
	name: string,
	context: APIContext): Promise<T | null> {
	const locale = getCurrentLocaleFromContext(context);
	return await getTranslatedData<T>(name, locale);
}

export async function getTranslatedDataForCurrentLocaleOrThrow<T>(name: string, context: APIContext): Promise<T> { 
	const locale = getCurrentLocaleFromContext(context);
	const data = await getTranslatedData<T>(name, locale);
	if (!data) {
		throw new Error(`Failed to load translations for ${name} in locale: ${locale}`);
	}
	
	return data as T;
}