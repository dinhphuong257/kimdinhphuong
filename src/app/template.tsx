"use client";

import { AnimatePresence, motion, useReducedMotion, Transition } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const transition: Transition = shouldReduceMotion
    ? { duration: 0.2 }
    : { ease: [0.22, 1, 0.36, 1], duration: 0.45 };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={shouldReduceMotion ? { opacity: 0 } : { y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { y: -12, opacity: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
