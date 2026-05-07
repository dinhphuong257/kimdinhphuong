"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const highlightsEn = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        label: "Core Skills",
        value: "UI/UX • Product Design",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
        label: "Tools",
        value: "Figma • React • Tailwind",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        label: "Focus",
        value: "Web • Mobile • SaaS",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        label: "Certified",
        value: "UX Specialist",
    },
];

const highlightsVi = [
    { ...highlightsEn[0], label: "Kỹ Năng", value: "Logistics • Quản Lý Chuỗi Cung Ứng" },
    { ...highlightsEn[1], label: "Công Cụ", value: "Next.js • React • Tailwind" },
    { ...highlightsEn[2], label: "Lĩnh Vực", value: "Phát Triển Web • WMS" },
    { ...highlightsEn[3], label: "Chứng Chỉ", value: "Chuyên viên quản trị" },
];

export default function HighlightsSection() {
    const { language } = useLanguage();
    const highlights = language === 'vi' ? highlightsVi : highlightsEn;

    return (
        <section className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-4">
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5">{language === 'vi' ? 'Tổng Quan' : 'Quick Overview'}</h2>
                    <p className="text-xs sm:text-sm text-slate-600">{language === 'vi' ? 'Các lĩnh vực chuyên môn chính' : 'Core capabilities and focus areas'}</p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-slate-50 hover:bg-white border border-slate-200 hover:border-indigo-200 rounded-xl p-3 sm:p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                        >
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 group-hover:border-indigo-300 flex items-center justify-center text-slate-600 group-hover:text-indigo-600 transition-colors shadow-sm">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-0.5">
                                        {item.label}
                                    </p>
                                    <p className="text-sm font-semibold text-slate-900 leading-tight">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
