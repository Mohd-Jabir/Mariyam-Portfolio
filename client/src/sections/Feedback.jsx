
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useFeedback } from "../hooks/useFeedback.js";
import FeedbackCard from "../components/FeedbackCard.jsx";
import FeedbackForm from "../components/FeedbackForm.jsx";

gsap.registerPlugin(ScrollTrigger);

const Feedback = () => {
  const [showForm, setShowForm] = useState(false);
  const sectionRef = useRef(null);

  const {
    feedback = [],
    isLoading,
    isError,
  } = useFeedback();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".feedback-intro", {
          opacity: 1,
          y: 0,
        });

        gsap.set(".feedback-card", {
          opacity: 1,
          y: 0,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".feedback-intro", {
          opacity: 0,
          y: 50,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        gsap.from(".feedback-card", {
          opacity: 0,
          y: 100,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".feedback-stage",
            start: "top 80%",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="feedback"
      className="relative overflow-hidden bg-off-white px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* HEADER */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="feedback-intro md:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-maroon" />

              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-maroon">
                04 — Feedback
              </span>
            </div>

            <p className="mt-8 max-w-[220px] font-sans text-sm leading-6 text-gray">
              Real words from learners and visitors who have experienced the
              teaching journey.
            </p>
          </div>

          <div className="md:col-span-9">
            <h2 className="feedback-intro font-serif text-[clamp(3.8rem,8vw,9rem)] font-black leading-[0.82] tracking-[-0.07em] text-ink">
              What&apos;s
              <br />
              <span className="font-sans">being said.</span>
            </h2>

            <div className="feedback-intro mt-10 flex flex-col gap-6 md:ml-[12%] md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl font-sans text-base leading-7 text-gray-dark md:text-lg md:leading-8">
                Every learner brings a different story. These reflections are
                a small collection of those experiences.
              </p>

              <button
                type="button"
                onClick={() => setShowForm((current) => !current)}
                aria-expanded={showForm}
                aria-controls="feedback-form"
                className="group flex w-fit shrink-0 items-center gap-4 border-b-2 border-ink pb-3 font-sans text-sm font-bold uppercase tracking-[0.1em] text-ink transition-colors duration-300 hover:border-maroon hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-4"
              >
                <span>
                  {showForm ? "Close form" : "Share your experience"}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white transition-all duration-300 group-hover:bg-maroon">
                  {showForm ? "×" : "↗"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div
          id="feedback-form"
          className={`grid transition-[grid-template-rows,opacity,margin] duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
            showForm
              ? "mt-16 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <FeedbackForm onClose={() => setShowForm(false)} />
          </div>
        </div>

        {/* CARD STAGE */}
        <div className="feedback-stage relative mt-24 md:mt-32">
          {isLoading && (
            <div className="flex min-h-[500px] items-center justify-center">
              <div className="text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                  Loading voices
                </span>

                <div className="mx-auto mt-5 h-px w-16 overflow-hidden bg-black/10">
                  <div className="h-full w-1/2 animate-pulse bg-maroon" />
                </div>
              </div>
            </div>
          )}

          {isError && (
            <div className="flex min-h-[400px] items-center justify-center border-y border-black/10">
              <div className="text-center">
                <p className="font-serif text-3xl font-black text-ink">
                  Something went wrong.
                </p>

                <p className="mt-3 font-sans text-sm text-gray">
                  We couldn&apos;t load the feedback right now.
                </p>
              </div>
            </div>
          )}

          {!isLoading && !isError && feedback.length === 0 && (
            <div className="relative mx-auto flex min-h-[500px] max-w-3xl items-center justify-center">
              <div className="absolute h-[360px] w-[270px] rotate-[-6deg] rounded-[2rem] border border-black/10 bg-white" />

              <div className="absolute h-[360px] w-[270px] rotate-[5deg] rounded-[2rem] border border-black/10 bg-white" />

              <div className="relative flex h-[380px] w-[280px] rotate-[-1deg] flex-col justify-between rounded-[2rem] border border-black/15 bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                  Your voice
                </span>

                <div>
                  <span className="font-serif text-7xl leading-none text-maroon/20">
                    “
                  </span>

                  <p className="mt-2 font-serif text-2xl font-medium leading-tight tracking-[-0.03em] text-ink">
                    Be the first to share your experience.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="border-b border-ink pb-2 text-left font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink hover:border-maroon hover:text-maroon"
                >
                  Leave feedback ↗
                </button>
              </div>
            </div>
          )}

          {!isLoading && !isError && feedback.length > 0 && (
            <div className="feedback-collage">
              {feedback.slice(0, 7).map((item, index) => (
                <FeedbackCard
                  key={item._id}
                  feedback={item}
                  index={index}
                  total={Math.min(feedback.length, 7)}
                />
              ))}
            </div>
          )}
        </div>

        
      </div>

      {/* CARD COLLAGE */}
      <style>{`
.feedback-stage {
  isolation: isolate;
}

.feedback-collage {
  position: relative;
  width: 100%;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
}

/* --------------------------------
   BASE CARD POSITIONS
-------------------------------- */

.feedback-card:nth-child(1) {
  --card-x: -390px;
  --card-y: 0px;
  --card-r: -12deg;

  transform:
    translateX(var(--card-x))
    translateY(var(--card-y))
    rotate(var(--card-r));

  z-index: 1;
}

.feedback-card:nth-child(2) {
  --card-x: -255px;
  --card-y: 25px;
  --card-r: -7deg;

  transform:
    translateX(var(--card-x))
    translateY(var(--card-y))
    rotate(var(--card-r));

  z-index: 2;
}

.feedback-card:nth-child(3) {
  --card-x: -125px;
  --card-y: -15px;
  --card-r: -3deg;

  transform:
    translateX(var(--card-x))
    translateY(var(--card-y))
    rotate(var(--card-r));

  z-index: 3;
}

.feedback-card:nth-child(4) {
  --card-x: 0px;
  --card-y: -30px;
  --card-r: 0deg;

  transform:
    translateX(var(--card-x))
    translateY(var(--card-y))
    rotate(var(--card-r));

  z-index: 6;
}

.feedback-card:nth-child(5) {
  --card-x: 125px;
  --card-y: -5px;
  --card-r: 4deg;

  transform:
    translateX(var(--card-x))
    translateY(var(--card-y))
    rotate(var(--card-r));

  z-index: 4;
}

.feedback-card:nth-child(6) {
  --card-x: 255px;
  --card-y: 28px;
  --card-r: 8deg;

  transform:
    translateX(var(--card-x))
    translateY(var(--card-y))
    rotate(var(--card-r));

  z-index: 3;
}

.feedback-card:nth-child(7) {
  --card-x: 390px;
  --card-y: 0px;
  --card-r: 12deg;

  transform:
    translateX(var(--card-x))
    translateY(var(--card-y))
    rotate(var(--card-r));

  z-index: 2;
}

/* --------------------------------
   HOVER

   KEEP ORIGINAL POSITION + ROTATION

   Only:
   - move slightly upward
   - scale slightly
   - bring above other cards
-------------------------------- */

.feedback-card:hover {
  z-index: 100 !important;

  transform:
    translateX(var(--card-x))
    translateY(calc(var(--card-y) - 35px))
    rotate(var(--card-r))
    scale(1.04) !important;

  box-shadow:
    0 35px 80px rgba(0, 0, 0, 0.18);

  transition:
    transform 700ms cubic-bezier(.16, 1, .3, 1),
    box-shadow 500ms ease;
}

/* --------------------------------
   TABLET
-------------------------------- */

@media (max-width: 1100px) {
  .feedback-collage {
    height: 570px;
  }

  .feedback-card:nth-child(1) {
    --card-x: -300px;
    --card-y: 0px;
    --card-r: -10deg;
  }

  .feedback-card:nth-child(2) {
    --card-x: -200px;
    --card-y: 25px;
    --card-r: -6deg;
  }

  .feedback-card:nth-child(3) {
    --card-x: -100px;
    --card-y: 0px;
    --card-r: -3deg;
  }

  .feedback-card:nth-child(4) {
    --card-x: 0px;
    --card-y: -30px;
    --card-r: 0deg;
  }

  .feedback-card:nth-child(5) {
    --card-x: 100px;
    --card-y: 0px;
    --card-r: 3deg;
  }

  .feedback-card:nth-child(6) {
    --card-x: 200px;
    --card-y: 25px;
    --card-r: 6deg;
  }

  .feedback-card:nth-child(7) {
    --card-x: 300px;
    --card-y: 0px;
    --card-r: 10deg;
  }

  .feedback-card:hover {
    transform:
      translateX(var(--card-x))
      translateY(calc(var(--card-y) - 30px))
      rotate(var(--card-r))
      scale(1.035) !important;
  }
}

/* --------------------------------
   MOBILE

   Mobile becomes a vertical stack.
-------------------------------- */

@media (max-width: 767px) {
  .feedback-collage {
    height: auto;
    min-height: 560px;
    display: block;
    padding: 20px 25px 70px;
  }

  .feedback-card {
    position: relative !important;
    left: auto !important;
    top: auto !important;
    margin: -100px auto 0;
  }

  .feedback-card:first-child {
    margin-top: 0;

    --card-x: 0px;
    --card-y: 0px;
    --card-r: -4deg;

    transform:
      translateX(var(--card-x))
      translateY(var(--card-y))
      rotate(var(--card-r));
  }

  .feedback-card:nth-child(2) {
    --card-x: 0px;
    --card-y: -25px;
    --card-r: 3deg;

    transform:
      translateX(var(--card-x))
      translateY(var(--card-y))
      rotate(var(--card-r));
  }

  .feedback-card:nth-child(3) {
    --card-x: 0px;
    --card-y: -50px;
    --card-r: -2deg;

    transform:
      translateX(var(--card-x))
      translateY(var(--card-y))
      rotate(var(--card-r));
  }

  .feedback-card:nth-child(4) {
    --card-x: 0px;
    --card-y: -75px;
    --card-r: 2deg;

    transform:
      translateX(var(--card-x))
      translateY(var(--card-y))
      rotate(var(--card-r));
  }

  .feedback-card:nth-child(n + 5) {
    display: none;
  }

  .feedback-card:hover {
    z-index: 100 !important;

    transform:
      translateX(var(--card-x))
      translateY(calc(var(--card-y) - 20px))
      rotate(var(--card-r))
      scale(1.015) !important;
  }
}

/* --------------------------------
   REDUCED MOTION
-------------------------------- */

@media (prefers-reduced-motion: reduce) {
  .feedback-card {
    transition: none !important;
  }

  .feedback-card:hover {
    transform:
      translateX(var(--card-x))
      translateY(var(--card-y))
      rotate(var(--card-r)) !important;
  }
}

      `}</style>
    </section>
  );
};

export default Feedback;

