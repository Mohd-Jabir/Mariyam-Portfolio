import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".contact-reveal", {
          opacity: 1,
          y: 0,
          x: 0,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        });

        tl.from(".contact-label", {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
        })
          .from(
            ".contact-title-line",
            {
              opacity: 0,
              y: 80,
              duration: 0.9,
              stagger: 0.12,
              ease: "power4.out",
            },
            "-=0.3",
          )
          .from(
            ".contact-intro",
            {
              opacity: 0,
              y: 30,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.45",
          )
          .from(
            ".contact-meta",
            {
              opacity: 0,
              x: -30,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .from(
            ".contact-form-wrap",
            {
              opacity: 0,
              y: 50,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.5",
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-off-white px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* TOP RULE */}
        <div className="mb-16 flex items-center justify-between border-t border-black/15 pt-5 md:mb-24">
          <p className="contact-label font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-maroon">
            05 — Contact
          </p>

          <p className="hidden font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray md:block">
            Open for conversations
          </p>
        </div>

        {/* HERO TYPE */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <h2 className="overflow-hidden font-serif text-[clamp(4rem,10vw,10.5rem)] font-black leading-[0.78] tracking-[-0.075em] text-ink">
              <span className="contact-title-line block">Let&apos;s</span>

              <span className="contact-title-line block pl-[8%] font-sans">
                start
              </span>

              <span className="contact-title-line block text-maroon">
                talking.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end md:col-span-4 md:pb-3">
            <p className="contact-intro max-w-md font-sans text-base leading-7 text-gray-dark md:text-lg md:leading-8">
              Have a question, collaboration idea, academic discussion, or
              simply something worth talking about?
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-maroon" />

              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
                I&apos;d love to hear from you
              </span>
            </div>
          </div>
        </div>

        {/* CONTACT CONTENT */}
        <div className="mt-24 grid grid-cols-1 border-t border-black/15 md:mt-36 md:grid-cols-12">
          {/* CONTACT DETAILS */}
          <aside className="border-b border-black/15 py-10 md:col-span-4 md:border-b-0 md:border-r md:py-14 md:pr-12">
            <div className="contact-meta">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-maroon">
                Direct
              </p>

              <h3 className="mt-5 font-serif text-3xl font-black leading-none tracking-[-0.04em] text-ink">
                Get in touch.
              </h3>

              <p className="mt-5 max-w-sm font-sans text-sm leading-6 text-gray">
                Feel free to reach out for academic discussions, collaborations,
                workshops, teaching enquiries, or general conversations.
              </p>
            </div>

            <div className="mt-14 space-y-10">
              {/* EMAIL */}
              <div className="contact-meta group">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray">
                  Email
                </p>

                <a
                  href="mailto:your-email@example.com"
                  className="mt-3 block w-fit font-serif text-xl font-bold tracking-[-0.025em] text-ink transition-colors duration-300 hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-4 md:text-2xl"
                >
                  your-email@example.com
                </a>

                <span className="mt-2 block h-px w-0 bg-maroon transition-all duration-500 group-hover:w-full" />
              </div>

              {/* LOCATION */}
              <div className="contact-meta">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray">
                  Location
                </p>

                <p className="mt-3 font-serif text-xl font-bold tracking-[-0.025em] text-ink md:text-2xl">
                  Prayagraj,
                  <br />
                  Uttar Pradesh
                </p>
              </div>

              {/* AVAILABILITY */}
              <div className="contact-meta border-t border-black/10 pt-8">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-maroon/40" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-maroon" />
                  </span>

                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
                    Available for enquiries
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <div className="contact-form-wrap relative py-10 md:col-span-8 md:py-14 md:pl-16 lg:pl-24">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-maroon">
                  Message
                </p>

                <h3 className="mt-4 font-sans text-3xl font-black tracking-[-0.05em] text-ink md:text-5xl">
                  Tell me what&apos;s on your mind.
                </h3>
              </div>

              <span className="hidden font-serif text-6xl font-black leading-none text-black/[0.06] md:block">
                04
              </span>
            </div>

            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* EDITORIAL GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[8%] hidden w-px bg-black/[0.035] md:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[8%] hidden w-px bg-black/[0.035] md:block"
      />
    </section>
  );
};

export default Contact;