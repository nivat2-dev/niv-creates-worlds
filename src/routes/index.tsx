import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import signatureAsset from "@/assets/niv-signature-v2.png.asset.json";
import nivIllustrationAsset from "@/assets/niv-portrait-v3.png.asset.json";
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


import ndPagesCollageAsset from "@/assets/nd-pages-collage-v2.png.asset.json";
import ndJerusalemWalkAsset from "@/assets/nd-jerusalem-walk.png.asset.json";
import ndBeachSceneAsset from "@/assets/nd-beach-scene.png.asset.json";
import ndKissAsset from "@/assets/nd-kiss.png.asset.json";


const signature = signatureAsset.url;
const nivIllustration = nivIllustrationAsset.url;
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



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niv Haviv — Visual Designer, Illustrator, Storyteller" },
      {
        name: "description",
        content:
          "A creative studio of one. Niv Haviv designs products, stories and visual worlds — from graphic novels to digital products.",
      },
      { property: "og:title", content: "Niv Haviv — Studio" },
      {
        property: "og:description",
        content: "Designing products, stories and visual worlds that people connect with.",
      },
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

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
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
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 1s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-ink/10"
            : "bg-white/60 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-24 md:h-28 flex items-center justify-between text-ink">
          <div className="flex items-center gap-6 md:gap-8">
            <a href="#top" aria-label="Niv Haviv — home" className="flex items-center gap-2.5 text-ink">
              <img
                src={signature}
                alt="Niv Haviv signature"
                className="h-14 md:h-16 w-auto select-none"
                draggable={false}
              />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="group relative inline-flex items-center gap-3.5 rounded-full bg-ink text-white px-6 py-3 text-[14px] font-medium tracking-[-0.005em] hover:bg-turquoise-deep transition-all duration-300 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]"
            >
              <span className="relative flex flex-col gap-[6px]">
                <span className="block h-[1.5px] w-5 bg-current transition-transform duration-300 group-hover:translate-x-0.5" />
                <span className="block h-[1.5px] w-5 bg-current transition-transform duration-300 group-hover:-translate-x-0.5" />
              </span>
              <span>Menu</span>
            </button>
          </div>
          <a
            href="mailto:nivat2@gmail.com"
            className="group inline-flex items-center gap-2 border border-ink/30 text-ink px-4 py-2 text-[12px] font-mono uppercase tracking-[0.18em] hover:border-ink hover:bg-ink/[0.04] transition-colors"
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-turquoise-deep group-hover:scale-125 transition-transform" />
            Hire me
          </a>
        </div>
      </header>
      <FullScreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function FullScreenMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const items = [
    { label: "Work", sub: "Selected projects across editorial, illustration, UI and publishing.", href: "#work" },
    { label: "Who I Am", sub: "A visual journey through theatre, design, illustration and graphic novels.", href: "/who-i-am" },
  ];
  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] transition-[opacity,visibility] duration-500 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.7,0,.2,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ background: "linear-gradient(180deg, #E6F4F4 0%, #D9EEEE 55%, #CDE8E8 100%)" }}
      >
        {/* Top bar */}
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-24 md:h-28 flex items-center justify-between">
          <img
            src={signature}
            alt="Niv Haviv signature"
            className="h-14 md:h-16 w-auto select-none"
            draggable={false}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="text-[14px] font-medium text-ink inline-flex items-center gap-2.5 rounded-full bg-ink/[0.06] hover:bg-ink/10 transition-colors px-5 py-2.5"
          >
            <span className="relative inline-block h-3.5 w-3.5">
              <span className="absolute top-1/2 left-0 block h-[1.5px] w-3.5 bg-ink rotate-45" />
              <span className="absolute top-1/2 left-0 block h-[1.5px] w-3.5 bg-ink -rotate-45" />
            </span>
            <span>Close</span>
          </button>
        </div>

        {/* Nav items — vertically centered */}
        <div className="mx-auto max-w-[1500px] px-8 md:px-12 lg:px-16 flex flex-col" style={{ height: "calc(100vh - 7rem)" }}>
          <p
            className="font-mono text-[10px] uppercase tracking-[0.32em] text-ink/35 shrink-0"
            style={{
              opacity: open ? 1 : 0,
              marginBottom: "clamp(20px, 3vh, 36px)",
              transition: `opacity .5s ease 150ms`,
            }}
          >
            <span className="inline-block w-8 h-px bg-ink/25 align-middle mr-3" />
            Index
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5 pb-8">
            <a href="mailto:nivat2@gmail.com" aria-label="Email" className="text-ink/30 hover:text-ink transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/niv-haviv-avraham-2274a8229/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink/30 hover:text-ink transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>

          <ul className="flex-1 flex flex-col justify-center">
            {items.map((it, i) => (
              <li
                key={it.label}
                style={{
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transition: `opacity .6s ease ${220 + i * 90}ms, transform .7s cubic-bezier(.2,.7,.2,1) ${220 + i * 90}ms`,
                }}
              >
                {it.href.startsWith("/") ? (
                  <Link
                    to={it.href}
                    onClick={onClose}
                    className="group grid grid-cols-12 items-center py-7 md:py-9 border-b border-ink/10 hover:border-ink/25 transition-colors"
                  >
                    <MenuItemContent label={it.label} sub={it.sub} index={i} />
                  </Link>
                ) : (
                  <a
                    href={it.href}
                    onClick={onClose}
                    className="group grid grid-cols-12 items-center py-7 md:py-9 border-b border-ink/10 hover:border-ink/25 transition-colors"
                  >
                    <MenuItemContent label={it.label} sub={it.sub} index={i} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MenuItemContent({ label, sub, index }: { label: string; sub: string; index: number }) {
  return (
    <>
      <span className="hidden md:block col-span-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/25">0{index + 1}</span>
      <span className="col-span-6 md:col-span-5 font-serif text-[11vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[4.2vw] leading-none tracking-[-0.04em] text-ink group-hover:text-turquoise-deep transition-colors duration-300">
        {label}
      </span>
      <span className="hidden md:block col-span-5 text-[12px] text-ink/40 leading-[1.5] max-w-[260px]">{sub}</span>
      <span className="col-span-6 md:col-span-1 flex justify-end text-ink/25 group-hover:text-turquoise-deep group-hover:translate-x-1 transition-all duration-300 text-[18px] font-light">→</span>
    </>
  );
}

function Hero() {

  return (

    <section id="top" className="relative w-full bg-[#f0f4f8]">

      <div className="relative mx-auto max-w-[1500px] px-14 md:px-24 lg:px-32 pt-40 md:pt-48 pb-0 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[88vh]">

        <div className="flex flex-col justify-center pb-16 md:pb-24">

          <div className="overflow-hidden word-rise" style={{ animationDelay: "80ms" }}>

            <h1 className="font-serif text-ink leading-[1.05] tracking-[-0.03em] text-[9vw] md:text-[5vw] lg:text-[4vw]">

              My name is<br />

              <strong className="font-bold">Niv Haviv</strong>.

            </h1>

          </div>

          <div className="mt-6 md:mt-8 overflow-hidden word-rise" style={{ animationDelay: "220ms" }}>

            <p className="text-[4vw] md:text-[2vw] lg:text-[1.4vw] leading-[1.6] text-ink/70 max-w-[420px]">

              I'm a <strong className="text-ink font-semibold">visual designer and illustrator</strong><br />based in Tel Aviv.

            </p>

          </div>

          <div className="mt-3 overflow-hidden word-rise" style={{ animationDelay: "320ms" }}>

            <p className="text-[3.5vw] md:text-[1.6vw] lg:text-[1.1vw] leading-[1.6] text-ink/45 max-w-[380px]">

              Editorial, digital products, illustration and AI.

            </p>

          </div>

        </div>

        <div className="flex justify-center items-end h-full">

          <IllustrationPortrait />

        </div>

      </div>

      <div className="pointer-events-none absolute top-[92%] left-16 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-ink/30 font-mono">
        <span>Scroll</span>
        <span className="block h-[20vh] md:h-[28vh] w-px bg-ink/20 scroll-cue" />
      </div>

    </section>

  );

}

function IllustrationPortrait() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.04);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      ref={wrapRef}
      className="relative w-full max-w-[460px] lg:max-w-[520px]"
      style={{ transform: `translateY(${-offset}px)` }}
    >
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -left-6 top-8 w-[42%] h-auto -z-0 opacity-80"
      >
        <path
          fill="#8fbce6"
          d="M44 18c18-10 46-6 60 8s24 36 16 56-30 36-54 38-44-10-52-30-2-44 12-58 8-6 18-14z"
        />
        <circle cx="22" cy="150" r="6" fill="#8fbce6" opacity="0.6" />
        <circle cx="12" cy="170" r="3" fill="#8fbce6" opacity="0.5" />
        <circle cx="170" cy="40" r="4" fill="#8fbce6" opacity="0.5" />
      </svg>
      <img
        src={nivIllustration}
        alt="Editorial illustration of Niv Haviv"
        className="relative z-10 w-full h-auto object-contain select-none rise-in"
        draggable={false}
      />
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
    body: "Spreads, infographics and characters designed for young readers — translating science and wildlife into images that invite curiosity.",
    image: natgeo,
    alt: "National Geographic Kids editorial spreads",
    to: "/work/national-geographic-kids",
  },
  {
    index: "02",
    title: "Gaming & Product",
    tagline: "Product & UI design for a mobile gaming studio.",
    tags: ["Product", "UI", "Game"],
    body: "Game interfaces, in-app economies and visual systems for a fast-moving mobile studio — designed to feel tactile, playful and clear in the hand.",
    image: superplay,
    alt: "SuperPlay mobile game UI screens",
    to: "/work/gaming-product-design",
  },
  {
    index: "03",
    title: "Biblical Zoo Treasure Map",
    tagline: "A hand-drawn map for one of Jerusalem's most beloved places.",
    tags: ["Illustrated Map", "Wayfinding", "Storytelling"],
    body: "An illustrated treasure map that turns a walk through the zoo into a story — every animal a character, every path a chapter.",
    image: zooMap,
    alt: "Biblical Zoo illustrated treasure map",
    to: "/work/biblical-zoo",
  },
  {
    index: "04",
    title: "Asaflezet",
    tagline: "A self-written, self-illustrated children's book in print.",
    tags: ["Author", "Children's Book", "Illustration"],
    body: "Written, illustrated and designed end-to-end — from first sketch to a printed hardcover in the hands of real readers.",
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
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-turquoise" />★ Flagship Project
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
            Story, characters, typography and book design — built from a single visual language, panel by panel.
          </p>
          <p className="mt-6 max-w-md text-ink-muted leading-relaxed">
            Hundreds of hand-painted panels. A complete publishing project, from first sketch to printed spine — and the
            turquoise pendant that anchors the whole world.
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
            style={{
              transform: `translateY(${y * -0.03}px) rotate(-5deg)`,
              filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.18))",
            }}
          >
            <img src={pagesCollage} alt="New Direction interior pages" loading="lazy" className="w-full h-auto" />
          </div>
          {/* character peeking */}
          <div className="absolute right-2 top-0 w-[34%]" style={{ transform: `translateY(${y * 0.05}px)` }}>
            <img src={character} alt="New Direction character" loading="lazy" className="w-full h-auto float-med" />
          </div>
          {/* book mockup, hero */}
          <div
            className="absolute right-0 bottom-2 w-[78%] clip-reveal"
            style={{
              animationDelay: "200ms",
              transform: `translateY(${y * -0.04}px)`,
              filter: "drop-shadow(0 40px 50px rgba(0,0,0,0.22))",
            }}
          >
            <img
              src={bookMockup}
              alt="New Direction — printed graphic novel"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          {/* pendant floating foreground */}
          <div
            className="absolute left-[10%] bottom-0 w-[26%]"
            style={{ transform: `translateY(${y * 0.08}px) rotate(-6deg)` }}
          >
            <img
              src={necklace}
              alt="Turquoise pendant from New Direction"
              loading="lazy"
              width={1024}
              height={1024}
              className="float-med w-full h-auto"
            />
          </div>
          {/* ambient marks */}
          <img
            src={sparkCoral}
            alt=""
            aria-hidden
            className="absolute -top-2 left-[58%] w-9 h-9 opacity-90 float-med"
          />
          <img
            src={diamondTeal}
            alt=""
            aria-hidden
            className="absolute right-[8%] top-1/2 w-7 h-7 opacity-80"
            style={{ transform: "rotate(12deg)" }}
          />
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

    <Link to={p.to} className="group block border-b border-ink/8 last:border-b-0">

      <article className="mx-auto max-w-[1500px] px-10 md:px-16 py-10 md:py-14 grid grid-cols-12 gap-8 md:gap-12 items-center">

        {/* LEFT — image, ~40% width */}

        <Reveal className="col-span-12 md:col-span-4">

          <div className="relative w-full aspect-[3/4] overflow-hidden bg-paper-deep">

            <img

              src={p.image}

              alt={p.alt}

              loading="lazy"

              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"

            />

            <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 mix-blend-difference">

              {p.index}

            </div>

          </div>

        </Reveal>

        {/* RIGHT — text, ~55% width */}

        <Reveal delay={100} className="col-span-12 md:col-span-7 flex flex-col justify-center pl-0 md:pl-8">

          <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/30 mb-6">

            <span>{p.index}</span>

            <span className="h-px w-8 bg-ink/20" />

            <span>{p.tags[0]}</span>

          </div>

          <h3 className="font-serif text-[8vw] sm:text-[5vw] md:text-[3.2vw] lg:text-[2.4vw] leading-[1.05] tracking-[-0.03em] text-ink">

            {p.title}

          </h3>

          <p className="font-serif italic text-[1.1vw] md:text-[1vw] lg:text-[18px] text-turquoise-deep mt-3 font-light leading-[1.4]">

            {p.tagline}

          </p>

          <p className="mt-5 text-[14px] md:text-[15px] text-ink/50 leading-relaxed max-w-[400px]">

            {p.body}

          </p>

          <div className="mt-8 flex flex-wrap gap-2">

            {p.tags.map((t) => (

              <span key={t} className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 border border-ink/15 px-3 py-1.5">

                {t}

              </span>

            ))}

          </div>

          <span className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 border border-ink/20 px-5 py-3 w-fit group-hover:border-ink/50 group-hover:text-ink transition-colors duration-300">

            View project

            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>

          </span>

        </Reveal>

      </article>

    </Link>

  );

}

function FeaturedWork() {
  return (
    <section id="work" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 mb-14 md:mb-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span className="text-turquoise-deep">●</span> (02) — Selected Work · 04 Projects
          </p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] text-ink max-w-3xl tracking-[-0.045em] mt-6">
            More worlds <span className="italic font-light text-turquoise-deep">I've drawn.</span>
          </h2>
          <p className="mt-5 max-w-xl text-ink-muted leading-relaxed">
            Beyond New Direction — books, characters, illustrated identities and products built around the stories they
            tell.
          </p>
        </Reveal>
      </div>

      <div className="space-y-0">
        {projects.map((p) => (
          <ProjectRow key={p.title} p={p} />
        ))}
        <Link to="/work/new-direction" className="group block border-b border-ink/8">
          <article className="mx-auto max-w-[1500px] px-10 md:px-16 py-10 md:py-14 grid grid-cols-12 gap-8 md:gap-12 items-center">
            <Reveal className="col-span-12 md:col-span-4">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-paper-deep">
                <img src={pagesCollage} alt="New Direction" loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 mix-blend-difference">00</div>
              </div>
            </Reveal>
            <Reveal delay={100} className="col-span-12 md:col-span-7 flex flex-col justify-center pl-0 md:pl-8">
              <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/30 mb-6">
                <span>00</span>
                <span className="h-px w-8 bg-ink/20" />
                <span className="text-turquoise-deep">★ Flagship</span>
              </div>
              <h3 className="font-serif text-[8vw] sm:text-[5vw] md:text-[3.2vw] lg:text-[2.4vw] leading-[1.05] tracking-[-0.03em] text-ink">
                New Direction
              </h3>
              <p className="font-serif italic text-[18px] text-turquoise-deep mt-3 font-light leading-[1.4]">
                An original graphic novel — written, drawn and designed by Niv.
              </p>
              <p className="mt-5 text-[14px] md:text-[15px] text-ink/50 leading-relaxed max-w-[400px]">
                Hundreds of hand-painted panels. A complete publishing project, from first sketch to printed spine.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Graphic Novel", "Character Design", "Illustration", "Publishing"].map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 border border-ink/15 px-3 py-1.5">{t}</span>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40 border border-ink/20 px-5 py-3 w-fit group-hover:border-ink/50 group-hover:text-ink transition-colors duration-300">
                Open the case study
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Reveal>
          </article>
        </Link>
      </div>
    </section>
  );
}



function Index() {
  return (
    <main className="bg-white text-ink">
      <Nav />
      <Hero />
      <FeaturedWork />
    </main>
  );
}
