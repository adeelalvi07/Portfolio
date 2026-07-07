"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const gradients = [
  "from-accent-blue/25 via-accent-indigo/15 to-transparent",
  "from-accent-violet/25 via-accent-indigo/15 to-transparent",
  "from-accent-cyan/20 via-accent-blue/15 to-transparent",
];

export default function FeaturedWork() {
  return (
    <section id="work" className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          Featured Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Projects that put AI into practice
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl glass p-7 transition-shadow hover:shadow-glow ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  gradients[i % gradients.length]
                }`}
              />
              <div className="relative flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-accent-cyan/80">
                    {project.subtitle}
                  </p>
                </div>
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors group-hover:border-white/30 group-hover:text-white">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-white/60">
                {project.description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 flex items-center gap-2 text-xs font-medium text-white/50">
                <Github size={14} /> View on GitHub
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
