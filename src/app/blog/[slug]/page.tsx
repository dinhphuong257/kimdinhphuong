import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import LayoutShell from "@/components/LayoutShell";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import Reveal from "@/components/Reveal";
import { getPostBySlug } from "@/data/posts";

// Next.js 15: params is a Promise <{ slug: string }>
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
            description: "The post you are looking for does not exist.",
        };
    }

    const ogImage = `/blog/${post.slug}/opengraph-image`;
    const twitterImage = `/blog/${post.slug}/twitter-image`;

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `/blog/${post.slug}`,
            type: "article",
            images: [ogImage],
        },
        twitter: {
            title: post.title,
            description: post.excerpt,
            images: [twitterImage],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const publishedAt = new Date(post.date);
    const datePublished = Number.isNaN(publishedAt.getTime())
        ? new Date().toISOString()
        : publishedAt.toISOString();

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: post.image ? [post.image] : ["https://kimdinhphuong.dev/opengraph-image"],
        datePublished,
        dateModified: datePublished,
        author: {
            "@type": "Person",
            name: "Kim Đình Phương",
            url: "https://kimdinhphuong.dev",
        },
        publisher: {
            "@type": "Person",
            name: "Kim Đình Phương",
        },
        mainEntityOfPage: `https://kimdinhphuong.dev/blog/${post.slug}`,
    };

    return (
        <LayoutShell>
            <ReadingProgressBar />
            <div className="max-w-5xl mx-auto py-0 px-0 sm:py-4 sm:px-4 lg:py-6 lg:px-6 lg:pr-6 min-h-screen">
                <div className="bg-white sm:rounded-2xl shadow-sm sm:border border-slate-200 overflow-hidden">
                    <Reveal direction="up" delay={100}>
                        <article>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
                        />
                        {/* Compact Header */}
                        <div className="px-5 sm:px-6 lg:px-8 pt-5 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 border-b border-slate-100">
                            {/* Back Link */}
                            <Link
                                href="/blog"
                                className="inline-flex items-center text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 mb-4 transition-colors group"
                            >
                                <svg className="w-4 h-4 mr-1.5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Blog
                            </Link>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 text-xs sm:text-sm">
                                <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold">
                                    {post.category}
                                </span>
                                <span className="text-slate-400">•</span>
                                <span className="text-slate-600 font-medium">{post.date}</span>
                                <span className="text-slate-400">•</span>
                                <span className="text-slate-600 font-medium">{post.readTime}</span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-3 text-balance">
                                {post.title}
                            </h1>

                            {/* Excerpt */}
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>

                        {/* Content Area */}
                        <div className="px-5 sm:px-6 lg:px-8 py-6 sm:py-8">
                            {post.image && (
                                <div className="rounded-xl overflow-hidden shadow-md mb-8 aspect-video bg-slate-100 relative">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* Dynamic Rich Text Content - Cleaner Typography */}
                            <div className="prose prose-slate prose-sm sm:prose-base max-w-none
                                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900
                                prose-p:text-slate-600 prose-p:leading-relaxed
                                prose-a:text-indigo-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-slate-900 prose-strong:font-semibold
                                prose-ul:text-slate-600 prose-ol:text-slate-600
                                prose-li:marker:text-slate-400
                                prose-img:rounded-xl prose-img:shadow-md
                                prose-code:text-indigo-600 prose-code:font-semibold prose-code:bg-slate-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                                prose-pre:bg-slate-900 prose-pre:shadow-lg
                            ">
                                {post.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                ) : (
                                    <p className="text-slate-500 italic">
                                        Content for this article is coming soon...
                                    </p>
                                )}
                            </div>

                            {/* Footer / Author - Compact */}
                            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center gap-3">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-100 flex items-center justify-center text-lg sm:text-xl">
                                    👩‍💻
                                </div>
                                <div>
                                    <p className="text-sm sm:text-base font-bold text-slate-900">Kim Đình Phương</p>
                                    <p className="text-xs sm:text-sm text-slate-600">Product Designer</p>
                                </div>
                            </div>
                        </div>
                        </article>
                    </Reveal>
                </div>
            </div>
        </LayoutShell>
    );
}
