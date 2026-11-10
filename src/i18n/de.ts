import type { Dictionary } from "./en";

// German UI copy. Feature names follow the app's German strings
// (lib/l10n/app_de.arb): Verfügbar / Aus, An die Umgebung senden,
// Match-Wert, Gründerclub, Konto löschen.
// Strings rendered with set:html may contain <strong> only.

const de: Dictionary = {
	meta: {
		home: {
			title: "CAT - Come And Talk | Entdecke, wer in deiner Nähe ist",
			description:
				"Entdecke Leute in deiner Nähe, die deine Interessen teilen und reden oder sich treffen möchten. Live-Karte, Match-Werte, Broadcasts und Chat. Kostenlos herunterladen.",
		},
		founders: {
			title: "Gründerclub | CAT - Come And Talk",
			description: "Teile CAT mit Freunden und tritt dem Gründerclub bei. Erfahre, wie du teilnimmst, und lies die vollständigen Programmbedingungen.",
		},
		privacy: {
			title: "Datenschutz & Nutzungsbedingungen | CAT - Come And Talk",
			description: "Nutzungsbedingungen, Datenschutzerklärung, Standards zum Schutz von Kindern und Gründerclub-Bedingungen von CAT. Rechtstexte auf Englisch.",
		},
		childSafety: {
			title: "Standards zum Schutz von Kindern | CAT - Come And Talk",
			description:
				"CAT ist ausschließlich für Erwachsene ab 18 Jahren. Null Toleranz gegenüber sexuellem Missbrauch und sexueller Ausbeutung von Kindern (CSAE). Richtlinie auf Englisch.",
		},
		deleteAccount: {
			title: "Konto löschen | CAT - Come And Talk",
			description: "So löschst du dein CAT-Konto in der App oder per E-Mail-Anfrage. Erfahre, was mit deinen Daten passiert.",
		},
		contact: {
			title: "Kontakt | CAT - Come And Talk",
			description: "Kontaktiere das CAT-Team, melde Nutzer oder Inhalte oder beantrage die Löschung deines Kontos.",
		},
		notFound: {
			title: "Seite nicht gefunden | CAT - Come And Talk",
			description: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
		},
	},

	a11y: {
		skipToContent: "Zum Inhalt springen",
		mainNav: "Hauptnavigation",
		footerNav: "Fußzeilennavigation",
		menu: "Menü",
		homeLink: "CAT-Startseite",
		language: "Sprache",
	},

	nav: {
		home: "Startseite",
		founders: "Gründerclub",
		contact: "Kontakt",
		download: "Herunterladen",
		privacy: "Datenschutz & Nutzungsbedingungen",
		childSafety: "Schutz von Kindern",
		deleteAccount: "Konto löschen",
	},

	badges: {
		appStore: "Im App Store herunterladen",
		googlePlay: "Jetzt bei Google Play",
	},

	footer: {
		tagline: "Entdecke, wer in deiner Nähe ist.",
		explore: "CAT",
		legal: "Rechtliches",
		getApp: "Hol dir die App",
		rights: "Alle Rechte vorbehalten.",
	},

	home: {
		hero: {
			eyebrow: "Verbinde dich mit Leuten in deiner Umgebung",
			title: "Verschiedene Menschen, ähnliche Bedürfnisse",
			subtitle: "Finde Leute in deiner Nähe, die deine Interessen teilen und reden oder sich treffen möchten.",
			note: "Kostenlos herunterladen · Ab 18 Jahren",
			imageAlt: "Die rosa Katze von CAT schaut durch eine Lupe auf einer bunten Stadtstraße",
			chipOnline: "Verfügbar",
			chipMatch: "95 % Match",
			chipBroadcast: "An die Umgebung senden",
		},
		how: {
			eyebrow: "So funktioniert’s",
			title: "Vom ersten Hallo zum echten Gespräch",
			steps: [
				{
					title: "Erstelle dein Profil",
					text: "Wähle einen Spitznamen und ein Emoji, entscheide, ob du reden oder dich treffen möchtest, und füge deine Hobbys hinzu.",
				},
				{
					title: "Aktiviere deine Verfügbarkeit",
					text: "Lege deinen Suchradius fest und sieh auf der Karte, wer in deiner Nähe ist – mit einem Match-Wert für jede Person.",
				},
				{
					title: "Sag Hallo",
					text: "Sende eine Nachricht oder einen Broadcast an alle in deiner Nähe und mach aus einem digitalen Hallo ein echtes Gespräch.",
				},
			],
		},
		features: {
			eyebrow: "Funktionen",
			title: "Alles, um Leute in deiner Nähe kennenzulernen",
			items: [
				{
					title: "Live-Karte und Radar",
					text: "Sieh, wer gerade in deiner Nähe ist. Wähle einen Suchradius von 100 m bis 10 km – rund um deinen GPS-Standort oder einen Ort deiner Wahl.",
				},
				{
					title: "Match-Wert",
					text: "Bei jeder Person siehst du, wie gut ihr zusammenpasst – basierend auf Absichten, Interessen, Alter und Vorlieben.",
				},
				{
					title: "Reden oder treffen",
					text: "Lust auf ein Gespräch oder ein persönliches Treffen? Gemeinsam Kaffee trinken, auf ein Bier gehen, etwas unternehmen oder ein Date haben.",
				},
				{
					title: "An die Umgebung senden",
					text: "Sende eine kurze Nachricht an alle in deinem Radius. Sie bleibt 2 Stunden aktiv, und alle in der Nähe können antworten und einen Chat starten.",
				},
				{
					title: "Chatte auf deine Art",
					text: "Text, Fotos, Sprachnachrichten und Standortfreigabe – alles in einem Chat.",
				},
				{
					title: "Du hast die Kontrolle",
					text: "Du erscheinst mit Spitznamen und Emoji und entscheidest selbst, wann du persönliche Angaben teilst. Stelle deine Verfügbarkeit auf „Aus“, um von den Karten und Umgebungslisten aller anderen zu verschwinden.",
				},
			],
		},
		screens: {
			eyebrow: "Ein Blick in die App",
			title: "CAT näher kennenlernen",
			items: [
				{
					caption: "Entdecke, wer in deiner Nähe ist",
					alt: "CAT-Willkommensbildschirm mit dem englischen Text „Discover who's around you“",
				},
				{
					caption: "Sieh Leute in deiner Nähe auf der Karte",
					alt: "CAT-Karte mit Leuten im Suchradius und einer Schaltfläche zum Senden eines Broadcasts an die Umgebung",
				},
				{
					caption: "Wer in deiner Umgebung hat Lust zu reden?",
					alt: "Liste „Leute in der Nähe“ mit Match-Werten, Entfernungen und Schaltflächen zum Senden einer Nachricht",
				},
			],
		},
		safety: {
			eyebrow: "Sicherheit",
			title: "Für respektvolle Begegnungen unter Erwachsenen",
			text: "CAT ist ausschließlich für Nutzer ab 18 Jahren. Wir tolerieren keinen Missbrauch.",
			points: [
				{ title: "Nur für Erwachsene", text: "CAT ist ausschließlich für Nutzer ab 18 Jahren." },
				{
					title: "Blockieren und melden",
					text: "Du kannst jederzeit jemanden blockieren. Gemeldete Nutzer werden automatisch für dich blockiert. Konten, zu denen mehrere Meldungen eingehen, werden gesperrt.",
				},
				{
					title: "Null Toleranz",
					text: "Wir verfolgen eine Null-Toleranz-Politik gegenüber allen Inhalten im Zusammenhang mit sexuellem Missbrauch und sexueller Ausbeutung von Kindern.",
				},
				{ title: "Deine Daten, deine Entscheidung", text: "Lösche dein Konto jederzeit direkt in der App." },
			],
			childSafetyLink: "Standards zum Schutz von Kindern",
			deleteLink: "Dein Konto löschen",
		},
		foundersBand: {
			eyebrow: "Gründerclub",
			title: "Lass CAT mit uns wachsen",
			text: "Mitglieder des Gründerclubs, die CAT mit Freunden teilen, können gemeinsam an 10 % des zur Ausschüttung bestimmten ausschüttungsfähigen Gewinns beteiligt werden, sofern und sobald das Unternehmen eine Gewinnausschüttung beschließt. Es gelten die Programmbedingungen.",
			cta: "Über den Gründerclub",
		},
		faq: {
			eyebrow: "FAQ",
			title: "Fragen & Antworten",
			items: [
				{
					q: "Wer kann mich auf CAT sehen?",
					a: "Solange du verfügbar bist, können Leute in deiner Nähe, die CAT nutzen, dich auf ihrer Karte und in ihrer Liste „Leute in der Nähe“ sehen – mit deinem Spitznamen, Emoji, Profil und deiner Entfernung.",
				},
				{
					q: "Wie werde ich unsichtbar?",
					a: "Stelle deine Verfügbarkeit auf „Aus“. Du verschwindest von den Karten und Umgebungslisten aller anderen, bis du deine Verfügbarkeit wieder aktivierst. Solange sie ausgeschaltet ist, siehst auch du keine Leute in deiner Nähe.",
				},
				{ q: "Ist CAT kostenlos?", a: "Ja. Du kannst CAT kostenlos herunterladen und nutzen." },
				{ q: "Wer darf CAT nutzen?", a: "Nur Erwachsene. CAT ist ausschließlich für Nutzer ab 18 Jahren." },
				{
					q: "Wie melde oder blockiere ich jemanden?",
					a: "Öffne das Chat-Menü und wähle „Blockieren“ oder „Nutzer melden“. Gemeldete Nutzer werden automatisch für dich blockiert. Konten, zu denen mehrere Meldungen eingehen, werden gesperrt.",
					link: { page: "contact", label: "Weitere Kontaktmöglichkeiten" },
				},
				{
					q: "Wie lösche ich mein Konto?",
					a: "Öffne in der App „Profil“ und tippe auf „Konto löschen“. Du kannst die Löschung auch per E-Mail beantragen.",
					link: { page: "deleteAccount", label: "So löschst du dein Konto" },
				},
				{
					q: "Was ist der Gründerclub?",
					a: "Ein Programm für frühe Mitglieder, die CAT mit Freunden teilen. Erfahre, wie du mitmachen kannst, und lies die vollständigen Bedingungen.",
					link: { page: "founders", label: "Über den Gründerclub" },
				},
			],
		},
		cta: {
			title: "Bereit zu entdecken, wer in deiner Nähe ist?",
			text: "Lade CAT kostenlos herunter und sag jemandem in deiner Nähe Hallo.",
		},
	},

	founders: {
		eyebrow: "Gründerclub",
		title: "Tritt dem Gründerclub bei",
		lead:
			"CAT entsteht gemeinsam mit seinen ersten Mitgliedern. Mitglieder des Gründerclubs, die CAT mit Freunden teilen, können gemeinsam an 10 % des zur Ausschüttung bestimmten ausschüttungsfähigen Gewinns beteiligt werden, sofern und sobald das Unternehmen eine Gewinnausschüttung beschließt.",
		howTitle: "So machst du mit",
		steps: [
			"Lade CAT herunter und erstelle dein Konto.",
			"Teile CAT mit einem Freund, der die App herunterlädt, ein Konto erstellt und sie nutzt.",
			"Öffne in der App <strong>Profil → Gründerclub</strong>, gib den ID-Code deines Freundes ein und akzeptiere die Programmbedingungen.",
			"Tippe auf <strong>Ich möchte den Gründern beitreten</strong>. Deine E-Mail-App öffnet sich mit der vorbereiteten Anfrage. Sende diese E-Mail ab: Erst dann ist deine Anfrage eingereicht.",
		],
		goodToKnowTitle: "Gut zu wissen",
		goodToKnow: [
			"Jede Ausschüttung wird gleichmäßig unter den verifizierten Mitgliedern aufgeteilt. Es gibt weder einen garantierten Betrag noch einen Mindestbetrag.",
			"Die Mitgliedschaft gewährt ausschließlich einen vertraglichen Vorteil. Sie beinhaltet keine Geschäftsanteile, Kapitalbeteiligung oder Stimmrechte.",
			"Zugelassene Mitglieder können bis zum 1. Januar 2029 an dem Vorteilsprogramm teilnehmen. Das Unternehmen kann dieses Datum verlängern. Die Aufnahme neuer Mitglieder kann jederzeit früher enden.",
			"Wenn eine Ausschüttung erfolgt, wirst du benachrichtigt und musst deine Identität innerhalb von 30 Tagen verifizieren.",
		],
		disclaimer: "Die vollständigen Bedingungen unten sind verbindlich und haben Vorrang vor dieser Zusammenfassung.",
		termsTitle: "Gründerclub-Bedingungen",
	},

	legal: {
		onThisPage: "Auf dieser Seite",
		privacySection: "Datenschutzerklärung",
		relatedTitle: "Weitere Informationen",
		englishNotice: "Die folgenden Rechtstexte werden auf Englisch angezeigt.",
	},

	deleteAccount: {
		eyebrow: "Dein Konto",
		title: "Dein CAT-Konto löschen",
		lead: "Du kannst dein CAT-Konto jederzeit löschen: direkt in der App oder per E-Mail-Anfrage.",
		inAppTitle: "In der App",
		inAppSteps: [
			"Öffne CAT und gehe zu <strong>Profil</strong>.",
			"Tippe auf <strong>Konto löschen</strong>.",
			"Bestätige die Löschung.",
		],
		emailTitle: "Per E-Mail",
		emailText:
			"Sende uns eine E-Mail mit dem Betreff „Anfrage zur Kontolöschung“. Gib deine Profil-ID (in der App unter „Profil“) oder die E-Mail-Adresse des Apple- oder Google-Kontos an, mit dem du dich bei CAT anmeldest. Wir bearbeiten deine Anfrage und bestätigen die Löschung per E-Mail.",
		emailSubject: "Anfrage zur Kontolöschung",
		emailButton: "Kontolöschung per E-Mail beantragen",
		dataTitle: "Was passiert mit deinen Daten?",
		dataText:
			"Wenn dein Konto gelöscht wird, entfernen wir dein Konto und deine personenbezogenen Daten (wie Name, Fotos und Standort) innerhalb eines angemessenen Zeitraums aus unseren aktiven Datenbanken. Einige Informationen können aufbewahrt werden, wenn dies gesetzlich erforderlich ist oder um Sicherheitsmeldungen zu bearbeiten.",
		privacyLink: "Unsere Datenschutzerklärung lesen",
	},

	contact: {
		eyebrow: "Kontakt",
		title: "Kontaktiere uns",
		lead: "Fragen, Feedback oder brauchst du Hilfe? Wir freuen uns auf deine Nachricht.",
		emailTitle: "Schreib uns eine E-Mail",
		emailText: "Du kannst uns jederzeit schreiben. Wir melden uns bei dir.",
		reportTitle: "Nutzer oder Inhalte melden",
		reportText:
			"Öffne in der App das Chat-Menü und wähle „Nutzer melden“. Inhalte oder Verhaltensweisen, die gegen unsere Sicherheitsrichtlinien verstoßen, kannst du auch per E-Mail melden. Wir kümmern uns so schnell wie möglich darum.",
		deleteTitle: "Dein Konto löschen",
		deleteText: "Direkt in der App oder per E-Mail-Anfrage.",
		deleteLink: "So löschst du dein Konto",
		company: "CAT wird betrieben von",
	},

	notFound: {
		title: "Seite nicht gefunden",
		text: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
		home: "Zur Startseite",
		contact: "Kontaktiere uns",
	},
};

export default de;
