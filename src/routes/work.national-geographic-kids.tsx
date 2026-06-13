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

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-sans text-[12px] tracking-[0.04em] text-ink-muted">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
      <span>{n} — {label}</span>
    </div>
  );
}

function NatGeoKidsPage() {
  const cardsList = [
    {
      title: "Magazine Design",
      body: "Editorial layouts, covers, features and visual storytelling.",
      image: coverTitanic.url,
      alt: "National Geographic Kids magazine cover",
      frameClassName: "max-w-[120px]",
      imageClassName: "rounded-[2px]",
    },
    {
      title: "Educational Products",
      body: "Games, bookmarks, collectible items and reading tools.",
      image: cards.url,
      alt: "Educational products and collectible cards",
      frameClassName: "max-w-[132px]",
      imageClassName: "",
    },
    {
      title: "Marketing Campaigns",
      body: "Promotional materials, subscriber campaigns and launch assets.",
      image: promoPoster.url,
      alt: "National Geographic Kids marketing campaign poster",
      frameClassName: "max-w-[108px]",
      imageClassName: "rounded-[2px]",
    },
    {
      title: "Digital Design",
      body: "Landing pages and online experiences.",
      image: landing.url,
      alt: "National Geographic Kids landing page",
      frameClassName: "max-w-[132px]",
      imageClassName: "",
    },
    {
      title: "Print Production",
      body: "Preparing files, production workflows and collaboration with vendors.",
      image: bookmarks.url,
      alt: "Retail display stand for printed reading tools",
      frameClassName: "max-w-[118px]",
      imageClassName: "",
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
              <SectionLabel n="01" label="National Geographic Kids Israel · 2021–2025" />
              <h1 className="mt-6 font-serif text-[clamp(46px,7vw,108px)] leading-[0.9] tracking-[-0.035em] font-medium">
                <span className="block">Designing</span>
                <span className="block italic text-coral">curiosity.</span>
              </h1>
              <p className="mt-10 font-sans text-lg md:text-[20px] leading-[1.5] text-ink max-w-xl">
                For more than four years I designed magazines, educational products, campaigns and visual experiences for thousands of young readers every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 02 — OVERVIEW ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel n="02" label="More than a magazine" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif text-3xl md:text-[44px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
                More than a magazine.
              </h2>
              <p className="mt-4 font-sans text-[17px] leading-[1.55] text-ink-muted max-w-3xl">
                National Geographic Kids was much more than a monthly publication.
              </p>
              <p className="mt-2 font-sans text-[17px] leading-[1.55] text-ink-muted max-w-3xl">
                For over four years I worked across editorial design, educational products, marketing campaigns and print production.
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-5">
            {cardsList.map((card) => (
              <article key={card.title} className="flex h-full flex-col justify-between border border-hairline bg-cream/60 p-5 md:p-6 rounded-sm min-h-[280px]">
                <div>
                  <div className="flex h-[112px] items-start">
                    <div className={card.frameClassName}>
                      <img
                        src={card.image}
                        alt={card.alt}
                        loading="lazy"
                        className={`block w-full h-auto object-contain ${card.imageClassName}`.trim()}
                        style={{ filter: "drop-shadow(0 14px 28px rgba(20,20,22,.12))" }}
                      />
                    </div>
                  </div>
                  <h3 className="mt-6 font-serif text-[26px] leading-[1.05] tracking-[-0.015em]">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 font-sans text-[15px] leading-[1.55] text-ink-muted max-w-[24ch]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 03 — FEATURED WORK ───── */}
      <section className="relative isolate overflow-hidden border-t border-hairline bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-24">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel n="03" label="Featured Work" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif text-3xl md:text-[44px] leading-[1.05] tracking-[-0.02em] max-w-3xl">
                Featured Work.
              </h2>
              <p className="mt-4 font-sans text-[17px] leading-[1.55] text-ink-muted max-w-2xl">
                A closer look at three editorial projects that defined the years at National Geographic Kids.
              </p>
            </div>
          </div>

          {/* Project 01 — Titanic (image left) */}
          <article className="grid grid-cols-12 gap-8 md:gap-14 items-center">
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
                Project 01 — Cover Story
              </div>
              <h3 className="mt-5 font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
                Bringing history back to the surface.
              </h3>
              <p className="mt-6 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-md">
                A cover story exploring new technology used to reveal details from the Titanic wreck more than a century after the disaster.
              </p>
            </div>
          </article>

          {/* Project 02 — Amazon (image right) */}
          <article className="mt-24 md:mt-36 grid grid-cols-12 gap-8 md:gap-14 items-center">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <div className="font-sans text-[12px] tracking-[0.08em] uppercase text-ink-muted">
                Project 02 — Feature Issue
              </div>
              <h3 className="mt-5 font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
                A visual journey into the Amazon.
              </h3>
              <p className="mt-6 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-md">
                A feature issue focused on one of the world's most important ecosystems.
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
          <article className="mt-24 md:mt-36 grid grid-cols-12 gap-8 md:gap-14 items-center">
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
                Project 03 — Inside the Magazine
              </div>
              <h3 className="mt-5 font-serif text-[clamp(32px,3.6vw,52px)] leading-[1.02] tracking-[-0.025em] max-w-[18ch]">
                Editorial storytelling.
              </h3>
              <p className="mt-6 font-sans text-[17px] leading-[1.6] text-ink-muted max-w-md">
                Transforming complex scientific and historical topics into engaging visual experiences for young readers.
              </p>
            </div>
          </article>
        </div>
      </section>

      <MoreWork currentSlug="national-geographic-kids" />
    </main>
  );
}