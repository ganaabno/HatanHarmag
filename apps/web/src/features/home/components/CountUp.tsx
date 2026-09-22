import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Values like "60,000" or "40+" animate; anything else ("7/10") renders as-is. */
const NUMERIC = /^([\d,]+)(\D*)$/;

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const match = NUMERIC.exec(value);
  const target = match ? Number(match[1].replace(/,/g, "")) : null;
  const suffix = match?.[2] ?? "";
  const animatable = target !== null && Number.isFinite(target) && !reduceMotion;

  useEffect(() => {
    if (!animatable || !inView) return;

    const duration = 1100;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo — fast out of the gate, settles on the final figure
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(target * eased).toLocaleString("en-US") + suffix);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animatable, inView, target, suffix]);

  // Server and pre-animation render show the final value, so the figure is
  // never missing or wrong when JS is slow or disabled.
  return <span ref={ref} className="stat__value">{animatable && inView ? display : value}</span>;
}
