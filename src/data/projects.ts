export const PROJECT_TAGS = [
    "Product Design",
    "UI Design",
    "UX Research",
    "Webflow Dev",
    "Brand Identity",
    "Design Systems",
    "Mobile App",
    "Dashboard",
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
        id: "project-starter-kit",
        title: "Project Starter Kit",
        summary: "A comprehensive design system and component library built for rapid prototyping and development.",
        role: "Lead Designer",
        year: 2024,
        thumbnail: "",
        thumbnailGradient: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-orange-100 to-amber-50",
        tags: ["UI Design", "Design Systems"],
        featured: true,
        problem: "Design teams were spending too much time recreating common components for each new project, leading to inconsistent designs and slower delivery times.",
        process: "Conducted interviews with 15 designers across different teams to understand pain points. Created an audit of existing components and identified the most commonly used patterns. Iteratively designed and tested components with real users.",
        solution: "Developed a modular design system with 200+ components, including buttons, forms, navigation, and data visualization elements. Created detailed documentation and usage guidelines.",
        outcome: "Reduced design-to-development time by 40%. Achieved 95% adoption rate across product teams within 3 months. Improved design consistency scores by 60%.",
        images: [],
    },
    {
        id: "mobile-app-redesign",
        title: "Mobile App Redesign",
        summary: "Complete redesign of a fintech mobile app focusing on user experience and accessibility.",
        role: "Product Designer",
        year: 2024,
        thumbnail: "",
        thumbnailGradient: "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-purple-200 via-violet-100 to-purple-50",
        tags: ["UX Research", "Mobile App", "Product Design"],
        featured: true,
        problem: "The existing mobile app had a 2.8-star rating with users complaining about confusing navigation and difficult-to-complete transactions.",
        process: "Analyzed app store reviews and support tickets to identify pain points. Conducted 20 usability tests with current users. Created journey maps and identified 12 key friction points.",
        solution: "Redesigned the entire navigation structure with a bottom tab bar. Simplified the transaction flow from 7 steps to 3. Added biometric authentication and improved error handling.",
        outcome: "App store rating improved to 4.6 stars. Transaction completion rate increased by 35%. Customer support tickets reduced by 50%.",
        images: [],
    },
    {
        id: "dashboard-analytics",
        title: "Dashboard Analytics",
        summary: "Data visualization dashboard for enterprise analytics with real-time insights.",
        role: "UX Designer",
        year: 2023,
        thumbnail: "",
        thumbnailGradient: "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-200 via-cyan-100 to-blue-50",
        tags: ["Dashboard", "Product Design", "UI Design"],
        featured: true,
        problem: "Enterprise clients needed a way to visualize complex data in real-time but existing solutions were too technical and required specialized training.",
        process: "Worked closely with data scientists to understand the data models. Conducted workshops with enterprise clients to understand their reporting needs. Created multiple prototypes tested with 10 companies.",
        solution: "Designed an intuitive dashboard with drag-and-drop widgets, customizable views, and natural language queries. Implemented progressive disclosure for advanced features.",
        outcome: "Reduced time-to-insight by 60%. 80% of users could create reports without training. Became the most-requested feature by enterprise clients.",
        images: [],
    },
    {
        id: "design-system-v2",
        title: "Design System V2",
        summary: "Scalable design system with 200+ components for cross-platform consistency.",
        role: "Design Lead",
        year: 2023,
        thumbnail: "",
        thumbnailGradient: "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-200 via-gray-100 to-slate-50",
        tags: ["Design Systems", "Brand Identity"],
        featured: true,
        problem: "The company's products looked inconsistent across web, mobile, and marketing materials. Each team had their own color palette and typography.",
        process: "Audited all existing design assets across 8 products. Facilitated alignment workshops with stakeholders. Created a governance model for the design system.",
        solution: "Built a comprehensive design system with design tokens, component library, and documentation portal. Implemented automated accessibility checks and visual regression testing.",
        outcome: "Achieved 100% adoption across all product teams. Reduced design debt by 70%. Increased brand recognition scores by 25%.",
        images: [],
    },
    {
        id: "ecommerce-checkout",
        title: "E-commerce Checkout Flow",
        summary: "Streamlined checkout experience that increased conversion rates significantly.",
        role: "Product Designer",
        year: 2023,
        thumbnail: "",
        thumbnailGradient: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-200 via-green-100 to-emerald-50",
        tags: ["UX Research", "Product Design"],
        featured: false,
        problem: "The checkout process had a 70% cart abandonment rate, with users dropping off at the payment step.",
        process: "Implemented session recording and heatmap analysis. Conducted exit surveys and A/B tested multiple variations of the checkout flow.",
        solution: "Redesigned checkout as a single-page experience with progress indicators. Added guest checkout, multiple payment options, and saved payment methods.",
        outcome: "Cart abandonment reduced to 45%. Conversion rate increased by 28%. Average order value increased by 15%.",
        images: [],
    },
    {
        id: "webflow-portfolio",
        title: "Webflow Portfolio Template",
        summary: "Premium portfolio template for designers and creatives built on Webflow.",
        role: "Designer & Developer",
        year: 2022,
        thumbnail: "",
        thumbnailGradient: "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-rose-200 via-pink-100 to-rose-50",
        tags: ["Webflow Dev", "UI Design"],
        featured: false,
        problem: "Designers needed professional portfolio websites but lacked coding skills or budget for custom development.",
        process: "Researched 100+ designer portfolios to identify common patterns. Created wireframes and tested with potential users. Iterated based on feedback.",
        solution: "Developed a fully customizable Webflow template with case study templates, project galleries, and contact forms. Included detailed documentation.",
        outcome: "Sold 500+ copies in the first month. Featured on Webflow showcase. Average customer rating of 4.9/5.",
        images: [],
    },
    {
        id: "saas-onboarding",
        title: "SaaS Onboarding Experience",
        summary: "Interactive onboarding flow that improved activation rates for a B2B SaaS product.",
        role: "UX Designer",
        year: 2022,
        thumbnail: "",
        thumbnailGradient: "bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-indigo-200 via-blue-100 to-indigo-50",
        tags: ["UX Research", "Product Design"],
        featured: false,
        problem: "Only 30% of new users completed the onboarding process, leading to poor activation and high churn rates.",
        process: "Analyzed drop-off points in the existing onboarding. Conducted interviews with churned users and successful users to understand the difference.",
        solution: "Redesigned onboarding as a personalized, progressive experience. Added interactive tutorials, success celebrations, and contextual help.",
        outcome: "Onboarding completion rate increased to 75%. Time-to-value reduced by 50%. 30-day retention improved by 40%.",
        images: [],
    },
    {
        id: "brand-refresh",
        title: "Brand Identity Refresh",
        summary: "Complete brand refresh for a tech startup including logo, colors, and visual language.",
        role: "Brand Designer",
        year: 2022,
        thumbnail: "",
        thumbnailGradient: "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-amber-100 to-yellow-50",
        tags: ["Brand Identity", "UI Design"],
        featured: false,
        problem: "The startup's original brand felt dated and didn't reflect their evolution from a small tool to an enterprise platform.",
        process: "Conducted brand workshops with leadership. Researched competitor positioning. Created mood boards and style tiles for exploration.",
        solution: "Developed a new visual identity with a modern logo, refined color palette, and custom typography. Created brand guidelines and asset library.",
        outcome: "Brand perception scores improved by 45%. Website traffic increased by 30% after rebrand launch. Positive press coverage in 5 design publications.",
        images: [],
    },
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
