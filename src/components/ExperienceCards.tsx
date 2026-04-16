"use client";

import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";

export default function ExperienceCards() {
    const featuredProjects = getFeaturedProjects().slice(0, 2);

    return (
        <section className="py-5 border-t border-slate-100" aria-label="Featured projects">
            <div className="px-4 sm:px-6 mb-4">
                <h2 className="text-lg font-bold text-slate-900">Featured projects</h2>
                <p className="text-sm text-slate-500">My two latest projects</p>
            </div>

            <div className="w-full px-4 sm:px-6 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {featuredProjects.map((project) => {
                        const isWMS = project.id === "wms-ecofresh";

                        return (
                        <article
                            key={project.id}
                            className="group w-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-slate-300 transition-all duration-300 overflow-hidden"
                        >
                            <div className={`relative h-44 w-full overflow-hidden flex items-center justify-center p-4 ${isWMS ? "bg-slate-900" : "bg-slate-950"}`}>
                                {isWMS ? (
                                    <>
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/60 via-blue-950 to-slate-950" />
                                        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:18px_18px]" />
                                        <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-cyan-500/10 blur-[90px] rounded-full" />

                                        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
                                            <span className="px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-cyan-300 border border-cyan-500/30 rounded-full bg-cyan-500/10 uppercase">
                                                Enterprise Logistics
                                            </span>
                                            <h3 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-blue-400 tracking-tight leading-none">
                                                WMS<br />ECOFRESH
                                            </h3>
                                            <p className="text-cyan-200/80 font-bold tracking-[0.12em] text-[10px] uppercase flex flex-wrap justify-center gap-2 items-center">
                                                <span>Real-Time</span><span className="w-1 h-1 rounded-full bg-cyan-500"></span><span>IoT Sync</span>
                                            </p>
                                        </div>

                                        <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 bg-slate-900/70 backdrop-blur-md rounded-lg border border-cyan-500/20 text-white text-[10px] font-medium flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                            logisticsprojects.vercel.app
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/60 via-slate-950 to-black" />
                                        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] mix-blend-overlay" />
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-purple-500/20 blur-[80px] rounded-full" />

                                        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
                                            <span className="px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-indigo-300 border border-indigo-500/30 rounded-full bg-indigo-500/10 uppercase">
                                                Original Platform
                                            </span>
                                            <h3 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-indigo-100 to-indigo-400 tracking-tight leading-none">
                                                RAP PHIM<br />CHILL
                                            </h3>
                                            <p className="text-indigo-200/80 font-bold tracking-[0.12em] text-[10px] uppercase flex flex-wrap justify-center gap-2 items-center">
                                                <span>No Ads</span><span className="w-1 h-1 rounded-full bg-indigo-500"></span><span>4K</span>
                                            </p>
                                        </div>

                                        <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/20 text-white text-[10px] font-medium flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                            rapphimchill.pro
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="p-4 sm:p-5 space-y-3.5">
                                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 min-h-[64px]">
                                    {project.summary}
                                </p>



                                <div className="pt-1 flex items-center gap-4">
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                                    >
                                        View details
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                    {project.caseStudyUrl && (
                                        <a
                                            href={project.caseStudyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-800"
                                        >
                                            Visit website
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
