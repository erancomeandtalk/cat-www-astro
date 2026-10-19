import { getEntry, render } from "astro:content";
import type { Lang } from "../i18n";

export type LegalName = "terms" | "privacy" | "child-safety" | "founders-club";

// Loads one legal text (src/content/legal/<lang>/<name>.md) ready to render.
export async function loadLegal(lang: Lang, name: LegalName) {
	const entry = await getEntry("legal", `${lang}/${name}`);
	if (!entry) {
		throw new Error(`Missing legal text: src/content/legal/${lang}/${name}.md`);
	}
	const { Content } = await render(entry);
	return { data: entry.data, Content };
}
