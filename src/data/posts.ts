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
    tags: string[];
}

export const BLOG_POSTS_EN: BlogPost[] = [];
export const BLOG_POSTS_VI: BlogPost[] = [];

export const BLOG_POSTS = BLOG_POSTS_EN; // Default

export const BLOG_CATEGORIES_EN = ["All", "UI Design", "UX Research", "Design Systems", "Typography"];
export const BLOG_CATEGORIES_VI = ["Tất cả", "Thiết kế UI", "Nghiên cứu UX", "Hệ thống thiết kế", "Nghệ thuật chữ"];

export const BLOG_CATEGORIES = BLOG_CATEGORIES_EN; // Default

export function getPostBySlug(slug: string, lang: 'vi' | 'en' = 'en'): BlogPost | undefined {
    const list = lang === 'vi' ? BLOG_POSTS_VI : BLOG_POSTS_EN;
    return list.find((post) => post.slug === slug);
}
