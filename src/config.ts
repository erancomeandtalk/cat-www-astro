// Site-wide settings. The three switches at the bottom are flipped by hand
// at launch (see docs/www-creation-planning.md §7.1).

export const SITE_URL = "https://www.come-and-talk.com";

export const APP_NAME = "CAT - Come And Talk";
export const COMPANY_NAME = "LDB Local Developing Britain GmbH";
export const SUPPORT_EMAIL = "cat.service.app@gmail.com";

export const APP_STORE_URL = "https://apps.apple.com/app/cat-come-and-talk/id6761020027";

// The referrer tag lets Play Console attribute installs that came from the website.
export const PLAY_STORE_URL =
	"https://play.google.com/store/apps/details?id=com.comeandtalk.app&referrer=utm_source%3Dcome-and-talk.com%26utm_medium%3Dwebsite";

// Cloudflare Web Analytics site token. Leave empty to skip the snippet,
// e.g. when automatic injection is enabled in the Cloudflare dashboard.
export const CF_ANALYTICS_TOKEN: string = "";

// true: the Google Play badge links to the listing.
// false: the badge is shown greyed out with "Coming soon".
export const PLAY_STORE_LIVE: boolean = true;

// true: Founders Club invitation, joining steps and the Home teaser.
// false: "enrollment closed" notice; the terms stay on the page.
export const FOUNDERS_ENROLLMENT_OPEN: boolean = true;

// false while testing on the workers.dev preview: every page gets
// noindex and robots.txt disallows crawling. Set to true in the launch commit.
export const ALLOW_INDEXING: boolean = false;
