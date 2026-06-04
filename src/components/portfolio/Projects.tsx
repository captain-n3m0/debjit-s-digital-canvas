import { ArrowUpRight } from "lucide-react";

const Projects = () => {
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
      title: "HTB Dante — Level 2",
      category: "Hack The Box · 2023",
      description: "Pro Lab certification covering practical network exploitation and post-exploitation techniques.",
      link: "https://www.hackthebox.com/",
      number: "03",
    },
    {
      title: "Survey of SDR & Optical Inter-Satellite Links",
      category: "CEAS Space Journal · 2026",
      description: "Co-authored peer-reviewed survey on SDR architectures and free-space optical links for satellite networks.",
      link: "https://www.springer.com/journal/12567",
      number: "04",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Highlights
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Achievements & Research
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-border py-8 md:py-12 hover:bg-card/50 transition-all duration-300 -mx-6 px-6 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start md:items-center gap-6 md:gap-12">
                  <span className="text-muted-foreground text-sm font-mono">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 md:hidden">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <span className="hidden md:block text-muted-foreground text-sm">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
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
