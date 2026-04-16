import type { Metadata } from "next";
import BlogPageClient from "@/components/pages/BlogPageClient";

export const metadata: Metadata = {
    title: "Blog",
    description: "Bài viết chia sẻ kinh nghiệm về thiết kế sản phẩm, UX và các góc nhìn thực tiễn.",
    alternates: {
        canonical: "/blog",
    },
    openGraph: {
        title: "Blog | Kim Đình Phương",
        description: "Đọc các bài viết mới nhất về product design, UX và tư duy làm sản phẩm.",
        url: "/blog",
        images: ["/opengraph-image"],
    },
};

export default function BlogPage() {
    return <BlogPageClient />;
}
