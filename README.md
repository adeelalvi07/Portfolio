# Muhammad Adeel — AI Portfolio

A premium, dark-themed portfolio built with Next.js 14 (App Router), Tailwind CSS,
and Framer Motion — featuring glassmorphism, an aurora/particle background, a
typing hero, an animated tech orbit, scroll-reveal sections, a sticky glass
navbar, and a floating AI assistant placeholder.

## Getting started

Requirements: Node.js 18.17 or newer.

```bash
npm install
cp .env.local.example .env.local   # then paste your Groq API key
npm run dev
```

Open http://localhost:3000 in your browser. The first `npm run dev` or
`npm run build` needs an internet connection once, since Google Fonts
(Sora, Inter, JetBrains Mono) are fetched and self-hosted automatically by
Next.js at build time.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.js        — root layout, fonts, SEO metadata
  page.js           — assembles all sections
  globals.css       — design tokens, glass utilities, accessibility rules
components/
  Navbar.js         — sticky glass navbar with active-section highlight
  Hero.js           — headline, typing roles, CTAs
  TechOrbit.js       — animated orbiting tech-stack rings
  About.js          — bio + stats
  Skills.js         — grouped skill chips
  Timeline.js       — career/education timeline
  FeaturedWork.js   — project cards
  Experience.js     — internship + education
  Certifications.js — certification cards
  Contact.js        — contact form (opens the visitor's mail client) + links
  Footer.js
  AuroraBackground.js — canvas particles + aurora gradients + grid
  CustomCursor.js   — custom cursor (desktop, fine-pointer only)
  ScrollProgress.js — top scroll progress bar
  LoadingScreen.js  — initial loading animation
  MagneticButton.js — reusable magnetic-hover button wrapper
  AIAssistantButton.js — floating assistant placeholder
lib/
  data.js           — all content (profile, projects, skills, timeline, etc.)
public/
  resume.pdf        — your CV, served at /resume.pdf
```

## Customizing content

Everything text-based (name, bio, projects, skills, certifications, contact
info) lives in `lib/data.js`. Edit that file to update the site — no need to
touch the components themselves for content changes.

To replace the résumé, drop a new PDF at `public/resume.pdf` (keep the same
filename, or update `profile.resumeUrl` in `lib/data.js`).

## Notes

- The contact form currently opens the visitor's email client with a
  pre-filled message (no backend). Wire it up to an API route or a service
  like Formspree/Resend if you want server-side handling.
- Reduced-motion preferences are respected across animations.

## The AI Assistant chatbot

The floating chat button is a real, working assistant called **"M Adeel's
Personal AI Assistant"**. It only answers questions about Muhammad — his
projects, skills, experience, and how to get in touch — and politely declines
anything unrelated. It's powered by **Groq** (fast, free-tier-friendly
inference).

**How it works:**
- `lib/knowledgeBase.js` — a detailed script with everything the bot is
  allowed to know about Muhammad, already written out from his CV and
  project history. This is injected into the system prompt on every request
  (no vector database or embeddings needed — the bio is small enough to fit
  directly in context, which is simpler and more reliable than RAG at this
  scale).
- `app/api/chat/route.js` — a server-side Next.js API route that calls the
  Groq API (OpenAI-compatible endpoint) with that system prompt. Your API
  key stays on the server and is never exposed to the browser.
- `components/AIAssistantButton.js` — the chat UI that calls `/api/chat`.

**Setup:**
1. Get a free API key from https://console.groq.com/keys
2. `cp .env.local.example .env.local` and paste your key in as
   `GROQ_API_KEY=...`
3. (Optional) set `GROQ_MODEL` in `.env.local` to try a different model —
   see https://console.groq.com/docs/models. Defaults to
   `llama-3.3-70b-versatile`.
4. Restart `npm run dev` (env vars are only read on server start).

**To make it know more about you:** just edit `lib/knowledgeBase.js` — add
project stories, career goals, personality, anything you want it to be able
to answer. No code changes needed elsewhere.

**Deploying:** if you deploy (e.g. to Vercel), add `GROQ_API_KEY` as an
environment variable in your hosting provider's dashboard — don't commit
`.env.local` to git (it's already in `.gitignore`).
