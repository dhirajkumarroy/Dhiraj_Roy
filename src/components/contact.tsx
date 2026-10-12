import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import type { Profile } from "@/types/portfolio";

export function Contact({ profile }: { profile: Profile }) {
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="contact-banner">
          <div>
            <p className="eyebrow">
              <span>07</span> / Let&apos;s work together
            </p>
            <h2 id="contact-heading">
              Have a project or
              <br />
              <span>opportunity in mind?</span>
            </h2>
            <p>
              I&apos;m open to development opportunities, freelance projects and
              interesting collaborations.
            </p>
          </div>
          <div className="contact-banner-actions">
            <a
              className="button button-primary"
              href={`mailto:${profile.contact.email}`}
            >
              <Mail size={17} aria-hidden="true" />
              Send Email
            </a>
            <a
              className="button button-light-outline"
              href={profile.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp Me
            </a>
            <span>A conversation is a good place to start.</span>
          </div>
        </div>
        <div className="contact-grid">
          <div className="contact-details">
            <p className="eyebrow">MAKE THE FIRST CONNECTION</p>
            <h3>
              Let&apos;s talk
              <br />
              about what&apos;s next<span>.</span>
            </h3>
            <p>
              Whether you have a detailed brief or an early idea, I&apos;d love
              to hear about it.
            </p>
            <ul className="contact-methods">
              <li>
                <span className="contact-method-icon">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div>
                  <span>Email me</span>
                  <a href={`mailto:${profile.contact.email}`}>
                    {profile.contact.email}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact-method-icon">
                  <MessageCircle size={20} aria-hidden="true" />
                </span>
                <div>
                  <span>Chat on WhatsApp</span>
                  <a
                    href={profile.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.contact.phone}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact-method-icon">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <span>Location</span>
                  <strong>{profile.contact.location}</strong>
                </div>
              </li>
            </ul>
            <SocialLinks
              links={profile.socials.filter(({ platform }) =>
                ["github", "linkedin"].includes(platform),
              )}
            />
          </div>
          <ContactForm email={profile.contact.email} name={profile.name} />
        </div>
      </div>
    </section>
  );
}
