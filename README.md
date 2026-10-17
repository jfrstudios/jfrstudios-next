# JFR Studios — Next.js Foundation

> Bold digital agency website. Inspired by [nk.studio](https://nk.studio), built with **Next.js 14, TypeScript, Tailwind, GSAP, and Sanity CMS**.

**Brand color:** Lime Green `#BEF264`
**Fonts:** Syne (display) + DM Sans (body)

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
cd jfrstudios-next
npm install
```

### 2. Set up environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```bash
cp .env.local.example .env.local
```

You need:
- **Sanity project** (free) — see step 3 below
- **Web3Forms access key** (free) — get at https://web3forms.com

### 3. Set up Sanity CMS (optional but recommended)

1. Create a free account at https://sanity.io
2. Create a new project — copy the **Project ID**
3. Put it in `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID`
4. Run the studio locally:
   ```bash
   npm run sanity:dev
   ```
6. Or deploy the studio to `jfrstudios.com/studio`:
   ```bash
   npm run sanity:deploy
   ```

### 4. Run the dev server

```bash
npm run dev
```

Visit:
- `http://localhost:3000` — your site
- `http://localhost:3000/studio` — Sanity Studio (after Sanity setup)

---

## 📁 Project Structure

```
jfrstudios-next/
├── app/
│   ├── layout.tsx              # Root layout (Syne + DM Sans + Lenis)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Design tokens & utilities
│   └── studio/[[...tool]]/     # Embedded Sanity Studio
│       └── page.tsx
│
├── components/
│   ├── animations/
│   │   ├── LenisProvider.tsx   # Smooth scroll (nk.studio feel)
│   │   ├── TextReveal.tsx      # Staggered text reveal
│   │   └── useReveal.ts        # IntersectionObserver hook
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav with mobile menu
│   │   └── Footer.tsx          # 4-column footer + big CTA
│   ├── sections/
│   │   ├── Hero.tsx            # Big animated headline + stats
│   │   ├── MarqueeSection.tsx  # Infinite horizontal scroll
│   │   ├── ServicesSection.tsx # 4 services grid
│   │   └── WorkSection.tsx     # Projects grid
│   └── ui/
│       ├── Button.tsx          # Primary / Ghost / Icon variants
│       ├── Container.tsx       # Max-width wrapper
│       └── Section.tsx         # Section with theme + spacing
│
├── lib/
│   ├── utils.ts                # cn(), formatDate(), slugify()
│   └── sanity/
│       ├── client.ts           # Sanity client + urlForImage()
│       └── queries.ts          # GROQ queries + fetch helpers
│
├── sanity/
│   ├── schemas/
│   │   ├── work.ts             # Projects schema
│   │   ├── insight.ts          # Blog posts schema
│   │   ├── testimonial.ts      # Testimonials schema
│   │   └── index.ts
│   └──.config.ts                # Sanity Studio config
│
├── public/                      # Static assets (logos, fonts, OG images)
├── tailwind.config.ts          # Design tokens + theme
├── next.config.mjs             # Next.js config + image domains
└── package.json
```

---

## 🎨 Design System

### Colors
- **Accent (Lime Green):** `#BEF264` — primary CTA, links, highlights
- **Ink (Black):** `#07070A` — background
- **Cream:** `#F5F5F2` — body text on dark

### Typography
- **Display (Syne):** All headlines, h1, h2, h3
- **Body (DM Sans):** Paragraphs, UI elements

### Spacing
- `section` — py-24 md:py-32 xl:py-48

---

## ✅ What's Built (Week 1 Foundation)

- [x] Next.js 14 + TypeScript + Tailwind setup
- [x] Syne + DM Sans via next/font/google (no FOUT)
- [x] Lenis smooth scroll
- [x] Design tokens (colors, fonts, display sizes)
- [x] Header with mobile menu
- [x] Footer with big CTA
- [x] Hero with text reveal animation + GSAP orbs
- [x] Marquee section
- [x] Services grid (4 services)
- [x] Work grid (4 placeholder projects)
- [x] Button / Container / Section UI primitives
- [x] Sanity CMS schemas (work, insight, testimonial)
- [x] SEO metadata + OG tags
- [x] Responsive (works on all screen sizes)

---

## 🔜 Next Steps — Week 2+

### Phase 2 (Week 2)
- [ ] Scroll-triggered GSAP animations on hero
- [ ] Custom cursor (desktop only)
- [ ] Build `Services` page with detailed offerings
- [ ] Build `Work` index + `[slug]` case study pages
- [ ] Wire up Sanity data to `WorkSection`

### Phase 3 (Week 3)
- [ ] Build `About / Studio` page
- [ ] Build `Insights` blog index + post page
- [ ] Build `Contact` page with Web3Forms integration
- [ ] Add testimonials carousel

### Phase 4 (Week 4)
- [ ] Polish animations, easing
- [ ] Optional WebGL hero (R3F)
- [ ] Performance audit
- [ ] Deploy to Vercel
- [ ] Custom domain

---

## 🌐 Deployment

### Vercel (recommended — free)

```bash
npm install -g vercel
vercel
```

Or connect this repo to Vercel via GitHub for auto-deploys.

### Custom domain
1. Buy `jfrstudios.com` from Namecheap / GoDaddy
2. In Vercel: Settings → Domains → Add `jfrstudios.com`
3. Update DNS at registrar with Vercel's records

---

## 💡 Tips

- **Don't fight the design system.** If you need a new color or font, add it to `tailwind.config.ts` and `globals.css` first.
- **Use the `cn()` helper** for conditional Tailwind classes.
- **Prefer `next/image`** for all images — automatic optimization.
- **Keep LenisProvider** wrapping the entire body — it powers smooth scroll site-wide.
- **Use TextReveal** for big headlines to get that nk.studio kinetic feel.

---

## 🆘 Need Help?

When something breaks, tell me which file + which error, and I'll fix it in the same workspace.

Common gotchas:
- **Sanity not connecting?** → Check `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`
- **Lenis not smoothing?** → Make sure `LenisProvider` is in `app/layout.tsx`
- **Font flicker?** → next/font handles this — don't override with `<link>` tags
- **Tailwind classes not applying?** → Restart dev server after config changes

Happy building 💜