"use client";

import { Code2, Pause, Play } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { TechnologyIcon } from "@/components/technology-icon";
import type { Skill } from "@/types/portfolio";

const subscribeHydration = () => () => {};
const clientHydrationSnapshot = () => true;
const serverHydrationSnapshot = () => false;

export function TechMarquee({ technologies }: { technologies: Skill[] }) {
  const hydrated = useSyncExternalStore(
    subscribeHydration,
    clientHydrationSnapshot,
    serverHydrationSnapshot,
  );
  const [paused, setPaused] = useState(false);
  const uniqueTechnologies = Array.from(
    new Map(
      technologies.map((technology) => [technology.name, technology]),
    ).values(),
  );

  return (
    <section
      className="tech-marquee"
      aria-labelledby="tech-marquee-heading"
      data-ready={hydrated}
      data-paused={paused}
    >
      <div className="container">
        <div className="tech-marquee-header">
          <h2 id="tech-marquee-heading">
            <Code2 size={18} aria-hidden="true" />
            Technologies I work with
          </h2>
          <button
            className="tech-marquee-control"
            type="button"
            disabled={!hydrated}
            aria-label={`${paused ? "Resume" : "Pause"} technology animation`}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? (
              <Play size={13} aria-hidden="true" />
            ) : (
              <Pause size={13} aria-hidden="true" />
            )}
            {paused ? "Resume" : "Pause"}
          </button>
        </div>
        <div
          className="tech-marquee-viewport"
          role="region"
          aria-label="Technology list"
          tabIndex={0}
        >
          <div className="tech-marquee-track">
            {[false, true].map((duplicate) => (
              <ul
                className="tech-marquee-group"
                key={String(duplicate)}
                aria-hidden={duplicate || undefined}
              >
                {uniqueTechnologies.map(({ name }) => (
                  <li className="tech-marquee-card" key={name}>
                    <span className="tech-icon-badge" aria-hidden="true">
                      <TechnologyIcon name={name} />
                    </span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
