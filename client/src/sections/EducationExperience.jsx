import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EducationExperience = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".experience-reveal", {
          opacity: 1,
          y: 0,
        });

        gsap.set(".experience-line", {
          scaleX: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".experience-reveal", {
          y: 55,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        gsap.from(".experience-line", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });

        gsap.from(".experience-number", {
          x: -60,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const teachingFocus = [
    "Spoken English",
    "Communication",
    "Grammar",
    "Vocabulary",
    "Literature",
    "Literary Analysis",
    "Reading",
    "Writing",
    "Other Humanities Subjects",
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative overflow-hidden bg-white px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* ─────────────────────────────
            HEADER
        ───────────────────────────── */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <div className="experience-reveal flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-maroon" />

              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-maroon">
                03 — Experience
              </p>
            </div>

            <p className="experience-reveal mt-8 max-w-[220px] font-sans text-sm leading-6 text-gray">
              Education, experience and the ideas that continue to shape my
              teaching practice.
            </p>
          </div>

          <div className="md:col-span-9">
            <h2 className="experience-reveal max-w-6xl font-serif text-[clamp(3.5rem,8vw,8.5rem)] font-black leading-[0.84] tracking-[-0.065em] text-ink">
              A foundation
              <br />
              <span className="font-sans font-black">built over time.</span>
            </h2>

            <p className="experience-reveal mt-10 max-w-2xl font-sans text-base leading-7 text-gray-dark md:ml-[12%] md:text-lg md:leading-8">
              Academic knowledge combined with more than five years of teaching
              experience across English, Literature, Communication and
              Humanities.
            </p>
          </div>
        </div>

        {/* Header divider */}
        <div className="experience-line mt-20 h-px w-full bg-black/15 md:mt-28" />

        {/* ─────────────────────────────
            EDUCATION
        ───────────────────────────── */}

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Section label */}
          <div className="experience-reveal border-b border-black/10 py-10 md:col-span-3 md:border-b-0 md:border-r md:py-20 md:pr-8">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
              Education
            </span>

            <p className="mt-6 max-w-[200px] font-sans text-sm leading-6 text-gray">
              Academic study in English Literature and related disciplines.
            </p>
          </div>

          {/* Education entries */}
          <div className="md:col-span-9">
            {/* BA */}
            <article className="experience-reveal group relative border-b border-black/10 py-14 md:py-20 md:pl-14">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-5 flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-maroon">
                      01
                    </span>

                    <span className="h-px w-10 bg-maroon/40" />

                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray">
                      Bachelor
                    </span>
                  </div>

                  <h3 className="font-sans text-[clamp(2rem,4vw,4rem)] font-black leading-[0.9] tracking-[-0.055em] text-ink transition-transform duration-500 group-hover:translate-x-2">
                    English
                    <br />
                    Literature
                  </h3>
                  <br />
                  <h2 className="font-sans text-[clamp(2rem,4vw,4rem)] font-black leading-[0.9] tracking-[-0.055em] text-ink transition-transform duration-500 group-hover:translate-x-2">
                    Office Management and Secretarial Practices
                  </h2>
                  
<br/>
                  <p className="mt-2 font-sans text-sm font-semibold text-gray">
                    University of Allahabad
                  </p>
                </div>

                <span className="font-serif text-[clamp(4rem,8vw,8rem)] font-black leading-none tracking-[-0.08em] text-black/[0.055]">
                  BA
                </span>
              </div>

              {/* Timeline marker */}
              <span className="absolute left-0 top-[76px] hidden h-3 w-3 -translate-x-1/2 rounded-full border-[3px] border-white bg-maroon md:block" />
            </article>

            {/* MA */}
            <article className="experience-reveal group relative py-14 md:py-20 md:pl-14">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-5 flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-maroon">
                      02
                    </span>

                    <span className="h-px w-10 bg-maroon/40" />

                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray">
                      Masters
                    </span>
                  </div>

                  <h3 className="font-sans text-[clamp(2rem,4vw,4rem)] font-black leading-[0.9] tracking-[-0.055em] text-ink transition-transform duration-500 group-hover:translate-x-2">
                    English
                    <br />
                    Literature
                  </h3>

                  <p className="mt-6 font-sans text-sm font-semibold text-gray">
                    University of Allahabad
                  </p>
                </div>

                <span className="font-serif text-[clamp(4rem,8vw,8rem)] font-black leading-none tracking-[-0.08em] text-black/[0.055]">
                  MA
                </span>
              </div>

              <span className="absolute left-0 top-[76px] hidden h-3 w-3 -translate-x-1/2 rounded-full border-[3px] border-white bg-maroon md:block" />
            </article>
          </div>
        </div>

        {/* ─────────────────────────────
            EXPERIENCE
        ───────────────────────────── */}

        <div className="experience-line h-px w-full bg-black/15" />

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Label */}
          <div className="experience-reveal border-b border-black/10 py-10 md:col-span-3 md:border-b-0 md:border-r md:py-20 md:pr-8">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
              Experience
            </span>

            <p className="mt-6 max-w-[200px] font-sans text-sm leading-6 text-gray">
              Turning academic understanding into practical learning.
            </p>
          </div>

          {/* Main experience */}
          <div className="relative md:col-span-9 md:pl-14">
            <div className="experience-reveal py-16 md:py-24">
              <div className="flex flex-col-reverse gap-10 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
                    Teaching career
                  </span>

                  <h3 className="mt-7 max-w-3xl font-sans text-[clamp(2.5rem,5vw,5.5rem)] font-black leading-[0.86] tracking-[-0.065em] text-ink">
                    More than
                    <br />
                    <span className="font-serif italic font-medium">
                      five years.
                    </span>
                  </h3>
                </div>

                <div className="experience-number">
                  <span className="font-sans text-[clamp(6rem,15vw,13rem)] font-black leading-[0.7] tracking-[-0.1em] text-maroon">
                    5+
                  </span>
                </div>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-8 border-t border-black/10 pt-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray">
                    Areas of practice
                  </p>
                </div>

                <p className="max-w-2xl font-sans text-base leading-7 text-gray-dark md:col-span-8 md:text-lg md:leading-8">
                  Teaching Spoken English, English Language, English Literature,
                  Communication Skills and other Humanities subjects, with an
                  emphasis on practical understanding and confident expression.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────
            TEACHING FOCUS
        ───────────────────────────── */}

        <div className="experience-line h-px w-full bg-black/15" />

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="experience-reveal border-b border-black/10 py-10 md:col-span-3 md:border-b-0 md:border-r md:py-20 md:pr-8">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-maroon">
              Teaching focus
            </span>
          </div>

          <div className="md:col-span-9 md:pl-14">
            <div className="py-14 md:py-20">
              <div className="experience-reveal flex flex-wrap gap-x-3 gap-y-1">
                {teachingFocus.map((item, index) => (
                  <span
                    key={item}
                    className="group relative font-serif text-[clamp(1.8rem,3.5vw,4rem)] font-medium leading-[1.15] tracking-[-0.045em] text-ink"
                  >
                    <span className="transition-colors duration-300 group-hover:text-maroon">
                      {item}
                    </span>

                    {index !== teachingFocus.length - 1 && (
                      <span className="mx-2 font-sans text-sm font-bold text-maroon md:text-lg">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <div className="experience-reveal mt-14 grid grid-cols-1 gap-8 border-t border-black/10 pt-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-maroon">
                    Philosophy
                  </span>
                </div>

                <p className="max-w-2xl font-sans text-base leading-7 text-gray-dark md:col-span-8 md:text-lg md:leading-8">
                  My teaching approach combines academic understanding with
                  practical communication, helping learners develop both
                  knowledge and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
