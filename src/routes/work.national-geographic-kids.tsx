import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import MoreWork from "@/components/MoreWork";
import coverTitanic from "@/assets/ngk-cover-titanic.png.asset.json";
import coverAmazon from "@/assets/ngk-cover-amazon.png.asset.json";
import cards from "@/assets/ngk-cards.png.asset.json";
import bookmarks from "@/assets/ngk-bookmarks.png.asset.json";
import spread from "@/assets/ngk-spread.png.asset.json";
import landing from "@/assets/ngk-landing.png.asset.json";

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

      <MoreWork currentSlug="national-geographic-kids" />
    </main>
  );
}