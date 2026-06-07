import { ShieldCheck, Bug, Network, Code2, FileSearch, Lock, BookOpen, Globe2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitReveal from "./SplitReveal";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Application Security",
      description: "Web application security assessments aligned with OWASP Top 10 and secure coding best practices.",
    },
    {
      icon: Code2,
      title: "API Security",
      description: "API penetration testing and threat modeling for REST APIs, covering auth, access control, and data exposure.",
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Reconnaissance, enumeration, and network-level vulnerability assessment using Nmap, Wireshark, and Burp Suite.",
    },
    {
      icon: Globe2,
      title: "Fullstack Web Development",
      description: "Responsive web applications with clean interfaces, backend integrations, API flows, and deployment-ready implementation.",
    },
    {
      icon: Bug,
      title: "Vulnerability Research",
      description: "Bug bounty and vulnerability research with reproducible PoCs, impact analysis, and responsible disclosure.",
    },
    {
      icon: FileSearch,
      title: "Threat Analysis & Triage",
      description: "Risk assessment, threat analysis, and incident response support with clear, business-aware triage reports.",
    },
    {
      icon: Lock,
      title: "Secure Coding & Review",
      description: "Secure code review and remediation guidance grounded in Linux Foundation LFD121 and ISO/IEC 27001 principles.",
    },
    {
      icon: BookOpen,
      title: "Security Research & Writing",
      description: "Technical literature review, peer-reviewed publication work, and structured security documentation.",
    },
  ];

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-service-card]");
      gsap.from(cards, {
        opacity: 0,
        duration: 0.45,
        ease: "expo.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="section-anchor section-padding bg-card/70 backdrop-blur-md relative">
      <div className="content-shell">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4 animate-fade-in">
            What I Do
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.08}
            className="section-heading"
          >
            Security & Fullstack Capabilities
          </SplitReveal>
        </div>

        {/* Capability Map */}
        <div ref={gridRef} className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />
          <div className="space-y-5">
            {services.map((service, index) => (
              <article
                key={service.title}
                data-service-card
                data-cursor="hover"
                className="group relative grid gap-4 border-b border-border/70 pb-6 transition-colors duration-300 last:border-b-0 sm:gap-5 md:grid-cols-[72px_minmax(0,0.9fr)_minmax(180px,0.55fr)] md:items-start md:gap-8 md:pl-0 lg:grid-cols-[80px_minmax(0,0.9fr)_minmax(220px,0.55fr)]"
              >
                <div className="relative flex items-center gap-4 md:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-colors duration-300 group-hover:border-muted-foreground/50 group-hover:bg-card">
                    <service.icon
                      size={22}
                      className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                    />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground md:absolute md:left-0 md:top-16">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-foreground transition-colors duration-300 group-hover:text-muted-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="hidden h-full items-center md:flex">
                  <div className="h-px flex-1 bg-border/70 transition-colors duration-300 group-hover:bg-muted-foreground/40" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
