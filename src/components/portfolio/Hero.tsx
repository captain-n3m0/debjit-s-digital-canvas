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
    { value: "2", label: "Live Web Projects" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
      gsap.to(headingRef.current, {
        yPercent: isSmallScreen ? -8 : -25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(subRef.current, {
        yPercent: isSmallScreen ? -14 : -60,
        opacity: isSmallScreen ? 0.75 : 0.2,
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
      className="section-anchor relative flex min-h-[100svh] flex-col justify-center section-padding pt-28 sm:pt-32"
    >
      <div className="content-shell">
        <div ref={headingRef} className="mb-10 sm:mb-12">
          <p className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.4em] mb-5 sm:mb-6">
            [ Kolkata / IN — Available 2026 ]
          </p>
          <h1
            className="font-display text-5xl min-[380px]:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9rem] 2xl:text-[10rem] font-bold leading-[0.9]"
            aria-label="Debjit Naskar"
          >
            <SplitReveal
              as="span"
              type="chars"
              stagger={0.018}
              className="block text-foreground"
            >
              DEBJIT
            </SplitReveal>
            <SplitReveal
              as="span"
              type="chars"
              stagger={0.018}
              delay={0.1}
              className="block text-muted-foreground/70 italic"
            >
              NASKAR.
            </SplitReveal>
          </h1>
        </div>

        <div ref={subRef} className="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 items-end mb-12 sm:mb-16">
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Cybersecurity Engineer, Ethical Hacker, and{" "}
              <span className="text-foreground">Fullstack Web Developer</span>{" "}
              focused on{" "}
              <span className="text-foreground">Application Security</span>,{" "}
              <span className="text-foreground">API Security</span>, and{" "}
              <span className="text-foreground">Network Security</span>.
            </p>
          </div>

          <div
            className="grid grid-cols-3 gap-4 sm:gap-8 md:flex md:gap-10 lg:gap-12 md:justify-end animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0 text-left md:text-right">
                <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
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
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border flex items-center justify-center animate-bounce">
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
