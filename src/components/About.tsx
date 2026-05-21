"use client";

import { User, Code2, Briefcase, GraduationCap } from "lucide-react";
import SectionReveal from "./SectionReveal";
import profile from "@/data/profile.json";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code that scales.",
  },
  {
    icon: Briefcase,
    title: "Full Stack",
    description: "End-to-end development from database to deployment.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <User className="text-primary" size={20} />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              About Me
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Turning ideas into
            <span className="text-primary"> reality</span>
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <SectionReveal delay={100}>
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-muted">
                {profile.bioFirst}
              </p>
              <p className="text-lg leading-relaxed text-muted">
                {profile.bioSecond}
              </p>
              <a
                href={profile.resumeUrl} target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white"
              >
                Download Resume
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-6">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group flex gap-4 rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}