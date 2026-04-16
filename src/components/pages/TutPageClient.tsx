"use client";

import { useState, useMemo } from "react";
import { tutorials, getTutorialsByCategory, searchTutorials, tutorialCategories } from "@/data/tutorials";
import TutCard from "@/components/TutCard";
import LayoutShell from "@/components/LayoutShell";

export default function TutPageClient() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const hasTutorials = tutorials.length > 0;
    const hasActiveFilters = activeCategory !== "All" || searchQuery.trim().length > 0;

    const filteredTutorials = useMemo(() => {
        let results = tutorials;

        if (activeCategory !== "All") {
            results = getTutorialsByCategory(activeCategory);
        }

        if (searchQuery.trim()) {
            const searchResults = searchTutorials(searchQuery);
            results = results.filter(tutorial =>
                searchResults.some(sr => sr.id === tutorial.id)
            );
        }

        return results;
    }, [activeCategory, searchQuery]);

    return (
        <LayoutShell>
            <div className="max-w-6xl mx-auto py-0 px-0 sm:py-4 sm:px-4 lg:py-6 lg:px-6 lg:pr-6 min-h-screen">
                <div className="bg-white sm:rounded-2xl shadow-sm sm:border border-slate-200 p-5 sm:p-6 lg:p-8">
                    <div className="mb-6 space-y-2">
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                            Tutorials & Guides
                        </h1>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Learn from my experience in logistics and web development. Free tutorials, guides, and insights.
                        </p>
                    </div>

                    {hasTutorials && (
                        <div className="mb-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg
                                        className="h-5 w-5 text-slate-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search tutorials..."
                                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                                />
                            </div>
                        </div>
                    )}

                    {hasTutorials && (
                        <div className="mb-6 flex flex-wrap gap-2">
                            {tutorialCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${activeCategory === category
                                            ? "bg-slate-900 text-white shadow-md"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}

                    {hasTutorials && (
                        <div className="mb-5 flex items-center gap-3">
                            <p className="text-xs sm:text-sm font-semibold text-slate-600">
                                <span className="text-slate-900">{filteredTutorials.length}</span> {filteredTutorials.length === 1 ? "tutorial" : "tutorials"}
                            </p>
                            <div className="h-px bg-slate-200 flex-1"></div>
                        </div>
                    )}

                    {filteredTutorials.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                            {filteredTutorials.map((tutorial, index) => (
                                <div
                                    key={tutorial.id}
                                    className="animate-fade-in-up"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <TutCard tutorial={tutorial} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
                                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">No tutorials found</h3>
                            <p className="text-sm text-slate-600 mb-6 max-w-xs mx-auto">
                                No content available yet.
                            </p>
                            {hasTutorials && hasActiveFilters && (
                                <button
                                    onClick={() => {
                                        setActiveCategory("All");
                                        setSearchQuery("");
                                    }}
                                    className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 hover:shadow-md transition-all duration-200 active:scale-95"
                                >
                                    Clear filters
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </LayoutShell>
    );
}
