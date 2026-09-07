import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Problem from "./components/Problem";
import Chapters from "./components/Chapters";
import Framework from "./components/Framework";
import Stats from "./components/Stats";
import Challenge from "./components/Challenge";
import { ContentSystem, ToolsStrip } from "./components/ContentSystem";
import Audience from "./components/Audience";
import Transformation from "./components/Transformation";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import { ContactSection } from "./components/ContactForm";
import { FinalCta, Footer } from "./components/Footer";
import Policy from "./components/Policy";

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

const POLICY_ROUTES = ["privacy", "legal", "refunds"];

function readRoute() {
  const h = window.location.hash;
  if (h.startsWith("#/")) {
    const key = h.slice(2).replace(/\/+$/, "");
    if (POLICY_ROUTES.includes(key)) return key;
  }
  return "home";
}

function useRoute() {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

function Landing() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="relative -my-5">
          <Marquee />
        </div>
        <Pricing />
        <Problem />
        <Framework />
        <Chapters />
        <Stats />
        <Challenge />
        <ContentSystem />
        <Audience />
        <ToolsStrip />
        <Transformation />
        <Faq />
        <ContactSection />
        <div className="relative -my-5">
          <Marquee dark reverse />
        </div>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const route = useRoute();

  useEffect(() => {
    if (!loaded) return;
    if (route !== "home") {
      window.scrollTo(0, 0);
      return;
    }
    const h = window.location.hash;
    if (h && !h.startsWith("#/") && h.length > 1) {
      const id = h.slice(1);
      const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [route, loaded]);

  return (
    <div className="min-h-screen bg-ink font-sans text-bone">
      {/* film grain */}
      <div
        className="pointer-events-none fixed inset-0 z-[90] opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE }}
      />

      <AnimatePresence>
        {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (route === "home" ? <Landing /> : <Policy kind={route} />)}
    </div>
  );
}
