import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      autoRaf: false,
    });

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    const handleScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleScroll);

    // Let Lenis control the frame timing.
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", handleScroll);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
