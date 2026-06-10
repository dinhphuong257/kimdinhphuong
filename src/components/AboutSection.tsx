"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import TimelineSection from "./TimelineSection";
import { useLanguage } from "@/context/LanguageContext";

const infoItems = (language: string) => [
    {
        label: "Location",
        value: `${profileData.location.city}, ${profileData.location.countryCode.toUpperCase()}`,
        href: undefined,
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        extra: (
            <div className="w-4 h-4 rounded-full overflow-hidden shadow-sm flex-shrink-0 relative">
                <Image
                    src={`https://flagcdn.com/w40/${profileData.location.countryCode}.png`}
                    alt="flag"
                    fill
                    className="object-cover"
                />
            </div>
        ),
    },
    {
        label: "Website",
        value: profileData.website.replace("https://", ""),
        href: profileData.website,
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
        ),
    },
    {
        label: "Email",
        value: profileData.email,
        href: `mailto:${profileData.email}`,
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function AboutSection() {
    const [isExpanded, setIsExpanded] = useState(false);
    const { language } = useLanguage();

    const aboutTextEn = profileData.about;
    const aboutTextVi = [
        "Xin chào, mình là Kim Đình Phương, sinh viên năm 3 chuyên ngành Quản lý chuỗi cung ứng và Logistics tại trường Đại học Kỹ thuật Công nghệ Cần Thơ.",
        "Mình có niềm đam mê đặc biệt với việc tối ưu hóa quy trình phân phối và kết hợp công nghệ vào trong kho thuật toán thực tiễn.",
        "Là người luôn tìm kiếm và cải tiến để các dự án hoàn thành tốt và đạt hiệu quả về chi phí chuyên nghiệp nhất.",
    ];

    const currentAbout = language === "vi" ? aboutTextVi : aboutTextEn;
    const visibleParagraphs = isExpanded ? currentAbout : currentAbout.slice(0, 2);
    const info = infoItems(language);

    return (
        <section className="px-6 sm:px-10 lg:px-14 py-6 sm:py-8 border-t border-slate-100" aria-labelledby="about-heading">

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-4 rounded-full bg-indigo-500 inline-block" />
                <h2 id="about-heading" className="text-xs font-bold text-slate-500 tracking-[0.15em] uppercase">
                    {language === "vi" ? "Giới Thiệu" : "About"}
                </h2>
                <div className="flex-1 h-px bg-slate-100" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                {/* Bio — 2 cols */}
                <div className="sm:col-span-2">
                    <div className="bg-slate-50/70 rounded-2xl border border-slate-100 p-5">
                        {/* Label */}
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                            {language === "vi" ? "Hành trình học vấn" : "Academic Background"}
                        </p>

                        {/* Bio text */}
                        <div className={`space-y-3 text-sm text-slate-600 leading-relaxed overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[500px]" : "max-h-[100px] sm:max-h-[150px]"}`}>
                            {visibleParagraphs.map((p, i) => (
                                <p key={i} className={i === 0 ? "font-medium text-slate-700" : ""}>{p}</p>
                            ))}
                        </div>

                        {currentAbout.length > 2 && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                            >
                                {isExpanded
                                    ? (language === "vi" ? "Thu gọn" : "Show less")
                                    : (language === "vi" ? "Xem thêm" : "Read more")}
                                <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Info cards — 1 col */}
                <div className="flex flex-col gap-2.5">
                    {info.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-3 hover:border-indigo-100 hover:shadow-sm transition-all duration-200">
                            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                                {item.icon}
                            </div>
                            <div className="min-w-0">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith("mailto") ? undefined : "_blank"}
                                        rel="noopener noreferrer"
                                        className="text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors truncate block"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-1.5">
                                        {item.extra}
                                        <span className="text-xs font-semibold text-slate-700">{item.value}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <TimelineSection />
        </section>
    );
}
