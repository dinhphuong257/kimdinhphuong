export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image?: string;
    slug: string;
    content?: string; // HTML content
}

export const BLOG_POSTS: BlogPost[] = [];

export const BLOG_CATEGORIES = ["All", "UI Design", "UX Research", "Design Systems", "Typography"];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug);
}
