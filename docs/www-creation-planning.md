# come-and-talk.com: Website Creation Plan

**Status:** Rev 3, includes Codex's review · 2026-10-19 · **Built** (uncommitted), waiting for Eran's install, build and test (§13)
**Stack:** Astro 5 on Cloudflare Workers (the template already in this repo)
**Reference project:** MyGroupOnline website (`../Temp/my-group-online-www-astro-main`), used **only** for its general template and site structure. No copy is taken from it.

---

## 0. Working rules (set by Eran, also in `CLAUDE.md`)

- **No deploying.** Pushing to git auto-deploys, so Claude never pushes.
- **No running tests or builds.** Eran does all testing and deployments.
- **No installing anything** without Eran's explicit permission. No changes to `package.json` or `package-lock.json` dependencies.
- **No changes outside this project folder.**

---

## 1. Goal

A simple, fast, bilingual (EN/HE) marketing site for **CAT (Come And Talk)**. It has three jobs:

1. **Get downloads.** The App Store and Google Play buttons are the main call to action on every page.
2. **Host the pages the app stores and the app point to:**
   - Privacy Policy & Terms
   - Child Safety
   - **Account deletion** (required by Google Play)
3. **Host the Founders Club page.**

It replaces the current Google Sites site at www.come-and-talk.com. Every existing URL has to keep working.

**How success is measured (§6, row 3):**
- **Cloudflare Web Analytics:** visits, sources, page performance.
- **Store consoles:**
  - App Store Connect lists website-driven downloads automatically under App Analytics → Sources → **Web Referrer**, by domain.
  - Google Play links carry a `referrer` UTM tag, so Play Console can attribute them.

---

## 2. Sources

| Source | What it gives us |
|---|---|
| **CAT Flutter app** (`../App/cat`, v4.0.6) | **The source for features and wording.** English and Hebrew UI strings, Founders Club flow, share links, brand artwork. |
| **Backend source** (`../App/Planning/.../functions/src/index.ts`, Swift-era copy) | Confirms the server behaviour behind safety claims (for example, automatic suspension after repeated reports). |
| **App Store listing** | Name, subtitle **"Connect Around Town"**, seller **LDB Local Developing Britain GmbH**, free, 18+, screenshots. Public version **2.7** (Swift). Store URL: `https://apps.apple.com/app/cat-come-and-talk/id6761020027`. |
| **Google Play** | Not published yet. URL: `https://play.google.com/store/apps/details?id=com.comeandtalk.app`. |
| **Live site** (Google Sites) | Legal texts in EN and HE, copied word for word. Support email **cat.service.app@gmail.com**. |

### 2.1 What CAT does

**Launch baseline:** the site only claims features that exist in **both** the public iOS app (Swift 2.7) and the Flutter 4.x release. Flutter is a port of Swift 2.6 with "Swift 2.6 compatibility mandatory", so the list below holds for both. Flutter-only behaviour, such as foreground-only location, is **not** claimed.

| Feature | What it does | Verified in |
|---|---|---|
| **Live map and radar** | See who's around you right now. Search radius 100 m–10 km. GPS or a manually picked place. | `features/map`, `docs/live-discovery.md` |
| **Online / Offline** | Offline hides you from everyone's map and nearby list. | Eran; `status_*`, `toast_now_*` |
| **People Nearby** | List ranked by match, with distance, profile and Send Message. | `nearby_users_page.dart` |
| **Match score** | Based on intent, interests, age and preferences. | `match_info_message` |
| **Chat or Meet Up** | Intent **Chat** or **Meet Up**, with meetup types: Coffee, Drinks, Hang Out, Romantic Date. Plus 26 hobbies. | onboarding strings |
| **Broadcast Nearby** | A short message (up to 150 characters) to everyone in your chosen radius. It stays live for 2 hours, and anyone nearby can reply to open a chat. | `docs/broadcasts.md` |
| **Chat** | Text, photos, voice messages, location sharing. | `features/communication` |
| **Your identity** | Nickname + emoji avatar. You decide when to share more. | onboarding strings |
| **Safety** | 18+ only. **Report** saves a report and blocks the user for you (`firestore_communication_repository.dart:790`). **Automatic suspension:** the backend suspends an account after reports from 5 different users (`functions/src/index.ts:372`). The app tells users the same thing on its report screen (`report_user_notice`), so the site reuses that wording: "accounts that receive multiple reports are suspended". | code + app strings |
| **Delete account** | In the app, under Profile settings. | `settings_screen.dart:393` |
| **Founders Club** | Share the app → friend creates an account → enter the friend's ID code → accept terms → the app **prepares an email** → **the user sends it**. | `founders_club_sheet.dart:42` |

> **Copy rules**
> - Every feature claim matches the app.
> - The Hebrew site reuses the app's own Hebrew terms ("שדר לסביבה", "זמין/כבוי", "התאמה").
> - No "anonymous" or "no location tracking" claims. Your location is visible to nearby users while you're Online.

---

## 3. Site map

| Page | English URL | Hebrew URL | Content |
|---|---|---|---|
| Home | `/` | `/he/` | Marketing and download page. Also the landing page for links shared from the app. |
| Founders Club | `/founders-club` | `/he/founders-club` | Explainer plus the full terms, word for word |
| Privacy Policy & Terms | `/privacy` | `/he/privacy` | Same text as the live site, word for word. The store listings will point here. |
| Child Safety (CSAE) | `/child-safety` | `/he/child-safety` | Word for word. URL for Play Console's child-safety field. |
| **Delete your account** | `/delete-account` | `/he/delete-account` | **New.** Google Play requires a web page where users can request deletion outside the app. The URL goes in Play Console's "Delete account URL" field. Contents in §3.4. |
| Contact | `/contact` | `/he/contact` | Support email, how to report a user or content, link to the deletion page |
| 404 | — | — | "Not found" page (real 404 status) with store buttons |
| ~~Imprint~~ | — | — | **Deferred** by Eran. Listed as a **pre-launch check** (§11), since a German operator falls under §5 DDG. A clearly linked section on Contact may be enough. |

**Header:** logo + "CAT" · Home · Founders Club · Contact · language picker · "Download" button.
**Footer:** tagline, store badges, links (Founders Club, Privacy & Terms, Child Safety, Delete Account, Contact), © 2026 LDB Local Developing Britain GmbH.

### 3.1 Home page

**Audience (Q-A):** a broad mix: spontaneous local conversation and meetups. Dating is one option, not the headline.

1. **Hero:**
   - Headline (Eran): **"Different people, similar needs"** / **"אנשים שונים עם צרכים דומים"**.
   - Subtitle: **"Find nearby people who share your interests and want to chat or meet."** It says straight away what CAT is.
   - Store badges, with the visitor's platform first.
   - The pink-cat street illustration and/or a phone screenshot.
2. **How it works:** 3 steps:
   1. **Create your profile:** nickname, emoji, what you're looking for, hobbies.
   2. **Go Online:** see who's nearby and how well you match.
   3. **Say hi:** send a message or a broadcast, then meet for real.
3. **Features:** 6 cards: Live map and radar · Match score · Chat or Meet Up · Broadcast Nearby · Chat with photos, voice and location · You're in control.
4. **Screenshots strip.**
5. **Safety:**
   - 18+ only, zero tolerance
   - block and report, with repeat offenders suspended
   - delete your account at any time
   - links to Child Safety and Delete Account
6. **Founders Club band:** teaser linking to `/founders-club`.
7. **Short FAQ:** visible on the page, but **without FAQPage structured data** (Google no longer shows FAQ rich results for sites like this). Questions:
   - Who can see me?
   - How do I hide?
   - Is it free?
   - How do I delete my account?
   - What's the Founders Club?
   - How do I report someone?
8. **Final call to action:** store badges.

**Google Play:** the badge always links to the agreed Play URL. It shows "not found" until the listing is published.

### 3.2 Founders Club page

When enrollment closes, edit the invitation text by hand and keep the terms on the page. There's no switch for this (Eran's decision, §13). Change the recruitment copy in **both** `en.ts` and `he.ts`:
- `founders`: title, lead, steps, and the Founders Club page's StoreBadges/steps card;
- `home.foundersBand`, which you might remove instead;
- the FAQ answer "What is the Founders Club?" ("See how to join…");
- `meta.founders.description` ("…join the Founders Club").

**Draft copy:**

> **Join the Founders Club**
> CAT is built together with its first members. Founders Club members who share CAT with friends are eligible to share in **10% of the company's distributable profits**, if and when the company decides to distribute profits.
>
> **How to join**
> 1. Download CAT and create your account.
> 2. Share CAT with a friend who downloads it, creates an account, and uses it.
> 3. In the app, open **Profile → Founders Club**, enter your friend's ID code and accept the program terms.
> 4. Tap **Submit Joining Request**. Your email app opens with the request ready. **Send that email.** Your request is submitted only once it's sent.
>
> **Good to know**
> - Any distribution is split equally among verified members. There is no guaranteed or minimum amount.
> - Membership is a contractual benefit only. It is not shares, equity or voting rights.
> - Approved members can take part in the benefit until **1 January 2027** (the company may extend this date). Enrollment itself may close earlier, at any time.
> - If a distribution is made, you'll be notified and must complete identity verification within 30 days.
>
> *The full terms below are binding and take precedence over this summary.*

**⚠️ The app's own Founders Club text doesn't match the terms.** Eran's call: fix this in the app.
- The **Hebrew** app text (`founders_subtitle` in `app_he.arb`) says "ככל שתצרף יותר חברים, כך יגדל חלקך" ("the more friends you add, the bigger your share"). The terms say distributions are split **equally** among verified members.
- **Both** the EN and HE app texts say "10% of the company's future profits". The terms explicitly say it is **not** 10% of the company's profits; it is 10% of the *Distributable Profit designated for a distribution*.
- **The website will follow the terms, not the app text.**

### 3.3 Legal pages

- `/privacy` and `/he/privacy`: exactly the text of the live `/english` and `/עברית` pages, with section anchors.
- After launch, Eran updates the privacy URL in App Store Connect and Play Console.

### 3.4 Delete account page

- **In the app:** Profile → Settings → **Delete Account**.
- **Without the app (by email):**
  - Send a request to cat.service.app@gmail.com with the subject "Account deletion request".
  - Include your **Profile ID** (copyable in the app's settings) or the email of the Apple/Google account you sign in with.
  - We'll confirm when it's done.
- **What is deleted:** generic wording that matches the privacy policy (Eran's decision, Q-D):
  - Your account and personal information (name, photos, location) are removed from our active databases within a reasonable timeframe.
  - Some information may be kept where the law requires it, or to handle safety reports.
  - No itemised retention list.

---

## 4. Redirects and links from the app

**301 redirects** from the old Google Sites URLs, with and without a trailing slash, and in both raw and percent-encoded Hebrew:

| Old URL | New URL | Who links to it |
|---|---|---|
| `/english` | `/privacy` | Shared links |
| `/עברית` | `/he/privacy` | Shared links |
| `/cat-founders-club` | `/founders-club` | **The app** (Founders Club terms link, EN) |
| `/מועדון-המייסדים` | `/he/founders-club` | **The app** (Founders Club terms link, HE) |

**Notes for the app** (nothing breaks meanwhile):
- **Sign-in screen:** both legal links open the home page (`sign_in_screen.dart:34`). Point them to `/privacy` (`/he/privacy`).
- **Founders Club terms links** (`settings_links.dart`) can move to `/founders-club` and `/he/founders-club`.
- **Founders Club text** in EN and HE contradicts the terms (§3.2).
- **Account deletion:** after launch, put `https://www.come-and-talk.com/delete-account` in Play Console. The app's deletion notes track the web page as open item B2.

---

## 5. Languages and RTL

- **English is the default, at the root** (`/`). **Hebrew at `/he/`**, full RTL.
- More languages later: one translation file each, plus the English legal text with a note.
- No automatic language redirect. The language picker (a dropdown, ready for more languages) keeps you on the same page (`/founders-club` ↔ `/he/founders-club`).
- RTL is done properly: `dir="rtl"`, direction-aware spacing, arrows that flip. Mixed Hebrew/English text (CAT, store names, emails) is wrapped so it reads correctly.

---

## 6. Feature decisions

| # | Feature | Decision |
|---|---|---|
| 1 | Language picker | ✅ Dropdown listing every language, each named in its own language. Keeps the current page. |
| 2 | Dark mode | ✅ Follows the device setting, no toggle |
| 3 | **Measurement** | ✅ **Cloudflare Web Analytics** for traffic (it can't count button clicks). ✅ **App Store:** plain links; App Store Connect's Web Referrer report shows website downloads by domain. ✅ **Google Play:** links carry `&referrer=utm_source%3Dcome-and-talk.com%26utm_medium%3Dwebsite`. |
| 4 | SEO (meta, Open Graph, canonical, hreflang) | ✅ |
| 5 | JSON-LD | ✅ Organization + MobileApplication. ❌ **No FAQPage** markup (low value, per review) |
| 6 | Sitemap (EN + HE) + robots.txt | ✅ |
| 7 | **Preview indexing** | ❌ No switch. Nothing links to the preview, and every page's canonical URL points at `https://www.come-and-talk.com`. A forgotten launch-day flip would be riskier than the preview being crawled. |
| 8 | `/join` deep-link page | ❌ Not needed |
| 9 | Contact page, email only | ✅ |
| 10 | Pricing / Blog / use-case pages | ❌ |
| 11 | Platform-aware store buttons | ✅ |
| 12 | 404 page | ✅ Real 404 status |
| 13 | VS Code tasks | ✅ |

---

## 7. Technical approach

- **Keep the template setup:** Astro 5.16 + `@astrojs/cloudflare`, Worker with static assets, pages pre-rendered.
- **No dependency changes.** Only packages already in `package-lock.json`, so the git auto-deploy build needs no `npm install`.
  - **Plain CSS** (design tokens + scoped component styles), not Tailwind.
  - `@astrojs/mdx` and `@astrojs/rss` stay listed for now.
  - `sharp` (already in the lockfile) handles images.
- **Strip the blog starter.** Add **`.nvmrc`** (Node 22).
- **i18n:**
  - Astro i18n config.
  - Typed dictionaries `src/i18n/en.ts` and `he.ts`.
  - Each page written once as a view, with thin route files for `/x` and `/[lang]/x`.
- **Legal text:** Markdown in a content collection (`src/content/legal/{en,he}/…`), word for word.
- **`src/config.ts`** holds:
  - store URLs and campaign parameters;
  - support email and company name;
- **Official store badges**, downloaded into `public/badges/` (approved by Eran). English badges on both languages: Apple's Hebrew badge couldn't be downloaded from here, and a mixed pair looked inconsistent.
- **Redirects:** the template's `.assetsignore` excludes `_redirects`, so the 301s are small on-demand routes inside the Worker.
- **URLs without a trailing slash** (`build.format: "file"`). Check how the trailing-slash variants behave on the preview (§12).

### 7.1 Domain switchover (done by Eran)

Today `www.come-and-talk.com` is a CNAME to `ghs.googlehosted.com` (Google Sites), and the zone is on Cloudflare. **A Worker Custom Domain can't be added while that CNAME exists.** So:

1. **Before launch:** test on the `*.workers.dev` URL. Nothing on the live domain changes.
2. **Note the old record** for rollback: `www CNAME ghs.googlehosted.com`.
3. Make sure the approved version is pushed.
4. **Delete** the `www` CNAME. Right away, in Workers → the worker → Settings → Domains & Routes, **add Custom Domain** `www.come-and-talk.com`. Cloudflare creates the record and the certificate. Expect a short gap between the two steps.
5. **Bare domain:**
   1. Add a **proxied** DNS record for `come-and-talk.com`, for example `AAAA @ 100::` (proxied, orange cloud). A redirect rule alone isn't enough without one.
   2. Add a **Redirect Rule**: `come-and-talk.com/*` → `https://www.come-and-talk.com/${1}`, 301.
6. **Rollback** if needed:
   1. Remove the Custom Domain.
   2. Re-create `www CNAME ghs.googlehosted.com`. Keep the Google Site published until the new site is confirmed.
7. **After launch:**
   1. Once `www.come-and-talk.com` serves the site, **turn off the `workers.dev` route** (Workers → the worker → Settings → Domains & Routes → workers.dev → Disable). Otherwise the preview address keeps serving copies of every page. They point to www as canonical, but it's cleaner to remove them.
   2. Update the store privacy and deletion URLs.

### 7.2 Planned structure

```
CLAUDE.md         working rules for future sessions
.nvmrc            22
src/
  config.ts       store URLs, email, company name
  components/     Header, Footer, LanguageSwitcher, SEO, StoreBadges, FeatureCard, FAQ…
  layouts/        MainLayout.astro
  i18n/           en.ts, he.ts, utils.ts
  content/legal/  en/{privacy,founders-club,child-safety}.md, he/…
  views/          HomePage, FoundersClubPage, LegalPage, DeleteAccountPage, ContactPage, NotFoundPage
  pages/          index, founders-club, privacy, child-safety, delete-account, contact, 404, legacy redirect routes
    [lang]/       the same pages, as thin wrappers
  assets/         icon, splash illustration, screenshots, mascot
public/
  robots.txt, favicons, store badges
```

---

## 8. Brand and design

- **Look and feel:** clean, mobile-first, with CAT's own artwork.
- **Colours from the artwork:** hot pink, bright blue, lime accent, and cat green for the call to action. Sampled when building.
- **Artwork:**
  - the pink-cat street illustration (hero);
  - the green cat with globe (logo and favicon);
  - the App Store screenshots.
- **Typography:** system font stack.
- **Accessibility:**
  - keyboard navigable, with visible focus and a skip link;
  - WCAG AA contrast in both light and dark themes;
  - alt text on all images.

---

## 9. Materials

**Have:** 1024px icons (default/dark/tinted), splash illustration (1042×1509), small mascot, 3 App Store screenshots, app strings EN + HE, legal texts EN + HE, support email, company name.

**Nice to have:** a transparent, high-resolution green cat mascot. Hebrew screenshots.

---

## 10. Decisions log

| # | Topic | Decision |
|---|---|---|
| Q1 | Google Play | Agreed Play URL, always linked. |
| Q2 | Languages | EN + HE |
| Q3 | Legal structure | Privacy & Terms + Child Safety + Founders Club + **Delete Account** |
| Q4 | Founders Club copy | Claude drafts (§3.2), following the terms |
| Q5 | Deep links | Not needed |
| Q6 | Analytics | Cloudflare Web Analytics + store campaign links |
| Q7 | Imprint | Later; pre-launch check |
| Q10 | Domain | Eran does the DNS switchover (§7.1) |
| Q11 | Features | Answered, plus verified in code (§2.1) |
| — | Contact email | `cat.service.app@gmail.com` |
| — | Dark mode | Follows the device |
| — | Legal typo "klub" | Fixed; otherwise word for word |
| — | Social links / rating badge | None for now |
| Q-A | Audience | Broad mix: local conversation and meetups. Dating is one option, not the lead. |
| Q-B | Launch timing | Both. The site works with the current iOS app now and with the Android/Flutter release later. The Play badge links to the listing from the start. |
| Q-C | Founders Club date | The benefit program text stays as-is. The summary's date line follows the terms' own wording. |
| Q-D | Deletion page | Generic wording in line with the privacy policy (§3.4) |
| Q-E | Apple campaign token | Not needed. App Store Connect's Web Referrer report already shows website downloads by domain. |
| Q-F | Suspension claim | Use the app's own report-screen wording. No further confirmation needed. |

No open questions remain.

---

## 11. Implementation phases

1. **Scaffold:**
   - clean the template;
   - `.nvmrc`, config and CSS tokens;
   - i18n and RTL setup;
   - layout, header, footer and SEO;
   - store badges.
2. **English pages:** Home, Founders Club (both states), Privacy & Terms, Child Safety, Delete Account, Contact, 404, legacy redirects.
3. **Hebrew:** dictionary from the app's Hebrew terms, Hebrew legal texts, RTL pass.
4. **SEO and launch prep:** sitemap, robots, hreflang, JSON-LD, social share image, favicons, campaign links.
5. **Hand-off:**
   1. Claude leaves the changes uncommitted.
   2. Eran installs, builds, tests (§12) and pushes. The push auto-deploys to `*.workers.dev`.
6. **Pre-launch checks:**
   - Imprint decision (§3);
   - store URLs ready to update.
7. **Launch:** Eran does the switchover (§7.1).

---

## 12. Acceptance checklist (for Eran's testing on the preview)

- [ ] Every page renders in EN and HE. Hebrew is RTL, and mixed Hebrew/English text reads correctly.
- [ ] The language picker keeps the current page, and closes with Escape or a click outside.
- [ ] Legacy redirects return **301** to the right page:
  - `/english`, `/cat-founders-club`, `/עברית`, `/מועדון-המייסדים`
  - with and without a trailing slash
  - the Hebrew ones also percent-encoded
- [ ] Page URLs work with and without a trailing slash, and canonical URLs have no trailing slash.
- [ ] An unknown URL returns **status 404** and the 404 page.
- [ ] Store badges go to the correct URLs (with campaign parameters). iOS and Android visitors see their own store first.
- [ ] Every page has a canonical URL on `https://www.come-and-talk.com`. Only the 404 page has `noindex`.
- [ ] Keyboard only: skip link, visible focus, and the menu and language switcher work.
- [ ] Contrast is readable in light and dark themes.
- [ ] Mobile at 360px wide: no horizontal scrolling.
- [ ] Legal texts match the old site word for word (except "klub" → "club").
- [ ] Hebrew legal page doesn't include the old site's internal "דגשים חשובים עבורך כבעל האפליקציה" note (§13).

---

## 13. Implementation notes (2026-10-19)

**Built:** everything in §3 and §6, in both languages, as uncommitted changes. Claude ran no install, build, test or deploy.

**First run (Eran):**
```bash
nvm use            # Node 22 from .nvmrc
npm install        # no dependency changes, so the lockfile stays as is
npm run dev        # http://localhost:4321 and http://localhost:4321/he
npm run build      # then push to deploy the preview
```
Expect a few errors on the first build, since the code was never compiled. Send the output and Claude will fix them.

**Differences from the old site's legal text (all deliberate):**
- **"klub" → "club"** (agreed).
- **Hebrew internal note removed.** The live Hebrew page includes a block headed "דגשים חשובים עבורך כבעל האפליקציה". It was setup advice for the app owner (the App Store privacy section, a Delete Account button), published by mistake.
- **Hebrew Founders Club numbering.** On the live page, the number "1" sat on its own line under "הגדרות". The numbers now sit on the section headings, matching the English text. No wording changed.
- Formatting only: section headings, bullet lists and bold labels made consistent between EN and HE. Quote marks are left exactly as written (Markdown "smart quotes" is off).
- Word-for-word comparison script results: EN differs only by "klub"; HE differs only by the removed note and the numbering.

**Things to know:**
- **Redirects** for the four old URLs are on-demand routes (`src/pages/english.ts` and the others). Two of them have Hebrew file names, which is how Astro matches `/עברית`. Check them on the preview (§12).
- **Images:** the app artwork was copied into `src/assets/`. Favicons and the social share image (a crop of the splash illustration) were made with macOS `sips`. Astro optimizes the images at build time using `sharp`, which is already in the lockfile.
- **Analytics:** no snippet in the code. After launch, turn on Web Analytics' automatic setup for `come-and-talk.com` in the Cloudflare dashboard.
- **No switches (Eran's decision):** the planned `PLAY_STORE_LIVE`, `FOUNDERS_ENROLLMENT_OPEN`, `ALLOW_INDEXING` and analytics-token switches were removed. `src/config.ts` holds only store URLs, email and company name. `robots.txt` is a static file in `public/`.
- **App links:** the app's settings screen also opens the site root for "Privacy Policy" and "Terms of Service" (`settings_screen.dart:403–413`), in addition to the sign-in screen (§4).
