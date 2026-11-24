<!--
The studio's portfolio and order site: one static page in English and Korean, hosted free on GitHub Pages.
It shows the Closing as the showcase, the pilot, family, wedding and pet webtoon services, and an order form with no paid backend.
Settings people change (studio name, order address, prices) live in assets/config.js.
-->

# webtoon-studio-site

The portfolio and order page for the webtoon studio: pilot episodes for web-novel writers, and family, wedding and pet
webtoons from photos, in Korean or English. It is a few static pages with no build step.

## Run it locally

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open http://127.0.0.1:8765/.

## Change the studio name, order address or prices

Edit `assets/config.js`. With `ORDER_ENDPOINT` empty, the form opens the visitor's email app with the order filled in
and addressed to `ORDER_EMAIL`. Set `ORDER_ENDPOINT` to a free form service URL (for example a Formspree form) to
receive orders without the visitor's email app.

## Structure

- `index.html`: the page; every visible sentence comes from `assets/i18n.js` through `data-i18n` keys.
- `family.html`, `wedding.html`, `pet.html`: one page per photo offer with its sample, price, photo guide and consent.
- `assets/i18n.js`: English and Korean text; `assets/i18n-family.js` and `assets/i18n-offers.js` hold the offer pages' text.
- `assets/config.js`: studio name, order address, prices, turnaround.
- `assets/order.js`: pure order checking and email building (tested).
- `assets/app.js`: language switch, prices and the form.
- `assets/style.css`: the look; colours are tokens on `:root`.
- `assets/img/`: showcase images from the Closing and the offer samples.

## Tests

```bash
node --test tests/*.test.mjs
```

## Status

Live on GitHub Pages at https://uttywotty.github.io/webtoon-studio-site/ (published from `main`). Orders go to the studio inbox set in `assets/config.js`.
