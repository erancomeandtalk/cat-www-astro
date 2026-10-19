// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://www.come-and-talk.com",
	// Clean URLs without trailing slashes: /privacy, /he/privacy.
	trailingSlash: "ignore",
	build: {
		format: "file",
	},
	markdown: {
		// Keep the legal texts' quote marks exactly as written (including Hebrew gershayim).
		smartypants: false,
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: "en",
				locales: { en: "en", he: "he" },
			},
			filter: (page) => !page.endsWith("/404"),
		}),
	],
	adapter: cloudflare({
		// Optimize images with sharp at build time (pages are pre-rendered).
		imageService: "compile",
		platformProxy: {
			enabled: true,
		},
	}),
});
