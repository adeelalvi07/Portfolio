"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function MagneticButton({
  children,
  className,
  as = "button",
  strength = 22,
  ...props
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({
      x: (relX / rect.width) * strength,
      y: (relY / rect.height) * strength,
    });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const Component = motion[as] || motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={clsx(className, "data-magnetic")}
      {...props}
    >
      {children}
    </Component>
  );
}
