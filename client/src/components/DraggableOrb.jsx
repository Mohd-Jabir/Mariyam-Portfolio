import { useId, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DraggableOrb = ({
  className = "",
  size = "clamp(5.5rem, 9vw, 8rem)",
}) => {
  const orbRef = useRef(null);
  const boundsRef = useRef(null);
  const ringRef = useRef(null);
  const starRef = useRef(null);

  const position = useRef({
    x: 0,
    y: 0,
  });

  const pointerOffset = useRef({
    x: 0,
    y: 0,
  });

  const isDragging = useRef(false);

  const textPathId = useId().replace(/:/g, "");

  useGSAP(
    () => {
      const orb = orbRef.current;
      const bounds = boundsRef.current;
      const ring = ringRef.current;
      const star = starRef.current;

      if (!orb || !bounds || !ring || !star) return;

      /* =====================================================
         BOUNDS
      ===================================================== */

      const getBounds = () => {
        const parent = bounds.getBoundingClientRect();
        const element = orb.getBoundingClientRect();

        return {
          minX: 0,
          minY: 0,
          maxX: Math.max(0, parent.width - element.width),
          maxY: Math.max(0, parent.height - element.height),
        };
      };

      /* =====================================================
         POSITION
      ===================================================== */

      const setPosition = (x, y) => {
        const limits = getBounds();

        const nextX = gsap.utils.clamp(
          limits.minX,
          limits.maxX,
          x,
        );

        const nextY = gsap.utils.clamp(
          limits.minY,
          limits.maxY,
          y,
        );

        position.current.x = nextX;
        position.current.y = nextY;

        gsap.set(orb, {
          x: nextX,
          y: nextY,
        });
      };

      /* =====================================================
         HOVER
      ===================================================== */

      const handleMouseEnter = () => {
        if (isDragging.current) return;

        gsap.to(orb, {
          scale: 1.05,
          duration: 0.35,
          ease: "power3.out",
        });

        gsap.to(ring, {
          rotate: 8,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(star, {
          scale: 1.12,
          rotate: 45,
          duration: 0.45,
          ease: "power3.out",
        });
      };

      const handleMouseLeave = () => {
        if (isDragging.current) return;

        gsap.to(orb, {
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(ring, {
          rotate: 0,
          duration: 0.7,
          ease: "power3.out",
        });

        gsap.to(star, {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      /* =====================================================
         DRAG START
      ===================================================== */

      const handlePointerDown = (event) => {
        if (
          event.pointerType === "mouse" &&
          event.button !== 0
        ) {
          return;
        }

        event.preventDefault();

        const orbRect = orb.getBoundingClientRect();

        pointerOffset.current = {
          x: event.clientX - orbRect.left,
          y: event.clientY - orbRect.top,
        };

        isDragging.current = true;

        orb.setPointerCapture?.(event.pointerId);

        gsap.killTweensOf([
          orb,
          ring,
          star,
        ]);

        gsap.to(orb, {
          scale: 1.1,
          rotate: 5,
          duration: 0.3,
          ease: "power3.out",
        });

        gsap.to(ring, {
          rotate: 20,
          duration: 0.35,
          ease: "power3.out",
        });

        gsap.to(star, {
          scale: 1.18,
          rotate: 45,
          duration: 0.3,
          ease: "power3.out",
        });

        orb.classList.remove("cursor-grab");
        orb.classList.add("cursor-grabbing");
      };

      /* =====================================================
         DRAG MOVE
      ===================================================== */

      const handlePointerMove = (event) => {
        if (!isDragging.current) return;

        const parentRect = bounds.getBoundingClientRect();

        const x =
          event.clientX -
          parentRect.left -
          pointerOffset.current.x;

        const y =
          event.clientY -
          parentRect.top -
          pointerOffset.current.y;

        setPosition(x, y);
      };

      /* =====================================================
         DRAG END
      ===================================================== */

      const resetOrb = () => {
        isDragging.current = false;

        gsap.to(orb, {
          scale: 1,
          rotate: 0,
          duration: 0.85,
          ease: "elastic.out(1, 0.45)",
        });

        gsap.to(ring, {
          rotate: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(star, {
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
        });

        orb.classList.remove("cursor-grabbing");
        orb.classList.add("cursor-grab");
      };

      const handlePointerUp = (event) => {
        if (!isDragging.current) return;

        orb.releasePointerCapture?.(event.pointerId);

        resetOrb();
      };

      const handlePointerCancel = () => {
        if (!isDragging.current) return;

        resetOrb();
      };

      /* =====================================================
         KEYBOARD
      ===================================================== */

      const handleKeyDown = (event) => {
        if (
          event.key !== "Enter" &&
          event.key !== " "
        ) {
          return;
        }

        event.preventDefault();

        gsap.to(orb, {
          scale: 1.08,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.out",
        });
      };

      /* =====================================================
         RESIZE
      ===================================================== */

      const handleResize = () => {
        setPosition(
          position.current.x,
          position.current.y,
        );
      };

      /* =====================================================
         EVENTS
      ===================================================== */

      orb.addEventListener(
        "pointerdown",
        handlePointerDown,
      );

      orb.addEventListener(
        "pointermove",
        handlePointerMove,
      );

      orb.addEventListener(
        "pointerup",
        handlePointerUp,
      );

      orb.addEventListener(
        "pointercancel",
        handlePointerCancel,
      );

      orb.addEventListener(
        "mouseenter",
        handleMouseEnter,
      );

      orb.addEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      orb.addEventListener(
        "keydown",
        handleKeyDown,
      );

      window.addEventListener(
        "resize",
        handleResize,
      );

      /* =====================================================
         INITIAL POSITION
      ===================================================== */

      const initialBounds = getBounds();

      setPosition(
        initialBounds.maxX * 0.15,
        initialBounds.maxY * 0.22,
      );

      /* =====================================================
         CLEANUP
      ===================================================== */

      return () => {
        orb.removeEventListener(
          "pointerdown",
          handlePointerDown,
        );

        orb.removeEventListener(
          "pointermove",
          handlePointerMove,
        );

        orb.removeEventListener(
          "pointerup",
          handlePointerUp,
        );

        orb.removeEventListener(
          "pointercancel",
          handlePointerCancel,
        );

        orb.removeEventListener(
          "mouseenter",
          handleMouseEnter,
        );

        orb.removeEventListener(
          "mouseleave",
          handleMouseLeave,
        );

        orb.removeEventListener(
          "keydown",
          handleKeyDown,
        );

        window.removeEventListener(
          "resize",
          handleResize,
        );
      };
    },
    {
      scope: boundsRef,
    },
  );

  return (
    <div
      ref={boundsRef}
      className="pointer-events-none absolute inset-0 z-30"
    >
      <div
        ref={orbRef}
        role="button"
        tabIndex={0}
        aria-label="Interactive draggable element"
        className={`
          pointer-events-auto
          absolute
          left-0
          top-0
          aspect-square
          touch-none
          cursor-grab
          select-none
          outline-none
          rounded-full
          overflow-hidden
          ${className}
        `}
        style={{
          width: size,
          height: size,
        }}
      >
        {/* =================================================
            MAROON OUTER RING
        ================================================= */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            rounded-full
            bg-maroon
            p-[5px]
            shadow-[0_25px_60px_rgba(77,0,0,0.18)]
          "
        >
          {/* =================================================
              BLACK CORE
          ================================================= */}

          <div
            className="
              relative
              h-full
              w-full
              overflow-hidden
              rounded-full
              bg-ink
            "
          >
            {/* =================================================
                INNER BORDER
            ================================================= */}

            <div
              aria-hidden="true"
              className="
                absolute
                inset-[7%]
                rounded-full
                border
                border-white/15
              "
            />

            {/* =================================================
                CIRCULAR TYPOGRAPHY
            ================================================= */}

            <div
              ref={ringRef}
              className="
                orb-ring
                absolute
                inset-[3%]
                origin-center
              "
            >
              <svg
                viewBox="0 0 200 200"
                className="
                  h-full
                  w-full
                  overflow-visible
                "
                aria-hidden="true"
              >
                <defs>
                  <path
                    id={textPathId}
                    d="
                      M 100,100
                      m -78,0
                      a 78,78 0 1,1 156,0
                      a 78,78 0 1,1 -156,0
                    "
                    fill="none"
                  />
                </defs>

                <text
                  fill="white"
                  fontSize="15"
                  fontWeight="700"
                  letterSpacing="2.4"
                  fontFamily="Arial, Helvetica, sans-serif"
                >
                  <textPath
                    href={`#${textPathId}`}
                    startOffset="0%"
                  >
                    OPEN TO TEACH • OPEN TO TEACH 
                  </textPath>
                </text>
              </svg>
            </div>

            {/* =================================================
                CENTER MARK
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <div
                ref={starRef}
                className="
                  orb-star
                  relative
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-3
                    w-8
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-45
                    bg-white
                  "
                  style={{
                    clipPath:
                      "polygon(50% 0%, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0% 50%, 38% 38%)",
                  }}
                />

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-3
                    w-8
                    -translate-x-1/2
                    -translate-y-1/2
                    -rotate-45
                    bg-white
                  "
                  style={{
                    clipPath:
                      "polygon(50% 0%, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0% 50%, 38% 38%)",
                  }}
                />
              </div>
            </div>

            {/* =================================================
                CENTER DOT
            ================================================= */}

            <span
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-1/2
                h-1.5
                w-1.5
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white
              "
            />

            {/* =================================================
                MAROON ACCENT
            ================================================= */}

            <span
              aria-hidden="true"
              className="
                absolute
                bottom-[14%]
                left-1/2
                h-1.5
                w-1.5
                -translate-x-1/2
                rounded-full
                bg-maroon
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraggableOrb;