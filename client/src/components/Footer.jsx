import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".footer-reveal", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".editorial-footer",
          start: "top 85%",
        },
      });

      gsap.to(".footer-marquee-track", {
        xPercent: -20,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    });

    return () => mm.revert();
  });

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="editorial-footer overflow-hidden bg-black text-white">
      {/* =====================================================
          TOP MARQUEE
      ====================================================== */}

      <div className="border-y border-white/10 overflow-hidden">
        <div className="footer-marquee-track flex min-w-max items-center py-4">
          {[
            "English",
            "Literature",
            "Humanities",
            "Spoken English",
            "Communication",
            "Learning",
            "English",
            "Literature",
            "Humanities",
            "Spoken English",
            "Communication",
            "Learning",
          ].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="px-7 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 md:px-10">
                {item}
              </span>

              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-maroon"
              />
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1600px]">
        {/* Editorial vertical lines */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-[6%] w-px bg-white/[0.07]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[6%] w-px bg-white/[0.07]"
        />

        {/* =================================================
            TOP CONTENT
        ================================================== */}

        <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-12">
          {/* BRAND / STATEMENT */}

          <div className="footer-reveal relative flex flex-col justify-between border-b border-white/10 px-8 py-14 md:col-span-7 md:border-b-0 md:border-r md:px-12 md:py-16 lg:px-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-maroon" />

                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Teacher Portfolio
                </span>
              </div>

              <p className="mt-12 max-w-xl font-serif text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
                Helping learners build
                <span className="text-white/35"> confidence through </span>
                language, literature and thoughtful learning.
              </p>
            </div>

            {/* Email */}

            <div className="mt-16">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                Start a conversation
              </p>

              <a
                href="mailto:khanneha93904@gmail.com"
                className="group mt-3 inline-flex items-center gap-3 border-b border-white/20 pb-2 font-serif text-xl tracking-[-0.02em] text-white transition-colors duration-300 hover:border-maroon hover:text-maroon md:text-2xl"
              >
                khanneha93904@gmail.com
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* NAVIGATION */}

          <div className="footer-reveal relative px-8 py-14 md:col-span-2 md:px-7 md:py-16">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-maroon">
              Explore
            </p>

            <nav className="mt-10 flex flex-col gap-5">
              <button
                onClick={() => handleScroll("home")}
                className="group flex items-center gap-3 text-left"
              >
                <span className="font-mono text-[9px] text-white/25">01</span>

                <span className="font-sans text-sm font-medium text-white/65 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                  Home
                </span>
              </button>

              <button
                onClick={() => handleScroll("feedback")}
                className="group flex items-center gap-3 text-left"
              >
                <span className="font-mono text-[9px] text-white/25">02</span>

                <span className="font-sans text-sm font-medium text-white/65 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                  Feedback
                </span>
              </button>

              <button
                onClick={() => handleScroll("contact")}
                className="group flex items-center gap-3 text-left"
              >
                <span className="font-mono text-[9px] text-white/25">03</span>

                <span className="font-sans text-sm font-medium text-white/65 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                  Contact
                </span>
              </button>
            </nav>
          </div>

          {/* CONNECT */}

          <div className="footer-reveal border-t border-white/10 px-8 py-14 md:col-span-3 md:border-t-0 md:px-10 md:py-16">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-maroon">
              Connect
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="https://www.linkedin.com/in/mariyam-khatoon-76a462251/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span className="font-sans text-sm text-white/65 transition-colors group-hover:text-white">
                  LinkedIn
                </span>

                <span className="font-mono text-xs text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-maroon">
                  ↗
                </span>
              </a>

              <a
                href="https://www.instagram.com/mkwrites98"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span className="font-sans text-sm text-white/65 transition-colors group-hover:text-white">
                  Instagram
                </span>

                <span className="font-mono text-xs text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-maroon">
                  ↗
                </span>
              </a>

              <a
                href="mailto:khanneha93904@gmail.com"
                className="group flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span className="font-sans text-sm text-white/65 transition-colors group-hover:text-white">
                  Email
                </span>

                <span className="font-mono text-xs text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-maroon">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            GIANT BRAND
        ================================================== */}

        <div className="relative overflow-hidden border-t border-white/10 px-6 pb-6 pt-10 md:px-12">
          {/* Small badge */}

          <div className="footer-reveal absolute left-8 top-8 z-10 md:left-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white/70">
              English Educator
              <span className="h-1.5 w-1.5 rounded-full bg-maroon" />
            </span>
          </div>

          {/* Giant wordmark */}

          <button
            onClick={() => handleScroll("home")}
            aria-label="Back to top"
            className="group block w-full text-left"
          >
            <div className="overflow-hidden">
              <span
                className="
        footer-brand
        block
        whitespace-nowrap
        font-serif
        text-[clamp(4.5rem,13vw,12rem)]
        font-black
        leading-[0.72]
        tracking-[-0.065em]
        text-white
        transition-transform
        duration-700
        group-hover:translate-x-2
      "
              >
                MARIYAM
              </span>
            </div>

            <div className="overflow-hidden text-right">
              <span
                className="
        footer-brand
        block
        whitespace-nowrap
        font-sans
        text-[clamp(4.2rem,12vw,11rem)]
        font-black
        leading-[0.76]
        tracking-[-0.075em]
        text-maroon
        transition-transform
        duration-700
        group-hover:-translate-x-2
      "
              >
                KHATOON
              </span>
            </div>
          </button>
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================== */}

        <div className="mx-8 border-t border-white/10 py-7 md:mx-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
              © {currentYear} Mariyam Khatoon — All rights reserved.
            </p>

            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
              Designed & developed by{" "}
              <a
                href="https://github.com/Mohd-Jabir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-maroon"
              >
                Mohd-Jabir
              </a>
            </p>

            <button
              onClick={() => handleScroll("home")}
              className="group flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/45 transition-colors hover:text-white"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-maroon group-hover:bg-maroon">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
