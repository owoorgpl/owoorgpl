import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import type { APIContext } from 'astro';
import { getCurrentLocaleFromContext } from '../lib/locale';

const modules = import.meta.glob<Record<string, any>>('../content/**/*.astro');

export async function getTranslatedComponent(
	name: string,
	locale: string,
): Promise<AstroComponentFactory | null> {
	const path = `../content/${locale}/${name}.astro`;

	const loader = modules[path];
	if (!loader) {
		return null;
	}

	const module = await loader();

	return module.default as AstroComponentFactory;
}

export async function getTranslatedComponentForCurrentLocale(name: string, context: APIContext): Promise<AstroComponentFactory | null> {
	const locale = getCurrentLocaleFromContext(context);
	return getTranslatedComponent(name, locale);
}

export async function getTranslatedComponentForCurrentLocaleOrThrow(name: string, context: APIContext): Promise<AstroComponentFactory> {
	const locale = getCurrentLocaleFromContext(context);
	const component = await getTranslatedComponent(name, locale);
	if (!component) {
		throw new Error(`Failed to load translated component for ${name} in locale: ${locale}`);
	}
	return component;
}