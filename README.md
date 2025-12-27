# Vegan Retreat 2026 - Landing Page

A modern, polished landing page for the Vegan Retreat 2026 event built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design inspired by contemporary web aesthetics
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 for optimal performance
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized
- 🚀 Static export ready for Netlify deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a static export in the `out` directory.

## Deploying to Netlify

### Option 1: Drag and Drop (Easiest)

1. Run `npm run build` to create the production build
2. Go to [Netlify](https://app.netlify.com/)
3. Drag and drop the `out` folder to Netlify's deploy area

### Option 2: Connect to Git Repository

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Click "Deploy site"

### Option 3: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Netlify:
```bash
netlify deploy --prod --dir=out
```

## Project Structure

```
vegan-retreat/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## Customization

### Colors and Styling

Edit `tailwind.config.js` to customize colors, fonts, and other design tokens.

### Content

All content is in `app/page.tsx`. Each section is a separate component for easy editing.

### Adding Images

Place images in the `public` folder and reference them with `/filename.jpg`

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [React](https://react.dev/) - UI library

## License

Private project for Vegan Retreat 2026

## Contact

For questions about the retreat, DM [@indic.pilgrim](https://instagram.com/indic.pilgrim) on Instagram
