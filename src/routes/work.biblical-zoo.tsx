import { createFileRoute } from "@tanstack/react-router";
import MoreWork from "@/components/MoreWork";
import {
  CaseNav,
  Reveal,
  SectionLabel,
  EyebrowCaps,
  H1Hero,
  Lead,
  Body,
  H4Card,
  CaseSection,
  CaseSectionHeader,
} from "@/components/case-study/primitives";
import heroMockup from "@/assets/bz-hero-mockup.avif.asset.json";
import afterMap from "@/assets/bz-after-map.jpg.asset.json";
import beforeMap from "@/assets/bz-before-map.avif.asset.json";
import gamification from "@/assets/bz-gamification.avif.asset.json";
import kids from "@/assets/bz-kids.avif.asset.json";

export const Route = createFileRoute("/work/biblical-zoo")({
  head: () => ({
    meta: [
      { title: "Biblical Zoo Map — Niv Haviv" },
      {
        name: "description",
        content:
          "Redesigning the Biblical Zoo visitor map into an interactive treasure-hunt experience for families.",
      },
      { property: "og:title", content: "Biblical Zoo Map — Visitor Experience Design" },
      {
        property: "og:description",
        content:
          "Turning a zoo visit into an adventure — navigation, learning and play in one printed map.",
      },
      { property: "og:image", content: heroMockup.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroMockup.url },
    ],
  }),
  component: BiblicalZooPage,
});

const ROLE_TAGS = [
  "Marketing Design",
  "Information Design",
  "Gamification",
  "Illustration Direction",
];

const SOLUTION_CARDS = [
  {
    title: "Treasure Hunt Narrative",
    body: "The visit becomes a journey rather than a route.",
  },
  {
    title: "Color-Coded Trails",
    body: "Three paths help visitors choose their level of challenge.",
  },
  {
    title: "Animal Challenges",
    body: "Riddles encourage interaction with exhibits.",
  },
  {
    title: "Educational Discovery",
    body: "Learning is embedded into exploration.",
  },
];

const LESSONS = [
  {
    n: "01",
    title: "Engagement Changes Behaviour",
    body: "Visitors participate more when information becomes play.",
  },
  {
    n: "02",
    title: "Clarity Enables Exploration",
    body: "Simple navigation encourages deeper discovery.",
  },
  {
    n: "03",
    title: "Good UX Exists Beyond Screens",
    body: "The same principles apply to physical environments.",
  },
];

function BiblicalZooPage() {
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
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-28 pb-16 md:pb-20 min-h-[88vh] flex items-center">
          <div className="grid grid-cols-12 gap-10 md:gap-14 items-center w-full">
            <Reveal className="col-span-12 lg:col-span-7">
              <div className="relative mx-auto w-full max-w-[720px]">
                <img
                  src={heroMockup.url}
                  alt="Biblical Zoo redesigned treasure map mockup"
                  className="block w-full h-auto rounded-[10px] select-none"
                  style={{ filter: "drop-shadow(0 34px 60px rgba(20,20,22,.28))" }}
                />
              </div>
            </Reveal>
            <div className="col-span-12 lg:col-span-5">
              <SectionLabel label="Biblical Zoo Jerusalem · Visitor Experience Design" />
              <H1Hero className="mt-6">
                <span className="block">Turning a zoo visit</span>
                <span className="block italic text-coral">into an adventure.</span>
              </H1Hero>
              <Lead className="mt-10 text-ink max-w-xl">
                Redesigning the Biblical Zoo visitor map into an interactive treasure-hunt experience for families, combining navigation, learning and play.
              </Lead>
              <ul className="mt-10 flex flex-wrap gap-2">
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

      {/* ───── 02 — THE CHALLENGE ───── */}
      <CaseSection tone="paper">
        <CaseSectionHeader
          label="The Challenge"
          title="From map to experience."
          intro="The original visitor map was difficult to navigate, visually crowded and offered little engagement for younger visitors. The goal was to create a tool that could guide families through the zoo while encouraging exploration, discovery and learning."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            { src: beforeMap.url, alt: "Original Biblical Zoo visitor map", caption: "Original Zoo Map" },
            { src: afterMap.url, alt: "Redesigned Biblical Zoo treasure map", caption: "Redesigned Treasure Map" },
          ].map((img, i) => (
            <Reveal key={img.caption} delay={i * 120}>
              <figure>
                <div className="border border-hairline bg-cream/60 rounded-sm overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="block w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-4 font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                  <span className="text-coral">·</span> {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      {/* ───── 03 — DESIGN SOLUTION ───── */}
      <CaseSection tone="cream">
        <CaseSectionHeader
          label="Design Solution"
          title="Navigation designed as play."
          intro="Instead of treating the map as a static guide, I transformed it into a treasure-hunt experience. Visitors follow color-coded trails, solve animal-based challenges and collect gems throughout the zoo."
        />
        <Reveal>
          <div className="border border-hairline bg-paper rounded-sm overflow-hidden">
            <img
              src={afterMap.url}
              alt="Redesigned Biblical Zoo treasure map — full layout"
              className="block w-full h-auto"
              loading="lazy"
            />
          </div>
        </Reveal>
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SOLUTION_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="h-full border border-hairline bg-cream/60 rounded-sm p-6">
                <EyebrowCaps>{String(i + 1).padStart(2, "0")}</EyebrowCaps>
                <H4Card className="mt-4">{c.title}</H4Card>
                <Body className="mt-3">{c.body}</Body>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      {/* ───── 04 — GAMIFICATION ───── */}
      <CaseSection tone="paper">
        <CaseSectionHeader
          label="Gamification"
          title="Encouraging exploration through challenges."
          intro="To increase engagement, I designed a companion challenge system with collectible gems, animal riddles and trail-based objectives tailored for families and children."
        />
        <Reveal>
          <div className="border border-hairline bg-cream rounded-sm overflow-hidden">
            <img
              src={gamification.url}
              alt="Gamification challenge sheet — collectible gems and animal riddles"
              className="block w-full h-auto"
              loading="lazy"
            />
          </div>
        </Reveal>
      </CaseSection>

      {/* ───── 05 — IN THE WILD ───── */}
      <CaseSection tone="cream">
        <CaseSectionHeader
          label="In The Wild"
          title="Designed for families. Tested by curiosity."
          intro="The strongest validation came from seeing children actively using the map to navigate, solve challenges and explore the zoo independently."
        />
        <Reveal>
          <div className="border border-hairline rounded-sm overflow-hidden">
            <img
              src={kids.url}
              alt="Children using the Biblical Zoo treasure map at the zoo"
              className="block w-full h-auto"
              loading="lazy"
            />
          </div>
        </Reveal>
      </CaseSection>

      {/* ───── 06 — WHAT I LEARNED ───── */}
      <CaseSection tone="paper">
        <CaseSectionHeader
          label="What I Learned"
          title="Lessons from designing physical experiences."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {LESSONS.map((l, i) => (
            <Reveal key={l.n} delay={i * 80}>
              <article className="h-full border border-hairline bg-cream/60 rounded-sm p-7 md:p-8">
                <EyebrowCaps>{l.n}</EyebrowCaps>
                <H4Card className="mt-4">{l.title}</H4Card>
                <Body className="mt-3">{l.body}</Body>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <MoreWork currentSlug="biblical-zoo" limit={4} />
    </main>
  );
}