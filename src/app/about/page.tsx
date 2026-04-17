import type { Metadata } from "next";
import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Kim Đình Phương's educational background, logistics skills, and work tools.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About | Kim Đình Phương",
        description: "Detailed information about Kim Đình Phương's profile, skills, and growth journey.",
        url: "/about",
        images: ["/opengraph-image"],
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
