# Kat Linux website

The website for [Kat Linux](https://github.com/kat-linux/distro), a cat-themed Linux distro built on Arch Linux.
It is a static [Astro](https://astro.build) site that deploys to GitHub Pages.

## Pages

| Path           | What it is                                                                    |
| -------------- | ----------------------------------------------------------------------------- |
| `/`            | Home: hero with the interactive boot menu, pedigree, highlights, devlog, community |
| `/download/`   | Latest ISO, file naming, flashing with Ventoy / balenaEtcher / dd, UEFI vs BIOS |
| `/install/`    | Booting the live ISO, the live session, archinstall step by step, after install |
| `/features/`   | Base, desktop, display manager, release model, artwork, all 143 packages       |
| `/devlog/`     | Entries written from the distro repo's git history, newest first              |
| `/roadmap/`    | Done / next / later, from the README to-do list                               |
| `/community/`  | Discord, GitHub, bug reports, the "Looking to Dev" role                      |
| `/contribute/` | Repository map, build with `mkarchiso`, test with `run_archiso`, CI pipeline   |
| `/faq/`        | Short answers with deep links (e.g. `/faq/#aur`)                              |
| `404.html`     | `cat: /path: No such file or directory`                                       |

## Run it locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run check      # type-check .astro and .ts files
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository (for example `kat-linux/website`, or `kat-linux/kat-linux.github.io`
   to serve it at the organisation root).
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. `.github/workflows/deploy.yml` type-checks, builds and publishes the site.

The workflow reads the Pages URL and base path from `actions/configure-pages` and passes them to the build as
`SITE_URL` and `BASE_PATH`, so links work at `https://kat-linux.github.io/<repo>/`, at the organisation root, or on
a custom domain without code changes. To test a sub-path build locally:

```bash
BASE_PATH=/website SITE_URL=https://kat-linux.github.io npm run build
```

## Where the content comes from

Every fact on the site comes from the [kat-linux/distro](https://github.com/kat-linux/distro) repository, and most
of them link to the file they come from. When the distro changes, update these files:

- `src/data/site.ts`: links, ISO details from `profiledef.sh`, the README to-do list, boot menu entries, and the
  list of places that still use upstream Arch wording.
- `src/data/packages.ts`: every package in `packages.x86_64`, grouped by job. The grouping is editorial; the names
  must match the file exactly.
- `src/data/devlog.ts`: devlog entries. Commit hashes, dates, authors and messages are copied from `git log`.
- `src/assets/`: the wallpapers (`airootfs/usr/share/backgrounds/kat/`) and boot splash (`syslinux/splash.png`)
  from the distro repo. Astro converts them to AVIF and WebP at build time.

## Design notes

- Colours are CSS custom properties in `src/styles/global.css`; dark mode follows `prefers-color-scheme` and only
  redefines tokens.
- Fonts (Anybody, Atkinson Hyperlegible Next, JetBrains Mono) are self-hosted through Astro's font API with
  metric-matched fallbacks. No third-party requests.
- JavaScript is limited to small progressive enhancements: copy buttons, the boot menu preview, the package
  filter, FAQ deep links and the 404 path. Everything is readable without it.
- The mobile menu uses the native Popover API.

Kat Linux is an independent project and is not affiliated with Arch Linux. Arch Linux is a trademark of its
respective owners.
