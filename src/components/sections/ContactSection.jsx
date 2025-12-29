"use client";

import { ContactForm } from "@/components/ContactForm";
import { Mail, Github, Linkedin, Code2, ArrowRight, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
    { icon: Github, label: "GitHub", href: "https://github.com/23raghvendra", color: "hover:text-slate-900 dark:hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/raghvendra-singh-8b0745316", color: "hover:text-blue-600" },
    { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/raghvendra_90/", color: "hover:text-orange-600" },
];

export function ContactSection() {
    return (
        <section id="contact" className="relative min-h-screen flex items-center scroll-mt-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative container-custom"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
                                        Let's build something
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
                                            remarkable together
                                        </span>
                                    </h2>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md"
                                >
                                    Whether you have a project idea, an internship opportunity, or just want to connect — I'd love to hear from you.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="space-y-3"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 shadow-sm">
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50" />
                                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                                        Open to internship opportunities
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 pl-1">
                                    <Clock size={16} className="opacity-60" />
                                    <span>Usually reply within 24–48 hours</span>
                                </div>
                            </motion.div>

                            <motion.a
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                href="mailto:2006raghvendrasingh@gmail.com"
                                className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border border-purple-100 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-700/50 transition-all shadow-sm hover:shadow-md max-w-md"
                            >
                                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/50 group-hover:scale-110 transition-transform shadow-sm">
                                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Email me directly</p>
                                    <p className="font-semibold text-purple-600 dark:text-purple-400 group-hover:underline">2006raghvendrasingh@gmail.com</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </motion.a>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="space-y-3"
                            >
                                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                                    Or find me here
                                </p>
                                <div className="flex gap-3">
                                    {SOCIAL_LINKS.map((social, i) => (
                                        <motion.a
                                            key={social.label}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.7 + i * 0.05 }}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 ${social.color} transition-all hover:scale-110 hover:shadow-lg hover:-translate-y-0.5`}
                                            aria-label={social.label}
                                            title={social.label}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <social.icon size={20} strokeWidth={2} />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-3xl blur-2xl opacity-60" />

                            <div className="relative p-8 md:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-2xl shadow-purple-900/10 dark:shadow-black/30">
                                <div className="absolute -top-3 -right-3 p-2 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 shadow-lg shadow-purple-500/30">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-slate-100 mb-2">
                                            Send a message
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Tell me about your project or opportunity
                                        </p>
                                    </div>

                                    <ContactForm />

                                    <p className="text-xs text-center text-slate-500 dark:text-slate-500 flex items-center justify-center gap-1.5">
                                        <span className="inline-block w-1 h-1 rounded-full bg-emerald-500" />
                                        No spam. I'll personally reply to every message.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
