"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight, Cpu, Zap, Activity } from "lucide-react";
import { projects } from "@/lib/data";

const gradients = [
  "from-accent-blue/25 via-accent-indigo/15 to-transparent",
  "from-accent-violet/25 via-accent-indigo/15 to-transparent",
  "from-accent-cyan/20 via-accent-blue/15 to-transparent",
];

export default function FeaturedWork() {
  return (
    <section id="work" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
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
          Projects putting AI & ML into production
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.06 }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl glass p-6 transition-all hover:shadow-glow hover:border-white/20 ${
                project.featured ? "border-accent-blue/30 bg-white/[0.04]" : ""
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  gradients[i % gradients.length]
                }`}
              />

              <div>
                {/* Project Screenshot Banner */}
                {project.image && (
                  <div className="relative mb-5 h-44 w-full overflow-hidden rounded-2xl border border-white/10 bg-base-950/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-transparent to-transparent opacity-60" />
                  </div>
                )}

                <div className="relative flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-accent-cyan/80 font-mono">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors group-hover:border-white/30 group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <p className="relative mt-3 text-sm leading-relaxed text-white/65 line-clamp-3">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="relative mt-4 grid grid-cols-2 gap-2 rounded-xl bg-base-950/60 p-2.5 border border-white/5 font-mono text-[11px]">
                    <div className="flex items-center gap-1.5 text-accent-cyan">
                      <Zap size={13} />
                      <span className="text-white/50">Speed:</span> {project.metrics.latency}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/70">
                      <Cpu size={13} className="text-accent-blue" />
                      <span className="text-white/40">Arch:</span> {project.metrics.architecture}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="relative mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <Github size={14} /> View Code on GitHub
                  </span>
                  <span className="text-[11px] text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

