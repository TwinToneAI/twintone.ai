# twintone.ai

[![Deployed on Vercel](https://img.shields.io/badge/Vercel-deployed-black.svg)](https://www.twintone.ai) ![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)

Website for [www.twintone.ai](https://www.twintone.ai) — the TwinTone AI marketing website, deployed on Vercel.

## Overview

This repo contains the TwinTone AI marketing site, originally built in Framer. All pages are server-side rendered HTML with the full Framer runtime (React, Framer Motion, Lottie, Ticker) hydrating client-side for animations, video playback, and interactivity. All assets are self-hosted — zero external CDN dependencies.

**Live site:** https://www.twintone.ai

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
├── twintone/                     # Blog posts (322 pages)
│   └── *.html
├── seobot/                       # SEO tool pages
│   └── *.html
├── assets/                       # All static assets (self-hosted)
│   ├── *.mjs                     # Framer runtime modules (React, Motion, Lottie, etc.)
│   ├── *.mp4                     # Video files (27 files)
│   ├── *.png, *.jpg, *.svg       # Images
│   └── *.woff2                   # Fonts
├── sitemap.xml                   # Full sitemap
├── robots.txt                    # SEO robots file
└── vercel.json                   # Vercel config (cleanUrls, headers)
```

## How It Works

The site was exported from Framer and fully localized:

1. **HTML** — 359 static HTML pages with Framer SSR markup
2. **Assets** — 2,500+ assets downloaded from `framerusercontent.com` to local `assets/`
3. **Runtime** — 79 `.mjs` modules (React 18, Framer Motion, Lottie, Ticker, etc.) self-hosted with original filenames so ES module imports resolve correctly
4. **Hydration** — `data-framer-hydrate-v2` enabled on all pages, so the Framer runtime mounts and handles animations, video autoplay, scroll effects, hover transitions, and interactive components

## Deployment

Deployed automatically via Vercel on every push to `main`.

**Vercel project:** `twintone.ai`
**Team:** TwinTone

## Configuration

`vercel.json` handles:
- `cleanUrls: true` — `/creators` serves `creators.html`
- `trailingSlash: false` — canonical URL format
- Security headers: `X-Content-Type-Options`, `X-Frame-Options`

## Analytics

GA4 (`G-7GTDTQFDMP`) is embedded in every page.

## DNS Configuration

| Type  | Name | Value                  |
|-------|------|------------------------|
| CNAME | www  | cname.vercel-dns.com   |
| A     | @    | 76.76.21.21            |

> **Note:** `app.twintone.ai` is a separate deployment and is unaffected by DNS changes to `www`.

## Related

- **App:** [app.twintone.ai](https://app.twintone.ai) — separate React/Vite deployment
- **Linear:** [TWI2-302](https://linear.app/twintone/issue/TWI2-302) — migration tracking issue

---

<p align="center">Built by <a href="https://www.twintone.ai">TwinTone AI</a></p>
