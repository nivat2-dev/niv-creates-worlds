import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import bookCover from "@/assets/nd-cover.png.asset.json";
import bookMockup from "@/assets/nd-book-mockup.png.asset.json";
import jerusalemWalk from "@/assets/nd-jerusalem-walk.png.asset.json";
import kiss from "@/assets/nd-kiss.png.asset.json";
import water from "@/assets/nd-water.jpg.asset.json";
import logoEn from "@/assets/nd-logo-en.png.asset.json";
import logoHe from "@/assets/nd-logo-he.png.asset.json";
import processCharacters from "@/assets/nd-process-characters.jpg";
import processLayouts from "@/assets/nd-process-layouts.jpg";
import processType from "@/assets/nd-process-type.jpg";
import processPrint from "@/assets/nd-process-print.jpg";

export const Route = createFileRoute("/work/new-direction")({
  head: () => ({
    meta: [
      { title: "New Direction — Graphic Novel · Niv Haviv" },
      { name: "description", content: "An original graphic novel — story, characters, typography and book design built from a single visual language." },
      { property: "og:image", content: bookCover.url },
    ],
  }),
  component: NewDirectionPage,
});

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

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(24px)",
      transition: `opacity .9s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
    }}>{children}</div>
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

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
      ({n}) — {children}
    </p>
  );
}

function Frame({ src, alt, ratio = "4/5", className = "" }: { src: string; alt: string; ratio?: string; className?: string }) {
  return (
    <div className={`lift-img relative w-full overflow-hidden bg-paper-deep ${className}`} style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
    </div>
  );
}

function NewDirectionPage() {
  const y = useScrollY();

  return (
    <main className="bg-paper text-ink">
      <MiniNav />

      {/* HERO — logo as the mark, cover floats right, no overscaled photo */}
      <section className="relative min-h-[100vh] w-full overflow-hidden bg-ink text-paper">
        {/* soft turquoise haze */}
        <div className="absolute inset-0 pointer-events-none opacity-40"
             style={{ background: "radial-gradient(60% 50% at 70% 30%, color-mix(in oklab, var(--color-turquoise) 28%, transparent), transparent 70%)" }} />

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-32">
          <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70">
            <span>00 — Signature Project</span>
            <span>2024</span>
          </div>
          <div className="mt-8 h-px w-full bg-paper/15" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-12 md:pt-16 pb-20 md:pb-24 grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-7">
            <img
              src={logoEn.url}
              alt="New Direction — logo"
              className="block w-[78%] max-w-[560px] h-auto select-none"
              style={{ filter: "drop-shadow(0 12px 40px rgba(0,0,0,.35))" }}
            />
            <h1 className="sr-only">New Direction</h1>
            <Reveal delay={150}>
              <p className="mt-10 font-serif text-2xl md:text-[28px] leading-[1.25] text-paper/90 max-w-xl">
                An original 180-page graphic novel — story, characters, typography and book design built from a single visual language.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 max-w-md font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
              <div><span className="block text-paper/40">Client</span><span className="text-paper">Self-initiated</span></div>
              <div><span className="block text-paper/40">Role</span><span className="text-paper">Author · Illustrator · Designer</span></div>
              <div><span className="block text-paper/40">Year</span><span className="text-paper">2024</span></div>
              <div><span className="block text-paper/40">Pages</span><span className="text-paper">180</span></div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5 relative flex items-center justify-center">
            <img
              src={bookCover.url}
              alt="New Direction — printed book"
              className="block max-h-[78vh] w-auto h-auto select-none"
              style={{
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,.55))",
                transform: `translateY(${y * -0.08}px) rotate(-2deg)`,
              }}
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW + ROLE */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3"><SectionLabel n="01">Overview</SectionLabel></div>
          <Reveal className="col-span-12 md:col-span-6">
            <p className="font-serif text-2xl md:text-[34px] leading-[1.2] tracking-[-0.02em] text-ink">
              New Direction is a complete authored world — a 180-page graphic novel I wrote, illustrated, designed and prepared for print end-to-end. The story follows a young protagonist whose turquoise pendant becomes a compass for change.
            </p>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-3 self-end">
            <img src={logoHe.url} alt="כיוון חדש — Hebrew logotype" className="w-full max-w-[220px] h-auto ml-auto block" />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted text-right">Original Hebrew identity · כיוון חדש</p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-20 md:mt-28 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3"><SectionLabel n="02">My Role</SectionLabel></div>
          <Reveal className="col-span-12 md:col-span-9">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Graphic Novel", "Character Design", "Illustration", "Typography", "Publishing"].map((d) => (
                <span key={d} className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink border border-hairline rounded-full px-3 py-1.5">{d}</span>
              ))}
            </div>
            <p className="text-ink-muted leading-relaxed max-w-2xl text-lg">
              From the first sketch to the printed spine. Story development, character design, panel-by-panel illustration, custom lettering, color, layout and production. The pendant — a recurring symbol — was designed as both a narrative object and a piece of brand identity for the book.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGE — tight, with a small accent image pair */}
      <section className="bg-paper-deep py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-3"><SectionLabel n="03">Challenge</SectionLabel></div>
          <Reveal className="col-span-12 md:col-span-6">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1] tracking-[-0.035em] text-ink">
              Make a self-published debut feel as considered as a major publisher release — visually, narratively and physically.
            </h2>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-3">
            <Frame src={kiss.url} alt="Character study — the kiss" ratio="1/1" />
          </Reveal>
        </div>
      </section>

      {/* PROCESS — text rows + a paired process image strip */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 mb-14">
          <div className="col-span-12 md:col-span-3"><SectionLabel n="04">Process</SectionLabel></div>
          <Reveal className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1] tracking-[-0.035em] text-ink">How it came together.</h2>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          {/* Left: process steps */}
          <div className="col-span-12 lg:col-span-7">
            <div className="border-t border-hairline">
              {[
                { step: "01", title: "Story & world", body: "Beat sheet, character arcs and the pendant as the story's emotional engine. Tone over plot — quiet, hopeful, a little strange." },
                { step: "02", title: "Visual language", body: "Muted paper, deep ink, one signal color. Every panel respects this restraint — the world breathes." },
                { step: "03", title: "Panels", body: "Hand-painted spreads, scanned and composited. Hundreds of panels, each its own composition before being woven into the page." },
                { step: "04", title: "Typography & layout", body: "Custom Hebrew lettering for chapter openers; Fraunces for body. Page grids tuned to the reading pace of each scene." },
                { step: "05", title: "Print", body: "Paper stock, ink coverage, spine treatment and a turquoise accent on the cover. An object, not a product." },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 60} className="grid grid-cols-12 gap-4 border-b border-hairline py-6">
                  <div className="col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-turquoise-deep pt-1">{s.step}</div>
                  <div className="col-span-10 md:col-span-4">
                    <h3 className="font-serif text-2xl tracking-[-0.025em]">{s.title}</h3>
                  </div>
                  <div className="col-span-12 md:col-span-6 text-ink-muted leading-relaxed text-[15px]">{s.body}</div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: paired process imagery, properly sized */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4 self-start lg:sticky lg:top-24">
            <Reveal className="col-span-2"><Frame src={pagesCollage.url} alt="Six-page panel composition sheet" ratio="1/1" /></Reveal>
            <Reveal delay={80}><Frame src={jerusalemWalk.url} alt="Walking through Jerusalem — panel" ratio="1/1" /></Reveal>
            <Reveal delay={140}><Frame src={beach.url} alt="Beach promenade — panel" ratio="1/1" /></Reveal>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="bg-ink text-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">(05) — Outcome</p>
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <p className="font-serif text-2xl md:text-4xl leading-[1.2] tracking-[-0.025em] max-w-4xl">
              A complete published graphic novel — sold through independent bookshops, exhibited at design festivals, and the founding artifact of the studio's storytelling work.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-paper/15 pt-8">
              {[
                { value: "180", label: "Pages" },
                { value: "300+", label: "Painted panels" },
                { value: "1", label: "Pendant, hand-made" },
                { value: "∞", label: "Re-reads" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-4xl md:text-5xl text-turquoise tracking-[-0.04em]">{s.value}</div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY — bespoke editorial grid, sized for quality */}
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mb-12 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3"><SectionLabel n="06">Gallery</SectionLabel></div>
          <Reveal className="col-span-12 md:col-span-9 flex items-end justify-between gap-6">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1] tracking-[-0.035em] text-ink">Selected frames.</h2>
            <p className="hidden md:block font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">Cover · Spreads · Panels · Characters</p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 space-y-4 md:space-y-6">
          {/* Row 1 — cover (tall, 4) + spread (8, landscape) */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-12 md:col-span-4">
              <Frame src={bookCover.url} alt="New Direction — printed cover" ratio="3/4" />
            </Reveal>
            <Reveal delay={80} className="col-span-12 md:col-span-8">
              <Frame src={bookMockup.url} alt="Open book — interior spread" ratio="4/3" />
            </Reveal>
          </div>

          {/* Row 2 — collage (6, square) + two stacked squares (kiss/water) */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-12 md:col-span-6">
              <Frame src={pagesCollage.url} alt="Six-page panel composition" ratio="1/1" />
            </Reveal>
            <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4 md:gap-6">
              <Reveal delay={60}><Frame src={kiss.url} alt="The kiss" ratio="1/1" /></Reveal>
              <Reveal delay={120}><Frame src={water.url} alt="Floating — bird's-eye scene" ratio="1/1" /></Reveal>
              <Reveal delay={180} className="col-span-2"><Frame src={beach.url} alt="Beach promenade" ratio="2/1" /></Reveal>
            </div>
          </div>

          {/* Row 3 — jerusalem walk + poster (paired squares) */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-12 md:col-span-7">
              <Frame src={jerusalemWalk.url} alt="Walking through Jerusalem" ratio="1/1" />
            </Reveal>
            <Reveal delay={80} className="col-span-12 md:col-span-5">
              <Frame src={poster.url} alt="Character poster — Roi & Arie" ratio="1/1" />
            </Reveal>
          </div>
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