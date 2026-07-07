"use client";

import { motion } from "framer-motion";
import { orbitTech } from "@/lib/data";

const rings = [
  { radius: 140, count: 7, duration: 34, reverse: false },
  { radius: 210, count: 9, duration: 48, reverse: true },
  { radius: 280, count: 11, duration: 62, reverse: false },
];

function splitIntoRings() {
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
  // append leftovers to last ring
  while (index < orbitTech.length) {
    result[result.length - 1].items.push(orbitTech[index]);
    index += 1;
  }
  return result;
}

export default function TechOrbit() {
  const ringData = splitIntoRings();

  return (
    <div className="relative mx-auto flex h-[560px] w-[560px] max-w-full scale-[0.65] items-center justify-center sm:scale-90 lg:h-[620px] lg:w-[620px] lg:scale-100">
      {/* Rings */}
      {ringData.map((ring, ringIndex) => (
        <div
          key={ringIndex}
          className="absolute rounded-full border border-white/[0.07]"
          style={{ width: ring.radius * 2, height: ring.radius * 2 }}
        />
      ))}

      {/* Center profile */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-indigo to-accent-violet p-[4px] shadow-glow sm:h-52 sm:w-52"
      >
        <div className="relative h-full w-full overflow-hidden rounded-full bg-base-900">
          <img
            src="/images/profile.png"
            alt="Muhammad Adeel"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {ringData.map((ring, ringIndex) => (
        <motion.div
          key={`orbit-${ringIndex}`}
          className="absolute"
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
                className="absolute"
                style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                animate={{ rotate: ring.reverse ? 360 : -360 }}
                transition={{
                  duration: ring.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-white/70 backdrop-blur-sm sm:text-[11px]">
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
