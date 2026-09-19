
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".about-reveal", { opacity: 1, y: 0 });
        gsap.set(".about-line", { scaleX: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".about-reveal", {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        gsap.from(".about-line", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        gsap.from(".about-bg-word", {
          x: -80,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
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
      id="about"
      className="relative overflow-hidden bg-off-white px-6 py-28 md:px-10 md:py-40"
    >
      {/* Oversized background typography */}
      <div
        aria-hidden="true"
        className="about-bg-word pointer-events-none absolute -right-[8%] top-[7%] select-none font-sans text-[clamp(8rem,24vw,28rem)] font-black leading-none tracking-[-0.1em] text-black/[0.035]"
      >
        ABOUT
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* ─────────────────────────────
            Section Header
        ───────────────────────────── */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <div className="about-reveal flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-maroon" />

              <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-maroon">
                02 — About
              </p>
            </div>
          </div>

          <div className="md:col-span-9">
            <div className="about-reveal">
              <h2 className="max-w-6xl font-serif text-[clamp(3.5rem,8vw,8.5rem)] font-black leading-[0.86] tracking-[-0.065em] text-ink">
                Teaching
                <br />
                <span className="font-sans italic font-medium">
                  with purpose.
                </span>
              </h2>
            </div>

            <div className="about-reveal mt-10 flex max-w-3xl flex-col gap-6 md:ml-[12%] md:mt-14 md:flex-row md:items-start">
              <span className="hidden font-mono text-xs font-bold text-maroon md:block">
                01/04
              </span>

              <p className="max-w-2xl font-sans text-base leading-7 text-gray-dark md:text-lg md:leading-8">
                English is more than a subject. It is a way of understanding,
                expressing, questioning and connecting. My approach to teaching
                brings language, literature and communication together through
                practical learning and thoughtful conversation.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial divider */}
        <div className="about-line mt-20 h-px w-full bg-black/15 md:mt-28" />

        {/* ─────────────────────────────
            Introduction / Philosophy
        ───────────────────────────── */}

        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-28">
          <div className="about-reveal md:col-span-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
              The approach
            </p>

            <div className="mt-8 hidden h-28 w-px bg-maroon/40 md:block" />
          </div>

          <div className="about-reveal md:col-span-8">
            <p className="max-w-5xl font-serif text-[clamp(2rem,4vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.045em] text-ink">
              “Good teaching creates enough confidence for students to find
              their own voice.”
            </p>

            <div className="mt-10 max-w-2xl border-l-2 border-maroon pl-6">
              <p className="font-sans text-base leading-7 text-gray-dark md:text-lg md:leading-8">
                Lessons are designed to move beyond memorisation — encouraging
                students to speak, analyse, write and participate without fear
                of making mistakes.
              </p>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────
            Experience / Identity
        ───────────────────────────── */}

        <div className="about-line h-px w-full bg-black/15" />

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Main profile */}
          <div className="about-reveal border-b border-black/15 py-14 md:col-span-7 md:border-b-0 md:border-r md:py-20 md:pr-14">
            <div className="mb-12 flex items-start justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                02/04 — Profile
              </span>

              <span className="font-mono text-xs text-gray">
                EDUCATOR / MENTOR
              </span>
            </div>

            <h3 className="max-w-3xl font-sans text-[clamp(2.5rem,5vw,5.5rem)] font-black leading-[0.9] tracking-[-0.06em] text-ink">
              English educator
              <br />
              <span className="font-serif font-medium italic">
                & mentor.
              </span>
            </h3>

            <p className="mt-10 max-w-2xl font-sans text-base leading-7 text-gray-dark md:text-lg md:leading-8">
              With 3–5 years of teaching experience across Spoken English,
              English Literature and Humanities, I focus on creating learning
              environments where academic knowledge becomes practical,
              understandable and useful.
            </p>

            {/* Small stats */}
            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-black/10 pt-8 md:grid-cols-3">
              <div>
                <p className="font-serif text-4xl font-black tracking-[-0.05em] text-ink md:text-5xl">
                  3–5
                </p>

                <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-gray">
                  Years experience
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl font-black tracking-[-0.05em] text-ink md:text-5xl">
                  04+
                </p>

                <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-gray">
                  Core disciplines
                </p>
              </div>

              <div className="col-span-2 md:col-span-1">
                <p className="font-serif text-4xl font-black tracking-[-0.05em] text-ink md:text-5xl">
                  ∞
                </p>

                <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-gray">
                  Curiosity
                </p>
              </div>
            </div>
          </div>

          {/* Teaching areas */}
          <div className="about-reveal md:col-span-5 md:pl-14">
            <div className="py-14 md:py-20">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                03/04 — Teaching areas
              </span>

              <h3 className="mt-10 font-sans text-3xl font-black tracking-[-0.05em] text-ink md:text-4xl">
                What I teach
              </h3>

              <div className="mt-10">
                {[
                  {
                    number: "01",
                    title: "Spoken English",
                    description:
                      "Fluency, conversation, vocabulary and confident communication.",
                  },
                  {
                    number: "02",
                    title: "English Language",
                    description:
                      "Grammar, reading, comprehension, writing and functional English.",
                  },
                  {
                    number: "03",
                    title: "English Literature",
                    description:
                      "Poetry, drama, fiction, criticism and literary analysis.",
                  },
                  {
                    number: "04",
                    title: "Humanities",
                    description:
                      "Connecting ideas, texts and society through contextual learning.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="group border-t border-black/15 py-6 transition-colors duration-300 hover:border-maroon"
                  >
                    <div className="flex gap-5">
                      <span className="pt-1 font-mono text-[10px] font-bold text-maroon">
                        {item.number}
                      </span>

                      <div>
                        <h4 className="font-sans text-lg font-bold tracking-[-0.025em] text-ink md:text-xl">
                          {item.title}
                        </h4>

                        <p className="mt-2 max-w-md font-sans text-sm leading-6 text-gray-dark">
                          {item.description}
                        </p>
                      </div>

                      <span className="ml-auto hidden font-sans text-xl text-maroon transition-transform duration-300 group-hover:translate-x-1 md:block">
                        ↗
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────
            Who I Teach
        ───────────────────────────── */}

        <div className="about-line h-px w-full bg-black/15" />

        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-28">
          <div className="about-reveal md:col-span-4">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
              04/04 — Students
            </span>

            <h3 className="mt-8 max-w-sm font-serif text-5xl font-black leading-[0.9] tracking-[-0.055em] text-ink md:text-6xl">
              Every learner starts somewhere.
            </h3>
          </div>

          <div className="about-reveal md:col-span-8">
            <div className="grid grid-cols-1 border-t border-black/15 sm:grid-cols-2">
              {[
                "Beginners",
                "School & College Students",
                "Non-Fluent Speakers",
                "Underconfident Speakers",
                "Hesitant English Speakers",
                "Learners seeking better communication",
              ].map((student, index) => (
                <div
                  key={student}
                  className="group flex items-center justify-between border-b border-black/15 py-6 sm:px-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] text-maroon">
                      0{index + 1}
                    </span>

                    <span className="font-sans text-base font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1 md:text-lg">
                      {student}
                    </span>
                  </div>

                  <span className="text-maroon opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────
            Learning Formats
        ───────────────────────────── */}

        <div className="about-line h-px w-full bg-black/15" />

        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-28">
          <div className="about-reveal md:col-span-4">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
              Learning formats
            </span>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "One-to-One",
                  text: "Personalised classes shaped around individual goals.",
                },
                {
                  number: "02",
                  title: "Group Classes",
                  text: "Interactive learning through discussion and participation.",
                },
                {
                  number: "03",
                  title: "Lesson Series",
                  text: "Structured sessions designed for consistent progress.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="about-reveal group border-t border-black/15 py-8 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"
                >
                  <span className="font-mono text-xs font-bold text-maroon">
                    {item.number}
                  </span>

                  <h4 className="mt-8 font-sans text-xl font-black tracking-[-0.035em] text-ink">
                    {item.title}
                  </h4>

                  <p className="mt-4 max-w-xs font-sans text-sm leading-6 text-gray-dark">
                    {item.text}
                  </p>

                  <div className="mt-10 flex h-9 w-9 items-center justify-center rounded-full border border-black/20 text-sm text-ink transition-all duration-300 group-hover:border-maroon group-hover:bg-maroon group-hover:text-white">
                    ↗
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

