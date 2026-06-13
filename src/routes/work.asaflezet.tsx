import { createFileRoute } from "@tanstack/react-router";
import CaseStudy from "@/components/CaseStudy";
import asaflezet from "@/assets/asaflezet.jpg";

export const Route = createFileRoute("/work/asaflezet")({
  head: () => ({
    meta: [
      { title: "Asaflezet — Brand World · Niv Haviv" },
      { name: "description", content: "A complete brand identity and visual world for Asaflezet." },
      { property: "og:image", content: asaflezet },
    ],
  }),
  component: () => (
    <CaseStudy
      index="04"
      slug="asaflezet"
      eyebrow="Brand World"
      title="Asaf"
      italic="lezet"
      year="2024"
      client="Asaflezet"
      role="Brand & Visual Designer"
      disciplines={["Brand", "Identity", "Art Direction", "Packaging"]}
      hero={{ src: asaflezet, alt: "Asaflezet brand still life" }}
      tagline="A complete brand world — identity, voice, packaging and photography — built around one quiet idea."
      overview="Asaflezet needed more than a logo. The project built a full sensory identity — typography, palette, photography direction and packaging — that feels like a single, coherent place rather than a collection of assets."
      roleDetail="Strategy, naming refinement, custom wordmark, full identity system, photography art direction, packaging design and rollout guidelines."
      challenge="Build a brand that feels handmade and warm at human scale, but holds together across every shelf, screen and printed label."
      process={[
        { step: "01", title: "Tone", body: "Long conversations to find the single sentence the brand believes in. Everything else followed from that." },
        { step: "02", title: "Mark", body: "A hand-drawn wordmark refined into a precise vector — confident, soft, distinctly its own." },
        { step: "03", title: "World", body: "Cream paper, warm earth accent, deep ink. Photography lit by daylight, never by a studio." },
        { step: "04", title: "System", body: "Templates, packaging dielines and a short, generous brand book so the team can keep building it without me in the room." },
      ]}
      outcome="A brand that the founders use daily without second-guessing — and that customers recognize before they read the name."
      outcomeStats={[
        { value: "1", label: "Wordmark" },
        { value: "12", label: "Touchpoints" },
        { value: "A5", label: "Brand book" },
        { value: "★", label: "Founder-loved" },
      ]}
      gallery={[
        { src: asaflezet, alt: "Brand still life", span: "full" },
        { src: asaflezet, alt: "Packaging detail", span: "half" },
        { src: asaflezet, alt: "Typography study", span: "half" },
      ]}
      next={{ to: "/work/new-direction", label: "New Direction", index: "00 / 05" }}
    />
  ),
});