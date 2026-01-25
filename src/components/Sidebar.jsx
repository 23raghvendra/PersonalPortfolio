"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    Home, User, Zap, Briefcase, Mail, Lightbulb
} from "lucide-react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "Home", href: "/", icon: Home, section: "hero" },
    { label: "About", href: "/#about", icon: User, section: "about" },
    { label: "Philosophy", href: "/#philosophy", icon: Lightbulb, section: "philosophy" },
    { label: "Projects", href: "/#projects", icon: Briefcase, section: "projects" },
    { label: "Skills", href: "/#skills", icon: Zap, section: "skills" },
    { label: "Contact", href: "/#contact", icon: Mail, section: "contact" },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setActiveSection(sectionId || 'hero');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = ['about', 'philosophy', 'projects', 'skills', 'contact'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        const heroObserver = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setActiveSection('hero');
                }
            },
            { threshold: 0.3 }
        );

        const firstSection = document.querySelector('section');
        if (firstSection) heroObserver.observe(firstSection);

        return () => {
            observer.disconnect();
            heroObserver.disconnect();
        };
    }, []);

    const handleNavClick = (e, href, section) => {
        e.preventDefault();

        if (section === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(section);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <motion.nav
            className="hidden md:flex fixed top-0 left-0 h-screen bg-black border-r border-purple-900/30 z-50 flex-col justify-between py-6"
            initial={{ width: "5rem" }}
            animate={{
                width: isHovered ? "16rem" : "5rem",
                boxShadow: isHovered ? "4px 0 24px -2px rgba(168, 85, 247, 0.15)" : "none"
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 20 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="px-5 flex items-center justify-between overflow-hidden whitespace-nowrap">
                <Link href="/" className="flex items-center gap-4 min-w-max">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/40">
                        <span className="text-white font-bold text-xl">R</span>
                    </div>
                    <motion.span
                        className="font-display font-bold text-xl text-purple-500 tracking-tight"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        Raghvendra.
                    </motion.span>
                </Link>
            </div>

            <div className="flex-1 px-3 mt-10 space-y-2 overflow-hidden hover:overflow-y-auto custom-scrollbar">
                {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.section;
                    const isItemHovered = hoveredItem === item.section;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href, item.section)}
                            onMouseEnter={() => setHoveredItem(item.section)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={cn(
                                "flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 group relative min-w-max",
                                isActive
                                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                                    : "text-slate-400 hover:bg-purple-500/10 hover:text-purple-300"
                            )}
                        >
                            <item.icon
                                size={22}
                                className={cn(
                                    "shrink-0 transition-all duration-300",
                                    isActive
                                        ? "text-white scale-110 fill-current"
                                        : isItemHovered
                                            ? "text-purple-300 scale-105"
                                            : "text-slate-400"
                                )}
                                strokeWidth={isActive ? 2.5 : 2}
                            />

                            <motion.span
                                className={cn(
                                    "font-medium whitespace-nowrap transition-all duration-300",
                                    isActive && "font-semibold"
                                )}
                                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {item.label}
                            </motion.span>

                            {isActive && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-fuchsia-600/5 rounded-xl pointer-events-none"
                                />
                            )}
                        </Link>
                    );
                })}
            </div>

            <div className="px-3 pt-6 overflow-hidden min-w-max mt-4">
                <div className="flex items-center gap-4 px-2">

                    <motion.div
                        className="flex flex-col"
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="text-sm font-medium text-slate-200">Raghvendra</span>
                        <span className="text-xs text-purple-400">Software Engineer</span>
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    );
}
