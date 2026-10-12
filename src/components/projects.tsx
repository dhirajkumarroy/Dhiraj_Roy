import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Project } from "@/types/portfolio";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section
      id="projects"
      className="section section-tinted"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <SectionHeading
          id="projects-heading"
          number="04"
          eyebrow="Built with purpose"
          title="Selected Projects."
          description="Web, mobile and automation products that support learning, organize information and turn enquiries into actionable leads."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.06}
              className={
                project.featured && !project.placeholder
                  ? "featured-project-slot"
                  : undefined
              }
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
