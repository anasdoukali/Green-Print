import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PHASES = ["LOADING MODULES", "COMPILING PROMPTS", "CALIBRATING SYSTEM", "LAUNCHING"];

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 1500;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setPct(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const phase = PHASES[Math.min(Math.floor((pct / 100) * PHASES.length), PHASES.length - 1)];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="w-64">
        <div className="mb-3 flex items-baseline justify-between font-mono text-[11px] tracking-[0.2em] text-mint">
          <span>{phase}</span>
          <span>{pct}%</span>
        </div>
        <div className="h-px w-full bg-line">
          <div className="h-px bg-mint transition-[width] duration-75" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-6 text-center font-mono text-[10px] tracking-[0.35em] text-fog">
          GREEN PRINT © 2026
        </div>
      </div>
    </motion.div>
  );
}
