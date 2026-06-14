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
    title: "Wayfinding works harder when it's a game.",
    body: "Once each stop felt like uncovering treasure, families stopped asking where to go — kids set the pace and pulled their parents toward the next exhibit.",
  },
  {
    n: "02",
    title: "Leave room for kids to lead.",
    body: "Just enough structure to start, just enough mystery to keep going. The gap between the two is where children took over the visit.",
  },
  {
    n: "03",
    title: "Animal facts land best when wrapped in a riddle.",
    body: "Information presented as a clue, tied to a specific exhibit, got read out loud — the same facts printed on a panel got walked past.",
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
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-24 md:pt-24 pb-10 md:pb-12 min-h-[80vh] flex items-center">
          <div className="grid grid-cols-12 gap-10 md:gap-14 items-center w-full">
            <Reveal className="col-span-12 lg:col-span-7">
              <div className="relative mx-auto w-full max-w-[880px]">
                <img
                  src={heroMockup.url}
                  alt="Biblical Zoo redesigned treasure map mockup"
                  className="block w-full h-auto rounded-[10px] select-none"
                  style={{ filter: "drop-shadow(0 40px 70px rgba(20,20,22,.30))" }}
                />
              </div>
            </Reveal>
            <div className="col-span-12 lg:col-span-5">
              <SectionLabel label="Biblical Zoo Jerusalem · Visitor Experience Design" />
              <H1Hero className="mt-5">
                <span className="block">Turning a zoo visit</span>
                <span className="block italic text-coral">into an adventure.</span>
              </H1Hero>
              <Lead className="mt-7 text-ink max-w-xl">
                A redesigned visitor map that turns navigation into a treasure hunt — guiding families through the zoo, rewarding curiosity at every exhibit and quietly teaching along the way.
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

      {/* ───── 02 — THE CHALLENGE ───── */}
      <CaseSection tone="paper" className="!py-16 md:!py-20">
        <CaseSectionHeader
          label="The Challenge"
          title="From map to experience."
          intro="The original visitor map was crowded, hard to scan and almost invisible to children. The redesign turns the same information into a structured, playful and family-oriented tool — built to invite exploration instead of just locating exhibits."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {[
            {
              src: beforeMap.url,
              alt: "Original Biblical Zoo visitor map",
              caption: "Before — Original Map",
              desc: "Crowded layout, dense labels, no clear path. Families read it once and put it away.",
              tone: "muted" as const,
            },
            {
              src: afterMap.url,
              alt: "Redesigned Biblical Zoo treasure map",
              caption: "After — Treasure Map",
              desc: "Clear trails, playful illustrations, built-in challenges. The map becomes the experience.",
              tone: "accent" as const,
            },
          ].map((img, i) => (
            <Reveal key={img.caption} delay={i * 120}>
              <figure>
                <div className="border border-hairline bg-cream/60 rounded-sm overflow-hidden aspect-[5/4] flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="block w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                    <span className={img.tone === "accent" ? "text-coral" : "text-ink-muted"}>·</span> {img.caption}
                  </p>
                  <p className={`mt-2 font-sans text-[15px] leading-relaxed max-w-md ${img.tone === "accent" ? "text-ink" : "text-ink-muted"}`}>
                    {img.desc}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      {/* ───── 03 — DESIGN SOLUTION ───── */}
      <CaseSection tone="cream" className="!py-16 md:!py-20">
        <CaseSectionHeader
          label="Design Solution"
          title="Navigation designed as play."
          intro="Instead of a static guide, the map became a treasure-hunt experience. Four design moves — visible in the layout below — turn navigation into a game families actively want to play."
        />
        <Reveal>
          <div className="mx-auto max-w-[680px] border border-hairline bg-paper rounded-sm overflow-hidden">
            <img
              src={afterMap.url}
              alt="Redesigned Biblical Zoo treasure map — full layout"
              className="block w-full h-auto"
              loading="lazy"
            />
          </div>
          <p className="mt-5 text-center font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
            <span className="text-coral">·</span> Four design decisions, made visible below
          </p>
        </Reveal>
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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
      <CaseSection tone="paper" className="!py-16 md:!py-20">
        <CaseSectionHeader
          label="Gamification"
          title="Encouraging exploration through challenges."
          intro="A designed engagement system — not a worksheet. Routes, gems, riddles and rewards work together to keep children moving from the entrance to the final exhibit."
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          <Reveal className="lg:col-span-7">
            <EyebrowCaps>
              <span className="text-coral">·</span> Interactive Treasure Hunt Sheet
            </EyebrowCaps>
            <div className="mt-3 border border-hairline bg-cream rounded-sm overflow-hidden">
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
                { t: "Three difficulty routes", b: "Short, medium and full trails — families pick the pace." },
                { t: "Collectible gems", b: "Each solved challenge earns a gem. Progress becomes tangible." },
                { t: "Animal riddles", b: "Clues live next to real exhibits, rewarding observation." },
                { t: "Visible milestones", b: "Built-in checkpoints give kids a reason to keep going." },
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
            <Reveal delay={300}>
              <p className="mt-8 border-t border-hairline pt-5 font-serif text-[18px] leading-[1.45] text-ink italic">
                The result: a visit that families finish together — kids leading, parents following, learning happening along the way.
              </p>
            </Reveal>
          </div>
        </div>
      </CaseSection>

      {/* ───── 05 — IN THE WILD ───── */}
      <CaseSection tone="cream" className="!py-16 md:!py-20">
        <CaseSectionHeader
          label="In The Wild"
          title="Designed for families. Tested by curiosity."
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <figure>
              <div className="border border-hairline rounded-sm overflow-hidden">
                <img
                  src={kids.url}
                  alt="Children using the Biblical Zoo treasure map at the zoo"
                  className="block w-full h-auto"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-4 font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                <span className="text-coral">·</span> Live at the Biblical Zoo, Jerusalem
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={120}>
            <Lead className="text-ink">
              The clearest validation came from watching real visitors. Children took the lead — navigating, solving challenges and pulling their parents toward the next exhibit.
            </Lead>
            <ul className="mt-8 space-y-4">
              {[
                "Kids led the navigation — parents followed the trail they set.",
                "Engagement sustained from the entrance to the final exhibit.",
                "Families completed the visit together, map in hand.",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 border-t border-hairline pt-4">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-coral pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <Body className="text-ink">{t}</Body>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </CaseSection>

      {/* ───── 06 — WHAT I LEARNED ───── */}
      <section className="bg-paper border-t border-hairline pt-16 md:pt-20 pb-14 md:pb-16">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <CaseSectionHeader
          label="What I Learned"
          title="Lessons from designing physical experiences."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {LESSONS.map((l, i) => (
            <Reveal key={l.n} delay={i * 80}>
              <article className="h-full border border-hairline bg-cream/60 rounded-sm p-6 md:p-7">
                <EyebrowCaps>{l.n}</EyebrowCaps>
                <H4Card className="mt-4">{l.title}</H4Card>
                <Body className="mt-2">{l.body}</Body>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={280}>
          <p className="mt-12 md:mt-14 max-w-2xl font-serif text-[22px] md:text-[26px] leading-[1.35] tracking-[-0.015em] text-ink">
            The strongest physical experiences don't ask to be used — they invite people to play, and trust them to discover the rest.
          </p>
        </Reveal>
        </div>
      </section>

      <MoreWork currentSlug="biblical-zoo" limit={4} />
    </main>
  );
}