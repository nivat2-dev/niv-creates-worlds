import { createFileRoute } from "@tanstack/react-router";
import bookCover from "@/assets/nd-cover.png.asset.json";
import bookMockup from "@/assets/nd-book-mockup-v2.png.asset.json";
import beachScene from "@/assets/nd-beach-scene.png.asset.json";
import jerusalemWalk from "@/assets/nd-jerusalem-walk.png.asset.json";
import diamondTeal from "@/assets/nd-diamond-teal.png.asset.json";
import sparkCoral from "@/assets/nd-spark-coral.png.asset.json";
import starCream from "@/assets/nd-star-cream.png.asset.json";
import circleTurq from "@/assets/nd-circle-turquoise.png.asset.json";
import nivCreator from "@/assets/niv-creator.jpg.asset.json";
import ariehRoyCircle from "@/assets/nd-arieh-roy-circle.png.asset.json";
import MoreWork from "@/components/MoreWork";
import { ZoomableImage } from "@/components/Lightbox";
import {
  CaseNav,
  Reveal,
  SectionLabel,
  H1Hero,
  H2Section,
  Lead,
  Body,
  CaseCoverCard,
} from "@/components/case-study/primitives";

export const Route = createFileRoute("/work/new-direction")({
  head: () => ({
    meta: [
      { title: "New Direction — A Graphic Novel by Niv Haviv" },
      { name: "description", content: "New Direction — a 300-page graphic novel about family, silence, and the truths people leave behind. Written, illustrated and designed by Niv Haviv." },
      { property: "og:title", content: "New Direction — A Graphic Novel" },
      { property: "og:description", content: "A 300-page graphic novel about family, silence, and the truths people leave behind." },
      { property: "og:image", content: bookCover.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: bookCover.url },
    ],
  }),
  component: NewDirectionPage,
});

/* ───── page ───── */

function NewDirectionPage() {
  return (
    <main className="page-fade-in bg-paper text-ink">
      <CaseNav />

      {/* ───── 01 — HERO ───── */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 55% at 78% 30%, color-mix(in oklab, var(--coral) 20%, transparent), transparent 70%), radial-gradient(50% 50% at 14% 78%, color-mix(in oklab, var(--turquoise) 16%, transparent), transparent 75%)" }}
        />
        {/* one subtle motif from the visual language */}
        <img src={sparkCoral.url} alt="" aria-hidden className="hidden md:block absolute top-[24%] right-[10%] w-5 opacity-40 pointer-events-none select-none" />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-24 md:pt-24 pb-12 md:pb-14 min-h-[58vh] flex items-center">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center w-full">
            <Reveal className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
              <div className="relative max-w-[440px] w-full">
                <ZoomableImage
                  src={bookCover.url}
                  alt="New Direction — book cover"
                  className="block w-full h-auto select-none rounded-[2px]"
                  style={{ filter: "drop-shadow(0 40px 70px rgba(20,20,22,.28))" }}
                />
              </div>
            </Reveal>

            <div className="col-span-12 lg:col-span-6">
              <Reveal><SectionLabel label="2026" /></Reveal>
              <Reveal delay={120}>
                <H1Hero className="mt-6">
                  <span className="block">NEW</span>
                  <span className="block italic text-coral">Direction</span>
                </H1Hero>
              </Reveal>
              <Reveal delay={240}>
                <Lead className="mt-10 text-ink max-w-xl">
                  A 300-page graphic novel about family, silence, and the truths people leave behind.
                </Lead>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 02 — PROJECT OVERVIEW ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="mx-auto max-w-[620px]">
              <ZoomableImage
                src={bookMockup.url}
                alt="New Direction — open book mockup"
                className="block w-full h-auto"
                style={{ filter: "drop-shadow(0 22px 44px rgba(20,20,22,.18))" }}
              />
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-5">
            <Reveal><SectionLabel label="The Book" /></Reveal>
            <Reveal delay={120}>
              <H2Section className="mt-5">
                A 300-page graphic novel.
              </H2Section>
            </Reveal>
            <Reveal delay={220}>
              <Lead className="mt-4 max-w-md">
                Written, illustrated and designed by Niv Haviv. Publishing in 2026.
              </Lead>
            </Reveal>
            <Reveal delay={320}>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                {[
                  ["Pages", "300+"],
                  ["Format", "Graphic Novel"],
                  ["Languages", "Hebrew · English"],
                  ["Audience", "Readers 16+"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono type-label text-ink-muted">{k}</dt>
                    <dd className="mt-1 font-sans type-body text-ink-muted">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── 03 — INSIDE THE STORY ───── */}
      <section id="chapters" className="relative isolate overflow-hidden bg-cream border-t border-hairline py-14 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <SectionLabel label="Inside the Story" />
            <H2Section className="mt-5 max-w-3xl">
              Between faith, freedom and grief.
            </H2Section>
          </Reveal>

          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: jerusalemWalk.url, title: "Jerusalem", line: "A family of faith, and the things left unspoken between its walls." },
              { img: beachScene.url,    title: "Tel Aviv",  line: "A city of escape, where freedom and grief share the same shoreline." },
              { img: ariehRoyCircle.url, title: "Arieh & Roy", line: "Two strangers brought together by loss, slowly learning to lean on each other." },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <CaseCoverCard image={card.img} alt={card.title} title={card.title} body={card.line} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 04 — VISUAL LANGUAGE ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <Reveal>
            <SectionLabel label="A visual thread" />
            <H2Section className="mt-5 max-w-3xl">
              The colours and shapes that return through the book.
            </H2Section>
            <Lead className="mt-5 max-w-xl">
              Warm cream and coral hold the family scenes in Jerusalem. The deeper teals belong to the sea, to Tel Aviv, and to the quiet hours Arieh and Roy share after the loss. Small motifs — a star, a spark, a diamond — drift through the panels like something half-remembered.
            </Lead>
            <p className="mt-5 font-serif italic type-body-lg text-ink-muted max-w-xl">
              “Some things you don't say out loud. You draw them, and hope someone notices.”
            </p>
          </Reveal>

          {/* Curated palette — narrative colours */}
          <Reveal delay={120}>
            <div className="mt-10 grid grid-cols-5 gap-2 md:gap-3 max-w-[560px]">
              {[
                "#F2E7CE", // cream — Jerusalem light
                "#E36B4A", // coral — family warmth
                "#3CA9A1", // turquoise — the sea
                "#1F4F5C", // deep teal — Tel Aviv nights
                "#1B1F2A", // ink — silence
              ].map((hex) => (
                <div key={hex} className="aspect-square rounded-sm border border-hairline" style={{ background: hex }} />
              ))}
            </div>
          </Reveal>

          {/* Recurring symbols — 4 motifs */}
          <Reveal delay={180}>
            <div className="mt-6 grid grid-cols-4 gap-2 md:gap-3 max-w-[480px]">
              {[
                sparkCoral.url,
                starCream.url,
                diamondTeal.url,
                circleTurq.url,
              ].map((src) => (
                <div key={src} className="aspect-square bg-cream border border-hairline rounded-sm flex items-center justify-center p-7">
                  <img src={src} alt="" aria-hidden loading="lazy" className="block w-auto h-auto max-w-full max-h-full" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── 05 — MY ROLE ───── */}
      <section className="relative isolate overflow-hidden bg-cream border-t border-hairline py-14 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 grid grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal className="col-span-12 md:col-span-6">
            <div className="mx-auto max-w-[396px]">
              <ZoomableImage
                src={nivCreator.url}
                alt="Niv Haviv illustrating New Direction"
                className="block w-full h-auto rounded-sm"
                style={{ filter: "drop-shadow(0 24px 48px rgba(20,20,22,.18))" }}
              />
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-6">
            <Reveal><SectionLabel label="The Creator" /></Reveal>
            <Reveal delay={120}>
              <H2Section className="mt-5">
                Years in the making.
              </H2Section>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-6 space-y-5 max-w-lg">
                <Body>New Direction began as a single drawing and grew, slowly, into a 300-page book.</Body>
                <Body>It was made by one person, over several years — written, drawn and shaped night after night, from the first sketch to the final printed page.</Body>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-8 font-mono type-label text-ink-muted">
                Niv Haviv · Graphic Novel · 2026
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <MoreWork currentSlug="new-direction" />
    </main>
  );
}
