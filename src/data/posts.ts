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

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        title: "The Future of Design Systems in 2024",
        excerpt: "Exploring how AI and automation are reshaping the way we build and maintain design systems for scale.",
        date: "Jan 12, 2024",
        readTime: "5 min read",
        category: "Design Systems",
        slug: "future-of-design-systems",
        content: `
            <p class="lead">Design systems have evolved from static style guides to living, breathing ecosystems. As we step into 2024, the convergence of AI, automation, and design tokens is set to redefine how we think about consistency and scale.</p>

            <h2>1. AI-Driven Component Generation</h2>
            <p>The manual toil of creating every variant of a button or card is fading. AI tools are now capable of generating component states based on a set of core principles defined in your system. This allows designers to focus on <em>architecture</em> rather than <em>assembly</em>.</p>
            <ul>
                <li><strong>Predictive patterns:</strong> Systems that suggest components based on user flow context.</li>
                <li><strong>Automated documentation:</strong> Keeping the docs in sync with code automatically.</li>
            </ul>

            <h2>2. Tokens as the Universal Language</h2>
            <p>Design tokens are no longer just variable names; they are the glues connecting design files (Figma) directly to codebases (React, iOS, Android). The <a href="#">W3C Design Token Community Group</a> is standardizing this, making interoperability easier than ever.</p>
            
            <blockquote>
                "A design system is not a project, it's a product serving products." — Nathan Curtis
            </blockquote>

            <h2>3. Accessibility Automation</h2>
            <p>Accessibility is shifting left. Modern design systems are embedding WCAG 2.2 checks directly into the component layer. Tools effectively "lint" designs for contrast and touch target issues before a single line of code is written.</p>
            
            <h3>Conclusion</h3>
            <p>The future isn't just about more components—it's about smarter ones. By embracing these shifts, we can build systems that don't just maintain consistency, but actively accelerate innovation.</p>
        `
    },
    {
        id: "2",
        title: "Mastering Glassmorphism in Web Design",
        excerpt: "A deep dive into creating beautiful, accessible glassmorphic interfaces using CSS and modern tools.",
        date: "Dec 28, 2023",
        readTime: "8 min read",
        category: "UI Design",
        slug: "mastering-glassmorphism"
    },
    {
        id: "3",
        title: "User Research: Beyond the Surveys",
        excerpt: "Why qualitative data matters more than ever and how to conduct effective user interviews.",
        date: "Dec 15, 2023",
        readTime: "6 min read",
        category: "UX Research",
        slug: "user-research-beyond-surveys"
    },
    {
        id: "4",
        title: "Dark Mode: Best Practices and Pitfalls",
        excerpt: "Designing for dark mode isn't just about inverting colors. Here's what you need to know.",
        date: "Nov 30, 2023",
        readTime: "4 min read",
        category: "UI Design",
        slug: "dark-mode-best-practices"
    },
    {
        id: "5",
        title: "Typography Traits for Modern Interfaces",
        excerpt: "Selecting the right typeface can make or break your design. Here is a guide to choosing the perfect font.",
        date: "Nov 12, 2023",
        readTime: "7 min read",
        category: "Typography",
        slug: "typography-traits"
    }
];

export const BLOG_CATEGORIES = ["All", "UI Design", "UX Research", "Design Systems", "Typography"];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug);
}
