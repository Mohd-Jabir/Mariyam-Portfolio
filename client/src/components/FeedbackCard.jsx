
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
      className={`feedback-card group relative mx-auto h-[460px] w-[285px] shrink-0 overflow-hidden rounded-[2rem] border border-black/10 p-7 transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:z-[20] hover:-translate-y-5 hover:rotate-0 hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)] md:absolute md:left-1/2 md:top-1/2 md:-mt-[230px] md:-ml-[142px] ${cardVariants[index % cardVariants.length]}`}
    >
      {/* Top metadata */}
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-gray">
          Voice / {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`h-3 w-3 rounded-full ${
            accentVariants[index % accentVariants.length]
          }`}
        />
      </div>

      {/* Giant quotation */}
      <div className="absolute left-6 top-16">
        <span
          aria-hidden="true"
          className="font-serif text-[9rem] font-black leading-none tracking-[-0.1em] text-maroon/[0.09]"
        >
          “
        </span>
      </div>

      {/* Main message */}
      <div className="relative mt-20 flex h-[260px] items-center">
        <p className="line-clamp-7 font-serif text-[clamp(1.65rem,3vw,2rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink">
          {feedback.message}
        </p>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-7 left-7 right-7 border-t border-black/10 pt-5">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate font-sans text-sm font-black tracking-[-0.02em] text-ink">
              {feedback.name}
            </p>
          </div>

          {/* Stars */}
          <div
            className="flex shrink-0 gap-0.5"
            aria-label={`${rating} out of 5 stars`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-[11px] ${
                  star <= rating ? "text-maroon" : "text-black/15"
                }`}
                aria-hidden="true"
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover arrow */}
      <div className="absolute right-6 top-14 flex h-9 w-9 translate-x-3 items-center justify-center rounded-full bg-ink text-sm text-white opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
        ↗
      </div>
    </article>
  );
};

export default FeedbackCard;

