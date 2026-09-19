import { useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useFeedback } from "../hooks/useFeedback.js";

const FeedbackForm = ({ onClose }) => {
  const {
    submitFeedback,
    isSubmitting,
    submitSuccess,
    submitError,
  } = useFeedback();

  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: 5,
  });

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".feedback-field", {
        opacity: 1,
        y: 0,
      });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".feedback-field", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    return () => mm.revert();
  });

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRating = (rating) => {
    setFormData((current) => ({
      ...current,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitFeedback(
      {
        ...formData,
        rating: Number(formData.rating),
      },
      {
        onSuccess: () => {
          setFormData({
            name: "",
            message: "",
            rating: 5,
          });

          setTimeout(() => {
            onClose();
          }, 1200);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form-editorial">
      {/* =====================================================
          FORM INTRO
      ====================================================== */}

      <div className="mb-12 flex items-start justify-between border-b border-black/10 pb-6">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-maroon">
            Your feedback
          </p>

          <p className="mt-3 max-w-sm font-sans text-sm leading-6 text-gray">
            Tell me about your experience. Your words can help other learners
            understand what the journey feels like.
          </p>
        </div>

        <span className="hidden font-serif text-5xl font-black leading-none tracking-[-0.08em] text-black/[0.06] sm:block">
          04
        </span>
      </div>

      {/* =====================================================
          FIELDS
      ====================================================== */}

      <div className="space-y-9">
        {/* NAME */}

        <div className="feedback-field group">
          <div className="flex items-baseline gap-4">
            <span className="w-8 shrink-0 font-mono text-[10px] font-bold text-maroon">
              01
            </span>

            <label
              htmlFor="feedback-name"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray"
            >
              Name
            </label>
          </div>

          <div className="relative ml-12 mt-3">
            <input
              id="feedback-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              required
              className="w-full border-0 border-b border-black/15 bg-transparent px-0 pb-4 font-serif text-2xl font-bold tracking-[-0.03em] text-ink outline-none placeholder:text-black/20 transition-colors duration-300 focus:border-maroon md:text-3xl"
            />

            <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-maroon transition-all duration-500 group-focus-within:w-full" />
          </div>
        </div>

        {/* RATING */}

        <div className="feedback-field">
          <div className="flex items-baseline gap-4">
            <span className="w-8 shrink-0 font-mono text-[10px] font-bold text-maroon">
              02
            </span>

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray">
              Rating
            </span>
          </div>

          <div className="ml-12 mt-4 flex flex-wrap items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => {
              const active = star <= Number(formData.rating);

              return (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRating(star)}
                  aria-label={`Give ${star} star${
                    star === 1 ? "" : "s"
                  }`}
                  aria-pressed={active}
                  className={[
                    "group flex h-10 w-10 items-center justify-center border font-sans text-sm transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2",
                    active
                      ? "border-maroon bg-maroon text-white"
                      : "border-black/15 bg-transparent text-black/25 hover:border-maroon hover:text-maroon",
                  ].join(" ")}
                >
                  <span className="transition-transform duration-300 group-hover:scale-110">
                    ★
                  </span>
                </button>
              );
            })}

            <div className="ml-3">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-gray">
                {formData.rating}/5
              </p>

              <p className="mt-1 font-sans text-xs text-gray">
                {formData.rating === 5
                  ? "Excellent"
                  : formData.rating === 4
                    ? "Very good"
                    : formData.rating === 3
                      ? "Good"
                      : formData.rating === 2
                        ? "Average"
                        : "Needs improvement"}
              </p>
            </div>
          </div>
        </div>

        {/* MESSAGE */}

        <div className="feedback-field group">
          <div className="flex items-baseline gap-4">
            <span className="w-8 shrink-0 font-mono text-[10px] font-bold text-maroon">
              03
            </span>

            <label
              htmlFor="feedback-message"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray"
            >
              Feedback
            </label>
          </div>

          <div className="relative ml-12 mt-3">
            <textarea
              id="feedback-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your experience..."
              rows={5}
              required
              className="w-full resize-none border-0 border-b border-black/15 bg-transparent px-0 pb-4 font-serif text-2xl font-bold leading-tight tracking-[-0.03em] text-ink outline-none placeholder:text-black/20 transition-colors duration-300 focus:border-maroon md:text-3xl"
            />

            <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-maroon transition-all duration-500 group-focus-within:w-full" />
          </div>
        </div>
      </div>

      {/* =====================================================
          STATUS
      ====================================================== */}

      {submitSuccess && (
        <div className="mt-10 border-l-2 border-maroon bg-maroon/[0.04] px-5 py-4">
          <div className="flex items-start gap-4">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maroon text-xs text-white">
              ✓
            </span>

            <div>
              <p className="font-sans text-sm font-bold text-ink">
                Feedback submitted successfully.
              </p>

              <p className="mt-1 font-sans text-sm leading-6 text-gray">
                Thank you for taking the time to share your experience.
              </p>
            </div>
          </div>
        </div>
      )}

      {submitError && (
        <div
          role="alert"
          className="mt-10 border-l-2 border-maroon bg-maroon/[0.04] px-5 py-4"
        >
          <p className="font-sans text-sm font-bold text-ink">
            Unable to submit your feedback.
          </p>

          <p className="mt-1 font-sans text-sm leading-6 text-gray">
            {submitError?.response?.data?.message ||
              "Something went wrong. Please try again."}
          </p>
        </div>
      )}

      {/* =====================================================
          SUBMIT
      ====================================================== */}

      <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="max-w-xs font-mono text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-gray">
            Your feedback may be displayed publicly on this portfolio.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-4 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-gray transition-colors hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
          >
            Close form
          </button>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative flex min-h-[68px] w-full items-center justify-between overflow-hidden bg-ink px-6 text-left font-sans text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors duration-500 hover:bg-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-60 sm:w-[230px]"
        >
          <span className="relative z-10">
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </span>

          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:translate-x-1">
            {isSubmitting ? "…" : "↗"}
          </span>

          <span className="absolute inset-0 origin-left scale-x-0 bg-maroon transition-transform duration-500 group-hover:scale-x-100" />
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;