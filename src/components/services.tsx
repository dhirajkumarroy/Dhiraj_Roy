import { Code2, Layers3, Server, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { Service } from "@/types/portfolio";

const serviceIcons = {
  frontend: Code2,
  fullstack: Layers3,
  backend: Server,
  improvements: Wrench,
};

export function Services({ services }: { services: Service[] }) {
  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <SectionHeading
          id="services-heading"
          number="05"
          eyebrow="Where I can help"
          title="What I Can Build."
          description="A new idea, an existing application or a feature that needs attention. Let's make it work."
        />
        <div className="services-grid">
          {services.map((service) => {
            const Icon = serviceIcons[service.id];
            return (
              <article className="service-card" key={service.id}>
                <div className="service-card-top">
                  <span className="service-icon">
                    <Icon size={25} aria-hidden="true" />
                  </span>
                  <span className="service-number">/{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
