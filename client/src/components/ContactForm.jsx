
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useContact } from "../hooks/useContact.js";

const ContactForm = () => {
  const { mutate, isPending, isSuccess, isError, error } = useContact();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useGSAP(() => {
    gsap.from(".contact-field", {
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-form-editorial",
        start: "top 82%",
      },
    });
  });

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form-editorial"
    >
      {/* FORM INTRO */}
      <div className="mb-12 flex items-start justify-between border-b border-black/10 pb-6">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-maroon">
            Your message
          </p>

          <p className="mt-3 max-w-sm font-sans text-sm leading-6 text-gray">
            Fill in the details below and I&apos;ll get back to you as soon as
            possible.
          </p>
        </div>

        <span className="hidden font-serif text-5xl font-black leading-none tracking-[-0.08em] text-black/[0.06] sm:block">
          04
        </span>
      </div>

      <div className="space-y-9">
        {/* NAME */}
        <div className="contact-field group">
          <div className="flex items-baseline gap-4">
            <span className="w-8 shrink-0 font-mono text-[10px] font-bold text-maroon">
              01
            </span>

            <label
              htmlFor="contact-name"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray"
            >
              Name
            </label>
          </div>

          <div className="relative mt-3 ml-12">
            <input
              id="contact-name"
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

        {/* EMAIL */}
        <div className="contact-field group">
          <div className="flex items-baseline gap-4">
            <span className="w-8 shrink-0 font-mono text-[10px] font-bold text-maroon">
              02
            </span>

            <label
              htmlFor="contact-email"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray"
            >
              Email
            </label>
          </div>

          <div className="relative mt-3 ml-12">
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              autoComplete="email"
              required
              className="w-full border-0 border-b border-black/15 bg-transparent px-0 pb-4 font-serif text-2xl font-bold tracking-[-0.03em] text-ink outline-none placeholder:text-black/20 transition-colors duration-300 focus:border-maroon md:text-3xl"
            />

            <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-maroon transition-all duration-500 group-focus-within:w-full" />
          </div>
        </div>

        {/* SUBJECT */}
        <div className="contact-field group">
          <div className="flex items-baseline gap-4">
            <span className="w-8 shrink-0 font-mono text-[10px] font-bold text-maroon">
              03
            </span>

            <label
              htmlFor="contact-subject"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray"
            >
              Subject
            </label>
          </div>

          <div className="relative mt-3 ml-12">
            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can I help?"
              required
              className="w-full border-0 border-b border-black/15 bg-transparent px-0 pb-4 font-serif text-2xl font-bold tracking-[-0.03em] text-ink outline-none placeholder:text-black/20 transition-colors duration-300 focus:border-maroon md:text-3xl"
            />

            <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-maroon transition-all duration-500 group-focus-within:w-full" />
          </div>
        </div>

        {/* MESSAGE */}
        <div className="contact-field group">
          <div className="flex items-baseline gap-4">
            <span className="w-8 shrink-0 font-mono text-[10px] font-bold text-maroon">
              04
            </span>

            <label
              htmlFor="contact-message"
              className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gray"
            >
              Message
            </label>
          </div>

          <div className="relative mt-3 ml-12">
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              required
              className="w-full resize-none border-0 border-b border-black/15 bg-transparent px-0 pb-4 font-serif text-2xl font-bold leading-tight tracking-[-0.03em] text-ink outline-none placeholder:text-black/20 transition-colors duration-300 focus:border-maroon md:text-3xl"
            />

            <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-maroon transition-all duration-500 group-focus-within:w-full" />
          </div>
        </div>
      </div>

      {/* STATUS */}
      {isSuccess && (
        <div className="mt-10 border-l-2 border-maroon bg-maroon/[0.04] px-5 py-4">
          <div className="flex items-start gap-4">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maroon text-xs text-white">
              ✓
            </span>

            <div>
              <p className="font-sans text-sm font-bold text-ink">
                Message sent successfully.
              </p>

              <p className="mt-1 font-sans text-sm leading-6 text-gray">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      )}

      {isError && (
        <div
          role="alert"
          className="mt-10 border-l-2 border-maroon bg-maroon/[0.04] px-5 py-4"
        >
          <p className="font-sans text-sm font-bold text-ink">
            Unable to send your message.
          </p>

          <p className="mt-1 font-sans text-sm leading-6 text-gray">
            {error?.response?.data?.message ||
              "Something went wrong. Please try again."}
          </p>
        </div>
      )}

      {/* SUBMIT */}
      <div className="mt-12 flex flex-col gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs font-mono text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-gray">
          By sending this message, you&apos;re starting a conversation.
        </p>

        <button
          type="submit"
          disabled={isPending}
          className="group relative flex min-h-[68px] w-full items-center justify-between overflow-hidden bg-ink px-6 text-left font-sans text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors duration-500 hover:bg-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-60 sm:w-[230px]"
        >
          <span className="relative z-10">
            {isPending ? "Sending..." : "Send Message"}
          </span>

          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:translate-x-1">
            {isPending ? "…" : "↗"}
          </span>

          <span className="absolute inset-0 origin-left scale-x-0 bg-maroon transition-transform duration-500 group-hover:scale-x-100" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

