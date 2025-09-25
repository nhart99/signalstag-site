# SignalStag website

Minimal, accessible, and fast static site for SignalStag + the SOAP Note app.

## Files
- `index.html` — hero, features, sponsor, updates form, contact form
- `privacy.html`, `terms.html` — legal
- `thanks.html`, `message-received.html` — post-submit pages
- `styles.css`, `script.js`, `robots.txt`, `sitemap.xml`
- `assets/` — put images here:
  - `Signal Stag 1024.png` (original logo; optional)
  - `signalstag-logo.png` (small header version if you use an img in the header)
  - `app-mockup-1242x2688_01.png`, `app-mockup-1242x2688_02.png` (screens)
  - `og-image.png` (Open Graph; ideally 1200×630)
  - `sponsor-idaho-rescue-training.png` (square ~192×192)

## Newsletter (Brevo)
1. Create an Embedded form in Brevo with Email (+ First name optional).
2. Enable Double confirmation email and set redirect to `/thanks.html`.
3. Copy Brevo’s Embed snippet and replace the `<div id="brevo-form">…</div>` block in `index.html`.
4. Commit and push. Netlify redeploys.

## Contact form
- Works on Netlify via Netlify Forms (no backend). Add notifications in Netlify → Forms → contact.

## DNS + Deploy (Porkbun + Netlify)
- Netlify: Import from Git → Build command *(empty)* → Publish directory `/`.
- Porkbun DNS:  
  - `@` A → Netlify IP shown (often `75.2.60.5`)  
  - `www` CNAME → your-site-name.netlify.app

## iCloud Mail (custom domain)
- iCloud+ → Custom Email Domain → add `signalstag.com`.
- Porkbun DNS:
  - MX: `mx01.mail.icloud.com` (10), `mx02.mail.icloud.com` (10)
  - SPF (TXT): `v=spf1 redirect=icloud.com`
  - DKIM (CNAME): `sig1._domainkey → sig1.dkim.signalstag.com.at.icloudmailadmin.com.`

## Accessibility
- Semantic headings, labels, skip link, visible focus.

## Performance
- No frameworks; minimal CSS/JS; image assets optimized later.
