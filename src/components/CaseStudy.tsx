import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import MoreWork from "@/components/MoreWork";
import {
  CaseNav,
  Reveal,
  SectionLabel,
  H1Hero,
  H2Section,
  H3Feature,
  H4Card,
  Lead,
  Body,
} from "@/components/case-study/primitives";

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

export default function CaseStudy(p: CaseStudyProps) {
  const y = useScrollY();
  return (
    <main className="bg-cream text-ink">
      <CaseNav />

      {/* ───── HERO ───── */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 55% at 78% 30%, color-mix(in oklab, var(--coral) 16%, transparent), transparent 70%), radial-gradient(50% 50% at 14% 78%, color-mix(in oklab, var(--turquoise) 14%, transparent), transparent 75%)",
          }}
        />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-28 pb-16 md:pb-20 min-h-[88vh] flex items-center">
          <div className="grid grid-cols-12 gap-10 md:gap-14 items-center w-full">
            <Reveal className="col-span-12 lg:col-span-7">
              <div className="relative mx-auto w-full max-w-[640px] aspect-[5/6] overflow-hidden rounded-sm">
                <img
                  src={p.hero.src}
                  alt={p.hero.alt}
                  className="absolute inset-0 w-full h-full object-cover select-none"
                  style={{ transform: `translateY(${y * 0.08}px) scale(1.04)`, filter: "drop-shadow(0 34px 56px rgba(20,20,22,.18))" }}
                />
              </div>
            </Reveal>
            <div className="col-span-12 lg:col-span-5">
              <SectionLabel label={`${p.eyebrow} · ${p.year}`} />
              <H1Hero className="mt-6">
                <span className="block">{p.title}</span>
                {p.italic && <span className="block italic text-coral">{p.italic}</span>}
              </H1Hero>
              <Lead className="mt-10 text-ink max-w-xl">{p.tagline}</Lead>
            </div>
          </div>
        </div>
      </section>

      {/* ───── OVERVIEW ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel label="Overview" />
            </div>
            <Reveal className="col-span-12 md:col-span-9" delay={80}>
              <H2Section className="max-w-3xl">{p.overview}</H2Section>
            </Reveal>
          </div>

          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel label="My Role" />
            </div>
            <Reveal className="col-span-12 md:col-span-9" delay={80}>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.disciplines.map((d) => (
                  <span
                    key={d}
                    className="font-sans text-[11px] tracking-[0.04em] text-ink border border-hairline rounded-full px-3 py-1.5"
                  >
                    {d}
                  </span>
                ))}
              </div>
              <Lead className="max-w-2xl text-[17px]">{p.roleDetail}</Lead>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── CHALLENGE ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="col-span-12 md:col-span-3">
            <SectionLabel label="The Challenge" />
          </div>
          <Reveal className="col-span-12 md:col-span-9" delay={80}>
            <H3Feature className="max-w-3xl">{p.challenge}</H3Feature>
          </Reveal>
        </div>
      </section>

      {/* ───── PROCESS ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel label="Process" />
            </div>
            <Reveal className="col-span-12 md:col-span-9" delay={80}>
              <H2Section className="max-w-3xl">How it came together.</H2Section>
            </Reveal>
          </div>

          <div className="border-t border-hairline">
            {p.process.map((s, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                className="grid grid-cols-12 gap-6 border-b border-hairline py-8 md:py-10"
              >
                <div className="col-span-2 md:col-span-1 font-sans text-[12px] tracking-[0.04em] text-coral">
                  {s.step}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <H4Card>{s.title}</H4Card>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <Body>{s.body}</Body>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── OUTCOME ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel label="Outcome" />
            </div>
            <Reveal className="col-span-12 md:col-span-9" delay={80}>
              <H2Section className="max-w-3xl">{p.outcome}</H2Section>
            </Reveal>
          </div>
          {p.outcomeStats && (
            <Reveal>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 max-w-4xl">
                {p.outcomeStats.map((s) => (
                  <div key={s.label} className="border-t border-hairline pt-4">
                    <dt className="font-serif text-[26px] leading-[1.1] tracking-[-0.02em]">
                      {s.value}
                    </dt>
                    <dd className="mt-2 font-sans text-[13px] tracking-[0.04em] uppercase text-ink-muted">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </section>

      {/* ───── GALLERY ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel label="Gallery" />
            </div>
            <Reveal className="col-span-12 md:col-span-9" delay={80}>
              <H2Section className="max-w-3xl">Selected frames.</H2Section>
            </Reveal>
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {p.gallery.map((g, i) => {
              const span = g.span ?? (i % 3 === 0 ? "full" : "half");
              const cls =
                span === "full"
                  ? "col-span-12 aspect-[16/9]"
                  : span === "tall"
                    ? "col-span-12 md:col-span-6 aspect-[3/4]"
                    : "col-span-12 md:col-span-6 aspect-[4/3]";
              return (
                <Reveal key={i} delay={i * 60} className={cls}>
                  <div className="lift-img relative w-full h-full overflow-hidden bg-cream border border-hairline rounded-sm">
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── NEXT PROJECT ───── */}
      <MoreWork currentSlug={p.slug} />
      <Link
        to={p.next.to}
        className="group block border-t border-hairline bg-cream"
      >
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center justify-between font-sans text-[12px] tracking-[0.04em] text-ink-muted">
            <SectionLabel label="Next Project" />
            <span>{p.next.index}</span>
          </div>
          <div className="mt-8 flex items-baseline justify-between gap-6">
            <h3 className="font-serif font-medium leading-[0.9] tracking-[-0.035em] text-[clamp(40px,6vw,88px)] group-hover:text-coral transition-colors">
              {p.next.label}
            </h3>
            <span className="font-serif text-4xl md:text-6xl inline-block transition-transform duration-500 group-hover:translate-x-3">
              →
            </span>
          </div>
        </div>
      </Link>
    </main>
  );
}