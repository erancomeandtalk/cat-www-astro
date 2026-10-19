# CAT website (www.come-and-talk.com)

Astro 5 site on Cloudflare Workers for the CAT (Come And Talk) app. The plan and all decisions are in [docs/www-creation-planning.md](docs/www-creation-planning.md); read it before making changes.

## Working rules (set by Eran)

- **Never deploy and never push.** Pushing to git auto-deploys. Leave changes uncommitted unless Eran asks for a commit.
- **Never run tests, builds or the dev server.** Eran does all testing and deployments.
- **Never install anything** (npm packages, tools, SDKs) without Eran's explicit permission. Don't change dependencies in `package.json` or `package-lock.json`.
- **Never change files outside this project folder.** Reading other folders (for example the app at `../App/cat`) is fine.

## Content rules

- Feature copy must match the app. Source of truth: `../App/cat/lib/l10n/app_en.arb` and `app_he.arb`.
- Legal texts (privacy/terms, child safety, Founders Club terms) are copied word for word from the old site. Don't edit them.
- No "anonymous" or "no location tracking" claims. Location is visible to nearby users while the user is Online.
