import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import bookCover from "@/assets/nd-cover.png.asset.json";
import bookMockup from "@/assets/nd-book-mockup-v2.png.asset.json";
import beachScene from "@/assets/nd-beach-scene.png.asset.json";
import jerusalemWalk from "@/assets/nd-jerusalem-walk.png.asset.json";
import diamondTeal from "@/assets/nd-diamond-teal.png.asset.json";
import sparkCoral from "@/assets/nd-spark-coral.png.asset.json";
import starCream from "@/assets/nd-star-cream.png.asset.json";
import circleTurq from "@/assets/nd-circle-turquoise.png.asset.json";
import nivCreator from "@/assets/niv-creator.jpg.asset.json";
import ariehRoyCircle from "@/assets/nd-arieh-roy-circle.png.asset.json";
import MoreWork from "@/components/MoreWork";

export const Route = createFileRoute("/work/new-direction")({
  head: () => ({
    meta: [
      { title: "New Direction — A Graphic Novel by Niv Haviv" },
      { name: "description", content: "New Direction — a 300-page graphic novel about family, silence, and the truths people leave behind. Written, illustrated and designed by Niv Haviv." },
      { property: "og:title", content: "New Direction — A Graphic Novel" },
      { property: "og:description", content: "A 300-page graphic novel about family, silence, and the truths people leave behind." },
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
        <Link to="/" className="flex items-center gap-2 font-sans text-[12px] tracking-[0.02em]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
          Niv Haviv
        </Link>
        <Link to="/" className="font-sans text-[12px] tracking-[0.02em] hover:text-coral transition-colors">
          ← Index
        </Link>
      </div>
    </header>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-sans text-[12px] tracking-[0.04em] text-ink-muted">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
      <span>{n} — {label}</span>
    </div>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 font-sans text-[12px] text-ink-muted">
      <span className="text-coral">·</span> {children}
    </p>
  );
}

/* ───── page ───── */

function NewDirectionPage() {
  return (
    <main className="bg-cream text-ink">
      <MiniNav />

      {/* ───── 01 — HERO ───── */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 55% at 78% 30%, color-mix(in oklab, var(--coral) 20%, transparent), transparent 70%), radial-gradient(50% 50% at 14% 78%, color-mix(in oklab, var(--turquoise) 16%, transparent), transparent 75%)" }}
        />
        {/* one subtle motif from the visual language */}
        <img src={sparkCoral.url} alt="" aria-hidden className="hidden md:block absolute top-[24%] right-[10%] w-5 opacity-40 pointer-events-none select-none" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-24 md:pt-24 pb-12 md:pb-14 min-h-[58vh] flex items-center">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center w-full">
            <Reveal className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
              <div className="relative max-w-[440px] w-full">
                <img
                  src={bookCover.url}
                  alt="New Direction — book cover"
                  className="block w-full h-auto select-none rounded-[2px]"
                  style={{ filter: "drop-shadow(0 40px 70px rgba(20,20,22,.28))" }}
                />
              </div>
            </Reveal>

            <div className="col-span-12 lg:col-span-6">
              <Reveal><SectionLabel n="01" label="2026" /></Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 font-serif text-[clamp(46px,7vw,116px)] leading-[0.9] tracking-[-0.035em] font-medium">
                  <span className="block">NEW</span>
                  <span className="block italic text-coral">Direction</span>
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-10 font-sans text-lg md:text-[20px] leading-[1.5] text-ink max-w-xl">
                  A 300-page graphic novel about family, silence, and the truths people leave behind.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 02 — PROJECT OVERVIEW ───── */}
      <section className="relative isolate overflow-hidden bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="mx-auto max-w-[620px]">
              <img
                src={bookMockup.url}
                alt="New Direction — open book mockup"
                className="block w-full h-auto"
                style={{ filter: "drop-shadow(0 22px 44px rgba(20,20,22,.18))" }}
              />
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-5">
            <Reveal><SectionLabel n="02" label="The Book" /></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 font-serif text-3xl md:text-[40px] leading-[1.05] tracking-[-0.02em]">
                A 300-page graphic novel.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-4 font-sans text-ink-muted text-[17px] leading-[1.55] max-w-md">
                Written, illustrated and designed by Niv Haviv. Publishing in 2026.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 font-sans text-[12px] text-ink-muted">
                {[
                  ["Pages", "300+"],
                  ["Format", "Graphic Novel"],
                  ["Languages", "Hebrew · English"],
                  ["Audience", "Readers 16+"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-ink-muted/70 text-[11px] uppercase tracking-[0.06em]">{k}</dt>
                    <dd className="mt-1 text-ink-muted">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── 03 — INSIDE THE STORY ───── */}
      <section id="chapters" className="relative isolate overflow-hidden bg-cream border-y border-hairline py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <SectionLabel n="03" label="Inside the Story" />
            <h2 className="mt-5 font-serif text-3xl md:text-[44px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
              Between faith, freedom and grief.
            </h2>
          </Reveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: jerusalemWalk.url, title: "Jerusalem", line: "A family of faith, and the things left unspoken between its walls." },
              { img: beachScene.url,    title: "Tel Aviv",  line: "A city of escape, where freedom and grief share the same shoreline." },
              { img: ariehRoyCircle.url, title: "Arieh & Roy", line: "Two strangers brought together by loss, slowly learning to lean on each other." },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <article className="group">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-paper border border-hairline rounded-sm">
                    <img
                      src={card.img}
                      alt={card.title}
                      loading="lazy"
                      className="block w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl tracking-[-0.01em]">{card.title}</h3>
                  <p className="mt-1.5 font-sans text-[15px] text-ink-muted leading-snug">{card.line}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 04 — VISUAL LANGUAGE ───── */}
      <section className="relative isolate overflow-hidden bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <SectionLabel n="04" label="A visual thread" />
            <h2 className="mt-5 font-serif text-3xl md:text-[40px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
              The colours and shapes that return through the book.
            </h2>
            <p className="mt-5 font-sans text-[16px] leading-[1.6] text-ink-muted max-w-xl">
              Warm cream and coral hold the family scenes in Jerusalem. The deeper teals belong to the sea, to Tel Aviv, and to the quiet hours Arieh and Roy share after the loss. Small motifs — a star, a spark, a diamond — drift through the panels like something half-remembered.
            </p>
            <p className="mt-5 font-serif italic text-[17px] leading-[1.5] text-ink/80 max-w-xl">
              “Some things you don't say out loud. You draw them, and hope someone notices.”
            </p>
          </Reveal>

          {/* Curated palette — narrative colours */}
          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-5 gap-2 md:gap-3 max-w-[560px]">
              {[
                "#F2E7CE", // cream — Jerusalem light
                "#E36B4A", // coral — family warmth
                "#3CA9A1", // turquoise — the sea
                "#1F4F5C", // deep teal — Tel Aviv nights
                "#1B1F2A", // ink — silence
              ].map((hex) => (
                <div key={hex} className="aspect-square rounded-sm border border-hairline" style={{ background: hex }} />
              ))}
            </div>
          </Reveal>

          {/* Recurring symbols — 4 motifs */}
          <Reveal delay={180}>
            <div className="mt-6 grid grid-cols-4 gap-2 md:gap-3 max-w-[480px]">
              {[
                sparkCoral.url,
                starCream.url,
                diamondTeal.url,
                circleTurq.url,
              ].map((src) => (
                <div key={src} className="aspect-square bg-cream border border-hairline rounded-sm flex items-center justify-center p-7">
                  <img src={src} alt="" aria-hidden loading="lazy" className="block w-auto h-auto max-w-full max-h-full" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── 05 — MY ROLE ───── */}
      <section className="relative isolate overflow-hidden bg-cream border-y border-hairline py-16 md:py-24">
        <div className="mx-auto max-w-[1300px] px-6 md:px-10 grid grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal className="col-span-12 md:col-span-6">
            <div className="mx-auto max-w-[396px]">
              <img
                src={nivCreator.url}
                alt="Niv Haviv illustrating New Direction"
                loading="lazy"
                className="block w-full h-auto rounded-sm"
                style={{ filter: "drop-shadow(0 24px 48px rgba(20,20,22,.18))" }}
              />
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-6">
            <Reveal><SectionLabel n="05" label="The Creator" /></Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 font-serif text-3xl md:text-[44px] leading-[1.05] tracking-[-0.02em]">
                Years in the making.
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-6 space-y-5 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-lg">
                <p>New Direction began as a single drawing and grew, slowly, into a 300-page book.</p>
                <p>It was made by one person, over several years — written, drawn and shaped night after night, from the first sketch to the final printed page.</p>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-8 font-sans text-[13px] text-ink-muted">
                Niv Haviv · Graphic Novel · 2026
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
