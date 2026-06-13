import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import MoreWork from "@/components/MoreWork";

type Slug =
  | "new-direction"
  | "national-geographic-kids"
  | "gaming-product-design"
  | "biblical-zoo"
  | "asaflezet";

export type CaseStudySection = { label: string; body: string };
export type CaseStudyProps = {
  index: string;
  eyebrow: string;
  title: string;
  italic?: string;
  tagline: string;
  year: string;
  client: string;
  role: string;
  roleDetail: string;
  disciplines: string[];
  hero: { src: string; alt: string };
  overview: string;
  challenge: string;
  process: { step: string; title: string; body: string }[];
  outcome: string;
  outcomeStats?: { value: string; label: string }[];
  gallery: { src: string; alt: string; span?: "full" | "half" | "tall" }[];
  next: { to: string; label: string; index: string };
  slug: Slug;
};

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
      transform: v ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 1s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 1s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
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

export default function CaseStudy(p: CaseStudyProps) {
  const y = useScrollY();
  return (
    <main className="bg-paper text-ink">
      <MiniNav />

      {/* HERO */}
      <section className="relative min-h-[100vh] w-full overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <img
            src={p.hero.src}
            alt={p.hero.alt}
            className="w-full h-full object-cover opacity-70"
            style={{ transform: `translateY(${y * 0.15}px) scale(1.08)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-32">
          <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70">
            <span>{p.index} — {p.eyebrow}</span>
            <span>{p.year}</span>
          </div>
          <div className="mt-8 h-px w-full bg-paper/15" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-16 md:pt-24 pb-24 md:pb-32 grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <h1 className="font-serif leading-[0.86] tracking-[-0.045em] text-[16vw] md:text-[12vw] lg:text-[10.5vw]">
              <span className="block overflow-hidden"><span className="word-rise inline-block" style={{ animationDelay: "80ms" }}>{p.title}</span></span>
              {p.italic && (
                <span className="block overflow-hidden"><span className="word-rise inline-block italic font-light text-turquoise" style={{ animationDelay: "220ms" }}>{p.italic}</span></span>
              )}
            </h1>
          </div>
          <Reveal delay={300} className="col-span-12 md:col-span-7">
            <p className="font-serif text-2xl md:text-3xl leading-[1.2] text-paper/90 mt-4 max-w-2xl">{p.tagline}</p>
          </Reveal>
          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70 space-y-2">
            <div className="flex justify-between border-b border-paper/15 pb-2"><span>Client</span><span className="text-paper">{p.client}</span></div>
            <div className="flex justify-between border-b border-paper/15 pb-2"><span>Role</span><span className="text-paper">{p.role}</span></div>
            <div className="flex justify-between border-b border-paper/15 pb-2"><span>Year</span><span className="text-paper">{p.year}</span></div>
            <div className="flex justify-between"><span>Disciplines</span><span className="text-paper text-right max-w-[60%]">{p.disciplines.join(" · ")}</span></div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + ROLE */}
      <section className="bg-paper py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">(01) — Overview</p>
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <p className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-[-0.035em] text-ink max-w-4xl">{p.overview}</p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mt-28 md:mt-36 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">(02) — My Role</p>
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <div className="flex flex-wrap gap-2 mb-8">
              {p.disciplines.map((d) => (
                <span key={d} className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink border border-hairline rounded-full px-3 py-1.5">{d}</span>
              ))}
            </div>
            <p className="text-ink-muted leading-relaxed max-w-2xl text-lg">{p.roleDetail}</p>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-paper-deep py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">(03) — Challenge</p>
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] tracking-[-0.04em] text-ink max-w-3xl">
              {p.challenge}
            </h2>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-paper py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">(04) — Process</p>
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] tracking-[-0.04em] text-ink">How it came together.</h2>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="border-t border-hairline">
            {p.process.map((s, i) => (
              <Reveal key={i} delay={i * 80} className="grid grid-cols-12 gap-6 border-b border-hairline py-10 md:py-14 group hover:bg-paper-deep/40 transition-colors">
                <div className="col-span-2 md:col-span-1 font-mono text-[11px] uppercase tracking-[0.22em] text-turquoise-deep">{s.step}</div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-serif text-3xl md:text-4xl tracking-[-0.035em]">{s.title}</h3>
                </div>
                <div className="col-span-12 md:col-span-7 text-ink-muted leading-relaxed">{s.body}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="bg-ink text-paper py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">(05) — Outcome</p>
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <p className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-[-0.035em] max-w-4xl">{p.outcome}</p>
            {p.outcomeStats && (
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-paper/15 pt-10">
                {p.outcomeStats.map((s) => (
                  <div key={s.label}>
                    <div className="font-serif text-5xl md:text-6xl text-turquoise tracking-[-0.04em]">{s.value}</div>
                    <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-paper py-28 md:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 mb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">(06) — Gallery</p>
          </div>
          <Reveal className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] tracking-[-0.04em] text-ink">Selected frames.</h2>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-4 md:gap-6">
          {p.gallery.map((g, i) => {
            const span = g.span ?? (i % 3 === 0 ? "full" : "half");
            const cls =
              span === "full" ? "col-span-12 aspect-[16/9]" :
              span === "tall" ? "col-span-12 md:col-span-6 aspect-[3/4]" :
              "col-span-12 md:col-span-6 aspect-[4/3]";
            return (
              <Reveal key={i} delay={i * 60} className={cls}>
                <div className="lift-img relative w-full h-full overflow-hidden bg-paper-deep">
                  <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* NEXT PROJECT */}
      <MoreWork currentSlug={p.slug} />
      <Link to={p.next.to} className="group block bg-ink text-paper border-t border-paper/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-36">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
            <span>Next Project</span>
            <span>{p.next.index}</span>
          </div>
          <div className="mt-8 flex items-baseline justify-between gap-6">
            <h3 className="font-serif text-6xl md:text-[9vw] leading-[0.86] tracking-[-0.045em] group-hover:text-turquoise transition-colors">
              {p.next.label}
            </h3>
            <span className="font-serif text-5xl md:text-7xl inline-block transition-transform duration-500 group-hover:translate-x-3">→</span>
          </div>
          <div className="mt-12 hair-divider opacity-20" />
        </div>
      </Link>
    </main>
  );
}