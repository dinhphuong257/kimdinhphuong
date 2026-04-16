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
import Reveal from "@/components/Reveal";

export default function HomeClient() {
  const [showVideoCall, setShowVideoCall] = useState(false);

  return (
    <LayoutShell>
      <div className="max-w-5xl mx-auto py-0 px-0 sm:py-4 sm:px-4 lg:py-6 lg:px-6 lg:pr-6 min-h-screen">
        <article className="bg-white sm:rounded-3xl shadow-sm ring-1 ring-slate-200/60 overflow-hidden">
          <Reveal direction="down">
            <ProfileHeader
              onMessage={() => {
                window.location.href = "/contact";
              }}
            />
          </Reveal>

          <Reveal direction="up" delay={150}>
            <HighlightsSection />
          </Reveal>

          <Reveal direction="up" delay={250}>
            <AboutSection />
          </Reveal>

          <Reveal direction="up" delay={350}>
            <ExperienceCards />
          </Reveal>

          <Reveal direction="up" delay={450}>
            <RecentWorkGrid />
          </Reveal>

          <Reveal direction="up" delay={550}>
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
          </Reveal>
        </article>
      </div>

      <VideoCallModal isOpen={showVideoCall} onClose={() => setShowVideoCall(false)} />
    </LayoutShell>
  );
}
