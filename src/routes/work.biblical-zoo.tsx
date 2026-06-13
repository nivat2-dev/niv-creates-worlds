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
    body: "The visit becomes a story to follow, not a route to complete. Each stop adds a chapter.",
  },
  {
    title: "Color-Coded Trails",
    body: "Three trails — short, medium and full — let families choose their own pace and challenge level.",
  },
  {
    title: "Animal Challenges",
    body: "Riddles tied to specific exhibits turn passive watching into active observation.",
  },
  {
    title: "Educational Discovery",
    body: "Facts are hidden inside the play, so learning happens without ever feeling like a lesson.",
  },
];

const LESSONS = [
  {
    n: "01",
    title: "Turn directions into rewards.",
    body: "Once finding the next animal felt like uncovering treasure, families stopped asking where to go — they wanted to keep going.",
  },
  {
    n: "02",
    title: "Design for curiosity, not instructions.",
    body: "The map gives just enough structure to start, and leaves enough mystery for kids to lead the way.",
  },
  {
    n: "03",
    title: "The best educational tools don't feel educational.",
    body: "When learning is wrapped inside a game, children absorb it without resistance — and parents enjoy the visit too.",
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
          intro="The original visitor map was crowded, hard to scan and almost invisible to children. The redesign turns the same information into a structured, playful and family-oriented tool — built to invite exploration instead of just locating exhibits."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {[
            {
              src: beforeMap.url,
              alt: "Original Biblical Zoo visitor map",
              caption: "Before — Original Map",
              desc: "Crowded layout, dense labels and a passive reading experience.",
            },
            {
              src: afterMap.url,
              alt: "Redesigned Biblical Zoo treasure map",
              caption: "After — Treasure Map",
              desc: "Structured, playful and interactive — designed for families to explore together.",
            },
          ].map((img, i) => (
            <Reveal key={img.caption} delay={i * 120}>
              <figure>
                <div className="border border-hairline bg-cream/60 rounded-sm overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="block w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                    <span className="text-coral">·</span> {img.caption}
                  </p>
                  <p className="mt-2 font-sans text-[15px] leading-relaxed text-ink-muted max-w-md">
                    {img.desc}
                  </p>
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
          intro="Instead of treating the map as a static guide, I rebuilt it as a treasure-hunt experience. Four design moves work together to turn navigation into a game families actively want to play."
        />
        <Reveal>
          <div className="mx-auto max-w-[820px] border border-hairline bg-paper rounded-sm overflow-hidden">
            <img
              src={afterMap.url}
              alt="Redesigned Biblical Zoo treasure map — full layout"
              className="block w-full h-auto"
              loading="lazy"
            />
          </div>
        </Reveal>
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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
          intro="The challenge sheet is a designed system, not a printed worksheet. Every element — routes, gems, riddles and rewards — is tuned to keep children engaged from the entrance to the last exhibit."
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          <Reveal className="lg:col-span-7">
            <div className="border border-hairline bg-cream rounded-sm overflow-hidden">
              <img
                src={gamification.url}
                alt="Gamification challenge sheet — collectible gems and animal riddles"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-5 lg:pt-4">
            <ul className="space-y-6">
              {[
                { t: "Three difficulty routes", b: "Short, medium and full trails let families pick the pace that matches the day." },
                { t: "Collectible gems", b: "Each completed challenge earns a gem, turning the visit into a tangible progression." },
                { t: "Animal riddles", b: "Clues sit next to real exhibits, rewarding observation over reading." },
                { t: "Reward progression", b: "Visible milestones along the trail give kids a reason to keep going." },
                { t: "Educational engagement", b: "Facts are baked into the play, so curiosity does the teaching." },
              ].map((row, i) => (
                <Reveal key={row.t} delay={i * 60}>
                  <li className="flex gap-4 border-b border-hairline pb-5 last:border-b-0 last:pb-0">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-coral pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <H4Card>{row.t}</H4Card>
                      <Body className="mt-2">{row.b}</Body>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </CaseSection>

      {/* ───── 05 — IN THE WILD ───── */}
      <CaseSection tone="cream">
        <CaseSectionHeader
          label="In The Wild"
          title="Designed for families. Tested by curiosity."
          intro="The clearest validation came from watching real visitors. Children took the lead — navigating, solving challenges and pulling parents toward the next exhibit. Independent exploration, sustained engagement and visible enjoyment confirmed the concept in the field."
        />
        <Reveal>
          <figure className="mx-auto max-w-[620px]">
            <div className="border border-hairline rounded-sm overflow-hidden">
              <img
                src={kids.url}
                alt="Children using the Biblical Zoo treasure map at the zoo"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted text-center">
              <span className="text-coral">·</span> Live at the Biblical Zoo, Jerusalem
            </figcaption>
          </figure>
        </Reveal>
      </CaseSection>

      {/* ───── 06 — WHAT I LEARNED ───── */}
      <section className="bg-paper pt-20 md:pt-28 pb-14 md:pb-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
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
        </div>
      </section>

      <MoreWork currentSlug="biblical-zoo" limit={4} />
    </main>
  );
}