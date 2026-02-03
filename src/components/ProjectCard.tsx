"use client";

import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    showCaseStudyButton?: boolean;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group relative card-hover rounded-2xl bg-white border border-slate-100 overflow-hidden elevation-sm hover:elevation-xl">
            <Link href={`/projects/${project.id}`} className="absolute inset-0 z-10 focus:outline-none" aria-label={`View ${project.title}`} />

            {/* Thumbnail - Larger aspect ratio for product focus */}
            <div className={`aspect-[16/10] w-full overflow-hidden relative ${project.thumbnail ? 'bg-slate-50' : project.thumbnailGradient}`}>
                {project.thumbnail ? (
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Subtle dot pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px', color: 'black' }}></div>
                    </div>
                )}
            </div>

            {/* Content - Clean information hierarchy */}
            <div className="p-6 space-y-4">
                {/* Header */}
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm">
                        <span className="font-medium text-slate-700">{project.role}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="text-slate-500">{project.year}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {project.summary}
                </p>

                {/* Tags - Minimal outlined pills */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-50 rounded-full">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}
