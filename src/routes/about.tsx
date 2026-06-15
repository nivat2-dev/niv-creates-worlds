import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import signatureAsset from "@/assets/niv-signature-v2.png.asset.json";
import nivIllustrationAsset from "@/assets/niv-portrait-v3.png.asset.json";
import ndArieh from "@/assets/nd-arieh-roy-circle.png.asset.json";
import ndKiss from "@/assets/nd-kiss.png.asset.json";
import ndJerusalem from "@/assets/nd-jerusalem-walk.png.asset.json";
import ndBeach from "@/assets/nd-beach-scene.png.asset.json";
import ndPages from "@/assets/nd-pages-collage-v2.png.asset.json";
import ndBookMockup from "@/assets/nd-book-mockup-v2.png.asset.json";
import ndSpark from "@/assets/nd-spark-coral.png.asset.json";
import ndDiamond from "@/assets/nd-diamond-teal.png.asset.json";
import ndStar from "@/assets/nd-star-cream.png.asset.json";
import sketches1 from "@/assets/wia-sketches-1.png.asset.json";
import shenkar3 from "@/assets/wia-shenkar-3.png.asset.json";
import shenkar8 from "@/assets/wia-shenkar-8.jpg.asset.json";
import theatre2 from "@/assets/wia-theatre-2.jpg.asset.json";
import eilatChildhood from "@/assets/wia-eilat-childhood.jpg.asset.json";
import ngkSpread from "@/assets/ngk-spread.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Niv Haviv" },
      {
        name: "description",
        content:
          "An editorial portrait of Niv Haviv — graphic designer, illustrator and storyteller. Journey, philosophy and what's next.",
      },
      { property: "og:title", content: "About — Niv Haviv" },
      {
        property: "og:description",
        content:
          "Graphic Designer, Illustrator, Storyteller. An editorial portrait by Niv Haviv.",
      },
      { property: "og:image", content: nivIllustrationAsset.url },
    ],
  }),
  component: AboutPage,
});

/* ───────── primitives (matched to homepage language) ───────── */

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
      { threshold: 0.15 },
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
        transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 1s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
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
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(-center * speed);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

function ChapterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-ink leading-[1.05] tracking-[-0.02em] text-[8vw] sm:text-[5vw] md:text-[3.5vw] lg:text-[2.8vw]">
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-ink/65 text-[15px] md:text-[16px] leading-[1.75] max-w-[44ch] ${className}`}>
      {children}
    </p>
  );
}

/* ───────── top nav (minimal, matches homepage tone) ───────── */

function MiniNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src={signatureAsset.url} alt="Niv Haviv" className="h-10 md:h-12 w-auto" draggable={false} />
        </Link>
        <nav className="flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/70">
          <Link to="/" className="hover:text-ink transition-colors">Work</Link>
          <Link to="/who-i-am" className="hover:text-ink transition-colors">Who I Am</Link>
          <span className="text-ink relative">
            About
            <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-turquoise" />
          </span>
        </nav>
      </div>
    </header>
  );
}

/* ───────── page ───────── */

function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "#F5F5F3", color: "var(--ink)" }}>
      <MiniNav />
      <Hero />
      <Journey />
      <Storytelling />
      <Philosophy />
      <Beyond />
      <Today />
      <Footer />
    </div>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative pt-40 md:pt-56 pb-24 md:pb-40 overflow-hidden">
      {/* faint accent line */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 h-px w-24 bg-turquoise/60" />

      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-ink/45 mb-10">
            <span className="inline-block w-10 h-px bg-ink/25 align-middle mr-3" />
            About
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-serif text-ink leading-[0.95] tracking-[-0.035em] text-[18vw] md:text-[14vw] lg:text-[12vw]">
            About<br />
            <span className="italic text-turquoise-deep">Niv.</span>
          </h1>
        </Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-8 items-end">
          <Reveal className="col-span-12 md:col-span-6 md:col-start-7" delay={260}>
            <p className="font-serif text-ink/85 leading-[1.25] tracking-[-0.015em] text-[22px] md:text-[28px] lg:text-[32px] max-w-[20ch]">
              Graphic Designer,<br />
              Illustrator,<br />
              <span className="italic text-turquoise-deep">Storyteller.</span>
            </p>
          </Reveal>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-ink/40">
        <span className="font-mono text-[10px] uppercase tracking-[0.36em]">Scroll</span>
        <span className="block w-px h-12 bg-ink/30 scroll-cue" />
      </div>
    </section>
  );
}

/* ── 01 Journey ── */
function Journey() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 space-y-8">
          <Reveal>
            <SectionLabel index="01" title="My Journey" />
          </Reveal>
          <Reveal delay={100}>
            <ChapterTitle>
              From the <span className="italic text-turquoise-deep">stage</span><br />
              to the page.
            </ChapterTitle>
          </Reveal>
          <Reveal delay={200}>
            <Body>
              It started in theatre — light, timing, the way a room holds its breath.
              Design came later, but the instinct was the same: build a world, then invite
              someone in.
            </Body>
          </Reveal>
          <Reveal delay={280}>
            <Body>
              After studying design and a stretch in advertising, I spent years as lead
              designer at <span className="text-ink">National Geographic Kids</span> — learning
              that craft and curiosity belong on the same spread.
            </Body>
          </Reveal>

          {/* tiny timeline */}
          <Reveal delay={360}>
            <ul className="pt-6 space-y-3 font-mono text-[11px] uppercase tracking-[0.24em] text-ink/55">
              {[
                ["Theatre", "early years"],
                ["Shenkar", "design studies"],
                ["Agency", "advertising"],
                ["NatGeo Kids", "lead designer"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline gap-6">
                  <span className="text-ink">{k}</span>
                  <span className="flex-1 border-b border-dashed border-ink/15" />
                  <span className="text-ink/45">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* opposite-side illustrated composition */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7 relative h-[460px] md:h-[560px]">
          <Parallax speed={0.05} className="absolute inset-0">
            <img
              src={sketches1.url}
              alt=""
              className="absolute top-6 left-4 w-[64%] opacity-90 mix-blend-multiply"
              draggable={false}
            />
          </Parallax>
          <Parallax speed={-0.06} className="absolute inset-0">
            <img
              src={ndArieh.url}
              alt=""
              className="absolute bottom-6 right-6 w-[42%] drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              draggable={false}
            />
          </Parallax>
          <img
            src={ndStar.url}
            alt=""
            className="absolute top-1/3 right-2 w-10 float-slow"
            style={{ ["--rot" as any]: "8deg" }}
            draggable={false}
          />
          <img
            src={ndDiamond.url}
            alt=""
            className="absolute bottom-10 left-10 w-8 float-med"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

/* ── 02 Storytelling ── */
function Storytelling() {
  return (
    <section className="relative py-28 md:py-40 border-t border-ink/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 items-center">
        {/* visual on the left this time */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6 relative h-[480px] md:h-[600px] order-2 md:order-1">
          <Parallax speed={0.04} className="absolute inset-0">
            <img
              src={ndBookMockup.url}
              alt="New Direction — book"
              className="absolute top-4 left-2 w-[78%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
              draggable={false}
            />
          </Parallax>
          <Parallax speed={-0.05} className="absolute inset-0">
            <img
              src={ndPages.url}
              alt=""
              className="absolute bottom-2 right-0 w-[46%] rotate-[6deg] opacity-95"
              draggable={false}
            />
          </Parallax>
          <img
            src={ndSpark.url}
            alt=""
            className="absolute top-10 right-8 w-12 float-slow"
            draggable={false}
          />
          <img
            src={ndKiss.url}
            alt=""
            className="absolute bottom-16 left-2 w-20 float-med opacity-90"
            draggable={false}
          />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 space-y-8 order-1 md:order-2">
          <Reveal>
            <SectionLabel index="02" title="Graphic Novels & Storytelling" />
          </Reveal>
          <Reveal delay={100}>
            <ChapterTitle>
              Stories with a <span className="italic text-turquoise-deep">pulse.</span>
            </ChapterTitle>
          </Reveal>
          <Reveal delay={200}>
            <Body>
              I write and draw original stories — characters first, plot second.
              <span className="text-ink"> New Direction</span> is the current home for that
              work: a graphic novel about choice, return, and the long quiet between them.
            </Body>
          </Reveal>
          <Reveal delay={280}>
            <Body>
              Every panel is an act of narrative design — pacing a reader's eye the same
              way you'd pace a scene on stage.
            </Body>
          </Reveal>
          <Reveal delay={360}>
            <Link
              to="/work/new-direction"
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ink hover:text-turquoise-deep transition-colors"
            >
              <span>Read the project</span>
              <span className="inline-block w-10 h-px bg-ink group-hover:bg-turquoise" />
              <span>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── 03 Philosophy ── */
function Philosophy() {
  const tenets = [
    ["Clarity", "Strip until only the meaning remains."],
    ["Emotion", "If it doesn't move, it doesn't matter."],
    ["Storytelling", "Every layout is a sentence."],
    ["Memory", "Design that people carry home."],
  ];
  return (
    <section className="relative py-28 md:py-44 border-t border-ink/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <SectionLabel index="03" title="Design Philosophy" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-10 font-serif text-ink leading-[1.02] tracking-[-0.025em] text-[12vw] md:text-[7vw] lg:text-[5.6vw] max-w-[16ch]">
            Make it feel<br />
            <span className="italic text-turquoise-deep">unforgettable.</span>
          </h2>
        </Reveal>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 max-w-[1100px]">
          {tenets.map(([k, v], i) => (
            <Reveal key={k} delay={120 + i * 80}>
              <div className="border-t border-ink/15 pt-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/40">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-ink text-[22px] md:text-[26px] tracking-[-0.015em]">
                    {k}
                  </h3>
                </div>
                <Body>{v}</Body>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 04 Beyond Design ── */
function Beyond() {
  const tiles = [
    { src: eilatChildhood.url, label: "Travel", span: "md:col-span-5 md:row-span-2 aspect-[4/5]" },
    { src: sketches1.url, label: "Sketchbooks", span: "md:col-span-4 aspect-[4/3] bg-white" },
    { src: shenkar3.url, label: "Books", span: "md:col-span-3 aspect-square bg-white" },
    { src: theatre2.url, label: "Theatre", span: "md:col-span-4 aspect-[4/3]" },
    { src: ngkSpread.url, label: "Photography", span: "md:col-span-3 aspect-square bg-white" },
    { src: shenkar8.url, label: "Exploration", span: "md:col-span-5 aspect-[16/10]" },
  ];
  return (
    <section className="relative py-28 md:py-40 border-t border-ink/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 items-end mb-16">
          <div className="col-span-12 md:col-span-6 space-y-6">
            <Reveal>
              <SectionLabel index="04" title="Beyond Design" />
            </Reveal>
            <Reveal delay={100}>
              <ChapterTitle>
                Off the <span className="italic text-turquoise-deep">page.</span>
              </ChapterTitle>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-5 md:col-start-8" delay={200}>
            <Body>
              Books I can't put down. Sketchbooks I keep filling. Slow travel,
              long-lens photography, and the small rituals that keep curiosity loud.
            </Body>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 md:auto-rows-[180px]">
          {tiles.map((t, i) => (
            <Reveal
              key={t.label}
              delay={i * 70}
              className={`group relative overflow-hidden ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.label}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.05]"
                draggable={false}
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-500" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white">
                  {t.label}
                </span>
                <span className="h-px flex-1 mx-3 bg-white/50" />
                <span className="font-mono text-[10px] text-white/80">0{i + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 05 Today ── */
function Today() {
  return (
    <section className="relative py-32 md:py-48 border-t border-ink/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6 space-y-8">
          <Reveal>
            <SectionLabel index="05" title="Today" />
          </Reveal>
          <Reveal delay={100}>
            <ChapterTitle>
              Currently <span className="italic text-turquoise-deep">making.</span>
            </ChapterTitle>
          </Reveal>
          <Reveal delay={200}>
            <Body>
              Freelance design, illustration and graphic novels — taking on selected
              collaborations where craft and story are both on the table.
            </Body>
          </Reveal>
          <Reveal delay={300}>
            <a
              href="mailto:nivat2@gmail.com"
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ink hover:text-turquoise-deep transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-turquoise opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-turquoise" />
              </span>
              Available — say hello
              <span>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal className="col-span-12 md:col-span-5 md:col-start-8" delay={200}>
          <ul className="space-y-5 font-mono text-[11px] uppercase tracking-[0.24em] text-ink/55">
            {[
              ["Freelance", "design + art direction"],
              ["Illustration", "editorial · publishing"],
              ["Graphic novels", "long-form storytelling"],
              ["Collaborations", "selected studios"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-baseline gap-6 border-b border-dashed border-ink/15 pb-4">
                <span className="text-ink">{k}</span>
                <span className="flex-1" />
                <span className="text-ink/45 normal-case tracking-normal font-sans text-[13px]">{v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 py-14">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={signatureAsset.url} alt="Niv Haviv" className="h-10 w-auto opacity-80" draggable={false} />
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45">
          © {new Date().getFullYear()} Niv Haviv · All rights reserved
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