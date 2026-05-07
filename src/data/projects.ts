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

export const projectsEn: Project[] = [
    {
        id: "rap-phim-chill",
        title: "Rạp Phim Chill",
        summary: "A premium movie streaming platform providing a seamless and immersive viewing experience. Built with performance and modern UI/UX design in mind.",
        role: "Lead Developer",
        year: 2025,
        thumbnail: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop",
        thumbnailGradient: "bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900",
        tags: ["Web Development", "Streaming Platform", "UI/UX Design"],
        featured: true,
        problem: "Viewers often struggle with bloated, ad-heavy streaming sites that are hard to navigate and slow to load on different devices.",
        process: "Designed entirely around the user experience with a sleek dark cinematic theme, optimized media loading, and responsive architecture.",
        solution: "Developed a fast, clean, and intuitive movie streaming website that prioritizes content discovery, seamless playback, and user engagement.",
        outcome: "Successfully launched a modern streaming platform handling high-quality video content with a growing user base.",
        images: [],
        caseStudyUrl: "https://rapphimchill.app",
    },
    {
        id: "wms-ecofresh",
        title: "WMS EcoFresh",
        summary: "A Warehouse Management System for cold-chain operations with secure dashboard access, real-time container temperature monitoring, and instant safety alerts.",
        role: "Fullstack Developer",
        year: 2024,
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        thumbnailGradient: "bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900",
        tags: ["Web Development", "Logistics", "Supply Chain"],
        featured: true,
        problem: "Cold storage teams were managing inventory, temperature logs, and alerts across disconnected tools, causing delayed responses when containers exceeded safe thresholds.",
        process: "Analyzed warehouse workflows, designed the EcoFresh login-to-dashboard experience, and mapped critical modules for inbound/outbound tracking, real-time monitoring, and alert handling.",
        solution: "Built a web-based WMS with secure authentication, centralized warehouse control, continuous container temperature visibility, and instant warning notifications for risk conditions.",
        outcome: "Operations became faster and more reliable with fewer manual steps, better traceability, and improved cold-chain safety for daily warehouse execution.",
        images: [],
        caseStudyUrl: "https://logisticsprojects.vercel.app/login",
    }
];

export const projectsVi: Project[] = [
    {
        ...projectsEn[0],
        summary: "Nền tảng xem phim trực tuyến cao cấp, mang lại trải nghiệm mượt mà và sống động. Thiết kế giao diện hiện đại tối ưu hiệu suất.",
        role: "Trưởng nhóm phát triển",
        problem: "Người xem thường xuyên gặp khó khăn với các trang web phim chứa quá nhiều quảng cáo rác, chậm trễ và khó theo dõi trên nhiều thiết bị.",
        process: "Thiết kế xoay quanh trải nghiệm người dùng với theme điện ảnh tối màu, tối ưu hóa tải phương tiện và kiến trúc đáp ứng nhanh.",
        solution: "Phát triển web phim giao diện trực quan, ưu tiên khám phá nội dung dễ dàng, trình phát video liền mạch và mượt mà.",
        outcome: "Đã ra mắt thành công nền tảng chiếu phim ổn định, xử lý phim độ phân giải cao thu hút tệp khán giả ngày càng lớn."
    },
    {
        ...projectsEn[1],
        summary: "Hệ thống Quản lý Kho bãi quy trình lạnh với giao diện bảo mật, theo dõi nhiệt độ container trực tuyến thời gian thực, và cảnh báo an toàn tức thì.",
        role: "Lập trình viên Fullstack",
        problem: "Các nhóm quản lý kho lạnh phải theo dõi thủ công kho bãi thông qua nhiều công cụ ngắt kết nối, gây chậm trễ xử lý các vấn đề khẩn cấp.",
        process: "Phân tích quy trình luân chuyển kho phức tạp, thiết kế hệ thống theo dõi toàn diện từ nhận hàng, xác thực bảo mật đến cảnh báo.",
        solution: "Xây dựng hệ thống WMS nền web nhằm tập trung quản lý trên một nền tảng, tạo khả năng kiểm soát liên tục theo thời gian thực.",
        outcome: "Tối ưu hóa khả năng truy xuất, giảm công việc chân tay và đảm bảo chất lượng hệ thống kho quy trình lạnh."
    }
];

export const projects = projectsEn; // Mặc định cho những components chưa chuyển ngữ

export function getProjectById(id: string, lang: 'vi' | 'en' = 'en'): Project | undefined {
    const list = lang === 'vi' ? projectsVi : projectsEn;
    return list.find((project) => project.id === id);
}

export function getFeaturedProjects(lang: 'vi' | 'en' = 'en'): Project[] {
    const list = lang === 'vi' ? projectsVi : projectsEn;
    return list.filter((project) => project.featured);
}

export function getProjectsByTag(tag: ProjectTag, lang: 'vi' | 'en' = 'en'): Project[] {
    const list = lang === 'vi' ? projectsVi : projectsEn;
    return list.filter((project) => project.tags.includes(tag));
}

export function searchProjects(query: string, lang: 'vi' | 'en' = 'en'): Project[] {
    const list = lang === 'vi' ? projectsVi : projectsEn;
    const lowerQuery = query.toLowerCase();
    return list.filter(
        (project) =>
            project.title.toLowerCase().includes(lowerQuery) ||
            project.summary.toLowerCase().includes(lowerQuery) ||
            project.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
}
