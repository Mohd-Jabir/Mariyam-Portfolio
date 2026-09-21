const FeedbackCard = ({ feedback, index = 0 }) => {
  const rating = Math.min(5, Math.max(0, Number(feedback.rating) || 0));

  const cardVariants = [
    "bg-[#e9e4da]",
    "bg-white",
    "bg-[#f1eee8]",
    "bg-[#ffffff]",
    "bg-[#e7e0d7]",
    "bg-white",
    "bg-[#efebe4]",
  ];

  const accentVariants = [
    "bg-maroon",
    "bg-ink",
    "bg-maroon",
    "bg-ink",
    "bg-maroon",
    "bg-ink",
    "bg-maroon",
  ];

  return (
    <article
      className={`
        feedback-card
        group
        relative
        mx-auto
        h-[480px]
        w-[320px]
        shrink-0
        overflow-hidden
        rounded-[2rem]
        border
        border-black/10
        p-7
        transition-all
        duration-700
        ease-[cubic-bezier(.16,1,.3,1)]

        hover:z-[50]
        hover:-translate-y-5
        hover:rotate-0
        hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)]

        md:absolute
        md:left-1/2
        md:top-1/2
        md:-mt-[240px]
        md:-ml-[160px]

        ${cardVariants[index % cardVariants.length]}
      `}
    >
      {/* =====================================================
          NORMAL CARD HEADER
      ===================================================== */}

      <div
        className="
          relative
          z-20
          flex
          items-start
          justify-between
          transition-all
          duration-500
          group-hover:-translate-y-4
          group-hover:opacity-0
        "
      >
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-gray">
          Voice / {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`
            h-3
            w-3
            rounded-full
            ${accentVariants[index % accentVariants.length]}
          `}
        />
      </div>

      {/* =====================================================
          QUOTE MARK
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-6
          top-14
          transition-all
          duration-500
          group-hover:-translate-y-5
          group-hover:opacity-0
        "
      >
        <span className="font-serif text-[8rem] font-black leading-none tracking-[-0.12em] text-maroon/[0.08]">
          “
        </span>
      </div>

      {/* =====================================================
          MESSAGE
      ===================================================== */}

      <div
        className="
          absolute
          left-7
          right-7
          top-[120px]
          h-[275px]
          overflow-hidden

          transition-all
          duration-700
          ease-[cubic-bezier(.16,1,.3,1)]

          group-hover:left-8
          group-hover:right-8
          group-hover:top-8
          group-hover:h-[410px]
          group-hover:overflow-y-auto
        "
      >
        <p
          className="
            font-serif
            text-[clamp(1.3rem,2.2vw,1.65rem)]
            font-medium
            leading-[1.08]
            tracking-[-0.032em]
            text-ink

            line-clamp-8

            transition-all
            duration-700
            ease-[cubic-bezier(.16,1,.3,1)]

            group-hover:line-clamp-none
            group-hover:text-[1.05rem]
            group-hover:leading-[1.45]
            group-hover:tracking-[-0.015em]
          "
        >
          {feedback.message}
        </p>
      </div>

      {/* =====================================================
          READING MODE LABEL
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-8
          top-8
          z-30

          translate-y-[-10px]
          font-mono
          text-[9px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-maroon

          opacity-0

          transition-all
          duration-500

          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        Full voice
      </div>

      {/* =====================================================
          BOTTOM META
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-7
          right-7
          border-t
          border-black/10
          pt-5

          transition-all
          duration-500

          group-hover:translate-y-10
          group-hover:opacity-0
        "
      >
        <div className="flex items-end justify-between gap-4">
          {/* NAME */}
          <div className="min-w-0">
            <p className="truncate font-sans text-sm font-black tracking-[-0.02em] text-ink">
              {feedback.name}
            </p>
          </div>

          {/* STARS */}
          <div
            className="flex shrink-0 gap-0.5"
            aria-label={`${rating} out of 5 stars`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`
                  text-[11px]
                  ${
                    star <= rating
                      ? "text-maroon"
                      : "text-black/15"
                  }
                `}
                aria-hidden="true"
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          HOVER ARROW
      ===================================================== */}

      <div
        className="
          absolute
          right-6
          top-12
          z-40
          flex
          h-9
          w-9
          translate-x-3
          items-center
          justify-center
          rounded-full
          bg-ink
          text-sm
          text-white

          opacity-0

          transition-all
          duration-500

          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        ↗
      </div>

      {/* =====================================================
          READING MODE EDGE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          rounded-[1.5rem]
          border
          border-black/0

          transition-all
          duration-700

          group-hover:border-black/10
        "
      />
    </article>
  );
};

export default FeedbackCard;
