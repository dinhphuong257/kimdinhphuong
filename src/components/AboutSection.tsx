"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";

export default function AboutSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    const visibleParagraphs = isExpanded ? profileData.about : profileData.about.slice(0, 2);

    return (
        <section className="px-4 sm:px-6 py-4 sm:py-6 border-t border-slate-100" aria-labelledby="experience-heading">
            {/* Section header */}
            <div className="mb-4">
                <h2 id="experience-heading" className="text-base font-semibold text-gray-900">
                    Academic Background
                </h2>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    Currently studying Logistics and Supply Chain Management.
                </p>
            </div>

            {/* Mobile: Single column, Desktop: Three columns (2 for bio, 1 for details) */}
            <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:gap-10">
                {/* About me - Spans 2 columns */}
                <div className="sm:col-span-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">About me</h3>
                    <div className={`text-sm text-slate-600 leading-relaxed space-y-3 max-w-none text-justify transition-all duration-500 overflow-hidden ${isExpanded ? "max-h-[500px]" : "max-h-[120px] sm:max-h-[240px]"}`}>
                        {visibleParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    {/* Show read more if more than 2 paragraphs */}
                    {profileData.about.length > 2 && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-sm font-semibold text-gray-900 mt-3 hover:text-indigo-600 flex items-center gap-1 transition-colors"
                        >
                            {isExpanded ? "Show less" : "Read more"}
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Details - 1 column on mobile, 1 column on desktop */}
                <div className="space-y-3 sm:space-y-4 sm:col-span-1 border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100">
                    {/* Location */}
                    <div className="flex items-center justify-between sm:block py-2 sm:py-0 border-b border-slate-100 sm:border-0 sm:pb-3">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide sm:mb-1.5">Location</p>
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full overflow-hidden shadow-sm flex-shrink-0 relative">
                                <Image
                                    src={`https://flagcdn.com/w40/${profileData.location.countryCode}.png`}
                                    alt={`${profileData.location.country} flag`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-900">
                                {profileData.location.city}, {profileData.location.countryCode.toUpperCase()}
                            </span>
                        </div>
                    </div>

                    {/* Website */}
                    <div className="flex items-center justify-between sm:block py-2 sm:py-0 border-b border-slate-100 sm:border-0 sm:pb-3">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide sm:mb-1.5">Website</p>
                        <a
                            href={profileData.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-900 hover:text-indigo-600 inline-flex items-center gap-1 transition-colors"
                        >
                            {profileData.website.replace('https://', '')}
                            <svg className="w-3 h-3 flex-shrink-0 text-slate-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    {/* Portfolio */}
                    <div className="flex items-center justify-between sm:block py-2 sm:py-0 border-b border-slate-100 sm:border-0 sm:pb-3">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide sm:mb-1.5">Portfolio</p>
                        <a
                            href={profileData.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-900 hover:text-indigo-600 inline-flex items-center gap-1 transition-colors"
                        >
                            {profileData.portfolio}
                            <svg className="w-3 h-3 flex-shrink-0 text-slate-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between sm:block py-2 sm:py-0">
                        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide sm:mb-1.5">Email</p>
                        <a
                            href={`mailto:${profileData.email}`}
                            className="text-sm font-medium text-gray-900 hover:text-indigo-600 inline-flex items-center gap-1 transition-colors truncate max-w-[200px]"
                        >
                            {profileData.email}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
