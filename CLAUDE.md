# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Build static export to /out directory
npm run lint     # Run Next.js linting
npm start        # Start production server (rarely used - static site)
```

## Architecture

This is a **Next.js 14 static site** for a vegan retreat landing page with Google Sheets integration for registration data.

### Key Architecture Decisions

- **Static Export**: Configured in `next.config.js` with `output: 'export'` for Netlify deployment
- **No Backend Server**: Uses Google Apps Script (`google-apps-script.js`) as a serverless backend
- **Google Sheets as Database**: Form submissions go to Google Sheets via Apps Script web app
- **Inline Components**: All page sections are functions within their page files, not separate component files

### Data Flow

```
Registration Form → fetch(POST, mode: 'no-cors') → Google Apps Script → Google Sheets
```

The `no-cors` mode means the frontend cannot read the response, so success is assumed on non-error.

### Pages

- `app/page.tsx` - Landing page with all event information (Hero, Activities, Guidelines, Logistics, FAQ, etc.)
- `app/register/page.tsx` - Multi-section registration form with client-side validation

### Configuration

- `app/register/page.tsx:50` - Google Apps Script URL placeholder (`YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`) must be replaced with actual deployment URL
- `tailwind.config.js` - Custom fonts, animations (fade-in, slide-up, slide-in), and design tokens
- `netlify.toml` - Deployment config (build command, publish directory, SPA routing redirect)

### Google Sheets Integration

See `GOOGLE_SHEETS_SETUP.md` for complete setup instructions. The `google-apps-script.js` file is deployed to Google Apps Script, not run locally.
