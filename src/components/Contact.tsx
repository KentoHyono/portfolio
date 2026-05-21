"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import SectionReveal from "./SectionReveal";
import profile from "@/data/profile.json";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission
    setTimeout(() => {
      setStatus("sent");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-2">
            <Mail className="text-primary" size={20} />
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Contact
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&apos;s{" "}
            <span className="text-primary">connect</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Have a project in mind or just want to say hello? I&apos;d love to hear
            from you.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <SectionReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-sm text-muted">
                    {profile.socialLinks.email.replace("mailto:", "")}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="mt-1 text-sm text-muted">
                    Available worldwide &middot; Remote
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground">
                  Prefer a quick chat?
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Feel free to reach out on social media or send me an email
                  directly. I typically respond within 24 hours.
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    GitHub
                  </a>
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}