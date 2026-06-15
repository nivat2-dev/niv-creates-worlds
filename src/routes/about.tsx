import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import signatureAsset from "@/assets/niv-signature-v2.png.asset.json";
import nivIllustrationAsset from "@/assets/niv-portrait-v3.png.asset.json";

// Journey
import shenkar4 from "@/assets/wia-shenkar-4.jpg.asset.json";
import shenkar8 from "@/assets/wia-shenkar-8.jpg.asset.json";
import theatre1 from "@/assets/wia-theatre-1.jpg.asset.json";
import ngkSpread from "@/assets/ngk-spread.png.asset.json";
import azNivBook from "@/assets/az-niv-book.jpg.asset.json";
import ndCover from "@/assets/nd-cover.png.asset.json";

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
      <S02_Philosophy />
      <S03_Journey />
      <S04_Today />
      <Footer />
    </div>
  );
}

/* ─────────────── 01 Intro ─────────────── */

function S01_Intro() {
  const y = useScrollY();
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 right-[-6vw] font-serif italic text-ink/[0.03] leading-none select-none"
        style={{ fontSize: "30vw", transform: `translateY(${y * -0.06}px)` }}
      >
        about
      </div>

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 w-full pt-32 md:pt-36 pb-20 grid grid-cols-12 gap-x-8">
        <div aria-hidden className="hidden md:block col-start-2 col-span-1 relative">
          <div className="absolute left-0 top-1 bottom-0 w-px bg-ink/15" />
        </div>

        <div className="col-span-12 md:col-span-9 md:col-start-3">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-ink/50">
              01 · Introduction
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-12 md:mt-16 font-serif text-ink leading-[0.95] tracking-[-0.035em] text-[14vw] md:text-[7vw] lg:text-[6vw]">
              Niv <span className="italic text-turquoise-deep">Haviv.</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-10 md:mt-14 font-serif text-ink/80 leading-[1.5] tracking-[-0.01em] text-[20px] md:text-[24px] lg:text-[28px] max-w-[22ch]">
              Designer. Illustrator.{" "}
              <span className="italic text-turquoise-deep">Storyteller.</span>
            </p>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-8 text-ink/55 text-[14px] md:text-[15px] leading-[1.8] max-w-[42ch]">
              A short editorial portrait — read at your own pace.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 pointer-events-none">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-12 gap-x-8">
          <div className="hidden md:flex col-start-2 col-span-1 flex-col items-start gap-3 text-ink/40">
            <span className="block w-px h-14 bg-ink/25 scroll-cue" />
            <span className="font-mono text-[9px] uppercase tracking-[0.36em]">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 02 Philosophy ─────────────── */

function S02_Philosophy() {
  return (
    <section className="relative py-24 md:py-36 border-t border-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-12 gap-x-8">
        <div aria-hidden className="hidden md:block col-start-2 col-span-1 relative">
          <div className="absolute left-0 top-1 bottom-0 w-px bg-ink/15" />
        </div>

        <div className="col-span-12 md:col-span-9 md:col-start-3">
          <Reveal>
            <SectionLabel index="02" title="Philosophy" />
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-14 md:mt-20 font-serif text-ink leading-[1.25] tracking-[-0.02em] text-[26px] md:text-[36px] lg:text-[42px] max-w-[22ch]">
              Both hands —<br />
              one writes the brief,<br />
              the other draws what was{" "}
              <span className="italic text-turquoise-deep">missing from it.</span>
            </p>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">
              — A working belief
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 03 Journey ─────────────── */

function S03_Journey() {
  const milestones = [
    {
      year: "Beginnings",
      label: "Theatre",
      body: "First language was the stage — light, timing, the way a room holds its breath.",
      art: theatre1.url,
    },
    {
      year: "Shenkar",
      label: "Design Studies",
      body: "Formal training. Sketchbooks fill faster than coursework.",
      art: shenkar4.url,
    },
    {
      year: "Agency",
      label: "Advertising",
      body: "Learning to defend ideas, kill darlings, and ship on a Friday.",
      art: shenkar8.url,
    },
    {
      year: "Years",
      label: "National Geographic Kids",
      body: "Lead designer. Craft and curiosity, spread by spread.",
      art: ngkSpread.url,
    },
    {
      year: "Author",
      label: "Asaflezet",
      body: "Wrote and designed a children's book — first taste of long-form authorship.",
      art: azNivBook.url,
    },
    {
      year: "Now",
      label: "New Direction",
      body: "A graphic novel about choice and return.",
      art: ndCover.url,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-12 gap-x-8">
        <div aria-hidden className="hidden md:block col-start-2 col-span-1 relative">
          <div className="absolute left-0 top-1 bottom-0 w-px bg-ink/15" />
        </div>

        <div className="col-span-12 md:col-span-9 md:col-start-3">
          <Reveal><SectionLabel index="03" title="Journey" /></Reveal>

          <Reveal delay={120}>
            <h2 className="mt-10 md:mt-14 font-serif text-ink leading-[1.02] tracking-[-0.02em] text-[36px] md:text-[52px] lg:text-[60px] max-w-[14ch]">
              A path drawn{" "}
              <span className="italic text-turquoise-deep">by hand.</span>
            </h2>
          </Reveal>

          <ol className="mt-16 md:mt-20 relative">
            {/* vertical guide line */}
            <div className="absolute left-[10px] md:left-[12px] top-2 bottom-2 w-px bg-ink/15" />

            {milestones.map((m, i) => (
              <li key={m.label} className="relative pl-10 md:pl-14 py-6 md:py-7">
                <Reveal delay={i * 60} y={16}>
                  <span className="absolute left-0 top-[28px] md:top-[32px] flex items-center justify-center w-[22px] h-[22px] md:w-[25px] md:h-[25px] rounded-full bg-[#F5F5F3] ring-1 ring-ink/25">
                    <span className="block w-1.5 h-1.5 rounded-full bg-turquoise" />
                  </span>
                </Reveal>

                <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-start">
                  <Reveal className="col-span-12 md:col-span-7" delay={60}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">
                        0{i + 1} · {m.year}
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-ink leading-[1.1] tracking-[-0.015em] text-[22px] md:text-[28px]">
                      {m.label}
                    </h3>
                    <p className="mt-3 text-ink/65 text-[14px] md:text-[15px] leading-[1.7] max-w-[44ch]">
                      {m.body}
                    </p>
                  </Reveal>

                  <Reveal
                    className="hidden md:block md:col-span-4 md:col-start-9"
                    delay={120}
                    y={20}
                  >
                    <div className="relative max-w-[180px] ml-auto">
                      <div className="absolute -inset-2 bg-white shadow-[0_14px_30px_rgba(0,0,0,0.08)] -z-10" />
                      <img
                        src={m.art}
                        alt={m.label}
                        className="w-full h-auto block aspect-[4/5] object-cover"
                        draggable={false}
                      />
                    </div>
                  </Reveal>
                </div>
              </li>
            ))}
          </ol>
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
          <Reveal><SectionLabel index="04" title="Today" /></Reveal>

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
