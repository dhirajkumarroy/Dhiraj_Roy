import { ExternalLink, GitFork, MessageCircle, Star } from "lucide-react";
import { ProjectPreview } from "@/components/project-preview";
import { isConfiguredLink } from "@/lib/format";
import type { Project } from "@/types/portfolio";

function ProjectLink({
  href,
  label,
  source = false,
}: {
  href: string;
  label?: string;
  source?: boolean;
}) {
  const linkLabel = source ? "Source Code" : (label ?? "View Project");
  const Icon = source
    ? GitFork
    : linkLabel === "Chat on WhatsApp"
      ? MessageCircle
      : ExternalLink;
  const content = (
    <>
      <Icon size={15} aria-hidden="true" />
      {linkLabel}
    </>
  );

  return isConfiguredLink(href) ? (
    <a
      className="project-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <span
      className="project-link unavailable"
      aria-disabled="true"
      title="Project link has not been added yet"
      aria-label={`${linkLabel}: link not available yet`}
    >
      {content}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project-card${project.featured ? " featured-project" : ""}${project.featured && !project.placeholder ? " featured-project-showcase" : ""}`}
    >
      <div className="project-image-wrap">
        <ProjectPreview visual={project.visual} />
        {project.featured && (
          <span className="featured-badge">
            <Star size={12} aria-hidden="true" />
            {project.placeholder ? "Featured concept" : "Featured project"}
          </span>
        )}
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="project-number">/{project.number}</span>
        </div>
        <h3>
          {project.nativeTitle && (
            <>
              <span lang={project.nativeTitle.lang}>
                {project.nativeTitle.text}
              </span>
              {" — "}
            </>
          )}
          {project.title}
        </h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Project technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <details className="project-features">
          <summary>
            {project.placeholder ? "Planned features" : "Key features"}
          </summary>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </details>
        <div className="project-links">
          <ProjectLink href={project.demoUrl} label={project.demoLabel} />
          <ProjectLink href={project.sourceUrl} source />
        </div>
        {project.placeholder && (
          <span className="project-placeholder-note">
            Project concept · Links coming soon
          </span>
        )}
      </div>
    </article>
  );
}
