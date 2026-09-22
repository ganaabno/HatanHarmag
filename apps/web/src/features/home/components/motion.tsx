import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Soft upward fade for below-the-fold sections, disabled for reduced-motion users.
 *
 * Above-the-fold content must NOT use this: motion serialises `opacity: 0` into
 * the SSR markup, so a scroll-triggered reveal leaves the first screen blank
 * until hydration. The hero uses the CSS `.rise` animation instead.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
