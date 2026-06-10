"use client";

import React, { useEffect } from "react";
import { Link } from '@/components/ViewTransitions';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { profileData } from "@/data/profile";

const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const ProjectsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const BlogIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

const TutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const AboutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  // ESC key handler
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const navItems: NavItem[] = [
    { label: language === "vi" ? "Tổng quan" : "Overview", icon: <HomeIcon />, href: "/" },
    { label: language === "vi" ? "Dự án" : "Projects", icon: <ProjectsIcon />, href: "/projects" },
    { label: language === "vi" ? "Bài viết" : "Blog", icon: <BlogIcon />, href: "/blog" },
    { label: language === "vi" ? "Thủ thuật" : "Tutorials", icon: <TutIcon />, href: "/tut" },
    { label: language === "vi" ? "Thông tin" : "About", icon: <AboutIcon />, href: "/about" },
    { label: language === "vi" ? "Liên hệ" : "Contact", icon: <ContactIcon />, href: "/contact" },
  ];

  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - Premium Minimal */}
      <aside
        className={`
          fixed top-0 flex flex-col z-50 transition-all duration-300 ease-out
          lg:left-6 lg:top-1/2 lg:-translate-y-1/2 lg:h-fit lg:w-48 lg:rounded-2xl
          ${isOpen ? "left-0 h-full w-[280px] translate-y-0" : "-left-full lg:left-6"}
          glass-premium shadow-xl
          lg:ring-1 lg:ring-white/40
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Mobile Close Button */}
        <div className="lg:hidden p-4 flex justify-end border-b border-slate-100">
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Navigation - Minimal Style */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col justify-start lg:justify-center">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={handleNavClick}
                  className={`
                    group relative flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 overflow-hidden
                    ${isActive(item.href)
                      ? "text-indigo-700 bg-indigo-50 shadow-sm ring-1 ring-indigo-100/50"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50/80"
                    }
                  `}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Active indicator - Stronger left border */}
                  {isActive(item.href) && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-9 bg-indigo-500 rounded-r-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                  )}

                  <span className={`relative z-10 transition-all duration-300 ${isActive(item.href) ? "text-indigo-600 scale-110" : "text-slate-400 group-hover:text-indigo-500 group-hover:scale-110 group-hover:-rotate-3"}`}>
                    {item.icon}
                  </span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section - Smaller Get Help & Download CV */}
        <div className="p-4 border-t border-slate-100 flex flex-col gap-2">
          {/* Language Switcher */}
          <div className="flex flex-col bg-slate-100/80 p-1.5 rounded-xl mb-1 gap-1">
            <button
              onClick={() => setLanguage("vi")}
              className={`w-full flex items-center gap-3 py-2.5 px-3 text-xs font-bold rounded-lg transition-all ${language === "vi" ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`}
            >
              <Image src="https://flagcdn.com/w20/vn.png" alt="VN" width={20} height={14} sizes="20px" className="rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.2)] shrink-0" />
              <span>Tiếng Việt</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`w-full flex items-center gap-3 py-2.5 px-3 text-xs font-bold rounded-lg transition-all ${language === "en" ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`}
            >
              <Image src="https://flagcdn.com/w20/us.png" alt="US" width={20} height={14} sizes="20px" className="rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.2)] shrink-0" />
              <span>English</span>
            </button>
          </div>

          <a
            href="/cv/kim-dinh-phuong-cv.pdf"
            download
            className="w-full px-3 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-indigo-200"
            aria-label="Download CV"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>{language === "vi" ? "Tải CV" : "Download CV"}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
