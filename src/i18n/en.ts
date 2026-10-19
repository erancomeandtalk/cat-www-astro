import type { PageKey } from "./pages";

// UI copy. Feature wording follows the app's own strings (lib/l10n/app_en.arb).
// Strings rendered with set:html may contain <strong> only.

export interface FaqItem {
	q: string;
	a: string;
	link?: { page: PageKey; label: string };
}

export interface Card {
	title: string;
	text: string;
}

export interface Screenshot {
	caption: string;
	alt: string;
}

const en = {
	meta: {
		home: {
			title: "CAT - Come And Talk | Discover who's around you",
			description:
				"Discover people nearby who share your interests and want to chat or meet. Live map, match scores, Broadcast Nearby and chat. Free to download.",
		},
		founders: {
			title: "Founders Club | CAT - Come And Talk",
			description: "Share CAT with friends and join the Founders Club. How to join, and the full program terms.",
		},
		privacy: {
			title: "Privacy Policy & Terms | CAT - Come And Talk",
			description: "CAT's Terms of Use, Privacy Policy, Child Safety Standards and Founders Club terms.",
		},
		childSafety: {
			title: "Child Safety Standards | CAT - Come And Talk",
			description:
				"CAT is for adults 18+ only, with zero tolerance for child sexual abuse and exploitation (CSAE). How to report concerns.",
		},
		deleteAccount: {
			title: "Delete your account | CAT - Come And Talk",
			description: "How to delete your CAT account, in the app or by email request, and what happens to your data.",
		},
		contact: {
			title: "Contact | CAT - Come And Talk",
			description: "Get in touch with the CAT team, report a user or content, or request account deletion.",
		},
		notFound: {
			title: "Page not found | CAT - Come And Talk",
			description: "The page you're looking for doesn't exist or has moved.",
		},
	},

	a11y: {
		skipToContent: "Skip to content",
		mainNav: "Main",
		footerNav: "Footer",
		menu: "Menu",
		homeLink: "CAT home",
	},

	nav: {
		home: "Home",
		founders: "Founders Club",
		contact: "Contact",
		download: "Download",
		privacy: "Privacy Policy & Terms",
		childSafety: "Child Safety",
		deleteAccount: "Delete Account",
	},

	badges: {
		appStore: "Download on the App Store",
		googlePlay: "Get it on Google Play",
	},

	footer: {
		tagline: "Discover who's around you.",
		explore: "CAT",
		legal: "Legal",
		getApp: "Get the app",
		rights: "All rights reserved.",
	},

	home: {
		hero: {
			eyebrow: "Connect Around Town",
			title: "Discover who's around you",
			subtitle: "Find nearby people who share your interests and want to chat or meet.",
			note: "Free to download · Adults 18+",
			imageAlt: "CAT's pink cat looking through a magnifying glass on a colorful city street",
			chipOnline: "Online",
			chipMatch: "95% Match",
			chipBroadcast: "Broadcast Nearby",
		},
		how: {
			eyebrow: "How it works",
			title: "From hello to a real conversation",
			steps: [
				{
					title: "Create your profile",
					text: "Pick a nickname and an emoji, choose whether you're up for a chat or a meetup, and add your hobbies.",
				},
				{
					title: "Go Online",
					text: "Set your search radius and see who's around you on the map, with a match score for each person.",
				},
				{
					title: "Say hi",
					text: "Send a message or a broadcast to everyone nearby, and go from a digital hello to a real conversation.",
				},
			] as Card[],
		},
		features: {
			eyebrow: "Features",
			title: "Everything you need to connect nearby",
			items: [
				{
					title: "Live map and radar",
					text: "See who's around you right now. Set a search radius from 100 m up to 10 km, using your GPS or a place you pick.",
				},
				{
					title: "Match score",
					text: "Every person shows how well you match, based on your intent, interests, age and preferences.",
				},
				{
					title: "Chat or meet up",
					text: "Looking for a conversation or an in-person meetup? Grab coffee, grab drinks, hang out or go on a date.",
				},
				{
					title: "Broadcast Nearby",
					text: "Send a short message to everyone in your radius. It stays live for 2 hours, and anyone nearby can reply to start a chat.",
				},
				{
					title: "Chat your way",
					text: "Text, photos, voice messages and location sharing, all in one chat.",
				},
				{
					title: "You're in control",
					text: "Appear with a nickname and an emoji, and share personal details only when you decide. Go Offline to disappear from everyone's map and nearby list.",
				},
			] as Card[],
		},
		screens: {
			eyebrow: "Inside the app",
			title: "A closer look at CAT",
			items: [
				{
					caption: "Discover who's around you",
					alt: "CAT welcome screen with the caption “Discover who's around you”",
				},
				{
					caption: "See people nearby on the map",
					alt: "CAT map showing nearby people within the search range, with a Broadcast Nearby button",
				},
				{
					caption: "Who's available to chat in your area?",
					alt: "People Nearby list showing match scores, distances and Send Message buttons",
				},
			] as Screenshot[],
		},
		safety: {
			eyebrow: "Safety",
			title: "Built for respectful, adult connections",
			text: "CAT is strictly for users aged 18 and older, with zero tolerance for abuse.",
			points: [
				{ title: "Adults only", text: "CAT is strictly for users aged 18 and older." },
				{
					title: "Block and report",
					text: "Block anyone at any time. A reported user is automatically blocked from your view, and accounts that receive multiple reports are suspended.",
				},
				{
					title: "Zero tolerance",
					text: "We enforce a zero-tolerance policy for any content related to child sexual abuse and exploitation.",
				},
				{ title: "Your data, your call", text: "Delete your account at any time, right from the app." },
			] as Card[],
			childSafetyLink: "Child Safety Standards",
			deleteLink: "Delete your account",
		},
		foundersBand: {
			eyebrow: "Founders Club",
			title: "Grow CAT with us",
			text: "Founders Club members who share CAT with friends are eligible to share in 10% of the Distributable Profit designated for distribution, if and when the company decides to distribute profits. Terms apply.",
			cta: "About the Founders Club",
		},
		faq: {
			eyebrow: "FAQ",
			title: "Questions & answers",
			items: [
				{
					q: "Who can see me on CAT?",
					a: "While you're Online, people using CAT near you can see you on their map and in their People Nearby list, with your nickname, emoji, profile and distance.",
				},
				{
					q: "How do I hide?",
					a: "Switch to Offline. You'll disappear from everyone's map and nearby list until you go Online again. While you're Offline, you won't see people around you either.",
				},
				{ q: "Is CAT free?", a: "Yes. CAT is free to download and use." },
				{ q: "Who can use CAT?", a: "Adults only. CAT is strictly for users aged 18 and older." },
				{
					q: "How do I report or block someone?",
					a: "Open the chat menu and choose Block or Report User. A reported user is automatically blocked from your view, and accounts that receive multiple reports are suspended.",
					link: { page: "contact", label: "Other ways to reach us" },
				},
				{
					q: "How do I delete my account?",
					a: "In the app, open Profile and tap Delete Account. You can also request deletion by email.",
					link: { page: "deleteAccount", label: "How to delete your account" },
				},
				{
					q: "What is the Founders Club?",
					a: "A program for early members who share CAT with friends. See how to join and read the full terms.",
					link: { page: "founders", label: "About the Founders Club" },
				},
			] as FaqItem[],
		},
		cta: {
			title: "Ready to see who's around?",
			text: "Download CAT for free and say hi to someone nearby.",
		},
	},

	founders: {
		eyebrow: "Founders Club",
		title: "Join the Founders Club",
		lead:
			"CAT is built together with its first members. Founders Club members who share CAT with friends are eligible to share in 10% of the Distributable Profit designated for distribution, if and when the company decides to distribute profits.",
		howTitle: "How to join",
		steps: [
			"Download CAT and create your account.",
			"Share CAT with a friend who downloads it, creates an account and uses it.",
			"In the app, open <strong>Profile → Founders Club</strong>, enter your friend's ID code and accept the program terms.",
			"Tap <strong>Submit Joining Request</strong>. Your email app opens with the request ready. Send that email: your request is submitted only once it's sent.",
		],
		goodToKnowTitle: "Good to know",
		goodToKnow: [
			"Any distribution is split equally among verified members. There is no guaranteed or minimum amount.",
			"Membership is a contractual benefit only. It is not shares, equity or voting rights.",
			"Approved members can take part in the benefit until 1 January 2027 (the company may extend this date). Enrollment itself may close earlier, at any time.",
			"If a distribution is made, you'll be notified and must complete identity verification within 30 days.",
		],
		disclaimer: "The full terms below are binding and take precedence over this summary.",
		termsTitle: "Founders Club terms",
	},

	legal: {
		onThisPage: "On this page",
		privacySection: "Privacy Policy",
		relatedTitle: "Related",
	},

	deleteAccount: {
		eyebrow: "Your account",
		title: "Delete your CAT account",
		lead: "You can delete your CAT account at any time: in the app, or by sending us a request by email.",
		inAppTitle: "In the app",
		inAppSteps: [
			"Open CAT and go to <strong>Profile</strong>.",
			"Tap <strong>Delete Account</strong>.",
			"Confirm the deletion.",
		],
		emailTitle: "By email",
		emailText:
			"Send us an email with the subject “Account deletion request”. Include your Profile ID (shown under Profile in the app) or the email address of the Apple or Google account you use to sign in to CAT. We'll handle your request and confirm by email.",
		emailSubject: "Account deletion request",
		emailButton: "Email a deletion request",
		dataTitle: "What happens to your data",
		dataText:
			"When your account is deleted, your account and personal information (such as your name, photos and location) are removed from our active databases within a reasonable timeframe. Some information may be kept where the law requires it, or to handle safety reports.",
		privacyLink: "Read our Privacy Policy",
	},

	contact: {
		eyebrow: "Contact",
		title: "Contact us",
		lead: "Questions, feedback or need help? We'd love to hear from you.",
		emailTitle: "Email us",
		emailText: "Write to us any time and we'll get back to you.",
		reportTitle: "Report a user or content",
		reportText:
			"In the app, open the chat menu and choose Report User. You can also report content or behavior that violates our safety guidelines by email, and we will handle it as quickly as possible.",
		deleteTitle: "Delete your account",
		deleteText: "In the app, or by sending us a request by email.",
		deleteLink: "How to delete your account",
		company: "CAT is operated by",
	},

	notFound: {
		title: "Page not found",
		text: "The page you're looking for doesn't exist or has moved.",
		home: "Back to home",
		contact: "Contact us",
	},
};

export default en;

export type Dictionary = typeof en;
