import type { Metadata } from "next";
import TutPageClient from "@/components/pages/TutPageClient";

export const metadata: Metadata = {
    title: "Tutorials",
    description: "A practical library of tutorials and guides on logistics, web development, and working tools.",
    alternates: {
        canonical: "/tut",
    },
    openGraph: {
        title: "Tutorials | Kim Đình Phương",
        description: "Discover the latest guides on logistics and web development from real-world experience.",
        url: "/tut",
        images: ["/opengraph-image"],
    },
};

export default function TutPage() {
    return <TutPageClient />;
}
