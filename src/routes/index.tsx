import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portraitAsset from "@/assets/niv-portrait.jpg.asset.json";
import bookMockupAsset from "@/assets/nd-book-mockup-v2.png.asset.json";
import necklace from "@/assets/necklace.png";
import ngkSpreadAsset from "@/assets/ngk-spread.png.asset.json";
import gpdPiratePopupAsset from "@/assets/gpd-pirate-popup.jpg.asset.json";
import bzAfterMapAsset from "@/assets/bz-after-map.jpg.asset.json";
import azNivBookAsset from "@/assets/az-niv-book.jpg.asset.json";
import ndAriehRoyAsset from "@/assets/nd-arieh-roy-circle.png.asset.json";
import ndSparkCoralAsset from "@/assets/nd-spark-coral.png.asset.json";
import ndSparkOliveAsset from "@/assets/nd-spark-olive.png.asset.json";
import ndDiamondTealAsset from "@/assets/nd-diamond-teal.png.asset.json";
import ndStarCreamAsset from "@/assets/nd-star-cream.png.asset.json";
import ndPagesCollageAsset from "@/assets/nd-pages-collage-v2.png.asset.json";
import ndJerusalemWalkAsset from "@/assets/nd-jerusalem-walk.png.asset.json";
import ndBeachSceneAsset from "@/assets/nd-beach-scene.png.asset.json";
import ndKissAsset from "@/assets/nd-kiss.png.asset.json";

const portrait = portraitAsset.url;
const bookMockup = bookMockupAsset.url;
const natgeo = ngkSpreadAsset.url;
const superplay = gpdPiratePopupAsset.url;
const zooMap = bzAfterMapAsset.url;
const asaflezet = azNivBookAsset.url;
const character = ndAriehRoyAsset.url;
const pagesCollage = ndPagesCollageAsset.url;
const studioBooks = azNivBookAsset.url;
const studioIllo = ngkSpreadAsset.url;
const studioProduct = gpdPiratePopupAsset.url;
const ndStrip1 = ndJerusalemWalkAsset.url;
const ndStrip2 = ndBeachSceneAsset.url;
const ndStrip3 = ndKissAsset.url;
const sparkCoral = ndSparkCoralAsset.url;
const sparkOlive = ndSparkOliveAsset.url;
const diamondTeal = ndDiamondTealAsset.url;
const starCream = ndStarCreamAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niv Haviv — Visual Designer, Illustrator, Storyteller" },
      { name: "description", content: "A creative studio of one. Niv Haviv designs products, stories and visual worlds — from graphic novels to digital products." },
      { property: "og:title", content: "Niv Haviv — Studio" },
      { property: "og:description", content: "Designing products, stories and visual worlds that people connect with." },
    ],
  }),
  component: Index,
});

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

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 1s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Nav() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jerusalem" }) +
          " TLV",
      );
    };
    update();
    const i = setInterval(update, 30_000);
    return () => clearInterval(i);
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-6 flex items-center justify-between text-paper">
        <a href="#top" className="flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] uppercase">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-turquoise" />
          Niv Haviv / Studio
        </a>
        <nav className="hidden md:flex items-center gap-1 font-mono text-[12px] uppercase tracking-[0.06em]">
          {[
            ["Work", "#work"],
            ["Signature", "#signature"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="px-3 py-1.5 rounded-full hover:bg-paper/10 transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block font-mono text-[12px] uppercase tracking-[0.06em] opacity-70">
          {time}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const y = useScrollY();
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* top eyebrow */}
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-32">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-turquoise" />
            Studio of Niv Haviv
          </span>
          <span className="hidden md:inline">Tel Aviv · Available for select work</span>
        </div>
        <div className="mt-8 hair-divider" />
      </div>

      {/* Split: copy left, illustrated portrait right */}
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT — copy */}
        <div className="col-span-12 lg:col-span-7">
          <div className="overflow-hidden">
            <h1
              className="word-rise font-serif text-ink leading-[0.85] tracking-[-0.05em] uppercase text-[14vw] md:text-[10vw] lg:text-[7.8vw]"
              style={{ animationDelay: "80ms" }}
            >
              Niv Haviv
            </h1>
          </div>

          <div className="mt-3 md:mt-5 overflow-hidden">
            <p
              className="word-rise font-sans font-light text-turquoise-deep leading-[1.1] text-[6vw] md:text-[3.5vw] lg:text-[2.6vw] tracking-[-0.02em]"
              style={{ animationDelay: "220ms" }}
            >
              Visual Designer
            </p>
          </div>

          <Reveal delay={380} className="mt-10 md:mt-14 max-w-xl">
            <p className="font-sans text-lg md:text-xl leading-[1.45] text-ink">
              Creating visual experiences across digital products,
              publishing and storytelling.
            </p>
          </Reveal>

          <Reveal delay={520} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--turquoise)" }} />
              Editorial
            </span>
            <span className="opacity-40">/</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--coral-soft)" }} />
              UI
            </span>
            <span className="opacity-40">/</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--pink)" }} />
              Illustration
            </span>
            <span className="opacity-40">/</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.78 0.09 150)" }} />
              AI
            </span>
          </Reveal>

          <Reveal delay={680} className="mt-10 flex items-center gap-6">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full border border-ink/15 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink hover:border-ink/40 transition-colors"
            >
              View Work
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted hover:text-ink transition-colors story-link"
            >
              Get in touch
            </a>
          </Reveal>
        </div>

        {/* RIGHT — semi-illustrated portrait */}
        <div className="col-span-12 lg:col-span-5 lg:pl-8">
          <IllustratedPortrait y={y} />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="hair-divider" />
        <div className="py-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
          <span>Scroll to explore</span>
          <span className="hidden md:inline">Selected work · 2018 — 2026</span>
          <span className="inline-block animate-pulse">↓</span>
        </div>
      </div>
    </section>
  );
}

function IllustratedPortrait({ y }: { y: number }) {
  // Subtle parallax offsets
  const slow = y * 0.04;
  const med = y * 0.08;
  const fast = y * 0.14;

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px]">
      {/* soft pastel accent shapes — behind */}
      <div
        aria-hidden
        className="absolute rounded-full blur-2xl"
        style={{
          top: "8%",
          left: "-6%",
          width: "55%",
          height: "55%",
          background: "oklch(0.92 0.05 200 / 0.55)",
          transform: `translateY(${-slow}px)`,
        }}
      />
      <div
        aria-hidden
        className="absolute rounded-full blur-2xl"
        style={{
          bottom: "4%",
          right: "-8%",
          width: "48%",
          height: "48%",
          background: "oklch(0.9 0.05 20 / 0.5)",
          transform: `translateY(${slow}px)`,
        }}
      />
      <div
        aria-hidden
        className="absolute rounded-full"
        style={{
          top: "20%",
          right: "8%",
          width: "14px",
          height: "14px",
          background: "var(--turquoise)",
          transform: `translateY(${-med}px)`,
          opacity: 0.85,
        }}
      />
      <div
        aria-hidden
        className="absolute"
        style={{
          bottom: "18%",
          left: "4%",
          width: "10px",
          height: "10px",
          background: "oklch(0.78 0.09 150)",
          borderRadius: "2px",
          transform: `translateY(${med}px) rotate(45deg)`,
        }}
      />

      {/* portrait frame */}
      <div
        className="absolute inset-[6%] overflow-hidden rounded-[2px] clip-reveal"
        style={{
          background: "oklch(0.96 0.02 200)",
          animationDelay: "200ms",
        }}
      >
        <img
          src={portrait}
          alt="Niv Haviv — portrait"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translateY(${-slow}px) scale(1.05)` }}
        />
      </div>

      {/* Sketch / illustration overlay — partially over portrait */}
      <svg
        aria-hidden
        viewBox="0 0 400 500"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ transform: `translateY(${-fast * 0.3}px)` }}
      >
        {/* outline sketch around head */}
        <path
          d="M120 130 C 110 90, 160 55, 210 60 C 270 65, 305 110, 300 165 C 298 200, 285 225, 280 245"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="600"
          strokeDashoffset="0"
          opacity="0.55"
        />
        {/* hatch marks — shoulder */}
        <g stroke="var(--turquoise-deep)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
          <line x1="60" y1="360" x2="95" y2="350" />
          <line x1="58" y1="375" x2="90" y2="370" />
          <line x1="62" y1="390" x2="88" y2="388" />
        </g>
        {/* hatch marks — opposite */}
        <g stroke="oklch(0.74 0.13 28)" strokeWidth="1.2" strokeLinecap="round" opacity="0.55">
          <line x1="320" y1="300" x2="345" y2="295" />
          <line x1="322" y1="312" x2="342" y2="310" />
        </g>
        {/* asterisk star */}
        <g stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" opacity="0.7">
          <line x1="340" y1="120" x2="340" y2="140" />
          <line x1="330" y1="130" x2="350" y2="130" />
          <line x1="333" y1="123" x2="347" y2="137" />
          <line x1="347" y1="123" x2="333" y2="137" />
        </g>
        {/* circle annotation */}
        <circle cx="70" cy="180" r="22" fill="none" stroke="oklch(0.78 0.14 0)" strokeWidth="1.4" opacity="0.7" />
        {/* arrow swoop */}
        <path
          d="M85 200 Q 130 245, 175 235"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M170 230 L 178 235 L 172 242"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
        />
        {/* tiny dots cluster */}
        <g fill="var(--turquoise)" opacity="0.85">
          <circle cx="295" cy="380" r="2" />
          <circle cx="305" cy="388" r="2" />
          <circle cx="288" cy="392" r="2" />
        </g>
        {/* underline mark */}
        <path
          d="M150 460 Q 220 450, 290 462"
          fill="none"
          stroke="var(--turquoise-deep)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>

      {/* floating tag */}
      <div
        className="absolute -bottom-3 left-2 md:-left-4 bg-white border border-ink/10 shadow-sm rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink"
        style={{ transform: `translateY(${-med * 0.4}px)` }}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-turquoise mr-2 align-middle" />
        Designer · Illustrator
      </div>
    </div>
  );
}

type Project = {
  index: string;
  title: string;
  tagline: string;
  tags: string[];
  body: string;
  image: string;
  alt: string;
  to: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "National Geographic Kids",
    tagline: "Editorial illustration for a global audience.",
    tags: ["Editorial", "Illustration", "Kids"],
    body:
      "Spreads, infographics and characters designed for young readers — translating science and wildlife into images that invite curiosity.",
    image: natgeo,
    alt: "National Geographic Kids editorial spreads",
    to: "/work/national-geographic-kids",
  },
  {
    index: "02",
    title: "Gaming & Product",
    tagline: "Product & UI design for a mobile gaming studio.",
    tags: ["Product", "UI", "Game"],
    body:
      "Game interfaces, in-app economies and visual systems for a fast-moving mobile studio — designed to feel tactile, playful and clear in the hand.",
    image: superplay,
    alt: "SuperPlay mobile game UI screens",
    to: "/work/gaming-product-design",
  },
  {
    index: "03",
    title: "Biblical Zoo Treasure Map",
    tagline: "A hand-drawn map for one of Jerusalem's most beloved places.",
    tags: ["Illustrated Map", "Wayfinding", "Storytelling"],
    body:
      "An illustrated treasure map that turns a walk through the zoo into a story — every animal a character, every path a chapter.",
    image: zooMap,
    alt: "Biblical Zoo illustrated treasure map",
    to: "/work/biblical-zoo",
  },
  {
    index: "04",
    title: "Asaflezet",
    tagline: "A self-written, self-illustrated children's book in print.",
    tags: ["Author", "Children's Book", "Illustration"],
    body:
      "Written, illustrated and designed end-to-end — from first sketch to a printed hardcover in the hands of real readers.",
    image: asaflezet,
    alt: "Asaflezet — printed children's book held in hand",
    to: "/work/asaflezet",
  },
];

function SignatureProject() {
  const y = useScrollY();
  return (
    <section id="signature" className="relative bg-cream/80 text-ink overflow-hidden border-y border-hairline">
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-20 md:pt-28 pb-6">
        <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          <span className="inline-flex items-center gap-2 text-turquoise-deep">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-turquoise" />
            ★ Flagship Project
          </span>
          <span>00 / New Direction · Graphic Novel</span>
        </div>
        <div className="mt-5 h-px w-full bg-turquoise/40" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pb-16 md:pb-24 grid grid-cols-12 gap-8 md:gap-12 items-center">
        <Reveal className="col-span-12 lg:col-span-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-turquoise-deep mb-6">
            An original graphic novel — written, drawn and designed by Niv.
          </p>
          <h2 className="font-serif text-[14vw] md:text-[9vw] lg:text-[7.6vw] leading-[0.86] tracking-[-0.045em] text-ink">
            New
            <span className="italic font-light text-turquoise-deep"> Direction</span>
          </h2>
          <p className="font-serif text-2xl md:text-3xl leading-[1.2] max-w-xl mt-8 text-ink">
            Story, characters, typography and book design — built from
            a single visual language, panel by panel.
          </p>
          <p className="mt-6 max-w-md text-ink-muted leading-relaxed">
            Hundreds of hand-painted panels. A complete publishing project,
            from first sketch to printed spine — and the turquoise pendant
            that anchors the whole world.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
            {["Graphic Novel", "Character Design", "Illustration", "Publishing"].map((t) => (
              <span key={t} className="border border-hairline text-ink px-3 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <Link
            to="/work/new-direction"
            className="group mt-10 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] border-b border-ink/40 pb-1 hover:border-turquoise hover:text-turquoise-deep transition-colors"
          >
            Open the case study
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>

        {/* Right: layered ND composition — real assets only */}
        <Reveal className="col-span-12 lg:col-span-6 relative h-[520px] md:h-[620px]" delay={160}>
          {/* pages collage behind, tilted */}
          <div
            className="absolute left-0 top-6 w-[55%] opacity-95"
            style={{ transform: `translateY(${y * -0.03}px) rotate(-5deg)`, filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.18))" }}
          >
            <img src={pagesCollage} alt="New Direction interior pages" loading="lazy" className="w-full h-auto" />
          </div>
          {/* character peeking */}
          <div
            className="absolute right-2 top-0 w-[34%]"
            style={{ transform: `translateY(${y * 0.05}px)` }}
          >
            <img src={character} alt="New Direction character" loading="lazy" className="w-full h-auto float-med" />
          </div>
          {/* book mockup, hero */}
          <div
            className="absolute right-0 bottom-2 w-[78%] clip-reveal"
            style={{ animationDelay: "200ms", transform: `translateY(${y * -0.04}px)`, filter: "drop-shadow(0 40px 50px rgba(0,0,0,0.22))" }}
          >
            <img src={bookMockup} alt="New Direction — printed graphic novel" loading="lazy" className="w-full h-auto" />
          </div>
          {/* pendant floating foreground */}
          <div
            className="absolute left-[10%] bottom-0 w-[26%]"
            style={{ transform: `translateY(${y * 0.08}px) rotate(-6deg)` }}
          >
            <img src={necklace} alt="Turquoise pendant from New Direction" loading="lazy" width={1024} height={1024} className="float-med w-full h-auto" />
          </div>
          {/* ambient marks */}
          <img src={sparkCoral} alt="" aria-hidden className="absolute -top-2 left-[58%] w-9 h-9 opacity-90 float-med" />
          <img src={diamondTeal} alt="" aria-hidden className="absolute right-[8%] top-1/2 w-7 h-7 opacity-80" style={{ transform: "rotate(12deg)" }} />
        </Reveal>
      </div>

      {/* 3-up "from inside the book" strip — real ND artwork, no dark slab */}
      <Reveal className="relative">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pb-20 md:pb-28">
          <div className="grid grid-cols-3 gap-3 md:gap-5">
            {[ndStrip1, ndStrip2, ndStrip3].map((src, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
                <img src={src} alt="From inside New Direction" loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            From inside the book — hand-painted panels
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function ProjectRow({ p }: { p: Project }) {
  return (
    <Link to={p.to} className="group block">
      <article className="relative">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-center">
          <Reveal className="col-span-12 lg:col-span-7 lg:order-1">
            <div className="lift-img relative aspect-[4/3] w-full overflow-hidden bg-paper-deep">
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-paper mix-blend-difference">
                {p.index} / {p.tags[0]}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="col-span-12 lg:col-span-5 lg:order-2">
            <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
              <span>{p.index}</span>
              <span className="h-px w-10 bg-ink/30" />
              <span>Project</span>
            </div>
            <h3 className="font-serif text-5xl md:text-6xl leading-[0.95] mt-5 text-ink tracking-[-0.04em]">
              {p.title}
            </h3>
            <p className="font-serif italic text-xl md:text-2xl text-turquoise-deep mt-3 font-light">
              {p.tagline}
            </p>
            <p className="mt-6 text-ink-muted leading-relaxed max-w-md">{p.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink border border-hairline rounded-full px-3 py-1.5">
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
              <span className="border-b border-ink/40 pb-0.5 group-hover:border-turquoise group-hover:text-turquoise-deep transition-colors">
                View project
              </span>
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </span>
          </Reveal>
        </div>
      </article>
    </Link>
  );
}

function StudioBand() {
  const items = [
    {
      n: "I.",
      label: "Books",
      title: "I write and draw books.",
      body: "Graphic novels and printed children's titles — authored and illustrated end-to-end.",
      img: studioBooks,
    },
    {
      n: "II.",
      label: "Illustration",
      title: "I tell stories in pictures.",
      body: "Editorial spreads, characters and worlds — a recognizable hand across every project.",
      img: studioIllo,
    },
    {
      n: "III.",
      label: "Product",
      title: "I design the things that carry them.",
      body: "When the story needs an interface, an identity or a printed object — I make that too.",
      img: studioProduct,
    },
  ];
  return (
    <section className="relative bg-cream/60 py-16 md:py-24 border-y border-hairline overflow-hidden">
      <img
        src={sparkOlive}
        alt=""
        aria-hidden
        className="absolute left-6 top-10 w-10 h-10 opacity-70 hidden md:block"
      />
      <img
        src={diamondTeal}
        alt=""
        aria-hidden
        className="absolute right-10 bottom-10 w-12 h-12 opacity-60 hidden md:block"
      />
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span className="text-turquoise-deep">●</span> The Studio
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted hidden md:block">
            One person · three crafts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 80}>
              <div className="relative">
                <div className="aspect-[5/4] w-full overflow-hidden bg-paper border border-hairline">
                  <img src={it.img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="mt-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  <span className="text-turquoise-deep">{it.n}</span>
                  <span className="h-px w-8 bg-turquoise/50" />
                  <span>{it.label}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl leading-[1.05] mt-3 text-ink tracking-[-0.03em]">
                  {it.title}
                </h3>
                <p className="mt-3 text-ink-muted leading-relaxed text-[15px] max-w-sm">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section id="work" className="relative bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 mb-14 md:mb-20 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span className="text-turquoise-deep">●</span> (02) — Selected Work · 04 Projects
          </p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] text-ink max-w-3xl tracking-[-0.045em]">
              More worlds <span className="italic font-light text-turquoise-deep">I've drawn.</span>
            </h2>
            <p className="mt-5 max-w-xl text-ink-muted leading-relaxed">
              Beyond New Direction — books, characters, illustrated identities and
              products built around the stories they tell.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="space-y-20 md:space-y-28">
        {projects.map((p) => (
          <ProjectRow key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-cream/50 text-ink py-20 md:py-28 border-t border-hairline overflow-hidden">
      <img
        src={sparkCoral}
        alt=""
        aria-hidden
        className="absolute right-[8%] top-20 w-10 h-10 opacity-80 hidden md:block"
      />
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12 items-start">
        <Reveal className="col-span-12 lg:col-span-5">
          <div className="lift-img relative aspect-[3/4] w-full overflow-hidden">
            <img src={portrait} alt="Portrait of Niv Haviv" loading="lazy" width={768} height={1024} className="w-full h-full object-cover" />
            <span aria-hidden className="absolute -top-2 -left-2 h-8 w-8 border-l-2 border-t-2 border-turquoise" />
            <span aria-hidden className="absolute -bottom-2 -right-2 h-8 w-8 border-r-2 border-b-2 border-turquoise" />
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            Niv Haviv · Tel Aviv
          </p>
        </Reveal>
        <Reveal delay={120} className="col-span-12 lg:col-span-7 lg:pl-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span className="text-turquoise-deep">●</span> (03) — About
          </p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] mt-6 tracking-[-0.045em]">
            I write, <span className="italic text-turquoise-deep">draw</span> and
            design the worlds I want to read.
          </h2>
          <p className="mt-8 max-w-xl text-ink-muted leading-relaxed text-lg">
            An independent visual storyteller working between books, illustration
            and product. I make the story, draw the world, and design the object
            that puts it in someone's hands.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
            {[
              ["Author", "Original graphic novels and children's books — written and published end-to-end."],
              ["Illustrator", "Characters, spreads and editorial work with a consistent hand."],
              ["Designer", "Books, identities and products built around the story they carry."],
            ].map(([t, b]) => (
              <div key={t} className="border-t border-turquoise/40 pt-4">
                <h4 className="font-serif text-2xl text-ink tracking-[-0.03em]">{t}</h4>
                <p className="mt-2 text-ink-muted leading-relaxed text-sm">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            Selected: National Geographic Kids · SuperPlay · Jerusalem Biblical Zoo · Asaflezet
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-paper py-20 md:py-28 overflow-hidden">
      <img
        src={diamondTeal}
        alt=""
        aria-hidden
        className="absolute right-[12%] top-24 w-14 h-14 opacity-70 hidden md:block"
      />
      <img
        src={starCream}
        alt=""
        aria-hidden
        className="absolute left-[6%] bottom-32 w-10 h-10 opacity-80 hidden md:block"
      />
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span className="text-turquoise-deep">●</span> (04) — Let's make something
          </p>
          <h2 className="font-serif text-6xl md:text-[10vw] leading-[0.86] mt-6 text-ink tracking-[-0.045em]">
            Got a story <span className="italic text-turquoise-deep">to tell?</span>
          </h2>
          <p className="mt-8 max-w-xl text-ink-muted leading-relaxed text-lg">
            Books, illustration commissions, collaborations on worlds that
            don't exist yet — I'd love to hear about it.
          </p>
          <a
            href="mailto:hello@nivhaviv.com"
            className="group inline-flex mt-10 items-center gap-4 text-2xl md:text-3xl font-serif border-b border-turquoise/60 pb-2 hover:border-turquoise hover:text-turquoise-deep transition-colors"
          >
            <img src={sparkCoral} alt="" aria-hidden className="w-7 h-7" />
            hello@nivhaviv.com
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>

        <p className="mt-10 max-w-xl text-ink-muted leading-relaxed">
          Find me by email — that's where the work happens.
        </p>
        <div className="mt-16 h-px w-full bg-turquoise/30" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          <span>© {new Date().getFullYear()} Niv Haviv — Author · Illustrator · Designer</span>
          <span>Tel Aviv</span>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <Hero />
      <StudioBand />
      <SignatureProject />
      <FeaturedWork />
      <About />
      <Contact />
    </main>
  );
}
