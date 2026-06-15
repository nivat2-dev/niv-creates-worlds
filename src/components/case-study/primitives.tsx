import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { openLightbox } from "@/components/Lightbox";

/* =============================================================
 * Niv Haviv — Portfolio Case Study Design System
 * -------------------------------------------------------------
 * Every case-study page (current and future) MUST compose its
 * layout from the primitives in this file. Do not re-define
 * headings, eyebrows, section padding, containers, cards or
 * feature rows inside individual pages — extend here instead.
 *
 * Tokens
 * - Container:   max-w-[1500px] px-6 md:px-10
 * - Section pad: py-20 md:py-28
 * - Header gap:  mb-14 md:mb-20
 * - Backgrounds: bg-cream / bg-paper alternating, bg-ink for accents
 * - Hairline:    border-t border-hairline between sections
 *
 * Typography (uses type scale utilities from styles.css)
 * - H1Hero:    type-display  (serif)
 * - H2Section: type-h1       (serif)
 * - H3Feature: type-h2       (serif)
 * - H4Card:    type-h3       (serif)
 * - Lead:      type-body-lg  (sans, ink-muted)
 * - Body:      type-body     (sans, ink-muted)
 * - SectionLabel: type-label (mono, turquoise dot)
 * - EyebrowCaps:  12px uppercase tracking-[0.08em] (sans, ink-muted)
 * ============================================================= */

/* ───── Motion ───── */

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          io.disconnect();
        }
      },
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

/* ───── Navigation ───── */

export function CaseNav() {
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
          ? "bg-paper/96 backdrop-blur-md border-b border-ink/12 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-paper/80 backdrop-blur-sm border-b border-ink/6"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-20 flex items-center justify-between text-ink">
        <Link to="/" className="flex items-center gap-2.5 text-ink">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-turquoise" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em]">Niv Haviv</span>
        </Link>
        <Link
          to="/"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50 hover:text-ink transition-colors inline-flex items-center gap-2"
        >
          ← Index
        </Link>
      </div>
    </header>
  );
}

/* ───── Eyebrows ───── */

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-turquoise" />
      <span>{label}</span>
    </div>
  );
}

export function EyebrowCaps({ children }: { children: ReactNode }) {
  return (
    <div className="font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
      {children}
    </div>
  );
}

/* ───── Typography ───── */

export function H1Hero({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={`font-serif type-display text-ink ${className}`}>
      {children}
    </h1>
  );
}

export function H2Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-serif type-h1 text-ink ${className}`}>
      {children}
    </h2>
  );
}

export function H3Feature({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`font-serif type-h2 leading-[1.02] tracking-[-0.025em] ${className}`}>
      {children}
    </h3>
  );
}

export function H4Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`font-serif type-h3 leading-[1.1] tracking-[-0.015em] ${className}`}>
      {children}
    </h3>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-sans type-body-lg text-ink-muted ${className}`}>
      {children}
    </p>
  );
}

export function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-sans type-body text-ink-muted ${className}`}>
      {children}
    </p>
  );
}

export function Caption({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-sans text-[12px] text-ink-muted ${className}`}>
      <span className="text-turquoise">·</span> {children}
    </p>
  );
}

/* ───── Section wrappers ───── */

type Tone = "cream" | "paper" | "ink";

export function CaseSection({
  tone = "cream",
  divider = true,
  className = "",
  children,
}: {
  tone?: Tone;
  divider?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const bg =
    tone === "ink" ? "bg-ink text-paper" : tone === "paper" ? "bg-paper" : "bg-paper-deep";
  return (
    <section
      className={`relative isolate overflow-hidden ${divider ? "border-t border-hairline" : ""} ${bg} py-14 md:py-20 ${className}`}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">{children}</div>
    </section>
  );
}

export function CaseSectionHeader({
  label,
  title,
  intro,
  align = "stack",
  dense = false,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "split" | "stack";
  dense?: boolean;
}) {
  const headerGap = dense ? "mb-10 md:mb-12" : "mb-14 md:mb-20";
  if (align === "stack") {
    return (
      <Reveal className={`${headerGap} max-w-3xl`}>
        <SectionLabel label={label} />
        <H2Section className="mt-4">{title}</H2Section>
        {intro && <Lead className="mt-5">{intro}</Lead>}
      </Reveal>
    );
  }
  return (
    <div className={`grid grid-cols-12 gap-8 md:gap-12 items-end ${headerGap}`}>
      <Reveal className="col-span-12 md:col-span-3">
        <SectionLabel label={label} />
      </Reveal>
      <Reveal className="col-span-12 md:col-span-9" delay={80}>
        <H2Section className="max-w-3xl">{title}</H2Section>
        {intro && <Lead className="mt-4 max-w-3xl">{intro}</Lead>}
      </Reveal>
    </div>
  );
}

/* ───── Cards ───── */

/**
 * CaseCard — fixed image area (220–230px), centered contain image,
 * title + body underneath. Use for product/discipline grids.
 */
export function CaseCard({
  image,
  alt,
  title,
  body,
  className = "",
}: {
  image: string;
  alt: string;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col border border-hairline bg-paper p-5 md:p-6 rounded-sm ${className}`}
    >
      <div className="h-[220px] md:h-[230px] flex items-center justify-center">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          onClick={() => openLightbox(image, alt)}
          className="block max-h-full max-w-[78%] w-auto h-auto object-contain cursor-zoom-in"
          style={{ filter: "drop-shadow(0 14px 28px rgba(20,20,22,.12))" }}
        />
      </div>
      <H4Card className="mt-7">{title}</H4Card>
      <Body className="mt-3 max-w-[32ch]">{body}</Body>
    </article>
  );
}

/**
 * CaseFramedCard — image fills a framed aspect-ratio container at top,
 * title + body below in a separated footer. Use for product/promotional grids.
 */
export function CaseFramedCard({
  image,
  alt,
  title,
  body,
  aspect = "4/5",
  framePadding = "p-6",
  className = "",
}: {
  image: string;
  alt: string;
  title: string;
  body: string;
  aspect?: string;
  framePadding?: string;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col border border-hairline bg-paper rounded-sm overflow-hidden ${className}`}
    >
      <div
        className={`relative bg-paper-deep flex items-center justify-center ${framePadding}`}
        style={{ aspectRatio: aspect }}
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          onClick={() => openLightbox(image, alt)}
          className="block max-h-full max-w-full w-auto h-auto object-contain cursor-zoom-in"
          style={{ filter: "drop-shadow(0 18px 32px rgba(20,20,22,.14))" }}
        />
      </div>
      <div className="border-t border-hairline p-5 md:p-6">
        <H4Card>{title}</H4Card>
        <Body className="mt-3 max-w-[32ch]">{body}</Body>
      </div>
    </article>
  );
}

/**
 * CaseCoverCard — image covers a fixed aspect; minimal title/body below.
 * Use for editorial story cards where photography drives the card.
 */
export function CaseCoverCard({
  image,
  alt,
  title,
  body,
  aspect = "4/3",
  className = "",
}: {
  image: string;
  alt: string;
  title: string;
  body: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <article className={`group ${className}`}>
      <div
        className="w-full overflow-hidden bg-paper border border-hairline rounded-sm"
        style={{ aspectRatio: aspect }}
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          onClick={() => openLightbox(image, alt)}
          className="block w-full h-full object-cover object-center cursor-zoom-in transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <h3 className="mt-5 font-serif type-h2 tracking-[-0.01em]">{title}</h3>
      <Body className="mt-1.5">{body}</Body>
    </article>
  );
}

/* ───── Feature row ───── */

export function FeatureRow({
  image,
  alt,
  eyebrow,
  title,
  body,
  reverse = false,
  imageMaxWidth = 640,
  imageShadow = "0 34px 60px rgba(20,20,22,.22)",
  className = "",
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  reverse?: boolean;
  imageMaxWidth?: number;
  imageShadow?: string;
  className?: string;
}) {
  return (
    <article className={`grid grid-cols-12 gap-8 md:gap-14 items-center ${className}`}>
      <Reveal
        className={`col-span-12 lg:col-span-7 ${reverse ? "order-1 lg:order-2" : "order-1"}`}
      >
        <div className="relative mx-auto w-full" style={{ maxWidth: imageMaxWidth }}>
          <img
            src={image}
            alt={alt}
            onClick={() => openLightbox(image, alt)}
            className="block w-full h-auto rounded-sm select-none cursor-zoom-in"
            style={{ filter: `drop-shadow(${imageShadow})` }}
          />
        </div>
      </Reveal>
      <Reveal
        delay={120}
        className={`col-span-12 lg:col-span-5 ${reverse ? "order-2 lg:order-1" : "order-2"}`}
      >
        <EyebrowCaps>{eyebrow}</EyebrowCaps>
        <H3Feature className="mt-5 max-w-[18ch]">{title}</H3Feature>
        <Lead className="mt-6 max-w-md">{body}</Lead>
      </Reveal>
    </article>
  );
}

/* ───── Metrics ───── */

export function MetricsGrid({
  items,
  columns = 2,
}: {
  items: { value: string; label: string }[];
  columns?: 2 | 4;
}) {
  const cls = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2";
  return (
    <dl className={`grid grid-cols-1 ${cls} gap-x-10 gap-y-8 max-w-xl`}>
      {items.map((m) => (
        <div key={m.label} className="border-t border-hairline pt-4">
          <dt className="font-serif type-h2 leading-[1.1] tracking-[-0.02em]">{m.value}</dt>
          <dd className="mt-2 font-sans type-label text-ink-muted">
            {m.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}