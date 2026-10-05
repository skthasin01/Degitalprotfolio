import { useState } from "react";
import {
  MdMail,
  MdCall,
  MdChat,
  MdSend,
  MdVerified,
  MdArrowOutward,
  MdLocationOn,
} from "react-icons/md";

export default function Contact() {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject") || "Portfolio Contact";
    const message = formData.get("message");

    const body = `Hello Sheikh,

Name: ${name}
Email: ${email}

${message}`;

    const mailtoLink = `mailto:sheikhthasinrahman01@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setShowFeedback(true);
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col space-y-space-md overflow-hidden py-16 md:py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      {/* Header */}
      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-6 w-1.5 rounded-full bg-primary" />

          <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary">
            Get In Touch
          </span>
        </div>

        <h2
          className="font-headline-lg-mobile
          text-headline-lg-mobile
          font-bold
          tracking-tight
          text-on-surface
          md:text-4xl"
        >
          Let's Work Together<span className="text-primary">.</span>
        </h2>

        <p className="mt-3 max-w-2xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
          Have a project idea, collaboration opportunity, or simply want to
          connect? Drop me a message and let's build something meaningful
          together.
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ================= CONTACT INFO ================= */}
        <div className="flex flex-col gap-4">
          {/* Email */}
          <a
            href="mailto:sheikhthasinrahman01@gmail.com"
            className="group relative overflow-hidden rounded-2xl border border-outline/10 bg-surface-container-low p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />

            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <MdMail className="text-[22px] text-primary" />
                </div>

                <div>
                  <p className="font-label-caps text-label-caps uppercase tracking-wider text-outline">
                    Email
                  </p>

                  <p className="mt-1 break-all font-body-md text-body-md font-medium text-on-surface">
                    sheikhthasinrahman01@gmail.com
                  </p>
                </div>
              </div>

              <MdArrowOutward className="text-xl text-outline transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+8801648289028"
            className="group relative overflow-hidden rounded-2xl border border-outline/10 bg-surface-container-low p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-secondary/10 blur-2xl transition-all duration-300 group-hover:bg-secondary/20" />

            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10">
                  <MdCall className="text-[22px] text-secondary" />
                </div>

                <div>
                  <p className="font-label-caps text-label-caps uppercase tracking-wider text-outline">
                    Phone
                  </p>

                  <p className="mt-1 font-body-md text-body-md font-medium text-on-surface">
                    +880 1648289028
                  </p>
                </div>
              </div>

              <MdArrowOutward className="text-xl text-outline transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-secondary" />
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801648289028"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-outline/10 bg-surface-container-low p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-tertiary/30 hover:shadow-lg"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-tertiary/10 blur-2xl transition-all duration-300 group-hover:bg-tertiary/20" />

            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tertiary/10">
                  <MdChat className="text-[22px] text-tertiary" />
                </div>

                <div>
                  <p className="font-label-caps text-label-caps uppercase tracking-wider text-outline">
                    WhatsApp
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />

                    <p className="font-body-md text-body-md font-medium text-on-surface">
                      Available for chat
                    </p>
                  </div>
                </div>
              </div>

              <MdArrowOutward className="text-xl text-outline transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-tertiary" />
            </div>
          </a>

          {/* Location / Availability */}
          <div className="rounded-2xl border border-outline/10 bg-surface-container-low p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <MdLocationOn className="text-[22px] text-primary" />
              </div>

              <div>
                <p className="font-label-caps text-label-caps uppercase tracking-wider text-outline">
                  Availability
                </p>

                <p className="mt-1 font-body-md text-body-md text-on-surface">
                  Open for freelance & collaboration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONTACT FORM ================= */}
        <div className="relative overflow-hidden rounded-2xl border border-outline/10 bg-surface-container-low p-5 shadow-lg md:p-7">
          {/* Top gradient line */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />

          <div className="mb-6">
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Send Me a Message
            </h3>

            <p className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
              Tell me a little about your project or idea.
            </p>
          </div>

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant"
                >
                  Full Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full rounded-xl border border-outline/10 bg-surface-container px-4 py-3 font-body-md text-body-md text-on-surface outline-none placeholder:text-outline/70 transition-all duration-200 focus:border-primary/50 focus:bg-surface-container-high focus:ring-2 focus:ring-primary/10"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-xl border border-outline/10 bg-surface-container px-4 py-3 font-body-md text-body-md text-on-surface outline-none placeholder:text-outline/70 transition-all duration-200 focus:border-primary/50 focus:bg-surface-container-high focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-subject"
                className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Software Collaboration / Full-Stack Project"
                className="w-full rounded-xl border border-outline/10 bg-surface-container px-4 py-3 font-body-md text-body-md text-on-surface outline-none placeholder:text-outline/70 transition-all duration-200 focus:border-primary/50 focus:bg-surface-container-high focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your note or project scope..."
                required
                className="w-full resize-none rounded-xl border border-outline/10 bg-surface-container px-4 py-3 font-body-md text-body-md text-on-surface outline-none placeholder:text-outline/70 transition-all duration-200 focus:border-primary/50 focus:bg-surface-container-high focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 font-headline-sm text-body-md font-bold text-on-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl hover:shadow-primary/30 active:translate-y-0"
            >
              <span>Send Message</span>

              <MdSend className="text-[19px] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Feedback */}
            {showFeedback && (
              <div
                id="contact-feedback"
                className="flex items-start gap-2 rounded-xl border border-tertiary/20 bg-tertiary/10 p-3 text-tertiary"
              >
                <MdVerified className="mt-0.5 shrink-0 text-[19px]" />

                <span className="font-body-sm text-body-sm">
                  Your email client has been opened with the message
                  prepared.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Bottom text */}
      <div className="relative pt-2 text-center">
        <p className="font-body-sm text-body-sm text-outline">
          Usually responds within{" "}
          <span className="font-semibold text-on-surface">
            24 hours
          </span>
        </p>
      </div>
    </section>
  );
}

