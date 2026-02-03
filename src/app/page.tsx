"use client";

import { useState } from "react";
import Link from "next/link";
import LayoutShell from "@/components/LayoutShell";
import ProfileHeader from "@/components/ProfileHeader";
import HighlightsSection from "@/components/HighlightsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceCards from "@/components/ExperienceCards";
import RecentWorkGrid from "@/components/RecentWorkGrid";
import VideoCallModal from "@/components/VideoCallModal";

export default function Home() {
  const [showVideoCall, setShowVideoCall] = useState(false);

  return (
    <LayoutShell>
      <div className="max-w-5xl mx-auto py-0 px-0 sm:py-4 sm:px-4 lg:py-6 lg:px-6 lg:pr-6 desktop-bg-pattern min-h-screen">
        <article className="bg-white sm:rounded-2xl shadow-sm sm:border border-slate-200 overflow-hidden">
          <ProfileHeader
            onVideoCall={() => setShowVideoCall(true)}
            onMessage={() => {
              window.location.href = "/contact";
            }}
          />
          <HighlightsSection />
          <AboutSection />
          <ExperienceCards />
          <RecentWorkGrid />

          {/* View all projects link */}
          <div className="px-4 sm:px-6 pb-8 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors"
            >
              View all projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </article>
      </div>

      <VideoCallModal isOpen={showVideoCall} onClose={() => setShowVideoCall(false)} />
    </LayoutShell>
  );
}
