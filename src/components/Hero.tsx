"use client";

import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import profile from "@/data/profile.json";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for work
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-foreground">
            {profile.heroHeading.split("\n")[0]}
          </span>
          <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            {profile.heroHeading.split("\n")[1]}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted leading-relaxed">
          {profile.heroDescription}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-surface-hover hover:border-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-border text-muted transition-all duration-200 hover:text-primary hover:border-primary/40 hover:bg-primary/5"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-border text-muted transition-all duration-200 hover:text-primary hover:border-primary/40 hover:bg-primary/5"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href={profile.socialLinks.email}
            className="p-2.5 rounded-full border border-border text-muted transition-all duration-200 hover:text-primary hover:border-primary/40 hover:bg-primary/5"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}