import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ICNITY",
      category: "Web Design",
      description: "A clean and modern design system for digital products.",
      link: "https://www.figma.com/design/y6Xd0f3h9EgvkDiPPiPMJL/ICNITY?node-id=0-1&p=f",
      number: "01",
    },
    {
      title: "AiriBank",
      category: "UI/UX Design",
      description: "Modern banking application with intuitive user experience.",
      link: "https://www.figma.com/proto/Z6PVIslxIojgXXiX1hbWvg/AiriBank?node-id=54-21278&node-type=frame&viewport=-1058%2C1265%2C0.35&t=liShjID9FU4edsiJ-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=54%3A21278",
      number: "02",
    },
    {
      title: "Pro Fitness App",
      category: "Mobile App Design",
      description: "Fitness tracking application with engaging workout experiences.",
      link: "https://www.figma.com/proto/0mrzCbYlO1tm3H4iRwnyqO/Pro-Fitness-App?page-id=0%3A1&node-id=47-3935&node-type=frame&viewport=423%2C215%2C0.16&t=eokfsDl04ksdSYtO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A1404",
      number: "03",
    },
    {
      title: "WebYapar Management",
      category: "Dashboard Design",
      description: "Comprehensive management software with powerful features.",
      link: "https://www.figma.com/design/biabuwhNicHA7KN05roL5Z/WebYapar-Management-Software?node-id=0-1&p=f",
      number: "04",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Projects
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
