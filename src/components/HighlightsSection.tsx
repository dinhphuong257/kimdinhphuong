"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const data = {
    vi: [
        {
            icon: (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            label: "Kỹ Năng",
            title: "Next.js · React · Tailwind",
            sub: "Figma · TypeScript · Node.js",
            gradient: "from-indigo-50 to-white",
            iconBg: "bg-indigo-100",
            border: "border-indigo-100 hover:border-indigo-300",
            dot: "bg-indigo-400",
        },
        {
            icon: (
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            label: "Lĩnh Vực",
            title: "Web · Mobile · SaaS",
            sub: "Logistics · Chuỗi Cung Ứng · WMS",
            gradient: "from-slate-50 to-white",
            iconBg: "bg-slate-100",
            border: "border-slate-100 hover:border-slate-300",
            dot: "bg-slate-400",
        },
    ],
    en: [
        {
            icon: (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            label: "Skills",
            title: "Next.js · React · Tailwind",
            sub: "Figma · TypeScript · Node.js",
            gradient: "from-indigo-50 to-white",
            iconBg: "bg-indigo-100",
            border: "border-indigo-100 hover:border-indigo-300",
            dot: "bg-indigo-400",
        },
        {
            icon: (
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            label: "Focus",
            title: "Web · Mobile · SaaS",
            sub: "Logistics · Supply Chain · WMS",
            gradient: "from-slate-50 to-white",
            iconBg: "bg-slate-100",
            border: "border-slate-100 hover:border-slate-300",
            dot: "bg-slate-400",
        },
    ],
};

export default function HighlightsSection() {
    const { language } = useLanguage();
    const items = language === "vi" ? data.vi : data.en;

    return (
        <section className="px-6 sm:px-10 lg:px-14 py-6 sm:py-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
                <span className="w-1 h-4 rounded-full bg-indigo-500 inline-block" />
                <h2 className="text-xs font-bold text-slate-500 tracking-[0.15em] uppercase">
                    {language === "vi" ? "Tổng Quan" : "Overview"}
                </h2>
                <div className="flex-1 h-px bg-slate-100" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${item.gradient} ${item.border} p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
                    >
                        {/* Background circle decoration */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/60 blur-xl" />

                        <div className="relative flex items-start gap-4">
                            {/* Icon */}
                            <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center text-xl flex-shrink-0 shadow-sm`}>
                                {item.icon}
                            </div>

                            {/* Text */}
                            <div className="min-w-0 pt-0.5">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className={`w-1.5 h-1.5 rounded-full ${item.dot} inline-block`} />
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        {item.label}
                                    </p>
                                </div>
                                <p className="text-sm font-bold text-slate-800 leading-snug mb-1.5">
                                    {item.title}
                                </p>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {item.sub}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
