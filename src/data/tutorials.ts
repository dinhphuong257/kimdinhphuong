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

export const tutorialCategories = [
    'All',
    'Web Development',
    'Logistics',
    'Tools & Software',
    'Career Tips',
] as const;

export const tutorials: Tutorial[] = [];

export function getTutorialBySlug(slug: string): Tutorial | undefined {
    return tutorials.find(tutorial => tutorial.slug === slug);
}

export function getTutorialsByCategory(category: string): Tutorial[] {
    if (category === 'All') return tutorials;
    return tutorials.filter(tutorial => tutorial.category === category);
}

export function searchTutorials(query: string): Tutorial[] {
    const lowerQuery = query.toLowerCase();
    return tutorials.filter(
        tutorial =>
            tutorial.title.toLowerCase().includes(lowerQuery) ||
            tutorial.description.toLowerCase().includes(lowerQuery) ||
            tutorial.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
}
