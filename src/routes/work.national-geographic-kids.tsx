import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import MoreWork from "@/components/MoreWork";
import coverTitanic from "@/assets/ngk-cover-titanic.png.asset.json";
import coverAmazon from "@/assets/ngk-cover-amazon.png.asset.json";
import cards from "@/assets/ngk-cards.png.asset.json";
import bookmarks from "@/assets/ngk-bookmarks.png.asset.json";
import spread from "@/assets/ngk-spread.png.asset.json";
import landing from "@/assets/ngk-landing.png.asset.json";
import promoPoster from "@/assets/ngk-promo-poster.jpg.asset.json";
import packaging from "@/assets/ngk-packaging.png.asset.json";
import bookmarkRhino from "@/assets/ngk-bookmark-rhino.jpg.asset.json";
import landingMockup from "@/assets/ngk-landing-mockup.png.asset.json";
import emailYoung from "@/assets/ngk-email-young.avif.asset.json";
import emailNgk from "@/assets/ngk-email-ngk.avif.asset.json";
import portrait from "@/assets/ngk-portrait.jpg.asset.json";

export const Route = createFileRoute("/work/national-geographic-kids")({
  head: () => ({
    meta: [
      { title: "National Geographic Kids Israel — Niv Haviv" },
      { name: "description", content: "Four years designing magazines, educational products, campaigns and visual experiences for National Geographic Kids Israel." },
      { property: "og:image", content: coverTitanic.url },
    ],
  }),
  component: NatGeoKidsPage,
});

function MiniNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-6 flex items-center justify-between text-ink">
        <Link to="/" className="flex items-center gap-2 font-sans text-[12px] tracking-[0.02em]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
          Niv Haviv
        </Link>
        <Link to="/" className="font-sans text-[12px] tracking-[0.02em] hover:text-coral transition-colors">
          ← Index
        </Link>
      </div>
    </header>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 font-sans text-[12px] tracking-[0.04em] text-ink-muted">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
      <span>{label}</span>
    </div>
  );
}

function NatGeoKidsPage() {
  const cardsList = [
    {
      title: "Magazine Design",
      body: "I designed covers, features and editorial spreads month after month — shaping how each story reached young readers.",
      image: coverTitanic.url,
      alt: "National Geographic Kids magazine cover",
    },
    {
      title: "Educational Products",
      body: "I led the design of games, collectibles and reading tools that extended the magazine into the hands of kids.",
      image: cards.url,
      alt: "Educational products and collectible cards",
    },
    {
      title: "Marketing Campaigns",
      body: "From subscriber drives to launch assets, I designed the campaigns that brought new readers to the brand.",
      image: promoPoster.url,
      alt: "National Geographic Kids marketing campaign poster",
    },
    {
      title: "Digital Design",
      body: "I translated the magazine's voice into landing pages and email campaigns built around products and subscriptions.",
      image: landing.url,
      alt: "National Geographic Kids landing page",
    },
    {
      title: "Print Production",
      body: "I owned the production workflow end-to-end — preparing files, working with vendors and protecting quality through to print.",
      image: bookmarks.url,
      alt: "Retail display stand for printed reading tools",
    },
  ];

  return (
    <main className="bg-cream text-ink">
      <MiniNav />

      {/* ───── 01 — HERO ───── */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(60% 55% at 22% 30%, color-mix(in oklab, var(--coral) 16%, transparent), transparent 70%), radial-gradient(50% 50% at 86% 78%, color-mix(in oklab, var(--turquoise) 14%, transparent), transparent 75%)" }}
        />
        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-28 md:pt-28 pb-16 md:pb-20 min-h-[88vh] flex items-center">
          <div className="grid grid-cols-12 gap-10 md:gap-14 items-center w-full">
            {/* Left — collage */}
            <div className="col-span-12 lg:col-span-7">
              <div className="relative mx-auto w-full max-w-[640px] aspect-[5/6]">
                {/* Editorial spread — back layer */}
                <img
                  src={spread.url}
                  alt="National Geographic Kids editorial spread"
                  className="absolute left-[-4%] top-[6%] w-[58%] h-auto rounded-sm select-none"
                  style={{ filter: "drop-shadow(0 18px 36px rgba(20,20,22,.18))", transform: "rotate(-4deg)" }}
                />
                {/* Landing page mockup — back right */}
                <img
                  src={landing.url}
                  alt="NGK landing page mockup"
                  className="absolute right-[-6%] top-[2%] w-[46%] h-auto select-none"
                  style={{ filter: "drop-shadow(0 16px 32px rgba(20,20,22,.16))", transform: "rotate(3deg)" }}
                />
                {/* Display stand — mid back */}
                <img
                  src={bookmarks.url}
                  alt="NGK magnetic bookmarks display stand"
                  className="absolute left-[6%] bottom-[2%] w-[40%] h-auto select-none"
                  style={{ filter: "drop-shadow(0 20px 36px rgba(20,20,22,.20))", transform: "rotate(-2deg)" }}
                />
                {/* Card pack — mid right */}
                <img
                  src={cards.url}
                  alt="Keflaonim collectible cards and pack"
                  className="absolute right-[2%] bottom-[6%] w-[44%] h-auto select-none"
                  style={{ filter: "drop-shadow(0 22px 40px rgba(20,20,22,.22))", transform: "rotate(4deg)" }}
                />
                {/* Amazon cover — secondary anchor */}
                <img
                  src={coverAmazon.url}
                  alt="National Geographic Kids — Amazon cover"
                  className="absolute left-[12%] top-[18%] w-[44%] h-auto rounded-sm select-none"
                  style={{ filter: "drop-shadow(0 26px 44px rgba(20,20,22,.24))", transform: "rotate(-5deg)" }}
                />
                {/* Titanic cover — primary anchor, front-center */}
                <img
                  src={coverTitanic.url}
                  alt="National Geographic Kids — Titanic cover"
                  className="absolute right-[10%] top-[22%] w-[50%] h-auto rounded-sm select-none"
                  style={{ filter: "drop-shadow(0 34px 56px rgba(20,20,22,.30))", transform: "rotate(3deg)" }}
                />
              </div>
            </div>

            {/* Right — copy */}
            <div className="col-span-12 lg:col-span-5">
              <SectionLabel label="National Geographic Kids Israel · 2021–2025" />
              <h1 className="mt-6 font-serif text-[clamp(46px,7vw,108px)] leading-[0.9] tracking-[-0.035em] font-medium">
                <span className="block">Designing</span>
                <span className="block italic text-coral">curiosity.</span>
              </h1>
              <p className="mt-10 font-sans text-[17px] leading-[1.6] text-ink max-w-xl">
                For more than four years I led the visual experience of National Geographic Kids Israel — designing the magazine, the products around it and the campaigns that reached thousands of young readers every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── More than a magazine ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel label="More than a magazine" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif text-3xl md:text-[44px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
                More than a magazine.
              </h2>
              <p className="mt-4 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-3xl">
                National Geographic Kids was never just a monthly publication. Across more than four years I worked on five connected disciplines — and was responsible for the way they fit together.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 md:gap-6">
            {cardsList.map((card) => (
              <article key={card.title} className="flex h-full flex-col border border-hairline bg-cream/60 p-5 md:p-6 rounded-sm">
                <div className="h-[220px] md:h-[230px] flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="block max-h-full max-w-[70%] w-auto h-auto object-contain"
                    style={{ filter: "drop-shadow(0 14px 28px rgba(20,20,22,.12))" }}
                  />
                </div>
                <h3 className="mt-7 font-serif text-[22px] leading-[1.1] tracking-[-0.015em]">
                  {card.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] leading-[1.6] text-ink-muted max-w-[28ch]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Featured Work ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel label="Featured Work" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif text-3xl md:text-[44px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
                Featured Work.
              </h2>
              <p className="mt-4 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-2xl">
                Three editorial projects that defined my years on the magazine — covers and features I designed from concept to final print.
              </p>
            </div>
          </div>

          {/* Project 01 — Titanic (image left) */}
          <article className="grid grid-cols-12 gap-8 md:gap-14 items-center mt-4">
            <div className="col-span-12 lg:col-span-7 order-1">
              <div className="relative mx-auto w-full max-w-[640px]">
                <img
                  src={coverTitanic.url}
                  alt="National Geographic Kids — Titanic cover"
                  className="block w-full h-auto rounded-sm select-none"
                  style={{ filter: "drop-shadow(0 34px 60px rgba(20,20,22,.22))" }}
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 order-2">
              <div className="font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                Cover Story
              </div>
              <h3 className="mt-5 font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
                Bringing history back to the surface.
              </h3>
              <p className="mt-6 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-md">
                A cover I designed around new technology used to reveal details from the Titanic wreck more than a century after the disaster. I led the cover concept, typography and image treatment.
              </p>
            </div>
          </article>

          {/* Project 02 — Amazon (image right) */}
          <article className="mt-20 md:mt-28 grid grid-cols-12 gap-8 md:gap-14 items-center">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <div className="font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                Feature Issue
              </div>
              <h3 className="mt-5 font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
                A visual journey into the Amazon.
              </h3>
              <p className="mt-6 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-md">
                A feature issue on one of the world's most important ecosystems. I designed the cover and shaped the interior story to immerse young readers in the rainforest.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-[640px]">
                <img
                  src={coverAmazon.url}
                  alt="National Geographic Kids — Amazon cover"
                  className="block w-full h-auto rounded-sm select-none"
                  style={{ filter: "drop-shadow(0 34px 60px rgba(20,20,22,.22))" }}
                />
              </div>
            </div>
          </article>

          {/* Project 03 — Editorial Design (image left) */}
          <article className="mt-20 md:mt-28 grid grid-cols-12 gap-8 md:gap-14 items-center">
            <div className="col-span-12 lg:col-span-7 order-1">
              <div className="relative mx-auto w-full max-w-[760px]">
                <img
                  src={spread.url}
                  alt="National Geographic Kids editorial spread"
                  className="block w-full h-auto rounded-sm select-none"
                  style={{ filter: "drop-shadow(0 30px 54px rgba(20,20,22,.20))" }}
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 order-2">
              <div className="font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                Inside the Magazine
              </div>
              <h3 className="mt-5 font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
                Editorial storytelling.
              </h3>
              <p className="mt-6 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-md">
                Across dozens of issues I translated complex scientific and historical topics into visual experiences — building layout systems that let each story breathe.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ───── Beyond the Magazine ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel label="Beyond the Magazine" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif text-3xl md:text-[44px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
                Beyond the Magazine.
              </h2>
              <p className="mt-4 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-2xl">
                I designed physical products and promotional pieces that extended the brand off the page — each one a different category of work I led end-to-end.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {[
              { title: "Keflaonim Card Game", body: "A collectible trading card series I designed around natural science — characters, layout system and full deck art.", image: cards.url, alt: "Keflaonim collectible cards" },
              { title: "Magnetic Bookmarks", body: "A printed line of magnetic bookmarks featuring wildlife photography. I art-directed the series and prepared it for print.", image: bookmarkRhino.url, alt: "Magnetic bookmark — rhino" },
              { title: "Retail Display Stand", body: "Point-of-sale display I designed to present the bookmark collection in stores — from structure to printed graphics.", image: bookmarks.url, alt: "Retail display stand" },
              { title: "Promotional Print", body: "Subscriber posters and giveaways I designed to launch new issues and reward returning readers.", image: promoPoster.url, alt: "Promotional poster" },
            ].map((card) => (
              <article key={card.title} className="flex h-full flex-col border border-hairline bg-cream/60 rounded-sm overflow-hidden">
                <div className="relative aspect-[4/5] bg-cream flex items-center justify-center p-6">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="block max-h-full max-w-full w-auto h-auto object-contain"
                    style={{ filter: "drop-shadow(0 18px 32px rgba(20,20,22,.14))" }}
                  />
                </div>
                <div className="border-t border-hairline p-5 md:p-6">
                  <h3 className="font-serif text-[22px] leading-[1.1] tracking-[-0.015em]">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-sans text-[15px] leading-[1.6] text-ink-muted max-w-[32ch]">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Digital ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel label="Digital" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif text-3xl md:text-[44px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
                Extending the experience online.
              </h2>
              <p className="mt-4 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-2xl">
                I extended the magazine into digital — designing landing pages and campaign emails that carried the same editorial voice to subscribers and new readers.
              </p>
            </div>
          </div>

          {/* Featured — Landing Page */}
          <article className="grid grid-cols-12 gap-8 md:gap-14 items-center">
            <div className="col-span-12 lg:col-span-7 order-1">
              <div className="relative mx-auto w-full max-w-[460px] py-6">
                <img
                  src={landingMockup.url}
                  alt="National Geographic Kids landing page mockup"
                  className="block w-full h-auto select-none"
                  style={{ filter: "drop-shadow(0 30px 54px rgba(20,20,22,.20))" }}
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 order-2">
              <div className="font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                Landing Page Design
              </div>
              <h3 className="mt-5 font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.02] tracking-[-0.025em] max-w-[16ch]">
                From print to digital.
              </h3>
              <p className="mt-6 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-md">
                A landing page I designed to promote new issues and subscriptions to parents and educators. I led the layout, hierarchy and visual system — translating the magazine's editorial voice to the screen.
              </p>
            </div>
          </article>

          {/* Secondary row — campaign materials */}
          <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {[
              { title: "Young — Launch Email", body: "Launch announcement for the new Young magazine. I designed the email to introduce the title to existing subscribers and educators.", image: emailYoung.url, alt: "Young magazine launch email" },
              { title: "Subscriber Renewal Email", body: "A separate campaign aimed at lapsed and returning readers — I built the layout and visual system to drive renewals without losing the editorial tone.", image: emailNgk.url, alt: "National Geographic Kids subscriber renewal email" },
            ].map((card) => (
              <article key={card.title} className="flex h-full flex-col border border-hairline bg-paper rounded-sm overflow-hidden">
                <div className="relative aspect-[4/3] bg-cream flex items-center justify-center p-10 md:p-14">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="block max-h-full max-w-[70%] w-auto h-auto object-contain"
                    style={{ filter: "drop-shadow(0 22px 38px rgba(20,20,22,.16))" }}
                  />
                </div>
                <div className="border-t border-hairline p-6 md:p-7">
                  <h3 className="font-serif text-[22px] leading-[1.1] tracking-[-0.015em]">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-sans text-[15px] leading-[1.6] text-ink-muted max-w-[42ch]">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Behind the work ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Left — portrait */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative mx-auto w-full max-w-[460px] aspect-[4/5] overflow-hidden rounded-sm" style={{ filter: "drop-shadow(0 30px 54px rgba(20,20,22,.18))" }}>
                <img
                  src={portrait.url}
                  alt="Niv Haviv at the National Geographic Kids studio"
                  className="absolute inset-0 w-full h-full object-cover select-none"
                  style={{ objectPosition: "30% center" }}
                />
              </div>
            </div>

            {/* Right — copy + metrics */}
            <div className="col-span-12 lg:col-span-6">
              <SectionLabel label="Behind the work" />
              <h2 className="mt-6 font-serif text-3xl md:text-[44px] leading-[1.05] tracking-[-0.02em] max-w-[16ch]">
                Four years inside National Geographic Kids.
              </h2>
              <p className="mt-6 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-xl">
                I joined as the lead designer and stayed for more than four years. I was responsible for the magazine's visual language, the products that grew around it and the campaigns that brought new readers to the brand.
              </p>

              <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-xl">
                {[
                  { k: "50+ Issues", v: "Designed end-to-end" },
                  { k: "4 Years", v: "Lead designer on the brand" },
                  { k: "12+ Products", v: "Games, bookmarks, packaging" },
                  { k: "Print + Digital", v: "Magazine, web and email" },
                ].map((m) => (
                  <div key={m.k} className="border-t border-hairline pt-4">
                    <dt className="font-serif text-[26px] leading-[1.1] tracking-[-0.02em]">
                      {m.k}
                    </dt>
                    <dd className="mt-2 font-sans text-[13px] tracking-[0.04em] uppercase text-ink-muted">
                      {m.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <MoreWork currentSlug="national-geographic-kids" />
    </main>
  );
}