"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { orbitTech } from "@/lib/data";

const ringsDesktop = [
  { radius: 150, count: 7, duration: 34, reverse: false },
  { radius: 210, count: 9, duration: 48, reverse: true },
  { radius: 270, count: 11, duration: 62, reverse: false },
];

const ringsMobile = [
  { radius: 95, count: 7, duration: 34, reverse: false },
  { radius: 135, count: 9, duration: 48, reverse: true },
  { radius: 175, count: 11, duration: 62, reverse: false },
];

function splitIntoRings(rings) {
  const result = [];
  let index = 0;
  rings.forEach((ring) => {
    const items = [];
    for (let i = 0; i < ring.count && index < orbitTech.length; i++) {
      items.push(orbitTech[index]);
      index += 1;
    }
    result.push({ ...ring, items });
  });
  while (index < orbitTech.length) {
    result[result.length - 1].items.push(orbitTech[index]);
    index += 1;
  }
  return result;
}

export default function TechOrbit() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentRings = isMobile ? ringsMobile : ringsDesktop;
  const ringData = splitIntoRings(currentRings);

  return (
    <div className="relative mx-auto flex h-[370px] w-[370px] items-center justify-center aspect-square sm:h-[550px] sm:w-[550px] lg:h-[580px] lg:w-[580px] overflow-visible max-w-full">
      {/* Background Ring Circles */}
      {ringData.map((ring, ringIndex) => (
        <div
          key={ringIndex}
          className="absolute rounded-full border border-white/10 pointer-events-none"
          style={{ width: ring.radius * 2, height: ring.radius * 2 }}
        />
      ))}

      {/* Center profile image (z-10 layer) - Prominent enlarged size */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-indigo to-accent-violet p-[4px] shadow-glow sm:h-52 sm:w-52"
      >
        <div className="relative h-full w-full overflow-hidden rounded-full bg-base-900 shadow-2xl">
          <img
            src="/images/profile.png"
            alt="Muhammad Adeel"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Orbiting skill badges (z-30 layer - ALWAYS in front of profile photo) */}
      {ringData.map((ring, ringIndex) => (
        <motion.div
          key={`orbit-${ringIndex}`}
          className="absolute z-30 pointer-events-none"
          style={{ width: ring.radius * 2, height: ring.radius * 2 }}
          animate={{ rotate: ring.reverse ? -360 : 360 }}
          transition={{
            duration: ring.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {ring.items.map((tech, i) => {
            const angle = (360 / ring.items.length) * i;
            const rad = (angle * Math.PI) / 180;
            const x = ring.radius * Math.cos(rad) + ring.radius;
            const y = ring.radius * Math.sin(rad) + ring.radius;
            return (
              <motion.div
                key={tech}
                className="absolute pointer-events-auto"
                style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                animate={{ rotate: ring.reverse ? 360 : -360 }}
                transition={{
                  duration: ring.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="whitespace-nowrap rounded-full border border-white/15 bg-base-950/90 px-2 py-0.5 font-mono text-[9px] font-medium text-white/90 shadow-lg backdrop-blur-md sm:px-2.5 sm:py-1 sm:text-[11px]">
                  {tech}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}


