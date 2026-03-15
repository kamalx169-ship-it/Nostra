# Images in this project

All image slots now use **placeholder URLs** from [Picsum Photos](https://picsum.photos) so the site works without any local image files. You need an **internet connection** for images to load.

## What’s in use

| Page        | Slot            | URL format / example |
|------------|-----------------|-----------------------|
| **index.html** | Strip (hero image) | `https://picsum.photos/seed/bann/1400/900` |
| **index.html** | New in tiles (5)   | `https://picsum.photos/seed/h1/400/533` (h1, j4, s2, p2, pu4) |
| **index.html** | Editorial block    | `https://picsum.photos/seed/banner/800/520` |
| **index.html** | Best seller rows (4) | `https://picsum.photos/seed/pu4/200/200` (pu4, sh2, s4, p3) |
| **collection.html** | All 40 products | `https://picsum.photos/seed/XX/400/533` (h1–h5, j1–j5, p1–p5, pu1–pu5, s1–s5, sh1–sh4, sh6, t1–t5, tt1–tt5) |

Each `seed` (e.g. `bann`, `h1`, `j4`) gives a **stable image**: same seed = same image every time.

## Using your own images

1. Put your image files in the `images/` folder (e.g. `bann.jpg`, `banner.jpg`, `h-1.jpg`, …).
2. In **index.html** and **collection.html**, replace the Picsum URLs with local paths, for example:
   - `https://picsum.photos/seed/bann/1400/900` → `./images/bann.jpg`
   - `https://picsum.photos/seed/h1/400/533` → `./images/h-1.jpg`
3. Use the same filenames as in the table above (e.g. `h-1.jpg` … `tt-5.jpg` for collection products).

## Free image sources (for real photos)

- [Unsplash](https://unsplash.com) – free high‑res photos
- [Pexels](https://pexels.com) – free photos and videos
- [Picsum Photos](https://picsum.photos) – random placeholders (what we use now)
