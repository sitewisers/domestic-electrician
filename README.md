# Domestic Electrician Ltd — website concept

A speculative design concept prepared by Sitewisers for Domestic Electrician Ltd,
a NICEIC approved electrician working in Fareham. Not the company's official
website, and not commissioned by them.

Live: https://sitewisers.github.io/domestic-electrician/

## What is here

- `src/` — Astro + Tailwind source for the page
- `src/assets/photos/` — the photographs used on the page, cropped from the
  company's own public Facebook posts (see Photographs below)
- `index.html`, `_astro/`, `favicon.svg`, `robots.txt` — the built site, served
  by GitHub Pages from the repository root (same setup as the Avenue Dental Care
  concept). `.nojekyll` is required: Jekyll would otherwise skip `_astro/`

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
- Photographs are the company's own, taken from their public Facebook page.
  Nothing is stock or generated — one clearly-stock image on their page was
  rejected. Captions and alt text never name the person in a photo, because
  we cannot confirm who it is, and never imply a service outside the verified
  list. The About section still marks where Lee's own words belong

## Build

```
npm install
npm run build     # writes dist/
rm -rf _astro && cp -R dist/_astro .
cp dist/index.html dist/favicon.svg dist/robots.txt dist/.nojekyll .
```

## Photographs

Sourced from https://www.facebook.com/The.Domestic.Electrician (the company's
own posts) and cropped in `photos-raw/` → `src/assets/photos/`. Crops removed
the Facebook watermark and, on the labelled-board photo, a notice label
carrying another contractor's sticker. Originals are kept out of the repo.

Used on the page:

| File | Where | Shows |
|---|---|---|
| `consumer-unit-labelled.jpg` | Hero, under the panel graphic | A finished board, every way labelled with its circuit |
| `exterior-wall-lights.jpg` | Services, end of section | Outdoor wall lights lit at dusk |
| `on-site-outdoor-unit.jpg` | About | Someone on site fitting an outdoor unit |

Prepared but unused, available if wanted: `consumer-unit-wiring.jpg`,
`socket-test.jpg`, `tester-reading.jpg`.
