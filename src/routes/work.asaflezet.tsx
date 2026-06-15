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

const CRAFT_POINTS = [
  "Belonging, confidence and friendship — told through a child's imagination.",
  "Emotion carried by line, color and character before words do the work.",
  "Complex feelings made playful, approachable and easy to read aloud.",
];

const OUTCOMES = [
  { value: "900", label: "Hardcover copies printed" },
  { value: "End-to-end", label: "Written, illustrated & published" },
  { value: "In hand", label: "Reached real readers & families" },
];

function AsaflezetPage() {
  return (
    <main className="page-fade-in bg-cream text-ink">
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
            <figure className="max-w-[440px]">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="lg:col-span-6" delay={120}>
            <SectionLabel label="Craft" />
            <H2Section className="mt-4">Storytelling through character.</H2Section>
            <Lead className="mt-5 max-w-md">
              Every choice — voice, line, color, pacing — was shaped around the reader's emotional experience with the main character.
            </Lead>
            <ul className="mt-7 space-y-3 max-w-md">
              {CRAFT_POINTS.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 inline-block h-1 w-1 rounded-full bg-coral shrink-0" />
                  <Body className="text-ink">{p}</Body>
                </li>
              ))}
            </ul>
          </Reveal>
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
        </div>
      </CaseSection>

      {/* ───── 05 — FROM SCREEN TO PRINT ───── */}
      <CaseSection tone="cream" className="!py-12 md:!py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="lg:col-span-6" delay={120}>
            <SectionLabel label="Production" />
            <H2Section className="mt-4">From screen to print.</H2Section>
            <Lead className="mt-5 max-w-md">
              Publishing the book required more than illustration. Print preparation, production decisions, hardcover specifications and collaboration with printers all played an important role in transforming the project into a physical object.
            </Lead>
          </Reveal>
          <Reveal className="lg:col-span-6">
            <figure className="max-w-[440px]">
              <ZoomableImage
                src={backCover.url}
                alt="Asaflezet — printed back cover"
                className="block w-full h-auto select-none"
                style={{ filter: "drop-shadow(0 30px 50px rgba(20,20,22,.22))" }}
              />
            </figure>
          </Reveal>
        </div>
      </CaseSection>

      {/* ───── 06 — CLOSING ───── */}
      <CaseSection tone="paper" className="!py-16 md:!py-24">
        <Reveal className="max-w-3xl">
          <EyebrowCaps>In Closing</EyebrowCaps>
          <p className="mt-6 font-serif font-medium leading-[1.05] tracking-[-0.025em] text-[clamp(32px,4.2vw,56px)]">
            What began as a personal idea became a printed hardcover book
            <span className="text-coral italic"> in the hands of real readers.</span>
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-14 md:mt-20">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8 max-w-4xl border-t border-hairline pt-8">
            {OUTCOMES.map((o) => (
              <div key={o.label}>
                <dt className="font-serif text-[28px] md:text-[32px] leading-[1.05] tracking-[-0.02em]">
                  {o.value}
                </dt>
                <dd className="mt-2 font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                  {o.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </CaseSection>

      <MoreWork currentSlug="asaflezet" limit={4} />
    </main>
  );
}