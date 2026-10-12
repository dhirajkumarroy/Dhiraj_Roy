import { Braces, Database, Layers3, Sparkles, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { TechnologyIcon } from "@/components/technology-icon";
import type { SkillGroup } from "@/types/portfolio";

const groupIcons = {
  frontend: Layers3,
  backend: Braces,
  database: Database,
  tools: Wrench,
};

export function Skills({
  groups,
  learning,
}: {
  groups: SkillGroup[];
  learning: string[];
}) {
  return (
    <section
      id="skills"
      className="section section-tinted"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <SectionHeading
          id="skills-heading"
          number="02"
          eyebrow="Tools of the trade"
          title="Tech Stack."
          description="The technologies I use to bring an application together, from the first component to the last API call."
        />
        <div className="skills-grid">
          {groups.map((group) => {
            const Icon = groupIcons[group.id];
            return (
              <div className="skill-group" key={group.id}>
                <div className="skill-group-heading">
                  <Icon size={22} aria-hidden="true" />
                  <h3>{group.label}</h3>
                </div>
                <p>{group.description}</p>
                <ul className="technology-list">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <span className="tech-icon-badge" aria-hidden="true">
                        <TechnologyIcon name={skill.name} />
                      </span>
                      <span className="skill-name">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="learning-strip">
          <p>
            <Sparkles size={17} aria-hidden="true" />
            Currently learning
          </p>
          <ul>
            {learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
