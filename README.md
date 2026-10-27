# Abhijith E A Angular Portfolio

An editable Angular 21 portfolio based on the supplied CV. Includes a portrait, project filters, accessible project detail dialogs, complete professional experience, skills, education, certifications, contact links, and a downloadable CV. The personal location line is omitted.

## Run locally

Install Node.js 22.12+ or 24+, then open a terminal in this folder:

```sh
npm install
npm start
```

Open http://127.0.0.1:4200. Alternatively use pnpm 11.25.0 (`pnpm install`, `pnpm start`).

## Production build

```sh
npm run build
```

Upload the contents of `dist/` to any static web host. The relative base URL supports subdirectory hosting. No server, secret keys, or paid services are needed. Contact actions open visitors' email or phone apps; there is no message collection backend. Email copying requires HTTPS or localhost and shows the email address if clipboard access fails.

## Customize

- `src/content.ts`: project contributions, skills, experience, and certifications.
- `src/app.html`: introduction, education, and contact details.
- `src/styles.css`: colors, typography, and responsive layouts.
- `public/portrait.jpg`: profile portrait.
- `public/Abhijith_E_A_CV.pdf`: downloadable CV.

Fonts use Google Fonts with system font fallbacks. The project illustrations are decorative graphics, not screenshots of production systems. No company project source links or live demos have been invented.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds Angular and uploads
`dist/` directly. `angular.json` explicitly sets `outputPath.base` to `dist` and
`outputPath.browser` to an empty string, so the artifact is not `dist/browser`.
Do not configure Jekyll or a `/docs` publishing directory for this project.

1. In repository Settings > Pages > Build and deployment, select **GitHub Actions** as Source. Changing this setting requires repository admin or maintainer access.
2. Commit these deployment changes to `main` (or merge a pull request).
3. Open Actions > Deploy Angular to GitHub Pages and inspect the build and deploy jobs. Use Run workflow if the changes were merged before switching the Pages source.
4. Open https://Abhijithgit.github.io/Abhijith_E_A_Developer_portfolio/ after deployment succeeds.

To reproduce the Pages build locally:

```sh
npm ci
npm run build:pages
```

The Pages build sets `<base href="/Abhijith_E_A_Developer_portfolio/">`.
`public/.nojekyll` is copied to `dist/.nojekyll`. Assets use the same repository
prefix. The workflow needs `contents: read`, and the deployment job needs
`pages: write` and `id-token: write`. It uses the built-in `GITHUB_TOKEN`; no
personal token should be added to the workflow. Repository policy must allow
GitHub Actions and the referenced official actions. Any protection rules for
the `github-pages` environment must permit deployments from `main`.

## Deployment fix verification

`npm ci` and `npm run build:pages` passed with Node.js 24.22.1. The production
bundle is approximately 170 kB before compression. The generated index, base
href, JavaScript/CSS references, static assets, and `.nojekyll` were checked.
Live deployment requires authorized GitHub access and the Pages source setting
above; a local build does not confirm a live deployment.
