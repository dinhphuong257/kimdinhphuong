import Link from "next/link";
import { notFound } from "next/navigation";
import LayoutShell from "@/components/LayoutShell";
import { getProjectById, projects } from "@/data/projects";

interface ProjectDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

    return (
        <LayoutShell>
            <article className="max-w-4xl mx-auto p-4 lg:p-6">
                {/* Back link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to projects
                </Link>

                {/* Hero section */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-8">
                    {/* Banner */}
                    <div className={`h-64 ${project.thumbnailGradient} relative`}>
                        {project.thumbnail && (
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        )}
                        {!project.thumbnail && (
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
                            Problem
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{project.problem}</p>
                    </section>

                    {/* Process */}
                    <section className="bg-white rounded-xl border border-gray-200 p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                                2
                            </span>
                            Process
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{project.process}</p>
                    </section>

                    {/* Solution */}
                    <section className="bg-white rounded-xl border border-gray-200 p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">
                                3
                            </span>
                            Solution
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{project.solution}</p>
                    </section>

                    {/* Outcome */}
                    <section className="bg-white rounded-xl border border-gray-200 p-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">
                                4
                            </span>
                            Outcome
                        </h2>
                        <p className="text-gray-600 leading-relaxed">{project.outcome}</p>
                    </section>

                    {/* Image gallery placeholder */}
                    {project.images && project.images.length > 0 && (
                        <section className="bg-white rounded-xl border border-gray-200 p-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.images.map((image, index) => (
                                    <div key={index} className="rounded-lg overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Navigation */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            All projects
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            Start a project
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </article>
        </LayoutShell>
    );
}
