# Presentation media drop folder

This folder exists so the presentation page can stay **clean and deployable** (no absolute local paths).

The presentation page lives at:
- `archive_agent/public/presentation/index.html`

It expects media at these relative URLs (you can rename, but then update the HTML):

## Doxologies
- `archive_agent/public/assets/presentation/doxologies-clip.mp4`

## Skinsuits
- `archive_agent/public/assets/presentation/skinsuits-installation.png`
- `archive_agent/public/assets/presentation/skinsuits-trailer.mp4`
- `archive_agent/public/assets/presentation/skinsuits.gif`
- `archive_agent/public/assets/presentation/skinsuits-canary.mp4`

## sky is a gap
- `archive_agent/public/assets/presentation/sky-is-a-gap-trailer.mp4`
- `archive_agent/public/assets/presentation/sky-is-a-gap-install-1.jpg`
- `archive_agent/public/assets/presentation/sky-is-a-gap-install-2.jpg`
- `archive_agent/public/assets/presentation/sky-is-a-gap-install-3.jpg`
- `archive_agent/public/assets/presentation/rossin-publication-10.jpg`
- `archive_agent/public/assets/presentation/rossin-publication.pdf`

## CV
The public build script will copy your CV PDF to:
- `archive_agent/public/assets/cv/RachelRossin_CV.pdf`

To (re)build public assets:

```bash
cd "archive_agent"
python3 tools/build_public_site.py
```


