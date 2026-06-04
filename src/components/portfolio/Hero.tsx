import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitReveal from "./SplitReveal";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const stats = [
    { value: "P2", label: "Bug Bounty (EPAM)" },
    { value: "4+", label: "HTB Pro Lab Certs" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headingRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(subRef.current, {
        yPercent: -60,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center section-padding pt-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <div ref={headingRef} className="mb-12">
          <p className="text-muted-foreground text-xs uppercase tracking-[0.4em] mb-6">
            [ Kolkata / IN — Available 2026 ]
          </p>
          <SplitReveal
            as="h1"
            type="chars"
            stagger={0.018}
            className="font-display text-[18vw] md:text-[14vw] lg:text-[12vw] font-bold text-foreground leading-[0.85] tracking-tight"
          >
            DEBJIT
          </SplitReveal>
          <SplitReveal
            as="h1"
            type="chars"
            stagger={0.018}
            delay={0.1}
            className="font-display text-[18vw] md:text-[14vw] lg:text-[12vw] font-bold text-muted-foreground/70 leading-[0.85] tracking-tight italic"
          >
            NASKAR.
          </SplitReveal>
        </div>

        {/* Role & Description */}
        <div ref={subRef} className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Cybersecurity Engineer & Ethical Hacker focused on{" "}
              <span className="text-foreground">Application Security</span>,{" "}
              <span className="text-foreground">API Security</span>, and{" "}
              <span className="text-foreground">Network Security</span>.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-12 md:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-right">
                <p className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <Magnetic strength={0.5}>
          <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }} data-cursor="hover">
            <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center animate-bounce">
              <ArrowDown size={20} className="text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground uppercase tracking-widest">Scroll</span>
          </div>
        </Magnetic>
      </div>
    </section>
  );
};

export default Hero;
