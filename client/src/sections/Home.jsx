import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import MagneticButton from "../components/MagneticButton.jsx";
import DraggableOrb from "../components/DraggableOrb.jsx";

const Home = () => {
  const heroRef = useRef(null);
  const marqueeTrackRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      /*
      =========================================================
      REDUCED MOTION
      =========================================================
      */

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-meta",
            ".hero-index",
            ".hero-title-line",
            ".hero-description",
            ".hero-actions",
            ".hero-scroll",
            ".hero-orb",
            ".hero-marquee",
          ],
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
          },
        );

        if (marqueeTrackRef.current) {
          gsap.set(marqueeTrackRef.current, {
            xPercent: 0,
          });
        }
      });

      /*
      =========================================================
      NORMAL MOTION
      =========================================================
      */

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });

        intro
          .from(".hero-meta", {
            opacity: 0,
            y: 18,
            duration: 0.7,
          })
          .from(
            ".hero-index",
            {
              opacity: 0,
              y: 18,
              duration: 0.6,
            },
            "-=0.4",
          )
          .from(
            ".hero-title-line",
            {
              opacity: 0,
              y: 55,
              duration: 0.9,
              stagger: 0.12,
              ease: "power4.out",
            },
            "-=0.25",
          )
          .from(
            ".hero-description",
            {
              opacity: 0,
              y: 20,
              duration: 0.65,
            },
            "-=0.35",
          )
          .from(
            ".hero-actions",
            {
              opacity: 0,
              y: 18,
              duration: 0.55,
            },
            "-=0.3",
          )
          .from(
            ".hero-scroll",
            {
              opacity: 0,
              y: 15,
              duration: 0.5,
            },
            "-=0.25",
          )
          .from(
            ".hero-orb",
            {
              opacity: 0,
              scale: 0.65,
              duration: 0.75,
              ease: "back.out(1.7)",
            },
            "-=0.55",
          )
          .from(
            ".hero-marquee",
            {
              opacity: 0,
              y: 12,
              duration: 0.5,
            },
            "-=0.25",
          );

        /*
        =======================================================
        INFINITE MARQUEE
        =======================================================
        */

        const marquee = marqueeTrackRef.current;

        if (!marquee) return;

        const marqueeTween = gsap.to(marquee, {
          xPercent: -50,
          duration: 28,
          repeat: -1,
          ease: "none",
        });

        const handleEnter = () => {
          gsap.to(marqueeTween, {
            timeScale: 0.25,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(marqueeTween, {
            timeScale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        marquee.addEventListener("mouseenter", handleEnter);
        marquee.addEventListener("mouseleave", handleLeave);

        return () => {
          marquee.removeEventListener("mouseenter", handleEnter);
          marquee.removeEventListener("mouseleave", handleLeave);
          marqueeTween.kill();
        };
      });

      return () => {
        mm.revert();
      };
    },
    {
      scope: heroRef,
    },
  );

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const marqueeItems = [
    "Language",
    "Literature",
    "Humanities",
    "Spoken English",
    "Communication",
    "Learning",
  ];

  return (
    <main
      ref={heroRef}
      id="home"
      className="
        relative
        isolate
        min-h-[100svh]
        overflow-x-clip
        bg-white
        text-ink
      "
    >
      {/* =====================================================
          EDITORIAL GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-[8%]
          z-0
          w-px
          bg-black/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-[8%]
          z-0
          w-px
          bg-black/10
        "
      />

      {/* =====================================================
          TOP META
      ===================================================== */}

      <div
        className="
          hero-meta
          absolute
          left-[10%]
          right-[10%]
          top-24
          z-20
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-maroon" />

          <span
            className="
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-gray
            "
          >
            English
          </span>

          <span className="text-black/20">•</span>

          <span
            className="
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-gray
            "
          >
            Literature
          </span>

          <span className="text-black/20">•</span>

          <span
            className="
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-gray
            "
          >
            Humanities
          </span>
        </div>

        <span
          className="
            hidden
            font-mono
            text-[10px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-gray
            sm:block
          "
        >
          Teacher Portfolio / 2026
        </span>
      </div>

      {/* =====================================================
          HERO CONTENT
          
          Extra bottom padding reserves space for marquee.
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          max-w-[1800px]
          flex-col
          px-6
          pb-32
          pt-32
          sm:px-10
          md:px-[10%]
          md:pb-36
          lg:pt-36
        "
      >
        {/* ===================================================
            INDEX
        =================================================== */}

        <div
          className="
            hero-index
            mb-8
            flex
            items-center
            gap-5
            md:mb-10
          "
        >
          <span className="font-mono text-xs font-bold text-maroon">
            01
          </span>

          <span className="h-px w-20 bg-maroon/60 md:w-24" />

          <span
            className="
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-gray
            "
          >
            Introduction
          </span>
        </div>

        {/* ===================================================
            MAIN TYPOGRAPHY
        =================================================== */}

        <div className="hero-title relative">
          {/* ENGLISH */}

          <div className="hero-title-line overflow-visible">
            <h1
              className="
                whitespace-nowrap
                font-serif
                text-[clamp(4.2rem,14vw,15rem)]
                font-black
                leading-[0.78]
                tracking-[-0.075em]
                text-ink
              "
            >
              English
            </h1>
          </div>

          {/* EDUCATOR */}

          <div
            className="
              hero-title-line
              mt-1
              overflow-visible
              pl-[7%]
              md:pl-[12%]
            "
          >
            <h2
              className="
                whitespace-nowrap
                font-sans
                text-[clamp(3.5rem,12vw,13rem)]
                font-black
                leading-[0.78]
                tracking-[-0.075em]
                text-transparent
                [-webkit-text-stroke:1.5px_#151515]
              "
            >
              EDUCATOR
            </h2>
          </div>
        </div>

        {/* ===================================================
            LOWER CONTENT
        =================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            items-end
            gap-8
            md:mt-12
            md:grid-cols-12
            lg:mt-14
          "
        >
          <div className="md:col-span-7 md:col-start-6">
            <div
              className="
                hero-description
                border-l
                border-maroon
                pl-5
                md:pl-7
              "
            >
              <p
                className="
                  max-w-2xl
                  font-sans
                  text-sm
                  leading-6
                  text-gray-dark
                  md:text-base
                  md:leading-7
                  lg:text-lg
                  lg:leading-8
                "
              >
                Exploring language, literature and the human experience
                through thoughtful teaching, meaningful conversation and a
                lifelong curiosity for learning.
              </p>
            </div>

            <div className="hero-actions mt-6 md:mt-7">
              <MagneticButton onClick={() => handleScroll("contact")}>
                Start a conversation
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* ===================================================
            DRAGGABLE ORB
        =================================================== */}

        <DraggableOrb
          className="
            bg-maroon
            shadow-[0_25px_60px_rgba(77,0,0,0.18)]
            hover:shadow-[0_30px_70px_rgba(77,0,0,0.28)]
          "
          size="clamp(5rem, 7vw, 7rem)"
        />

        {/* ===================================================
            SCROLL INDICATOR
        =================================================== */}

        <div
          className="
            hero-scroll
            absolute
            bottom-24
            right-[10%]
            hidden
            items-center
            gap-4
            md:flex
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-gray
            "
          >
            Scroll to explore
          </span>

          <span className="h-12 w-px bg-maroon" />
        </div>
      </div>

      {/* =====================================================
          INFINITE MARQUEE

          It has its own overflow container, so the page itself
          does not need overflow-hidden.
      ===================================================== */}

      <div
        className="
          hero-marquee
          absolute
          bottom-0
          left-0
          right-0
          z-40
          overflow-hidden
          border-t
          border-black/10
          bg-white
        "
      >
        <div
          ref={marqueeTrackRef}
          className="
            flex
            w-max
            will-change-transform
          "
        >
          {/* FIRST SET */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-10
              py-3.5
              pr-10
              md:py-4
            "
          >
            {marqueeItems.map((item, index) => (
              <div
                key={`first-${item}-${index}`}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-10
                "
              >
                <span
                  className="
                    whitespace-nowrap
                    font-serif
                    text-base
                    font-bold
                    tracking-[-0.02em]
                    text-ink
                    md:text-xl
                  "
                >
                  {item}
                </span>

                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-maroon
                  "
                />
              </div>
            ))}
          </div>

          {/* SECOND SET */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-10
              py-3.5
              pr-10
              md:py-4
            "
          >
            {marqueeItems.map((item, index) => (
              <div
                key={`second-${item}-${index}`}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-10
                "
              >
                <span
                  className="
                    whitespace-nowrap
                    font-serif
                    text-base
                    font-bold
                    tracking-[-0.02em]
                    text-ink
                    md:text-xl
                  "
                >
                  {item}
                </span>

                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-maroon
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;