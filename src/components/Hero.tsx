"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import profile from "@/data/profile.json";

function useTypingEffect(text: string, speed = 70, startDelay = 400) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function Hero() {
  const line1 = profile.heroHeading.split("\n")[0];
  const line2 = profile.heroHeading.split("\n")[1];

  const first = useTypingEffect(line1, 65, 300);
  const second = useTypingEffect(line2, 65, 300 + line1.length * 65 + 200);

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
          <span className="block text-foreground min-h-[1.2em]">
            {first.displayed}
            {!first.done && (
              <span className="inline-block w-[3px] translate-y-[2px] animate-pulse bg-foreground ml-0.5" style={{ height: "0.85em" }} />
            )}
          </span>
          <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent min-h-[1.2em]">
            {second.displayed || first.done ? second.displayed : ""}
            {first.done && !second.done && second.displayed !== undefined && (
              <span className="inline-block w-[3px] translate-y-[2px] animate-pulse bg-primary ml-0.5" style={{ height: "0.85em" }} />
            )}
            {second.done && (
              <span className="inline-block w-[3px] translate-y-[2px] ml-0.5 bg-primary animate-pulse" style={{ height: "0.85em" }} />
            )}
          </span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-xl text-lg text-muted leading-relaxed transition-all duration-500"
          style={{
            opacity: second.done ? 1 : 0,
            transform: second.done ? "translateY(0)" : "translateY(8px)",
          }}
        >
          {profile.heroDescription}
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500"
          style={{
            opacity: second.done ? 1 : 0,
            transform: second.done ? "translateY(0)" : "translateY(8px)",
          }}
        >
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
        <div
          className="mt-10 flex items-center justify-center gap-5 transition-all duration-500"
          style={{
            opacity: second.done ? 1 : 0,
            transform: second.done ? "translateY(0)" : "translateY(8px)",
          }}
        >
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