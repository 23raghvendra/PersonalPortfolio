"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Zap, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";
import ParticleBackground from "@/components/ParticleBackground";
import { Typewriter } from "@/components/Typewriter";

export function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        }),
    };

    return (
        <section
            ref={containerRef}
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            <ParticleBackground />

            {/* Background Gradient Mesh - Dynamic */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px] mix-blend-screen animate-float-delayed"
            />

            <div className="container-custom relative z-10">
                <div className="max-w-5xl space-y-6">
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-[1.1] text-white">
                            <Typewriter text="I turn complex ideas into" />{" "}
                            <span className="relative inline-block text-gradient">
                                fast, scalable products
                            </span>
                            <br className="hidden md:block" />
                            {" "}<Typewriter text="people actually enjoy using." />
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="flex items-start gap-4 pt-4 max-w-3xl"
                    >
                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-float">
                            <Code2 className="w-6 h-6 text-purple-400" />
                        </div>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                            Crafting digital experiences that defy gravity. I specialize in high-performance web applications, combining technical depth with premium design aesthetics.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="flex flex-wrap gap-5 pt-6"
                    >
                        <Magnetic>
                            <Link
                                href="/#projects"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white rounded-full font-bold overflow-hidden transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-105"
                            >
                                <span className="relative z-10">View Projects</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>
                        </Magnetic>

                        <Magnetic>
                            <Link
                                href="/#about"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white rounded-full font-bold overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:bg-white/5"
                            >
                                <Zap className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
                                <span className="relative z-10">About Me</span>
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>
            </div>



        </section>
    );
}
