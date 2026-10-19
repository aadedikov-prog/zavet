# ЗАВЕТ / ZAVET — Phase 1 storefront

Premium Bulgarian artisan gift storefront for handmade **decorative relief diptychs** (hinged panels that resemble open books — not functional books).

Phase 1 scope: bilingual (BG default / EN) browsing UI, occasions, product detail with local-state personalization preview, About / Contact / Delivery placeholders, and an empty Reviews state. No orders, payments, auth, or database.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321/bg](http://127.0.0.1:4321/bg) (Bulgarian default). English: [http://127.0.0.1:4321/en](http://127.0.0.1:4321/en).

For a production build (recommended to verify client personalization + locale switching):

```bash
npm run build
npm run start
```

### Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Structure

- `src/app/[locale]/…` — locale-prefixed pages (`/bg`, `/en`)
- `src/content/` — typed seed data (products, occasions, templates) + dictionaries
- `src/components/` — reusable UI (header, personalization studio, placeholders)
- `public/brand/` — drop approved logo files here (horizontal + circular)

## Spec

Durable Phase 1 plan lives in the Project store: `docs/zavet-phase-1.md` (coordinator context). This repo implements that brief only.
