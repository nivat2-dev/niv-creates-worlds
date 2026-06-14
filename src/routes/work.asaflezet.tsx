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
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-24 md:pt-24 pb-10 md:pb-12 min-h-[80vh] flex items-center">
          <div className="grid grid-cols-12 gap-10 md:gap-14 items-center w-full">
            <Reveal className="col-span-12 lg:col-span-7">
              <div className="relative mx-auto w-full max-w-[760px]">
                <img
                  src={frontCover.url}
                  alt="Asaflezet hardcover children's book — front cover"
                  className="block w-full h-auto rounded-[6px] select-none"
                  style={{ filter: "drop-shadow(0 40px 70px rgba(20,20,22,.30))" }}
                />
              </div>
            </Reveal>
            <div className="col-span-12 lg:col-span-5">
              <SectionLabel label="Asaflezet · Children's Book · Author & Illustrator" />
              <H1Hero className="mt-5">
                <span className="block">Turning a personal story</span>
                <span className="block italic text-coral">into a published book.</span>
              </H1Hero>
              <Lead className="mt-7 text-ink max-w-xl">
                Asaflezet is a children's picture book that I wrote, illustrated, designed and independently published. What began as a personal creative project became a printed hardcover book that reached real readers and families.
              </Lead>
              <ul className="mt-7 flex flex-wrap gap-2">
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
      <CaseSection tone="paper" className="!py-14 md:!py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <div className="border border-hairline bg-cream/60 rounded-sm overflow-hidden max-w-[520px]">
              <img
                src={nivBook.url}
                alt="Niv Haviv holding the printed Asaflezet hardcover book"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={120}>
            <SectionLabel label="The Process" />
            <H2Section className="mt-4 max-w-xl">From idea to published book.</H2Section>
            <Lead className="mt-5 max-w-xl">
              This project required managing every stage of the process, from story development and illustration to book design, production and printing. Rather than handing off the work between specialists, I built the project end-to-end and brought it into the physical world as a finished product.
            </Lead>
          </Reveal>
        </div>
      </CaseSection>

      {/* ───── 03 — BUILDING A WORLD ───── */}
      <CaseSection tone="cream" className="!py-14 md:!py-20">
        <CaseSectionHeader
          label="Inside The Book"
          title="Building a world children want to enter."
          intro="The visual language combines humor, imagination and emotional accessibility. Each spread was designed to support the story while keeping young readers engaged through color, character expression and playful details."
          dense
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
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
                <div className="border border-hairline bg-paper rounded-sm overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="block w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                  <span className="text-coral">·</span> {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      {/* ───── 04 — STORYTELLING THROUGH CHARACTER ───── */}
      <CaseSection tone="paper" className="!py-14 md:!py-20">
        <CaseSectionHeader
          label="Craft"
          title="Storytelling through character."
          dense
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CRAFT_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="h-full border border-hairline bg-cream/60 rounded-sm p-5 md:p-6">
                <EyebrowCaps>{String(i + 1).padStart(2, "0")}</EyebrowCaps>
                <H4Card className="mt-3">{c.title}</H4Card>
                <Body className="mt-2">{c.body}</Body>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      {/* ───── 05 — FROM SCREEN TO PRINT ───── */}
      <CaseSection tone="cream" className="!py-14 md:!py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="lg:col-span-6 lg:order-2">
            <div className="border border-hairline bg-paper rounded-sm overflow-hidden max-w-[520px] ml-auto">
              <img
                src={backCover.url}
                alt="Asaflezet — printed back cover"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:order-1" delay={120}>
            <SectionLabel label="Production" />
            <H2Section className="mt-4 max-w-xl">From screen to print.</H2Section>
            <Lead className="mt-5 max-w-xl">
              Publishing the book required more than illustration. Print preparation, production decisions, hardcover specifications and collaboration with printers all played an important role in transforming the project into a physical object.
            </Lead>
          </Reveal>
        </div>
      </CaseSection>

      {/* ───── 06 — RESULTS ───── */}
      <CaseSection tone="paper" className="!py-14 md:!py-20">
        <CaseSectionHeader label="Results" title="From file to finished object." dense />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {RESULTS.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <article className="h-full border border-hairline bg-cream/60 rounded-sm p-5 md:p-6">
                <EyebrowCaps>{String(i + 1).padStart(2, "0")}</EyebrowCaps>
                <H4Card className="mt-3">{r.title}</H4Card>
                <Body className="mt-2">{r.body}</Body>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      {/* ───── 07 — WHAT I LEARNED ───── */}
      <section className="bg-cream border-t border-hairline pt-14 md:pt-16 pb-12 md:pb-14">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <CaseSectionHeader label="What I Learned" title="Lessons from the project." dense />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {LESSONS.map((l, i) => (
              <Reveal key={l.n} delay={i * 80}>
                <article className="h-full border border-hairline bg-paper rounded-sm p-5 md:p-6">
                  <EyebrowCaps>{l.n}</EyebrowCaps>
                  <H4Card className="mt-3">{l.title}</H4Card>
                  <Body className="mt-1.5">{l.body}</Body>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MoreWork currentSlug="asaflezet" limit={4} />
    </main>
  );
}