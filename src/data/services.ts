import type { ProcessStep, Service } from "@/types/portfolio";

export const services: Service[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Development",
    description:
      "Modern, responsive websites and web application interfaces built with React and Next.js.",
    deliverables: [
      "Responsive interfaces",
      "Reusable components",
      "Accessible experiences",
    ],
  },
  {
    id: "fullstack",
    number: "02",
    title: "Full Stack Applications",
    description:
      "Complete web applications connecting thoughtful frontend interfaces with scalable backend systems.",
    deliverables: [
      "End-to-end workflows",
      "Admin dashboards",
      "Database integration",
    ],
  },
  {
    id: "backend",
    number: "03",
    title: "Backend & REST APIs",
    description:
      "Backend development with Python, FastAPI and Laravel, including APIs, authentication and database integration.",
    deliverables: ["REST API development", "Authentication", "Business logic"],
  },
  {
    id: "improvements",
    number: "04",
    title: "Website Improvements",
    description:
      "Bug fixes, responsive improvements, UI upgrades and new features for existing applications.",
    deliverables: [
      "Debugging & fixes",
      "UI refinements",
      "Feature implementation",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the requirements, the users and how the application should behave.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Map out components, APIs, data flow and a clear implementation structure.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop clean frontend and backend functionality with maintainable code.",
  },
  {
    number: "04",
    title: "Test & Improve",
    description:
      "Check responsiveness, functionality and edge cases. Refine the final experience.",
  },
];
