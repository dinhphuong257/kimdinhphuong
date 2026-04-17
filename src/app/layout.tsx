import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profileData } from "@/data/profile";
import { LanguageProvider as ClientLanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kimdinhphuong.dev"),
  applicationName: "Kim Đình Phương Portfolio",
  title: {
    template: "%s | Kim Đình Phương",
    default: "Kim Đình Phương - Logistics Profile"
  },
  description: "3rd Year Logistics Student passionate about optimizing supply chains, warehouse management operations, and creating efficient logistics solutions.",
  keywords: ["Logistics", "Supply Chain", "Warehouse Management", "Transport", "Kim Đình Phương", "Portfolio", "Can Tho University of Technology"],
  authors: [{ name: "Kim Đình Phương", url: "https://kimdinhphuong.dev" }],
  creator: "Kim Đình Phương",
  publisher: "Kim Đình Phương",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kim Đình Phương - Logistics Profile",
    description: "3rd Year Logistics Student passionate about optimizing supply chains and creating efficient logistics solutions.",
    url: "https://kimdinhphuong.dev",
    siteName: "Kim Đình Phương Portfolio",
    images: [
      {
          url: "/opengraph-image",
        width: 1200,
        height: 630,
          alt: "Kim Đình Phương Portfolio",
      }
    ],
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Kim Đình Phương - Logistics Profile",
    description: "3rd Year Logistics Student passionate about optimizing supply chains.",
    creator: "@kimdinhphuong",
      images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.title,
    description: profileData.tagline,
    url: "https://kimdinhphuong.dev",
    image: "https://kimdinhphuong.dev/avatar.jpg",
    email: `mailto:${profileData.email}`,
    sameAs: profileData.socialLinks.map((link) => link.url),
    address: {
      "@type": "PostalAddress",
      addressLocality: profileData.location.city,
      addressCountry: profileData.location.country,
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kim Đình Phương Portfolio",
    url: "https://kimdinhphuong.dev",
    inLanguage: "vi-VN",
    author: {
      "@type": "Person",
      name: profileData.name,
    },
  };

  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ClientLanguageProvider>
          {children}
        </ClientLanguageProvider>
      </body>
    </html>
  );
}
