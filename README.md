# Dhiraj Roy — personal portfolio

A complete, responsive orange-and-white portfolio for Dhiraj Roy, Full Stack & Android App Developer at PPN Solutions Pvt. Ltd. The site includes an original code-editor hero, about section, categorized skills, professional timeline, the featured AUNEXT, सम्पूर्ण बिहार and Dhanush Technologies projects, services, development process, contact CTA, contact form and footer.

The portfolio is statically prerendered and has no local database, account system or tracking. The contact form sends submissions to the existing contact API at `api.dhirajroy.com`.

## Stack

- Next.js 16.3.8, App Router, React 19 and strict TypeScript
- Tailwind CSS 4, with an intentional theme in `src/app/globals.css`
- Framer Motion, using LazyMotion and reduced-motion support
- Lucide React icons
- Geist and Geist Mono, optimized and self-hosted at build time with `next/font`
- ESLint with the Next.js core-web-vitals and TypeScript configurations

Dependency versions are pinned in `package.json` and `package-lock.json`. Node.js **20.9 or newer** is required by Next.js; use a current supported Node.js LTS version (Node 24 recommended for this project).

## Install and run

From the `kumar` directory:

```sh
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. On Windows PowerShell, use `Copy-Item .env.example .env.local`. If your execution policy prevents `npm.ps1` from running, use `npm.cmd` in place of `npm`.

For repeatable installs in CI, use `npm ci`.

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

`npm run build` prerenders the portfolio, 404, robots and sitemap. `npm run start` serves the production build. The standard Next.js output is intentional: it supports Vercel and the requested start command, and allows API routes to be added later. No page currently requires request-time rendering.

The first compilation downloads Geist fonts through `next/font/google`, so development/build environments need access to Google Fonts. The resulting files are self-hosted; visitors do not contact Google to load fonts. See [Next.js font optimization](https://nextjs.org/docs/app/getting-started/fonts).

## Organization

```text
public/
  icon.svg                 Custom DR favicon
src/
  app/
    layout.tsx             Fonts, metadata and motion provider
    page.tsx               Server-rendered page composition and Person JSON-LD
    globals.css            Theme, layouts, responsive and reduced-motion rules
    not-found.tsx          Custom 404
    robots.ts              Static crawler instructions
    sitemap.ts             Static sitemap
  components/              Reusable portfolio sections and UI
  data/
    profile.ts             Personal details, contact information and social URLs
    navigation.ts          Main and footer navigation
    skills.ts              Categorized skills and currently learning
    experience.ts          Employment history and responsibilities
    projects.ts            Portfolio projects, features and links
    services.ts            Services and development process
  lib/
    site.ts                Canonical origin and SEO configuration
    format.ts              Dates, duration and placeholder-link detection
  services/
    portfolio.ts           Typed content repository boundary
    contact.ts             Validation and contact-submission adapter
  types/
    portfolio.ts           Shared content and service interfaces
```

The page and content sections are server components. Client code is limited to navigation behavior, the contact form and subtle reveal animations. Passing server-rendered sections through the animation wrapper does not move their content/data logic into client components.

## Update content

### Profile and social links

Edit `src/data/profile.ts` to change the name, role, company, start date, biography, email, phone, availability and location. Replace the GitHub and LinkedIn `href: "#"` values with your real HTTPS profile URLs. Unconfigured links appear as labeled unavailable items and are excluded from structured data; they never link to nonexistent profiles.

The experience duration and copyright year are calculated when building. Rebuild/redeploy to refresh them as time passes. Employment at PPN Solutions remains May 2026–present. The role includes two technology periods: Laravel, React and MySQL from May–September 2026, then Python, FastAPI, Next.js and Apache Doris from October 2026–present. `profile.currentStack` drives the hero's technology labels and metadata; edit it alongside the experience phases when the current stack changes. No unsupported achievements, clients or skill percentages have been added.

### Projects

Edit `src/data/projects.ts`. Each typed project includes its description, technologies, features, featured flag, visual kind, placeholder status and demo/source URLs. An optional `nativeTitle` adds a title in another language with its HTML language tag, while `demoLabel` can give a project-specific action label. AUNEXT links to https://aunext.in; सम्पूर्ण बिहार links to https://bihar-eight.vercel.app and includes its Hindi title, supplied React/Vite stack and heritage portal features; Dhanush Technologies links to its WhatsApp enquiry flow and documents its lead-management stack. These are the three displayed projects. All are featured; their source links remain unset until repository URLs are provided.

To add another project:

1. Add an entry with accurate copy, technologies and features.
2. Set `demoUrl` and `sourceUrl` to real HTTPS URLs.
3. Set `placeholder: false`.
4. Adjust `featured` to choose the featured card.

`#` URLs render as unavailable text rather than dead links. The lightweight interface previews are illustrations, not actual application screenshots. Replace `ProjectPreview` with `next/image` and real screenshots when available, using known dimensions and descriptive alt text. Setting `placeholder: false` automatically switches the labels to “Key features” and “Featured project”; featured projects use a wider layout on desktop.

### Other content and styling

Edit `skills.ts`, `experience.ts` and `services.ts` for skills, employment, services and process steps. Each section receives typed data from the content service. Update `globals.css` for colors, spacing, typography and responsive behavior. The stylesheet includes layouts for small phones, tablets and large desktops, visible focus states and reduced-motion preferences.

## Contact form behavior

Name, email, subject and message are required; phone is optional. Browser validation is complemented by trimmed-value, length and email validation in `src/services/contact.ts`. Submissions are sent to `POST https://api.dhirajroy.com/api/v1/contact`, and subjects are prefixed with `[Dhiraj Portfolio]` so they can be identified in the shared inbox.

The API URL is configurable through `NEXT_PUBLIC_CONTACT_API_URL`. The backend CORS allowlist must include the production site origins and `http://localhost:3000` for local development. The endpoint enforces its own validation and rate limit of five submissions per IP every 15 minutes.

The form shows sending, success, API validation, rate-limit and network-error states. The submit button is disabled until the client handler is ready. With JavaScript disabled, direct-email links remain available and the form cannot accidentally submit its fields as a URL query.

### Projects, CMS and other content

Replace `getPortfolioContent()` in `src/services/portfolio.ts` with a typed backend/CMS implementation. Keep the return shape so existing sections need no redesign. Validate untrusted API responses at the repository boundary. Use build-time fetching/caching to keep the portfolio static, or opt into revalidation/dynamic rendering when required.

The `src/types`, `src/services`, `src/data` and `src/components` boundaries can support future blog records, testimonials, resume management and CMS adapters. Add admin routes, authentication and analytics only when those features are actually needed; they are not stubbed into this static version.

## SEO and accessibility

- Title, description, canonical URL, Open Graph and large-card Twitter metadata
- Generated 1200×630 social preview image and installable web manifest
- Person JSON-LD with real employment, contact and education information
- Static `robots.txt`, `sitemap.xml`, custom favicon and custom 404
- Semantic landmarks, one H1, ordered heading hierarchy, skip link and visible keyboard focus
- Accessible mobile navigation with expanded state, Escape dismissal and section links
- Properly labeled form fields, native validation, live feedback and safe email encoding
- Noninteractive/decorative project previews excluded from the accessibility tree
- Content remains visible without JavaScript; email and WhatsApp links still work
- Reduced-motion support in Framer Motion and CSS

The social-preview image is generated from the portfolio identity and current technology stack. It can be replaced later with a real profile or project image if preferred.

## Deploy to Vercel

1. Push this project to your Git repository and import it in Vercel.
2. If importing a repository containing the rest of `D:\Project`, set **Root Directory** to `kumar`.
3. Use the detected **Next.js** framework preset, `npm install` (or `npm ci`) and `npm run build`. Leave the output directory at the framework default.
4. Choose Node.js 24 and add `NEXT_PUBLIC_SITE_URL=https://www.dhirajroy.com` to the production environment.
5. Deploy, then add `www.dhirajroy.com` under the project's Domains settings and follow Vercel's DNS instructions. Configure the apex domain to redirect to the same canonical origin.

The site URL must be an absolute HTTP/HTTPS origin. `.env.example` contains no secrets. Never put private tokens in `NEXT_PUBLIC_` variables. The Next.js configuration adds content-type, framing, referrer and permission headers.

This delivery prepares the project for Vercel; it does not create a Vercel deployment or change DNS/domain settings.

## Delivery verification — 6 October 2026

- Production build: all four routes are statically prerendered.
- Development and production servers: verified HTTP 200 responses.
- Browser layouts: 320, 375, 768, 1024, 1440 and 1920px, with no horizontal overflow.
- Text enlargement: 200% at 375 and 1440px, with no page overflow.
- Automated WCAG A/AA checks: zero violations at 375 and 1440px.
- Keyboard skip link, mobile menu, Escape focus, reduced motion and expandable project details: verified.
- Contact validation, API request states and JavaScript-disabled email fallback: verified.
- Metadata, JSON-LD, canonical URL, robots, sitemap, favicon, security headers and 404: verified.
- No browser console errors during the production interaction checks.

## Dependency audit

The initial install reported an unpatched development-only advisory in `braces`, inherited through the official Next.js ESLint configuration (`fast-glob` / `micromatch`). It does not affect the portfolio's production dependency tree. See [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Run `npm audit` and `npm audit --omit=dev` when updating dependencies. Do not apply the suggested forced downgrade to Next.js 14's lint configuration; it is unrelated to the current framework version. Update the official lint tooling when a patched release becomes available.
