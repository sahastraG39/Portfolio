# Next.js Portfolio

A personal portfolio website built with Next.js (App Router), TypeScript, Tailwind CSS, ESLint, and Prettier. Includes dark/light mode with persistence, smooth-scrolling navigation, and a contact form that posts to an API route (email sending simulated).

## Features

- About, Projects, Skills, and Contact sections
- Responsive design with Tailwind CSS
- Dark/light mode toggle with `localStorage` persistence via `next-themes`
- Smooth scrolling navigation bar
- Contact form posts to `/api/contact` and simulates email sending
- ESLint + Prettier set up with recommended configs
- Ready for deployment on Vercel

## Requirements

- Node.js 18+ and npm 9+

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` – start Next.js dev server
- `npm run build` – create production build
- `npm run start` – start production server
- `npm run lint` – run ESLint
- `npm run format` – format with Prettier

## Tailwind Setup

Tailwind is configured in `tailwind.config.ts` and applied via `app/globals.css`.

## Environment Variables

Copy `.env.example` to `.env.local` and edit as needed.

```
CONTACT_TO_EMAIL=you@example.com
```

## VS Code

Recommended extensions are in `.vscode/extensions.json`.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Create a new project on Vercel and import the repo.
3. Set `CONTACT_TO_EMAIL` in Project Settings → Environment Variables (optional, for logs).
4. Deploy. Vercel will detect Next.js and use default settings.

## Project Structure

```
app/
  api/contact/route.ts  # API route
  layout.tsx            # Root layout with ThemeProvider + Navbar
  page.tsx              # Home page composing sections
components/
  navbar.tsx
  theme-provider.tsx
  sections/
    about-section.tsx
    projects-section.tsx
    skills-section.tsx
    contact-section.tsx
```

## Notes

- The email sending is simulated by logging to the server console. Replace with your email provider SDK if needed.


