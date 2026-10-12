import type { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    id: "ppn-solutions",
    company: "PPN Solutions Pvt. Ltd.",
    role: "Full Stack Developer",
    startDate: "2026-05-01",
    endDate: null,
    location: "Punjab, India",
    description:
      "Developing full-stack applications at PPN Solutions since May 2026. My work moved from Laravel, React and MySQL through September to Python, FastAPI, Next.js and Apache Doris from October 2026.",
    responsibilities: [
      "Developing responsive Next.js interfaces and integrating them with REST APIs.",
      "Building backend functionality and APIs with Python and FastAPI.",
      "Working with Apache Doris for application data requirements.",
      "Debugging application issues and implementing new features.",
      "Improving existing functionality and UI through Git-based development workflows.",
    ],
    technologies: ["Python", "FastAPI", "Next.js", "Apache Doris"],
    phases: [
      {
        id: "python-nextjs",
        title: "Current stack",
        startDate: "2026-10-01",
        endDate: null,
        technologies: ["Python", "FastAPI", "Next.js", "Apache Doris"],
      },
      {
        id: "laravel-react",
        title: "Earlier stack",
        startDate: "2026-05-01",
        endDate: "2026-09-30",
        technologies: ["Laravel", "React", "MySQL"],
      },
    ],
  },
];
