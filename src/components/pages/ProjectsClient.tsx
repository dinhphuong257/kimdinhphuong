"use client";

import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import { projectsEn, projectsVi } from "@/data/projects";

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

            <div className="space-y-12">
            {projects.map((project, index) => {
                const isMovie = project.id === "rap-phim-chill";
                const isWMS = project.id === "wms-ecofresh";

                return (
                    <Reveal direction="up" delay={index * 200 + 100} key={project.id}>
                        <div className="group relative rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                            
                            {/* Project Thumbnail / Visual */}
                            <div className={`lg:col-span-7 relative aspect-square sm:aspect-video lg:aspect-auto overflow-hidden flex flex-col items-center justify-center p-8 group/poster cursor-pointer border-b lg:border-b-0 lg:border-r border-slate-800 ${isWMS ? 'bg-slate-900' : 'bg-slate-950'}`}>
                                
                                {isMovie && (
                                    <>
                                        {/* Cinematic Poster Background effect */}
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/60 via-slate-950 to-black z-0 group-hover/poster:scale-105 transition-transform duration-1000"></div>
                                        
                                        {/* Film grain/noise pattern overlay */}
                                        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] z-0 mix-blend-overlay pointer-events-none"></div>

                                        {/* Top Gradient light leak */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/3 bg-purple-500/20 blur-[100px] z-0 rounded-full pointer-events-none"></div>
                                        
                                        {/* Poster Content Setup */}
                                        <a href={project.caseStudyUrl!} target="_blank" rel="noopener noreferrer" className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 w-full h-full group-hover/poster:-translate-y-2 transition-transform duration-500">
                                            <div className="flex flex-col items-center space-y-3">
                                                <span className="px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-indigo-300 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-sm uppercase shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                                                    {language === 'vi' ? 'Nền Tảng Độc Quyền' : 'Original Platform'}
                                                </span>
                                                <h3 className="pt-2 text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-indigo-100 to-indigo-400 drop-shadow-[0_0_30px_rgba(79,70,229,0.5)] tracking-tighter leading-none">
                                                    RẠP PHIM<br/>CHILL
                                                </h3>
                                            </div>
                                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full opacity-60"></div>
                                            <p className="text-indigo-200/80 font-bold tracking-[0.15em] text-xs sm:text-sm uppercase flex flex-wrap justify-center gap-3 sm:gap-4 items-center">
                                                <span>{language === 'vi' ? 'Không QC' : 'No Ads'}</span><span className="w-1 h-1 rounded-full bg-indigo-500"></span><span>{language === 'vi' ? 'Chất Lượng 4K' : '4K Quality'}</span><span className="w-1 h-1 rounded-full bg-indigo-500"></span><span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{language === 'vi' ? 'Đang Phát' : 'Live Now'}</span>
                                            </p>
                                        </a>

                                        <div className="absolute bottom-6 left-6 z-10 px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/20 text-white shadow-2xl text-sm font-medium flex items-center gap-2 group-hover/poster:bg-indigo-600/90 transition-colors duration-300">
                                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                            rapphimchill.app
                                        </div>
                                    </>
                                )}

                                {isWMS && (
                                    <>
                                        {/* WMS Tech/Logistics Background effect */}
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/60 via-blue-950 to-slate-950 z-0 group-hover/poster:scale-105 transition-transform duration-1000"></div>
                                        
                                        {/* Grid overlay for tech feel */}
                                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none"></div>

                                        {/* Neon Glow */}
                                        <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-cyan-500/10 blur-[120px] z-0 rounded-full pointer-events-none"></div>
                                        
                                        {/* Poster Content Setup */}
                                        <a href={project.caseStudyUrl!} target="_blank" rel="noopener noreferrer" className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 w-full h-full group-hover/poster:-translate-y-2 transition-transform duration-500">
                                            <div className="flex flex-col items-center space-y-3">
                                                <span className="px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-cyan-300 border border-cyan-500/30 rounded-full bg-cyan-500/10 backdrop-blur-sm uppercase shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                                    {language === 'vi' ? 'Giải Pháp Doanh Nghiệp' : 'Enterprise Logistics'}
                                                </span>
                                                <h3 className="pt-2 text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-blue-400 drop-shadow-[0_0_30px_rgba(56,189,248,0.4)] tracking-tighter leading-none">
                                                    WMS<br/>ECOFRESH
                                                </h3>
                                            </div>
                                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full opacity-60"></div>
                                            <p className="text-cyan-200/80 font-bold tracking-[0.15em] text-xs sm:text-sm uppercase flex flex-wrap justify-center gap-3 sm:gap-4 items-center">
                                                <span>{language === 'vi' ? 'Thời Gian Thực' : 'Real-Time'}</span><span className="w-1 h-1 rounded-full bg-cyan-500"></span><span>{language === 'vi' ? 'Đồng Bộ IoT' : 'IoT Sync'}</span><span className="w-1 h-1 rounded-full bg-cyan-500"></span><span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{language === 'vi' ? 'Định Tuyến Cần Thông Minh' : 'Smart Routing'}</span>
                                            </p>
                                        </a>

                                        <div className="absolute bottom-6 left-6 z-10 px-4 py-2 bg-slate-900/60 backdrop-blur-md rounded-xl border border-cyan-500/20 text-white shadow-2xl text-sm font-medium flex items-center gap-2 group-hover/poster:bg-cyan-600/90 transition-colors duration-300">
                                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                                            logisticsprojects.vercel.app
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Project Info */}
                            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center bg-white border-l border-slate-100">
                                <div className="space-y-6">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg ${isWMS ? 'text-cyan-600 bg-cyan-50' : 'text-indigo-600 bg-indigo-50'}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title & Desc */}
                                    <div>
                                        <h2 className={`text-3xl font-extrabold text-slate-900 mb-4 transition-colors ${isWMS ? 'group-hover:text-cyan-600' : 'group-hover:text-indigo-600'}`}>
                                            {project.title}
                                        </h2>
                                        <p className="text-slate-600 leading-relaxed text-pretty">
                                            {project.summary}
                                        </p>
                                        
                                        {isWMS && (
                                            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                    </svg>
                                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{language === 'vi' ? 'Đăng nhập demo' : 'Demo Login'}</span>
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
                                                    <div>
                                                        <span className="text-slate-500 mr-2">Email:</span>
                                                        <span className="font-semibold text-slate-900">admin@wms.com</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-slate-500 mr-2">{language === 'vi' ? 'Mật khẩu:' : 'Pass:'}</span>
                                                        <span className="font-semibold text-slate-900">123</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Meta */}
                                    <div className="py-6 border-y border-slate-100 flex items-center gap-6">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">{language === 'vi' ? 'Vai trò' : 'Role'}</p>
                                            <p className="text-sm font-bold text-slate-900">{project.role}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">{language === 'vi' ? 'Năm' : 'Year'}</p>
                                            <p className="text-sm font-bold text-slate-900">{project.year}</p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="pt-2">
                                        <a 
                                            href={project.caseStudyUrl!} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm ${isWMS ? 'hover:bg-cyan-600 hover:shadow-cyan-500/25' : 'hover:bg-indigo-600 hover:shadow-indigo-500/25'} hover:-translate-y-1`}
                                        >
                                            <span>{language === 'vi' ? 'Truy Cập Trang Web' : 'Visit Website'}</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
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