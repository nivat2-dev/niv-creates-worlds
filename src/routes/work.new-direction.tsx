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

      {/* HERO — light, compact, cover-forward */}
      <section className="relative bg-paper text-ink border-b border-hairline">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-32 pb-14 md:pb-20">
          <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span>Case Study · 00 · New Direction</span>
            <span>2024 · Self-initiated</span>
          </div>
          <div className="mt-6 h-px w-full bg-hairline" />

          <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-turquoise-deep">From blank page to printed object</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-5 font-serif text-[clamp(48px,7.4vw,116px)] leading-[0.9] tracking-[-0.04em]">
                  A 180-page graphic novel,<br />designed and authored alone.
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 font-serif text-lg md:text-[22px] leading-[1.35] text-ink-muted max-w-xl">
                  Writing, illustration, character systems, custom Hebrew typography, editorial design and print production — unified inside one project.
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 lg:col-span-5 flex items-end justify-center lg:justify-end">
              <img
                src={bookCover.url}
                alt="New Direction — printed cover"
                className="block max-h-[52vh] w-auto h-auto select-none"
                style={{ filter: "drop-shadow(0 24px 48px rgba(20,20,22,.22))", transform: "rotate(-2deg)" }}
              />
            </div>
          </div>

          <div className="mt-12 md:mt-16 pt-6 border-t border-hairline grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-6">
            {[
              { k: "Role", v: "Author · Designer · Illustrator" },
              { k: "Year", v: "2024" },
              { k: "Format", v: "Hardbound · 180 pp" },
              { k: "Languages", v: "Hebrew · English" },
              { k: "Output", v: "Print + Identity" },
              { k: "Disciplines", v: "9 unified" },
            ].map((m) => (
              <div key={m.k}>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">{m.k}</p>
                <p className="mt-1.5 font-serif text-[15px] leading-tight tracking-[-0.01em]">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — VISUAL IDENTITY (logo + type + color, condensed) */}
      <section className="bg-paper py-20 md:py-28">
        <SectionHead n="01" label="Visual Identity" title="One system, two scripts: logotype, custom Hebrew lettering, and a three-tone palette." />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-6">
            <FrameContain src={logoEn.url} alt="New Direction — English logotype" ratio="5/4" bg="bg-paper-deep" />
            <Caption>English logotype</Caption>
          </Reveal>
          <Reveal delay={100} className="col-span-12 md:col-span-6">
            <FrameContain src={logoHe.url} alt="כיוון חדש — Hebrew logotype, hand-drawn" ratio="5/4" bg="bg-paper-deep" />
            <Caption>Hebrew logotype · hand-drawn</Caption>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-12 md:mt-16 grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise-deep">Color · three-tone system</p>
            <p className="mt-3 text-ink-muted text-[15px] leading-relaxed max-w-sm">
              Paper and ink do the reading. Turquoise carries meaning — appearing only where the story's recurring object appears.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-4 md:gap-6">
            <Swatch role="Surface" name="Paper" hex="#F2EFE6" />
            <Swatch role="Body" name="Ink" hex="#141416" />
            <Swatch role="Signal" name="Turquoise" hex="#3FC7C2" />
          </div>
        </div>
      </section>

      {/* 02 — PAGE ARCHITECTURE */}
      <section className="bg-paper-deep border-y border-hairline py-20 md:py-28">
        <SectionHead n="02" label="Page Architecture" title="Why a printed spread works — grid, pacing, eye path." />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-start">
          <Reveal className="col-span-12 md:col-span-8">
            <AnnotatedSpread />
            <Caption>Pp. 156–157 · annotated printed copy</Caption>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-4">
            <ol className="space-y-4">
              {[
                ["01", "Grid", "2 × 4 panel grid. Locked to, or broken deliberately."],
                ["02", "Pacing", "Action panel answered by silence. Beats land on the turn."],
                ["03", "Eye path", "Hebrew reads right-to-left — every gesture stages with it."],
                ["04", "Restraint", "Turquoise withheld. The signal works because it is absent here."],
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

      {/* 03 — ARTWORK */}
      <section className="bg-paper py-20 md:py-28">
        <SectionHead n="03" label="Selected Artwork" title="Characters as a readable system — silhouette first, detail inward." />
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <Frame src={jerusalemWalk.url} alt="Two characters walking through a Jerusalem street" ratio="4/3" />
            <Caption>Street pacing · staging, scale, eyeline</Caption>
          </Reveal>
          <Reveal delay={100} className="col-span-12 md:col-span-5">
            <Frame src={kiss.url} alt="Two characters — a quiet moment" ratio="4/5" />
            <Caption>Negative space as silence</Caption>
          </Reveal>
          <Reveal delay={160} className="col-span-12 md:col-span-12">
            <Frame src={water.url} alt="Bird's eye — single figure" ratio="21/9" />
            <Caption>Single figure · bird's-eye composition</Caption>
          </Reveal>
        </div>
      </section>

      {/* 04 — PROCESS (2 transformations) */}
      <section className="bg-paper-deep border-y border-hairline py-20 md:py-28">
        <SectionHead n="04" label="Process" title="Sketch to printed object — two key transformations." />
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Transformation
            n="T · 01"
            label="Lettering → Logotype"
            beforeNode={<Placeholder ratio="4/5" label="Hebrew lettering exploration — pencil iterations" />}
            afterNode={<FrameContain src={logoHe.url} alt="Final Hebrew logotype" ratio="4/5" bg="bg-paper" />}
            beforeCaption="Letterform studies · to supply"
            afterCaption="Final כיוון חדש"
            note="The mark integrates the pendant directly into the typography — identity and story-object become one drawing."
          />
          <Transformation
            n="T · 02"
            label="Layout → Printed Spread"
            beforeNode={<Placeholder ratio="4/3" label="Panel thumbnail · grid sketch, pp. 156–157" />}
            afterNode={<Frame src={bookMockup.url} alt="Final printed spread" ratio="4/3" />}
            beforeCaption="Thumbnail layout · to supply"
            afterCaption="Printed copy · pp. 156–157"
            note="The page begins as a 2×4 grid sketch. The printed spread keeps the same architecture — system committed to before a single panel was inked."
          />
        </div>
      </section>

      {/* 05 — OUTCOMES (dark, compact) */}
      <section className="bg-ink text-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-turquoise">(05) — Outcomes</p>
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-3xl md:text-[48px] leading-[1.04] tracking-[-0.035em] max-w-3xl">
              Nine disciplines, one project — blank page to bound book.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
          {[
            ["Writing", "Story, structure, dialogue."],
            ["Illustration", "Every panel hand-drawn."],
            ["Narrative Design", "Pacing, page turns, silence."],
            ["Character Design", "Cast as a readable system."],
            ["Typography", "Custom Hebrew lettering."],
            ["Editorial Design", "Grid, hierarchy, rhythm."],
            ["Book Design", "Cover, spine, interior."],
            ["Print Production", "CMYK, bleed, paper, ink."],
            ["Publishing", "File to bound copy."],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={i * 30} className="border-t border-paper/15 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-serif text-xl tracking-[-0.02em]">{k}</p>
              <p className="mt-1 text-paper/65 text-[13px] leading-relaxed">{v}</p>
            </Reveal>
          ))}
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