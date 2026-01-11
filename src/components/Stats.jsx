"use client";

import { motion } from "framer-motion";
import { Coffee, Code, GitCommit, Layers } from "lucide-react";

const STATS = [
    { label: "Lines of Code", value: "50k+", icon: Code, color: "text-blue-500" },
    { label: "Projects Completed", value: "12", icon: Layers, color: "text-purple-500" },
    { label: "Coffees Consumed", value: "245", icon: Coffee, color: "text-amber-600" },
    { label: "Contributions", value: "320+", icon: GitCommit, color: "text-green-500" },
];

export function Stats() {
    return (
        <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className={`mb-3 p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <h4 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-1">
                                {stat.value}
                            </h4>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
