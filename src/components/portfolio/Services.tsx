import { ShieldCheck, Bug, Network, Code2, FileSearch, Lock, BookOpen } from "lucide-react";
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
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4 animate-fade-in">
            What I Do
          </p>
          <SplitReveal
            as="h2"
            type="words"
            stagger={0.08}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
          >
            Services & Capabilities
          </SplitReveal>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-service-card
              data-cursor="hover"
              className="group p-8 bg-background border border-border rounded-lg hover-lift hover:border-muted-foreground/30 transition-all duration-300"
            >
              <service.icon
                size={32}
                className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300"
              />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
