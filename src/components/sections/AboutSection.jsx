"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Heart, Code2, ArrowRight, User } from "lucide-react";

const CARE_ABOUT = [
    {
        icon: Zap,
        title: "Performance",
        description: "I care about speed. Learning to optimize load times and interactions while keeping code readable and maintainable."
    },
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing code that's easy to understand and modify. Studying patterns that make projects easier to work with as they grow."
    },
    {
        icon: Heart,
        title: "User Experience",
        description: "Building interfaces that feel intuitive and respect users' time. Every click should feel intentional, not confusing."
    }
];

const TIMELINE = [
    {
        phase: "Started",
        year: "2024",
        description: "Discovered web development and fell in love with building things that people can use. Started with HTML, CSS, and JavaScript—curious about how real-world products actually work."
    },
    {
        phase: "Building",
        year: "2024 → Present",
        description: "Diving deep into React, Next.js, and Node.js. Building real projects beyond tutorials—learning through debugging, iterating, and shipping. Focused on writing clean code and understanding fundamentals, not just frameworks."
    },
    {
        phase: "Now",
        year: "Second-Year CS Student",
        description: "Actively preparing for internships and real-world engineering roles. Studying full-stack development with a focus on scalability, performance, and user experience. Ready to contribute, learn fast, and grow as a professional engineer."
    }
];

export function AboutSection() {
    return (
        <section id="about" className="container-custom py-24 scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="group relative order-2 lg:order-1"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10 dark:shadow-black/30 rotate-2 hover:rotate-0 transition-all duration-500 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-4 border-white dark:border-slate-800">
                        <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <User className="w-24 h-24 text-slate-300 dark:text-slate-600" strokeWidth={1.5} />
                        </div>
                    </div>
                </motion.div>

                <div className="order-1 lg:order-2 space-y-10">
                    <div>
                        <SectionTitle title="About Me" subtitle="From curious beginner to confident builder." />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            Hi! I'm Raghvendra, a second-year Computer Science student passionate about building fast, scalable web applications. I love turning complex problems into clean, user-friendly solutions. When I'm not coding, you'll find me solving problems on LeetCode or exploring new technologies.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="mt-24 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">My Journey</h3>
                </div>

                <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 md:ml-0 space-y-12">
                    {TIMELINE.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center">
                                <div className={`hidden md:block text-right ${i % 2 === 0 ? 'order-1' : 'order-3'}`}>
                                    {i % 2 === 0 ? (
                                        <>
                                            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 tracking-wider uppercase">{item.year}</span>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{item.phase}</h4>
                                        </>
                                    ) : (
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.description}</p>
                                    )}
                                </div>

                                <div className="absolute left-[-5px] md:static md:order-2 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 ring-4 ring-white dark:ring-slate-950" />
                                </div>

                                <div className={`md:block ${i % 2 === 0 ? 'order-3' : 'order-1'}`}>
                                    <div className="md:hidden mb-2">
                                        <span className="text-xs font-bold text-purple-600 dark:text-purple-400 tracking-wider uppercase">{item.year}</span>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.phase}</h4>
                                    </div>

                                    {i % 2 === 0 ? (
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.description}</p>
                                    ) : (
                                        <div className="hidden md:block">
                                            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 tracking-wider uppercase">{item.year}</span>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{item.phase}</h4>
                                        </div>
                                    )}
                                    <p className="md:hidden text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
