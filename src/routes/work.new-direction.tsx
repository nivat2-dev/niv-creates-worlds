import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import bookCover from "@/assets/nd-cover.png.asset.json";
import bookMockup from "@/assets/nd-book-mockup.jpg.asset.json";
import jerusalemWalk from "@/assets/nd-jerusalem-walk.png.asset.json";
import kiss from "@/assets/nd-kiss.png.asset.json";
import water from "@/assets/nd-water.jpg.asset.json";
import logoEn from "@/assets/nd-logo-en.png.asset.json";
import logoHe from "@/assets/nd-logo-he.png.asset.json";

export const Route = createFileRoute("/work/new-direction")({
  head: () => ({
    meta: [
      { title: "New Direction — Design Case Study · Niv Haviv" },
      { name: "description", content: "New Direction — a 180-page graphic novel written, illustrated, designed and prepared for print by a single creator." },
      { property: "og:image", content: bookCover.url },
    ],
  }),
  component: NewDirectionPage,
});

/* ───── primitives ───── */

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } },
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
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(20px)",
        transition: `opacity .8s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function MiniNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-6 flex items-center justify-between text-paper">
        <Link to="/" className="flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] uppercase">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-turquoise" />
          Niv Haviv / Studio
        </Link>
        <Link to="/" className="font-mono text-[12px] uppercase tracking-[0.18em] hover:text-turquoise transition-colors">
          ← Index
        </Link>
      </div>
    </header>
  );
}

function SectionHead({ n, label, title, kicker }: { n: string; label: string; title?: string; kicker?: string }) {
  return (
    <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
      <div className="col-span-12 md:col-span-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-turquoise-deep">
          ({n}) — {label}
        </p>
      </div>
      <div className="col-span-12 md:col-span-9">
        {title && (
          <Reveal>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.02] tracking-[-0.035em] text-ink max-w-3xl">
              {title}
            </h2>
          </Reveal>
        )}
        {kicker && (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">{kicker}</p>
        )}
      </div>
    </div>
  );
}

function Frame({ src, alt, ratio = "4/5", className = "", bg = "bg-paper-deep" }: { src: string; alt: string; ratio?: string; className?: string; bg?: string }) {
  return (
    <div className={`lift-img relative w-full overflow-hidden ${bg} ${className}`} style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
    </div>
  );
}

function FrameContain({ src, alt, ratio = "4/5", className = "", bg = "bg-paper-deep" }: { src: string; alt: string; ratio?: string; className?: string; bg?: string }) {
  return (
    <div className={`relative w-full overflow-hidden ${bg} ${className}`} style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-contain p-6" />
    </div>
  );
}

function Placeholder({ label, ratio = "4/5", className = "" }: { label: string; ratio?: string; className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 border border-dashed border-turquoise/50 bg-turquoise/[0.04] flex flex-col items-center justify-center text-center px-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-turquoise-deep">Awaiting asset</span>
        <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted max-w-[26ch] leading-relaxed">{label}</span>
      </div>
    </div>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
      <span className="text-turquoise-deep">▸</span> {children}
    </p>
  );
}

function Swatch({ name, role, hex, dark = false }: { name: string; role: string; hex: string; dark?: boolean }) {
  return (
    <div className="flex flex-col">
      <div className="aspect-[4/3] w-full" style={{ background: hex }} />
      <div className={`mt-3 ${dark ? "text-paper" : "text-ink"}`}>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">{role}</p>
        <p className="font-serif text-lg leading-tight mt-1">{name}</p>
        <p className={`font-mono text-[10px] tracking-[0.18em] mt-1 ${dark ? "text-paper/50" : "text-ink-muted"}`}>{hex}</p>
      </div>
    </div>
  );
}

/* annotated spread — numbered dots over the printed book photo */
function AnnotatedSpread() {
  const dots = [
    { id: "01", top: "18%", left: "28%" },
    { id: "02", top: "44%", left: "72%" },
    { id: "03", top: "78%", left: "38%" },
  ];
  return (
    <div className="relative w-full bg-paper-deep overflow-hidden" style={{ aspectRatio: "4/3" }}>
      <img src={bookMockup.url} alt="Printed interior spread — pp. 156–157" className="w-full h-full object-cover" />
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ top: d.top, left: d.left }}
        >
          <span className="absolute inline-flex h-8 w-8 rounded-full bg-turquoise/40 animate-ping" />
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-turquoise text-ink font-mono text-[10px] tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
            {d.id}
          </span>
        </span>
      ))}
    </div>
  );
}

/* before → after */
function Transformation({ n, label, beforeNode, afterNode, beforeCaption, afterCaption, note }: {
  n: string; label: string;
  beforeNode: ReactNode; afterNode: ReactNode;
  beforeCaption: string; afterCaption: string;
  note: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 py-12 border-t border-hairline">
      <div className="col-span-12 md:col-span-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-turquoise-deep">{n}</p>
        <p className="mt-2 font-serif text-2xl tracking-[-0.02em] text-ink">{label}</p>
      </div>
      <Reveal className="col-span-12 md:col-span-4">
        {beforeNode}
        <Caption>{beforeCaption}</Caption>
      </Reveal>
      <div className="col-span-12 md:col-span-1 flex md:flex-col items-center justify-center text-turquoise-deep font-mono text-[11px] uppercase tracking-[0.24em]">
        <span className="hidden md:inline-block">→</span>
        <span className="md:hidden">↓</span>
      </div>
      <Reveal delay={120} className="col-span-12 md:col-span-4">
        {afterNode}
        <Caption>{afterCaption}</Caption>
      </Reveal>
      <div className="col-span-12 md:col-span-1 hidden md:block" />
      <div className="col-span-12 md:col-span-10 md:col-start-3 -mt-2 text-ink-muted text-[14px] leading-relaxed max-w-2xl">
        {note}
      </div>
    </div>
  );
}

/* ───── page ───── */

function NewDirectionPage() {
  return (
    <main className="bg-paper text-ink">
      <MiniNav />

      {/* HERO — cover forward, light */}
      <section className="bg-paper text-ink border-b border-hairline">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24">
          <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span>Case Study · New Direction</span>
            <span>2024</span>
          </div>
          <div className="mt-6 h-px w-full bg-hairline" />

          <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
              <Reveal>
                <h1 className="font-serif text-[clamp(64px,10vw,168px)] leading-[0.88] tracking-[-0.045em]">
                  New<br />Direction
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-8 font-serif text-xl md:text-[24px] leading-[1.35] text-ink-muted max-w-xl">
                  180-page graphic novel written, illustrated, designed and prepared for print by a single creator.
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 flex items-center justify-center">
              <img
                src={bookCover.url}
                alt="New Direction — printed cover"
                className="block max-h-[72vh] w-auto h-auto select-none"
                style={{ filter: "drop-shadow(0 30px 60px rgba(20,20,22,.25))" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 01 — PROJECT OVERVIEW */}
      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-center">
          <Reveal className="col-span-4 md:col-span-3">
            <img
              src={bookCover.url}
              alt="New Direction — cover (small)"
              className="block w-full h-auto select-none"
              style={{ filter: "drop-shadow(0 12px 24px rgba(20,20,22,.18))" }}
            />
          </Reveal>
          <div className="col-span-12 md:col-span-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-turquoise-deep">(01) — Project Overview</p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-6">
              {[
                { k: "Role", v: "Author · Designer · Illustrator" },
                { k: "Year", v: "2024" },
                { k: "Pages", v: "180" },
                { k: "Format", v: "Hardbound" },
                { k: "Languages", v: "Hebrew · English" },
              ].map((m) => (
                <div key={m.k}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">{m.k}</p>
                  <p className="mt-1.5 font-serif text-[17px] leading-tight tracking-[-0.01em]">{m.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — THE CHALLENGE (no images, short) */}
      <section className="bg-paper-deep border-y border-hairline py-20 md:py-24">
        <SectionHead n="02" label="The Challenge" title="One person, every role — from writing to press-ready files." />
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3" />
          <Reveal className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              ["01", "Bilingual identity", "A logo system that holds in Hebrew (RTL) and English (LTR)."],
              ["02", "Monochrome with one signal", "Black ink and a single turquoise accent used as meaning, not decoration."],
              ["03", "180 pages, print-ready", "Hand-drawn artwork prepared for offset without losing line quality."],
            ].map(([n, k, v]) => (
              <div key={n} className="border-l-2 border-turquoise pl-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise-deep">Constraint {n}</p>
                <p className="mt-2 font-serif text-[19px] leading-snug tracking-[-0.015em] text-ink">{k}</p>
                <p className="mt-2 text-ink-muted text-[14px] leading-relaxed">{v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 03 — VISUAL IDENTITY (cover + logos + color) */}
      <section className="bg-paper py-20 md:py-24">
        <SectionHead n="03" label="Visual Identity" title="Cover, logo system, color." />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-start">
          <Reveal className="col-span-12 md:col-span-5">
            <Frame src={bookCover.url} alt="New Direction — final cover" ratio="3/4" />
            <Caption>Final cover</Caption>
          </Reveal>
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            <Reveal>
              <FrameContain src={logoEn.url} alt="English logotype" ratio="1/1" bg="bg-paper-deep" />
              <Caption>Logo · English</Caption>
            </Reveal>
            <Reveal delay={80}>
              <FrameContain src={logoHe.url} alt="Hebrew logotype" ratio="1/1" bg="bg-paper-deep" />
              <Caption>Logo · Hebrew</Caption>
            </Reveal>
            <Reveal delay={140} className="col-span-2">
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-2">
                <Swatch role="Surface" name="Paper" hex="#F2EFE6" />
                <Swatch role="Body" name="Ink" hex="#141416" />
                <Swatch role="Signal" name="Turquoise" hex="#3FC7C2" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 04 — STORYTELLING & CHARACTERS */}
      <section className="bg-paper-deep border-y border-hairline py-20 md:py-24">
        <SectionHead n="04" label="Storytelling & Characters" title="Relationships, staging and emotional pacing." />
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <Frame src={jerusalemWalk.url} alt="Two characters walking through Jerusalem" ratio="4/3" />
            <Caption>Two characters · Jerusalem street</Caption>
          </Reveal>
          <Reveal delay={100} className="col-span-12 md:col-span-5">
            <Frame src={kiss.url} alt="A quiet moment between two characters" ratio="4/5" />
            <Caption>A quiet moment</Caption>
          </Reveal>
        </div>
      </section>

      {/* 05 — PAGE DESIGN (annotated spread, 3 annotations) */}
      <section className="bg-paper py-20 md:py-24">
        <SectionHead n="05" label="Page Design" title="Inside a printed spread." />
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-start">
          <Reveal className="col-span-12 md:col-span-8">
            <AnnotatedSpread />
            <Caption>Pp. 156–157 · annotated</Caption>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-4">
            <ol className="space-y-4">
              {[
                ["01", "Grid", "2 × 4 panel grid; panels lock to it or break deliberately."],
                ["02", "Reading Flow (RTL)", "Panel order, gestures and balloon tails all stage right to left."],
                ["03", "Pacing", "Action panel answered by silence; dialogue lands on the page turn."],
              ].map(([n, k, v]) => (
                <li key={n} className="grid grid-cols-12 gap-3 border-b border-hairline pb-3">
                  <span className="col-span-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-turquoise text-ink font-mono text-[10px]">{n}</span>
                  <div className="col-span-10">
                    <p className="font-serif text-[17px] tracking-[-0.015em] text-ink">{k}</p>
                    <p className="mt-1 text-ink-muted text-[13px] leading-relaxed">{v}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 06 — INTERIOR STORYTELLING (3-image gallery) */}
      <section className="bg-paper-deep border-y border-hairline py-20 md:py-24">
        <SectionHead n="06" label="Interior Storytelling" />
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-4">
            <Frame src={jerusalemWalk.url} alt="Walking through Jerusalem" ratio="3/4" />
            <Caption>Jerusalem</Caption>
          </Reveal>
          <Reveal delay={100} className="col-span-12 md:col-span-4">
            <Frame src={water.url} alt="Roi in the water" ratio="3/4" />
            <Caption>Water</Caption>
          </Reveal>
          <Reveal delay={180} className="col-span-12 md:col-span-4">
            <Frame src={kiss.url} alt="The kiss" ratio="3/4" />
            <Caption>The kiss</Caption>
          </Reveal>
        </div>
      </section>

      {/* 07 — FINAL BOOK */}
      <section className="bg-paper py-20 md:py-28">
        <SectionHead n="07" label="Final Book" title="180 pages, hardbound." />
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-4 md:gap-6 items-start">
          <Reveal className="col-span-12 md:col-span-8">
            <Frame src={bookMockup.url} alt="Printed book — mockup" ratio="4/3" />
            <Caption>Printed copy</Caption>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-4">
            <Frame src={bookCover.url} alt="Printed cover" ratio="3/4" />
            <Caption>Cover</Caption>
          </Reveal>
        </div>
      </section>

      {/* NEXT */}
      <Link to="/work/national-geographic-kids" className="group block bg-ink text-paper border-t border-paper/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
            <span>Next Project</span>
            <span>01 / 05</span>
          </div>
          <div className="mt-6 flex items-baseline justify-between gap-6">
            <h3 className="font-serif text-5xl md:text-[8vw] leading-[0.9] tracking-[-0.04em] group-hover:text-turquoise transition-colors">
              National Geographic Kids
            </h3>
            <span className="font-serif text-4xl md:text-6xl inline-block transition-transform duration-500 group-hover:translate-x-3">→</span>
          </div>
        </div>
      </Link>
    </main>
  );
}