"use client";

import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";

interface ProfileHeaderProps {
    onMessage: () => void;
}

export default function ProfileHeader({ onMessage }: ProfileHeaderProps) {
    const { language } = useLanguage();

    return (
        <div className="relative">
            {/* Compact Hero Section */}
            <div className="relative px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8">

                {/* Transparent Container since it's already inside an article card */}
                <div className="p-6 sm:p-8 lg:p-10 max-w-3xl mx-auto text-center">

                    {/* Avatar - Smaller, More Refined */}
                    <div className="flex justify-center mb-4">
                        <div className="relative group">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-1 shadow-lg ring-1 ring-slate-100 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 relative">
                                    <Image
                                        src={profileData.avatar}
                                        alt={profileData.name}
                                        fill
                                        className="object-cover saturate-[0.85]"
                                    />
                                </div>
                            </div>

                            {/* Verified Badge - Refined */}
                            <div className="absolute bottom-1 right-1 z-10" title="Verified Professional">
                                <div className="bg-white rounded-full p-0.5 shadow-md ring-2 ring-white">
                                    <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.74Z" />
                                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Name and Title - Tighter Spacing, Bolder */}
                    <div className="text-center space-y-1.5 mb-4">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-none text-balance">
                            {profileData.name}
                        </h1>
                        <p className="text-base sm:text-lg text-indigo-600 font-semibold text-balance">
                            {language === 'vi' ? "Sinh viên ngành Logistics năm 3" : profileData.title}
                        </p>
                        {/* Value Proposition */}
                        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto text-balance leading-relaxed pt-1">
                            {language === 'vi' ? "Đam mê tối ưu hóa chuỗi cung ứng và kiến tạo các giải pháp logistics hiệu quả." : "Passionate about optimizing supply chains and creating efficient logistics solutions."}
                        </p>
                    </div>

                    {/* Quick Stats - More Compact */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-5 text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 text-slate-600">
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="font-semibold">{language === 'vi' ? "Sinh viên năm 3" : "3rd Year Student"}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-300" />
                        <div className="flex items-center gap-1.5 text-slate-600">
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            <span className="font-semibold">{language === 'vi' ? "Dự án học thuật" : "Academic Projects"}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-300" />
                        <div className="flex items-center gap-1.5 text-slate-600">
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-semibold">{profileData.location.city}</span>
                        </div>
                    </div>

                    {/* Action Buttons - Prominent CTAs */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/projects"
                            className="group h-9 sm:h-11 px-4 sm:px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm sm:text-base font-semibold shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
                        >
                            <span>{language === 'vi' ? "Xem Dự Án" : "View Projects"}</span>
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <button
                            onClick={onMessage}
                            className="group h-9 sm:h-11 px-4 sm:px-6 bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-indigo-300 rounded-xl text-sm sm:text-base font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4 text-slate-500 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>{language === 'vi' ? "Liên hệ" : "Contact Me"}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
