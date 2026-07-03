"use client";

import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceCards() {
    const { language } = useLanguage();
    const featuredProjects = getFeaturedProjects(language).slice(0, 3);

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
                button: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300",
                hoverText: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
            };
        }
        if (id === "nghien-phim-relax") {
            return {
                glow: "bg-rose-500",
                accent: "text-rose-600 dark:text-rose-400 bg-rose-500/5 border-rose-500/10 dark:border-rose-400/20",
                button: "text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300",
                hoverText: "group-hover:text-rose-600 dark:group-hover:text-rose-400"
            };
        }
        if (id === "ez-tool") {
            return {
                glow: "bg-emerald-500",
                accent: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 border-emerald-500/10 dark:border-emerald-400/20",
                button: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300",
                hoverText: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
            };
        }
        if (id === "ez-study") {
            return {
                glow: "bg-amber-500",
                accent: "text-amber-600 dark:text-amber-400 bg-amber-500/5 border-amber-500/10 dark:border-amber-400/20",
                button: "text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300",
                hoverText: "group-hover:text-amber-600 dark:group-hover:text-amber-400"
            };
        }
        return {
            glow: "bg-indigo-500",
            accent: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 border-indigo-500/10 dark:border-indigo-500/20",
            button: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300",
            hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
        };
    };

    return (
        <section className="py-8 border-t border-slate-100 dark:border-slate-800/80" aria-label={language === 'vi' ? "Dự án nổi bật" : "Featured projects"}>
            <div className="px-4 sm:px-6 mb-6">
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">{language === 'vi' ? 'Các dự án nổi bật' : 'Featured projects'}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">{language === 'vi' ? 'Ba dự án mới nhất của tôi' : 'My three latest projects'}</p>
            </div>

            <div className="w-full px-4 sm:px-6 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => {
                        const theme = getProjectTheme(project.id);
                        const displayDomain = getDisplayDomain(project.caseStudyUrl);

                        return (
                        <article
                            key={project.id}
                            className="group flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/2 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            {/* Browser Mockup Visual Header */}
                            <div className="relative h-40 w-full overflow-hidden flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80 shrink-0">
                                {/* Decorative Ambient Glow */}
                                <div className={`absolute -right-1/4 -bottom-1/4 w-3/4 h-3/4 blur-[60px] rounded-full opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110 ${theme.glow}`} />

                                {/* Mini Browser Window */}
                                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-md border border-slate-200/60 dark:border-slate-800/80 bg-slate-900 flex flex-col group/mockup">
                                    {/* Browser Bar */}
                                    <div className="h-6 bg-slate-100 dark:bg-slate-800 flex items-center justify-center px-3 relative border-b border-slate-200/50 dark:border-slate-700/50 shrink-0">
                                        {/* Window Dots */}
                                        <div className="absolute left-2.5 flex gap-1 z-20 pointer-events-none">
                                            <span className="w-1 h-1 rounded-full bg-rose-400" />
                                            <span className="w-1 h-1 rounded-full bg-amber-400" />
                                            <span className="w-1 h-1 rounded-full bg-emerald-400" />
                                        </div>
                                        
                                        {/* Address Domain */}
                                        <div className="px-3 py-0.2 rounded bg-white dark:bg-slate-900 border border-slate-200/30 dark:border-slate-700/30 text-[7px] font-bold text-slate-400 dark:text-slate-500 tracking-wider truncate max-w-[120px]">
                                            {displayDomain}
                                        </div>
                                    </div>

                                    {/* Project Image */}
                                    <div className="flex-1 relative overflow-hidden bg-slate-950">
                                        {project.thumbnail ? (
                                            <Image
                                                src={project.thumbnail}
                                                alt={project.title}
                                                fill
                                                placeholder="blur"
                                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4="
                                                sizes="(max-width: 640px) 100vw, 300px"
                                                className="object-cover transform group-hover/mockup:scale-105 transition-transform duration-700 ease-out"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-950 to-black flex items-center justify-center">
                                                <span className="text-2xl">💻</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 p-5 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <h3 className={`text-base font-extrabold text-slate-900 dark:text-slate-100 transition-colors ${theme.hoverText}`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 min-h-[54px] font-medium">
                                        {project.summary}
                                    </p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                                    >
                                        {language === 'vi' ? 'Xem chi tiết' : 'View details'}
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                    {project.caseStudyUrl && (
                                        <a
                                            href={project.caseStudyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-1 text-xs font-bold ${theme.button}`}
                                        >
                                            {language === 'vi' ? 'Truy cập trang' : 'Visit website'}
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
