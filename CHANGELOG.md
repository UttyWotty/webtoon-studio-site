# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project uses
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.11.0] - 2026-11-24

### Added

- wedding.html: the wedding webtoon offer with the photo-real sample "Seoyeon and Daniel" (10 panels, Korean, invented couple), its save-the-date card, price (300,000 KRW with card and invitation page), what the couple sends and consent.
- pet.html: the pet webtoon offer with the sample "Sunam's day" (10 panels, soft romance, Korean), price (150,000 KRW), a pet photo guide and consent.
- Wedding and pet service cards on the main page and in the order form; both need the photo consent tick like family orders (`PHOTO_SERVICES` in `assets/order.js`).

## [0.10.0] - 2026-11-17

### Added

- family.html: a sample family webtoon, "First Ride" (10 panels, clean manhwa style, invented family), lettered in English and Korean (`assets/img/family-en.jpg`, `family-ko.jpg`), switching with the page language.

## [0.9.0] - 2026-11-16

### Added

- `assets/fiverr/`: the Fiverr gig gallery (three 1280 x 769 images and the sample teaser video).
- `assets/social/`: first social posts from the sample pilot: Korean and English 10-slide carousels with cover slides, two reels, and captions in `CAPTIONS.md`.

## [0.8.0] - 2026-11-16

### Added

- `family.html`: the family-webtoon page in English and Korean: per-person price, photo guide, how to send photos, consent terms and how photos are handled (used only for the order, kept on the studio machine, deleted with the likeness models within 7 days of delivery); linked from the family card and the order form's consent box.

## [0.7.0] - 2026-11-16

### Added

- Link previews: Open Graph and Twitter card tags with a 1200 x 630 preview image, so shared links show the studio name, a description in both languages and the styles.

## [0.6.0] - 2026-11-16

### Added

- Logo: an ink drop with harbour waves and the red gate-light dot (`assets/logo.svg`), as the browser tab icon (SVG with a 32 px PNG fallback), the iPhone home-screen icon, and beside the studio name in the header.

## [0.5.0] - 2026-11-16

### Added

- `assets/kmong/`: portfolio images sized for Kmong (square 1080 covers; detail images at most 2956 px tall) for three items: the sample pilot, the Closing, and the three styles.

## [0.4.0] - 2026-11-16

### Added

- Styles section: the same character in the painted realistic, clean manhwa and soft romance looks; the order form asks for a style and the order email carries it.

## [0.3.0] - 2026-11-16

### Added

- `assets/listing/`: English and Korean 1280 x 768 marketplace images for the pilot-episode listing, made from the sample pilot.

## [0.2.0] - 2026-11-16

### Added

- Sample section: a free sample pilot (Pride and Prejudice, the Meryton ball, 14 panels) that scrolls in the visitor's language (English or Korean lettering on the same art), and the Elizabeth and Darcy character sheet.

## [0.1.0] - 2026-11-16

### Added

- One-page portfolio and order site in English and Korean: the Closing showcase with a scrollable strip sample and
  gallery, the pilot-episode and family-webtoon services with starting prices, how an order works, questions, and an
  order form that builds an email (or posts to an optional free form service), with photo consent required for
  family orders.
- Orders are addressed to the studio inbox, harborinkstudio@gmail.com.
- Tests for the order logic (`node --test tests/*.test.mjs`).
