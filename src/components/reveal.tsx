"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={false}
      whileInView={
        reducedMotion ? undefined : { opacity: [0.8, 1], y: [12, 0] }
      }
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
