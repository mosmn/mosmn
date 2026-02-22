# Astro Portfolio (SEO)

This is a static-first Astro portfolio configured for:

- SEO baseline (canonical, Open Graph, Twitter card, sitemap, robots)
- Typed content collections for `projects` and `blog`
- Cloudflare Pages-friendly static deployment

## Commands

- `pnpm dev` — run local dev server
- `pnpm check` — Astro type/content checks
- `pnpm lint` — ESLint
- `pnpm format:ci` — Prettier check
- `pnpm build` — production build
- `pnpm preview` — local preview of built site

## What to update first

1. Set production URL in `astro.config.mjs` (`site`)
2. Set sitemap URL in `public/robots.txt`
3. Replace placeholder links/email in contact pages
4. Add your own entries in:
   - `src/content/projects/*`
   - `src/content/blog/*`
