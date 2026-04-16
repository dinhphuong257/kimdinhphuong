export const PROJECT_TAGS = [
    "Web Development",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Streaming Platform",
    "UI/UX Design",
    "Fullstack",
    "Logistics",
    "Supply Chain"
] as const;

export type ProjectTag = (typeof PROJECT_TAGS)[number];

export interface Project {
    id: string;
    title: string;
    summary: string;
    role: string;
    year: number;
    thumbnail: string;
    thumbnailGradient: string;
    tags: ProjectTag[];
    caseStudyUrl?: string;
    featured: boolean;
    problem: string;
    process: string;
    solution: string;
    outcome: string;
    images: string[];
}

export const projects: Project[] = [
    {
        id: "rap-phim-chill",
        title: "Rạp Phim Chill",
        summary: "A premium movie streaming platform providing a seamless and immersive viewing experience. Built with performance and modern UI/UX design in mind.",
        role: "Lead Developer",
        year: 2024,
        thumbnail: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop",
        thumbnailGradient: "bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900",
        tags: ["Web Development", "Streaming Platform", "UI/UX Design"],
        featured: true,
        problem: "Viewers often struggle with bloated, ad-heavy streaming sites that are hard to navigate and slow to load on different devices.",
        process: "Designed entirely around the user experience with a sleek dark cinematic theme, optimized media loading, and responsive architecture.",
        solution: "Developed a fast, clean, and intuitive movie streaming website that prioritizes content discovery, seamless playback, and user engagement.",
        outcome: "Successfully launched a modern streaming platform handling high-quality video content with a growing user base.",
        images: [],
        caseStudyUrl: "https://rapphimchill.pro",
    },
    {
        id: "wms-cold-storage",
        title: "WMS Manager",
        summary: "A specialized Warehouse Management System tailored for cold storage operations. Features real-time temperature tracking and automated space optimization.",
        role: "Fullstack Developer",
        year: 2024,
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        thumbnailGradient: "bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900",
        tags: ["Web Development", "Logistics", "Supply Chain"],
        featured: true,
        problem: "Cold storage facilities face challenges in tracking temperature-sensitive inventory and optimizing space.",
        process: "Researched cold chain logistics requirements, designed an intuitive dashboard for warehouse operators, and implemented a real-time tracking system.",
        solution: "A complete Web-based WMS that syncs with IoT temperature sensors and provides intelligent routing for warehouse staff.",
        outcome: "Improved inventory accuracy, reduced spoilage, and enhanced overall operational efficiency.",
        images: [],
        caseStudyUrl: "#",
    }
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((project) => project.featured);
}

export function getProjectsByTag(tag: ProjectTag): Project[] {
    return projects.filter((project) => project.tags.includes(tag));
}

export function searchProjects(query: string): Project[] {
    const lowerQuery = query.toLowerCase();
    return projects.filter(
        (project) =>
            project.title.toLowerCase().includes(lowerQuery) ||
            project.summary.toLowerCase().includes(lowerQuery) ||
            project.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
}
