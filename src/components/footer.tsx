import { MessageCircle } from "lucide-react";
import { footerNavigation } from "@/data/navigation";
import type { Profile } from "@/types/portfolio";

export function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a className="brand" href="#home">
              <span className="monogram" aria-hidden="true">
                {profile.initials}
                <span>.</span>
              </span>
              <span>
                {profile.name}
                <span className="brand-dot">.</span>
              </span>
            </a>
            <p>{profile.role}</p>
          </div>
          <nav aria-label="Footer navigation">
            {footerNavigation.map(({ label, href }) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <a href={`mailto:${profile.contact.email}`}>
              {profile.contact.email}
            </a>
            <a
              href={profile.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} aria-hidden="true" />
              {profile.contact.phone}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getUTCFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with <span>Next.js & TypeScript.</span>
          </p>
          <a href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
