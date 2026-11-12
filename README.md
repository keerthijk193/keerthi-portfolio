# 🚀 Keerthi J K — Developer & Data Engineer Portfolio

[![Deploy Portfolio to GitHub Pages](https://github.com/keerthijk193/keerthi-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/keerthijk193/keerthi-portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Portfolio-Visit_Site-6366f1?style=flat&logo=safari)](https://keerthijk193.github.io/keerthi-portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19.x-61dafb?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff?logo=vite)](https://vitejs.dev/)

> **Modern, high-performance, and responsive personal developer portfolio website for Keerthi J K** — Computer Science Graduate (CGPA 9.29), Data Engineer, and Python Backend Developer. Designed with modern developer ergonomics, glassmorphic UI, dark/light theme switching, and instant print-to-PDF resume export.

🌐 **Live URL:** [https://keerthijk193.github.io/keerthi-portfolio/](https://keerthijk193.github.io/keerthi-portfolio/)

---

## 📌 Repository Overview

| Property | Details |
| :--- | :--- |
| **Author** | **Keerthi J K** |
| **Headline** | Data Engineer &amp; Python Backend Developer |
| **Education** | B.E. Computer Science, CMR Institute of Technology, Bengaluru (CGPA: 9.29) |
| **Email** | [keerthijk193@gmail.com](mailto:keerthijk193@gmail.com) |
| **Phone** | [+91 6361360788](tel:+916361360788) |
| **LinkedIn** | [linkedin.com/in/keerthi-j-k-765522309](https://linkedin.com/in/keerthi-j-k-765522309) |
| **GitHub** | [github.com/keerthijk193](https://github.com/keerthijk193) |
| **Location** | Bengaluru, Karnataka, India |

---

## ✨ Features & Architecture

- ⚡ **Blazing Fast Vite + React 19 + TypeScript**: Sub-3-second builds and instantaneous HMR (Hot Module Replacement).
- 🎨 **Modern Glassmorphic UI**: Tailored Tailwind CSS design system with subtle violet/cyan gradients, ambient backdrop blurs, and hover micro-interactions.
- 🌓 **Dynamic Dark / Light Mode**: Seamless theme switching with system preference detection and `localStorage` persistence.
- 📜 **Interactive Resume Modal & Print-to-PDF**: In-app full resume viewer with dedicated `@media print` stylesheets enabling clean 1-click PDF downloads and hard-copy prints.
- 🔍 **Real-Time Technical Skills Filter & Search**: Interactive search bar filtering across 35+ technologies, tools, and libraries with proficiency indicators.
- 📂 **Multi-Domain Project Showcase**: Filterable portfolio covering Data Engineering, AI/ML, Polyglot Backend, and Honeypot Intrusion Detection. Includes detailed technical architecture modals and GitHub links.
- ⏳ **Chronological Internship Timeline**: Detailed breakdown of 4 industry internships across **V4C**, **AeroAegis**, **SuprMentr**, and **Internpe**.
- 🎓 **Education & Honors Section**: Showcases academic history with Centum (100/100) university awards and 1st-rank topper achievements.
- 🏆 **Credentials & Certifications**: Categorized showcase of 17+ industry credentials from **Databricks** (6 certs), **IBM** (4 certs), **Cisco** (3 certs), and **Simplilearn / freeCodeCamp**.
- 📬 **Interactive Contact Portal**: Direct communication form with input validation, mailto fallback, and one-click copy-to-clipboard for email and phone numbers.
- 📱 **100% Mobile Responsive**: Tested across desktop displays, tablets, and mobile smartphones with slide-out navigation drawer.

---

## 🛠️ Technology Stack

### Frontend & Core
- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Icons:** [Lucide Icons](https://lucide.dev/) + Custom SVG Vector Components
- **Typography:** Inter & Fira Code (Google Fonts)

### Production & CI/CD
- **Version Control:** Git & GitHub
- **Automated CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Hosting Platforms:** GitHub Pages & Vercel-ready (`vercel.json`)

---

## 📂 Project Folder Structure

```text
keerthi-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Modern branded gradient favicon
│   └── robots.txt              # Search engine crawler directives
├── src/
│   ├── assets/                 # Static media and logos
│   ├── components/             # Modular, reusable React UI components
│   │   ├── About.tsx           # Narrative, core CS tenets, 4 pillars
│   │   ├── Certifications.tsx  # Categorized certs & achievements tabs
│   │   ├── Contact.tsx         # Contact cards, copy-to-clipboard, form
│   │   ├── Education.tsx       # Degrees, institutions, scores, honors
│   │   ├── Experience.tsx      # Chronological internship timeline
│   │   ├── Footer.tsx          # Copyright, socials, scroll-to-top
│   │   ├── Hero.tsx            # Headline, stats strip, profile card
│   │   ├── Icons.tsx           # Custom SVG vectors (GitHub, LinkedIn)
│   │   ├── Navbar.tsx          # Sticky glassmorphic bar, scroll spy
│   │   ├── Projects.tsx        # Filterable project cards & architecture modal
│   │   ├── ResumeModal.tsx     # In-app viewer & printable PDF exporter
│   │   ├── Skills.tsx          # Real-time search & categorized skills
│   │   └── ThemeToggle.tsx     # Dark/Light theme state switch
│   ├── data/
│   │   └── portfolioData.ts    # Centralized factual data from resume
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Tailwind directives & global styling
│   └── main.tsx                # React DOM root mounting
├── index.html                  # SEO metadata, OpenGraph tags, Google Fonts
├── package.json                # Project dependencies & build scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind theme, colors & dark mode
├── tsconfig.json               # TypeScript configuration
├── vercel.json                 # Vercel deployment configuration
└── vite.config.ts              # Vite configuration (relative base resolution)
```

---

## 💻 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher; v22 recommended)
- [npm](https://www.npmjs.com/) (v9 or higher) or yarn/pnpm

### 1. Clone the Repository
```bash
git clone https://github.com/keerthijk193/keerthi-portfolio.git
cd keerthi-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
This compiles TypeScript and outputs optimized, minified production assets into the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚀 Deployment Instructions

### Option 1: Automated GitHub Pages (Active)
This repository includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`):
1. Push your code to the `main` branch on GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern developer portfolio"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. The workflow runs automatically and publishes your portfolio to:
   `https://keerthijk193.github.io/keerthi-portfolio/`

### Option 2: Deploy to Vercel (Zero-Config)
The project includes `vercel.json` for one-click deployment:
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New...** > **Project**.
3. Import your GitHub repository `keerthi-portfolio`.
4. Vercel automatically detects the Vite framework settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your site will be live at `https://keerthi-portfolio.vercel.app` in under 30 seconds!

### Connecting a Custom Domain (Optional)
To use a custom domain (e.g. `keerthijk.dev` or `keerthijk.com`):
1. **On Vercel:** Go to Project Settings > **Domains** > Enter your domain > Add DNS CNAME records (`cname.vercel-dns.com`).
2. **On GitHub Pages:** Go to Settings > **Pages** > **Custom domain** > Enter domain > Save > Add DNS CNAME record (`keerthijk193.github.io`).

---

## 🔄 How to Update Your Portfolio

All personal data, projects, experience, skills, and certifications are centralized in a single file:
[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

To update your portfolio:
1. Open `src/data/portfolioData.ts`.
2. Add a new project to the `PROJECTS` array, a new certification to `CERTIFICATION_CATEGORIES`, or updated work experience to `EXPERIENCES`.
3. Save the file.
4. Commit and push:
   ```bash
   git add src/data/portfolioData.ts
   git commit -m "update: add new project / role"
   git push origin main
   ```
5. GitHub Actions will rebuild and deploy the update automatically!

---

## 👤 Author & Connect

**Keerthi J K**  
*Data Engineer &amp; Python Backend Developer*  
Bengaluru, Karnataka, India

- 📧 Email: [keerthijk193@gmail.com](mailto:keerthijk193@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/keerthi-j-k-765522309](https://linkedin.com/in/keerthi-j-k-765522309)
- 🐙 GitHub: [github.com/keerthijk193](https://github.com/keerthijk193)
- 📞 Phone: [+91 6361360788](tel:+916361360788)

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
