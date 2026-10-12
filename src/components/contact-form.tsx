"use client";

import { Send } from "lucide-react";
import { useState, useSyncExternalStore, type FormEvent } from "react";
import { contactConstraints, submitContact } from "@/services/contact";
import type { ContactResult } from "@/types/portfolio";

const subscribeHydration = () => () => {};
const clientHydrationSnapshot = () => true;
const serverHydrationSnapshot = () => false;

export function ContactForm({ email, name }: { email: string; name: string }) {
  const hydrated = useSyncExternalStore(
    subscribeHydration,
    clientHydrationSnapshot,
    serverHydrationSnapshot,
  );
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<ContactResult | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setError("");
    setResult(null);
    setSubmitting(true);
    const form = new FormData(formElement);

    try {
      const submission = await submitContact({
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        phone: String(form.get("phone") ?? ""),
        subject: String(form.get("subject") ?? ""),
        message: String(form.get("message") ?? ""),
      });
      setResult(submission);
      formElement.reset();
    } catch (cause: unknown) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Your message could not be sent. Please try emailing me directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-label={`Contact ${name}`}
      aria-describedby="contact-form-note"
    >
      <h3>Tell me about your idea.</h3>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
            minLength={contactConstraints.nameMinLength}
            maxLength={contactConstraints.nameMaxLength}
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={contactConstraints.emailMaxLength}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-phone">Phone number (optional)</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          minLength={contactConstraints.phoneMinLength}
          maxLength={contactConstraints.phoneMaxLength}
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-subject">
          Subject <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          placeholder="A project, an opportunity, or just hello"
          required
          minLength={contactConstraints.subjectMinLength}
          maxLength={contactConstraints.subjectMaxLength}
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">
          Your message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="What do you have in mind?"
          rows={5}
          required
          minLength={contactConstraints.messageMinLength}
          maxLength={contactConstraints.messageMaxLength}
        />
      </div>
      <p id="contact-form-note" className="form-note">
        Your message will be sent securely to my inbox. Phone is optional; all
        other fields are required.{" "}
        <a href={`mailto:${email}`}>Email me directly</a> if you prefer.
      </p>
      <button
        type="submit"
        className="button button-primary"
        disabled={submitting || !hydrated}
      >
        <Send size={16} aria-hidden="true" />
        {submitting ? "Sending…" : "Send Message"}
      </button>
      <div className="form-feedback" aria-live="polite" aria-atomic="true">
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        {result && (
          <div className="form-result">
            <p>{result.message}</p>
          </div>
        )}
      </div>
      <noscript>
        <p>
          Please email <a href={`mailto:${email}`}>{email}</a> directly. Sending
          this form requires JavaScript.
        </p>
      </noscript>
    </form>
  );
}
