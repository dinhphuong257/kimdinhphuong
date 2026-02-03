import LayoutShell from "@/components/LayoutShell";
import { profileData } from "@/data/profile";
import { experiences } from "@/data/experience";

export default function AboutPage() {
    return (
        <LayoutShell>
            <div className="max-w-4xl mx-auto p-4 lg:p-6">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">About Me</h1>
                    <p className="text-gray-500">
                        Learn more about my background, skills, and what drives me as a designer.
                    </p>
                </header>

                {/* Profile section */}
                <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                                <img
                                    src={profileData.avatar}
                                    alt={profileData.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">{profileData.name}</h2>
                            <p className="text-lg text-gray-500 mb-4">{profileData.title}</p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Location</p>
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={`https://flagcdn.com/w40/${profileData.location.countryCode}.png`}
                                            alt={`${profileData.location.country} flag`}
                                            className="w-5 h-5 rounded-full object-cover shadow-sm"
                                        />
                                        <span className="text-sm font-medium text-gray-900">
                                            {profileData.location.city}, {profileData.location.countryCode.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Email</p>
                                    <a
                                        href={`mailto:${profileData.email}`}
                                        className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                                    >
                                        {profileData.email}
                                    </a>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="flex flex-wrap gap-3">
                                {profileData.socialLinks.map((link) => (
                                    <a
                                        key={link.platform}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        {link.platform}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Biography */}
                <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Biography</h2>
                    <div className="prose prose-gray max-w-none space-y-4">
                        {profileData.about.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {profileData.skills.map((skill) => (
                            <div
                                key={skill}
                                className="px-4 py-3 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg text-center"
                            >
                                <span className="text-sm font-medium text-gray-800">{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tools */}
                <section className="bg-white rounded-xl border border-gray-200 p-8 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Tools I Use</h2>
                    <div className="flex flex-wrap gap-3">
                        {profileData.tools.map((tool) => (
                            <span
                                key={tool}
                                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Career Timeline */}
                <section className="bg-white rounded-xl border border-gray-200 p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Career Timeline</h2>
                    <div className="space-y-0">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative pl-8 pb-8 last:pb-0">
                                {/* Timeline line */}
                                {index !== experiences.length - 1 && (
                                    <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gray-200" />
                                )}

                                {/* Timeline dot */}
                                <div className={`absolute left-0 top-1 w-6 h-6 rounded-full ${exp.logoColor} flex items-center justify-center`}>
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                        <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                                        <span className="text-gray-500">at {exp.company}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-3">
                                        {exp.startDate} – {exp.endDate || "Present"} • {exp.location}
                                    </p>
                                    <p className="text-gray-600 mb-3">{exp.description}</p>

                                    {/* Highlights */}
                                    <ul className="space-y-1">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </LayoutShell>
    );
}
