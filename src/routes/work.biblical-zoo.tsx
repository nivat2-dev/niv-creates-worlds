import { createFileRoute } from "@tanstack/react-router";
import CaseStudy from "@/components/CaseStudy";
import zoo from "@/assets/zoo.jpg";
import natgeo from "@/assets/natgeo.jpg";

export const Route = createFileRoute("/work/biblical-zoo")({
  head: () => ({
    meta: [
      { title: "Biblical Zoo Treasure Map · Niv Haviv" },
      { name: "description", content: "An illustrated treasure map and family activity for the Jerusalem Biblical Zoo." },
      { property: "og:image", content: zoo },
    ],
  }),
  component: () => (
    <CaseStudy
      index="03"
      slug="biblical-zoo"
      eyebrow="Illustration & Wayfinding"
      title="Treasure"
      italic="Map"
      year="2023"
      client="Jerusalem Biblical Zoo"
      role="Illustrator · Designer"
      disciplines={["Illustration", "Wayfinding", "Family Experience", "Print"]}
      hero={{ src: zoo, alt: "Illustrated zoo treasure map" }}
      tagline="An illustrated map that turns a day at the zoo into a story-driven adventure."
      overview="A printed treasure map handed out at the entrance — part wayfinding, part character cast, part scavenger hunt. Kids collect stamps as they discover the animals; the map becomes the souvenir."
      roleDetail="Concept, characters, illustrated map, on-site signage tie-ins, and the printed booklet — from kickoff to press."
      challenge="Turn a static park map into a story families want to keep — without losing legibility for parents trying to find the bathroom."
      process={[
        { step: "01", title: "Cast", body: "Each habitat got its own animal character — friendly, distinct, with a tiny narrative role." },
        { step: "02", title: "Map", body: "Hand-drawn aerial view, calibrated against the real park layout so paths still work as navigation." },
        { step: "03", title: "Quest", body: "Stamp stations and a simple story arc: collect them all to 'unlock' the final character." },
        { step: "04", title: "Print", body: "Folded, durable, A3 — designed to survive sticky hands and summer heat." },
      ]}
      outcome="A beloved family keepsake adopted as the zoo's hero family-experience artifact for the season."
      outcomeStats={[
        { value: "20+", label: "Characters" },
        { value: "8", label: "Stamp stations" },
        { value: "A3", label: "Folded map" },
        { value: "★★", label: "Family favorite" },
      ]}
      gallery={[
        { src: zoo, alt: "Full treasure map", span: "full" },
        { src: zoo, alt: "Character detail", span: "half" },
        { src: natgeo, alt: "Stamp & quest spread", span: "half" },
      ]}
      next={{ to: "/work/asaflezet", label: "Asaflezet", index: "04 / 05" }}
    />
  ),
});