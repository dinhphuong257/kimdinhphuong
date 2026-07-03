"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import { projectsEn, projectsVi } from "@/data/projects";
import Image from "next/image";

// Mảng projects cần được lấy tuỳ theo ngôn ngữ.
export default function ProjectsClient() {
    const { language } = useLanguage();
    const projects = language === 'vi' ? projectsVi : projectsEn;

    if (!projects.length) return null;

    const getDisplayDomain = (url?: string) => {
        if (!url) return "project.live";
        try {
            const urlObj = new URL(url);
            return urlObj.hostname;
        } catch {
            return url.replace("https://", "").replace("http://", "").split("/")[0];
        }
    };

    const getProjectTheme = (id: string) => {
        if (id === "wms-ecofresh") {
            return {
                glow: "bg-cyan-500",
                accent: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 border-cyan-500/10 dark:border-cyan-400/20",
                button: "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/10 hover:shadow-cyan-500/20",
                hoverText: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
            };
        }
        if (id === "nghien-phim-relax") {
            return {
                glow: "bg-rose-500",
                accent: "text-rose-600 dark:text-rose-400 bg-rose-500/5 border-rose-500/10 dark:border-rose-400/20",
                button: "bg-rose-600 hover:bg-rose-500 shadow-rose-500/10 hover:shadow-rose-500/20",
                hoverText: "group-hover:text-rose-600 dark:group-hover:text-rose-400"
            };
        }
        return {
            glow: "bg-indigo-500",
            accent: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 border-indigo-500/10 dark:border-indigo-500/20",
            button: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/10 hover:shadow-indigo-500/20",
            hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
        };
    };

    return (
        <>
            {/* Header */}
            <Reveal direction="down">
                <div className="mb-12 space-y-4 max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                        {language === 'vi' ? 'Dự án Nổi Bật' : 'Featured Projects'}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {language === 'vi' 
                            ? 'Những dự án tiêu biểu của tôi: từ nền tảng giải trí kỹ thuật số đến hệ thống quản lý logistics chuyên sâu.' 
                            : 'A highlight of my recent work: from digital entertainment platforms to specialized logistics management systems.'}
                    </p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
                const isWMS = project.id === "wms-ecofresh";
                const theme = getProjectTheme(project.id);
                const displayDomain = getDisplayDomain(project.caseStudyUrl);

                return (
                    <Reveal direction="up" delay={index * 150 + 100} key={project.id}>
                        <div className="group relative flex flex-col h-full rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 hover:-translate-y-2">
                            
                            {/* Project Visual - Redesigned as a Premium Browser Mockup */}
                            <div className="relative overflow-hidden flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 shrink-0">
                                {/* Decorative Ambient Background Glow */}
                                <div className={`absolute -right-1/4 -bottom-1/4 w-3/4 h-3/4 blur-[80px] rounded-full opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110 ${theme.glow}`} />

                                {/* Premium Floating Browser Window */}
                                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg border border-slate-200/60 dark:border-slate-800/80 bg-slate-900 flex flex-col group/mockup transform transition-all duration-500">
                                    {/* Browser Header / Bar */}
                                    <div className="h-7 bg-slate-100 dark:bg-slate-800 flex items-center justify-center px-4 relative border-b border-slate-200/50 dark:border-slate-700/50 shrink-0">
                                        {/* Window Controls */}
                                        <div className="absolute left-3 flex gap-1 z-20 pointer-events-none">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                        </div>
                                        
                                        {/* Address Bar */}
                                        <div className="px-4 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200/30 dark:border-slate-700/30 text-[8px] font-bold text-slate-400 dark:text-slate-500 tracking-wider truncate max-w-[150px]">
                                            {displayDomain}
                                        </div>
                                    </div>

                                    {/* Browser Content (Project image scaling on hover) */}
                                    <div className="flex-1 relative overflow-hidden bg-slate-950">
                                        {project.thumbnail ? (
                                            <Image
                                                src={project.thumbnail}
                                                alt={project.title}
                                                fill
                                                placeholder="blur"
                                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4="
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                                                className="object-cover transform group-hover/mockup:scale-105 transition-transform duration-700 ease-out"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-950 to-black flex items-center justify-center">
                                                <span className="text-3xl">💻</span>
                                            </div>
                                        )}

                                        {/* Hover Link Overlay */}
                                        <a 
                                            href={project.caseStudyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/mockup:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10"
                                        >
                                            <div className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 font-bold text-[10px] shadow-xl flex items-center gap-1 transform translate-y-1 group-hover/mockup:translate-y-0 transition-transform duration-300">
                                                <span>{language === 'vi' ? 'Xem dự án' : 'View Live'}</span>
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="flex-1 p-6 flex flex-col bg-white dark:bg-slate-900">
                                <div className="flex-1 space-y-4 flex flex-col">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span 
                                                key={tag} 
                                                className={`px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded-full border ${theme.accent}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title & Desc */}
                                    <div className="flex-1 space-y-2">
                                        <h2 className={`text-xl font-extrabold text-slate-900 dark:text-slate-100 transition-colors ${theme.hoverText}`}>
                                            {project.title}
                                        </h2>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium line-clamp-3">
                                            {project.summary}
                                        </p>
                                    </div>
                                    
                                    {isWMS && (
                                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 shadow-inner">
                                            <div className="flex items-center gap-1.5 mb-1.5">
                                                <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">{language === 'vi' ? 'Đăng nhập demo' : 'Demo Login'}</span>
                                            </div>
                                            <div className="flex flex-col gap-1 text-[11px] font-semibold">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-slate-400 dark:text-slate-500 font-normal">Email:</span>
                                                    <span className="text-slate-800 dark:text-slate-200 flex-1 text-right truncate">admin@wms.com</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-slate-400 dark:text-slate-500 font-normal">{language === 'vi' ? 'Mật khẩu:' : 'Pass:'}</span>
                                                    <span className="text-slate-800 dark:text-slate-200 flex-1 text-right">123</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Meta Role & Year */}
                                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">{language === 'vi' ? 'Vai trò' : 'Role'}</p>
                                        <p className="text-xs font-extrabold text-slate-800 dark:text-slate-200 leading-none">{project.role}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">{language === 'vi' ? 'Năm' : 'Year'}</p>
                                        <p className="text-xs font-extrabold text-slate-800 dark:text-slate-200 leading-none">{project.year}</p>
                                    </div>
                                </div>

                                {/* Visit CTA Button */}
                                <div className="mt-4 pt-2">
                                    <a 
                                        href={project.caseStudyUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md ${theme.button} hover:-translate-y-0.5 active:translate-y-0`}
                                    >
                                        <span>{language === 'vi' ? 'Truy Cập Web' : 'Visit Website'}</span>
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                );
            })}
            </div>
        </>
    );
}