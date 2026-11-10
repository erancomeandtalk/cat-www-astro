// Every page that exists in all languages, by key. Paths are for the default
// language; other languages are prefixed (/de/privacy, and /de for home).
export const pages = {
	home: "/",
	founders: "/founders-club",
	privacy: "/privacy",
	childSafety: "/child-safety",
	deleteAccount: "/delete-account",
	contact: "/contact",
} as const;

export type PageKey = keyof typeof pages;
