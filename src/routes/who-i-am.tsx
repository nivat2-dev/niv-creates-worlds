import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import signatureAsset from "@/assets/niv-signature-v2.png.asset.json";
import nivIllustrationAsset from "@/assets/niv-portrait-v3.png.asset.json";
import nivCreatorAsset from "@/assets/niv-creator.jpg.asset.json";

import eilatChildhood from "@/assets/wia-eilat-childhood.jpg.asset.json";
import theatre1 from "@/assets/wia-theatre-1.jpg.asset.json";
import theatre2 from "@/assets/wia-theatre-2.jpg.asset.json";
import theatre3 from "@/assets/wia-theatre-3.jpg.asset.json";
import sketches1 from "@/assets/wia-sketches-1.png.asset.json";
import shenkar1 from "@/assets/wia-shenkar-1.png.asset.json";
import shenkar3 from "@/assets/wia-shenkar-3.png.asset.json";
import shenkar4 from "@/assets/wia-shenkar-4.jpg.asset.json";
import shenkar8 from "@/assets/wia-shenkar-8.jpg.asset.json";

import ngkSpread from "@/assets/ngk-spread.png.asset.json";
import ngkCover from "@/assets/ngk-cover-titanic.png.asset.json";
import ngkLanding from "@/assets/ngk-landing-mockup.png.asset.json";

import azFrontCover from "@/assets/az-front-cover.png.asset.json";
import azNivBook from "@/assets/az-niv-book.jpg.asset.json";
import azSpreadFantasy from "@/assets/az-spread-fantasy.jpg.asset.json";

import ndCover from "@/assets/nd-cover.png.asset.json";
import ndPages from "@/assets/nd-pages-collage-v2.png.asset.json";
import ndBookMockup from "@/assets/nd-book-mockup-v2.png.asset.json";
import ndArieh from "@/assets/nd-arieh-roy-circle.png.asset.json";
import ndJerusalem from "@/assets/nd-jerusalem-walk.png.asset.json";
import ndBeach from "@/assets/nd-beach-scene.png.asset.json";
import ndKiss from "@/assets/nd-kiss.png.asset.json";
import ndSpark from "@/assets/nd-spark-coral.png.asset.json";
import ndStar from "@/assets/nd-star-cream.png.asset.json";
import ndDiamond from "@/assets/nd-diamond-teal.png.asset.json";

export const Route = createFileRoute("/who-i-am")({
  head: () => ({
    meta: [
      { title: "Who I Am — Niv Haviv" },
      {
        name: "description",
        content:
          "A visual journey through theatre, design, illustration and graphic novels — by Niv Haviv.",
      },
      { property: "og:title", content: "Who I Am — Niv Haviv" },
      {
        property: "og:description",
        content: "Storyteller across theatre, design, illustration and publishing.",
      },
      { property: "og:image", content: nivCreatorAsset.url },
    ],
  }),
  component: WhoIAmPage,
});

/* ───────── primitives (matched to homepage) ───────── */

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
  speed = 0.06,
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
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      setOffset(center * speed * -1);
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

function ChapterLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40">
      <span className="text-turquoise-deep">●</span>
      <span>Chapter {n}</span>
      <span className="h-px w-10 bg-ink/20" />
      <span>{label}</span>
    </div>
  );
}

function ChapterTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-serif leading-[0.95] tracking-[-0.04em] text-ink text-[12vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw] ${className}`}
    >
      {children}
    </h2>
  );
}

function ChapterText({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-serif text-[1.4rem] md:text-[1.6rem] leading-[1.4] text-ink/75 max-w-[440px]">
      {children}
    </p>
  );
}

/* ───────── nav ───────── */

function MiniNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-ink/10"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-24 md:h-28 flex items-center justify-between text-ink">
        <Link to="/" aria-label="Niv Haviv — home" className="flex items-center gap-2.5 text-ink">
          <img
            src={signatureAsset.url}
            alt="Niv Haviv signature"
            className="h-14 md:h-16 w-auto select-none"
            draggable={false}
          />
        </Link>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 border border-ink/30 text-ink px-4 py-2 text-[12px] font-mono uppercase tracking-[0.18em] hover:border-ink hover:bg-ink/[0.04] transition-colors"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-0.5">←</span>
          Back to work
        </Link>
      </div>
    </header>
  );
}

/* ───────── page ───────── */

function WhoIAmPage() {
  return (
    <main className="bg-white text-ink overflow-x-hidden">
      <MiniNav />
      <Hero />
      <Ch01Eilat />
      <Ch02Stage />
      <Ch03Design />
      <Ch04NatGeo />
      <Ch05Asaflezet />
      <Ch06NewDirection />
      <Ch07Today />
      <Highlights />
      <Closer />
    </main>
  );
}

/* ───────── HERO ───────── */

function Hero() {
  const y = useScrollY();
  return (
    <section className="relative w-full bg-[#f0f4f8] overflow-hidden">
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-40 md:pt-48 pb-24 md:pb-32 grid grid-cols-12 gap-8 items-end min-h-[92vh]">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink/40 mb-6">
              <span className="inline-block w-8 h-px bg-ink/30 align-middle mr-3" />
              A visual journey
            </p>
          </Reveal>
          <div className="overflow-hidden">
            <h1
              className="font-serif text-ink leading-[0.92] tracking-[-0.04em] text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[8.4vw] word-rise"
              style={{ animationDelay: "120ms" }}
            >
              Who I <span className="italic font-light text-turquoise-deep">am</span>.
            </h1>
          </div>
          <Reveal delay={320}>
            <p className="mt-10 font-serif text-[1.6rem] md:text-[2rem] leading-[1.25] text-ink max-w-[520px]">
              I've always been telling stories.
            </p>
          </Reveal>
          <Reveal delay={460}>
            <p className="mt-5 text-[15px] md:text-[16px] leading-[1.6] text-ink/55 max-w-[420px]">
              Through theatre, design, illustration and graphic novels.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-5 relative flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-[420px] lg:max-w-[480px]"
            style={{ transform: `translateY(${-y * 0.06}px)` }}
          >
            <img
              src={nivIllustrationAsset.url}
              alt="Illustrated portrait of Niv Haviv"
              className="relative z-10 w-full h-auto object-contain select-none rise-in"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink/35 font-mono">
        <span>Scroll to begin</span>
        <span className="block h-16 w-px bg-ink/20 scroll-cue" />
      </div>
    </section>
  );
}

/* ───────── 01 — Eilat ───────── */

function Ch01Eilat() {
  return (
    <section className="relative bg-white py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12 items-center">
        <Reveal className="col-span-12 md:col-span-5 order-2 md:order-1">
          <ChapterLabel n="01" label="Where it began" />
          <ChapterTitle className="mt-6">
            Growing up in <span className="italic font-light text-turquoise-deep">Eilat</span>.
          </ChapterTitle>
          <div className="mt-8">
            <ChapterText>
              I grew up between the desert and the sea. That's where my love for stories began.
            </ChapterText>
          </div>
        </Reveal>

        <div className="col-span-12 md:col-span-7 order-1 md:order-2 relative">
          <Parallax speed={0.05}>
            <div className="relative aspect-[3/4] max-w-[520px] mx-auto overflow-hidden bg-paper-deep">
              <img
                src={eilatChildhood.url}
                alt="Niv as a child in Eilat"
                className="w-full h-full object-cover"
              />
            </div>
          </Parallax>
          <img
            src={ndStar.url}
            aria-hidden
            alt=""
            className="hidden md:block absolute -top-6 -left-4 w-12 opacity-70 float-slow"
          />
        </div>
      </div>
    </section>
  );
}

/* ───────── 02 — Stage ───────── */

function Ch02Stage() {
  return (
    <section className="relative bg-ink text-white py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
            <span className="text-turquoise">●</span>
            <span>Chapter 02</span>
            <span className="h-px w-10 bg-white/20" />
            <span>The stage</span>
          </div>
          <h2 className="mt-6 font-serif leading-[0.95] tracking-[-0.04em] text-[12vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw]">
            Life <span className="italic font-light text-turquoise">on stage</span>.
          </h2>
          <p className="mt-8 font-serif text-[1.4rem] md:text-[1.6rem] leading-[1.4] text-white/75 max-w-[520px]">
            Before design, I was an actor. I performed leading roles in repertory theatres, including Habima.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7" delay={80}>
            <Parallax speed={0.04}>
              <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
                <img src={theatre1.url} alt="Theatre performance — Habima" className="w-full h-full object-cover" />
              </div>
            </Parallax>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5 md:mt-24" delay={180}>
            <Parallax speed={0.07}>
              <div className="relative aspect-[4/5] overflow-hidden bg-black/30">
                <img src={theatre3.url} alt="On stage — leading role" className="w-full h-full object-cover" />
              </div>
            </Parallax>
          </Reveal>
          <Reveal className="col-span-12 md:col-start-3 md:col-span-8" delay={260}>
            <Parallax speed={0.05}>
              <div className="relative aspect-[16/9] overflow-hidden bg-black/30">
                <img src={theatre2.url} alt="Stage performance" className="w-full h-full object-cover" />
              </div>
            </Parallax>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-10 font-serif italic text-white/55 text-[17px] max-w-md">
            "Every role taught me how a story moves through a body before it ever reaches a page."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── 03 — Design ───────── */

function Ch03Design() {
  return (
    <section className="relative bg-[#f0f4f8] py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12 items-center">
        <Reveal className="col-span-12 md:col-span-6">
          <ChapterLabel n="03" label="A new language" />
          <ChapterTitle className="mt-6">
            Discovering <span className="italic font-light text-turquoise-deep">design</span>.
          </ChapterTitle>
          <div className="mt-8 space-y-5">
            <ChapterText>Storytelling found a new form.</ChapterText>
            <ChapterText>Design became my way to communicate ideas.</ChapterText>
          </div>
        </Reveal>

        <div className="col-span-12 md:col-span-6 relative">
          <div className="grid grid-cols-6 gap-3 md:gap-4">
            <Reveal className="col-span-6">
              <Parallax speed={0.04}>
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <img src={sketches1.url} alt="Early character sketches" className="w-full h-full object-contain p-6" />
                </div>
              </Parallax>
            </Reveal>
            <Reveal className="col-span-3" delay={120}>
              <Parallax speed={0.06}>
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img src={shenkar1.url} alt="Early poster design" className="w-full h-full object-cover" />
                </div>
              </Parallax>
            </Reveal>
            <Reveal className="col-span-3" delay={200}>
              <Parallax speed={0.05}>
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img src={shenkar3.url} alt="How big is it — campaign" className="w-full h-full object-cover" />
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-10 md:mt-16 grid grid-cols-12 gap-4 md:gap-6">
        <Reveal className="col-span-6 md:col-span-4 md:col-start-3">
          <Parallax speed={0.05}>
            <div className="relative aspect-[3/4] overflow-hidden bg-white">
              <img src={shenkar4.url} alt="Apparel design — Mr Wdg" className="w-full h-full object-cover" />
            </div>
          </Parallax>
        </Reveal>
        <Reveal className="col-span-6 md:col-span-4" delay={120}>
          <Parallax speed={0.07}>
            <div className="relative aspect-[3/4] overflow-hidden bg-white">
              <img src={shenkar8.url} alt="Apparel design — back print" className="w-full h-full object-cover" />
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── 04 — NatGeo ───────── */

function Ch04NatGeo() {
  return (
    <section className="relative bg-white py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <ChapterLabel n="04" label="Editorial" />
          <ChapterTitle className="mt-6">
            National Geographic <span className="italic font-light text-turquoise-deep">Kids</span>.
          </ChapterTitle>
          <p className="mt-8 font-serif text-[1.4rem] md:text-[1.6rem] leading-[1.4] text-ink/75 max-w-[520px]">
            For years, I helped create one of Israel's leading children's magazines.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-12 gap-3 md:gap-5">
          <Reveal className="col-span-12 md:col-span-8">
            <Parallax speed={0.04}>
              <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep">
                <img src={ngkSpread.url} alt="National Geographic Kids spread" className="w-full h-full object-cover" />
              </div>
            </Parallax>
          </Reveal>
          <Reveal className="col-span-6 md:col-span-4 md:mt-12" delay={120}>
            <Parallax speed={0.07}>
              <div className="relative aspect-[3/4] overflow-hidden bg-paper-deep">
                <img src={ngkCover.url} alt="NGK cover — Titanic" className="w-full h-full object-cover" />
              </div>
            </Parallax>
          </Reveal>
          <Reveal className="col-span-6 md:col-span-5" delay={200}>
            <Parallax speed={0.05}>
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-deep">
                <img src={ngkLanding.url} alt="NGK landing page" className="w-full h-full object-cover" />
              </div>
            </Parallax>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7 md:mt-16" delay={280}>
            <Parallax speed={0.04}>
              <div className="relative aspect-[16/9] overflow-hidden bg-paper-deep">
                <img src={ngkSpread.url} alt="NGK editorial layout" className="w-full h-full object-cover" />
              </div>
            </Parallax>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <Link
            to="/work/national-geographic-kids"
            className="group mt-12 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] border-b border-ink/30 pb-1 hover:border-turquoise-deep hover:text-turquoise-deep transition-colors"
          >
            Open the case study
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── 05 — Asaflezet ───────── */

function Ch05Asaflezet() {
  return (
    <section className="relative bg-cream py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="col-span-12 md:col-span-6 relative">
          <Parallax speed={0.05}>
            <div className="relative max-w-[460px] mx-auto">
              <img
                src={azFrontCover.url}
                alt="Asaflezet — book cover"
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 40px 60px rgba(20,20,22,.25))" }}
              />
            </div>
          </Parallax>
        </div>
        <Reveal className="col-span-12 md:col-span-6">
          <ChapterLabel n="05" label="In print" />
          <ChapterTitle className="mt-6">
            <span className="italic font-light text-turquoise-deep">Asaflezet</span>.
          </ChapterTitle>
          <div className="mt-8">
            <ChapterText>My first published children's book.</ChapterText>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-16 grid grid-cols-12 gap-4 md:gap-6">
        <Reveal className="col-span-12 md:col-span-7">
          <Parallax speed={0.04}>
            <div className="relative aspect-[16/10] overflow-hidden bg-paper">
              <img src={azSpreadFantasy.url} alt="Asaflezet — interior spread" className="w-full h-full object-cover" />
            </div>
          </Parallax>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-5 md:mt-16" delay={120}>
          <Parallax speed={0.06}>
            <div className="relative aspect-[4/5] overflow-hidden bg-paper">
              <img src={azNivBook.url} alt="Niv holding Asaflezet" className="w-full h-full object-cover" />
            </div>
          </Parallax>
        </Reveal>
      </div>

      <Reveal>
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-10">
          <Link
            to="/work/asaflezet"
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] border-b border-ink/30 pb-1 hover:border-turquoise-deep hover:text-turquoise-deep transition-colors"
          >
            Open the case study
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────── 06 — New Direction (the largest) ───────── */

function Ch06NewDirection() {
  const y = useScrollY();
  return (
    <section className="relative bg-[#f7efe2] py-32 md:py-48 overflow-hidden">
      {/* ambient marks */}
      <img
        src={ndSpark.url}
        aria-hidden
        alt=""
        className="hidden md:block absolute top-[12%] right-[10%] w-10 opacity-70 float-med"
      />
      <img
        src={ndDiamond.url}
        aria-hidden
        alt=""
        className="hidden md:block absolute bottom-[20%] left-[6%] w-9 opacity-70"
        style={{ transform: `rotate(12deg) translateY(${y * 0.03}px)` }}
      />

      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <ChapterLabel n="06" label="A graphic novel" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-serif leading-[0.88] tracking-[-0.045em] text-ink text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw]">
            New <span className="italic font-light text-coral">Direction</span>.
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-10 font-serif text-[1.6rem] md:text-[2rem] leading-[1.3] text-ink/80 max-w-[640px]">
            My most ambitious project so far. A graphic novel years in the making.
          </p>
        </Reveal>
      </div>

      {/* big layered composition */}
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 mt-20 md:mt-28 grid grid-cols-12 gap-6 md:gap-10 items-center">
        <Reveal className="col-span-12 lg:col-span-6">
          <Parallax speed={0.04}>
            <div className="relative max-w-[460px] mx-auto">
              <img
                src={ndCover.url}
                alt="New Direction — cover"
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 50px 80px rgba(20,20,22,.32))" }}
              />
            </div>
          </Parallax>
        </Reveal>

        <div className="col-span-12 lg:col-span-6 relative h-[520px] md:h-[600px]">
          <Parallax speed={0.07} className="absolute left-0 top-2 w-[60%]">
            <div className="overflow-hidden bg-white/40 aspect-[4/5]">
              <img src={ndArieh.url} alt="Arieh & Roy — character study" className="w-full h-full object-cover" />
            </div>
          </Parallax>
          <Parallax speed={0.04} className="absolute right-0 bottom-0 w-[62%]">
            <div className="overflow-hidden aspect-[4/5]" style={{ filter: "drop-shadow(0 24px 40px rgba(20,20,22,.2))" }}>
              <img src={ndPages.url} alt="New Direction — interior pages" className="w-full h-full object-cover" />
            </div>
          </Parallax>
        </div>
      </div>

      {/* three panels strip */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-20 md:mt-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45 mb-6">
            From inside the book — hand-painted panels
          </p>
        </Reveal>
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {[ndJerusalem, ndBeach, ndKiss].map((img, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
                <img src={img.url} alt="New Direction — panel" className="w-full h-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* large mockup */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-20 md:mt-28">
        <Reveal>
          <Parallax speed={0.05}>
            <div className="relative max-w-[1000px] mx-auto">
              <img
                src={ndBookMockup.url}
                alt="New Direction — printed book"
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 40px 60px rgba(20,20,22,.22))" }}
              />
            </div>
          </Parallax>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/work/new-direction"
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em] border border-ink/30 px-6 py-4 hover:border-ink hover:bg-ink hover:text-white transition-colors"
            >
              Enter the world of New Direction
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── 07 — Today ───────── */

function Ch07Today() {
  return (
    <section className="relative bg-white py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-16 items-center">
        <div className="col-span-12 md:col-span-6 relative">
          <Parallax speed={0.05}>
            <div className="relative max-w-[460px] mx-auto aspect-[3/4] overflow-hidden">
              <img src={nivCreatorAsset.url} alt="Niv Haviv today" className="w-full h-full object-cover" />
            </div>
          </Parallax>
        </div>
        <Reveal className="col-span-12 md:col-span-6">
          <ChapterLabel n="07" label="Today" />
          <h2 className="mt-6 font-serif leading-[0.95] tracking-[-0.04em] text-ink text-[14vw] sm:text-[9vw] md:text-[6vw] lg:text-[4.6vw]">
            Designer.<br />
            Illustrator.<br />
            <span className="italic font-light text-turquoise-deep">Storyteller</span>.
          </h2>
          <p className="mt-8 font-serif text-[1.3rem] md:text-[1.5rem] leading-[1.4] text-ink/70 max-w-[440px]">
            Different tools. The same instinct — telling a story worth following.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Highlights ───────── */

function Highlights() {
  const items = [
    { k: "National Geographic Kids", v: "Editorial · Illustration" },
    { k: "Zivlin Advertising", v: "Art Direction · Campaigns" },
    { k: "Freelance Designer", v: "Brand · Editorial · Product" },
    { k: "Author & Illustrator", v: "Asaflezet — Children's Book" },
    { k: "Graphic Novel Creator", v: "New Direction — 300 pages" },
  ];
  return (
    <section className="relative bg-ink text-white py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
            <span className="text-turquoise">●</span>
            <span>Selected experience</span>
          </div>
        </Reveal>
        <div className="mt-10 divide-y divide-white/10">
          {items.map((it, i) => (
            <Reveal key={it.k} delay={i * 60}>
              <div className="grid grid-cols-12 items-baseline py-6 md:py-8 group">
                <span className="col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/35">
                  0{i + 1}
                </span>
                <span className="col-span-11 md:col-span-7 font-serif text-[6vw] md:text-[2.6vw] leading-[1.05] tracking-[-0.03em] group-hover:text-turquoise transition-colors">
                  {it.k}
                </span>
                <span className="col-span-12 md:col-span-4 text-[13px] font-mono uppercase tracking-[0.18em] text-white/45 mt-2 md:mt-0 md:text-right">
                  {it.v}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Closer ───────── */

function Closer() {
  return (
    <section className="relative bg-[#f0f4f8] py-28 md:py-40 text-center overflow-hidden">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-ink/40">
            <span className="inline-block w-8 h-px bg-ink/30 align-middle mr-3" />
            One more thing
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 font-serif leading-[1.05] tracking-[-0.035em] text-ink text-[7vw] md:text-[3.6vw] lg:text-[2.8vw]">
            Not just a designer.<br />
            A <span className="italic font-light text-turquoise-deep">storyteller</span> who uses design,
            illustration, publishing and theatre — as different tools.
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em] border border-ink/30 px-6 py-4 hover:border-ink hover:bg-ink hover:text-white transition-colors"
            >
              See the work
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="mailto:nivat2@gmail.com"
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em] bg-ink text-white px-6 py-4 hover:bg-turquoise-deep transition-colors"
            >
              <span className="block h-1.5 w-1.5 rounded-full bg-turquoise" />
              Say hello
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}