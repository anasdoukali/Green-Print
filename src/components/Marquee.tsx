import { Asterisk } from "lucide-react";

const WORDS = [
  "AI TOOLS",
  "100 PRODUCT IDEAS",
  "PRODUCT CREATION",
  "SHORT-FORM CONTENT",
  "90 REEL IDEAS",
  "100 VIDEO HOOKS",
  "IDEA → LAUNCH → SCALE",
];

export default function Marquee({ dark = false, reverse = false }: { dark?: boolean; reverse?: boolean }) {
  const row = (
    <>
      {WORDS.map((w) => (
        <span key={w} className="flex shrink-0 items-center gap-6">
          <Asterisk className={`h-5 w-5 ${dark ? "text-paper" : "text-ink"}`} strokeWidth={2.5} />
          <span className={`font-sans text-lg font-bold tracking-tight ${dark ? "text-paper" : "text-ink"}`}>{w}</span>
        </span>
      ))}
    </>
  );

  return (
    <div
      className={`relative z-10 -ml-[2vw] w-[104vw] overflow-hidden border-y py-3.5 ${
        dark ? "border-paper/20 bg-ink" : "border-ink/20 bg-mint"
      } ${reverse ? "rotate-[1.2deg]" : "-rotate-[1.2deg]"}`}
    >
      <div className={`flex w-max gap-6 pr-6 ${reverse ? "animate-marquee-fast" : "animate-marquee"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
