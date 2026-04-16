import type { Metadata } from "next";
import TutPageClient from "@/components/pages/TutPageClient";

export const metadata: Metadata = {
    title: "Tutorials",
    description: "Kho tutorial và hướng dẫn thực tế về logistics, web development và công cụ làm việc.",
    alternates: {
        canonical: "/tut",
    },
    openGraph: {
        title: "Tutorials | Kim Đình Phương",
        description: "Xem các hướng dẫn mới về logistics và phát triển web từ kinh nghiệm thực tế.",
        url: "/tut",
        images: ["/opengraph-image"],
    },
};

export default function TutPage() {
    return <TutPageClient />;
}
