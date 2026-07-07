"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section className="relative px-6 py-20 lg:px-12" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          Journey
        </motion.p>
        <motion.h2
          id="timeline-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          From coursework to shipped systems
        </motion.h2>

        <div className="relative mt-16 ml-3 border-l border-white/10 pl-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-base-950 ring-2 ring-accent-blue">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
              </span>
              <span className="font-mono text-xs tracking-wider text-accent-cyan">
                {item.year}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-white/45">{item.org}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
