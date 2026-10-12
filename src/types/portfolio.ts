export type SocialPlatform = "email" | "whatsapp" | "github" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsappUrl: string;
  location: string;
}

export interface Profile {
  name: string;
  initials: string;
  role: string;
  roles: string[];
  company: string;
  startDate: string;
  currentStack: string[];
  education: string;
  available: boolean;
  availabilityLabel: string;
  summary: string;
  about: string[];
  contact: ContactInfo;
  socials: SocialLink[];
}

export interface Skill {
  name: string;
  abbreviation: string;
}

export interface SkillGroup {
  id: "frontend" | "backend" | "database" | "tools";
  label: string;
  description: string;
  skills: Skill[];
}

export interface ExperiencePhase {
  id: string;
  title: string;
  startDate: string;
  endDate: string | null;
  technologies: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  phases?: ExperiencePhase[];
}

export type ProjectVisual =
  | "dashboard"
  | "commerce"
  | "blog"
  | "community"
  | "heritage"
  | "whatsapp";

export interface Project {
  id: string;
  number: string;
  title: string;
  nativeTitle?: { text: string; lang: string };
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  demoUrl: string;
  demoLabel?: string;
  sourceUrl: string;
  featured: boolean;
  placeholder: boolean;
  visual: ProjectVisual;
}

export interface Service {
  id: "frontend" | "fullstack" | "backend" | "improvements";
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type ContactResult = { status: "sent"; message: string };

export interface PortfolioContent {
  profile: Profile;
  skills: SkillGroup[];
  learning: string[];
  experience: Experience[];
  projects: Project[];
  services: Service[];
  process: ProcessStep[];
}
