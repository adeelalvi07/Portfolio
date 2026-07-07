"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFine || reduceMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    function move(e) {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    }

    function over(e) {
      const target = e.target.closest(
        "a, button, [data-magnetic], input, textarea, [role='button']"
      );
      setHovering(Boolean(target));
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] mix-blend-difference"
      style={{ x, y }}
    >
      <motion.div
        animate={{
          scale: hovering ? 2.2 : 1,
          opacity: hovering ? 0.8 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="h-5 w-5 rounded-full bg-white"
      />
    </motion.div>
  );
}
