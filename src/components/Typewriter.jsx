"use client";

import { motion } from "framer-motion";

export const Typewriter = ({ text, className = "" }) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    };


    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                    {Array.from(word).map((letter, letterIndex) => (
                        <motion.span
                            variants={child}
                            key={letterIndex}
                            className="inline-block relative"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.span>
    );

};
