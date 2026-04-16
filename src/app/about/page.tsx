import type { Metadata } from "next";
import Image from "next/image";
import LayoutShell from "@/components/LayoutShell";
import { profileData } from "@/data/profile";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Kim Đình Phương's educational background, logistics skills, and work tools.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About | Kim Đình Phương",
        description: "Detailed information about Kim Đình Phương's profile, skills, and growth journey.",
        url: "/about",
        images: ["/opengraph-image"],
    },
};

export default function AboutPage() {
    return (
        <LayoutShell>
            <div className="max-w-4xl mx-auto p-4 lg:p-6 text-gray-900">
                {/* Header */}
                <Reveal direction="down" delay={100}>
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">About Me</h1>
                        <p className="text-gray-500">
                            Learn more about my background, skills, and what drives me as a designer.
                        </p>
                    </header>
                </Reveal>

                {/* Profile section */}
                <Reveal direction="up" delay={200}>
                    <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8 shadow-sm">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Avatar */}
                            <div className="flex-shrink-0 transition-transform duration-500 hover:scale-105">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg relative">
                                    <Image
                                        src={profileData.avatar}
                                        alt={profileData.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 flex flex-col justify-center items-start">
                                <div className="flex items-center gap-1 mb-1">
                                    <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
                                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                        <title>Verified</title>
                                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-lg text-gray-500 mb-6">{profileData.title}</p>
                                
                                {/* Download CV Button */}
                                <a 
                                    href="/Kim-Dinh-Phuong-CV.pdf" 
                                    download="Kim_Dinh_Phuong_Resume.pdf"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-md cursor-pointer"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download My Resume
                                </a>
                            </div>
                        </div>
                    </section>
                </Reveal>

                {/* Biography */}
                <Reveal direction="up" delay={300}>
                    <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Biography</h2>
                        <div className="prose prose-gray max-w-none space-y-4">
                            {profileData.about.map((paragraph, idx) => (
                                <p key={idx} className="text-gray-600 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>
                </Reveal>

                {/* Skills */}
                <Reveal direction="up" delay={400}>
                    <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {profileData.skills.map((skill, index) => (
                                <div
                                    key={skill}
                                    className="px-4 py-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg text-center transition-transform hover:-translate-y-1 hover:shadow-md duration-300"
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <span className="text-sm font-medium text-gray-800">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </Reveal>

                {/* Tools */}
                <Reveal direction="up" delay={500}>
                    <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Tools I Use</h2>
                        <div className="flex flex-wrap gap-3">
                            {profileData.tools.map((tool) => (
                                <span
                                    key={tool}
                                    className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full transition-transform hover:scale-105 hover:bg-blue-600 duration-300"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </section>
                </Reveal>
            </div>
        </LayoutShell>
    );
}
