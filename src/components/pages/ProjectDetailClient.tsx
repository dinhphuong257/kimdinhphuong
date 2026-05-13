"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";
import WMSPerformanceChart from "@/components/WMSPerformanceChart";
import ProjectChart from "@/components/ProjectChart";

interface ProjectDetailClientProps {
    id: string;
}

export default function ProjectDetailClient({ id }: ProjectDetailClientProps) {
    const { language } = useLanguage();
    const project = getProjectById(id, language);

    if (!project) return null;

    return (
        <article className="max-w-4xl mx-auto p-4 lg:p-6">
            {/* Back link */}
            <Reveal direction="down" delay={100}>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {language === 'vi' ? 'Trở về dự án' : 'Back to projects'}
                </Link>
            </Reveal>

            {/* Hero section */}
            <Reveal direction="up" delay={200}>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
                    {/* Banner */}
                    <div className={`h-64 ${project.thumbnailGradient} relative`}>
                        {project.thumbnail ? (
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover"
                                style={{ viewTransitionName: `project-image-${project.id}` }}
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                <div className="grid grid-cols-4 gap-3 p-8">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="w-16 h-12 bg-gray-400/30 rounded" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Project info */}
                    <div className="p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
                                <p className="text-gray-500">
                                    {project.role} • {project.year}
                                </p>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-lg text-gray-600">{project.summary}</p>
                    </div>
                </div>
            </Reveal>

            {/* Content sections */}
            <div className="space-y-8">
                {/* Problem */}
                <Reveal direction="up" delay={150}>
                    <section className="bg-white rounded-xl border border-gray-200 p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                                1
                            </span>
                            {language === 'vi' ? 'Vấn Đề' : 'Problem'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{project.problem}</p>
                    </section>
                </Reveal>

                {/* Process */}
                <Reveal direction="up" delay={200}>
                    <section className="bg-white rounded-xl border border-gray-200 p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                                2
                            </span>
                            {language === 'vi' ? 'Quá Trình' : 'Process'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{project.process}</p>
                    </section>
                </Reveal>

                {/* Solution */}
                <Reveal direction="up" delay={250}>
                    <section className="bg-white rounded-xl border border-gray-200 p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
                                3
                            </span>
                            {language === 'vi' ? 'Giải Pháp' : 'Solution'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                    </section>
                </Reveal>

                {/* Outcome */}
                <Reveal direction="up" delay={300}>
                    <section className="bg-white rounded-xl border border-gray-200 p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                                4
                            </span>
                            {language === 'vi' ? 'Kết Quả' : 'Outcome'}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">{project.outcome}</p>
                        
                        {project.results && project.results.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {project.results.map((result, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <div className="flex items-baseline justify-between">
                                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-tight">{result.label}</h3>
                                            <span className="text-2xl font-black text-indigo-600">{result.value}</span>
                                        </div>
                                        {result.chartData && (
                                            <ProjectChart data={result.chartData} label={language === 'vi' ? 'Phân tích' : 'Analysis'} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {project.id === "wms-ecofresh" && !project.results && (
                            <WMSPerformanceChart language={language} />
                        )}
                    </section>
                </Reveal>

                {/* Image gallery */}
                {project.images && project.images.length > 0 && (
                    <Reveal direction="up" delay={350}>
                        <section className="bg-white rounded-xl border border-gray-200 p-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">{language === 'vi' ? 'Thư Viện Ảnh' : 'Gallery'}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.images.map((image, idx) => (
                                    <div key={idx} className="rounded-lg overflow-hidden h-64 relative">
                                        <Image
                                            src={image}
                                            alt={`${project.title} gallery image ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </Reveal>
                )}

                {/* External links */}
                {project.caseStudyUrl && (
                    <Reveal direction="up" delay={400}>
                        <div className="flex justify-center mt-12 mb-8">
                            <a
                                href={project.caseStudyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                {language === 'vi' ? 'Xem dự án thực tế' : 'Visit project website'}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </Reveal>
                )}
            </div>
        </article>
    );
}