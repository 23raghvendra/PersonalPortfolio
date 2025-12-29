# Raghvendra - Software Engineer Portfolio

This is a modern, high-performance portfolio built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.
It features a clean, premium design, fully responsive layout, and content management via Markdown files.

## 🚀 Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

-   `src/app`: Application routes (Pages).
-   `src/components`: Reusable UI components.
-   `src/lib`: Utility functions and data fetchers.
-   `src/content`: Markdown files for Projects and Blog posts.
-   `src/styles`: Global CSS and Tailwind configuration.
-   `public`: Static assets (images).

## 📝 Content Management

### Adding a Project
Create a new Markdown file in `src/content/projects/`, e.g., `new-project.md`.
Add the following frontmatter:

```yaml
---
title: "Project Title"
description: "Brief description."
tags: ["React", "Node.js"]
image: "/images/project-image.jpg"
demoUrl: "https://demo.com"
repoUrl: "https://github.com/repo"
featured: true
date: "2024-01-01"
---

## Overview
Project details...
```

### Adding a Blog Post
Create a new Markdown file in `src/content/posts/`, e.g., `my-post.md`.

```yaml
---
title: "Post Title"
excerpt: "Short summary."
date: "2024-03-01"
tags: ["Tech", "Life"]
coverImage: "/images/blog-cover.jpg"
---

## Content
Write your post here...
```

## 🎨 Customizing

-   **Colors & Fonts:** Edit `src/styles/globals.css`.
-   **Navigation:** Update `src/components/Header.tsx`.
-   **Home Page Content:** Edit `src/app/(site)/page.tsx`.
-   **About/Skills/Experience data:** Edit the respective page files directly or move to `src/lib/data` if preferred.

## 🛠 Tech Stack

-   **Framework:** Next.js 16 (App Router)
-   **Styling:** Tailwind CSS v4
-   **Language:** TypeScript
-   **Icons:** Lucide React
-   **Content:** Markdown (Gray-matter, Remark)
-   **Theming:** Next-themes (Dark mode)

## 🚢 Deployment

Ready to deploy on [Vercel](https://vercel.com/new).
Just push to GitHub and import the project in Vercel.
