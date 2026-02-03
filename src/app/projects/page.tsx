"use client";

import { useState, useCallback, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LayoutShell from "@/components/LayoutShell";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";
import { projects, ProjectTag, searchProjects } from "@/data/projects";

const ITEMS_PER_PAGE = 6;

function ProjectsContent() {
    const searchParams = useSearchParams();
    const initialSearch = searchParams.get("search") || "";

    const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([]);
    const [searchQuery, setSearchQuery] = useState(initialSearch);
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);


    const filteredProjects = useMemo(() => {
        let result = projects;

        // Filter by search query
        if (searchQuery.trim()) {
            result = searchProjects(searchQuery);
        }

        // Filter by tags
        if (selectedTags.length > 0) {
            result = result.filter((project) =>
                selectedTags.some((tag) => project.tags.includes(tag))
            );
        }

        return result;
    }, [searchQuery, selectedTags]);

    const visibleProjects = useMemo(() => {
        return filteredProjects.slice(0, visibleCount);
    }, [filteredProjects, visibleCount]);

    const hasMore = visibleCount < filteredProjects.length;

    const handleLoadMore = useCallback(() => {
        setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    }, []);

    const handleTagsChange = useCallback((tags: ProjectTag[]) => {
        setSelectedTags(tags);
        setVisibleCount(ITEMS_PER_PAGE);
    }, []);

    const handleSearchChange = useCallback((query: string) => {
        setSearchQuery(query);
        setVisibleCount(ITEMS_PER_PAGE);
    }, []);

    return (
        <>
            {/* Compact Header */}
            <div className="mb-6 space-y-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Projects
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    A curated collection showcasing product design and user-centric problem solving.
                </p>
            </div>

            {/* Filters - Tighter Spacing */}
            <div className="mb-6">
                <ProjectFilters
                    selectedTags={selectedTags}
                    onTagsChange={handleTagsChange}
                    searchQuery={searchQuery}
                    onSearchChange={handleSearchChange}
                />
            </div>

            {/* Results Info - More Compact */}
            <div className="mb-5 flex items-center gap-3">
                <p className="text-xs sm:text-sm font-semibold text-slate-600">
                    <span className="text-slate-900">{visibleProjects.length}</span> of {filteredProjects.length}
                </p>
                <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            {/* Projects Grid - Tighter Gap */}
            {visibleProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
                    {visibleProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
                        <svg
                            className="w-8 h-8 text-slate-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">No projects found</h3>
                    <p className="text-sm text-slate-600 mb-6 max-w-xs mx-auto">
                        Try adjusting your search or filters.
                    </p>
                    <button
                        onClick={() => {
                            setSelectedTags([]);
                            setSearchQuery("");
                        }}
                        className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 hover:shadow-md transition-all duration-200 active:scale-95"
                    >
                        Clear filters
                    </button>
                </div>
            )}

            {/* Load More Button - Simpler */}
            {hasMore && (
                <div className="text-center pt-6 border-t border-slate-100">
                    <button
                        onClick={handleLoadMore}
                        className="group px-6 py-2.5 bg-white border-2 border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow flex items-center gap-2 mx-auto"
                    >
                        Load more
                        <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}

function ProjectsLoading() {
    return (
        <>
            <div className="mb-6 space-y-2">
                <div className="h-8 bg-slate-200 rounded-lg w-48 animate-pulse" />
                <div className="h-5 bg-slate-100 rounded w-80 animate-pulse" />
            </div>

            <div className="mb-6">
                <div className="h-12 bg-slate-100 rounded-xl w-full animate-pulse mb-4" />
                <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-8 bg-slate-100 rounded-lg w-20 animate-pulse" />
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-[4/3] bg-slate-100 rounded-xl animate-pulse" />
                ))}
            </div>
        </>
    );
}

export default function ProjectsPage() {
    return (
        <LayoutShell>
            <div className="max-w-6xl mx-auto py-0 px-0 sm:py-4 sm:px-4 lg:py-6 lg:px-6 lg:pr-6 min-h-screen">
                <div className="bg-white sm:rounded-2xl shadow-sm sm:border border-slate-200 p-5 sm:p-6 lg:p-8">
                    <Suspense fallback={<ProjectsLoading />}>
                        <ProjectsContent />
                    </Suspense>
                </div>
            </div>
        </LayoutShell>
    );
}
