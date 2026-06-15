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

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.36em] text-ink/50">
      <span>{index}</span>
      <span className="inline-block w-8 h-px bg-ink/25" />
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
      className="fixed top-0 inset-x-0 z-50 border-b transition-colors"
      style={{
        background: solid
          ? "color-mix(in oklab, #F5F5F3 92%, transparent)"
          : "color-mix(in oklab, #F5F5F3 70%, transparent)",
        backdropFilter: "saturate(140%) blur(16px)",
        WebkitBackdropFilter: "saturate(140%) blur(16px)",
        borderColor: solid ? "rgba(0,0,0,0.10)" : "rgba(0,0,0,0.04)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 h-16 md:h-[68px] flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={signatureAsset.url} alt="Niv Haviv" className="h-8 md:h-9 w-auto" draggable={false} />
        </Link>
        <nav className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/75">
          <Link to="/" className="hover:text-ink transition-colors">Work</Link>
          <span className="text-ink relative">
            About
            <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-turquoise" />
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
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#F5F5F3", color: "var(--ink)" }}>
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
    <section className="relative pt-24 md:pt-32 pb-20 md:pb-28 border-b border-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-12 gap-x-8">
        <div aria-hidden className="hidden md:block col-start-2 col-span-1 relative">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-navy-deep/15" />
        </div>

        <div className="col-span-12 md:col-span-8 md:col-start-3">
          <Reveal>
            <p className="font-mono text-[11px] font-light uppercase tracking-[0.3em] text-navy-deep/60">
              01 INTRODUCTION
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 md:mt-10 font-serif font-bold text-navy-deep leading-[0.98] tracking-[-0.035em] text-[48px] md:text-[72px] lg:text-[84px]">
              About me<span className="text-turquoise">.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 md:mt-14 text-navy-deep text-[22px] md:text-[28px] lg:text-[32px] leading-[1.5] tracking-[-0.01em] max-w-[700px] space-y-6">
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

  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative py-20 md:py-28 border-t border-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-12 gap-x-8">
        <div aria-hidden className="hidden md:block col-start-2 col-span-1 relative">
          <div className="absolute left-0 top-1 bottom-0 w-px bg-ink/15" />
        </div>

        <div className="col-span-12 md:col-span-9 md:col-start-3">
          <Reveal><SectionLabel index="02" title="The road here" /></Reveal>

          <Reveal delay={120}>
            <h2 className="mt-8 md:mt-10 font-serif text-ink leading-[1.02] tracking-[-0.02em] text-[36px] md:text-[52px] lg:text-[60px] max-w-[14ch]">
              How I got{" "}
              <span className="italic text-turquoise-deep">here.</span>
            </h2>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-12 gap-x-10">
            {/* Left: narrative */}
            <ol className="col-span-12 md:col-span-6">
              {chapters.map((c, i) => (
                <li
                  key={c.label}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  data-idx={i}
                  className="py-12 md:py-16 first:pt-0"
                >
                  <div
                    className="transition-opacity duration-500"
                    style={{ opacity: active === i ? 1 : 0.35 }}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 font-serif text-ink leading-[1.05] tracking-[-0.02em] text-[28px] md:text-[36px]">
                      {c.label}
                      <span className="text-turquoise">.</span>
                    </h3>
                    <p className="mt-4 text-ink/75 text-[15px] md:text-[16px] leading-[1.7] max-w-[42ch]">
                      {c.body}
                    </p>
                  </div>
                  {/* Mobile image */}
                  <div className="md:hidden mt-6">
                    <img
                      src={c.art}
                      alt={c.label}
                      className="w-full h-auto aspect-[4/5] object-cover"
                      draggable={false}
                    />
                  </div>
                </li>
              ))}
            </ol>

            {/* Right: sticky image */}
            <div className="hidden md:block md:col-span-6">
              <div className="sticky top-28">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/5">
                  {chapters.map((c, i) => (
                    <img
                      key={c.label}
                      src={c.art}
                      alt={c.label}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out"
                      style={{ opacity: active === i ? 1 : 0 }}
                      draggable={false}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">
                  <span>{chapters[active].label}</span>
                  <span>
                    {String(active + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 04 Today ─────────────── */

function S04_Today() {
  return (
    <section className="relative py-28 md:py-40 border-t border-ink/10 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif italic text-ink/[0.03] leading-none select-none"
        style={{ fontSize: "26vw" }}
      >
        today
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-12 gap-x-8">
        <div aria-hidden className="hidden md:block col-start-2 col-span-1 relative">
          <div className="absolute left-0 top-1 bottom-0 w-px bg-ink/15" />
        </div>

        <div className="col-span-12 md:col-span-9 md:col-start-3">
          <Reveal><SectionLabel index="03" title="Today" /></Reveal>

          <Reveal delay={150}>
            <p className="mt-10 md:mt-14 font-serif text-ink leading-[1.15] tracking-[-0.02em] text-[30px] md:text-[44px] lg:text-[52px] max-w-[22ch]">
              I help brands tell stories through design — while building{" "}
              <span className="italic text-turquoise-deep">stories of my own.</span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/"
                className="group inline-flex items-center gap-4 bg-ink text-[#F5F5F3] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.28em] hover:bg-turquoise-deep transition-colors"
              >
                <span>View my work</span>
                <span>→</span>
              </Link>
              <a
                href="mailto:nivat2@gmail.com"
                className="group inline-flex items-center gap-4 border border-ink/30 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.28em] text-ink hover:border-turquoise-deep hover:text-turquoise-deep transition-colors"
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
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
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
