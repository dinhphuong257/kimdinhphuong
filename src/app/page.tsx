import type { Metadata } from "next";
import HomeClient from "@/components/pages/HomeClient";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio của Kim Đình Phương - sinh viên Logistics năm 3 với các dự án tối ưu chuỗi cung ứng và vận hành kho.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kim Đình Phương - Logistics Profile",
    description:
      "Khám phá hồ sơ, kinh nghiệm và các dự án nổi bật về logistics, supply chain và vận hành kho.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    title: "Kim Đình Phương - Logistics Profile",
    description:
      "Khám phá hồ sơ và dự án logistics của Kim Đình Phương.",
    images: ["/twitter-image"],
  },
};

export default function Home() {
  return <HomeClient />;
}
