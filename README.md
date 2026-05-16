# OVERWATCH FIND YOUR HERO

Overwatch のプレイスタイル診断アプリです。立ち回り、戦い方、得意な距離感から、相性のよいヒーロー候補をロール別に表示します。

このツールは非公式です。Blizzard Entertainment, Inc. とは提携・承認・後援関係にありません。Overwatch および関連する名称は Blizzard Entertainment, Inc. の商標または登録商標です。

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist`.

## Cloudflare Pages

Recommended settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

The app is configured to run from the site root with `base: "/"`.

The OGP metadata currently assumes the Cloudflare Pages URL:

```text
https://ow-hero-finder.pages.dev/
```

If the Cloudflare Pages project name or production domain changes, update the `og:url`, `og:image`, and `twitter:image` values in `index.html`.
