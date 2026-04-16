import type { Metadata } from "next";
import LayoutShell from "@/components/LayoutShell";
import ContactForm from "@/components/ContactForm";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact Kim Đình Phương to discuss logistics projects, partnerships, or career opportunities.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact | Kim Đình Phương",
        description: "Connect and send a direct message to Kim Đình Phương.",
        url: "/contact",
        images: ["/opengraph-image"],
    },
};

export default function ContactPage() {
    return (
        <LayoutShell>
            <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
                {/* Unified Container */}
                <div className="bg-white rounded-[2rem] shadow-sm ring-1 ring-slate-200/60 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                            
                            {/* Left Column: Info & Connect */}
                            <div className="lg:col-span-5 bg-slate-50 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-slate-200/60">
                                <div>
                                    <header className="mb-10">
                                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Let&apos;s Connect</h1>
                                        <p className="text-slate-600 text-base leading-relaxed pr-2">
                                            I&apos;m always open to discussing product design work or partnership opportunities. Reach out and let&apos;s create something great together.
                                        </p>
                                    </header>

                                    {/* Contact info details */}
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 flex items-center justify-center flex-shrink-0 mt-1">
                                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col justify-center min-w-0 pt-0.5">
                                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Email</p>
                                                <a href={`mailto:${profileData.email}`} className="text-[15px] xl:text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors block whitespace-nowrap tracking-tight">
                                                    {profileData.email}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 flex items-center justify-center flex-shrink-0 mt-1">
                                                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Location</p>
                                                <p className="text-base font-semibold text-slate-900">
                                                    {profileData.location.city}, {profileData.location.country}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Social Links Row */}
                                <div className="mt-12 pt-8 border-t border-slate-200/60">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Follow Me</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {profileData.socialLinks.map((link) => {
                                            let icon = null;
                                            let activeColor = "group-hover:text-indigo-600";
                                            let ringColor = "hover:ring-indigo-300";
                                            
                                            switch (link.platform) {
                                                case "Facebook":
                                                    icon = <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>;
                                                    activeColor = "group-hover:text-[#1877F2]";
                                                    ringColor = "hover:ring-[#1877F2]/40";
                                                    break;
                                                case "LinkedIn":
                                                    icon = <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
                                                    activeColor = "group-hover:text-[#0A66C2]";
                                                    ringColor = "hover:ring-[#0A66C2]/40";
                                                    break;
                                                case "Instagram":
                                                    icon = <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
                                                    activeColor = "group-hover:text-[#E4405F]";
                                                    ringColor = "hover:ring-[#E4405F]/40";
                                                    break;
                                                case "GitHub":
                                                    icon = <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>;
                                                    activeColor = "group-hover:text-[#111827]";
                                                    ringColor = "hover:ring-[#111827]/40";
                                                    break;
                                                case "TikTok":
                                                    icon = <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>;
                                                    activeColor = "group-hover:text-black";
                                                    ringColor = "hover:ring-black/40";
                                                    break;
                                            }

                                            return (
                                                <a
                                                    key={link.platform}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`px-4 py-2.5 bg-white rounded-2xl shadow-sm ring-1 ring-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group ${ringColor}`}
                                                >
                                                    <span className={`text-slate-400 transition-colors duration-300 ${activeColor}`}>
                                                        {icon}
                                                    </span>
                                                    <span className={`text-sm font-semibold text-slate-600 transition-colors duration-300 ${activeColor}`}>
                                                        {link.platform}
                                                    </span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Contact Form */}
                            <div className="lg:col-span-7 p-8 sm:p-12">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
                                    Send a Message
                                </h2>
                                <ContactForm />
                                
                                {/* Response Time Badge */}
                                <div className="mt-8 flex items-center gap-3 text-slate-500 bg-slate-50 p-4 rounded-2xl ring-1 ring-slate-200/50">
                                    <svg className="w-5 h-5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm font-medium">I usually respond within 24-48 hours.</span>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </LayoutShell>
    );
}
