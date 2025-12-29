import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";

export function ProjectsSection({ projects }) {
    
    

    return (
        <section id="projects" className="container-custom py-20 scroll-mt-20">
            <SectionTitle
                title="Projects"
                subtitle="Things I've built to solve real-world problems."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </section>
    );
}
