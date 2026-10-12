import { ContactRound, GitFork, Mail, MessageCircle } from "lucide-react";
import { isConfiguredLink } from "@/lib/format";
import type { SocialLink } from "@/types/portfolio";

const socialIcons = {
  email: Mail,
  whatsapp: MessageCircle,
  github: GitFork,
  linkedin: ContactRound,
};

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <ul className="social-links" aria-label="Social and contact links">
      {links.map((link) => {
        const Icon = socialIcons[link.platform];
        const content = (
          <>
            <Icon size={18} aria-hidden="true" />
            <span>{link.label}</span>
          </>
        );
        return (
          <li key={link.platform}>
            {isConfiguredLink(link.href) ? (
              <a
                href={link.href}
                target={link.href.startsWith("https:") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("https:")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {content}
              </a>
            ) : (
              <span
                className="social-unavailable"
                aria-disabled="true"
                aria-label={`${link.label} profile link not added yet`}
                title="Profile link not added yet"
              >
                {content}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
