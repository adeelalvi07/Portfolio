"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Sparkles } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          A toolkit for building end-to-end AI
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.06 }}
              className={`rounded-2xl p-6 transition-colors ${
                group.highlight
                  ? "glass border-accent-violet/30 bg-gradient-to-b from-accent-violet/10 to-transparent"
                  : "glass"
              }`}
            >
              <div className="mb-4 flex items-center gap-2">
                {group.highlight && (
                  <Sparkles size={14} className="text-accent-violet" />
                )}
                <h3 className="font-display text-sm font-semibold text-white">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
