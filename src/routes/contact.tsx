import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import { site } from "@/data/site";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a Project with CacheBrains" },
      {
        name: "description",
        content:
          "Tell us about your AI or software project. A senior engineer reviews every enquiry and replies within one business day. Based in Lahore, working with teams worldwide.",
      },
      { property: "og:title", content: "Contact — CacheBrains" },
      {
        property: "og:description",
        content:
          "Start a conversation about your AI or software project. A senior engineer reads every enquiry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink transition-colors placeholder:text-stone/60 focus:border-copper focus:outline-none";
const labelClass = "block text-xs font-medium uppercase tracking-[0.12em] text-stone";

type SubmitState = "idle" | "loading" | "success" | "error";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function ContactPage() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData): Record<string, string> => {
    const errors: Record<string, string> = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name) errors["name"] = "Name is required.";
    if (!email) {
      errors["email"] = "Email is required.";
    } else if (!validateEmail(email)) {
      errors["email"] = "Please enter a valid email address.";
    }
    if (!message) errors["message"] = "Please describe what you're building.";

    return errors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});

    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Project enquiry${topic ? ` — ${topic}` : ""}${name ? ` (${name})` : ""}`;

    const bodyLines = [
      `Name: ${name}`,
      company ? `Company: ${company}` : null,
      `Email: ${email}`,
      topic ? `Area of interest: ${topic}` : null,
      "",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    setSubmitState("loading");

    try {
      // Web3Forms — the access key is a public identifier, not a credential.
      // Register at https://web3forms.com/ with info@cachebrains.com to obtain your key,
      // then set VITE_WEB3FORMS_KEY in your .env file (and deployment env vars).
      const accessKey = "605ad94e-106b-4bee-9af4-ed16af8537bc";

      if (!accessKey) {
        // Graceful fallback: open mail client when key is not yet configured
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;
        setSubmitState("success");
        return;
      }

      const payload = {
        access_key: accessKey,
        subject,
        from_name: name,
        email,
        message: bodyLines,
        redirect: "false",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success: boolean; message?: string };

      if (result.success) {
        setSubmitState("success");
        form.reset();
      } else {
        throw new Error(result.message ?? "Submission failed.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try emailing us directly.",
      );
      setSubmitState("error");
    }
  };

  const isLoading = submitState === "loading";

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line py-16 sm:py-20">
        <div
          className="grid-lines pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-copper/10 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              index="Contact"
              eyebrow="Start a project"
              title="Tell us what you're trying to build"
              description="Share the problem, the systems already in play, and any constraints you know about. A senior engineer reads every enquiry and replies within one business day."
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            {/* Form */}
            <Reveal>
              <div className="border border-line bg-paper p-6 shadow-card sm:p-8">
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  Project enquiry
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  Fill in the details below and we will get back to you — or write to us directly at{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-copper underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                  .
                </p>

                {/* Success banner */}
                {submitState === "success" && (
                  <div
                    role="status"
                    className="mt-6 flex items-start gap-3 border border-copper/30 bg-copper/5 px-5 py-4"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 shrink-0 text-copper"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-ink">Message sent successfully!</p>
                      <p className="mt-0.5 text-sm text-stone">
                        Thanks for reaching out. A senior engineer will review your enquiry and
                        reply within one business day.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error banner */}
                {submitState === "error" && (
                  <div
                    role="alert"
                    className="mt-6 flex items-start gap-3 border border-red-300 bg-red-50 px-5 py-4"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-red-800">Submission failed</p>
                      <p className="mt-0.5 text-sm text-red-700">
                        {errorMessage} You can also email us directly at{" "}
                        <a
                          href={`mailto:${site.email}`}
                          className="underline underline-offset-2 hover:text-red-900"
                        >
                          {site.email}
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                {submitState !== "success" && (
                  <form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-7 space-y-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="name">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          autoComplete="name"
                          placeholder="Your name"
                          aria-required="true"
                          aria-describedby={fieldErrors["name"] ? "name-error" : undefined}
                          className={`mt-2 ${fieldClass} ${fieldErrors["name"] ? "border-red-400 focus:border-red-500" : ""}`}
                        />
                        {fieldErrors["name"] && (
                          <p id="name-error" className="mt-1.5 text-xs text-red-600" role="alert">
                            {fieldErrors["name"]}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="company">
                          Company <span className="normal-case text-stone/60">(optional)</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          autoComplete="organization"
                          placeholder="Company or team"
                          className={`mt-2 ${fieldClass}`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          aria-required="true"
                          aria-describedby={fieldErrors["email"] ? "email-error" : undefined}
                          className={`mt-2 ${fieldClass} ${fieldErrors["email"] ? "border-red-400 focus:border-red-500" : ""}`}
                        />
                        {fieldErrors["email"] && (
                          <p id="email-error" className="mt-1.5 text-xs text-red-600" role="alert">
                            {fieldErrors["email"]}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="topic">
                          Area of interest
                        </label>
                        <select
                          id="topic"
                          name="topic"
                          defaultValue=""
                          className={`mt-2 ${fieldClass}`}
                        >
                          <option value="">Not sure yet</option>
                          {services.map((service) => (
                            <option key={service.slug} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="message">
                        What are you building?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="The problem, the systems involved, and any timeline or constraints."
                        aria-required="true"
                        aria-describedby={fieldErrors["message"] ? "message-error" : undefined}
                        className={`mt-2 resize-y ${fieldClass} ${fieldErrors["message"] ? "border-red-400 focus:border-red-500" : ""}`}
                      />
                      {fieldErrors["message"] && (
                        <p
                          id="message-error"
                          className="mt-1.5 text-xs text-red-600"
                          role="alert"
                        >
                          {fieldErrors["message"]}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isLoading}
                        className={isLoading ? "cursor-not-allowed opacity-70" : ""}
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="h-4 w-4 animate-spin"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden="true"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send enquiry <Send size={16} />
                          </>
                        )}
                      </Button>
                      {submitState === "error" && (
                        <button
                          type="button"
                          onClick={() => setSubmitState("idle")}
                          className="text-sm text-stone underline-offset-4 hover:underline"
                        >
                          Try again
                        </button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Details */}
            <Reveal delay={120} className="space-y-6">
              <div className="border border-line bg-paper p-6 shadow-card sm:p-7">
                <h2 className="eyebrow text-stone">Direct lines</h2>
                <ul className="mt-5 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 shrink-0 text-copper" />
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink transition-colors hover:text-copper"
                    >
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-copper" />
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="text-ink transition-colors hover:text-copper"
                    >
                      {site.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle size={18} className="mt-0.5 shrink-0 text-copper" />
                    <a
                      href={site.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-ink transition-colors hover:text-copper"
                    >
                      Message us on WhatsApp
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-stone">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-copper" />
                    <span>
                      {site.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border border-line bg-paper-dark/50 p-6 sm:p-7">
                <h2 className="eyebrow text-stone">What happens next</h2>
                <ol className="mt-5 space-y-4 text-sm leading-relaxed text-stone">
                  {[
                    "A senior engineer reads your enquiry — not a sales team.",
                    "We reply within one business day with initial questions or a call slot.",
                    "You get a written read on scope, approach, and a sensible first milestone.",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="font-mono text-xs text-copper">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
