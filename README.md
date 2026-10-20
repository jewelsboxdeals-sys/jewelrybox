# Jewelry Box — catalogue website

A simple website (no build step) that shows the in-stock bracelets with a
**Commander sur WhatsApp** button on each one. French by default, with an EN switch.

## Files

| File | What it is |
|---|---|
| `products.js` | **The only file you edit day to day:** WhatsApp number, products, stock |
| `index.html` | Page structure |
| `styles.css` | Look (emerald + gold, same as the videos) |
| `app.js` | Filters, language switch, WhatsApp messages |
| `images/` | One photo per product, named by code (`A15.jpg`, `C7.jpg`…) |

## Everyday changes (all in `products.js`)

- **Add your WhatsApp number:** `const WHATSAPP_NUMBER = "237690000000";` (digits only, with 237).
  While it's empty, the buttons still open WhatsApp but the buyer has to choose the chat.
- **A bracelet sold out:** change `stock: "available"` to `stock: "finished"`. It disappears from the site.
- **Only a few left:** set `left: 2` → shows "Plus que 2". `left: 1` → "Dernière pièce". `left: null` → no badge.
- **Change a price:** edit `price: 3000`.
- **Add a new bracelet:** put its photo in `images/` as `CODE.jpg`, then copy one product block and change
  `code`, `cat` (`gold` / `silver` / `acrylic` / `rose`), `name` and `kind`.

## Product links for TikTok / Instagram

Every product has its own link, e.g. `https://YOUR-SITE/#C3` opens the "Feuilles Dorées" bracelet directly.
Add `?lang=en` for English: `https://YOUR-SITE/?lang=en#C3`.
Put the main link in your TikTok / Instagram / Facebook bio ("lien en bio").

## Publish free on GitHub Pages

1. Create a free account at github.com and a new **public** repository, e.g. `jewelrybox`.
2. On the repository page: **Add file → Upload files**, drag in everything inside this `website` folder
   (`index.html`, `styles.css`, `app.js`, `products.js`, `images/`), then **Commit changes**.
3. Go to **Settings → Pages**. Under "Build and deployment" choose **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then **Save**.
4. After about a minute your site is live at `https://YOUR-USERNAME.github.io/jewelrybox/`.
5. To update stock later, open `products.js` on GitHub, click the pencil, edit, and **Commit changes**.
   The site updates within a minute.

## Preview on this computer

From the project folder: `python3 -m http.server 8090 --directory website`, then open http://localhost:8090.
