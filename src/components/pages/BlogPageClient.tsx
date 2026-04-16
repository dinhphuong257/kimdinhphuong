"use client";

import { useState } from "react";
import LayoutShell from "@/components/LayoutShell";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/posts";

export default function BlogPageClient() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const hasPosts = BLOG_POSTS.length > 0;

    const filteredPosts = selectedCategory === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === selectedCategory);

    const featuredPost = selectedCategory === "All" ? filteredPosts[0] : null;
    const gridPosts = selectedCategory === "All" ? filteredPosts.slice(1) : filteredPosts;

    return (
        <LayoutShell>
            <div className="max-w-6xl mx-auto py-0 px-0 sm:py-4 sm:px-4 lg:py-6 lg:px-6 lg:pr-6 min-h-screen">
                <div className="bg-white sm:rounded-2xl shadow-sm sm:border border-slate-200 p-5 sm:p-6 lg:p-8">
                    <div className="mb-6 space-y-2">
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                            Blog
                        </h1>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Sharing experiences, design processes, and thoughts on product design.
                        </p>
                    </div>

                    {hasPosts && (
                        <div className="mb-6 flex flex-wrap gap-2">
                            {BLOG_CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${selectedCategory === category
                                        ? "bg-slate-900 text-white shadow-md"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="space-y-8">
                        {featuredPost && (
                            <div className="mb-8">
                                <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">Featured Story</h2>
                                <BlogCard post={featuredPost} featured={true} />
                            </div>
                        )}

                        {gridPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                                {gridPosts.map((post, index) => (
                                    <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                                        <BlogCard post={post} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
                                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">No posts found</h3>
                                <p className="text-sm text-slate-600">
                                    No content available yet.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </LayoutShell>
    );
}
