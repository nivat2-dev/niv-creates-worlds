import { createFileRoute } from "@tanstack/react-router";
import CaseStudy from "@/components/CaseStudy";
import natgeo from "@/assets/natgeo.jpg";
import zoo from "@/assets/zoo.jpg";

export const Route = createFileRoute("/work/national-geographic-kids")({
  head: () => ({
    meta: [
      { title: "National Geographic Kids — Editorial · Niv Haviv" },
      { name: "description", content: "Editorial illustration and infographics for a global kids audience." },
      { property: "og:image", content: natgeo },
    ],
  }),
  component: () => (
    <CaseStudy
      index="01"
      slug="national-geographic-kids"
      eyebrow="Editorial Illustration"
      title="Nat Geo"
      italic="Kids"
      year="2022 — 2024"
      client="National Geographic Kids"
      role="Illustrator · Editorial Designer"
      disciplines={["Editorial", "Illustration", "Infographics", "Kids"]}
      hero={{ src: natgeo, alt: "National Geographic Kids spreads" }}
      tagline="Translating science, wildlife and discovery into spreads that invite curiosity."
      overview="A multi-year collaboration creating illustrated spreads, infographics, characters and explainers for the magazine's print and digital editions — distributed to millions of young readers worldwide."
      roleDetail="Concepting and illustrating editorial features end-to-end: from initial sketches with the editorial team, through character design, color, composition, and final delivery for international print runs."
      challenge="How do you make a wild okapi, a deep-sea volcano, and a 200-million-year-old fern feel equally alive on the same page — for an eight-year-old?"
      process={[
        { step: "01", title: "Briefing", body: "Work with the editorial team to pull the single most surprising fact out of each feature — that becomes the visual hook." },
        { step: "02", title: "Sketch", body: "Loose thumbnails exploring composition, scale play and character. Always testing readability at print size first." },
        { step: "03", title: "Color", body: "A palette that stays warm and saturated without going cartoony. Children's, not childish." },
        { step: "04", title: "Final art", body: "Painted in layers, then composed with editorial type and infographic callouts. Built to be re-purposed across languages." },
      ]}
      outcome="Recurring contributor across multiple international editions. Several spreads selected for year-in-review showcases and translated into 30+ languages."
      outcomeStats={[
        { value: "30+", label: "Languages" },
        { value: "12", label: "Features" },
        { value: "M+", label: "Young readers" },
        { value: "★", label: "Editors' picks" },
      ]}
      gallery={[
        { src: natgeo, alt: "Wildlife feature spread", span: "full" },
        { src: natgeo, alt: "Character detail", span: "half" },
        { src: zoo, alt: "Infographic", span: "half" },
      ]}
      next={{ to: "/work/gaming-product-design", label: "Gaming & Product", index: "02 / 05" }}
    />
  ),
});