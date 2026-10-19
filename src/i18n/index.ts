import en from "./en";
import he from "./he";
import { pages, type PageKey } from "./pages";

export { pages, type PageKey };

export const languages = {
	en: "English",
	he: "עברית",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

const dictionaries = { en, he };

const rtlLangs: readonly Lang[] = ["he"];

// Open Graph locale for each language.
export const ogLocales: Record<Lang, string> = {
	en: "en_US",
	he: "he_IL",
};

export function useTranslations(lang: Lang) {
	return dictionaries[lang];
}

export function isRTL(lang: Lang): boolean {
	return rtlLangs.includes(lang);
}

export function pathFor(page: PageKey, lang: Lang): string {
	const path = pages[page];
	if (lang === defaultLang) return path;
	return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

export function otherLang(lang: Lang): Lang {
	return lang === "en" ? "he" : "en";
}
