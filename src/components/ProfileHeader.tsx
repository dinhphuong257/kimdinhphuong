"use client";

import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProfileHeaderProps {
    onMessage: () => void;
}

const TAGLINES_VI = ["Web Developer", "Người xây dựng sản phẩm số", "Logistics Enthusiast"];
const TAGLINES_EN = ["Web Developer", "Digital Product Builder", "Logistics Enthusiast"];
const SKILL_BADGES = ["Next.js", "React", "Tailwind", "TypeScript", "Logistics"];

const SOCIAL_LINKS = [
    {
        label: "GitHub",
        href: "https://github.com/kimdinhphuong",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dinhphuongkim/",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/dinhphuongkim250705/",
        icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
];

function TypingText({ texts }: { texts: string[] }) {
    const [displayed, setDisplayed] = useState("");
    const [textIdx, setTextIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[textIdx];
        let timeout: ReturnType<typeof setTimeout>;
        if (!deleting && charIdx < current.length) {
            timeout = setTimeout(() => setCharIdx((c) => c + 1), 60);
        } else if (!deleting && charIdx === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2200);
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => setCharIdx((c) => c - 1), 30);
        } else if (deleting && charIdx === 0) {
            setDeleting(false);
            setTextIdx((i) => (i + 1) % texts.length);
        }
        setDisplayed(current.slice(0, charIdx));
        return () => clearTimeout(timeout);
    }, [charIdx, deleting, textIdx, texts]);

    return (
        <span>
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-indigo-500 ml-0.5 align-middle animate-pulse" />
        </span>
    );
}

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProfileHeader({ onMessage }: ProfileHeaderProps) {
    const { language } = useLanguage();
    const taglines = language === "vi" ? TAGLINES_VI : TAGLINES_EN;

    return (
        <div className="relative overflow-hidden">
            {/* Dot grid */}
            <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

            <div className="relative px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-8 sm:pb-10">
                <motion.div
                    className="max-w-2xl mx-auto flex flex-col items-center text-center"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Avatar */}
                    <motion.div variants={fadeUp} className="relative group cursor-pointer mb-6">
                        {/* Glow halo */}
                        <div className="absolute inset-0 rounded-full bg-indigo-300/0 group-hover:bg-indigo-400/20 blur-3xl scale-125 transition-all duration-700" />
                        {/* Rotating dashed ring */}
                        <div className="absolute -inset-4 rounded-full border border-dashed border-indigo-200/0 group-hover:border-indigo-300/50 transition-all duration-500 animate-spin-slow" />

                        {/* Gradient ring wrapper */}
                        <div className="p-[3px] rounded-full bg-gradient-to-br from-indigo-400 via-indigo-300 to-slate-200 shadow-xl shadow-indigo-100 group-hover:shadow-2xl group-hover:shadow-indigo-200/60 transition-all duration-300 group-hover:scale-[1.04]">
                            <div className="p-[3px] rounded-full bg-white">
                                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden">
                                    <Image
                                        src={profileData.avatar}
                                        alt={profileData.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Verified badge */}
                        <div className="absolute bottom-2 right-2 z-10 bg-white rounded-full p-[3px] shadow-md ring-2 ring-white">
                            <svg className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.74Z" />
                                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2"
                    >
                        {profileData.name}
                    </motion.h1>

                    {/* Typing tagline */}
                    <motion.p variants={fadeUp} className="text-base sm:text-lg font-semibold text-indigo-600 min-h-[1.75rem] mb-4">
                        <TypingText texts={taglines} />
                    </motion.p>

                </motion.div>
            </div>

            {/* Bottom separator */}
            <div className="mx-6 sm:mx-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
    );
}
