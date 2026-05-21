import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description:
    "Full-stack developer crafting thoughtful digital experiences with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground font-sans relative">
        {/* Floating circles — persist across entire site */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="float-circle-1 absolute top-[8%] left-[5%] h-72 w-72 rounded-full border border-primary/10 bg-primary/[0.03]" />
          <div className="float-circle-2 absolute top-[50%] right-[8%] h-56 w-56 rounded-full border border-primary/[0.08] bg-primary/[0.04]" />
          <div className="float-circle-3 absolute top-[25%] right-[22%] h-40 w-40 rounded-full border border-primary/10 bg-primary/[0.05]" />
          <div className="float-circle-4 absolute bottom-[18%] left-[15%] h-48 w-48 rounded-full border border-primary/[0.08] bg-primary/[0.03]" />
          <div className="float-circle-5 absolute top-[5%] left-[42%] h-32 w-32 rounded-full border border-primary/10 bg-primary/[0.04]" />
          <div className="float-circle-1 absolute bottom-[35%] right-[30%] h-64 w-64 rounded-full border border-primary/[0.07] bg-primary/[0.03]" />
          <div className="float-circle-3 absolute top-[70%] left-[55%] h-44 w-44 rounded-full border border-primary/[0.09] bg-primary/[0.04]" />
          <div className="float-circle-2 absolute bottom-[8%] right-[12%] h-36 w-36 rounded-full border border-primary/10 bg-primary/[0.05]" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}