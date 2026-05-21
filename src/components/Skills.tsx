"use client";

import { Wrench } from "lucide-react";
import SectionReveal from "./SectionReveal";
import skillsData from "@/data/skills.json";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-700 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="text-primary" size={20} />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Skills
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Technologies I{" "}
            <span className="text-primary">work with</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Tools and technologies I use regularly to bring projects to life.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skillsData.categories.map((category, i) => (
            <SectionReveal key={category.id} delay={i * 150}>
              <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  {category.label}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}