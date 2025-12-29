import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Github, ExternalLink, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

async function markdownToHtml(markdown) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const contentHtml = await markdownToHtml(project.content);

    return (
        <article className="container-custom py-20">
            <Link href="/projects" className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
            </Link>

            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-slate-50">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {format(parseISO(project.date), "MMMM yyyy")}
                        </div>
                        {project.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="aspect-video relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex gap-4">
                    {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors">
                            Visit Site <ExternalLink size={18} />
                        </a>
                    )}
                    {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            View Code <Github size={18} />
                        </a>
                    )}
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none pt-8 border-t border-slate-200 dark:border-slate-800">
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </div>
            </div>
        </article>
    );
}
