import type { ContactResult, ContactSubmission } from "@/types/portfolio";

export const contactApiUrl =
  process.env.NEXT_PUBLIC_CONTACT_API_URL?.trim() ||
  "https://api.dhirajroy.com/api/v1/contact";

const portfolioSubjectPrefix = "[Dhiraj Portfolio]";

export const contactConstraints = {
  nameMinLength: 2,
  nameMaxLength: 100,
  emailMaxLength: 254,
  phoneMinLength: 8,
  phoneMaxLength: 20,
  subjectMinLength: 3,
  subjectMaxLength: 160,
  messageMinLength: 10,
  messageMaxLength: 2000,
} as const;

export function validateContactSubmission(
  values: ContactSubmission,
): ContactSubmission {
  const cleaned = {
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  };

  if (!cleaned.name || !cleaned.email || !cleaned.subject || !cleaned.message) {
    throw new Error("Please complete all four fields.");
  }
  if (
    /[\r\n]/.test(cleaned.email) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned.email)
  ) {
    throw new Error("Please enter a valid email address.");
  }
  if (cleaned.name.length < contactConstraints.nameMinLength) {
    throw new Error("Please enter at least 2 characters for your name.");
  }
  if (
    cleaned.phone &&
    (cleaned.phone.length < contactConstraints.phoneMinLength ||
      cleaned.phone.length > contactConstraints.phoneMaxLength)
  ) {
    throw new Error("Phone numbers must contain 8 to 20 characters.");
  }
  if (cleaned.subject.length < contactConstraints.subjectMinLength) {
    throw new Error("Please enter at least 3 characters for the subject.");
  }
  if (cleaned.message.length < contactConstraints.messageMinLength) {
    throw new Error("Please enter at least 10 characters for your message.");
  }
  if (
    cleaned.name.length > contactConstraints.nameMaxLength ||
    cleaned.email.length > contactConstraints.emailMaxLength ||
    cleaned.phone.length > contactConstraints.phoneMaxLength ||
    cleaned.subject.length > contactConstraints.subjectMaxLength ||
    cleaned.message.length > contactConstraints.messageMaxLength
  ) {
    throw new Error("Please shorten your message to fit the field limits.");
  }
  return cleaned;
}

async function getApiErrorMessage(response: Response): Promise<string | null> {
  try {
    const result: unknown = await response.json();
    if (
      typeof result === "object" &&
      result !== null &&
      "message" in result &&
      typeof result.message === "string" &&
      result.message.trim()
    ) {
      return result.message.trim();
    }
  } catch {
    // The fallback below covers empty and non-JSON error responses.
  }
  return null;
}

export async function submitContact(
  values: ContactSubmission,
): Promise<ContactResult> {
  const submission = validateContactSubmission(values);
  let response: Response;

  try {
    response = await fetch(contactApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: submission.name,
        email: submission.email,
        phone: submission.phone,
        subject: `${portfolioSubjectPrefix} ${submission.subject}`,
        message: submission.message,
      }),
      signal: AbortSignal.timeout(15_000),
    });
  } catch (cause: unknown) {
    if (cause instanceof DOMException && cause.name === "TimeoutError") {
      throw new Error("The request timed out. Please try again.");
    }
    throw new Error(
      "Unable to connect to the contact service. Please try again or email me directly.",
    );
  }

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error(
        "Too many messages were sent from this connection. Please try again in 15 minutes.",
      );
    }
    const apiMessage = await getApiErrorMessage(response);
    throw new Error(
      apiMessage || "Your message could not be sent. Please try again.",
    );
  }

  return {
    status: "sent",
    message: "Thanks! Your message has been sent successfully.",
  };
}
