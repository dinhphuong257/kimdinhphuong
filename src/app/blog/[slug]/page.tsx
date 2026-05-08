import type { Metadata } from "next";
import { getPostBySlug } from "@/data/posts";
import BlogPostClient from "@/components/pages/BlogPostClient";

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
    return <BlogPostClient slug={slug} />;
}
