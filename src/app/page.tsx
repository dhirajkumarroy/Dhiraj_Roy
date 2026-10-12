import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Reveal } from "@/components/reveal";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { TechMarquee } from "@/components/tech-marquee";
import { WorkProcess } from "@/components/work-process";
import { isConfiguredLink } from "@/lib/format";
import { siteConfig } from "@/lib/site";
import { getPortfolioContent } from "@/services/portfolio";

export default async function Home() {
  const content = await getPortfolioContent();
  const { profile } = content;
  const personId = `${siteConfig.url}/#person`;
  const projectListId = `${siteConfig.url}/#projects`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "en-IN",
        mainEntity: { "@id": personId },
        hasPart: { "@id": projectListId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: siteConfig.url,
        jobTitle: profile.role,
        description: profile.summary,
        email: profile.contact.email,
        telephone: profile.contact.phone,
        address: {
          "@type": "PostalAddress",
          addressRegion: "Punjab",
          addressCountry: "IN",
        },
        worksFor: { "@type": "Organization", name: profile.company },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Bachelor's degree",
          name: profile.education,
        },
        knowsAbout: content.skills.flatMap((group) =>
          group.skills.map(({ name }) => name),
        ),
        sameAs: profile.socials
          .filter(
            ({ platform, href }) =>
              ["github", "linkedin"].includes(platform) &&
              isConfiguredLink(href),
          )
          .map(({ href }) => href),
      },
      {
        "@type": "ItemList",
        "@id": projectListId,
        name: `${profile.name}'s selected projects`,
        numberOfItems: content.projects.length,
        itemListElement: content.projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.nativeTitle
              ? `${project.nativeTitle.text} — ${project.title}`
              : project.title,
            description: project.description,
            keywords: project.technologies.join(", "),
            ...(isConfiguredLink(project.demoUrl)
              ? { url: project.demoUrl }
              : {}),
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar name={profile.name} />
      <main id="main-content" tabIndex={-1}>
        <Hero profile={profile} />
        <TechMarquee
          technologies={content.skills.flatMap(({ skills }) => skills)}
        />
        <Reveal>
          <About profile={profile} />
        </Reveal>
        <Reveal>
          <Skills groups={content.skills} learning={content.learning} />
        </Reveal>
        <Reveal>
          <ExperienceTimeline experience={content.experience} />
        </Reveal>
        <Projects projects={content.projects} />
        <Reveal>
          <Services services={content.services} />
        </Reveal>
        <Reveal>
          <WorkProcess steps={content.process} />
        </Reveal>
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
