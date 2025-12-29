"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        setParticles(
            Array.from({ length: 20 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 2,
                duration: Math.random() * 20 + 10,
                delay: Math.random() * 5,
            }))
        );
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        }),
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-16 pb-8 relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-pink-500/20 rounded-full blur-[120px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-[100px]"
            />

            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-purple-400/30 dark:bg-purple-300/20"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                    left: mousePosition.x - 250,
                    top: mousePosition.y - 250,
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl space-y-5">
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                            I turn complex ideas into{" "}
                            <motion.span
                                className="relative inline-block"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
                                    fast, scalable products
                                </span>
                                <motion.div
                                    className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 blur-xl -z-10"
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.span>
                            {" "}people actually enjoy using.
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="flex items-start gap-3 pt-2"
                    >
                        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 mt-1 flex-shrink-0">
                            <Code2 className="w-5 h-5 text-purple-500" />
                        </div>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                            Second-year CS student obsessed with building fast, scalable web applications. I focus on clean code, performance optimization, and creating products that solve real problems.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="flex flex-wrap gap-4 pt-3"
                    >
                        <Magnetic>
                            <Link
                                href="/#projects"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full font-bold overflow-hidden transition-all shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10">See What I've Built</span>
                                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </Link>
                        </Magnetic>

                        <Magnetic>
                            <Link
                                href="/#philosophy"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent rounded-full font-bold overflow-hidden border-2 border-purple-500/30 hover:border-purple-500/50 transition-all"
                            >
                                <div className="absolute inset-0 bg-purple-500/5 backdrop-blur-md group-hover:bg-purple-500/10 transition-colors rounded-full" />
                                <Zap className="relative z-10 w-5 h-5 text-purple-600 dark:text-purple-400" />
                                <span className="relative z-10 text-slate-900 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">How I Think</span>
                                <ArrowRight size={18} className="relative z-10 text-slate-900 dark:text-slate-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
