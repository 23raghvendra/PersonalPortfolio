"use client";

import { useRef, useState } from "react";
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
            <SpotlightCard className="h-full flex flex-col group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay with Buttons */}
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform duration-200"
                                aria-label="View Source"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 bg-purple-600 text-white rounded-full font-bold text-sm flex items-center gap-2 hover:bg-purple-500 hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-600/20"
                            >
                                Live Demo <ArrowUpRight size={16} />
                            </a>
                        )}
                    </div>

                    {/* Live Demo Preview Placeholder (Optional Video) */}
                    {/* Note: In a real implementation, you would check for project.videoUrl and render a video element on hover */}
                </div>

                <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-slate-50 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                        {project.description}
                    </p>


                </div>
            </SpotlightCard>
        </motion.div>
    );
}
