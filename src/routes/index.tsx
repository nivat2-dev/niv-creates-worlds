import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portraitAsset from "@/assets/niv-portrait.jpg.asset.json";
import bookCoverAsset from "@/assets/new-direction-cover.png.asset.json";
import novelSpread from "@/assets/novel-spread.jpg";
import necklace from "@/assets/necklace.png";
import ngkCoverTitanicAsset from "@/assets/ngk-cover-titanic.png.asset.json";
import gpdPiratePopupAsset from "@/assets/gpd-pirate-popup.jpg.asset.json";
import zoo from "@/assets/zoo.jpg";
import asaflezet from "@/assets/asaflezet.jpg";

const portrait = portraitAsset.url;
const bookCover = bookCoverAsset.url;
const natgeo = ngkCoverTitanicAsset.url;
const superplay = gpdPiratePopupAsset.url;

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
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-paper">
      {/* faint grid baseline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--ink) 1px, transparent 1px)",
          backgroundSize: "calc(100%/12) 100%",
        }}
      />

      {/* top eyebrow */}
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-32">
        <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
          <span>(01) — A studio of one</span>
          <span className="hidden md:inline">Tel Aviv · Worldwide</span>
          <span>Vol. MMXXVI<span className="cursor-blink">_</span></span>
        </div>
        <div className="mt-8 hair-divider" />
      </div>

      {/* Headline composition */}
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-12 md:pt-16 pb-16 md:pb-24 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="font-serif text-ink leading-[0.86] tracking-[-0.045em] text-[18vw] md:text-[14vw] lg:text-[11.5vw]">
            <span className="block overflow-hidden">
              <span className="word-rise inline-block" style={{ animationDelay: "60ms" }}>
                Designer,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="word-rise inline-block italic font-light text-turquoise-deep"
                style={{ animationDelay: "180ms", fontStyle: "italic" }}
              >
                storyteller,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="word-rise inline-block" style={{ animationDelay: "300ms" }}>
                world-builder.
              </span>
            </span>
          </h1>
        </div>

        {/* Portrait — single anchor, no overlap */}
        <div className="col-span-12 lg:col-span-4 lg:pt-6">
          <div
            className="relative aspect-[3/4] w-full overflow-hidden bg-paper-deep clip-reveal"
            style={{ animationDelay: "200ms" }}
          >
            <img
              src={portrait}
              alt="Niv Haviv — portrait"
              width={1280}
              height={1707}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: `translateY(${y * -0.04}px) scale(1.04)` }}
            />
            <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-paper mix-blend-difference">
              <span>N. Haviv</span>
              <span>— Studio Lead</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: short positioning + signal */}
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pb-16 md:pb-24 grid grid-cols-12 gap-6 items-end">
        <Reveal className="col-span-12 md:col-span-5" delay={400}>
          <p className="font-serif text-2xl md:text-3xl leading-[1.15] text-ink max-w-md">
            An independent practice designing
            <span className="italic"> products</span>,
            <span className="italic"> stories </span>
            and the
            <span className="italic"> visual systems </span>
            that hold them together.
          </p>
        </Reveal>
        <div className="col-span-12 md:col-span-3 md:col-start-7 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted leading-relaxed">
          <div className="flex justify-between"><span>Product / UI</span><span>01</span></div>
          <div className="flex justify-between mt-1"><span>Illustration</span><span>02</span></div>
          <div className="flex justify-between mt-1"><span>Graphic Novels</span><span>03</span></div>
          <div className="flex justify-between mt-1"><span>Brand Worlds</span><span>04</span></div>
        </div>
        <div className="col-span-12 md:col-span-2 md:col-start-11 flex md:justify-end">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink"
          >
            <span className="relative">
              <span className="block">Scroll</span>
              <span className="absolute -bottom-0.5 left-0 h-px w-full bg-ink/30" />
            </span>
            <span className="inline-block transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </div>
      </div>

      {/* marquee — slimmer */}
      <div className="border-t border-hairline overflow-hidden py-4">
        <div className="marquee flex gap-12 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.22em] text-ink">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12">
              <span>Graphic Novels</span><span className="text-turquoise">●</span>
              <span>Product Design</span><span className="text-turquoise">●</span>
              <span>Illustration</span><span className="text-turquoise">●</span>
              <span>Visual Storytelling</span><span className="text-turquoise">●</span>
              <span>Brand Worlds</span><span className="text-turquoise">●</span>
              <span>Character Design</span><span className="text-turquoise">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
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
  layout?: "hero" | "left" | "right";
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
    layout: "right",
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
    layout: "left",
  },
  {
    index: "03",
    title: "Biblical Zoo Treasure Map",
    tagline: "An illustrated identity for a place full of stories.",
    tags: ["Identity", "Wayfinding", "Illustration"],
    body:
      "Illustrated mascots, signage and a friendly visual system for one of Jerusalem’s most beloved cultural spaces.",
    image: zoo,
    alt: "Biblical Zoo identity and signage",
    to: "/work/biblical-zoo",
    layout: "right",
  },
  {
    index: "04",
    title: "Asaflezet",
    tagline: "A complete brand world — quiet, warm, distinctly its own.",
    tags: ["Brand", "Identity", "Art Direction"],
    body:
      "Identity, packaging and photography direction — a full sensory brand built around a single quiet idea.",
    image: asaflezet,
    alt: "Asaflezet brand identity",
    to: "/work/asaflezet",
    layout: "left",
  },
];

function SignatureProject() {
  const y = useScrollY();
  return (
    <section id="signature" className="relative bg-ink text-paper overflow-hidden">
      {/* turquoise wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--turquoise) 70%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-24 md:pt-32 pb-10">
        <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60">
          <span>★ Signature Project</span>
          <span>00 / New Direction</span>
        </div>
        <div className="mt-6 h-px w-full bg-paper/15" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pb-24 md:pb-36 grid grid-cols-12 gap-6 items-center">
        <Reveal className="col-span-12 lg:col-span-7">
          <h2 className="font-serif text-[14vw] md:text-[9.5vw] lg:text-[8.2vw] leading-[0.86] tracking-[-0.045em]">
            New
            <span className="italic font-light text-turquoise"> Direction</span>
          </h2>
          <p className="font-serif text-2xl md:text-3xl leading-[1.2] max-w-xl mt-8 text-paper/90">
            An original graphic novel — story, characters, typography and
            book design built from a single visual language.
          </p>
          <p className="mt-8 max-w-md text-paper/60 leading-relaxed">
            Hundreds of hand-painted panels. A complete publishing project,
            from first sketch to printed spine — and the turquoise pendant
            that anchors the whole world.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
            {["Graphic Novel", "Character Design", "Illustration", "Publishing"].map((t) => (
              <span key={t} className="border border-paper/25 px-3 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <Link
            to="/work/new-direction"
            className="group mt-12 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] border-b border-paper/40 pb-1 hover:border-turquoise hover:text-turquoise transition-colors"
          >
            Open the case study
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>

        {/* Right: Book + Pendant composition */}
        <Reveal className="col-span-12 lg:col-span-5 relative h-[520px] md:h-[600px]" delay={160}>
          <div
            className="absolute right-0 top-4 w-[78%] aspect-[968/1320] overflow-hidden bg-paper/5 clip-reveal"
            style={{
              animationDelay: "200ms",
              transform: `translateY(${y * -0.04}px)`,
              filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.45))",
            }}
          >
            <img
              src={bookCover}
              alt="New Direction — graphic novel cover"
              loading="lazy"
              width={968}
              height={1320}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute left-0 bottom-0 w-[42%]"
            style={{
              ['--rot' as never]: '-6deg',
              transform: `translateY(${y * 0.08}px) rotate(-6deg)`,
            }}
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
        </Reveal>
      </div>

      {/* Full-bleed interior spread */}
      <Reveal className="relative">
        <div className="relative h-[55vh] md:h-[75vh] w-full overflow-hidden">
          <img
            src={novelSpread}
            alt="Interior pages from New Direction"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: `translateY(${(y - 800) * 0.08}px) scale(1.08)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 font-mono text-[11px] uppercase tracking-[0.2em] text-paper">
            Interior spread — hand-painted panels
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ProjectRow({ p }: { p: Project }) {
  const isLeft = p.layout === "left";
  return (
    <Link to={p.to} className="group block">
      <article className="relative">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-center">
          <Reveal className={`col-span-12 lg:col-span-7 ${isLeft ? "lg:order-1" : "lg:order-2"}`}>
            <div className="lift-img relative aspect-[5/4] w-full overflow-hidden bg-paper-deep">
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                width={1280}
                height={896}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-paper mix-blend-difference">
                {p.index} / {p.tags[0]}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className={`col-span-12 lg:col-span-5 ${isLeft ? "lg:order-2" : "lg:order-1"}`}>
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

function FeaturedWork() {
  return (
    <section id="work" className="relative bg-paper py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 mb-20 md:mb-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            (02) — Selected Work
          </p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] text-ink max-w-3xl tracking-[-0.045em]">
              A few of the worlds <span className="italic font-light text-turquoise-deep">we've built.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="space-y-28 md:space-y-40">
        {projects.map((p) => (
          <ProjectRow key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-ink text-paper py-32 md:py-44">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12 items-start">
        <Reveal className="col-span-12 lg:col-span-5">
          <div className="lift-img relative aspect-[3/4] w-full overflow-hidden grayscale">
            <img src={portrait} alt="Portrait of Niv Haviv" loading="lazy" width={768} height={1024} className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120} className="col-span-12 lg:col-span-7 lg:pl-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">(03) — About</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] mt-6 tracking-[-0.045em]">
            I build <span className="italic text-turquoise">worlds</span> — products,
            stories, and the visual systems that hold them together.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl">
            {[
              ["Design", "Products and interfaces that feel quiet, tactile, and considered."],
              ["Storytelling", "Long-form narrative — characters, pacing, panel by panel."],
              ["Illustration", "From editorial spreads to printed graphic novels."],
              ["Problem solving", "Brand, product and visual language as one continuous craft."],
            ].map(([t, b]) => (
              <div key={t}>
                <h4 className="font-serif text-2xl text-paper tracking-[-0.03em]">{t}</h4>
                <p className="mt-2 text-paper/70 leading-relaxed text-sm">{b}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-paper py-32 md:py-44">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">(04) — Contact</p>
          <h2 className="font-serif text-6xl md:text-[10vw] leading-[0.86] mt-6 text-ink tracking-[-0.045em]">
            Have a story <span className="italic text-turquoise-deep">to tell?</span>
          </h2>
          <a
            href="mailto:hello@nivhaviv.com"
            className="group inline-flex mt-12 items-center gap-4 text-2xl md:text-3xl font-serif border-b border-ink/40 pb-2 hover:border-turquoise hover:text-turquoise-deep transition-colors"
          >
            hello@nivhaviv.com
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>

        <div className="mt-24 hair-divider" />
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          <span>© {new Date().getFullYear()} Niv Haviv — Studio</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-turquoise-deep">Instagram</a>
            <a href="#" className="hover:text-turquoise-deep">Behance</a>
            <a href="#" className="hover:text-turquoise-deep">Read.cv</a>
          </div>
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
      <SignatureProject />
      <FeaturedWork />
      <About />
      <Contact />
    </main>
  );
}
