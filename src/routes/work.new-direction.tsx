import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import bookCover from "@/assets/nd-cover.png.asset.json";
import bookMockup from "@/assets/nd-book-mockup.jpg.asset.json";
import jerusalemWalk from "@/assets/nd-jerusalem-walk.png.asset.json";
import kiss from "@/assets/nd-kiss.png.asset.json";
import water from "@/assets/nd-water.jpg.asset.json";
import beach from "@/assets/nd-beach.jpg.asset.json";
import pagesCollage from "@/assets/nd-pages-collage.png.asset.json";
import poster from "@/assets/nd-poster.png.asset.json";
import palette from "@/assets/nd-palette.png.asset.json";
import diamondTeal from "@/assets/nd-diamond-teal.png.asset.json";
import diamondGreen from "@/assets/nd-diamond-green.png.asset.json";
import sparkCoral from "@/assets/nd-spark-coral.png.asset.json";
import sparkOlive from "@/assets/nd-spark-olive.png.asset.json";
import sparkNavy from "@/assets/nd-spark-navy.png.asset.json";
import starCream from "@/assets/nd-star-cream.png.asset.json";
import circleTurq from "@/assets/nd-circle-turquoise.png.asset.json";
import circleNavy from "@/assets/nd-circle-navy.png.asset.json";

export const Route = createFileRoute("/work/new-direction")({
  head: () => ({
    meta: [
      { title: "New Direction — A Graphic Novel by Niv Haviv" },
      { name: "description", content: "New Direction — a graphic novel born from a long silence. A story about grief, family secrets, faith, guilt, and the consequences of looking away. Written & illustrated by Niv Haviv." },
      { property: "og:title", content: "New Direction — A Graphic Novel" },
      { property: "og:description", content: "A graphic novel born from a long silence. About grief, family secrets, faith, guilt, and the consequences of looking away." },
      { property: "og:image", content: bookCover.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: bookCover.url },
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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-6 flex items-center justify-between text-ink">
        <Link to="/" className="flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] uppercase">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
          Niv Haviv
        </Link>
        <Link to="/" className="font-mono text-[11px] uppercase tracking-[0.18em] hover:text-coral transition-colors">
          ← Index
        </Link>
      </div>
    </header>
  );
}

/* decorative motif — comic-book graphic */
function Motif({
  src, size = 64, top, left, right, bottom, rotate = 0, opacity = 1, className = "",
}: {
  src: string; size?: number;
  top?: number | string; left?: number | string; right?: number | string; bottom?: number | string;
  rotate?: number; opacity?: number; className?: string;
}) {
  const style: CSSProperties = {
    width: size, height: size, top, left, right, bottom, opacity,
    transform: `rotate(${rotate}deg)`,
  };
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      loading="lazy"
      className={`pointer-events-none absolute select-none ${className}`}
      style={style}
    />
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink-muted">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
      <span>{n} — {label}</span>
    </div>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
      <span className="text-coral">▸</span> {children}
    </p>
  );
}

/* ───── page ───── */

function NewDirectionPage() {
  return (
    <main className="bg-cream text-ink overflow-hidden">
      <MiniNav />

      {/* ───── 01 — HERO ───── */}
      <section className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 55% at 78% 30%, color-mix(in oklab, var(--coral) 22%, transparent), transparent 70%), radial-gradient(50% 50% at 14% 78%, color-mix(in oklab, var(--turquoise) 18%, transparent), transparent 75%)" }}
        />
        {/* decorative motifs */}
        <Motif src={diamondTeal.url} size={72} top={"22%"} left={"6%"} rotate={-8} opacity={0.85} className="hidden md:block" />
        <Motif src={sparkCoral.url} size={56} top={"68%"} left={"10%"} rotate={12} opacity={0.9} className="hidden md:block" />
        <Motif src={starCream.url} size={84} top={"14%"} right={"8%"} rotate={-12} className="hidden md:block" />
        <Motif src={circleTurq.url} size={120} bottom={"6%"} right={"9%"} className="hidden md:block" />
        <Motif src={sparkNavy.url} size={36} top={"6%"} left={"38%"} rotate={20} className="hidden md:block" />

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-32 md:pt-36 pb-20 md:pb-28">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Cover */}
            <Reveal className="col-span-12 lg:col-span-6 order-1 flex justify-center lg:justify-start">
              <div className="relative">
                <Motif src={diamondGreen.url} size={64} top={-28} left={-32} rotate={-18} className="block z-10" />
                <Motif src={sparkCoral.url} size={48} bottom={-18} right={-22} rotate={14} className="block z-10" />
                <img
                  src={bookCover.url}
                  alt="New Direction — book cover"
                  className="block max-h-[78vh] w-auto h-auto select-none rounded-[2px]"
                  style={{ filter: "drop-shadow(0 40px 70px rgba(20,20,22,.28))", transform: "rotate(-2deg)" }}
                />
              </div>
            </Reveal>

            {/* Copy */}
            <div className="col-span-12 lg:col-span-6 order-2">
              <Reveal>
                <SectionLabel n="01" label="A Graphic Novel by Niv Haviv" />
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 font-serif text-[clamp(56px,9.5vw,160px)] leading-[0.86] tracking-[-0.045em]">
                  <span className="block">NEW</span>
                  <span className="block italic text-coral">Direction</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-8 font-serif text-xl md:text-[26px] leading-[1.32] text-ink max-w-xl">
                  A graphic novel born from a long silence. A story about <em className="text-turquoise-deep">grief</em>, <em className="text-coral">family secrets</em>, <em>faith</em>, and the <em>consequences of looking away</em>.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                  <span>300+ Pages</span>
                  <span className="text-coral">·</span>
                  <span>Mature Readers 16+</span>
                  <span className="text-coral">·</span>
                  <span>Written &amp; Illustrated by Niv Haviv</span>
                </div>
              </Reveal>
              <Reveal delay={440}>
                <a
                  href="#chapters"
                  className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink text-paper px-7 py-4 font-mono text-[11px] uppercase tracking-[0.24em] transition-colors hover:bg-coral hover:text-ink"
                >
                  Read Chapters
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 02 — THE STORY ───── */}
      <section className="relative bg-paper py-24 md:py-32">
        <Motif src={circleNavy.url} size={56} top={48} right={"8%"} className="hidden md:block" />
        <Motif src={sparkOlive.url} size={44} bottom={64} left={"10%"} rotate={-10} className="hidden md:block" />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12 items-center">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative">
              <img
                src={jerusalemWalk.url}
                alt="Arieh and Roy walking through Jerusalem"
                className="block w-full h-auto"
                style={{ filter: "drop-shadow(0 18px 36px rgba(20,20,22,.14))" }}
              />
            </div>
            <Caption>Arieh &amp; Roy · Jerusalem</Caption>
          </Reveal>

          <div className="col-span-12 md:col-span-5">
            <Reveal><SectionLabel n="02" label="The Story" /></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-serif text-4xl md:text-[56px] leading-[0.98] tracking-[-0.035em]">
                After Rafael's death,<br /> two worlds collide.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 space-y-5 text-ink text-lg leading-relaxed max-w-md">
                <p><span className="font-serif italic text-turquoise-deep">Arieh</span> — a religious student from Jerusalem.</p>
                <p><span className="font-serif italic text-coral">Roy</span> — a secular young man from Tel Aviv.</p>
                <p className="text-ink-muted">Their connection changes everything.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── 03 — VISUAL LANGUAGE ───── */}
      <section className="relative bg-cream border-y border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-12 md:mb-16">
            <Reveal className="col-span-12 md:col-span-7">
              <SectionLabel n="03" label="Visual Language" />
              <h2 className="mt-6 font-serif text-4xl md:text-[60px] leading-[0.98] tracking-[-0.04em]">
                A complete <span className="italic text-coral">graphic identity</span>.
              </h2>
            </Reveal>
            <Reveal delay={120} className="col-span-12 md:col-span-5">
              <p className="text-ink-muted text-[15px] leading-relaxed max-w-sm md:ml-auto">
                Diamonds, stars, sparks, hand-drawn arrows and circles — recurring motifs that travel through the book.
              </p>
            </Reveal>
          </div>

          {/* Color palette */}
          <Reveal>
            <div className="relative">
              <img
                src={palette.url}
                alt="New Direction — full color palette"
                className="block w-full h-auto rounded-sm"
                style={{ filter: "drop-shadow(0 14px 28px rgba(20,20,22,.10))" }}
              />
            </div>
            <Caption>Color palette · 28 swatches used throughout the book</Caption>
          </Reveal>

          {/* Motifs grid */}
          <Reveal delay={120}>
            <div className="mt-12 md:mt-16 grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
              {[
                { src: diamondTeal.url,  label: "Diamond" },
                { src: diamondGreen.url, label: "Gem" },
                { src: sparkCoral.url,   label: "Spark" },
                { src: starCream.url,    label: "Star" },
                { src: sparkOlive.url,   label: "Spark" },
                { src: circleTurq.url,   label: "Circle" },
                { src: circleNavy.url,   label: "Circle" },
                { src: sparkNavy.url,    label: "Spark" },
              ].map((m) => (
                <div key={m.label + m.src} className="flex flex-col items-center">
                  <div className="aspect-square w-full bg-paper border border-hairline rounded-sm flex items-center justify-center p-5 md:p-7 transition-transform hover:-translate-y-1">
                    <img src={m.src} alt={m.label} loading="lazy" className="w-full h-full object-contain" />
                  </div>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Decorative poster */}
          <Reveal delay={180}>
            <div className="mt-16 md:mt-20 grid grid-cols-12 gap-6 md:gap-10 items-center">
              <div className="col-span-12 md:col-span-7">
                <img
                  src={poster.url}
                  alt="New Direction — promotional poster"
                  className="block w-full h-auto rounded-sm"
                  style={{ filter: "drop-shadow(0 16px 32px rgba(20,20,22,.14))" }}
                />
                <Caption>Poster · the visual language assembled</Caption>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="font-serif text-2xl md:text-[28px] leading-[1.2] tracking-[-0.02em] text-ink max-w-md">
                  Coral, turquoise, pink and cream — the book's mood lives in the palette before a single word is read.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── 04 — CHARACTER MOMENTS ───── */}
      <section className="relative bg-paper py-24 md:py-32" id="chapters">
        <Motif src={starCream.url} size={88} top={56} left={"7%"} rotate={-8} className="hidden md:block" />
        <Motif src={sparkCoral.url} size={56} bottom={64} right={"8%"} rotate={14} className="hidden md:block" />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <SectionLabel n="04" label="Character Moments" />
            <h2 className="mt-6 font-serif text-4xl md:text-[64px] leading-[0.98] tracking-[-0.04em] max-w-3xl">
              Quiet scenes that <span className="italic text-coral">carry the weight</span>.
            </h2>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-12 md:col-span-7">
              <img src={beach.url} alt="Beach scene — Arieh and Roy" loading="lazy" className="block w-full h-auto" style={{ filter: "drop-shadow(0 18px 36px rgba(20,20,22,.14))" }} />
              <Caption>Beach · the first crack</Caption>
            </Reveal>
            <Reveal delay={100} className="col-span-12 md:col-span-5">
              <img src={water.url} alt="Roy in the water" loading="lazy" className="block w-full h-auto" style={{ filter: "drop-shadow(0 18px 36px rgba(20,20,22,.14))" }} />
              <Caption>Roy · in the water</Caption>
            </Reveal>
            <Reveal delay={180} className="col-span-12 md:col-span-12">
              <img src={kiss.url} alt="The kiss" loading="lazy" className="block w-full h-auto" style={{ filter: "drop-shadow(0 18px 36px rgba(20,20,22,.14))" }} />
              <Caption>The kiss</Caption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── 05 — INSIDE THE BOOK ───── */}
      <section className="relative bg-cream border-y border-hairline py-24 md:py-32">
        <Motif src={circleTurq.url} size={120} top={"-3%"} right={"5%"} className="hidden md:block" />
        <Motif src={diamondTeal.url} size={60} bottom={"6%"} left={"6%"} rotate={-14} className="hidden md:block" />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
            <div>
              <SectionLabel n="05" label="Inside the Book" />
              <h2 className="mt-6 font-serif text-4xl md:text-[64px] leading-[0.98] tracking-[-0.04em]">
                Six pages, <span className="italic text-coral">one breath</span>.
              </h2>
            </div>
          </div>

          <Reveal>
            <img
              src={pagesCollage.url}
              alt="Six interior pages from New Direction"
              className="block w-full h-auto rounded-sm"
              style={{ filter: "drop-shadow(0 20px 40px rgba(20,20,22,.14))" }}
            />
            <Caption>Interior pages · selected sequence</Caption>
          </Reveal>
        </div>
      </section>

      {/* ───── 06 — BOOK DESIGN ───── */}
      <section className="relative bg-paper py-24 md:py-32">
        <Motif src={sparkOlive.url} size={48} top={64} right={"10%"} rotate={18} className="hidden md:block" />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <SectionLabel n="06" label="Book Design" />
            <h2 className="mt-6 font-serif text-4xl md:text-[64px] leading-[0.98] tracking-[-0.04em] max-w-3xl">
              The printed <span className="italic text-coral">object</span>.
            </h2>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-12 gap-4 md:gap-6 items-start">
            <Reveal className="col-span-12 md:col-span-8">
              <img
                src={bookMockup.url}
                alt="New Direction — printed book mockup"
                className="block w-full h-auto rounded-sm"
                style={{ filter: "drop-shadow(0 22px 44px rgba(20,20,22,.18))" }}
              />
              <Caption>Printed book · cover &amp; spread</Caption>
            </Reveal>
            <Reveal delay={120} className="col-span-12 md:col-span-4">
              <img
                src={bookCover.url}
                alt="Cover design — final"
                className="block w-full h-auto rounded-sm"
                style={{ filter: "drop-shadow(0 18px 36px rgba(20,20,22,.16))" }}
              />
              <Caption>Cover design · final</Caption>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── 07 — CREATIVE PROCESS ───── */}
      <section className="relative bg-cream border-y border-hairline py-24 md:py-32">
        <Motif src={diamondGreen.url} size={64} top={48} left={"8%"} rotate={-10} className="hidden md:block" />
        <Motif src={sparkNavy.url} size={42} bottom={64} right={"10%"} rotate={16} className="hidden md:block" />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <SectionLabel n="07" label="Creative Process" />
            <h2 className="mt-6 font-serif text-4xl md:text-[60px] leading-[0.98] tracking-[-0.04em] max-w-3xl">
              From the first <span className="italic text-coral">scribble</span>.
            </h2>
          </Reveal>

          <div className="mt-14 md:mt-20 grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-12 md:col-span-6">
              <div className="aspect-[4/3] w-full rounded-sm border border-dashed border-coral/50 bg-paper flex flex-col items-center justify-center text-center px-6">
                <img src={sparkCoral.url} alt="" aria-hidden className="w-10 h-10 mb-3 opacity-80" />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-coral">Sketch · to supply</span>
                <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">Character study · pencil</span>
              </div>
              <Caption>Process · pencil studies</Caption>
            </Reveal>
            <Reveal delay={120} className="col-span-12 md:col-span-6">
              <div className="aspect-[4/3] w-full rounded-sm border border-dashed border-turquoise/50 bg-paper flex flex-col items-center justify-center text-center px-6">
                <img src={diamondTeal.url} alt="" aria-hidden className="w-10 h-10 mb-3 opacity-80" />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-turquoise-deep">Page sketch · to supply</span>
                <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">Layout thumbnail · grid</span>
              </div>
              <Caption>Process · panel layout</Caption>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <p className="mt-10 max-w-2xl text-ink-muted text-[15px] leading-relaxed">
              Every page is built twice — once in pencil, once in ink. The motifs you've seen across this page started as marks in a sketchbook.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───── 08 — FINAL RESULT ───── */}
      <section className="relative bg-paper py-28 md:py-40">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 50% at 25% 35%, color-mix(in oklab, var(--coral) 18%, transparent), transparent 70%), radial-gradient(50% 50% at 80% 70%, color-mix(in oklab, var(--turquoise) 16%, transparent), transparent 75%)" }}
        />
        <Motif src={starCream.url} size={96} top={64} left={"8%"} rotate={-12} className="hidden md:block" />
        <Motif src={sparkCoral.url} size={52} top={"22%"} right={"10%"} rotate={14} className="hidden md:block" />
        <Motif src={circleNavy.url} size={56} bottom={64} left={"12%"} className="hidden md:block" />
        <Motif src={diamondTeal.url} size={64} bottom={"15%"} right={"7%"} rotate={-10} className="hidden md:block" />

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <Reveal className="col-span-12 md:col-span-7 order-2 md:order-1">
              <SectionLabel n="08" label="Final Result" />
              <h2 className="mt-6 font-serif text-5xl md:text-[88px] leading-[0.92] tracking-[-0.045em] max-w-2xl">
                A personal graphic novel<br />
                <span className="italic text-coral">years in the making</span>.
              </h2>
              <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.28em] text-ink-muted">
                Coming soon
              </p>
            </Reveal>

            <Reveal delay={160} className="col-span-12 md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src={bookCover.url}
                  alt="New Direction — final cover"
                  className="block max-h-[64vh] w-auto h-auto select-none rounded-[2px]"
                  style={{ filter: "drop-shadow(0 36px 64px rgba(20,20,22,.28))", transform: "rotate(-3deg)" }}
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={260}>
            <div className="mt-16 md:mt-24">
              <img
                src={bookMockup.url}
                alt="New Direction — printed mockup"
                className="block w-full h-auto rounded-sm"
                style={{ filter: "drop-shadow(0 28px 56px rgba(20,20,22,.20))" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* NEXT */}
      <Link to="/work/national-geographic-kids" className="group block bg-ink text-paper">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
            <span>Next Project</span>
            <span>02 / 05</span>
          </div>
          <div className="mt-6 flex items-baseline justify-between gap-6">
            <h3 className="font-serif text-5xl md:text-[8vw] leading-[0.9] tracking-[-0.04em] group-hover:text-coral transition-colors">
              National Geographic Kids
            </h3>
            <span className="font-serif text-4xl md:text-6xl inline-block transition-transform duration-500 group-hover:translate-x-3">→</span>
          </div>
        </div>
      </Link>
    </main>
  );
}