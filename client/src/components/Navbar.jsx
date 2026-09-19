import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuPanelRef = useRef(null);
  const menuItemsRef = useRef([]);
  const menuMetaRef = useRef(null);
  const menuCloseRef = useRef(null);

  const navItems = [
    {
      number: "01",
      label: "Home",
      id: "home",
      description: "Introduction",
    },
    {
      number: "02",
      label: "Feedback",
      id: "feedback",
      description: "Voices & reflections",
    },
    {
      number: "03",
      label: "Contact",
      id: "contact",
      description: "Start a conversation",
    },
  ];

  useGSAP(
    () => {
      const panel = menuPanelRef.current;
      const items = menuItemsRef.current;
      const meta = menuMetaRef.current;
      const close = menuCloseRef.current;

      if (!panel) return;

      if (isOpen) {
        document.body.style.overflow = "hidden";

        gsap.set(panel, {
          display: "flex",
        });

        gsap.set(items, {
          opacity: 0,
          y: 50,
        });

        gsap.set([meta, close], {
          opacity: 0,
        });

        const tl = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        tl.to(panel, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.75,
        })
          .to(
            meta,
            {
              opacity: 1,
              duration: 0.45,
            },
            "-=0.3",
          )
          .to(
            close,
            {
              opacity: 1,
              duration: 0.45,
            },
            "<",
          )
          .to(
            items,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
            },
            "-=0.2",
          );
      } else {
        document.body.style.overflow = "";

        gsap.to(panel, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.55,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(panel, {
              display: "none",
            });
          },
        });
      }

      return () => {
        document.body.style.overflow = "";
      };
    },
    {
      dependencies: [isOpen],
    },
  );

  const handleScroll = (id) => {
    setIsOpen(false);

    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 450);
  };

  const toggleMenu = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav
        className="
          fixed
          inset-x-0
          top-0
          z-[120]
          flex
          h-[92px]
          items-start
          justify-between
          bg-white/95
          px-5
          py-4
          backdrop-blur-[2px]
          md:h-[104px]
          md:px-8
          md:py-5
          lg:px-10
        "
      >
        {/* =====================================================
            LOGO
        ===================================================== */}

        <button
          type="button"
          onClick={() => handleScroll("home")}
          aria-label="Go to homepage"
          className="
            group
            flex
            w-[210px]
            flex-col
            text-left
            leading-[0.78]
            text-black
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-maroon
            focus-visible:ring-offset-4
            md:w-[250px]
          "
        >
          <span
            className="
              block
              font-serif
              text-[25px]
              font-black
              tracking-[-0.065em]
              transition-transform
              duration-500
              group-hover:translate-x-1
              md:text-[30px]
              lg:text-[32px]
            "
          >
            MARIYAM
          </span>

          <span
            className="
              block
              font-sans
              text-[25px]
              font-black
              uppercase
              tracking-[-0.075em]
              transition-transform
              duration-500
              group-hover:translate-x-1
              md:text-[30px]
              lg:text-[32px]
            "
          >
            KHATOON
          </span>

          {/* Small identity line */}
          <span
            className="
              mt-2
              flex
              items-center
              gap-2
              font-mono
              text-[7px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-gray-dark
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
              md:text-[8px]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-maroon" />
            English Educator
          </span>
        </button>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div className="flex items-center">
          <span
            className="
              mr-5
              hidden
              font-mono
              text-[8px]
              font-bold
              uppercase
              tracking-[0.24em]
              text-gray
              lg:block
            "
          >
            Teacher Portfolio / 2026
          </span>

          {/* MENU BUTTON */}

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            className="
              group
              relative
              flex
              h-[54px]
              w-[54px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-black
              bg-white
              transition-colors
              duration-500
              hover:border-maroon
              hover:bg-maroon
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-maroon
              focus-visible:ring-offset-4
              md:h-[62px]
              md:w-[62px]
            "
          >
            {/* Menu icon */}

            <span
              className={`
                relative
                flex
                h-5
                w-6
                flex-col
                justify-center
                transition-transform
                duration-500
                ${
                  isOpen
                    ? "rotate-45"
                    : "group-hover:scale-110"
                }
              `}
            >
              <span
                className={`
                  absolute
                  left-0
                  h-[2px]
                  w-6
                  bg-black
                  transition-all
                  duration-500
                  group-hover:bg-white
                  ${
                    isOpen
                      ? "top-1/2 -translate-y-1/2"
                      : "top-1"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  left-0
                  h-[2px]
                  w-6
                  bg-black
                  transition-all
                  duration-500
                  group-hover:bg-white
                  ${
                    isOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-90"
                      : "bottom-1"
                  }
                `}
              />
            </span>

            {/* Hover fill */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                -z-10
                origin-bottom
                scale-y-0
                bg-maroon
                transition-transform
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:scale-y-100
              "
            />
          </button>
        </div>
      </nav>

      {/* =========================================================
          FULL SCREEN MENU
      ========================================================= */}

      <div
        id="main-navigation"
        ref={menuPanelRef}
        className="
          fixed
          inset-0
          z-[110]
          hidden
          flex-col
          overflow-hidden
          bg-off-white
        "
        style={{
          clipPath: "inset(0% 0% 100% 0%)",
        }}
      >
        {/* Editorial grid */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[8%]
            top-0
            h-full
            w-px
            bg-border
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-0
            h-full
            w-px
            bg-border
          "
        />

        {/* Top information */}

        <div
          ref={menuMetaRef}
          className="
            absolute
            left-0
            top-0
            flex
            w-full
            items-center
            justify-between
            px-5
            py-5
            md:px-8
            md:py-6
            lg:px-10
          "
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-maroon" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-dark md:text-[10px]">
              Navigation
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray">
            Mariyam Khatoon / 2026
          </span>
        </div>

        {/* Close button */}

        <button
          ref={menuCloseRef}
          type="button"
          onClick={toggleMenu}
          aria-label="Close navigation menu"
          className="
            absolute
            right-5
            top-[76px]
            z-20
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-black
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
            md:right-8
            md:top-[88px]
            lg:right-10
          "
        >
          <span className="relative h-4 w-4">
            <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
            <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
          </span>
        </button>

        {/* Main menu */}

        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            flex-col
            justify-center
            px-8
            pt-20
            md:px-[14%]
            lg:px-[16%]
          "
        >
          <div className="mb-8 md:mb-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-maroon">
              Explore
            </span>
          </div>

          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                ref={(element) => {
                  menuItemsRef.current[index] = element;
                }}
                type="button"
                onClick={() => handleScroll(item.id)}
                className="
                  group
                  relative
                  flex
                  w-full
                  items-center
                  border-t
                  border-border
                  py-5
                  text-left
                  md:py-7
                  lg:py-8
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-maroon
                "
              >
                {/* Number */}

                <span
                  className="
                    mr-5
                    w-8
                    shrink-0
                    font-mono
                    text-[10px]
                    text-maroon
                    md:mr-8
                    md:w-10
                  "
                >
                  {item.number}
                </span>

                {/* Main label */}

                <span
                  className="
                    font-serif
                    text-[clamp(3rem,7vw,7rem)]
                    font-black
                    leading-[0.8]
                    tracking-[-0.065em]
                    text-black
                    transition-all
                    duration-500
                    group-hover:translate-x-4
                    group-hover:text-maroon
                  "
                >
                  {item.label}
                </span>

                {/* Description */}

                <span
                  className="
                    ml-auto
                    hidden
                    text-right
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-gray
                    transition-colors
                    duration-300
                    group-hover:text-black
                    md:block
                  "
                >
                  {item.description}
                </span>

                {/* Arrow */}

                <span
                  className="
                    ml-5
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    text-black
                    transition-all
                    duration-500
                    group-hover:border-maroon
                    group-hover:bg-maroon
                    group-hover:text-white
                    md:ml-8
                    md:h-12
                    md:w-12
                  "
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-500 group-hover:-rotate-45"
                  >
                    <path
                      d="M4 16L16 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M7 4H16V13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                {/* Hover line */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    origin-left
                    scale-x-0
                    bg-maroon
                    transition-transform
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-x-100
                  "
                />
              </button>
            ))}

            <div className="border-t border-border" />
          </div>

          {/* Bottom information */}

          <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:items-center md:justify-between">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray">
              Language · Literature · Humanities
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray">
              Scroll / Select
            </span>
          </div>
        </div>

        {/* Maroon decorative circle */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-24
            -right-24
            h-64
            w-64
            rounded-full
            bg-maroon
            opacity-[0.06]
            md:h-96
            md:w-96
          "
        />
      </div>
    </>
  );
};

export default Navbar;