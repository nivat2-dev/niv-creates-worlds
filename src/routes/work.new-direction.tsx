import { createFileRoute } from "@tanstack/react-router";
import CaseStudy from "@/components/CaseStudy";
import bookCover from "@/assets/new-direction-cover.png.asset.json";
import novelSpread from "@/assets/novel-spread.jpg";
import necklace from "@/assets/necklace.png";
import portrait from "@/assets/niv-portrait.jpg.asset.json";

export const Route = createFileRoute("/work/new-direction")({
  head: () => ({
    meta: [
      { title: "New Direction — Graphic Novel · Niv Haviv" },
      { name: "description", content: "An original graphic novel — story, characters, typography and book design built from a single visual language." },
      { property: "og:image", content: bookCover.url },
    ],
  }),
  component: () => (
    <CaseStudy
      index="00"
      eyebrow="Signature Project"
      title="New"
      italic="Direction"
      year="2024"
      client="Self-initiated"
      role="Author, Illustrator, Designer"
      disciplines={["Graphic Novel", "Character Design", "Illustration", "Publishing"]}
      hero={{ src: novelSpread, alt: "Interior pages of New Direction" }}
      tagline="An original graphic novel — story, characters, typography and book design built from a single visual language."
      overview="New Direction is a complete authored world: a 180-page graphic novel I wrote, illustrated, designed and prepared for print end-to-end. The story follows a young protagonist whose turquoise pendant becomes a compass for change."
      roleDetail="From the first sketch to the printed spine. Story development, character design, panel-by-panel illustration, typography, color, layout and production. The pendant — a recurring symbol — was designed as both a narrative object and a piece of brand identity for the book."
      challenge="How do you make a self-published debut graphic novel feel as considered as a major publisher release — visually, narratively and physically?"
      process={[
        { step: "01", title: "Story & world", body: "Beat sheet, character arcs and the pendant as the story's emotional engine. Early drafts focused on tone over plot — quiet, hopeful, a little strange." },
        { step: "02", title: "Visual language", body: "A muted cream paper, deep ink, and one signal color: turquoise. Every panel respects this restraint — the world breathes." },
        { step: "03", title: "Panels", body: "Hand-painted spreads, scanned and composited. Hundreds of panels, each treated as its own composition before being woven into the page rhythm." },
        { step: "04", title: "Typography & layout", body: "Custom lettering for chapter openers; Fraunces for body. Page grids tuned to the reading pace of each scene." },
        { step: "05", title: "Print", body: "Paper stock, ink coverage, spine treatment and a die-cut turquoise inlay on the cover. Designed to feel like an object, not a product." },
      ]}
      outcome="A complete published graphic novel — sold through independent bookshops, exhibited at design festivals, and the founding artifact of the studio's storytelling work."
      outcomeStats={[
        { value: "180", label: "Pages" },
        { value: "300+", label: "Painted panels" },
        { value: "1", label: "Pendant, hand-made" },
        { value: "∞", label: "Re-reads" },
      ]}
      gallery={[
        { src: bookCover.url, alt: "New Direction — cover", span: "full" },
        { src: novelSpread, alt: "Interior spread", span: "half" },
        { src: necklace, alt: "Turquoise pendant", span: "half" },
        { src: portrait.url, alt: "Author portrait", span: "tall" },
        { src: novelSpread, alt: "Hand-painted detail", span: "tall" },
      ]}
      next={{ to: "/work/national-geographic-kids", label: "National Geographic Kids", index: "01 / 05" }}
    />
  ),
});