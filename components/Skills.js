"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Sparkles, Code2, Cpu, Server, Layout, Database, Wrench, Compass, Filter } from "lucide-react";

const categoryIcons = {
  Languages: Code2,
  "AI / ML": Cpu,
  Backend: Server,
  Frontend: Layout,
  Databases: Database,
  "AI Automation": Wrench,
  Tools: Wrench,
  "Currently Exploring": Compass,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...skillGroups.map((g) => g.category)];

  const filteredGroups =
    selectedCategory === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.category === selectedCategory);

  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-eyebrow"
            >
              Interactive Skills Toolkit
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Technologies & Production Stack
            </motion.h2>
          </div>

          <p className="text-xs text-white/50 font-mono flex items-center gap-1.5">
            <Filter size={14} className="text-accent-cyan" /> Click category to filter
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  active
                    ? "text-white shadow-glow"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="skills-tab"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Interactive Skill Cards Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group) => {
              const IconComponent = categoryIcons[group.category] || Cpu;
              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative flex flex-col justify-between rounded-2xl p-6 transition-all hover:border-accent-cyan/40 hover:shadow-glow ${
                    group.highlight
                      ? "glass border-accent-violet/30 bg-gradient-to-b from-accent-violet/15 via-accent-violet/5 to-transparent"
                      : "glass"
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-accent-cyan group-hover:bg-accent-cyan/20 group-hover:text-white transition-colors">
                          <IconComponent size={16} />
                        </span>
                        <h3 className="font-display text-sm font-semibold text-white">
                          {group.category}
                        </h3>
                      </div>
                      {group.highlight && (
                        <span className="flex items-center gap-1 rounded-full bg-accent-violet/20 px-2 py-0.5 text-[10px] text-accent-violet">
                          <Sparkles size={12} /> Active
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="group/chip relative rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80 transition-all hover:border-accent-blue/50 hover:bg-accent-blue/10 hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 border-t border-white/5 pt-3 text-[11px] font-mono text-white/40 group-hover:text-accent-cyan transition-colors">
                    {group.items.length} Tech Stack Modules
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
