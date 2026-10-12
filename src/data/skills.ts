import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces people enjoy using.",
    skills: [
      { name: "Next.js", abbreviation: "N" },
      { name: "React", abbreviation: "Re" },
      { name: "JavaScript", abbreviation: "JS" },
      { name: "TypeScript", abbreviation: "TS" },
      { name: "HTML5", abbreviation: "H5" },
      { name: "CSS3", abbreviation: "C3" },
      { name: "Tailwind CSS", abbreviation: "Tw" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "The logic behind the experience.",
    skills: [
      { name: "Python", abbreviation: "Py" },
      { name: "FastAPI", abbreviation: "FA" },
      { name: "Laravel", abbreviation: "La" },
      { name: "PHP", abbreviation: "PHP" },
      { name: "REST APIs", abbreviation: "API" },
    ],
  },
  {
    id: "database",
    label: "Database",
    description: "Structured data, dependable foundations.",
    skills: [
      { name: "Apache Doris", abbreviation: "Do" },
      { name: "MySQL", abbreviation: "SQL" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    description: "A considered development workflow.",
    skills: [
      { name: "Git", abbreviation: "Git" },
      { name: "GitHub", abbreviation: "GH" },
      { name: "Postman", abbreviation: "Po" },
      { name: "VS Code", abbreviation: "VS" },
    ],
  },
];

export const currentlyLearning = [
  "Advanced Next.js",
  "Backend Architecture",
  "API Design",
  "System Design",
];
