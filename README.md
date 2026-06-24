# SKULDA

> **The future is not written. It is carved.**

Skulda is an AI-powered alternate destiny narrative engine where every choice reshapes your life simulation across 5 core attributes until Age 80.

---

## What is Skulda?

An interactive narrative experience built for those who never stopped asking *"what if?"*

You step into an alternate version of your life. Every decision recalculates:
- **Wealth** — your financial trajectory
- **Reputation** — how the world sees you
- **Influence** — your power over outcomes
- **Intelligence** — your capacity to adapt
- **Relationships** — the human bonds you build or break

At Age 80, the simulation seals. You face the final verdict of everything you built — or destroyed.

---

## Stack

- **Frontend:** Next.js 14 (App Router) + Tailwind CSS
- **Database:** Supabase (PostgreSQL + Auth + RLS)
- **Payments:** Stripe ($4.99/mo — Skulda Infinite)
- **AI Engine:** OpenAI GPT-4o
- **Email:** Resend + Loops.so
- **Hosting:** Vercel
- **Domain:** skulda.com.br

---

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your keys

# Run locally
npm run dev

# Build for production
npm run build
```

---

## Environment Variables

See `.env.example` for all required variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PRICE_ID=
STRIPE_WEBHOOK_SECRET=
OPENAI_API_KEY=
NEXT_PUBLIC_URL=https://skulda.com.br
RESEND_API_KEY=
```

---

## Database Setup

Run `skulda-schema.sql` in your Supabase SQL Editor to create all tables, RLS policies and triggers.

---

## Deploy

1. Push to GitHub
2. Connect repository on Vercel
3. Add environment variables on Vercel
4. Point DNS on Registro.br → Vercel
5. Run SQL schema on Supabase

---

## Contact

hello@skulda.com.br

---

*ᛋ ᚲ ᚢ ᛚ ᛞ ᚨ*
