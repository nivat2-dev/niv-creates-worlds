import { Link } from "@tanstack/react-router";
import natgeo from "@/assets/natgeo.jpg";
import superplay from "@/assets/superplay.jpg";
import zoo from "@/assets/zoo.jpg";
import asaflezet from "@/assets/asaflezet.jpg";
import bookCoverAsset from "@/assets/new-direction-cover.png.asset.json";

type Slug =
  | "new-direction"
  | "national-geographic-kids"
  | "gaming-product-design"
  | "biblical-zoo"
  | "asaflezet";

const PROJECTS: { slug: Slug; to: string; title: string; subtitle: string; image: string; bg?: string }[] = [
  {
    slug: "new-direction",
    to: "/work/new-direction",
    title: "New Direction",
    subtitle: "Graphic Novel · 2026",
    image: bookCoverAsset.url,
    bg: "bg-cream",
  },
  {
    slug: "national-geographic-kids",
    to: "/work/national-geographic-kids",
    title: "Nat Geo Kids",
    subtitle: "Editorial Illustration",
    image: natgeo,
  },
  {
    slug: "gaming-product-design",
    to: "/work/gaming-product-design",
    title: "Gaming & Product",
    subtitle: "Product & UI",
    image: superplay,
  },
  {
    slug: "biblical-zoo",
    to: "/work/biblical-zoo",
    title: "Treasure Map",
    subtitle: "Illustration & Wayfinding",
    image: zoo,
  },
  {
    slug: "asaflezet",
    to: "/work/asaflezet",
    title: "Asaflezet",
    subtitle: "Brand World",
    image: asaflezet,
  },
];

export default function MoreWork({ currentSlug }: { currentSlug: Slug }) {
  const others = PROJECTS.filter((p) => p.slug !== currentSlug).slice(0, 3);
  return (
    <section className="bg-paper border-t border-hairline py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">More Selected Work</p>
          <Link to="/" className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted hover:text-ink transition-colors">Index →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {others.map((p) => (
            <Link
              key={p.slug}
              to={p.to}
              className="group block"
            >
              <div className={`relative aspect-[4/5] overflow-hidden rounded-sm border border-hairline ${p.bg ?? "bg-paper-deep"}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl tracking-[-0.01em] group-hover:text-turquoise-deep transition-colors">{p.title}</h3>
                  <p className="mt-1 font-sans text-[14px] text-ink-muted">{p.subtitle}</p>
                </div>
                <span className="font-serif text-2xl text-ink-muted transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ink">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}