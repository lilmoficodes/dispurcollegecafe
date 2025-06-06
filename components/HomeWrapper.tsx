"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef} from "react";
import Footer from "./Footer";
import HeroContent from "./HeroContent";
import NavBar from "./NavBar";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const wordRefs = useRef<HTMLDivElement[]>([]);
  useGSAP(() => {
    gsap.from(wordRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.7,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);
  return (
    <>
     <NavBar/>
      <main className="relative bg-cafe-dark min-h-dvh flex flex-col items-center justify-center font-brew
      text-center text-white px-1 md:px-4 overflow-hidden">
        {/* Animated text */}
        <div className="text-5xl font-bold  text-cafe-cream z-10 collider-target flex flex-col gap-2 mt-20">
          {["Welcome", "to", "Beanzy Cafe"].map((item, index) => (
            <div
              key={index}
              ref={
                (el) => { if (el) wordRefs.current[index] = el! }
              }
              className="overflow-hidden"
            >
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xl text-cafe-cream/70 max-w-md z-10 collider-target">
          Where Aroma Meets Ambience.
        </p>

      <div className="mt-6 flex gap-4 z-10">
  <button className="bg-cafe-cream text-cafe-dark md:text-lg text-sm px-4 py-4 md:px-6 md:py-2 rounded-lg 
    shadow hover:scale-105 transition collider-target">
    Explore Our Products
  </button>

</div>
        <div>
          <p className="text-3xl md:text-4xl text-center mt-5 font-cookie-regular
           text-cafe-tan">
            Beanzy isn’t just coffee — it’s a mood.
            We roast with fire, pour with flair, and serve with soul.
            For rebels, dreamers, and caffeine chasers.
            Come for the brew, stay for the bold vibe
          </p>
        </div>
        <HeroContent />
      </main>
      <Footer />
    </>
  );
}
