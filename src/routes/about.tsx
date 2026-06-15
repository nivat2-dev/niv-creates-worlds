import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import signatureAsset from "@/assets/niv-signature-v2.png.asset.json";
import nivIllustrationAsset from "@/assets/niv-portrait-v3.png.asset.json";
import necklace from "@/assets/necklace.png";

// New Direction world
import ndArieh from "@/assets/nd-arieh-roy-circle.png.asset.json";
import ndKiss from "@/assets/nd-kiss.png.asset.json";
import ndJerusalem from "@/assets/nd-jerusalem-walk.png.asset.json";
import ndBeach from "@/assets/nd-beach-scene.png.asset.json";
import ndPages from "@/assets/nd-pages-collage-v2.png.asset.json";
import ndBookMockup from "@/assets/nd-book-mockup-v2.png.asset.json";
import ndCover from "@/assets/nd-cover.png.asset.json";
import ndPalette from "@/assets/nd-palette.png.asset.json";
import ndPoster from "@/assets/nd-poster.png.asset.json";
import ndSpark from "@/assets/nd-spark-coral.png.asset.json";
import ndSparkOlive from "@/assets/nd-spark-olive.png.asset.json";
import ndDiamond from "@/assets/nd-diamond-teal.png.asset.json";
import ndDiamondGreen from "@/assets/nd-diamond-green.png.asset.json";
import ndStar from "@/assets/nd-star-cream.png.asset.json";
import ndCircleNavy from "@/assets/nd-circle-navy.png.asset.json";

// WIA / history
import sketches1 from "@/assets/wia-sketches-1.png.asset.json";
import shenkar3 from "@/assets/wia-shenkar-3.png.asset.json";
import shenkar4 from "@/assets/wia-shenkar-4.jpg.asset.json";
import shenkar8 from "@/assets/wia-shenkar-8.jpg.asset.json";
import theatre1 from "@/assets/wia-theatre-1.jpg.asset.json";
import theatre2 from "@/assets/wia-theatre-2.jpg.asset.json";
import eilatChildhood from "@/assets/wia-eilat-childhood.jpg.asset.json";

// Projects
import ngkSpread from "@/assets/ngk-spread.png.asset.json";
import ngkPortrait from "@/assets/ngk-portrait.jpg.asset.json";
import ngkCover from "@/assets/ngk-cover-titanic.png.asset.json";
import azNivBook from "@/assets/az-niv-book.jpg.asset.json";
import azSpread from "@/assets/az-spread-fantasy.jpg.asset.json";
import gpdPirate from "@/assets/gpd-pirate-popup.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Niv Haviv" },
      {
        name: "description",
        content:
          "An interactive exhibition: Niv Haviv — designer, illustrator, storyteller. A journey between commercial design and personal narrative.",
      },
      { property: "og:title", content: "About — Niv Haviv" },
      {
        property: "og:description",
        content:
          "Between commercial design and personal storytelling — an interactive portrait of Niv Haviv.",
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
  y = 28,
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
        transition: `opacity 1.1s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 1.1s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Parallax({
  children,
  speed = 0.08,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const c = r.top + r.height / 2 - window.innerHeight / 2;
      setOffset(-c * speed);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [speed]);
  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
      {children}
    </div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">
      <span className="inline-block w-10 h-px bg-ink/25" />
      <span>{index}</span>
      <span className="text-ink/30">·</span>
      <span>{title}</span>
    </div>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-ink/65 text-[15px] md:text-[16px] leading-[1.75] max-w-[44ch] ${className}`}>
      {children}
    </p>
  );
}

/* ─────────────── nav ─────────────── */

function MiniNav() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-ink/8"
      style={{
        background: "color-mix(in oklab, #F5F5F3 82%, transparent)",
        backdropFilter: "saturate(140%) blur(14px)",
        WebkitBackdropFilter: "saturate(140%) blur(14px)",
      }}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={signatureAsset.url} alt="Niv Haviv" className="h-8 md:h-10 w-auto" draggable={false} />
        </Link>
        <nav className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/70">
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

/* ─────────────── page ─────────────── */

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#F5F5F3", color: "var(--ink)" }}>
      <MiniNav />
      <ScrollProgress />
      <S01_Intro />
      <S02_TwoWorlds />
      <S03_Timeline />
      <S04_BehindND />
      <S05_Inspiration />
      <S06_StudioDesk />
      <S07_Today />
      <Footer />
    </div>
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

/* ─────────────── 01 Intro ─────────────── */

function S01_Intro() {
  const y = useScrollY();
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* huge faded backdrop word */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-[-4vw] font-serif italic text-ink/[0.04] leading-none select-none"
        style={{ fontSize: "38vw", transform: `translateY(${y * -0.08}px)` }}
      >
        about
      </div>

      <div className="absolute top-32 left-1/2 -translate-x-1/2 h-px w-24 bg-turquoise/60" />

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 w-full pt-40 md:pt-48 pb-24">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-ink/45 mb-12">
            <span className="inline-block w-10 h-px bg-ink/25 align-middle mr-3" />
            An interactive portrait · 2026
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="font-serif text-ink leading-[0.92] tracking-[-0.045em] text-[18vw] md:text-[13vw] lg:text-[11vw]">
            Niv <span className="italic text-turquoise-deep">Haviv.</span>
          </h1>
        </Reveal>

        <div className="mt-20 md:mt-32 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5 md:col-start-7 space-y-2">
            {["Designer.", "Illustrator.", "Storyteller."].map((w, i) => (
              <Reveal key={w} delay={300 + i * 140}>
                <p className="font-serif text-ink leading-[1.05] tracking-[-0.02em] text-[34px] md:text-[44px] lg:text-[52px]">
                  {i === 2 ? <span className="italic text-turquoise-deep">{w}</span> : w}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-ink/40">
        <span className="font-mono text-[10px] uppercase tracking-[0.36em]">Scroll to begin</span>
        <span className="block w-px h-14 bg-ink/30 scroll-cue" />
      </div>
    </section>
  );
}

/* ─────────────── 02 Two Worlds ─────────────── */

function S02_TwoWorlds() {
  return (
    <section className="relative py-32 md:py-48 border-t border-ink/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="mb-20">
          <Reveal><SectionLabel index="02" title="Two Worlds" /></Reveal>
          <Reveal delay={120}>
            <h2 className="mt-8 font-serif text-ink leading-[1.02] tracking-[-0.03em] text-[12vw] md:text-[7vw] lg:text-[5.6vw] max-w-[18ch]">
              Between the brief<br />
              and the <span className="italic text-turquoise-deep">blank page.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 relative">
          {/* divider */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-ink/12" />

          {/* LEFT — Graphic Design */}
          <div className="relative pr-0 md:pr-12 pb-16 md:pb-0">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45 mb-6">
                Left side
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="font-serif text-ink leading-[1.0] tracking-[-0.02em] text-[40px] md:text-[56px] lg:text-[68px]">
                Graphic<br /><span className="italic">Design.</span>
              </h3>
            </Reveal>
            <Reveal delay={220}>
              <Body className="mt-8">
                Editorial, brand and product — the disciplined craft of making
                meaning legible. Years of client work, deadlines, decks, and
                covers that had to ship.
              </Body>
            </Reveal>

            <div className="relative mt-12 h-[420px] md:h-[520px]">
              <Parallax speed={0.05} className="absolute inset-0">
                <img src={ngkSpread.url} alt="" className="absolute top-0 left-0 w-[78%] shadow-[0_30px_60px_rgba(0,0,0,0.12)]" draggable={false} />
              </Parallax>
              <Parallax speed={-0.04} className="absolute inset-0">
                <img src={ngkCover.url} alt="" className="absolute bottom-0 right-2 w-[42%] shadow-[0_20px_40px_rgba(0,0,0,0.12)] rotate-[-3deg]" draggable={false} />
              </Parallax>
              <Parallax speed={0.07} className="absolute inset-0">
                <img src={gpdPirate.url} alt="" className="absolute top-1/3 right-0 w-[34%] rotate-[5deg]" draggable={false} />
              </Parallax>
            </div>
          </div>

          {/* RIGHT — Storytelling & Comics */}
          <div className="relative pl-0 md:pl-12">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45 mb-6">
                Right side
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="font-serif text-ink leading-[1.0] tracking-[-0.02em] text-[40px] md:text-[56px] lg:text-[68px]">
                Storytelling<br />& <span className="italic text-turquoise-deep">Comics.</span>
              </h3>
            </Reveal>
            <Reveal delay={220}>
              <Body className="mt-8">
                Sketchbooks, panels, character voices. The freedom of long-form
                storytelling — built one drawing at a time, no client in the room.
              </Body>
            </Reveal>

            <div className="relative mt-12 h-[420px] md:h-[520px]">
              <Parallax speed={0.05} className="absolute inset-0">
                <img src={sketches1.url} alt="" className="absolute top-0 left-2 w-[68%] mix-blend-multiply opacity-95" draggable={false} />
              </Parallax>
              <Parallax speed={-0.05} className="absolute inset-0">
                <img src={ndArieh.url} alt="" className="absolute bottom-2 right-0 w-[44%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.14)]" draggable={false} />
              </Parallax>
              <img src={ndStar.url} alt="" className="absolute top-6 right-6 w-10 float-slow" draggable={false} />
              <img src={ndDiamond.url} alt="" className="absolute bottom-12 left-12 w-8 float-med" draggable={false} />
            </div>
          </div>
        </div>

        <Reveal delay={300}>
          <p className="mt-24 font-serif italic text-ink/70 text-center text-[20px] md:text-[26px] leading-snug max-w-[40ch] mx-auto">
            "Both hands — one writes the brief, the other draws what was missing from it."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── 03 Timeline ─────────────── */

function S03_Timeline() {
  const milestones = [
    { icon: "🎭", year: "Early", label: "Theatre", body: "First language was the stage. Light, timing, the way a room holds its breath.", art: theatre1.url, accent: "rotate-[-3deg]" },
    { icon: "🎨", year: "Shenkar", label: "Design Studies", body: "Formal training. Sketchbooks fill faster than coursework.", art: shenkar4.url, accent: "rotate-[2deg]" },
    { icon: "🏢", year: "Agency", label: "Advertising", body: "Learned to defend ideas, kill darlings, and ship on a Friday.", art: shenkar8.url, accent: "rotate-[-2deg]" },
    { icon: "🌍", year: "Years", label: "National Geographic Kids", body: "Lead designer. Craft and curiosity, on every spread.", art: ngkSpread.url, accent: "rotate-[1deg]" },
    { icon: "📚", year: "Author", label: "Asaflezet", body: "Wrote and designed a children's book — first taste of long-form authorship.", art: azNivBook.url, accent: "rotate-[-2deg]" },
    { icon: "📖", year: "Now", label: "New Direction", body: "A graphic novel about choice and return. The work that holds the rest together.", art: ndCover.url, accent: "rotate-[2deg]" },
  ];

  return (
    <section className="relative py-32 md:py-48 border-t border-ink/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal><SectionLabel index="03" title="Timeline" /></Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 mb-24 font-serif text-ink leading-[1.02] tracking-[-0.03em] text-[12vw] md:text-[7vw] lg:text-[5.6vw] max-w-[16ch]">
            A path drawn<br />
            <span className="italic text-turquoise-deep">by hand.</span>
          </h2>
        </Reveal>

        <div className="relative max-w-[1200px] mx-auto">
          {/* vertical line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-px bg-ink/15" />

          <ul className="space-y-28 md:space-y-40">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <li key={m.label} className="relative">
                  {/* node */}
                  <Reveal delay={50} y={0}>
                    <span className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -translate-y-1 flex items-center justify-center w-4 h-4 rounded-full bg-[#F5F5F3] ring-1 ring-ink/25">
                      <span className="block w-1.5 h-1.5 rounded-full bg-turquoise" />
                    </span>
                  </Reveal>

                  <div className={`grid grid-cols-12 gap-6 md:gap-12 pl-16 md:pl-0 items-center`}>
                    {/* text block */}
                    <div className={`col-span-12 ${left ? "md:col-span-5 md:col-start-1 md:text-right md:pr-12" : "md:col-span-5 md:col-start-8 md:pl-12"}`}>
                      <Reveal delay={100}>
                        <div className={`flex items-baseline gap-4 ${left ? "md:justify-end" : ""}`}>
                          <span className="text-2xl md:text-3xl select-none">{m.icon}</span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">{m.year}</span>
                        </div>
                      </Reveal>
                      <Reveal delay={180}>
                        <h3 className="mt-4 font-serif text-ink leading-[1.05] tracking-[-0.02em] text-[28px] md:text-[40px] lg:text-[48px]">
                          {m.label}
                        </h3>
                      </Reveal>
                      <Reveal delay={260}>
                        <p className={`mt-4 text-ink/65 text-[15px] md:text-[16px] leading-[1.7] max-w-[42ch] ${left ? "md:ml-auto" : ""}`}>
                          {m.body}
                        </p>
                      </Reveal>
                    </div>

                    {/* illustration */}
                    <div className={`col-span-12 ${left ? "md:col-span-5 md:col-start-8" : "md:col-span-5 md:col-start-1 md:row-start-1"}`}>
                      <Reveal delay={150} y={40}>
                        <div className={`relative max-w-[360px] ${left ? "" : "md:ml-auto"} ${m.accent}`}>
                          <div className="absolute -inset-3 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] -z-10" />
                          <img src={m.art} alt={m.label} className="w-full h-auto block" draggable={false} />
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 04 Behind New Direction ─────────────── */

function S04_BehindND() {
  const panels = [
    { src: ndJerusalem.url, label: "Panel · Jerusalem walk", span: "md:col-span-7 aspect-[16/10]" },
    { src: ndBeach.url, label: "Panel · Beach scene", span: "md:col-span-5 aspect-[4/5]" },
    { src: ndPages.url, label: "Process · Spread collage", span: "md:col-span-5 aspect-[4/5]" },
    { src: ndKiss.url, label: "Character study · Roy & Arieh", span: "md:col-span-7 aspect-[16/10]" },
    { src: ndPoster.url, label: "Cover study", span: "md:col-span-4 aspect-[3/4]" },
    { src: ndPalette.url, label: "Color palette", span: "md:col-span-4 aspect-[3/4] bg-white" },
    { src: ndBookMockup.url, label: "Bound book", span: "md:col-span-4 aspect-[3/4] bg-white" },
  ];

  return (
    <section className="relative py-32 md:py-52 border-t border-ink/10" style={{ background: "linear-gradient(180deg, #F5F5F3 0%, #EFEEEA 100%)" }}>
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 items-end mb-20">
          <div className="col-span-12 md:col-span-7 space-y-8">
            <Reveal><SectionLabel index="04" title="Behind New Direction" /></Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-ink leading-[0.98] tracking-[-0.035em] text-[14vw] md:text-[9vw] lg:text-[7.2vw]">
                Inside the<br />
                <span className="italic text-turquoise-deep">making.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={200}>
            <Body>
              A graphic novel is a year of small decisions stacked on each other.
              Panels, palettes, characters that argue with you in the margin.
              This is the work table.
            </Body>
          </Reveal>
        </div>

        {/* floating ambient marks */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <img src={ndSpark.url} alt="" className="absolute top-[12%] right-[6%] w-14 float-slow" draggable={false} />
          <img src={ndDiamondGreen.url} alt="" className="absolute top-[45%] left-[3%] w-10 float-med" draggable={false} />
          <img src={ndCircleNavy.url} alt="" className="absolute bottom-[10%] right-[10%] w-12 float-slow" draggable={false} />
          <img src={ndSparkOlive.url} alt="" className="absolute bottom-[30%] left-[12%] w-12 float-med" draggable={false} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 relative">
          {panels.map((p, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              y={36}
              className={`group relative overflow-hidden ${p.span} shadow-[0_20px_50px_rgba(0,0,0,0.10)]`}
            >
              <img
                src={p.src}
                alt={p.label}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
                draggable={false}
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white">
                  {p.label}
                </span>
                <span className="font-mono text-[10px] text-white/70">0{i + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Link
            to="/work/new-direction"
            className="mt-20 inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-ink hover:text-turquoise-deep transition-colors"
          >
            <span>Open the full project</span>
            <span className="inline-block w-12 h-px bg-ink" />
            <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── 05 Things That Inspire Me ─────────────── */

function S05_Inspiration() {
  const items = [
    { src: eilatChildhood.url, label: "Travel", note: "South light, salt air, slow days.", span: "md:col-span-6 md:row-span-2 aspect-[4/5]" },
    { src: shenkar3.url, label: "Books", note: "Anything Tomi Ungerer.", span: "md:col-span-3 aspect-square bg-white" },
    { src: theatre2.url, label: "Theatre", note: "The original storyboard.", span: "md:col-span-3 aspect-square" },
    { src: ngkPortrait.url, label: "People", note: "Portraits that don't pose.", span: "md:col-span-3 aspect-[3/4]" },
    { src: azSpread.url, label: "Storytelling", note: "Worlds with rules of their own.", span: "md:col-span-3 aspect-[3/4] bg-white" },
  ];

  return (
    <section className="relative py-32 md:py-48 border-t border-ink/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-6 space-y-8">
            <Reveal><SectionLabel index="05" title="Things That Inspire Me" /></Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-ink leading-[1.0] tracking-[-0.03em] text-[12vw] md:text-[7vw] lg:text-[5.6vw]">
                A shelf,<br />
                <span className="italic text-turquoise-deep">not a list.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-4 md:col-start-9 self-end" delay={200}>
            <Body>
              The objects I keep returning to. Hover anything to hear why.
            </Body>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 md:auto-rows-[220px]">
          {items.map((t, i) => (
            <Reveal
              key={t.label}
              delay={i * 80}
              className={`group relative overflow-hidden ${t.span} shadow-[0_16px_40px_rgba(0,0,0,0.08)]`}
            >
              <img
                src={t.src}
                alt={t.label}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
                draggable={false}
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/35 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em]">{t.label}</p>
                <p className="mt-1 font-serif italic text-[15px] md:text-[17px] leading-snug">
                  "{t.note}"
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── 06 Studio Desk ─────────────── */

function S06_StudioDesk() {
  type Obj = {
    id: string;
    label: string;
    note: string;
    src: string;
    style: React.CSSProperties;
    className?: string;
  };
  const [hover, setHover] = useState<string | null>(null);

  const objects: Obj[] = [
    {
      id: "sketch",
      label: "Sketchbook",
      note: "Page 47. Never to be shown.",
      src: sketches1.url,
      style: { top: "8%", left: "6%", width: "30%", transform: "rotate(-6deg)" },
    },
    {
      id: "panel",
      label: "Comic page",
      note: "Draft #3 — the version that finally breathed.",
      src: ndJerusalem.url,
      style: { top: "14%", right: "8%", width: "30%", transform: "rotate(4deg)" },
    },
    {
      id: "cover",
      label: "Book cover",
      note: "Asaflezet — proof that I can finish a thing.",
      src: azNivBook.url,
      style: { bottom: "12%", left: "12%", width: "20%", transform: "rotate(-3deg)" },
    },
    {
      id: "pendant",
      label: "Turquoise pendant",
      note: "A small reminder of why color matters.",
      src: necklace,
      style: { top: "42%", left: "44%", width: "12%", transform: "rotate(2deg)" },
    },
    {
      id: "spark",
      label: "Pencil",
      note: "Always B. Never softer.",
      src: ndSpark.url,
      style: { bottom: "20%", right: "22%", width: "8%", transform: "rotate(20deg)" },
    },
    {
      id: "camera",
      label: "Camera",
      note: "Old, manual, slow on purpose.",
      src: ngkPortrait.url,
      style: { bottom: "8%", right: "6%", width: "22%", transform: "rotate(3deg)" },
    },
  ];

  return (
    <section className="relative py-28 md:py-40 border-t border-ink/10" style={{ background: "#EFEEEA" }}>
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-6 space-y-8">
            <Reveal><SectionLabel index="06" title="Studio Desk" /></Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-ink leading-[1.0] tracking-[-0.03em] text-[12vw] md:text-[7vw] lg:text-[5.4vw]">
                What's on the<br />
                <span className="italic text-turquoise-deep">desk today.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-4 md:col-start-9 self-end" delay={200}>
            <Body>
              An honest snapshot. Hover any object to peek inside.
            </Body>
          </Reveal>
        </div>

        {/* the desk */}
        <div
          className="relative w-full mx-auto rounded-sm overflow-hidden"
          style={{
            height: "640px",
            background:
              "radial-gradient(ellipse at 50% 40%, #E8E5DD 0%, #DAD5C9 60%, #C9C3B4 100%)",
            boxShadow: "inset 0 30px 80px rgba(0,0,0,0.08), inset 0 -30px 80px rgba(0,0,0,0.10)",
          }}
        >
          {/* paper grain hint */}
          <div aria-hidden className="absolute inset-0 opacity-[0.04] mix-blend-multiply" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "4px 4px" }} />

          {objects.map((o) => {
            const active = hover === o.id;
            return (
              <div
                key={o.id}
                className="absolute group cursor-pointer"
                style={o.style}
                onMouseEnter={() => setHover(o.id)}
                onMouseLeave={() => setHover((h) => (h === o.id ? null : h))}
              >
                <div
                  className="transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)]"
                  style={{
                    transform: active ? "translateY(-10px) scale(1.04)" : "translateY(0) scale(1)",
                    filter: hover && !active ? "grayscale(0.5) brightness(0.92)" : "none",
                  }}
                >
                  <img
                    src={o.src}
                    alt={o.label}
                    className="w-full h-auto block drop-shadow-[0_18px_28px_rgba(0,0,0,0.22)]"
                    draggable={false}
                  />
                </div>
                {/* tooltip */}
                <div
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-4 -translate-y-full whitespace-nowrap"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: `translate(-50%, ${active ? "-100%" : "calc(-100% + 8px)"})`,
                    transition: "opacity .35s ease, transform .35s ease",
                  }}
                >
                  <div className="bg-ink text-[#F5F5F3] px-4 py-2.5 shadow-xl">
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-turquoise">{o.label}</p>
                    <p className="mt-1 font-serif italic text-[14px]">"{o.note}"</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45 text-center">
            Hover · 6 objects · honest mess
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── 07 Today ─────────────── */

function S07_Today() {
  return (
    <section className="relative py-40 md:py-56 border-t border-ink/10 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-serif italic text-ink/[0.04] leading-none select-none"
        style={{ fontSize: "32vw" }}
      >
        today
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal><SectionLabel index="07" title="Today" /></Reveal>

        <Reveal delay={150}>
          <p className="mt-12 font-serif text-ink leading-[1.08] tracking-[-0.025em] text-[8vw] md:text-[5vw] lg:text-[3.8vw] max-w-[22ch]">
            Today I help brands tell stories through design — while building
            <span className="italic text-turquoise-deep"> stories of my own.</span>
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              to="/"
              className="group inline-flex items-center gap-4 bg-ink text-[#F5F5F3] px-7 py-4 font-mono text-[11px] uppercase tracking-[0.28em] hover:bg-turquoise-deep transition-colors"
            >
              <span>View my work</span>
              <span className="inline-block w-6 h-px bg-current transition-all group-hover:w-10" />
              <span>→</span>
            </Link>
            <a
              href="mailto:nivat2@gmail.com"
              className="group inline-flex items-center gap-4 border border-ink/30 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-ink hover:border-turquoise-deep hover:text-turquoise-deep transition-colors"
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
    </section>
  );
}

/* ─────────────── footer ─────────────── */

function Footer() {
  return (
    <footer className="border-t border-ink/10 py-14">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={signatureAsset.url} alt="Niv Haviv" className="h-10 w-auto opacity-80" draggable={false} />
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