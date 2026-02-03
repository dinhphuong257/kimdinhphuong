"use client";

import React, { useState } from "react";
import { experiences } from "@/data/experience";

const CoinbaseLogo = () => (
    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
            <circle cx="12" cy="12" r="5" fill="white" />
        </svg>
    </div>
);

const IntercomLogo = () => (
    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-md flex-shrink-0">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <rect x="4" y="6" width="3" height="12" rx="1.5" fill="currentColor" />
            <rect x="10.5" y="4" width="3" height="16" rx="1.5" fill="currentColor" />
            <rect x="17" y="6" width="3" height="12" rx="1.5" fill="currentColor" />
        </svg>
    </div>
);

const LoomLogo = () => (
    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <circle cx="12" cy="4" r="2" fill="currentColor" />
            <circle cx="12" cy="20" r="2" fill="currentColor" />
            <circle cx="4" cy="12" r="2" fill="currentColor" />
            <circle cx="20" cy="12" r="2" fill="currentColor" />
        </svg>
    </div>
);

const logos: Record<string, React.ReactNode> = {
    coinbase: <CoinbaseLogo />,
    intercom: <IntercomLogo />,
    loom: <LoomLogo />,
};

export default function ExperienceCards() {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    return (
        <section className="py-4" aria-label="Work experience">
            {/* Removed negative margins and used min-w-max for proper scrolling without overflow */}
            <div className="w-full overflow-x-auto pb-4 px-4 sm:px-6 scrollbar-hide scroll-smooth-ios">
                <div className="flex gap-4 min-w-max">
                    {experiences.map((exp, index) => (
                        <article
                            key={exp.id}
                            onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                            className={`flex-shrink-0 w-full max-w-[280px] sm:w-64 p-4 rounded-xl border cursor-pointer transition-all duration-200 touch-feedback ${selectedCard === index
                                ? "border-indigo-500 bg-indigo-50 shadow-lg"
                                : "border-slate-200 bg-white shadow-md hover:shadow-lg hover:border-slate-300"
                                }`}
                            tabIndex={0}
                            role="button"
                            aria-expanded={selectedCard === index}
                        >
                            <div className="flex items-start gap-3">
                                {logos[exp.id] || (
                                    <div className={`w-10 h-10 rounded-full ${exp.logoColor} flex items-center justify-center shadow-md flex-shrink-0`}>
                                        <span className="text-white font-semibold text-sm">
                                            {exp.company.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                <div className="flex-1 min-w-0 space-y-1">
                                    <h3 className="text-sm font-semibold text-gray-900 truncate">{exp.role}</h3>
                                    <p className="text-sm text-slate-500">{exp.company}</p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 mt-3">
                                {exp.startDate} – {exp.endDate || "Present"}
                            </p>

                            {/* Expanded content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${selectedCard === index ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-sm text-slate-600 mb-3 leading-relaxed text-justify line-clamp-4">{exp.description}</p> {/* Added text-justify */}
                                <a
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                                >
                                    Visit website
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
