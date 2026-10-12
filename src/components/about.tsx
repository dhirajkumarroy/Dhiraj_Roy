import { BriefcaseBusiness, Code2, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { completedMonthsSince } from "@/lib/format";
import type { Profile } from "@/types/portfolio";

export function About({ profile }: { profile: Profile }) {
  const months = completedMonthsSince(profile.startDate);

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading
          id="about-heading"
          number="01"
          eyebrow="The person behind the code"
          title="About Me."
        />
        <div className="about-grid">
          <div className="about-copy">
            {profile.about.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "about-lead" : undefined}
              >
                {paragraph}
              </p>
            ))}
            <p className="about-signoff">
              <span className="signature">{profile.name.split(" ")[0]}.</span>
              <span>Curious by nature. Developer by choice.</span>
            </p>
          </div>
          <dl className="about-facts">
            <div className="fact fact-wide">
              <dt>
                <BriefcaseBusiness aria-hidden="true" size={20} />
                Current role
              </dt>
              <dd>
                {profile.role}
                <span className="fact-secondary">{profile.company}</span>
              </dd>
            </div>
            <div className="fact">
              <dt>
                <Code2 aria-hidden="true" size={20} />
                Professional experience
              </dt>
              <dd>
                <span className="fact-number">{months}+</span> months
              </dd>
            </div>
            <div className="fact">
              <dt>
                <MapPin aria-hidden="true" size={20} />
                Based in
              </dt>
              <dd>{profile.contact.location}</dd>
            </div>
            <div className="fact fact-wide">
              <dt>
                <GraduationCap aria-hidden="true" size={20} />
                Education
              </dt>
              <dd>{profile.education}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
