export interface Tutorial {
    id: string;
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
    type: 'video' | 'article';
    tags: string[];
    date: string;
    duration?: string; // For videos: "12:34"
    readTime?: string; // For articles: "5 min read"
    videoUrl?: string; // YouTube embed URL
    content?: string; // Markdown content for articles
    featured?: boolean;
}

export const tutorialCategoriesEn = [
    'All',
    'Web Development',
    'Logistics',
    'Tools & Software',
    'Career Tips',
] as const;

export const tutorialCategoriesVi = [
    'Tất cả',
    'Lập trình Web',
    'Logistics',
    'Công Cụ',
    'Mẹo Nghề Nghiệp',
] as const;

export const tutorialCategories = tutorialCategoriesEn; // Mặc định

export const tutorialsEn: Tutorial[] = [];
export const tutorialsVi: Tutorial[] = [];

export const tutorials: Tutorial[] = tutorialsEn;

export function getTutorialBySlug(slug: string, lang: 'vi' | 'en' = 'en'): Tutorial | undefined {
    const list = lang === 'vi' ? tutorialsVi : tutorialsEn;
    return list.find(tutorial => tutorial.slug === slug);
}

export function getTutorialsByCategory(category: string, lang: 'vi' | 'en' = 'en'): Tutorial[] {
    const list = lang === 'vi' ? tutorialsVi : tutorialsEn;
    const all = lang === 'vi' ? 'Tất cả' : 'All';
    if (category === all) return list;
    return list.filter(tutorial => tutorial.category === category);
}

export function searchTutorials(query: string, lang: 'vi' | 'en' = 'en'): Tutorial[] {
    const list = lang === 'vi' ? tutorialsVi : tutorialsEn;
    const lowerQuery = query.toLowerCase();
    return list.filter(
        tutorial =>
            tutorial.title.toLowerCase().includes(lowerQuery) ||
            tutorial.description.toLowerCase().includes(lowerQuery) ||
            tutorial.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}
