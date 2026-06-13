import { createFileRoute } from "@tanstack/react-router";
import CaseStudy from "@/components/CaseStudy";
import superplay from "@/assets/superplay.jpg";

export const Route = createFileRoute("/work/gaming-product-design")({
  head: () => ({
    meta: [
      { title: "Gaming & Product Design — SuperPlay · Niv Haviv" },
      { name: "description", content: "Product and UI design for a fast-moving mobile gaming studio." },
      { property: "og:image", content: superplay },
    ],
  }),
  component: () => (
    <CaseStudy
      index="02"
      eyebrow="Product & UI"
      title="Gaming &"
      italic="Product"
      year="2021 — 2024"
      client="SuperPlay & in-house gaming teams"
      role="Product / UI Designer"
      disciplines={["Product", "UI", "Game UX", "Visual System"]}
      hero={{ src: superplay, alt: "Mobile game UI" }}
      tagline="In-app economies, interfaces and visual systems for mobile games played by millions."
      overview="Across several titles I designed game shells, store flows, daily reward systems, progression UI and the visual language that ties them together — always tuned for the small screen and the short attention span."
      roleDetail="Hands-on product designer embedded with game teams: research → flows → high-fidelity UI → animation specs → handoff. Shipped to live audiences with weekly release cycles."
      challenge="Make a tap feel like a reward. Build interfaces that survive a 30-second moment in a noisy app store."
      process={[
        { step: "01", title: "Game feel", body: "Start from the moment the player taps. Define the micro-interaction before the screen." },
        { step: "02", title: "Flows", body: "Map every economy loop: earn → spend → return. Find the friction, remove it, then re-introduce just enough." },
        { step: "03", title: "UI craft", body: "Tactile components, generous typography, restrained color — premium feel inside an aggressive market." },
        { step: "04", title: "Ship & learn", body: "Live A/B testing, weekly iteration, kill features that don't earn their place on screen." },
      ]}
      outcome="Significant lift in conversion and retention across redesigned flows; design systems adopted across multiple titles."
      outcomeStats={[
        { value: "+18%", label: "Conversion" },
        { value: "+24%", label: "D7 retention" },
        { value: "4", label: "Titles shipped" },
        { value: "1", label: "Shared system" },
      ]}
      gallery={[
        { src: superplay, alt: "Store flow", span: "full" },
        { src: superplay, alt: "Daily rewards", span: "half" },
        { src: superplay, alt: "Progression", span: "half" },
      ]}
      next={{ to: "/work/biblical-zoo", label: "Biblical Zoo Treasure Map", index: "03 / 05" }}
    />
  ),
});