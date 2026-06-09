# ClearNotes — Build Plan

## 1. PRODUCT

ClearNotes is an AI-powered note-taking app that organizes itself. Knowledge workers and students open a blank page, write or paste their messy stream-of-consciousness notes, and ClearNotes' "Orbit" engine auto-sorts them into a clean hierarchy of Topics → Subtopics → individual notes, suggests tags and links, and surfaces a daily "Today's Focus" digest. The product removes the single biggest friction in personal knowledge management: the manual labor of deciding *where a note belongs* and *how to find it later*. The landing page's job is to communicate that promise in under 5 seconds, prove it with a real interactive demo, and convert visitors to a waitlist email signup.

The research ICP for this category (knowledge workers, students drowning in scattered notes across Notion, Apple Notes, Google Docs, and ChatGPT threads) is time-poor and skeptical of yet-another-AI-app, so the page must lead with a tangible product moment, not a manifesto.

## 2. WHO IT'S FOR

**Primary ICP:** Knowledge workers (consultants, PMs, researchers, writers) aged 25–40 who already take notes daily and feel guilt about the mess. They use 2–3 note apps at once, lose important thoughts in ChatGPT, and have tried Notion templates that collapsed under their own weight.

**Secondary ICP:** University students (18–24) juggling lecture notes, readings, and revision.

**Design implications:**
- **Tone:** Warm, calm, slightly playful ("Warm Catalyst" vibe) — not corporate SaaS, not Gen-Z chaotic. Friendly like a competent friend, not a sales rep.
- **Density:** Medium. Not minimalist-bro, not Notion-cluttered. Real screenshots of real product, not abstract illustrations.
- **Proof:** Show the *product* working in-browser (interactive demo), not testimonials. Students and over-tooled knowledge workers are immune to "Join 10,000+ users" copy — they want to see the magic.
- **Headline tone:** Plain language, not hype. "Notes that organize themselves" beats "Harness the power of AI for your second brain."

## 3. LOOK & FEEL

### Visual System

**Overall vibe:** Warm, soft, modern. Like a well-lit study with a MacBook and a ceramic mug. White space is generous but pages are not empty — they're anchored by one strong color (violet) and warmed by coral/honey accents. Slight roundedness (12–20px radius) on cards, buttons, and inputs. Subtle grain/noise texture on the warm off-white background for tactility.

**Color palette (CSS variables in `globals.css`):**
- `--ink: #1F1535` (near-black violet for body text — softer than pure black)
- `--ink-muted: #5B4B7A` (secondary text)
- `--violet: #7C3AED` (primary brand, CTAs, links, key accents)
- `--violet-soft: #EDE4FF` (tinted backgrounds, hover states)
- `--coral: #F97316` (secondary accent, highlights, the "Orbit" motif color)
- `--coral-soft: #FFE7D6`
- `--honey: #FBBF24` (tertiary, used sparingly for "spark" moments — the AI suggestions, the cursor in the demo)
- `--cream: #FFFBEB` (page background)
- `--cream-2: #FEF3E2` (alternate section background)
- `--line: #E8DFD0` (borders, dividers — warm, not cold gray)
- `--success: #16A34A`, `--danger: #DC2626` (functional only)

**Typography:**
- Headings: **Manrope** (weights 500, 600, 700, 800). Tight letter-spacing on display sizes (-0.02em).
- Body: **Source Sans 3** (weights 400, 500, 600). Comfortable reading size (18px base on desktop, 16px mobile).
- Scale: Display 72/80, H1 56/64, H2 40/48, H3 28/36, H4 20/28, body 18/28, small 14/20.
- All headings in `--ink` (not pure black) so they sit warmly on cream.
- Inline `<code>` and the demo's note text use **JetBrains Mono** for contrast with the cursive feel of body.

**Spacing & layout:**
- 8px base grid. Section vertical padding: 96px desktop, 64px mobile.
- Max content width: 1200px for text sections, 1280px for the demo, 1120px for nav and footer.
- Two-column split (60/40 or 55/45) for hero, features alternate left-right to create rhythm.
- Cards: 16–20px padding, 16px radius, 1px `--line` border + soft shadow (`0 1px 2px rgba(31,21,53,.04), 0 8px 24px rgba(124,58,237,.06)`).

**Iconography:** Lucide icons throughout, 1.75px stroke, 20px default size. Coral-tinted for the Orbit motif (a stylized 3-orbit ring drawn as inline SVG, not an icon font).

**Imagery:** No stock photos of smiling people with laptops. Instead: real product screenshots (mocked with the actual UI), one hand-drawn-style "messy desk → organized desk" SVG illustration in the How It Works section, and the Orbit motif as a recurring visual anchor (a soft animated SVG of three concentric rings drifting around a violet center).

**Interaction & motion:**
- Scroll reveal: subtle fade + 8px upward translate, 600ms ease-out, staggered 80ms between siblings. No parallax.
- Buttons: 200ms color shift, scale 0.98 on press.
- The interactive demo: 2-second loop showing messy notes typing in, then "thinking" pause (honey-pulsing dot), then re-organizing into clean cards with a soft slide. Triggered both auto-play (on scroll into view) and on a "Try it again" button click.
- Orbit motif: very slow CSS rotation (60s loop), with one small coral dot that drifts along the ring (8s loop). Background-only, never distracting.
- No scroll-jacking, no video backgrounds, no aggressive carousels.

### Screens (Sections of the Single-Page Site)

The marketing site is a **single page** at `/` with anchored sections, plus three utility routes (`/waitlist/thanks`, `/privacy`, `/terms`) and a `/blog` stub (empty index, marked "coming soon") for future SEO. Below is the top-to-bottom layout of `/`.

**A. Sticky Nav (transparent on hero, gains cream background + bottom border after 80px scroll)**
- Left: ClearNotes wordmark + small Orbit SVG mark.
- Center (desktop): Features · How it works · Pricing · FAQ (anchor links).
- Right: "Join waitlist" violet pill button.
- Mobile: hamburger that opens a full-screen sheet with the same links and a primary CTA at the bottom.

**B. Hero**
- Eyebrow chip: "✨ AI that organizes your notes" (honey background, ink text, small).
- H1 (Manrope 56–72px, weight 700, --ink): "Notes that organize themselves."
- Subhead (Source Sans 20px, --ink-muted, max 600px): "Write the way you think. ClearNotes sorts, tags, and connects your notes automatically — so you stop filing and start finding."
- Primary CTA: "Join the waitlist →" (violet solid, 48px tall, coral arrow that nudges right on hover). Right next to it, a secondary "Watch the 30-second demo" text link that smooth-scrolls to the demo section.
- Trust line below CTAs (no fake numbers): "No credit card. Early access rolling out this quarter."
- Right column: an inline mock of the product (a browser-frame card containing the *exact same interactive demo* as section C, but in a static "after" state — three organized note cards with a small "Auto-organized by ClearNotes" badge). On mobile, this stacks below the copy.
- Background: cream with a faint Orbit motif in the top-right (20% opacity).

**C. Interactive Demo ("See it work")**
- Section title (H2, centered): "From brain dump to organized — in 2 seconds."
- A two-pane card (12px radius, soft shadow, 1px border):
  - **Left pane (input):** A faux editor labeled "Your messy notes" with pre-typed, realistic-looking messy text streaming in ("ok so the q3 launch — Sarah said push to oct 15?? need to check with legal re gdpr stuff also reminder to read that hbr article on pricing tiers…"). Below it, a subtle "ClearNotes is organizing…" status with a honey pulse dot.
  - **Right pane (output):** After ~1.5s, the messy text collapses into three organized cards:
    1. **Topic: Q3 Launch** — Subtopic: Timeline (note about Oct 15), Subtopic: Legal review (note about GDPR)
    2. **Topic: Reading list** — Subtopic: Articles (note about HBR pricing)
    3. **Topic: Inbox** — auto-tagged #follow-up, #this-week
  - A "Try it again with different notes" button reshuffles the input (cycle through 3 scripted messy-note sets) and re-runs the animation.
- Below the demo: a single muted line: "Demo simulated. Real product uses your notes locally + on-device embeddings."

**D. Features Grid (6 cards, 3×2 desktop, 1×6 mobile)**
- Section eyebrow: "What ClearNotes does"
- H2: "Everything a second brain should do — nothing it shouldn't."
- Cards (each: small Orbit-flavored icon in violet-soft circle, H3 title, 2-line description):
  1. **Auto-organize** — Your notes sort themselves into Topics and Subtopics as you write.
  2. **Smart tags** — Suggested tags appear contextually; one click to apply.
  3. **Connect ideas** — Notes that mention the same thing link to each other automatically.
  4. **Today's Focus** — A daily digest of the 3 notes most worth reopening.
  5. **Search that thinks** — Ask in plain English: "what did Sarah say about pricing?"
  6. **Yours to keep** — Export to Markdown, Notion, or plain text anytime.

**E. How it works (3 steps, numbered, alternating left/right)**
- H2: "How the Orbit engine works."
- Step 1: **Write freely.** "No folders to pick. No templates to set up. Just start typing." (Illustration: a hand-drawn-style scribble)
- Step 2: **ClearNotes reads along.** "On-device embeddings cluster your notes by meaning, not by where you filed them." (Illustration: the Orbit rings pulling dots together)
- Step 3: **Structure appears.** "Topics, subtopics, tags, and links surface on their own. You stay in flow." (Illustration: organized cards floating into place)
- Each step: large coral number (Manrope 80px, weight 800, 20% opacity as background watermark) + H3 + paragraph + small inline SVG.

**F. Pricing teaser**
- H2: "Simple, fair pricing."
- Subhead: "Pay once it earns its keep. Free while in beta."
- 3-card pricing row:
  - **Free (forever, during beta)**: $0 — 500 notes, all features, 1 device. CTA: "Join waitlist."
  - **Personal**: $8/mo (or $80/yr) — Unlimited notes, 5 devices, Today's Focus, export. CTA: "Join waitlist." Marked as "Most popular" (violet border, small coral "Popular" pill).
  - **Pro** (coming soon, disabled): $16/mo — Team workspaces, API, priority support. CTA: "Notify me."
- Below cards: one-line reassurance: "Cancel anytime. 14-day refund. No card to start."
- The two live CTAs both go to the waitlist form (since the product is not yet shipping). Disabled Pro card has greyed styling and "Notify me" still scrolls to waitlist with a `plan=pro` hidden field.

**G. FAQ (accordion)**
- H2: "Questions, answered."
- 8 Q&As in a single-column accordion, max-width 760px, centered:
  1. "Is my data private?" — "Yes. Notes are encrypted at rest and in transit. We never train models on your notes. Embeddings are generated on-device where possible."
  2. "How is this different from Notion AI or Obsidian?" — "Notion and Obsidian are great, but you still do the organizing. ClearNotes does it for you, automatically, from the first note you write."
  3. "Do you support Markdown?" — "Yes — full Markdown in/out, including a one-click export of your entire library."
  4. "Can I import my existing notes?" — "Evernote, Notion, Apple Notes, and plain Markdown. Import is one-click during onboarding."
  5. "Does it work offline?" — "Yes. The organizer runs locally; sync happens when you're back online."
  6. "What AI model powers it?" — "A mix of small on-device models for clustering and a frontier LLM for natural-language features. We document the stack in our trust center."
  7. "When will I get access?" — "Waitlist members get access in the order they joined. We ship a new batch roughly every 2 weeks."
  8. "Can I get a refund?" — "Yes — 14 days, no questions asked."
- Each answer: smooth height transition (300ms), plus icon rotates 45° on open.

**H. Final CTA band**
- Cream-2 background, full-bleed.
- H2 (centered): "Stop organizing your notes. Start using them."
- Single email input + violet "Join the waitlist" submit button (inline on desktop, stacked on mobile). On submit → POST to `/api/waitlist` → redirect to `/waitlist/thanks`.
- Below: "We'll only email you about ClearNotes. Unsubscribe in one click."

**I. Footer**
- 4-column on desktop (Product · Company · Resources · Legal), stacked on mobile.
- Product: Features, Pricing, Changelog (link to `/changelog` stub), Roadmap.
- Company: About, Blog (stub), Contact (mailto).
- Resources: Help center (stub), Import guides (stub), Status.
- Legal: Privacy, Terms.
- Bottom row: ClearNotes wordmark + small "© 2026 ClearNotes" + social links (X, GitHub, LinkedIn) as Lucide icons.
- Tiny line: "Made by people who had 14,000 unsorted notes."

## 4. USER FLOWS

**Flow 1 — Visitor reads and signs up (primary, 80% of conversions)**
1. Land on `/` from Twitter, HN, or SEO.
2. See hero headline + product mock within 1 second.
3. Scroll past demo (auto-plays once in view).
4. Skim 6 feature cards.
5. Glance at pricing.
6. Open one FAQ.
7. Hit final CTA band → enter email → submit.
8. Redirect to `/waitlist/thanks` → see position in queue, share buttons (X, LinkedIn, copy link), option to fill out a 30-second "what's your biggest note pain" survey (optional, stored to same waitlist record).

**Flow 2 — Visitor from paid/SEO searches "AI notes app"**
1. Land on `/` via search.
2. Hero + demo answer "what is this" immediately.
3. Scroll to How it works for differentiation.
4. FAQ answers privacy and Notion-comparison objections.
5. Sign up.

**Flow 3 — Visitor on mobile**
1. Land on `/` → see stacked hero (copy above, product mock below).
2. Tap nav hamburger → sheet with sections.
3. Demo auto-plays in view (slightly delayed start on mobile to save battery: 500ms after in-view).
4. Tap "Join waitlist" sticky button (appears after 600px scroll).
5. Enter email in final CTA band → submit.

**Flow 4 — Visitor who bounces, then returns via email**
- `/waitlist/thanks` is shareable and shows the queue position so they have a reason to share.

**Edge states:**
- Invalid email: inline red message under input, button disabled, no submit.
- Network error on submit: toast at top "Something went wrong — try again," form preserves input.
- Already-registered email: same success page with copy "You're already on the list — see you soon." (Idempotent.)
- JS disabled: form still works as a standard POST to `/api/waitlist` (graceful degradation, form action attribute set).

## 5. PAGES / ROUTES

| Route | Purpose | Layout & key elements |
|---|---|---|
| `/` | Marketing landing page | All sections A–I above, in order. Single page with in-page anchors (`#features`, `#how`, `#pricing`, `#faq`). |
| `/waitlist/thanks` | Post-signup confirmation | Centered card: large coral checkmark, "You're on the list," dynamic queue position (e.g., "You're #1,247 in line"), three share buttons, optional survey inline-expanded. Same nav + footer. |
| `/privacy` | Privacy policy | Single-column prose page, max-width 720px, standard headings. Same nav + footer. |
| `/terms` | Terms of service | Same layout as `/privacy`. |
| `/blog` | Stub (Phase 2) | Centered "We're writing — check back soon" with optional email-capture form. |
| `/changelog` | Stub | Centered "Changelog coming soon" with a tiny "subscribe to updates" form (posts to same waitlist with `tag=changelog`). |

**API routes:**
- `POST /api/waitlist` — body `{ email: string, source?: string, plan?: string }`. Validates email, upserts into DB, returns `{ position: number }` or 409 if duplicate (frontend treats 409 as success).
- `GET /api/waitlist/count` — returns current count for the hero's social-proof-less but honest "Join N others on the list" line. (Note: copy is gated — if count < 50, we just show the waitlist CTA without a number, to avoid a sad-looking "Join 12 others" badge.)

## 6. CORE FEATURES (of the marketing site itself)

1. **Animated Orbit motif** — Inline SVG component with three concentric rings, one drifting coral dot, and a soft violet center. Used in: nav mark, hero background, section dividers, footer mark. Animation respects `prefers-reduced-motion`.

2. **Interactive demo card** — A self-contained client component cycling through 3 pre-scripted "messy note" strings. On a `useEffect` timer (or "Try it again" click), it types the messy text into the left pane, runs a "thinking" state for 1.2s, then renders the pre-mapped structured output on the right. All transitions are CSS-driven. No real AI call — purely client-side scripted choreography to keep the page fast and honest.

3. **Email waitlist form with validation and states** — Client component with: email regex validation on blur, submit handler that POSTs to `/api/waitlist`, loading state (button shows spinner + "Adding you…"), success state (transitions to a success message inline OR redirects to `/thanks`), error state with retry, and a hidden honeypot field for spam. Keyboard accessible: `Enter` submits, focus ring uses `--violet`.

4. **FAQ accordion** — Server-rendered list of Q&A objects; client wrapper handles open/close with smooth height transition using `grid-template-rows: 0fr → 1fr` trick (no JS height measurement). ARIA `aria-expanded` and `aria-controls`. One open at a time.

5. **Sticky nav with scroll-aware background** — Listens to scroll, adds cream background + border after 80px. Uses `requestAnimationFrame`-throttled handler. Active section highlighted in nav as user scrolls (IntersectionObserver).

6. **Mobile menu sheet** — Full-screen overlay triggered by hamburger. Closes on link tap, on backdrop tap, or on Escape. Locks body scroll while open.

7. **Responsive grid system** — Tailwind grid utilities; all sections have a mobile-first single column, expanding to 2–3 columns at `md:` and `lg:`.

8. **SEO + meta** — Per-page `<title>`, `<meta description>`, OpenGraph image (a 1200×630 static export of the hero with the headline + product mock), Twitter card, canonical URL, JSON-LD `Organization` schema on `/`, `FAQPage` schema on the FAQ section.

9. **Analytics events (privacy-respecting)** — Track: hero CTA click, demo play, demo "try again" click, pricing card click, FAQ open, final form submit, thank-you page view. No third-party tracking scripts unless explicitly added; default to a small server-logged event table or Plausible (self-hostable).

10. **Accessibility** — All interactive elements keyboard-navigable, focus rings visible, color contrast AA on all text (--ink on cream = 13:1; violet on cream = 6.4:1), `prefers-reduced-motion` disables orbit rotation and demo auto-play, semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`), skip-to-content link, all images have alt text (SVGs use `role="img" + aria-label`), form labels associated with inputs.

## 7. DATA MODEL

**`waitlist` table** (managed via Supabase or a simple Postgres on Neon/Railway):
- `id` — uuid, primary key, default `gen_random_uuid()`.
- `email` — text, unique, not null, lowercased, validated RFC 5322.
- `source` — text, nullable, default `'homepage'` (e.g., `homepage`, `pricing-card`, `final-cta`, `changelog`).
- `plan_interest` — text, nullable (`free` | `personal` | `pro`).
- `referrer_code` — text, nullable, indexed (so `/waitlist/thanks?ref=xyz` can attribute signups).
- `position` — integer, generated as `ROW_NUMBER() OVER (ORDER BY created_at)` (computed on read, not stored, to avoid drift).
- `created_at` — timestamptz, default `now()`, indexed.
- `updated_at` — timestamptz, default `now()`.

**`events` table** (lightweight, optional but recommended for iteration):
- `id` — uuid.
- `session_id` — text (anonymous cookie).
- `event_name` — text (e.g., `hero_cta_click`, `demo_play`, `form_submit`).
- `properties` — jsonb.
- `created_at` — timestamptz.

**`survey_responses` table** (optional, tied 1:1 to waitlist row):
- `waitlist_id` — uuid, FK.
- `biggest_pain` — text.
- `current_tool` — text.
- `created_at` — timestamptz.

No passwords, no user accounts on the marketing site — auth is out of scope until the app itself ships.

## 8. AUTH

**None required for the marketing site.** No login, no signup beyond the email waitlist. The waitlist write goes through a serverless route with a service-role key, never exposing secrets to the client. Bot protection is a simple honeypot field plus Cloudflare Turnstile (free, privacy-friendly) on the waitlist form. If/when the app launches, the spec calls for NextAuth.js v5 (NOT Clerk) with email magic links and Google OAuth — but no auth code is built in this phase.

## 9. FILES

```
app/
  layout.tsx                    # Root layout: Manrope + Source Sans 3 + JetBrains Mono via next/font, cream bg, Orbit background, JSON-LD, OG image meta
  page.tsx                      # Landing page composing all sections
  globals.css                   # Tailwind directives + CSS variables for color, font, radius; prose styles
  not-found.tsx                 # Custom 404 with link home
  waitlist/
    thanks/
      page.tsx                  # Confirmation page (reads ?ref=, displays position)
  privacy/
    page.tsx                    # Privacy policy prose
  terms/
    page.tsx                    # Terms prose
  blog/
    page.tsx                    # Blog stub
  changelog/
    page.tsx                    # Changelog stub
  api/
    waitlist/
      route.ts                  # POST handler: validate, upsert, return position
    waitlist/
      count/
        route.ts                # GET handler: return total count
components/
  nav/
    Nav.tsx                     # Sticky nav, scroll-aware, IntersectionObserver active link
    MobileMenu.tsx              # Full-screen sheet menu
    Wordmark.tsx                # ClearNotes logo + Orbit SVG
  hero/
    Hero.tsx                    # Headline, subhead, CTAs, product mock
    ProductMock.tsx             # Static "after" state of the demo for the hero
  demo/
    DemoSection.tsx             # Section wrapper
    InteractiveDemo.tsx         # The two-pane typed-in → organized-out client component
    demoScripts.ts              # 3 pre-scripted messy → structured mappings
  features/
    FeaturesGrid.tsx            # 6-card grid
    FeatureCard.tsx             # Individual card with icon, title, copy
  how/
    HowItWorks.tsx              # 3-step alternating section
    Step.tsx                    # Individual step with number watermark + illustration
  pricing/
    PricingTeaser.tsx           # 3-card pricing row
    PricingCard.tsx             # Individual card (with "popular" variant)
  faq/
    FaqSection.tsx              # Section wrapper
    FaqItem.tsx                 # Accordion item (grid-row transition)
    faqs.ts                     # Q&A data array
  cta/
    FinalCta.tsx                # Cream-2 band with email form
    WaitlistForm.tsx            # Client form with validation, honeypot, Turnstile
  footer/
    Footer.tsx                  # 4-column footer
  orbit/
    OrbitMark.tsx               # The Orbit SVG component (static, used in nav/footer)
    OrbitBackground.tsx         # Animated, low-opacity background version
  ui/
    Button.tsx                  # Variants: primary (violet), secondary (outline), ghost
    Container.tsx               # Max-width wrapper
    Section.tsx                 # Section with consistent vertical padding + optional bg
    Eyebrow.tsx                 # Small chip label
    Icon.tsx                    # Lucide wrapper
  analytics/
    events.ts                   # Event-name constants + client emitter
lib/
  supabase.ts                   # Server-side Supabase client (service role)
  email.ts                      # Email validation + normalization
  position.ts                   # Compute waitlist position helper
  seo.ts                        # Default metadata helper
public/
  og.png                        # 1200x630 OG image
  favicon.ico
  favicon.svg                   # Orbit mark favicon
  noise.svg                     # Subtle grain texture
tailwind.config.ts               # Theme: colors, fonts, radius, extend spacing
postcss.config.js
next.config.mjs                 # Image domains, headers
.env.example                    # SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, TURNSTILE_SECRET, NEXT_PUBLIC_TURNSTILE_SITE_KEY
package.json
tsconfig.json
```

## 10. ACCEPTANCE

- [ ] `/` renders all 9 sections (nav, hero, demo, features, how, pricing, FAQ, final CTA, footer) in order with correct typography, colors, and spacing on desktop and mobile.
- [ ] Manrope loads for headings, Source Sans 3 for body, JetBrains Mono for code/demo text — verified via DevTools network and computed styles.
- [ ] Brand colors (`--violet`, `--coral`, `--honey`, `--cream`) are applied per spec; no other colors appear in default state.
- [ ] The interactive demo auto-plays once on scroll into view and can be re-triggered by the "Try it again" button; works with keyboard focus too.
- [ ] The Orbit motif renders in nav, hero background, and footer; rotation pauses when `prefers-reduced-motion: reduce` is set.
- [ ] Sticky nav gains a cream background and border after 80px scroll; active section is highlighted.
- [ ] Mobile menu opens/closes via hamburger, backdrop tap, and Escape; body scroll is locked while open.
- [ ] FAQ accordion: only one open at a time, smooth height transition, keyboard accessible, `aria-expanded` updates correctly.
- [ ] Waitlist form validates email format on blur, submits via `POST /api/waitlist`, redirects to `/waitlist/thanks` on success, shows inline error on failure, and works with JS disabled (graceful POST fallback).
- [ ] Honeypot field is hidden from real users (CSS `sr-only` + `tabindex=-1` + `autocomplete=off`) but visible to bots; submissions with honeypot filled are silently rejected.
- [ ] Cloudflare Turnstile widget renders and validates before submit when configured.
- [ ] `/api/waitlist` upserts (no duplicate error for repeat signups), returns a position, lowercases email, and rejects obviously bad inputs.
- [ ] `/waitlist/thanks` shows the position and three share buttons; share links open correct share intents.
- [ ] Pricing cards: Free and Personal both link to waitlist; Pro is visually disabled and labeled "Notify me" with `plan=pro` field.
- [ ] No fabricated testimonials, customer logos, user counts, ratings, or press quotes anywhere on the site. Copy is honest about beta status.
- [ ] All text meets WCAG AA contrast (verified with axe DevTools).
- [ ] Lighthouse mobile scores: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] Lighthouse desktop Performance ≥ 95.
- [ ] `<title>`, meta description, OG image, Twitter card, and JSON-LD `Organization` + `FAQPage` validate in Google Rich Results test and opengraph.xyz.
- [ ] Sitemap.xml and robots.txt are generated; `robots.txt` allows crawling of `/` and disallows `/api/`.
- [ ] `prefers-reduced-motion: reduce` disables orbit rotation, demo auto-play, and scroll-reveal animations.
- [ ] All interactive elements reachable and operable by keyboard with a visible focus ring.
- [ ] Skip-to-content link is the first focusable element and works.
- [ ] 404 page renders with a link back to `/`.
- [ ] All copy matches the spec (no placeholder Lorem Ipsum).
- [ ] Site builds with `next build` with zero TypeScript errors and zero ESLint errors.

FILES: ["app/layout.tsx", "app/page.tsx", "app/globals.css", "app/not-found.tsx", "app/waitlist/thanks/page.tsx", "app/privacy/page.tsx", "app/terms/page.tsx", "app/blog/page.tsx", "app/changelog/page.tsx", "app/api/waitlist/route.ts", "app/api/waitlist/count/route.ts", "components/nav/Nav.tsx", "components/nav/MobileMenu.tsx", "components/nav/Wordmark.tsx", "components/hero/Hero.tsx", "components/hero/ProductMock.tsx", "components/demo/DemoSection.tsx", "components/demo/InteractiveDemo.tsx", "components/demo/demoScripts.ts", "components/features/FeaturesGrid.tsx", "components/features/FeatureCard.tsx", "components/how/HowItWorks.tsx", "components/how/Step.tsx", "components/pricing/PricingTeaser.tsx", "components/pricing/PricingCard.tsx", "components/faq/FaqSection.tsx", "components/faq/FaqItem.tsx", "components/faq/faqs.ts", "components/cta/FinalCta.tsx", "components/cta/WaitlistForm.tsx", "components/footer/Footer.tsx", "components/orbit/OrbitMark.tsx", "components/orbit/OrbitBackground.tsx", "components/ui/Button.tsx", "components/ui/Container.tsx", "components/ui/Section.tsx", "components/ui/Eyebrow.tsx", "components/ui/Icon.tsx", "components/analytics/events.ts", "lib/supabase.ts", "lib/email.ts", "lib/position.ts", "lib/seo.ts", "tailwind.config.ts", "next.config.mjs", "app/sitemap.ts", "app/robots.ts", "public/og.png", ".env.example"]