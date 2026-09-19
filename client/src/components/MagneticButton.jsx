
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MagneticButton = ({
  children,
  href = "#",
  className = "",
  onClick,
}) => {
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);
  const arrowCircleRef = useRef(null);

  useGSAP(
    () => {
      const button = buttonRef.current;
      const arrow = arrowRef.current;
      const arrowCircle = arrowCircleRef.current;

      if (!button || !arrow || !arrowCircle) return;

      const moveArrow = () => {
        gsap.to(arrow, {
          x: 5,
          duration: 0.3,
          ease: "power3.out",
        });

        gsap.to(arrowCircle, {
          scale: 1.12,
          duration: 0.35,
          ease: "power3.out",
        });
      };

      const resetArrow = () => {
        gsap.to(arrow, {
          x: 0,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(arrowCircle, {
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        });
      };

      button.addEventListener("mouseenter", moveArrow);
      button.addEventListener("mouseleave", resetArrow);

      return () => {
        button.removeEventListener("mouseenter", moveArrow);
        button.removeEventListener("mouseleave", resetArrow);
      };
    },
    {
      scope: buttonRef,
    }
  );

  return (
    <a
      ref={buttonRef}
      href={href}
      onClick={onClick}
      className={`
        group relative inline-flex
        min-h-[64px]
        min-w-[250px]
        items-center
        justify-between
        overflow-hidden
        rounded-full
        border
        border-black
        bg-black
        pl-7
        pr-2
        text-white
        transition-colors
        duration-500
        hover:bg-maroon
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-maroon
        focus-visible:ring-offset-4
        focus-visible:ring-offset-white
        ${className}
      `}
    >
      {/* Button label */}
      <span className="relative z-10 text-sm font-semibold tracking-[-0.01em]">
        {children}
      </span>

      {/* Arrow circle */}
      <span
        ref={arrowCircleRef}
        className="
          relative
          z-10
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white
          text-black
        "
      >
        <svg
          ref={arrowRef}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 10H15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <path
            d="M10.5 5.5L15 10L10.5 14.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Hover sweep */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          origin-left
          scale-x-0
          bg-maroon
          transition-transform
          duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:scale-x-100
        "
      />
    </a>
  );
};

export default MagneticButton;

