import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

const SOCIAL_LINKS = [
    { label: "GitHub", href: "https://github.com", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { label: "Twitter", href: "https://twitter.com", icon: Twitter },
    { label: "Email", href: "mailto:hello@example.com", icon: Mail },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-transparent py-12 mt-auto overflow-hidden border-t border-slate-200 dark:border-slate-800">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
                            Raghvendra
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                            Building digital experiences that matter.
                            <br />
                            Focused on performance and user joy.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/20 dark:hover:text-purple-400 transition-all duration-300 hover:-translate-y-1"
                                aria-label={link.label}
                            >
                                <link.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <p>© {currentYear} Raghvendra. All rights reserved.</p>
                    <p className="flex items-center gap-1.5">
                        Built with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> using Next.js & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
