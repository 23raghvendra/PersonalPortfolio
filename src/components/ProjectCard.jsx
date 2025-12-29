"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/SpotlightCard";

export function ProjectCard({ project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
        >
            <SpotlightCard className="h-full flex flex-col group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="block aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                </a>
                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-slate-50">
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                {project.title}
                            </a>
                        </h3>
                        <div className="flex gap-3">
                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors transform hover:scale-110 duration-200" aria-label="Github Repo">
                                    <Github size={20} />
                                </a>
                            )}
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors transform hover:scale-110 duration-200" aria-label="Live Demo">
                                    <ArrowUpRight size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                        {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map(tag => (
                            <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700/50">
                                {tag}
                            </span>
                        ))}
                        {project.tags.length > 4 && (
                            <span className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-500 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700">
                                +{project.tags.length - 4}
                            </span>
                        )}
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>
    );
}
