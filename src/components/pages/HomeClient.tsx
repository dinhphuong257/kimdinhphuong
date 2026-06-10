"use client";

import { useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import HighlightsSection from "@/components/HighlightsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceCards from "@/components/ExperienceCards";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoCallModal from "@/components/VideoCallModal";
import Reveal from "@/components/Reveal";

export default function HomeClient() {
  const [showVideoCall, setShowVideoCall] = useState(false);

  return (
    <>
      <div className="max-w-5xl mx-auto py-0 px-0 sm:py-4 sm:px-4 lg:py-6 lg:px-6 lg:pr-6">
        <article className="glass-premium sm:rounded-3xl overflow-hidden relative">
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

          <Reveal direction="up" delay={300}>
            <ExperienceCards />
          </Reveal>

          <Reveal direction="up" delay={350}>
            <TestimonialsSection />
          </Reveal>
        </article>
      </div>

      <VideoCallModal isOpen={showVideoCall} onClose={() => setShowVideoCall(false)} />
    </>
  );
}

