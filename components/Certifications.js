"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1360px]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          Certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Continuous, focused learning
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.08 }}
              className="flex items-start gap-4 glass rounded-2xl p-6"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 text-accent-cyan">
                <Award size={18} />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold leading-snug text-white">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-xs text-white/50">{cert.issuer}</p>
                <p className="mt-0.5 font-mono text-[11px] text-accent-cyan/70">
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
