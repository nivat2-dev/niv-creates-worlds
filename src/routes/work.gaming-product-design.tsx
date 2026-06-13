import { createFileRoute } from "@tanstack/react-router";
import MoreWork from "@/components/MoreWork";
import {
  CaseNav,
  Reveal,
  SectionLabel,
  EyebrowCaps,
  H1Hero,
  H2Section,
  H3Feature,
  H4Card,
  Lead,
  Body,
  CaseSection,
  CaseSectionHeader,
  CaseCard,
  CaseFramedCard,
} from "@/components/case-study/primitives";
import pirate from "@/assets/gpd-pirate-popup.jpg.asset.json";
import threeGames from "@/assets/gpd-three-games.png.asset.json";
import easter from "@/assets/gpd-easter.png.asset.json";
import newGames from "@/assets/gpd-new-games.png.asset.json";

export const Route = createFileRoute("/work/gaming-product-design")({
  head: () => ({
    meta: [
      { title: "LiveOps Events for Mobile Games — Niv Haviv" },
      {
        name: "description",
        content:
          "Designing progression systems, reward loops, monetization experiences and promotional assets for mobile games.",
      },
      { property: "og:title", content: "LiveOps Events for Mobile Games" },
      {
        property: "og:description",
        content:
          "Progression systems, reward loops and event design for mobile games — SuperPlay, RealPrize and more.",
      },
      { property: "og:image", content: pirate.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: pirate.url },
    ],
  }),
  component: GamingPage,
});

function GamingPage() {
  return (
    <main className="bg-cream text-ink">
      <CaseNav />

      {/* ───── 01 — HERO ───── */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 55% at 22% 30%, color-mix(in oklab, var(--coral) 16%, transparent), transparent 70%), radial-gradient(50% 50% at 86% 78%, color-mix(in oklab, var(--turquoise) 14%, transparent), transparent 75%)",
          }}
        />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-28 pb-16 md:pb-20 min-h-[88vh] flex items-center">
          <div className="grid grid-cols-12 gap-10 md:gap-14 items-center w-full">
            <Reveal className="col-span-12 lg:col-span-7">
              <div className="relative mx-auto w-full max-w-[640px]">
                <img
                  src={pirate.url}
                  alt="SuperPlay Pirate Treasure Hunt event popup"
                  className="block w-full h-auto rounded-[10px] select-none"
                  style={{ filter: "drop-shadow(0 34px 60px rgba(20,20,22,.28))" }}
                />
              </div>
            </Reveal>
            <div className="col-span-12 lg:col-span-5">
              <SectionLabel label="Gaming & Product Design · 2021–2024" />
              <H1Hero className="mt-6">
                <span className="block">Designing</span>
                <span className="block italic text-coral">LiveOps events.</span>
              </H1Hero>
              <Lead className="mt-10 text-ink max-w-xl">
                Designing progression systems, reward loops, monetization experiences and promotional assets for mobile games.
              </Lead>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 02 — THE CHALLENGE ───── */}
      <CaseSection tone="paper">
        <CaseSectionHeader
          label="The Challenge"
          title="A pirate-themed event, end-to-end."
          intro="A live event brief from SuperPlay: turn a familiar gameplay loop into a limited-time progression experience — built around a single popup that players see, understand and act on within seconds."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <Reveal>
            <div className="border border-hairline bg-cream/60 rounded-sm p-7 md:p-9 h-full">
              <EyebrowCaps>SuperPlay Assignment</EyebrowCaps>
              <H4Card className="mt-4">The brief.</H4Card>
              <ul className="mt-6 space-y-3">
                {[
                  "Design a pirate-themed live event",
                  "Create a progression system",
                  "Design reward mechanics",
                  "Build a complete event popup",
                  "Use existing game assets while creating a unique experience",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] inline-block h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
                    <Body className="text-ink">{item}</Body>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border border-hairline bg-cream/60 rounded-sm p-7 md:p-9 h-full">
              <EyebrowCaps>Skills Used</EyebrowCaps>
              <H4Card className="mt-4">What I brought.</H4Card>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "LiveOps Design",
                  "Monetization Design",
                  "UI Design",
                  "Visual Design",
                  "Event Design",
                  "Player Motivation",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] inline-block h-1.5 w-1.5 rounded-full bg-turquoise shrink-0" />
                    <Body className="text-ink">{item}</Body>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </CaseSection>

      {/* ───── 03 — UNDERSTANDING THE PROBLEM ───── */}
      <CaseSection tone="cream">
        <CaseSectionHeader
          label="Understanding the Problem"
          title="Three questions every player asks."
          intro="Before opening Figma I mapped the player's mental model — what they need to feel in the first second, the first tap, and across the full event."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              n: "01",
              t: "Progression",
              b: "Players should immediately understand how close they are to the reward.",
            },
            {
              n: "02",
              t: "Motivation",
              b: "Every action should feel meaningful and contribute toward a visible goal.",
            },
            {
              n: "03",
              t: "Visibility",
              b: "The reward should remain visible throughout the experience to encourage completion.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <article className="h-full border border-hairline bg-cream/60 rounded-sm p-7 md:p-9">
                <div className="font-serif text-coral text-[15px] tracking-[0.04em]">
                  {c.n}
                </div>
                <H4Card className="mt-3">{c.t}</H4Card>
                <Body className="mt-3 max-w-[32ch]">{c.b}</Body>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      {/* ───── 04 — WIREFRAME → FINAL ───── */}
      <CaseSection tone="paper">
        <CaseSectionHeader
          label="From Wireframe to Final"
          title="From assignment to designed event."
          intro="The same five anchors — header, progress, icon, rewards, CTA — moving from a structural sketch into the finished pirate popup."
        />

        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left — wireframe */}
          <Reveal className="col-span-12 lg:col-span-6">
            <EyebrowCaps>Wireframe · Structure</EyebrowCaps>
            <div className="mt-5 border border-hairline bg-cream/60 rounded-sm p-6 md:p-8 aspect-[5/6] flex flex-col">
              {/* header block */}
              <div className="border border-dashed border-ink/30 rounded-sm py-4 text-center font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                Header
              </div>
              {/* progress block */}
              <div className="mt-5 border border-dashed border-ink/30 rounded-sm p-4">
                <div className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink-muted">
                  Progress Bar
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full border border-dashed border-ink/30" />
                  <div className="flex-1 h-3 rounded-full border border-dashed border-ink/30" />
                  <div className="h-8 w-8 rounded-full border border-dashed border-ink/30" />
                </div>
              </div>
              {/* icon */}
              <div className="mt-5 border border-dashed border-ink/30 rounded-sm p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-sm border border-dashed border-ink/30" />
                <div className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink-muted">
                  Challenge Icon
                </div>
              </div>
              {/* rewards */}
              <div className="mt-5 border border-dashed border-ink/30 rounded-sm p-4 space-y-2">
                <div className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink-muted">
                  Reward Structure
                </div>
                {["Streaks ×1", "Level Win ×2", "Levels 1st Try ×4"].map((r) => (
                  <div
                    key={r}
                    className="flex justify-between items-center border-t border-dashed border-ink/15 pt-2 font-sans text-[12px] text-ink-muted"
                  >
                    <span>{r.split(" ").slice(0, -1).join(" ")}</span>
                    <span className="font-mono">{r.split(" ").slice(-1)}</span>
                  </div>
                ))}
              </div>
              {/* CTA */}
              <div className="mt-auto pt-5">
                <div className="border border-dashed border-coral/60 rounded-full py-3 text-center font-sans text-[12px] tracking-[0.08em] uppercase text-coral">
                  CTA Button
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — final */}
          <Reveal className="col-span-12 lg:col-span-6" delay={120}>
            <EyebrowCaps>Final Design · Pirate Treasure Hunt</EyebrowCaps>
            <div className="mt-5">
              <img
                src={pirate.url}
                alt="Final Pirate Treasure Hunt popup"
                className="block w-full h-auto rounded-sm select-none"
                style={{ filter: "drop-shadow(0 26px 48px rgba(20,20,22,.22))" }}
              />
              <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  { k: "Header", v: "Themed title board anchors the event." },
                  { k: "Progress Bar", v: "Visible 15/50 keeps the goal in sight." },
                  { k: "Challenge Icon", v: "Ship glyph marks every interaction." },
                  { k: "Reward Structure", v: "Tiered multipliers reward depth of play." },
                  { k: "CTA Button", v: "High-contrast Let's Go owns the bottom." },
                ].map((m) => (
                  <div key={m.k} className="border-t border-hairline pt-3">
                    <dt className="font-sans text-[11px] tracking-[0.08em] uppercase text-ink-muted">
                      {m.k}
                    </dt>
                    <dd className="mt-1 font-sans text-[14px] text-ink leading-[1.5]">
                      {m.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </CaseSection>

      {/* ───── 05 — BUILDING THE SYSTEM ───── */}
      <CaseSection tone="cream">
        <CaseSectionHeader
          label="Building the System"
          title="Each element carrying a job."
          intro="The popup is one screen, but it's really four small systems working together — each tuned for clarity, hierarchy and motivation."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {[
            {
              t: "Challenge Icon",
              b: "Designing a recognizable event symbol players link to every action.",
              crop: { x: "16%", y: "44%", scale: 2.6 },
            },
            {
              t: "Progress Bar",
              b: "Making progression visible and motivating across every tap.",
              crop: { x: "50%", y: "40%", scale: 1.9 },
            },
            {
              t: "Reward Structure",
              b: "Communicating goals and rewards in a single glance.",
              crop: { x: "50%", y: "62%", scale: 2.2 },
            },
            {
              t: "CTA",
              b: "Driving participation through hierarchy, color and clarity.",
              crop: { x: "50%", y: "84%", scale: 2.4 },
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 60}>
              <article className="flex h-full flex-col border border-hairline bg-cream/60 rounded-sm overflow-hidden">
                <div className="relative aspect-[4/3] bg-cream overflow-hidden">
                  <img
                    src={pirate.url}
                    alt={c.t}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      objectPosition: `${c.crop.x} ${c.crop.y}`,
                      transform: `scale(${c.crop.scale})`,
                      transformOrigin: `${c.crop.x} ${c.crop.y}`,
                    }}
                  />
                </div>
                <div className="border-t border-hairline p-5 md:p-6">
                  <H4Card>{c.t}</H4Card>
                  <Body className="mt-3 max-w-[32ch]">{c.b}</Body>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      {/* ───── 06 — FINAL EVENT DESIGN ───── */}
      <CaseSection tone="paper">
        <CaseSectionHeader
          label="Final Event Design"
          title="The complete experience."
        />
        <Reveal>
          <div className="mx-auto w-full max-w-[1100px]">
            <img
              src={pirate.url}
              alt="SuperPlay Pirate Treasure Hunt — final event popup"
              className="block w-full h-auto rounded-sm select-none"
              style={{ filter: "drop-shadow(0 40px 80px rgba(20,20,22,.24))" }}
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Lead className="mt-12 md:mt-16 max-w-2xl mx-auto text-center">
            The final solution combines progression, rewards and player motivation into a single event experience — one screen the player can read, feel and act on in seconds.
          </Lead>
        </Reveal>
      </CaseSection>

      {/* ───── 07 — ADDITIONAL CREATIVES ───── */}
      <CaseSection tone="cream">
        <CaseSectionHeader
          label="Marketing Creatives"
          title="Additional Gaming Marketing Creatives."
          intro="Beyond event systems and monetization design, I also created promotional creatives focused on acquisition, engagement and seasonal campaigns."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              image: threeGames.url,
              title: "Three Games Promotion",
              body: "An acquisition creative for RealPrize introducing three slot titles in a single editorial layout.",
              alt: "RealPrize three games promotional creative",
            },
            {
              image: easter.url,
              title: "Easter Campaign",
              body: "A seasonal hook designed to lift engagement around the holiday and re-activate dormant players.",
              alt: "RealPrize Easter campaign creative",
            },
            {
              image: newGames.url,
              title: "New Games Launch",
              body: "A product-first launch creative showcasing new titles inside hero device mockups.",
              alt: "RealPrize new games launch creative",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <CaseFramedCard
                image={c.image}
                alt={c.alt}
                title={c.title}
                body={c.body}
                aspect="1/1"
                framePadding="p-0"
              />
            </Reveal>
          ))}
        </div>
      </CaseSection>

      {/* ───── 08 — WHAT I LEARNED ───── */}
      <CaseSection tone="paper">
        <CaseSectionHeader
          label="What I Learned"
          title="Lessons from shipping events."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              n: "01",
              t: "Clarity Drives Engagement",
              b: "Players engage more when goals are instantly understandable.",
            },
            {
              n: "02",
              t: "Rewards Create Momentum",
              b: "Visible rewards encourage continued participation.",
            },
            {
              n: "03",
              t: "Design Supports Behaviour",
              b: "Every visual decision contributes to motivation and player action.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <article className="h-full border border-hairline bg-cream/60 rounded-sm p-7 md:p-9">
                <div className="font-serif text-coral text-[15px] tracking-[0.04em]">
                  {c.n}
                </div>
                <H4Card className="mt-3">{c.t}</H4Card>
                <Body className="mt-3 max-w-[32ch]">{c.b}</Body>
              </article>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <MoreWork currentSlug="gaming-product-design" />
    </main>
  );
}

// Suppress unused-import warning while keeping the primitives discoverable.
void H2Section;
void H3Feature;
void CaseCard;