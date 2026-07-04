# Fuquan Gao — Portfolio

A dark, space-themed personal portfolio for Fuquan Gao (Full-Stack Software Engineer). It features an interactive 3D avatar, an animated starfield background, a bento-grid About section, a career timeline, project filtering, and a contact form.

Live site: https://my-portfolio-one-nu-96.vercel.app/

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tooling)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Three.js** + **@react-three/fiber** + **@react-three/drei** (3D avatar & starfield)
- **Framer Motion** (animations)

## Getting Started

```bash
pnpm install
pnpm dev        # start the dev server at http://localhost:5173
```

## Scripts

- `pnpm dev` — start the local dev server
- `pnpm build` — type-check (`tsc -b`) and build for production into `dist/`
- `pnpm preview` — preview the production build locally
- `pnpm lint` — run ESLint

## Project Structure

```
public/            static assets (avatar, CV PDF, favicon)
src/
  components/      UI sections (Navbar, Hero, Hero3D, About, Experience, Projects, Contact, Footer, SpaceBackground)
  data/profile.ts  single source of truth for all resume content
  index.css        theme tokens and utility classes
```

## Customizing Content

All resume content (summary, education, projects, experience, skills, certifications, contact) lives in [`src/data/profile.ts`](src/data/profile.ts). Update that file and the whole site reflects the changes.

- **Avatar:** replace `public/avatar.png`.
- **CV:** replace `public/FuQuan-Gao-CV.pdf` (linked from the Hero "Download CV" button).
- **Contact form:** submits via `mailto:` by default; see the comment in `src/components/Contact.tsx` for wiring up EmailJS.

## Deployment

Deployed on **Vercel** (framework preset: Vite, build command `pnpm build`, output `dist`). Requires Node `22.x`. Update the `og:url` / `og:image` URLs in [`index.html`](index.html) if you move to a custom domain.
