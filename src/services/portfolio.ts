import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups, currentlyLearning } from "@/data/skills";
import { experiences } from "@/data/experience";
import { services, processSteps } from "@/data/services";
import type { PortfolioContent } from "@/types/portfolio";

// The page consumes this repository boundary, rather than importing each data
// file. Replace this implementation with a typed CMS/API adapter when needed.
export async function getPortfolioContent(): Promise<PortfolioContent> {
  return {
    profile,
    projects,
    skills: skillGroups,
    learning: currentlyLearning,
    experience: experiences,
    services,
    process: processSteps,
  };
}
