import { createFileRoute } from "@tanstack/react-router";
import MoreWork from "@/components/MoreWork";
import {
  CaseNav,
  Reveal,
  SectionLabel,
  EyebrowCaps,
  H1Hero,
  H2Section,
  Lead,
  Body,
  H4Card,
  CaseSection,
  CaseSectionHeader,
} from "@/components/case-study/primitives";
import { ZoomableImage } from "@/components/Lightbox";
import frontCover from "@/assets/az-front-cover.png.asset.json";
import backCover from "@/assets/az-back-cover.png.asset.json";
import nivBook from "@/assets/az-niv-book.jpg.asset.json";
import spreadPlayground from "@/assets/az-spread-playground.jpg.asset.json";
import spreadClassroom from "@/assets/az-spread-classroom.jpg.asset.json";
import spreadFantasy from "@/assets/az-spread-fantasy.jpg.asset.json";

export const Route = createFileRoute("/work/asaflezet")({
  head: () => ({
    meta: [
      { title: "Asaflezet — Children's Book · Niv Haviv" },
      {
        name: "description",
        content:
          "Asaflezet — a children's picture book written, illustrated, designed and independently published by Niv Haviv.",
      },
      { property: "og:title", content: "Asaflezet — Written, Illustrated & Published" },
      {
        property: "og:description",
        content:
          "From a personal story to a printed hardcover children's book — an end-to-end publishing project.",
      },
      { property: "og:image", content: frontCover.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: frontCover.url },
    ],
  }),
  component: AsaflezetPage,
});

const ROLE_TAGS = ["Writing", "Illustration", "Book Design", "Publishing", "Print Production"];

const CRAFT_CARDS = [
  {
    title: "Storytelling",
    body: "The story explores belonging, confidence and friendship through a child's imagination.",
  },
  {
    title: "Illustration",
    body: "Visual storytelling communicates emotion and personality in a way young readers can immediately understand.",
  },
  {
    title: "Accessibility",
    body: "Complex emotions are translated into a playful and approachable reading experience.",
  },
];

const RESULTS = [
  {
    title: "900 Copies Printed",
    body: "A full hardcover production run brought the project into the hands of readers.",
  },
  {
    title: "Independent Publishing",
    body: "The project was fully developed and produced independently.",
  },
  {
    title: "Real Readers",
    body: "The book moved beyond concept stage and became a completed physical product.",
  },
];

const LESSONS = [
  {
    n: "01",
    title: "Creating is only half the work.",
    body: "Turning an idea into a product requires production, logistics and persistence.",
  },
  {
    n: "02",
    title: "Storytelling goes beyond words.",
    body: "Illustration, pacing and design shape how readers experience a story.",
  },
  {
    n: "03",
    title: "Publishing is a design challenge.",
    body: "The reader experience begins long before the first page and continues beyond the last.",
  },
];

function AsaflezetPage() {
  return (
    <main className="bg-cream text-ink">
      <CaseNav />

      {/* ───── 01 — HERO ───── */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 55% at 22% 30%, color-mix(in oklab, var(--coral) 12%, transparent), transparent 70%), radial-gradient(50% 50% at 86% 78%, color-mix(in oklab, var(--turquoise) 12%, transparent), transparent 75%)",
          }}
        />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-24 md:pt-24 pb-10 md:pb-12 min-h-[72vh] flex items-center">
          <div className="grid grid-cols-12 gap-10 md:gap-16 items-center w-full">
            <Reveal className="col-span-12 lg:col-span-6">
              <div className="relative mx-auto w-full max-w-[520px]">
                <ZoomableImage
                  src={frontCover.url}
                  alt="Asaflezet hardcover children's book — front cover"
                  className="block w-full h-auto rounded-[6px] select-none"
                  style={{ filter: "drop-shadow(0 40px 70px rgba(20,20,22,.30))" }}
                />
              </div>
            </Reveal>
            <div className="col-span-12 lg:col-span-6">
              <SectionLabel label="Asaflezet · Children's Book · Author & Illustrator" />
              <H1Hero className="mt-5">
                <span className="block">Turning a personal story</span>
                <span className="block italic text-coral">into a published book.</span>
              </H1Hero>
              <Lead className="mt-6 text-ink max-w-xl">
                Asaflezet is a children's picture book that I wrote, illustrated, designed and independently published. What began as a personal creative project became a printed hardcover book that reached real readers and families.
              </Lead>
              <ul className="mt-6 flex flex-wrap gap-2">
                {ROLE_TAGS.map((t) => (
                  <li
                    key={t}
                    className="font-sans text-[12px] tracking-[0.04em] uppercase text-ink-muted border border-hairline rounded-full px-3 py-1.5"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 02 — FROM IDEA TO PUBLISHED BOOK ───── */}
      <CaseSection tone="paper" className="!py-12 md:!py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="lg:col-span-6" delay={120}>
            <SectionLabel label="The Process" />
            <H2Section className="mt-4 max-w-xl">From idea to published book.</H2Section>
            <Lead className="mt-5 max-w-md">
              This project required managing every stage of the process — story development, illustration, book design, production and printing. Rather than handing off the work between specialists, I built the project end-to-end and brought it into the physical world as a finished product.
            </Lead>
            <dl className="mt-8 grid grid-cols-3 gap-x-6 gap-y-4 max-w-md border-t border-hairline pt-5">
              {[
                { k: "Format", v: "Hardcover" },
                { k: "Pages", v: "32" },
                { k: "Run", v: "900 copies" },
              ].map((m) => (
                <div key={m.k}>
                  <dt className="font-sans text-[10px] tracking-[0.08em] uppercase text-ink-muted">
                    {m.k}
                  </dt>
                  <dd className="mt-1 font-serif text-[18px] tracking-[-0.01em]">{m.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="lg:col-span-6">
            <figure className="max-w-[440px] lg:ml-auto">
              <div className="border border-hairline bg-cream/60 rounded-sm overflow-hidden">
                <ZoomableImage
                  src={nivBook.url}
                  alt="Niv Haviv holding the printed Asaflezet hardcover book"
                  className="block w-full h-auto"
                />
              </div>
              <figcaption className="mt-3 font-sans text-[12px] text-ink-muted">
                <span className="text-coral">·</span> The finished book, in hand.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </CaseSection>

      {/* ───── 03 — BUILDING A WORLD ───── */}
      <CaseSection tone="cream" className="!py-12 md:!py-16">
        <CaseSectionHeader
          label="Inside The Book"
          title="Building a world children want to enter."
          intro="The visual language combines humor, imagination and emotional accessibility. Each spread was designed to support the story while keeping young readers engaged through color, character expression and playful details."
          dense
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 items-start">
          {[
            {
              src: spreadPlayground.url,
              alt: "Asaflezet spread — playground and classroom scene",
              caption: "Classroom & Playground",
            },
            {
              src: spreadFantasy.url,
              alt: "Asaflezet spread — imagination and fantasy scene",
              caption: "Imagination & Fantasy",
            },
          ].map((img, i) => (
            <Reveal key={img.caption} delay={i * 120}>
              <figure>
                <div className="border border-hairline bg-paper rounded-sm overflow-hidden shadow-[0_18px_36px_rgba(20,20,22,0.10)]">
                  <ZoomableImage
                    src={img.src}
                    alt={img.alt}
                    className="block w-full h-auto"
                  />
                </div>
                <figcaption className="mt-2.5 font-sans text-[11px] tracking-[0.08em] uppercase text-ink-muted/80">
                  {String(i + 1).padStart(2, "0")} / {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      {/* ───── 04 — STORYTELLING THROUGH CHARACTER ───── */}
      <CaseSection tone="paper" className="!py-12 md:!py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          <Reveal className="lg:col-span-6">
            <figure className="max-w-[440px]">
              <div className="border border-hairline bg-cream/60 rounded-sm overflow-hidden">
                <ZoomableImage
                  src={spreadClassroom.url}
                  alt="Asaflezet — character close-up spread"
                  className="block w-full h-auto"
                />
              </div>
            </figure>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={120}>
            <SectionLabel label="Craft" />
            <H2Section className="mt-4">Storytelling through character.</H2Section>
            <Lead className="mt-5 max-w-md">
              Every choice — voice, line, color, pacing — was shaped around the reader's emotional experience with the main character.
            </Lead>
            <ol className="mt-8 divide-y divide-hairline border-y border-hairline">
              {CRAFT_CARDS.map((c, i) => (
                <li key={c.title} className="grid grid-cols-12 gap-5 py-5 md:py-6 items-baseline">
                  <div className="col-span-2 font-sans text-[11px] tracking-[0.08em] uppercase text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-10">
                    <H4Card>{c.title}</H4Card>
                    <Body className="mt-2 max-w-[48ch]">{c.body}</Body>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </CaseSection>

      {/* ───── 05 — FROM SCREEN TO PRINT ───── */}
      <CaseSection tone="cream" className="!py-12 md:!py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="lg:col-span-6 lg:order-2">
            <figure className="max-w-[440px] lg:ml-auto">
              <ZoomableImage
                src={backCover.url}
                alt="Asaflezet — printed back cover"
                className="block w-full h-auto select-none"
                style={{ filter: "drop-shadow(0 30px 50px rgba(20,20,22,.22))" }}
              />
            </figure>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:order-1" delay={120}>
            <SectionLabel label="Production" />
            <H2Section className="mt-4">From screen to print.</H2Section>
            <Lead className="mt-5 max-w-md">
              Publishing the book required more than illustration. Print preparation, production decisions, hardcover specifications and collaboration with printers all played an important role in transforming the project into a physical object.
            </Lead>
          </Reveal>
        </div>
      </CaseSection>

      {/* ───── 06 — CLOSING: RESULTS + LESSONS ───── */}
      <CaseSection tone="paper" className="!py-14 md:!py-20">
        <CaseSectionHeader
          label="Closing"
          title="From file to finished object."
          intro="What the project produced — and what it taught me along the way."
          dense
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <EyebrowCaps>Results</EyebrowCaps>
            <dl className="mt-5 border-t border-hairline">
              {RESULTS.map((r) => (
                <div key={r.title} className="border-b border-hairline py-5">
                  <dt className="font-serif text-[22px] tracking-[-0.015em]">{r.title}</dt>
                  <dd className="mt-1.5 font-sans text-[14px] leading-[1.55] text-ink-muted max-w-[40ch]">
                    {r.body}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <EyebrowCaps>What I Learned</EyebrowCaps>
            <ol className="mt-5 space-y-6 md:space-y-7">
              {LESSONS.map((l) => (
                <li key={l.n} className="grid grid-cols-12 gap-5 items-baseline">
                  <div className="col-span-2 font-sans text-[11px] tracking-[0.08em] uppercase text-coral">
                    {l.n}
                  </div>
                  <div className="col-span-10">
                    <p className="font-serif text-[24px] md:text-[28px] leading-[1.15] tracking-[-0.015em]">
                      {l.title}
                    </p>
                    <Body className="mt-2 max-w-[52ch]">{l.body}</Body>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </CaseSection>

      <MoreWork currentSlug="asaflezet" limit={4} />
    </main>
  );
}