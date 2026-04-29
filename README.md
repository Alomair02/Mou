# Project Mou

Interactive technical portfolio for Mou, built as a visual knowledge map for a fresh computer engineering graduate.

## Stack

- Vite
- React
- TypeScript
- React Three Fiber
- Drei
- Lucide React

## Development

```bash
npm install
npm run dev
```

The local app is served under `/Mou/` to match GitHub Pages.

## Profile Content

Edit `src/data/profile.ts` to maintain the curated portfolio content:

- Identity, location, availability, and profile links
- Skill domains and tool stack
- Featured projects, repository status, and repository links
- Education timeline and career direction

## Design Direction

The current visual direction is a dark editorial engineering interface inspired by a Google Stitch exploration called "Kinetic Blueprint":

- Full-page WebGL knowledge constellation layered behind the content
- Serif-led identity and section typography
- Sans and mono labels for precise technical UI
- Translucent signal panels, subtle grids, and restrained mint, amber, violet, and coral accents

## Deployment

The repository includes a GitHub Pages workflow at `.github/workflows/deploy.yml`. Pushing to `main` builds the static site and deploys `dist`.
