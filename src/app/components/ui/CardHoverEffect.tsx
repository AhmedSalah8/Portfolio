import { skills } from "../../../../data";
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-xl mx-auto px-8">
      <HoverEffect items={skills} />
    </div>
  );
}
