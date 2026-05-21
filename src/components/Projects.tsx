"use client";

import Image from "next/image";
import { ExternalLink, Folder } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import SectionReveal from "./SectionReveal";
import projects from "@/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <Folder className="text-primary" size={20} />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Projects
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Things I&apos;ve{" "}
            <span className="text-primary">built</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            A collection of projects that showcase my skills and passion for
            building impactful web applications.
          </p>
        </SectionReveal>

        {/* Featured projects */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <SectionReveal key={project.id} delay={i * 150}>
                <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                  {/* Project image */}
                  <div className="relative h-52 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                        <span className="text-6xl font-extrabold text-primary/20 select-none">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                    {/* Overlay links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface/80 backdrop-blur-sm text-foreground transition-colors hover:bg-primary hover:text-white"
                          aria-label={`${project.title} source code`}
                        >
                          <GitHubIcon size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface/80 backdrop-blur-sm text-foreground transition-colors hover:bg-primary hover:text-white"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
        </div>

        {/* Other projects */}
        {projects.filter((p) => !p.featured).length > 0 && (
          <>
            <SectionReveal delay={300}>
              <h3 className="mt-16 text-xl font-semibold text-foreground">
                Other Projects
              </h3>
            </SectionReveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => !p.featured)
                .map((project, i) => (
                  <SectionReveal key={project.id} delay={350 + i * 100}>
                    <div className="group h-full flex flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                      <div className="flex items-start justify-between">
                        <Folder size={20} className="text-primary" />
                        <div className="flex gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted transition-colors hover:text-primary"
                              aria-label={`${project.title} source code`}
                            >
                              <GitHubIcon size={18} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted transition-colors hover:text-primary"
                              aria-label={`${project.title} live demo`}
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                      <h4 className="mt-3 font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted flex-1">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs text-muted">
                            {tag}
                            {project.tags.indexOf(tag) < Math.min(project.tags.length, 3) - 1 && " ·"}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SectionReveal>
                ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}