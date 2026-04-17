"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ProjectDetailClientProps {
    id: string;
}

export default function ProjectDetailClient({ id }: ProjectDetailClientProps) {
    const { language } = useLanguage();
    const project = getProjectById(id, language);

    if (!project) return null;

    const creativeWorkJsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: `https://kimdinhphuong.dev/projects/${project.id}`,
        image: project.thumbnail || "https://kimdinhphuong.dev/opengraph-image",
        datePublished: `${project.year}-01-01`,
        creator: {
            "@type": "Person",
            name: "Kim Đình Phương",
        },
        keywords: project.tags.join(", "),
    };

    return (
        <article className="max-w-4xl mx-auto p-4 lg:p-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
            />
            {/* Back link */}
            <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {language === 'vi' ? 'Trở về dự án' : 'Back to projects'}
            </Link>

            {/* Hero section */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
                {/* Banner */}
                <div className={`h-64 ${project.thumbnailGradient} relative`}>
                    {project.thumbnail ? (
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-cover"
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

            {/* Content sections */}
            <div className="space-y-8">
                {/* Problem */}
                <section className="bg-white rounded-xl border border-gray-200 p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                            1
                        </span>
                        {language === 'vi' ? 'Vấn Đề' : 'Problem'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{project.problem}</p>
                </section>

                {/* Process */}
                <section className="bg-white rounded-xl border border-gray-200 p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                            2
                        </span>
                        {language === 'vi' ? 'Quá Trình' : 'Process'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{project.process}</p>
                </section>

                {/* Solution */}
                <section className="bg-white rounded-xl border border-gray-200 p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
                            3
                        </span>
                        {language === 'vi' ? 'Giải Pháp' : 'Solution'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                </section>

                {/* Outcome */}
                <section className="bg-white rounded-xl border border-gray-200 p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                            4
                        </span>
                        {language === 'vi' ? 'Kết Quả' : 'Outcome'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{project.outcome}</p>
                    
                    {/* Recharts Data Visualization block for WMS EcoFresh or others */}
                    {project.id === "wms-ecofresh" && (
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-slate-800 mb-4">
                                {language === 'vi' ? 'Hiệu suất kho hàng (Trước vs Sau khi triển khai WMS)' : 'Warehouse Performance (Before vs After WMS)'}
                            </h3>
                            <div className="h-72 w-full bg-slate-50 rounded-xl p-4 border border-slate-100">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={[
                                            {
                                                name: language === 'vi' ? 'Thời gian nhận (giờ)' : 'Receiving Time (hrs)',
                                                Before: 4.5,
                                                After: 1.2,
                                            },
                                            {
                                                name: language === 'vi' ? 'Lỗi tồn kho (%)' : 'Inventory Error (%)',
                                                Before: 8.0,
                                                After: 0.5,
                                            },
                                            {
                                                name: language === 'vi' ? 'Thời gian nhặt (phút/đơn)' : 'Picking Time (min/order)',
                                                Before: 15,
                                                After: 4,
                                            },
                                        ]}
                                        margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                                        <Tooltip 
                                            cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }}
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                        />
                                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} iconType="circle" />
                                        <Bar dataKey="Before" name={language === 'vi' ? 'Trước khi áp dụng' : 'Before'} fill="#cbd5e1" radius={[4, 4, 4, 4]} barSize={32} />
                                        <Bar dataKey="After" name={language === 'vi' ? 'Sau khi áp dụng' : 'After'} fill="#4f46e5" radius={[4, 4, 4, 4]} barSize={32} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    )}
                </section>

                {/* Image gallery */}
                {project.images && project.images.length > 0 && (
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
                )}

                {/* External links */}
                {project.caseStudyUrl && (
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
                )}
            </div>
        </article>
    );
}