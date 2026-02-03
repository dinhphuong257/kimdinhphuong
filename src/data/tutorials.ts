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

export const tutorials: Tutorial[] = [
    {
        id: '1',
        slug: 'supply-chain-optimization-basics',
        title: 'Supply Chain Optimization Basics',
        description: 'Learn the fundamentals of optimizing supply chain operations for maximum efficiency and cost reduction.',
        thumbnail: '/tutorials/supply-chain.jpg',
        category: 'Logistics',
        type: 'video',
        tags: ['logistics', 'optimization', 'supply chain'],
        date: '2024-01-15',
        duration: '15:42',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        featured: true,
    },
    {
        id: '2',
        slug: 'nextjs-portfolio-tutorial',
        title: 'Building a Portfolio with Next.js 15',
        description: 'Complete guide to creating a modern, performant portfolio website using Next.js 15 and Tailwind CSS.',
        thumbnail: '/tutorials/nextjs-portfolio.jpg',
        category: 'Web Development',
        type: 'article',
        tags: ['nextjs', 'react', 'portfolio', 'tailwind'],
        date: '2024-01-20',
        readTime: '8 min read',
        content: `
# Building a Portfolio with Next.js 15

In this tutorial, you'll learn how to build a modern portfolio website from scratch.

## Prerequisites
- Basic knowledge of React
- Node.js installed
- Familiarity with TypeScript (helpful but not required)

## Getting Started

First, create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-portfolio
\`\`\`

## Project Structure

We'll organize our project like this:
- \`/app\` - App Router pages
- \`/components\` - Reusable components
- \`/data\` - Static data files

...and much more!
    `,
    },
    {
        id: '3',
        slug: 'warehouse-management-systems',
        title: 'Understanding Warehouse Management Systems',
        description: 'Deep dive into WMS technologies and how they revolutionize inventory control and warehouse operations.',
        thumbnail: '/tutorials/wms.jpg',
        category: 'Logistics',
        type: 'video',
        tags: ['wms', 'warehouse', 'inventory'],
        date: '2024-01-10',
        duration: '22:15',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
        id: '4',
        slug: 'react-hooks-mastery',
        title: 'React Hooks Deep Dive',
        description: 'Master React Hooks with practical examples. Learn useState, useEffect, useContext, and custom hooks.',
        thumbnail: '/tutorials/react-hooks.jpg',
        category: 'Web Development',
        type: 'article',
        tags: ['react', 'hooks', 'javascript'],
        date: '2024-01-25',
        readTime: '12 min read',
        content: `
# React Hooks Deep Dive

React Hooks have transformed how we write React components. Let's master them together.

## useState - State Management

The most common hook you'll use:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect - Side Effects

Handle side effects in functional components:

\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

...and more advanced patterns!
    `,
        featured: true,
    },
    {
        id: '5',
        slug: 'excel-for-logistics',
        title: 'Excel Tips for Logistics Professionals',
        description: 'Essential Excel formulas, pivot tables, and data analysis techniques for logistics and supply chain management.',
        thumbnail: '/tutorials/excel-logistics.jpg',
        category: 'Tools & Software',
        type: 'video',
        tags: ['excel', 'logistics', 'data analysis'],
        date: '2024-01-05',
        duration: '18:30',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
        id: '6',
        slug: 'career-path-logistics',
        title: 'Career Path in Logistics: A Student\'s Guide',
        description: 'Practical advice for logistics students on internships, certifications, and building a successful career in supply chain.',
        thumbnail: '/tutorials/career-logistics.jpg',
        category: 'Career Tips',
        type: 'article',
        tags: ['career', 'logistics', 'student'],
        date: '2024-01-28',
        readTime: '6 min read',
        content: `
# Career Path in Logistics: A Student's Guide

As a logistics student, planning your career path can be overwhelming. Here's what I've learned.

## Essential Skills

1. **Technical Skills**
   - Excel & data analysis
   - ERP systems (SAP, Oracle)
   - Basic programming

2. **Soft Skills**
   - Communication
   - Problem-solving
   - Analytical thinking

## Certifications Worth Getting

- APICS CSCP (Certified Supply Chain Professional)
- Six Sigma certifications
- Lean management

Start early and build your network!
    `,
    },
    {
        id: '7',
        slug: 'typescript-for-beginners',
        title: 'TypeScript for JavaScript Developers',
        description: 'Learn TypeScript basics and why it makes your code more maintainable and less error-prone.',
        thumbnail: '/tutorials/typescript.jpg',
        category: 'Web Development',
        type: 'video',
        tags: ['typescript', 'javascript', 'programming'],
        date: '2024-02-01',
        duration: '25:10',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        featured: true,
    },
    {
        id: '8',
        slug: 'lean-principles-logistics',
        title: 'Applying Lean Principles in Logistics',
        description: 'How to eliminate waste and improve efficiency in logistics operations using Lean methodology.',
        thumbnail: '/tutorials/lean.jpg',
        category: 'Logistics',
        type: 'article',
        tags: ['lean', 'efficiency', 'logistics'],
        date: '2024-02-03',
        readTime: '10 min read',
        content: `
# Applying Lean Principles in Logistics

Lean methodology can dramatically improve logistics efficiency. Here's how.

## The 7 Wastes in Logistics

1. **Transportation** - Unnecessary movement
2. **Inventory** - Excess stock
3. **Motion** - Wasted movement
4. **Waiting** - Idle time
5. **Overproduction** - Making too much
6. **Over-processing** - Doing more than needed
7. **Defects** - Errors and rework

## Practical Implementation

Start with value stream mapping...
    `,
    },
];

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
