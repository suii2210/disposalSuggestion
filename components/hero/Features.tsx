// import {
//   BellIcon,
//   CalendarIcon,
//   FileTextIcon,
//   GlobeIcon,
//   InputIcon,
// } from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: "FileTextIcon",
    name: "Real-Time Waste Recognition",
    description: "Instant Detection: Simply point your camera at any waste item, and our AI-powered model quickly identifies its type (plastic, paper, glass, organic, etc.).",
    href: "/",
    cta: "",
    background: <img className="absolute   opacity-80" src="./Assets/grid1.2.webp" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: "InputIcon",
    name: " Smart Disposal Suggestions",
    description: "Once waste is identified, our scanner provides detailed instructions on how to dispose of or recycle it correctly.",
    href: "/",
    cta: "",
    background: <img className="absolute  opacity-80" src="./Assets/grid2.2.jpg" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: "GlobeIcon",
    name: " Nearby Recycling Center Locator",
    description: "Our solution doesn't just stop at identification; it guides you to the nearest recycling centers or bins.",
    href: "/",
    cta: "",
    background: <img className="absolute  opacity-80" src="./Assets/grid3.jpg" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: "CalendarIcon",
    name: "Sustainability Insights",
    description: "Waste Tracking: Monitor how much waste you’ve correctly disposed of or recycled through the app.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute  opacity-80" src="./Assets/grid4.png" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: "BellIcon",
    name: "User Feedback and Continuous Improvement",
    description:
      "We believe in constantly improving the scanner through user interaction and feedback.",
    href: "/",
    cta: "",
    background: <img className="absolute opacity-80" src="./Assets/grid5.jpg" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
export {BentoCard, BentoGrid};
export default BentoDemo;