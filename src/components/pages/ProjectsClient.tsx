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

    return (
        <>
            {/* Header */}
            <Reveal direction="down">
                <div className="mb-12 space-y-4 max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {language === 'vi' ? 'Dự án Nổi Bật' : 'Featured Projects'}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                        {language === 'vi' 
                            ? 'Những dự án tiêu biểu của tôi: từ nền tảng giải trí kỹ thuật số đến hệ thống quản lý logistics chuyên sâu.' 
                            : 'A highlight of my recent work: from digital entertainment platforms to specialized logistics management systems.'}
                    </p>
                </div>
            </Reveal>

            <div className="space-y-16">
            {projects.map((project, index) => {
                const isMovie = project.id === "rap-phim-chill";
                const isWMS = project.id === "wms-ecofresh";

                return (
                    <Reveal direction="up" delay={index * 150 + 100} key={project.id}>
                        <div className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                                
                                {/* Project Visual - Redesigned as a Premium Browser Mockup */}
                                <div className="lg:col-span-7 relative overflow-hidden flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-slate-50 dark:bg-slate-950 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/80">
                                    {/* Decorative Ambient Background Glow */}
                                    <div className={`absolute -right-1/4 -bottom-1/4 w-3/4 h-3/4 blur-[100px] rounded-full opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110 ${
                                        isWMS ? "bg-cyan-500" : "bg-indigo-500"
                                    }`} />

                                    {/* Premium Floating Browser Window */}
                                    <div className="relative w-full aspect-[16/10] sm:aspect-video lg:aspect-auto lg:h-[340px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-900 flex flex-col group/mockup transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-500">
                                        {/* Browser Header / Bar */}
                                        <div className="h-8 bg-slate-100 dark:bg-slate-800 flex items-center justify-center px-4 relative border-b border-slate-200/50 dark:border-slate-700/50 shrink-0">
                                            {/* Window Controls */}
                                            <div className="absolute left-3.5 flex gap-1 z-20 pointer-events-none">
                                                <span className="w-2 h-2 rounded-full bg-rose-400" />
                                                <span className="w-2 h-2 rounded-full bg-amber-400" />
                                                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                            </div>
                                            
                                            {/* Address Bar */}
                                            <div className="px-6 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200/30 dark:border-slate-700/30 text-[9px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                                                {isMovie ? "rapphimchill.app" : "logisticsprojects.vercel.app"}
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
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
                                                    className="object-cover transform group-hover/mockup:scale-105 transition-transform duration-700 ease-out"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-950 to-black flex items-center justify-center">
                                                    <span className="text-4xl">💻</span>
                                                </div>
                                            )}

                                            {/* Hover Link Overlay */}
                                            <a 
                                                href={project.caseStudyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/mockup:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10"
                                            >
                                                <div className="px-5 py-2.5 rounded-xl bg-white/95 text-slate-900 font-bold text-xs shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover/mockup:translate-y-0 transition-transform duration-300">
                                                    <span>{language === 'vi' ? 'Xem dự án trực tiếp' : 'View Live Project'}</span>
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center bg-white dark:bg-slate-900">
                                    <div className="space-y-6">
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span 
                                                    key={tag} 
                                                    className={`px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full border ${
                                                        isWMS 
                                                            ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 border-cyan-500/10' 
                                                            : 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 border-indigo-500/10'
                                                    }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Title & Desc */}
                                        <div>
                                            <h2 className={`text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-3.5 transition-colors ${
                                                isWMS ? 'group-hover:text-cyan-600' : 'group-hover:text-indigo-600'
                                            }`}>
                                                {project.title}
                                            </h2>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed text-pretty font-medium">
                                                {project.summary}
                                            </p>
                                            
                                            {isWMS && (
                                                <div className="mt-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 shadow-inner">
                                                    <div className="flex items-center gap-2 mb-2.5">
                                                        <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                        </svg>
                                                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">{language === 'vi' ? 'Đăng nhập demo' : 'Demo Login'}</span>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs font-semibold">
                                                        <div className="flex items-center">
                                                            <span className="text-slate-400 dark:text-slate-500 mr-1.5 font-normal">Email:</span>
                                                            <span className="text-slate-800 dark:text-slate-200">admin@wms.com</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span className="text-slate-400 dark:text-slate-500 mr-1.5 font-normal">{language === 'vi' ? 'Mật khẩu:' : 'Pass:'}</span>
                                                            <span className="text-slate-800 dark:text-slate-200">123</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Meta Role & Year */}
                                        <div className="py-5 border-y border-slate-100 dark:border-slate-800/60 flex items-center gap-8">
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{language === 'vi' ? 'Vai trò' : 'Role'}</p>
                                                <p className="text-xs font-extrabold text-slate-800 dark:text-slate-200">{project.role}</p>
                                            </div>
                                            <div className="w-px h-6 bg-slate-100 dark:bg-slate-800" />
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">{language === 'vi' ? 'Năm' : 'Year'}</p>
                                                <p className="text-xs font-extrabold text-slate-800 dark:text-slate-200">{project.year}</p>
                                            </div>
                                        </div>

                                        {/* Visit CTA Button */}
                                        <div className="pt-2">
                                            <a 
                                                href={project.caseStudyUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md ${
                                                    isWMS 
                                                        ? 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/10 hover:shadow-cyan-500/20' 
                                                        : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/10 hover:shadow-indigo-500/20'
                                                } hover:-translate-y-0.5 active:translate-y-0`}
                                            >
                                                <span>{language === 'vi' ? 'Truy Cập Trang Web' : 'Visit Website'}</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
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