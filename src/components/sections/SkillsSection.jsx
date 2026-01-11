"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";

const TECH_CATEGORIES = [
    {
        title: "Frontend Development",
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "UI/UX"],
        accentColor: "border-l-blue-500"
    },
    {
        title: "Backend & Database",
        skills: ["Node.js", "Express", "Python", "MongoDB", "MySQL", "SQL", "PostgreSQL", "Firebase", "Prisma ORM", "REST APIs", "OAuth 2.0"],
        accentColor: "border-l-purple-500"
    },
    {
        title: "AI & Machine Learning",
        skills: ["OpenAI API", "Generative AI", "Pandas", "NumPy"],
        accentColor: "border-l-pink-500"
    },
    {
        title: "DevOps & Tools",
        skills: ["Git/GitHub", "Vercel", "Figma", "Canva", "Postman", "Excel"],
        accentColor: "border-l-cyan-500"
    },
    {
        title: "Professional Skills",
        skills: ["Data Structures", "Problem Solving", "Critical Thinking", "Communication", "Creativity", "Graphic Design"],
        accentColor: "border-l-emerald-500"
    }
];

export function SkillsSection() {
    return (
        <section id="skills" className="container-custom py-24 scroll-mt-20">
            <SectionTitle
                title="Tech Stack"
                subtitle="Tools and technologies I use to bring ideas to life."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {TECH_CATEGORIES.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 ${category.accentColor} border-l-4 hover:bg-slate-900/60 transition-colors duration-300 group`}
                    >
                        <h3 className="text-xl font-bold text-slate-100 mb-6 font-display group-hover:text-white transition-colors">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 text-sm font-medium hover:scale-105 hover:bg-slate-700/80 hover:text-white hover:border-slate-600 transition-all duration-200 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
