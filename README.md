# MD Tanvir Rahman — 3D Animated Portfolio

A single-page developer portfolio built with **React**, **Vite**, **React Three Fiber**, and **GSAP**. It combines interactive 3D scenes, animated UI, and project showcases into one immersive experience.

**Contact:** [corp.bit1769@outlook.com](mailto:corp.bit1769@outlook.com)

---

## Features

- **Hero 3D scene** — Hacker desk environment with floating React logo, cube, and rings; mouse-parallax camera on desktop
- **Animated avatar** — Ready Player Me character with Mixamo animations (idle, salute, clapping, victory)
- **Project showcase** — Carousel with live links and video textures displayed on a 3D computer model
- **Interactive globe** — Earth visualization in the About section
- **Contact form** — EmailJS-powered form with success/error alerts
- **Responsive layout** — Tailwind CSS with breakpoint-aware 3D positioning

---

## Tech Stack

| Category | Tools |
|----------|-------|
| Framework | React 18, Vite 5 |
| 3D | Three.js, React Three Fiber, Drei |
| Animation | GSAP, Adobe Mixamo |
| Styling | Tailwind CSS |
| Other | EmailJS, react-globe.gl, react-responsive |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <your-repo-url>
cd Portfolio-Three-JS
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

Create a `.env` file in the project root for the contact form:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [EmailJS](https://www.emailjs.com/). The form sends messages to `corp.bit1769@outlook.com`.

---

## Project Structure

```
src/
├── sections/          # Page sections (Hero, About, Projects, Contact, etc.)
├── components/        # Reusable UI and 3D components
├── constants/         # Nav links, projects, work experience, 3D sizing
├── hooks/             # Custom React hooks
└── index.css          # Global styles and Tailwind utilities

public/
├── assets/            # Images, icons, logos
├── models/            # GLB and FBX 3D models
├── textures/          # Matcap textures and project demo videos
└── latestResume.pdf   # Downloadable resume
```

---

## Customization

| What to change | Where |
|----------------|-------|
| Name, email, bio | `src/sections/Hero.jsx`, `About.jsx`, `Contact.jsx`, `Footer.jsx` |
| Projects | `src/constants/index.js` → `myProjects` |
| Nav links | `src/constants/index.js` → `navLinks` |
| Work experience cards | `src/constants/index.js` → `workExperiences` |
| Resume PDF | Replace `public/latestResume.pdf` |
| 3D avatar | Replace `public/models/animations/Developer.glb` (Ready Player Me) |
| Social links | `src/sections/Footer.jsx` |
| Page title | `index.html` |

---

## 3D Assets

- **Ready Player Me** — Personalized 3D avatar (`Developer.glb`)
- **Adobe Mixamo** — Character animations (`.fbx` files in `public/models/animations/`)
- **Sketchfab** — Hacker room and computer models (`.glb` files in `public/models/`)
- **GSAP** — UI transitions, typewriter effect, and 3D motion

---

## License

Private portfolio project. All rights reserved © 2026 MD Tanvir Rahman.
