"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, Check } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";

const contactLinks = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Github, label: "GitHub", value: "adeelalvi07", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", value: "muhammadadeelroshaan", href: profile.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <section id="contact" className="relative px-6 py-28 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Let&apos;s build something intelligent together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-xl text-sm text-white/55"
        >
          Open to internships, freelance AI projects, and full-time roles.
          Reach out and I&apos;ll get back to you soon.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 glass rounded-2xl p-5"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent-blue/15 text-accent-blue">
                  <item.icon size={17} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm text-white/80">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass space-y-5 rounded-2xl p-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs text-white/50">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent-blue/50"
                  placeholder="M Adeel"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-white/50">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent-blue/50"
                  placeholder="example@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-white/50">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent-blue/50"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <MagneticButton
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-blue to-accent-violet px-6 py-3.5 text-sm font-medium text-white shadow-glow sm:w-auto"
            >
              {sent ? (
                <>
                  <Check size={16} /> Opening your mail app…
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
