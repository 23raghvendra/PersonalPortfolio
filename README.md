# Raghvendra — Portfolio

A high-performance, immersive portfolio website built to showcase production-grade full-stack applications and modern web development expertise.

## 🚀 Overview

This portfolio is engineered to be more than just a static showcase—it's a demonstration of modern web capabilities. Built with Next.js 16 and React 19, it features fluid animations, dynamic content management, and a premium dark theme aesthetic designed to capture attention immediately.

The architecture emphasizes performance (via Server Components and optimized assets) and user experience (particle effects, typewriter animations, and magnetic interactions).

## 🛠 Tech Stack

### Core
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4, Custom CSS
- **Animation**: Framer Motion 12
- **Language**: JavaScript (ES6+)

### Features & Services
- **Content Management**: Markdown with gray-matter
- **Theme System**: next-themes (Dark/Light mode)
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## ✨ Key Features

**Immersive Animations**: Custom typewriter effects, particle background, and scroll-linked parallax for engaging interactions.

**3D Interactive Cards**: Perspective-tilted project cards with spotlight effects and hover overlays.

**Intelligent Navigation**: Scroll spy sidebar that automatically highlights active sections with smooth transitions.

**Visual Skill System**: Color-coded proficiency indicators with animated progress bars and emoji badges (🔥 Expert, ⭐ Advanced, 🌱 Learning).

**Dynamic Projects**: Markdown-based project management with live demo and GitHub repository links.

**Responsive Design**: Fluid layout that adapts seamlessly from mobile to desktop with touch-optimized interactions.

**Performance Optimized**: Server Components, optimized images, and code-splitting for sub-second load times.

## ⚡️ Getting Started

To run this project locally:

**Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

**Install dependencies**
```bash
npm install
```

**Run Development Server**
```bash
npm run dev
```

**Build for Production**
```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (site)/            # Main site routes
│   └── layout.jsx         # Root layout
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── Hero.jsx
│   ├── Sidebar.jsx
│   └── ...
├── content/projects/      # Markdown project files
├── lib/                   # Utility functions
└── styles/                # Global styles & animations
```

## 🎨 Customization

**Add Projects**: Create markdown files in `src/content/projects/` with frontmatter metadata.

**Update Skills**: Edit `TECH_CATEGORIES` array in `src/components/sections/SkillsSection.jsx`.

**Change Theme**: Modify CSS variables in `src/styles/globals.css` for colors and animations.

## 📫 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

Open to **Internship & Full-stack Development Opportunities**.

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
