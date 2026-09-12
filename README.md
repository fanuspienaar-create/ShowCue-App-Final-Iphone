# OAM Studio v7 — Responsive PWA / Branding Fix

This build fixes the OAM logo/PWA icon problem by:
- embedding the primary OAM logo directly into the HTML so GitHub asset-path failures cannot remove it from the UI;
- supplying dedicated 64/152/167/180/192/512/1024 PNG icons;
- using explicit iOS Apple touch icons and Android/desktop PWA manifest icons;
- keeping the responsive UI usable in portrait and landscape;
- bumping the service-worker cache to v7.

## GitHub Pages
Upload the CONTENTS of this folder to the repository root. Replace the old version completely.

After deployment on iPhone, delete the old OAM Studio Home Screen icon and add it again from Safari. iOS caches PWA icons aggressively, so reinstalling is necessary to see the new icon.

## Important
Use HTTPS GitHub Pages. The service worker requires HTTPS (except localhost).
