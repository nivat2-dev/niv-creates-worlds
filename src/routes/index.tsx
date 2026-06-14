import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portraitAsset from "@/assets/niv-portrait.jpg.asset.json";
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
import ndStarCreamAsset from "@/assets/nd-star-cream.png.asset.json";
import ndPagesCollageAsset from "@/assets/nd-pages-collage-v2.png.asset.json";
import ndJerusalemWalkAsset from "@/assets/nd-jerusalem-walk.png.asset.json";
import ndBeachSceneAsset from "@/assets/nd-beach-scene.png.asset.json";
import ndKissAsset from "@/assets/nd-kiss.png.asset.json";

const portrait = portraitAsset.url;
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
const starCream = ndStarCreamAsset.url;

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
          <a href="#top" aria-label="Niv Haviv — home" className="flex items-center gap-2.5 text-ink">
            <img
              src={signature}
              alt="Niv Haviv signature"
              className="h-14 md:h-16 w-auto select-none"
              draggable={false}
            />
          </a>
          <nav className="hidden md:flex items-center gap-9 text-[12px] font-normal text-ink/55">
            {[
              ["Work", "#work"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="hover:text-ink transition-colors tracking-[-0.005em]">
                {label}
              </a>
            ))}
          </nav>
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
      </header>
      <FullScreenMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function FullScreenMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const items = [
    { label: "Work", sub: "Selected projects across editorial, illustration, UI and publishing.", href: "#work" },
    { label: "About", sub: "Who I am, how I work and what drives my projects.", href: "#about" },
    { label: "Contact", sub: "Email, collaborations and freelance opportunities.", href: "#contact" },
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
                <a
                  href={it.href}
                  onClick={onClose}
                  className="group grid grid-cols-12 items-center py-7 md:py-9 border-b border-ink/10 hover:border-ink/25 transition-colors"
                >
                  <span className="hidden md:block col-span-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/25">0{i + 1}</span>
                  <span className="col-span-6 md:col-span-5 font-serif text-[11vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[4.2vw] leading-none tracking-[-0.04em] text-ink group-hover:text-turquoise-deep transition-colors duration-300">
                    {it.label}
                  </span>
                  <span className="hidden md:block col-span-5 text-[12px] text-ink/40 leading-[1.5] max-w-[260px]">{it.sub}</span>
                  <span className="col-span-6 md:col-span-1 flex justify-end text-ink/25 group-hover:text-turquoise-deep group-hover:translate-x-1 transition-all duration-300 text-[18px] font-light">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Hero() {

  return (

    <section id="top" className="relative w-full overflow-hidden bg-[#f0f4f8]">

      <div className="relative mx-auto max-w-[1500px] px-10 md:px-16 pt-40 md:pt-48 pb-0 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[88vh]">

        <div className="flex flex-col justify-center pb-16 md:pb-24">

          <div className="overflow-hidden word-rise" style={{ animationDelay: "80ms" }}>

            <h1 className="font-serif text-ink leading-[1.05] tracking-[-0.03em] text-[9vw] md:text-[5vw] lg:text-[4vw]">

              Hi, my<br />

              name is <strong className="font-bold">Niv</strong>.

            </h1>

          </div>

          <div className="mt-6 md:mt-8 overflow-hidden word-rise" style={{ animationDelay: "220ms" }}>

            <p className="text-[4vw] md:text-[2vw] lg:text-[1.4vw] leading-[1.6] text-ink/70 max-w-[420px]">

              I'm a <strong className="text-ink font-semibold">visual designer and illustrator</strong> based in Tel Aviv.

            </p>

          </div>

          <div className="mt-3 overflow-hidden word-rise" style={{ animationDelay: "320ms" }}>

            <p className="text-[3.5vw] md:text-[1.6vw] lg:text-[1.1vw] leading-[1.6] text-ink/45 max-w-[380px]">

              Editorial, digital products, illustration and AI.

            </p>

          </div>

        </div>

        <div className="flex justify-end items-end h-full">

          <IllustrationPortrait />

        </div>

      </div>

      <div className="pointer-events-none absolute bottom-6 left-16 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-ink/30 font-mono">

        <span>Scroll</span>

        <span className="block h-8 w-px bg-ink/20 scroll-cue" />

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
      className="relative w-full max-w-[680px] lg:max-w-[740px]"
      style={{ transform: `translateY(${-offset}px)` }}
    >
      <img
        src={nivIllustration}
        alt="Editorial illustration of Niv Haviv"
        className="relative w-full h-auto object-contain select-none rise-in"
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
            <p className="font-serif italic text-xl md:text-2xl text-turquoise-deep mt-3 font-light">{p.tagline}</p>
            <p className="mt-6 text-ink-muted leading-relaxed max-w-md">{p.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink border border-hairline rounded-full px-3 py-1.5"
                >
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
    <section
      id="about"
      className="relative bg-cream/50 text-ink py-20 md:py-28 border-t border-hairline overflow-hidden"
    >
      <img
        src={sparkCoral}
        alt=""
        aria-hidden
        className="absolute right-[8%] top-20 w-10 h-10 opacity-80 hidden md:block"
      />
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12 items-start">
        <Reveal className="col-span-12 lg:col-span-5">
          <div className="lift-img relative aspect-[3/4] w-full overflow-hidden">
            <img
              src={portrait}
              alt="Portrait of Niv Haviv"
              loading="lazy"
              width={768}
              height={1024}
              className="w-full h-full object-cover"
            />
            <span aria-hidden className="absolute -top-2 -left-2 h-8 w-8 border-l-2 border-t-2 border-turquoise" />
            <span aria-hidden className="absolute -bottom-2 -right-2 h-8 w-8 border-r-2 border-b-2 border-turquoise" />
          </div>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">Niv Haviv · Tel Aviv</p>
        </Reveal>
        <Reveal delay={120} className="col-span-12 lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <span className="text-turquoise-deep">●</span> (03) — About
          </p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] mt-6 tracking-[-0.045em]">
            I write, <span className="italic text-turquoise-deep">draw</span> and design the worlds I want to read.
          </h2>
          <p className="mt-8 max-w-xl text-ink-muted leading-relaxed text-lg">
            An independent visual storyteller working between books, illustration and product. I make the story, draw
            the world, and design the object that puts it in someone's hands.
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
            Brand identities, editorial systems, illustration commissions and digital products — I'd love to hear about
            it.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:nivat2@gmail.com"
              className="group flex items-center text-2xl md:text-3xl font-serif border-b border-turquoise/60 pb-2 hover:border-turquoise hover:text-turquoise-deep transition-colors w-fit"
            >
              <span className="inline-flex w-10 shrink-0 items-center justify-start">
                <img src={sparkCoral} alt="" aria-hidden className="w-7 h-7" />
              </span>
              nivat2@gmail.com
              <span className="ml-4 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href="tel:050-2231317"
              className="group flex items-center text-xl md:text-2xl font-serif border-b border-turquoise/40 pb-2 hover:border-turquoise hover:text-turquoise-deep transition-colors w-fit"
            >
              <span className="inline-flex w-10 shrink-0 text-turquoise-deep font-mono text-sm">T</span>
              050-2231317
              <span className="ml-4 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href="https://nivhaviv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-xl md:text-2xl font-serif border-b border-turquoise/40 pb-2 hover:border-turquoise hover:text-turquoise-deep transition-colors w-fit"
            >
              <span className="inline-flex w-10 shrink-0 text-turquoise-deep font-mono text-sm">W</span>
              nivhaviv.com
              <span className="ml-4 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/niv-haviv-avraham-2274a8229/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-xl md:text-2xl font-serif border-b border-turquoise/40 pb-2 hover:border-turquoise hover:text-turquoise-deep transition-colors w-fit"
            >
              <span className="inline-flex w-10 shrink-0 text-turquoise-deep font-mono text-sm">in</span>
              LinkedIn
              <span className="ml-4 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-16 h-px w-full bg-turquoise/30" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          <span>© {new Date().getFullYear()} Niv Haviv — Visual Designer</span>
          <span>Tel Aviv</span>
        </div>
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
      <SignatureProject />
      <StudioBand />
      <About />
      <Contact />
    </main>
  );
}
