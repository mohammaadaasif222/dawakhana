# Hiqmat Dawakhana — Next.js

The Rahat-e-Khaas / 3-in-1 combo landing page, ported to Next.js (App Router).
The design, copy, animations, and behaviour are identical to the original
single-file `index.html` — only the delivery mechanism changed.

## Structure

| Path              | Purpose                                                        |
| ----------------- | ------------------------------------------------------------- |
| `app/layout.js`   | `<html>`/`<head>`: title, description, theme-color, viewport, Google Fonts |
| `app/page.js`     | The full page as a client component; the original vanilla JS runs in a `useEffect` |
| `app/globals.css` | All styles, copied verbatim from the original `<style>` block |
| `public/`         | Product images (referenced as `/image.png`)                   |

The original `index.html` is kept at the repo root for reference.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build
npm run start
```

The page prerenders as static content, so it can also be exported/hosted on any
static or Node host (Vercel works out of the box).
