"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Where I&apos;ve applied what I&apos;ve learned
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent-blue/15 text-accent-blue">
                      <Briefcase size={16} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {job.role}
                      </h3>
                      <p className="text-sm text-white/60">{job.org}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-xs text-white/45">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {job.location}
                    </span>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2.5 text-sm leading-relaxed text-white/60"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass rounded-2xl p-7"
          >
            <h3 className="font-display text-lg font-semibold text-white">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-white/60">{education.school}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs text-white/45">
              <span className="flex items-center gap-1">
                <Calendar size={12} /> {education.period}
              </span>
              <span>CGPA: {education.cgpa}</span>
            </div>
            <p className="mt-5 text-xs uppercase tracking-wider text-white/40">
              Relevant Coursework
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
