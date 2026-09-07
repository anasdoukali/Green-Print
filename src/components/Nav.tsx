import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "System", href: "#framework" },
  { label: "Modules", href: "#inside" },
  { label: "Challenge", href: "#challenge" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-line bg-ink/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center bg-mint font-mono text-sm font-bold text-ink">GP</span>
            <span className="font-mono text-sm font-bold tracking-[0.18em] text-bone">
              GREEN<span className="text-mint">·</span>PRINT
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog transition-colors hover:text-mint"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="group hidden items-center gap-2 bg-mint px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-ink transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#14b673] sm:flex"
            >
              Get the Playbook — $49
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="grid h-9 w-9 place-items-center border border-line text-bone lg:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink/97 px-8 backdrop-blur-lg lg:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i }}
                className="border-b border-line py-5 font-sans text-4xl font-bold text-bone"
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-center gap-2 bg-mint px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-ink"
            >
              Get the Playbook — $49 <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
