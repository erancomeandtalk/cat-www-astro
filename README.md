# CAT – Come And Talk website

Marketing site for the CAT app at **www.come-and-talk.com**. Built with Astro 5, deployed as a Cloudflare Worker with static assets. English at `/`, Hebrew (RTL) at `/he`.

The plan, decisions and launch steps are in [docs/www-creation-planning.md](docs/www-creation-planning.md).

## Commands

Use Node 22 (`nvm use` picks it up from `.nvmrc`).

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Dev server at `localhost:4321`                  |
| `npm run build`   | Build to `./dist/`                              |
| `npm run preview` | Build, then run it locally with Wrangler        |

Pushing to git deploys automatically.

## Switches (`src/config.ts`)

| Setting                    | What it does                                                                        |
| :------------------------- | :---------------------------------------------------------------------------------- |
| `PLAY_STORE_LIVE`          | `true`: Google Play badge links to the listing. `false`: greyed out, "Coming soon". |
| `FOUNDERS_ENROLLMENT_OPEN` | `false`: Founders Club page shows "enrollment closed" (terms stay); Home hides the teaser. |
| `ALLOW_INDEXING`           | `false` until launch: `noindex` on every page and `Disallow: /` in robots.txt.       |
| `CF_ANALYTICS_TOKEN`       | Cloudflare Web Analytics token. Empty = no snippet.                                 |

Store URLs, support email and company name are in the same file.

## Where things are

| Path                       | Contents                                                                 |
| :------------------------- | :----------------------------------------------------------------------- |
| `src/i18n/en.ts`, `he.ts`  | All UI copy. Feature wording follows the app's strings.                  |
| `src/content/legal/{en,he}` | Legal texts, word for word from the old site. Edit only when the legal text changes. |
| `src/views/`               | One component per page, shared by both languages.                        |
| `src/pages/`, `src/pages/he/` | Thin route files that render a view with `lang="en"` or `lang="he"`.  |
| `src/pages/english.ts` etc. | 301 redirects from the old Google Sites URLs (run in the Worker).       |
| `src/styles/global.css`    | All styles: design tokens, light/dark themes, components.                |
| `src/assets/`              | App artwork, optimized at build time.                                     |
| `public/badges/`           | Official App Store and Google Play badges.                               |

## Pages

| Page | English | Hebrew |
| :--- | :--- | :--- |
| Home | `/` | `/he` |
| Founders Club | `/founders-club` | `/he/founders-club` |
| Privacy Policy & Terms | `/privacy` | `/he/privacy` |
| Child Safety | `/child-safety` | `/he/child-safety` |
| Delete Account | `/delete-account` | `/he/delete-account` |
| Contact | `/contact` | `/he/contact` |

Old URLs `/english`, `/עברית`, `/cat-founders-club` and `/מועדון-המייסדים` redirect (301) to the new pages.

## Adding a language

1. Add a dictionary in `src/i18n/` (typed against `en.ts`) and register it in `src/i18n/index.ts`.
2. Add route files under `src/pages/<lang>/` like the Hebrew ones.
3. Add legal texts under `src/content/legal/<lang>/`, or reuse English.
4. Add the locale to the sitemap settings in `astro.config.mjs`.
