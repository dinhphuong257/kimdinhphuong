import LayoutShell from "@/components/LayoutShell";
import ContactForm from "@/components/ContactForm";
import { profileData } from "@/data/profile";

export default function ContactPage() {
    return (
        <LayoutShell>
            <div className="max-w-4xl mx-auto p-4 lg:p-6">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h1>
                    <p className="text-gray-500">
                        Have a project in mind? Let&apos;s discuss how we can work together.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl border border-gray-200 p-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h2>
                            <ContactForm />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Contact info */}
                        <div className="bg-white rounded-xl border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Email</p>
                                    <a
                                        href={`mailto:${profileData.email}`}
                                        className="text-sm font-medium text-gray-900 hover:text-blue-600 flex items-center gap-2 transition-colors"
                                    >
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {profileData.email}
                                    </a>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Location</p>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-900">
                                            {profileData.location.city}, {profileData.location.country}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Website</p>
                                    <a
                                        href={profileData.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-gray-900 hover:text-blue-600 flex items-center gap-2 transition-colors"
                                    >
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                        amelielaurent.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="bg-white rounded-xl border border-gray-200 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
                            <div className="space-y-2">
                                {profileData.socialLinks.map((link) => (
                                    <a
                                        key={link.platform}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{link.platform}</p>
                                            <p className="text-xs text-gray-500">{link.label}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Response time */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Quick Response</p>
                                    <p className="text-sm text-gray-600">Usually within 24-48 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutShell>
    );
}
