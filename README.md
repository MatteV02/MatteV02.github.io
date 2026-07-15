# Matteo Veroni - Personal Portfolio

A sleek, highly performant, and fully bilingual personal portfolio website built with **Astro** and **Tailwind CSS v4**.

This repository serves as the digital resume and portfolio for Matteo Veroni, a Computer Science Engineer specializing in Embedded Systems, Cybersecurity, and Software Engineering.

## ✨ Features

- **Blazing Fast (SSG):** Built with Astro, the site is statically generated for maximum performance and instant load times.
- **Bilingual (EN & IT):** Fully supports English and Italian. It features an intelligent client-side router that automatically detects the user's browser language and redirects them instantly. A manual toggle is also provided and preferences are saved.
- **Dark/Light Mode:** Includes a theme toggle that respects system preferences and persists the user's choice across sessions. SVGs and assets dynamically adapt to the active theme.
- **Data-Driven Content:** All textual content, links, and experiences are managed cleanly through YAML files using Astro's Content Collections API. No need to touch the UI code to update your CV!
- **Tailwind CSS v4:** Styled using the latest utility-first CSS framework for a beautiful, responsive, and maintainable design.
- **SEO Optimized:** Built-in metadata, OpenGraph tags, and sitemap generation.

## 📂 Project Structure

```text
/
├── content/               # All website content lives here!
│   ├── globals/           # Global elements (Top bar, Footer) in EN/IT
│   ├── images/            # All static images, logos, and assets
│   └── pages/             # Page content (Experience, Education, etc.) in EN/IT
├── public/                # Static assets (Favicons, Fonts, CV PDF)
├── src/
│   ├── components/        # Reusable Astro UI components (Layout, Buttons, etc.)
│   ├── layouts/           # Global layouts and HTML skeleton
│   ├── pages/             # Astro routing (/[lang]/index.astro and the auto-router)
│   ├── styles/            # Global CSS and Tailwind configuration
│   └── content.config.ts  # Zod schemas validating the YAML content files
└── astro.config.mjs       # Astro configuration and integrations
```

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MatteV02/MatteV02.github.io.git
   cd MatteV02.github.io
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the Astro development server with hot-module replacement (HMR):
```bash
npm run dev
```
Navigate to `http://localhost:4321` to view the site.

### Building for Production
To generate the static build:
```bash
npm run build
```
The optimized files will be output to the `dist/` directory, ready to be deployed to any static hosting service (GitHub Pages, Vercel, Netlify, etc.).

## 📝 How to Update Content

You don't need to write code to update your experiences or skills! Simply navigate to the `content/` directory and edit the YAML files. 

For example, to update your English homepage content, edit `content/pages/index_en.yaml`. To update the top navigation links in Italian, edit `content/globals/top_bar_it.yaml`. 

If you add new images, place them in `content/images/` and reference their relative paths in the YAML files.

## 🛠️ Built With

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
