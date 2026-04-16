"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    delay?: number;
    className?: string;
}

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    className = "",
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optional: Stop observing once it's visible so it doesn't animate out and in repeatedly.
                    // If you want it to trigger every time, remove the unobserve.
                    if (currentRef) {
                        observer.unobserve(currentRef);
                    }
                }
            },
            {
                threshold: 0.1,    // Trigger when 10% visible
                rootMargin: "0px 0px -50px 0px", // Trigger slightly before it hits the bottom
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const getDirectionClass = () => {
        if (isVisible) return "translate-y-0 translate-x-0 opacity-100";
        switch (direction) {
            case "up":
                return "translate-y-12 opacity-0";
            case "down":
                return "-translate-y-12 opacity-0";
            case "left":
                return "translate-x-12 opacity-0";
            case "right":
                return "-translate-x-12 opacity-0";
            case "none":
                return "opacity-0";
            default:
                return "translate-y-12 opacity-0";
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${getDirectionClass()} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
