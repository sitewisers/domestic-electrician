# Domestic Electrician Ltd — website concept

A speculative design concept prepared by Sitewisers for Domestic Electrician Ltd,
a NICEIC approved electrician working in Fareham. Not the company's official
website, and not commissioned by them.

Live: https://sitewisers.github.io/domestic-electrician/

## What is here

- `src/` — Astro + Tailwind source for the page
- `index.html`, `favicon.svg`, `robots.txt` — the built site, served by GitHub
  Pages from the repository root (same setup as the Avenue Dental Care concept)

## Honesty constraints

Every claim on the page traces back to `src/data/site.ts`. Nothing else is
stated as fact.

- No invented testimonials, customer names or quotes
- The NICEIC trademark is not reproduced; "NICEIC Approved" is set in the site's
  own type
- Trustpilot and Google ratings are used as aggregates only, described as
  approximate. Real review text is not reproduced — there is a commented
  placeholder in `src/components/Trust.astro` for 2–3 real reviews once we have
  the client relationship
- No EV charger installation, because that service is unconfirmed
- No photographs of Lee or of the business, because none exist yet. The About
  section is deliberately short and marks where his own words and a real
  photograph belong

## Build

```
npm install
npm run build     # writes dist/
cp dist/index.html dist/favicon.svg dist/robots.txt dist/.nojekyll .
```
