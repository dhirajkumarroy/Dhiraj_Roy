import { profile } from "@/data/profile";

const defaultOrigin = "https://www.dhirajroy.com";

function resolveSiteUrl(value: string | undefined): string {
  if (!value) return defaultOrigin;
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP or HTTPS URL.");
  }
  return url.origin;
}

export const siteConfig = {
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  title: `${profile.name} | ${profile.role}`,
  description: `Portfolio of ${profile.name}, a ${profile.role} working with ${profile.currentStack.join(", ")} at ${profile.company}`,
  locale: "en_IN",
} as const;
