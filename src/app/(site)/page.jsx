
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getAllProjects } from "@/lib/projects";


export default function Home() {
    const projects = getAllProjects();

    return (
        <div className="space-y-0 pb-20">
            <Hero />


            <AboutSection />

            <PhilosophySection />


            <ProjectsSection projects={projects} />

            <SkillsSection />

            <ContactSection />
        </div>
    );
}
