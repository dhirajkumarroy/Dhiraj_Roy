import { SectionHeading } from "@/components/section-heading";
import type { ProcessStep } from "@/types/portfolio";

export function WorkProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <section
      id="process"
      className="section process-section"
      aria-labelledby="process-heading"
    >
      <div className="container">
        <SectionHeading
          id="process-heading"
          number="06"
          eyebrow="A clear path forward"
          title="How I Work."
          description="Good software starts with understanding the problem. Here's how I approach it."
        />
        <ol className="process-grid">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="process-number">
                {step.number}
                <span aria-hidden="true" />
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
