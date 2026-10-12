import { CircleCheck, LayoutGrid, MessageCircle } from "lucide-react";
import { Fragment } from "react";
import { DeveloperVisual } from "@/components/developer-visual";
import { SocialLinks } from "@/components/social-links";
import { TypewriterRole } from "@/components/typewriter-role";
import type { Profile } from "@/types/portfolio";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-copy">
          {profile.available && (
            <p className="availability">
              <span />
              {profile.availabilityLabel}
            </p>
          )}
          <h1 id="hero-heading">
            Hi, I&apos;m
            <br />
            <span className="hero-name">
              {profile.name}
              <span className="orange-period">.</span>
            </span>
            <br />
            <TypewriterRole texts={profile.roles} />
          </h1>
          <p className="hero-description">{profile.summary}</p>
          <div className="button-row">
            <a href="#projects" className="button button-primary">
              <LayoutGrid size={17} aria-hidden="true" />
              View My Work
            </a>
            <a href="#contact" className="button button-outline">
              <MessageCircle size={17} aria-hidden="true" />
              Let&apos;s Talk
            </a>
          </div>
          <SocialLinks links={profile.socials} />
        </div>
        <DeveloperVisual profile={profile} />
      </div>
      <div className="container hero-foundation">
        <p>
          <CircleCheck size={16} aria-hidden="true" /> Thoughtful interfaces.
          Reliable systems.
        </p>
        <span>
          {profile.currentStack.map((tech, index) => (
            <Fragment key={tech}>
              {index > 0 && <span className="stack-slash">/</span>}
              {tech.toUpperCase()}
            </Fragment>
          ))}
        </span>
        <a href="#about" className="scroll-hint">
          <span className="scroll-line" aria-hidden="true" />
          Scroll to explore
        </a>
      </div>
    </section>
  );
}
