"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "@/components/MagneticButton";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Featured Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
        theme === "dark"
          ? "border-white/10 bg-white/6 text-white/70 hover:bg-white/10 hover:text-white"
          : "border-black/10 bg-black/5 text-slate-600 hover:bg-black/10 hover:text-slate-900"
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={16} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={16} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { theme } = useTheme();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinkClass = (href) =>
    `relative rounded-full px-3.5 py-2 text-sm transition-colors ${
      active === href
        ? theme === "dark"
          ? "text-white"
          : "text-slate-900"
        : theme === "dark"
        ? "text-white/60 hover:text-white"
        : "text-slate-500 hover:text-slate-900"
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full max-w-full px-3 pt-3 sm:px-4 sm:pt-4"
      >
        <div
          className={`mx-auto flex w-full max-w-[1360px] items-center justify-between rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-glow" : "bg-transparent"
          }`}
        >
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight"
          >
            M <span className="text-gradient">Adeel</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass(link.href)}>
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 -z-10 rounded-full ring-1 ${
                      theme === "dark"
                        ? "bg-white/8 ring-white/10"
                        : "bg-black/5 ring-black/8"
                    }`}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-4 py-2 text-sm font-medium text-white shadow-glow"
            >
              <FileText size={15} />
              Resume
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              className="rounded-full p-2 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[100] flex flex-col px-6 py-6 backdrop-blur-xl lg:hidden ${
              theme === "dark"
                ? "bg-base-950/98"
                : "bg-white/97"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg">
                M<span className="text-gradient">Adeel</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full p-2"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="mt-12 flex flex-1 flex-col gap-2" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`border-b py-4 font-display text-2xl ${
                    theme === "dark"
                      ? "border-white/5 text-white/80"
                      : "border-black/5 text-slate-800"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-5 py-3 text-center font-medium text-white"
              >
                <FileText size={16} /> Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
