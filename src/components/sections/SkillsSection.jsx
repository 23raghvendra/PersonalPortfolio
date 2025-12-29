"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { useState } from "react";

const SKILLS_DATA = [
    {
        category: "Frontend",
        description: "Building fast, accessible user interfaces",
        skills: [
            { name: "React", context: "Component architecture, hooks, state management" },
            { name: "Next.js", context: "App Router, Server Components, SSR/SSG" },
            { name: "JavaScript", context: "ES6+, async/await, modern JavaScript features" },
            { name: "Tailwind CSS", context: "Utility-first styling, design systems" },
        ],
    },
    {
        category: "Backend",
        description: "Server logic, APIs, and data persistence",
        skills: [
            { name: "Node.js", context: "JavaScript runtime, async patterns" },
            { name: "Express.js", context: "RESTful APIs, middleware, routing" },
            { name: "PostgreSQL", context: "Relational database design, SQL queries" },
            { name: "Prisma", context: "Type-safe ORM, schema migrations" },
        ],
    },
    {
        category: "Tools & Workflow",
        description: "Development environment and deployment",
        skills: [
            { name: "Git & GitHub", context: "Version control, collaboration, pull requests" },
            { name: "Docker", context: "Containerization, isolated environments" },
            { name: "Vercel", context: "CI/CD, preview deployments, serverless" },
        ],
    },
    {
        category: "Learning & Foundations",
        description: "Computer Science fundamentals",
        skills: [
            { name: "Data Structures", context: "Arrays, trees, graphs, hash tables" },
            { name: "Algorithms", context: "Sorting, searching, dynamic programming" },
            { name: "Problem Solving", context: "LeetCode practice, optimization techniques" },
        ],
    },
];

function SkillPill({ skill, delay = 0 }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.3 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group"
        >
            <div className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-purple-300 dark:hover:border-purple-700/50 transition-all cursor-default">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {skill.name}
                    {skill.isLearning && (
                        <span className="ml-1.5 text-xs text-purple-500 dark:text-purple-400">●</span>
                    )}
                </span>
            </div>

            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10 px-3 py-2 bg-slate-900 dark:bg-slate-800 text-white text-xs rounded-lg shadow-xl border border-slate-700 whitespace-nowrap pointer-events-none"
                >
                    {skill.context}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-slate-800 border-l border-t border-slate-700 rotate-45" />
                </motion.div>
            )}
        </motion.div>
    );
}

function SkillCategory({ category, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="space-y-4"
        >
            <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {category.category}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        {category.description}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 pl-5">
                {category.skills.map((skill, skillIndex) => (
                    <SkillPill
                        key={skill.name}
                        skill={skill}
                        delay={(index * 0.15) + (skillIndex * 0.05)}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export function SkillsSection() {
    return (
        <section id="skills" className="container-custom py-24 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-3">
                    My Tech Stack
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Technologies I use to build real projects, organized by purpose.
                </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-10">
                {SKILLS_DATA.map((category, index) => (
                    <div key={category.category}>
                        <SkillCategory category={category} index={index} />

                        {index < SKILLS_DATA.length - 1 && (
                            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
                        )}
                    </div>
                ))}
            </div>

        </section>
    );
}
