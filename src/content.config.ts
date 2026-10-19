import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// Legal texts, copied word for word from the old Google Sites pages.
// Entry ids are "<lang>/<name>", e.g. "en/privacy" or "he/founders-club".
const legal = defineCollection({
	loader: glob({ base: "./src/content/legal", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		// Operator line shown under the privacy policy title.
		operator: z.string().optional(),
		// Heading used when the Founders Club terms appear inside the privacy page.
		addendumTitle: z.string().optional(),
	}),
});

export const collections = { legal };
