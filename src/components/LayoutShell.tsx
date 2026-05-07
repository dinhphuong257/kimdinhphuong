"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import TopShell from "./TopShell";
import Sidebar from "./Sidebar";

interface LayoutShellProps {
    children: ReactNode;
}

// Mobile header component
function MobileHeader({ onMenuOpen }: { onMenuOpen: () => void }) {
    const pathname = usePathname();

    const getPageTitle = () => {
        if (pathname === "/") return "Overview";
        if (pathname === "/projects") return "Projects";
        if (pathname.startsWith("/projects/")) return "Case Study";
        if (pathname === "/blog") return "Blog";
        if (pathname.startsWith("/blog/")) return "Post";
        if (pathname === "/tut") return "Tutorials";
        if (pathname.startsWith("/tut/")) return "Tutorial";
        if (pathname === "/about") return "About";
        if (pathname === "/contact") return "Contact";
        return "Portfolio";
    };

    return (
        <header className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3 safe-area-top">
            <div className="flex items-center justify-between">
                {/* Menu button */}
                <button
                    onClick={onMenuOpen}
                    className="p-2.5 -ml-2 rounded-xl bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all duration-150"
                    aria-label="Open menu"
                >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Page title */}
                <h1 className="text-base font-semibold text-gray-900 absolute left-1/2 -translate-x-1/2">{getPageTitle()}</h1>

                {/* Logo - Hidden on mobile */}
                <Link href="/" className="p-2 -mr-2 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors hidden">
                    <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="#111827" />
                        <path d="M10 16L14 12L18 16L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 20L14 16L18 20L22 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </header>
    );
}

export default function LayoutShell({ children }: LayoutShellProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-gray-50 overflow-x-hidden text-slate-900">
            {/* Mobile header */}
            <MobileHeader onMenuOpen={() => setSidebarOpen(true)} />

            <div className="lg:flex">
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

                <main className="flex-1 lg:ml-[210px] min-h-[calc(100vh-44px)] overflow-hidden">
                    <TopShell />
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
