import { ArrowUpRight, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitReveal from "./SplitReveal";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const researchPaper = {
    title: "Survey of Software-Defined Radio and Optical Communication Techniques for Inter-Satellite Links",
    category: "CEAS Space Journal · 2026",
    authors: "Debjit Naskar, Ritabhasa Chowdhury",
    published: "Published February 3, 2026",
    doi: "10.1007/s12567-025-00695-8",
    link: "https://rdcu.be/e1358",
    description:
      "Co-authored a published survey on SDR architectures and free-space optical inter-satellite links for next-generation satellite networks.",
    summary:
      "Synthesized system design considerations including modulation and coding, pointing/acquisition/tracking, RF-optical integration patterns, routing implications, and resilient satellite communication control planes.",
    points: [
      "SDR architectures for spaceborne radios",
      "Optical terminal design and PAT mechanisms",
      "RF-optical integration and routing trade-offs",
      "Resilient satellite communication control planes",
    ],
  };

  const projects = [
    {
      title: "EPAM Systems Managed Bug Bounty",
      category: "P2 · $600 · Bugcrowd",
      description: "Reported a P2-priority vulnerability with reproducible PoC, exploitability reasoning, and business-risk framing.",
      link: "https://bugcrowd.com/",
      number: "01",
    },
    {
      title: "HTB Pro Labs — APTLabs, RastaLabs, Cybernetics",
      category: "Hack The Box · 2024",
      description: "Multi-host enumeration, exploitation paths, privilege escalation, and remediation-oriented reporting.",
      link: "https://www.hackthebox.com/",
      number: "02",
    },
    {
      title: researchPaper.title,
      category: researchPaper.category,
      description: `${researchPaper.description} ${researchPaper.summary}`,
      link: researchPaper.link,
      number: "03",
      research: true,
    },
    {
      title: "HTB Dante — Level 2",
      category: "Hack The Box · 2023",
      description: "Pro Lab certification covering practical network exploitation and post-exploitation techniques.",
      link: "https://www.hackthebox.com/",
      number: "04",
    },
  ];

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>("[data-project-row]");
      const rowContent = gsap.utils.toArray<HTMLElement>("[data-project-content]");

      const activateRow = (activeIndex: number) => {
        rows.forEach((row, index) => {
          row.dataset.active = String(index === activeIndex);
          gsap.to(row, {
            opacity: index === activeIndex ? 1 : 0.86,
            scale: index === activeIndex ? 1 : 0.985,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        });
      };

      gsap.set(rows, { opacity: 0.86, scale: 0.985 });
      activateRow(0);

      rows.forEach((row, index) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 58%",
          end: "bottom 42%",
          onEnter: () => activateRow(index),
          onEnterBack: () => activateRow(index),
        });
      });

      rowContent.forEach((content, index) => {
        gsap.fromTo(
          content,
          { y: index % 2 === 0 ? 24 : 16 },
          {
            y: index % 2 === 0 ? -24 : -16,
            ease: "none",
            scrollTrigger: {
              trigger: rows[index],
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="section-anchor section-padding pb-28 md:pb-36">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Highlights
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.08}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
          >
            Achievements & Research
          </SplitReveal>
        </div>

        {/* Projects List */}
        <div ref={listRef} className="space-y-5 md:space-y-6 pb-24">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-project-row
              data-active={index === 0}
              data-cursor="hover"
              className={`group block rounded-lg border border-border/80 px-5 py-8 transition-all duration-300 data-[active=true]:border-muted-foreground/35 data-[active=true]:bg-card/85 data-[active=true]:shadow-[0_24px_90px_rgba(74,222,128,0.08)] sm:px-6 md:py-10 ${
                project.research ? "bg-card/45" : "bg-background/20"
              }`}
            >
              <div
                data-project-content
                className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-10"
              >
                <div className="flex min-w-0 items-start gap-5 md:gap-12">
                  <span className="text-muted-foreground/90 text-sm font-mono group-data-[active=true]:text-foreground">
                    {project.number}
                  </span>
                  <div className="min-w-0">
                    {project.research && (
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground/90 group-data-[active=true]:text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <FileText size={16} />
                          Published Research
                        </span>
                        <span>{researchPaper.published}</span>
                      </div>
                    )}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/80 transition-colors duration-300 group-hover:text-foreground group-data-[active=true]:text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 md:hidden">
                      {project.category}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground/85 leading-relaxed group-data-[active=true]:text-muted-foreground">
                      {project.description}
                    </p>

                    {project.research && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {researchPaper.points.map((point) => (
                          <span
                            key={point}
                            className="rounded-md border border-border bg-background/70 px-3 py-2 text-xs text-muted-foreground/90"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-between gap-6 pl-10 md:pl-0 md:pt-2 md:justify-end">
                  <span className="hidden md:block text-muted-foreground/85 text-sm text-right group-data-[active=true]:text-muted-foreground">
                    {project.research ? `DOI ${researchPaper.doi}` : project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground group-data-[active=true]:border-muted-foreground/60 transition-all duration-300">
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground group-hover:text-background transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
