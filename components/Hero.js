"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, typingRoles } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";
import TechOrbit from "@/components/TechOrbit";

function useTypingEffect(words, { typingSpeed = 65, deletingSpeed = 35, pause = 1400 } = {}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingEffect(typingRoles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-12"
    >
      <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow mb-5"
          >
            Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Artificial Intelligence
            <br />
            Undergraduate <span className="text-gradient">Building</span>
            <br />
            Intelligent AI Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex h-8 items-center font-mono text-base text-white/60 sm:text-lg"
          >
            <span className="mr-2 text-accent-cyan">{`>`}</span>
            {typed}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-accent-cyan" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60"
          >
            I design and ship end-to-end AI products — from disease-prediction
            platforms to real-time computer vision pipelines and
            retrieval-augmented chatbots — for real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href="#work"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-6 py-3.5 text-sm font-medium text-white shadow-glow"
            >
              View Featured Work <ArrowRight size={16} />
            </MagneticButton>

            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-white"
            >
              <Download size={16} /> Download Resume
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-accent-blue/40 px-6 py-3.5 text-sm font-medium text-white/90 hover:bg-accent-blue/10"
            >
              Hire Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticButton
                key={label}
                as="a"
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-white/70 hover:text-white"
              >
                <Icon size={18} />
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center"
        >
          <TechOrbit />
        </motion.div>
      </div>
    </section>
  );
}
