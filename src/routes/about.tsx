import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import signatureAsset from "@/assets/niv-signature-v2.png.asset.json";
import nivIllustrationAsset from "@/assets/niv-portrait-v3.png.asset.json";

// Journey
import shenkar4 from "@/assets/wia-shenkar-4.jpg.asset.json";
import theatre1 from "@/assets/wia-theatre-1.jpg.asset.json";
import ngkSpread from "@/assets/ngk-spread.png.asset.json";
import ndCover from "@/assets/nd-cover.png.asset.json";
import eilatChildhood from "@/assets/wia-eilat-childhood.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Niv Haviv" },
      {
        name: "description",
        content:
          "Niv Haviv — designer, illustrator, storyteller. From theatre to National Geographic Kids to New Direction.",
      },
      { property: "og:title", content: "About — Niv Haviv" },
      {
        property: "og:description",
        content:
          "From theatre to publishing to graphic novels — a short editorial portrait of Niv Haviv.",
      },
      { property: "og:image", content: nivIllustrationAsset.url },
    ],
  }),
  component: AboutPage,
});

/* ─────────────── primitives ─────────────── */

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return y;
}

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity .9s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-turquoise" />
      <span>{title}</span>
    </div>
  );
}

/* ─────────────── nav ─────────────── */

function MiniNav() {
  const y = useScrollY();
  const solid = y > 40;
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "bg-paper/90 backdrop-blur-md border-b border-ink/10" : "bg-paper/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={signatureAsset.url} alt="Niv Haviv" className="h-10 md:h-12 w-auto" draggable={false} />
        </Link>
        <nav className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60">
          <Link to="/" className="hover:text-ink transition-colors">Work</Link>
          <span className="text-ink relative">
            About
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-turquoise" />
          </span>
        </nav>
      </div>
    </header>
  );
}

function ScrollProgress() {
  const y = useScrollY();
  const [h, setH] = useState(1);
  useEffect(() => {
    const calc = () => setH(document.documentElement.scrollHeight - window.innerHeight);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  const p = Math.min(1, Math.max(0, y / h));
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[55] pointer-events-none">
      <div className="h-full bg-turquoise origin-left" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}

/* ─────────────── page ─────────────── */

function AboutPage() {
  return (
    <div className="page-fade-in min-h-screen overflow-x-hidden bg-paper text-ink">
      <MiniNav />
      <ScrollProgress />
      <S01_Intro />
      <S03_Journey />
      <S04_Today />
      <Footer />
    </div>
  );
}

/* ─────────────── 01 Intro ─────────────── */

function S01_Intro() {
  return (
    <section className="relative pt-20 md:pt-28 pb-14 md:pb-20 border-b border-ink/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-x-8">
        <div aria-hidden className="hidden md:block col-start-2 col-span-1 relative">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-ink/15" />
        </div>

        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <Reveal>
            <p className="font-mono type-label text-ink-muted">
              01 INTRODUCTION
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 md:mt-10 font-serif text-ink leading-[1.0] tracking-[-0.02em] type-display">
              About me<span className="text-turquoise">.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 md:mt-14 text-ink-muted type-body-lg max-w-[700px] space-y-6">
              <p>
                I'm a designer, illustrator and storyteller based in Tel Aviv. My path has taken me through theatre, advertising agencies, editorial publishing and book creation, eventually leading me to author and illustrate original stories of my own.
              </p>
              <p>
                Today I create visual identities, editorial experiences and long-form narrative projects, including my graphic novel New Direction.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}





/* ─────────────── 03 Journey ─────────────── */

function S03_Journey() {
  const chapters = [
    {
      label: "Eilat",
      body: "I grew up in Israel's southernmost city, spending as much time drawing as I did performing.",
      art: eilatChildhood.url,
    },
    {
      label: "Theatre",
      body: "Years on stage taught me timing, emotion and storytelling long before I worked as a designer.",
      art: theatre1.url,
    },
    {
      label: "Design",
      body: "I later moved into visual communication, learning how ideas become experiences.",
      art: shenkar4.url,
    },
    {
      label: "Editorial",
      body: "As lead designer at National Geographic Kids, I spent years turning curiosity into pages, stories and visual worlds.",
      art: ngkSpread.url,
    },
    {
      label: "Stories of my own",
      body: "Today, alongside client work, I write and illustrate original books and graphic novels, including New Direction.",
      art: ndCover.url,
    },
  ];

  return (
    <section className="relative pt-16 md:pt-20 pb-8 md:pb-10 border-t border-ink/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-x-8">
        <div aria-hidden className="hidden md:block col-start-2 col-span-1 relative">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-ink/15" />
        </div>

        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <Reveal>
            <p className="font-mono type-label text-ink-muted">
              02 THE ROAD HERE
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-8 md:mt-10 font-serif text-ink leading-[1.0] tracking-[-0.02em] type-display">
              The journey<br />so far<span className="text-turquoise">.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-20 md:mt-28 space-y-24 md:space-y-36">
        {chapters.map((c, i) => {
          const reverse = i % 2 === 1;
          return (
            <Reveal key={c.label}>
              <article className="grid grid-cols-12 gap-x-8 items-center">
                <div
                  className={`col-span-12 md:col-span-7 ${
                    reverse ? "md:col-start-1 md:order-1" : "md:col-start-6 md:order-2"
                  }`}
                >
                  <img
                    src={c.art}
                    alt={c.label}
                    className="w-full aspect-[4/3] object-cover bg-ink/5"
                    draggable={false}
                  />
                </div>
                <div
                  className={`col-span-12 md:col-span-4 mt-8 md:mt-0 ${
                    reverse ? "md:col-start-9 md:order-2" : "md:col-start-2 md:order-1"
                  }`}
                >
                  <p className="font-mono type-label text-ink-muted">
                    Chapter 0{i + 1}
                  </p>
                  <h3 className="mt-5 font-serif text-ink leading-[1.1] tracking-[-0.015em] type-h1">
                    {c.label}
                    <span className="text-turquoise">.</span>
                  </h3>
                  <p className="mt-6 type-body-lg text-ink-muted">
                    {c.body}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────────── 04 Today ─────────────── */

function S04_Today() {
  return (
    <section className="relative pt-16 md:pt-24 pb-16 md:pb-24 border-t border-ink/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-x-8">
        <div aria-hidden className="hidden md:block col-start-2 col-span-1 relative">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-ink/15" />
        </div>

        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <Reveal>
            <p className="font-mono type-label text-ink-muted">
              03 TODAY
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-8 md:mt-10 font-serif text-ink leading-[1.0] tracking-[-0.02em] type-display">
              Where I am<br />now<span className="text-turquoise">.</span>
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-10 md:mt-14 text-ink-muted type-body-lg max-w-[700px]">
              I help brands tell stories through design — while building{" "}
              <span className="italic text-turquoise-deep">stories of my own.</span>
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-12 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/"
                className="group inline-flex items-center gap-4 bg-ink text-paper px-7 py-4 font-mono text-[11px] uppercase tracking-[0.3em] hover:bg-turquoise-deep transition-colors"
              >
                <span>View my work</span>
                <span>→</span>
              </Link>
              <a
                href="mailto:nivat2@gmail.com"
                className="group inline-flex items-center gap-4 border border-ink/30 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ink hover:border-turquoise-deep hover:text-turquoise-deep transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-turquoise opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-turquoise" />
                </span>
                <span>Contact me</span>
                <span>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── footer ─────────────── */

function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={signatureAsset.url} alt="Niv Haviv" className="h-8 w-auto opacity-80" draggable={false} />
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">
          © {new Date().getFullYear()} Niv Haviv · Designer · Illustrator · Storyteller
        </p>
        <Link
          to="/"
          className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink hover:text-turquoise-deep transition-colors"
        >
          ← Back to work
        </Link>
      </div>
    </footer>
  );
}
