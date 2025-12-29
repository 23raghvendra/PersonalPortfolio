"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
    const [status, setStatus] = useState("idle");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");

        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus("success");
    }

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                    <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 text-center mb-6">
                    Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100"
                        placeholder="Your name"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100"
                        placeholder="you@example.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100"
                    placeholder="What's this about?"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 focus:border-purple-400 dark:focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 focus:outline-none transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-slate-100"
                    placeholder="Tell me about your project or opportunity..."
                ></textarea>
            </div>

            <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98, y: 0 }}
                className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-600 hover:to-fuchsia-700 text-white font-bold py-4 px-6 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 relative overflow-hidden"
            >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {status === "submitting" ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </>
                )}
            </motion.button>
        </form>
    );
}
