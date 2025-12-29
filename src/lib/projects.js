import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getAllProjects() {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjects = fileNames.filter(fileName => fileName.endsWith('.md')).map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title || 'Untitled Project',
            description: data.description || '',
            tags: data.tags || [],
            image: data.image || '/images/project-placeholder.jpg',
            demoUrl: data.demoUrl,
            repoUrl: data.repoUrl,
            featured: data.featured || false,
            date: data.date || new Date().toISOString(),
            content,
        };
    });

    
    return allProjects.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getFeaturedProjects() {
    return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug) {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
        return undefined;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title || 'Untitled Project',
        description: data.description || '',
        tags: data.tags || [],
        image: data.image || '/images/project-placeholder.jpg',
        demoUrl: data.demoUrl,
        repoUrl: data.repoUrl,
        featured: data.featured || false,
        date: data.date || new Date().toISOString(),
        content,
    };
}
