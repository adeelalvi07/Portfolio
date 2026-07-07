import { profile } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-xs text-white/40 sm:text-left">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          React and modern web technologies.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-white/40 transition-colors hover:text-white"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
