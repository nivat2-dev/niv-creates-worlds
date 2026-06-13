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
      { name: "description", content: "A multidisciplinary design case study: writing, illustration, character systems, custom typography, editorial design and print production — taken from blank page to printed book by a single author." },
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
    { id: "01", top: "12%", left: "26%" },
    { id: "02", top: "44%", left: "70%" },
    { id: "03", top: "72%", left: "20%" },
    { id: "04", top: "30%", left: "52%" },
    { id: "05", top: "82%", left: "62%" },
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

      {/* HERO — minimal, repositioned: design case study, not book promo */}
      <section className="relative min-h-[100vh] w-full overflow-hidden bg-ink text-paper">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ background: "radial-gradient(60% 50% at 70% 30%, color-mix(in oklab, var(--color-turquoise) 28%, transparent), transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-32">
          <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-paper/70">
            <span>Case Study · 00</span>
            <span>2024 · Self-initiated</span>
          </div>
          <div className="mt-8 h-px w-full bg-paper/15" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-16 md:pt-20 pb-20 md:pb-28 grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-turquoise">From blank page to printed object</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-serif text-[clamp(56px,9vw,148px)] leading-[0.88] tracking-[-0.04em]">
                A complete<br />design system,<br />authored alone.
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 font-serif text-xl md:text-[24px] leading-[1.35] text-paper/85 max-w-xl">
                New Direction is the artifact. The case study is the design process — writing, illustration, character systems, custom typography, editorial design and print production unified inside one project.
              </p>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-12 flex flex-wrap gap-x-2 gap-y-2 max-w-2xl">
                {[
                  "Writing", "Illustration", "Narrative Design", "Character Design",
                  "Typography", "Editorial Design", "Book Design", "Print Production", "Publishing",
                ].map((d) => (
                  <span key={d} className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper border border-paper/20 rounded-full px-3 py-1.5">
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-4 relative flex items-start justify-center lg:justify-end pt-8 lg:pt-2">
            <img
              src={bookCover.url}
              alt="New Direction — printed cover"
              className="block max-h-[60vh] w-auto h-auto select-none"
              style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,.55))", transform: "rotate(-2deg)" }}
            />
          </div>
        </div>
      </section>

      {/* 01 — OVERVIEW */}
      <section className="bg-paper py-24 md:py-32">
        <SectionHead n="01" label="Project Overview" />
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-9 md:col-start-4">
            <p className="font-serif text-2xl md:text-[34px] leading-[1.18] tracking-[-0.02em] text-ink max-w-3xl">
              A 180-page original graphic novel — written, illustrated, lettered, designed and prepared for print as a sole author. Conceived as a design problem: a single visual system carrying narrative, identity and object.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-16 grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-10">
          {[
            { k: "Role", v: "Author · Designer · Illustrator" },
            { k: "Year", v: "2024" },
            { k: "Format", v: "Hardbound graphic novel" },
            { k: "Pages", v: "180" },
            { k: "Languages", v: "Hebrew (RTL) · English" },
            { k: "Output", v: "Print + Identity system" },
          ].map((m) => (
            <div key={m.k}>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">{m.k}</p>
              <p className="mt-2 font-serif text-lg leading-tight tracking-[-0.01em]">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 — CHALLENGE */}
      <section className="bg-paper-deep py-24 md:py-32 border-y border-hairline">
        <SectionHead n="02" label="The Challenge" title="Make a self-published debut read as a designed object — on par with a major publisher." />
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3" />
          <Reveal className="col-span-12 md:col-span-5">
            <p className="text-ink-muted text-lg leading-relaxed">
              A graphic novel is unusual: it asks one person to operate as writer, illustrator, type designer, editor and production lead simultaneously. Without a publisher's structure, every system — from grid to spine — has to be designed from scratch and made to agree.
            </p>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-4">
            <ul className="space-y-5">
              {[
                ["Constraint 01", "A bilingual identity (Hebrew RTL · English LTR) that holds at logo, chapter opener and body scale."],
                ["Constraint 02", "Monochrome interior with one signal color — turquoise — used as meaning, never decoration."],
                ["Constraint 03", "180 pages of hand-drawn artwork prepared for offset print without losing line quality."],
              ].map(([k, v]) => (
                <li key={k} className="border-l-2 border-turquoise pl-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise-deep">{k}</p>
                  <p className="mt-1 font-serif text-[17px] leading-snug text-ink">{v}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 03 — VISUAL IDENTITY SYSTEM */}
      <section className="bg-paper py-24 md:py-32">
        <SectionHead n="03" label="Visual Identity System" title="One system. Two languages. Four design objects: logo, lettering, color, cover." />

        {/* 03A — Logo (EN + HE) */}
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 mb-20">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-turquoise-deep">03 / A — Logotype</p>
            <p className="mt-4 text-ink-muted text-[15px] leading-relaxed max-w-xs">
              Hand-drawn in both scripts so the mark moves between cultures without losing voice. A turquoise pendant integrates into the letterform — identity and narrative object are the same drawing.
            </p>
          </div>
          <Reveal className="col-span-12 md:col-span-5">
            <FrameContain src={logoEn.url} alt="New Direction — English logotype" ratio="5/4" bg="bg-paper-deep" />
            <Caption>English logotype · final</Caption>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-4">
            <FrameContain src={logoHe.url} alt="כיוון חדש — Hebrew logotype" ratio="5/4" bg="bg-paper-deep" />
            <Caption>Hebrew logotype · כיוון חדש</Caption>
          </Reveal>
        </div>

        {/* 03B — TYPOGRAPHY — elevated to a major design system */}
        <div className="bg-ink text-paper -mx-0 px-0">
          <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28 grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-turquoise">03 / B — Typography</p>
              <Reveal>
                <h3 className="mt-6 font-serif text-3xl md:text-[44px] leading-[1] tracking-[-0.035em]">
                  Custom Hebrew chapter lettering, drawn from scratch.
                </h3>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-paper/75 leading-relaxed text-[15px] max-w-sm">
                  Existing Hebrew display faces felt borrowed. Each chapter opener was hand-lettered so the book's voice begins at the letter, not at the paragraph. The system pairs that voice with a calm serif for the body and a fixed-width caption mark — three roles, one feeling.
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-4 md:gap-6">
              {/* Big display sample using the Hebrew logo as a typographic specimen */}
              <Reveal className="col-span-12">
                <div className="relative w-full bg-paper text-ink overflow-hidden" style={{ aspectRatio: "16/7" }}>
                  <img src={logoHe.url} alt="Hebrew display lettering specimen" className="absolute inset-0 w-full h-full object-contain p-8 md:p-14" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.24em] text-turquoise-deep">Specimen · Display · Hand-drawn</div>
                  <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">Chapter opener · 01–07</div>
                </div>
              </Reveal>

              {/* Three roles */}
              <Reveal delay={80} className="col-span-12 md:col-span-4">
                <div className="bg-paper text-ink p-6 md:p-8 aspect-[4/5] flex flex-col justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise-deep">Role 01 · Display</p>
                  <p className="font-serif text-[48px] leading-[0.95] tracking-[-0.04em]">Aa<br/>אא</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">Hand-drawn · chapter openers</p>
                </div>
              </Reveal>
              <Reveal delay={140} className="col-span-12 md:col-span-4">
                <div className="bg-paper text-ink p-6 md:p-8 aspect-[4/5] flex flex-col justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise-deep">Role 02 · Body</p>
                  <p className="font-serif text-[28px] leading-[1.15] tracking-[-0.015em]">
                    A calm serif carries the reading pace.
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">Serif · 10.5/14 · justified</p>
                </div>
              </Reveal>
              <Reveal delay={200} className="col-span-12 md:col-span-4">
                <div className="bg-paper text-ink p-6 md:p-8 aspect-[4/5] flex flex-col justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise-deep">Role 03 · Caption</p>
                  <p className="font-mono text-[18px] leading-[1.4] tracking-[0.04em] uppercase">PG · 156<br/>CH · 06</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">Mono · folios & meta</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 03C — Color strategy */}
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-20 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-turquoise-deep">03 / C — Color</p>
            <p className="mt-4 text-ink-muted text-[15px] leading-relaxed max-w-xs">
              A three-tone system. Paper and ink do the reading; turquoise carries meaning. The pendant — the story's recurring object — is the only place color appears.
            </p>
          </div>
          <Reveal className="col-span-12 md:col-span-9 grid grid-cols-3 gap-4 md:gap-6">
            <Swatch role="Surface" name="Paper" hex="#F2EFE6" />
            <Swatch role="Body" name="Ink" hex="#141416" />
            <Swatch role="Signal" name="Turquoise" hex="#3FC7C2" />
          </Reveal>
        </div>

        {/* 03D — Cover system */}
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-20 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-turquoise-deep">03 / D — Cover</p>
            <p className="mt-4 text-ink-muted text-[15px] leading-relaxed max-w-xs">
              The cover compresses the whole identity into one face: logotype, paper, ink and a single turquoise mark.
            </p>
          </div>
          <Reveal className="col-span-12 md:col-span-5">
            <Frame src={bookCover.url} alt="New Direction — final cover" ratio="3/4" />
            <Caption>Final cover · Book 01</Caption>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-4">
            <Placeholder ratio="3/4" label="Cover exploration sheet — early directions & rejected variants" />
            <Caption>Cover iterations · to supply</Caption>
          </Reveal>
        </div>
      </section>

      {/* 04 — CHARACTER & NARRATIVE SYSTEMS */}
      <section className="bg-paper-deep py-24 md:py-32 border-y border-hairline">
        <SectionHead n="04" label="Character & Narrative Systems" title="Characters as a system — drawn so tone, worldbuilding and story-logic stay consistent across 180 pages." />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-8">
            <Placeholder ratio="16/10" label="Principal cast lineup — silhouette study & relative scale" />
            <Caption>Cast lineup · to supply</Caption>
          </Reveal>
          <Reveal delay={100} className="col-span-12 md:col-span-4">
            <Placeholder ratio="4/5" label="Expression sheet — protagonist micro-emotions" />
            <Caption>Expression study · to supply</Caption>
          </Reveal>

          <Reveal delay={140} className="col-span-12 md:col-span-6">
            <Frame src={jerusalemWalk.url} alt="Two characters walking through a Jerusalem street" ratio="4/3" />
            <Caption>Characters in context · staging, scale, eyeline</Caption>
          </Reveal>
          <Reveal delay={200} className="col-span-12 md:col-span-6">
            <Frame src={kiss.url} alt="Two characters — a quiet moment" ratio="4/3" />
            <Caption>Characters carrying tone · negative space as silence</Caption>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-14 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3 md:col-start-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise-deep">System rule</p>
            <p className="mt-2 font-serif text-xl leading-snug tracking-[-0.015em]">Silhouette before face.</p>
            <p className="mt-2 text-ink-muted text-[14px] leading-relaxed">Every character is readable in pure black at thumbnail size. Detail is added inward, never outward.</p>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise-deep">System rule</p>
            <p className="mt-2 font-serif text-xl leading-snug tracking-[-0.015em]">One object per character.</p>
            <p className="mt-2 text-ink-muted text-[14px] leading-relaxed">Each lead carries a single recurring object — a visual shorthand that lets the reader track them across crowds and chapters.</p>
          </div>
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise-deep">System rule</p>
            <p className="mt-2 font-serif text-xl leading-snug tracking-[-0.015em]">City as cast member.</p>
            <p className="mt-2 text-ink-muted text-[14px] leading-relaxed">Locations are drawn with the same care as faces; the world holds memory between scenes.</p>
          </div>
        </div>
      </section>

      {/* 05 — PAGE ARCHITECTURE */}
      <section className="bg-paper py-24 md:py-32">
        <SectionHead n="05" label="Page Architecture" title="Why these spreads work — grid, pacing, balance, eye path, color restraint." />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-start">
          <Reveal className="col-span-12 md:col-span-8">
            <AnnotatedSpread />
            <Caption>Pp. 156–157 · annotated · printed copy photograph</Caption>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-4">
            <ol className="space-y-5">
              {[
                ["01", "Grid", "2 columns × 4 rows. 8mm gutter. Panels lock to the grid or break it deliberately."],
                ["02", "Pacing", "Action panel followed by a silent panel. Dialogue beat lands on the page turn."],
                ["03", "B/W balance", "Dense ink on the recto answered by negative space on the verso."],
                ["04", "Eye path", "Hebrew reads right-to-left; panel order, balloon tails and gestures all stage right→left."],
                ["05", "Color restraint", "Turquoise is absent from this spread. Withholding the signal is part of the system."],
              ].map(([n, k, v]) => (
                <li key={n} className="grid grid-cols-12 gap-3 border-b border-hairline pb-4">
                  <span className="col-span-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-turquoise text-ink font-mono text-[10px]">{n}</span>
                  <div className="col-span-10">
                    <p className="font-serif text-[18px] tracking-[-0.015em] text-ink">{k}</p>
                    <p className="mt-1 text-ink-muted text-[13.5px] leading-relaxed">{v}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-6">One architecture · three spreads</p>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-12 md:col-span-4">
              <Frame src={jerusalemWalk.url} alt="Spread — street pacing" ratio="4/3" />
              <Caption>Street pacing · wide establishing → tight character</Caption>
            </Reveal>
            <Reveal delay={100} className="col-span-12 md:col-span-4">
              <Frame src={water.url} alt="Spread — silence & scale" ratio="4/3" />
              <Caption>Silence &amp; scale · bird's-eye, single figure</Caption>
            </Reveal>
            <Reveal delay={200} className="col-span-12 md:col-span-4">
              <Frame src={kiss.url} alt="Spread — vertical intimacy" ratio="4/3" />
              <Caption>Vertical intimacy · negative space as breath</Caption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 — PRODUCTION PROCESS — with mandatory transformations */}
      <section className="bg-ink text-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 mb-14">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-turquoise">(06) — Production Process</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.02] tracking-[-0.035em] max-w-3xl">
                Before and after — the decisions the printed book is built on.
              </h2>
            </Reveal>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">Sketch · Letter · Layout · Cover</p>
          </div>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Transformation
            n="T · 01"
            label="Sketch → Final Character"
            beforeNode={<Placeholder ratio="4/5" label="Early character sketch — pencil studies" />}
            afterNode={<Frame src={kiss.url} alt="Final character — inked & staged" ratio="4/5" />}
            beforeCaption="Sketchbook · to supply"
            afterCaption="Final inked page · published"
            note="The protagonist began as a silhouette study; only the elements that survived shrinking to 12mm tall were kept. What you see on the printed page is what reads at thumbnail."
          />

          <Transformation
            n="T · 02"
            label="Lettering Exploration → Final Logotype"
            beforeNode={<Placeholder ratio="4/5" label="Hebrew lettering exploration — pencil & marker iterations" />}
            afterNode={<FrameContain src={logoHe.url} alt="Final Hebrew logotype" ratio="4/5" bg="bg-paper" />}
            beforeCaption="Letterform studies · to supply"
            afterCaption="Final כיוון חדש · drawn"
            note="The Hebrew mark went through dozens of pencil iterations. The final letterform integrates the pendant directly into the typography — the identity and the story-object become one drawing."
          />

          <Transformation
            n="T · 03"
            label="Layout Draft → Printed Spread"
            beforeNode={<Placeholder ratio="4/3" label="Panel thumbnail · grid sketch for pp. 156–157" />}
            afterNode={<Frame src={bookMockup.url} alt="Final printed spread" ratio="4/3" />}
            beforeCaption="Thumbnail layout · to supply"
            afterCaption="Printed copy · pp. 156–157"
            note="The page begins as a 2×4 grid sketch. The printed spread keeps the same architecture — the system was committed to before a single panel was drawn cleanly."
          />

          <Transformation
            n="T · 04"
            label="Cover Exploration → Final Cover"
            beforeNode={<Placeholder ratio="3/4" label="Cover direction sheet — three rejected approaches" />}
            afterNode={<Frame src={bookCover.url} alt="Final printed cover" ratio="3/4" />}
            beforeCaption="Cover directions · to supply"
            afterCaption="Final printed cover"
            note="The accepted direction strips the cover to the smallest possible system: logotype, paper, ink, and one turquoise mark. Restraint as a decision, not as an aesthetic."
          />
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-16 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3" />
          <div className="col-span-12 md:col-span-9 border-t border-paper/15 pt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-turquoise">Print preparation</p>
            <p className="mt-3 font-serif text-2xl md:text-[28px] leading-[1.18] tracking-[-0.02em] max-w-3xl">
              CMYK separation, ink coverage, bleed and imposition prepared in-house. The artwork left the studio as press-ready files; the book that came back is the file.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <Placeholder ratio="4/3" label="Press-ready file · imposition spread" />
              <Placeholder ratio="4/3" label="Ink coverage check · proof markup" />
              <Placeholder ratio="4/3" label="Paper stock & turquoise PMS swatch" />
            </div>
          </div>
        </div>
      </section>

      {/* 07 — FINAL OBJECT */}
      <section className="bg-paper py-24 md:py-32">
        <SectionHead n="07" label="Final Object" title="180 pages, hardbound — the file made physical." />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-4 md:gap-6 items-start">
          <Reveal className="col-span-12 md:col-span-7">
            <Frame src={bookMockup.url} alt="Printed interior spread" ratio="4/3" />
            <Caption>Printed interior · pp. 156–157</Caption>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-5">
            <Frame src={bookCover.url} alt="Printed cover" ratio="3/4" />
            <Caption>Printed cover · Book 01</Caption>
          </Reveal>

          <Reveal delay={60} className="col-span-12 md:col-span-4 mt-2">
            <Placeholder ratio="1/1" label="Book in hand — scale reference" />
            <Caption>In hand · to supply</Caption>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-4 mt-2">
            <Placeholder ratio="1/1" label="Spine & signatures — binding detail" />
            <Caption>Binding · to supply</Caption>
          </Reveal>
          <Reveal delay={180} className="col-span-12 md:col-span-4 mt-2">
            <Placeholder ratio="1/1" label="Paper grain & turquoise accent — macro" />
            <Caption>Material · to supply</Caption>
          </Reveal>
        </div>
      </section>

      {/* 08 — OUTCOMES — disciplines integration, not metrics */}
      <section className="bg-ink text-paper py-28 md:py-36">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-turquoise">(08) — Outcomes</p>
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-3xl md:text-[56px] leading-[1.02] tracking-[-0.035em] max-w-4xl">
              Nine disciplines unified inside a single project — from the first blank page to a bound book on the shelf.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-16 md:mt-20 grid grid-cols-12 gap-x-6 gap-y-6 md:gap-y-10">
          {[
            ["Writing", "Story, structure, dialogue."],
            ["Illustration", "Every panel hand-drawn."],
            ["Narrative Design", "Pacing, page turns, silence."],
            ["Character Design", "Cast as a readable system."],
            ["Typography", "Custom Hebrew display lettering."],
            ["Editorial Design", "Grid, hierarchy, rhythm."],
            ["Book Design", "Cover, spine, interior, object."],
            ["Print Production", "CMYK, bleed, paper, ink."],
            ["Publishing", "From file to bound copy in shops."],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={i * 40} className="col-span-12 md:col-span-4 border-t border-paper/15 pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-turquoise">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-serif text-2xl tracking-[-0.02em]">{k}</p>
              <p className="mt-2 text-paper/65 text-[14px] leading-relaxed">{v}</p>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-16 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3" />
          <Reveal className="col-span-12 md:col-span-9">
            <p className="font-serif text-xl md:text-[26px] leading-[1.3] tracking-[-0.015em] text-paper/85 max-w-3xl">
              The project demonstrates the ability to take an idea from a blank page to a finished printed object — owning every decision in between.
            </p>
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