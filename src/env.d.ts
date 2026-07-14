/// <reference path="../.astro/types.d.ts" />

declare namespace App {
	interface Locals {
		locale: import('./lib/locale').Locale;
	}
}