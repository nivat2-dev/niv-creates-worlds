import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/portrait.jpg";
import bookCover from "@/assets/book-cover.jpg";
import novelSpread from "@/assets/novel-spread.jpg";
import pendant from "@/assets/pendant.png";
import natgeo from "@/assets/natgeo.jpg";
import superplay from "@/assets/superplay.jpg";
import zoo from "@/assets/zoo.jpg";

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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex items-center justify-between text-paper">
        <a href="#top" className="font-serif text-xl tracking-tight">Niv Haviv</a>
        <nav className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.18em]">
          <a href="#work" className="hover:text-turquoise transition-colors">Work</a>
          <a href="#about" className="hover:text-turquoise transition-colors">About</a>
          <a href="#contact" className="hover:text-turquoise transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="text-[13px] uppercase tracking-[0.18em] border-b border-current pb-0.5">
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const y = useScrollY();
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-40 pb-20 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
        {/* Left */}
        <div className="rise-in">
          <p className="text-[12px] uppercase tracking-[0.28em] text-ink-muted mb-8">
            Studio of one — est. visual worlds
          </p>
          <h1 className="font-serif text-[14vw] leading-[0.88] sm:text-[12vw] lg:text-[8.5vw] tracking-[-0.02em] text-ink">
            Niv<br />
            <span className="italic text-turquoise-deep">Haviv</span>
          </h1>
          <div className="mt-10 font-serif text-3xl md:text-4xl leading-[1.1] text-ink max-w-xl">
            Visual Designer.<br />
            Illustrator.<br />
            Storyteller.
          </div>
          <p className="mt-8 max-w-md text-ink-muted leading-relaxed">
            Designing products, stories and visual worlds that people
            connect with.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[13px] uppercase tracking-[0.18em] hover:bg-turquoise hover:text-ink transition-colors"
            >
              View My Work
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.18em] text-ink border-b border-ink/40 pb-1 hover:border-turquoise hover:text-turquoise-deep transition-colors"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right — floating composition */}
        <div className="relative h-[560px] md:h-[640px] lg:h-[720px]">
          {/* portrait */}
          <div
            className="absolute left-1/2 top-1/2 w-[58%] aspect-[3/4] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
            style={{ transform: `translate(-50%, calc(-50% + ${y * -0.05}px))` }}
          >
            <img src={portrait} alt="Portrait of Niv Haviv" width={768} height={1024} className="w-full h-full object-cover" />
          </div>

          {/* book cover top-left */}
          <div
            className="absolute left-[-4%] top-[6%] w-[44%] aspect-[3/4] float-slow shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)]"
            style={{ ['--rot' as never]: '-6deg', transform: `translateY(${y * -0.12}px) rotate(-6deg)` }}
          >
            <img src={bookCover} alt="New Direction — graphic novel cover" loading="lazy" width={768} height={1024} className="w-full h-full object-cover" />
          </div>

          {/* novel spread bottom-right */}
          <div
            className="absolute right-[-6%] bottom-[4%] w-[52%] aspect-[4/3] float-med shadow-[0_25px_60px_-20px_rgba(0,0,0,0.35)]"
            style={{ ['--rot' as never]: '5deg', transform: `translateY(${y * 0.08}px) rotate(5deg)` }}
          >
            <img src={novelSpread} alt="Graphic novel interior spread" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
          </div>

          {/* pendant */}
          <div
            className="absolute right-[8%] top-[2%] w-[24%] float-slow"
            style={{ transform: `translateY(${y * -0.18}px)` }}
          >
            <img src={pendant} alt="Turquoise pendant necklace" loading="lazy" width={768} height={768} className="w-full h-auto" />
          </div>

          {/* small label */}
          <div className="absolute left-[2%] bottom-[2%] text-[11px] uppercase tracking-[0.28em] text-ink-muted">
            <span className="inline-block w-8 h-px bg-ink/40 align-middle mr-3" />
            Selected world ’24
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="border-y border-hairline overflow-hidden py-5">
        <div className="marquee flex gap-16 whitespace-nowrap font-serif text-2xl md:text-3xl text-ink">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 pr-16">
              <span>Graphic Novels</span><span className="text-turquoise">✦</span>
              <span>Product Design</span><span className="text-turquoise">✦</span>
              <span>Illustration</span><span className="text-turquoise">✦</span>
              <span>Visual Storytelling</span><span className="text-turquoise">✦</span>
              <span>Brand Worlds</span><span className="text-turquoise">✦</span>
              <span>Character Design</span><span className="text-turquoise">✦</span>
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
  layout?: "hero" | "left" | "right";
};

const projects: Project[] = [
  {
    index: "01",
    title: "New Direction",
    tagline: "A graphic novel, built panel by panel.",
    tags: ["Graphic Novel", "Character Design", "Illustration", "Publishing"],
    body:
      "An original story told across hundreds of hand-painted panels — characters, world, typography and book design built from a single visual language. A complete publishing project, from first sketch to printed spine.",
    image: novelSpread,
    alt: "Interior pages from New Direction graphic novel",
    layout: "hero",
  },
  {
    index: "02",
    title: "National Geographic Kids",
    tagline: "Editorial illustration for a global audience.",
    tags: ["Editorial", "Illustration", "Kids"],
    body:
      "Spreads, infographics and characters designed for young readers — translating science and wildlife into images that invite curiosity.",
    image: natgeo,
    alt: "National Geographic Kids editorial spreads",
    layout: "right",
  },
  {
    index: "03",
    title: "SuperPlay",
    tagline: "Product & UI design for a mobile gaming studio.",
    tags: ["Product", "UI", "Game"],
    body:
      "Game interfaces, in-app economies and visual systems for a fast-moving mobile studio — designed to feel tactile, playful and clear in the hand.",
    image: superplay,
    alt: "SuperPlay mobile game UI screens",
    layout: "left",
  },
  {
    index: "04",
    title: "Biblical Zoo",
    tagline: "An illustrated identity for a place full of stories.",
    tags: ["Identity", "Wayfinding", "Illustration"],
    body:
      "Illustrated mascots, signage and a friendly visual system for one of Jerusalem’s most beloved cultural spaces.",
    image: zoo,
    alt: "Biblical Zoo identity and signage",
    layout: "right",
  },
];

function ProjectHero({ p }: { p: Project }) {
  return (
    <article className="relative">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
        <Reveal className="col-span-12 lg:col-span-5 lg:pt-24">
          <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.28em] text-ink-muted">
            <span>{p.index} — Featured</span>
            <span className="h-px w-10 bg-ink/30" />
          </div>
          <h3 className="font-serif text-6xl md:text-7xl leading-[0.95] mt-6 text-ink">
            {p.title}
          </h3>
          <p className="font-serif italic text-2xl md:text-3xl text-turquoise-deep mt-4">
            {p.tagline}
          </p>
          <p className="mt-8 text-ink-muted leading-relaxed max-w-md">{p.body}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-[11px] uppercase tracking-[0.22em] text-ink border border-hairline px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
          <a href="#" className="mt-10 inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.18em] text-ink border-b border-ink/40 pb-1 hover:border-turquoise hover:text-turquoise-deep transition-colors">
            Open case study →
          </a>
        </Reveal>
        <Reveal delay={120} className="col-span-12 lg:col-span-7">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-deep">
            <img src={p.image} alt={p.alt} loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="aspect-square overflow-hidden bg-paper-deep">
              <img src={bookCover} alt="New Direction cover" loading="lazy" width={768} height={1024} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden bg-ink flex items-center justify-center p-8">
              <img src={pendant} alt="Turquoise pendant from New Direction" loading="lazy" width={768} height={768} className="w-2/3 h-auto" />
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function ProjectRow({ p }: { p: Project }) {
  const isLeft = p.layout === "left";
  return (
    <article className="relative">
      <div className={`mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-center`}>
        <Reveal className={`col-span-12 lg:col-span-7 ${isLeft ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative aspect-[5/4] w-full overflow-hidden bg-paper-deep">
            <img src={p.image} alt={p.alt} loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120} className={`col-span-12 lg:col-span-5 ${isLeft ? "lg:order-2" : "lg:order-1"}`}>
          <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.28em] text-ink-muted">
            <span>{p.index}</span>
            <span className="h-px w-10 bg-ink/30" />
          </div>
          <h3 className="font-serif text-5xl md:text-6xl leading-[0.95] mt-5 text-ink">{p.title}</h3>
          <p className="font-serif italic text-xl md:text-2xl text-turquoise-deep mt-3">{p.tagline}</p>
          <p className="mt-6 text-ink-muted leading-relaxed max-w-md">{p.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-[11px] uppercase tracking-[0.22em] text-ink border border-hairline px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

function FeaturedWork() {
  return (
    <section id="work" className="relative bg-paper py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-24 md:mb-32 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <p className="text-[12px] uppercase tracking-[0.28em] text-ink-muted">Selected Work</p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] text-ink max-w-3xl">
            Four worlds, <span className="italic text-turquoise-deep">one studio.</span>
          </h2>
        </div>
      </div>

      <div className="space-y-32 md:space-y-48">
        {projects.map((p, i) =>
          i === 0 ? <ProjectHero key={p.title} p={p} /> : <ProjectRow key={p.title} p={p} />,
        )}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-ink text-paper py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12 items-start">
        <Reveal className="col-span-12 lg:col-span-5">
          <div className="relative aspect-[3/4] w-full overflow-hidden grayscale">
            <img src={portrait} alt="Portrait of Niv Haviv" loading="lazy" width={768} height={1024} className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120} className="col-span-12 lg:col-span-7 lg:pl-8">
          <p className="text-[12px] uppercase tracking-[0.28em] text-paper/60">About</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] mt-6">
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
                <h4 className="font-serif text-2xl text-paper">{t}</h4>
                <p className="mt-2 text-paper/70 leading-relaxed">{b}</p>
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
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.28em] text-ink-muted">Let’s make something</p>
          <h2 className="font-serif text-6xl md:text-[10vw] leading-[0.9] mt-6 text-ink">
            Have a story <span className="italic text-turquoise-deep">to tell?</span>
          </h2>
          <a
            href="mailto:hello@nivhaviv.com"
            className="inline-flex mt-12 items-center gap-4 text-2xl md:text-3xl font-serif border-b border-ink/40 pb-2 hover:border-turquoise hover:text-turquoise-deep transition-colors"
          >
            hello@nivhaviv.com →
          </a>
        </Reveal>

        <div className="mt-24 hair-divider" />
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 text-[12px] uppercase tracking-[0.22em] text-ink-muted">
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
      <FeaturedWork />
      <About />
      <Contact />
    </main>
  );
}
