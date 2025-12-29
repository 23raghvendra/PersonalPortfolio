"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Code, Zap, Users, Target, Lightbulb, Shield } from "lucide-react";

const PRINCIPLES = [
    {
        icon: Code,
        title: "Clarity over cleverness",
        description: "I'm learning to write code that's easy to understand and modify. The goal is code that makes sense when I—or someone else—revisits it months later."
    },
    {
        icon: Zap,
        title: "Performance matters early",
        description: "I care about speed from the start. Fast apps respect users' time, and optimizing later is harder than building with performance in mind."
    },
    {
        icon: Target,
        title: "Write maintainable code",
        description: "I'm practicing writing code that's simple and easy to change. Over-engineering today creates debugging headaches tomorrow."
    },
    {
        icon: Lightbulb,
        title: "Think beyond features",
        description: "I'm learning to ask: How will this scale? What happens when it breaks? Who will maintain this? These questions shape better decisions."
    },
    {
        icon: Users,
        title: "User experience is my responsibility",
        description: "Good products come from engineers who think about the full user journey, not just the technical implementation."
    },
    {
        icon: Shield,
        title: "Ship carefully and iterate",
        description: "I believe in testing, getting feedback, and improving. Shipping is important, but shipping thoughtfully is better."
    }
];

export function PhilosophySection() {
    return (
        <section id="philosophy" className="container-custom py-24 scroll-mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-transparent dark:via-purple-950/10 pointer-events-none" />

            <div className="relative z-10">
                <SectionTitle
                    title="How I Work"
                    subtitle="These are the principles I'm actively learning to apply as I grow as an engineer."
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PRINCIPLES.map((principle, i) => (
                        <motion.div
                            key={principle.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-300"
                        >
                            <div className="mb-4 inline-flex p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                <principle.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" strokeWidth={2} />
                            </div>

                            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-slate-100 mb-2">
                                {principle.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {principle.description}
                            </p>

                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-fuchsia-500/0 group-hover:from-purple-500/5 group-hover:to-fuchsia-500/5 transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800"
                >
                    <div className="flex items-start gap-4">
                        <div className="text-6xl text-purple-500/20 font-serif leading-none">"</div>
                        <div className="flex-1 pt-2">
                            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-4">
                                I believe the best code is the code that solves the problem simply. The best learning happens by building real things. And the best way to grow is by staying curious and asking good questions.
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                This is the mindset I bring to every project and team.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
