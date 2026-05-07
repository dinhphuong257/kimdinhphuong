"use client";

import { motion } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    className?: string;
}

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    className = "",
}: RevealProps) {
    const getVariants = () => {
        switch (direction) {
            case "up":
                return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
            case "down":
                return { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } };
            case "left":
                return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
            case "right":
                return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
            case "none":
            default:
                return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
        }
    };

    return (
        <motion.div
            variants={getVariants()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: delay / 1000, // framer-motion delay is in seconds, while the old one was likely ms or similar. If delay was passed in ms, e.g. 200, it becomes 0.2s
                ease: [0.22, 1, 0.36, 1], // Custom easing for smooth fluid motion
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
