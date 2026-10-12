import { Building2, Check, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { formatMonth } from "@/lib/format";
import type { Experience } from "@/types/portfolio";

export function ExperienceTimeline({
  experience,
}: {
  experience: Experience[];
}) {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <SectionHeading
          id="experience-heading"
          number="03"
          eyebrow="Learning by building"
          title="Professional Experience."
          description="Real requirements. Real applications. A growing foundation in full-stack development."
        />
        <ol className="experience-timeline">
          {experience.map((job) => (
            <li className="experience-item" key={job.id}>
              <div className="experience-meta">
                <span className="timeline-node" aria-hidden="true" />
                <p>
                  {formatMonth(job.startDate)} —{" "}
                  {job.endDate ? formatMonth(job.endDate) : "Present"}
                </p>
                {!job.endDate && (
                  <span className="current-label">Current position</span>
                )}
                <span className="experience-location">
                  <MapPin size={15} aria-hidden="true" />
                  {job.location}
                </span>
              </div>
              <div className="experience-body">
                <div className="experience-title">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <span className="company-icon">
                    <Building2 size={25} aria-hidden="true" />
                  </span>
                </div>
                <p className="experience-description">{job.description}</p>
                <ul className="responsibility-list">
                  {job.responsibilities.map((item) => (
                    <li key={item}>
                      <Check size={17} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {job.phases?.length ? (
                  <ol
                    className="experience-phases"
                    aria-label="Technology history at this company"
                  >
                    {job.phases.map((phase) => (
                      <li key={phase.id}>
                        <div className="experience-phase-heading">
                          <h4>{phase.title}</h4>
                          <p>
                            {formatMonth(phase.startDate)} —{" "}
                            {phase.endDate
                              ? formatMonth(phase.endDate)
                              : "Present"}
                          </p>
                        </div>
                        <ul
                          className="tags"
                          aria-label={`${phase.title} technologies`}
                        >
                          {phase.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="tags" aria-label="Technologies used">
                    {job.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
