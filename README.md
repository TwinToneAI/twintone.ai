# twintone.ai

[![Deployed on Vercel](https://img.shields.io/badge/Vercel-deployed-black.svg)](https://www.twintone.ai) ![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)

Website for [www.twintone.ai](https://www.twintone.ai) — the TwinTone AI marketing website, deployed on Vercel.

## Overview

This repo contains a fully captured static clone of the TwinTone AI marketing site, originally built in Framer. All pages are server-side rendered HTML with assets loading from the Framer CDN — no build step required.

**Live site:** https://www.twintone.ai
**Preview:** https://twintone-static.vercel.app

## Structure

```
twintone.ai/
├── index.html                    # Homepage
├── creators.html                 # For Creators page
├── blog.html                     # Blog index
├── casestudy.html                # Case study
├── comparison.html               # vs competitors
├── comparison-arcads.html        # vs Arcads
├── dfy-ugc-content-service.html  # Done For You service
├── real-estate.html              # Real estate vertical
├── ai-*.html                     # SEO landing pages
├── *-video-ads-*.html            # Platform pages (TikTok, IG, FB, YT)
├── why-creators-*.html           # Content/blog posts
├── twintone/                     # Blog posts (322 pages)
│   └── *.html
├── sitemap.xml                   # Full sitemap (349 URLs)
├── robots.txt                    # SEO robots file
└── vercel.json                   # Vercel config (cleanUrls, headers)
```

## Deployment

Deployed automatically via Vercel on every push to `main`.

**Vercel project:** `twintone-static`
**Team:** TwinTone

### Manual deploy
```bash
vercel --prod
```

## Configuration

`vercel.json` handles:
- `cleanUrls: true` — `/creators` serves `creators.html` (no .html in URL)
- `trailingSlash: false` — canonical URL format
- Security headers: `X-Content-Type-Options`, `X-Frame-Options`

## Analytics

GA4 (`G-7GTDTQFDMP`) and Amplitude are embedded in every page — no additional setup needed.

## Custom Fixes Applied

The following CSS patches are injected into every HTML file to fix static hosting quirks:

1. **Animation initial states** — Framer animates text letter-by-letter on load using JS. Without Framer's runtime, letters were invisible (`opacity: 0.001`). Patched to `opacity: 1`.
2. **Hero z-index** — Desktop text container elevated above video background layer.
3. **Tablet layout** — Hero video forced to `position: absolute` so text overlays it correctly.
4. **Responsive images/video** — `max-width: 100%; height: auto` on all media.
5. **Overflow** — `overflow-x: hidden` to prevent horizontal scroll at any viewport.

## Re-crawling the Site

To refresh all pages from the live Framer source:

```bash
# Install wget if needed
brew install wget

# Crawl core pages
wget --mirror --convert-links --adjust-extension \
  --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  --no-parent --restrict-file-names=nocontrol \
  -P . https://www.twintone.ai

# Or crawl specific URLs from sitemap
curl -sL https://www.twintone.ai/sitemap.xml \
  | grep -o '<loc>[^<]*</loc>' | sed 's/<[^>]*>//g' \
  > sitemap_urls.txt
```

## DNS Configuration

To point `www.twintone.ai` to this Vercel deployment:

| Type  | Name | Value                  |
|-------|------|------------------------|
| CNAME | www  | cname.vercel-dns.com   |
| A     | @    | 76.76.21.21            |

> **Note:** `app.twintone.ai` is a completely separate deployment and is unaffected by any DNS changes to `www`.

## Related

- **App:** [app.twintone.ai](https://app.twintone.ai) — separate React/Vite deployment, do not touch
- **Linear:** [TWI2-302](https://linear.app/twintone/issue/TWI2-302) — migration tracking issue

---

<p align="center">Built by <a href="https://www.twintone.ai">TwinTone AI</a></p>
