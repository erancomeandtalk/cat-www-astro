import { getEntry, render } from "astro:content";
import type { Lang } from "../i18n";

export type LegalName = "terms" | "privacy" | "child-safety" | "founders-club";

// Additional UI languages reuse the original English legal texts (§5 of the plan).
const legalLanguages: Record<Lang, Lang> = {
	en: "en",
	he: "he",
	de: "en",
};

// Loads one legal text (src/content/legal/<lang>/<name>.md) ready to render.
export async function loadLegal(lang: Lang, name: LegalName) {
	const contentLang = legalLanguages[lang];
	const entry = await getEntry("legal", `${contentLang}/${name}`);
	if (!entry) {
		throw new Error(`Missing legal text: src/content/legal/${contentLang}/${name}.md`);
	}
	const { Content } = await render(entry);
	return { data: entry.data, Content, lang: contentLang };
}
