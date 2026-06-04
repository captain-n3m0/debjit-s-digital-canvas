import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "Application Security",
  "API Penetration Testing",
  "OWASP Top 10",
  "Access Control",
  "Authentication Testing",
  "Business Logic Bugs",
  "JWT Security",
  "SSRF",
  "IDOR",
  "XSS",
  "SQL Injection",
  "Threat Analysis",
  "Secure Code Review",
  "Bug Bounty",
  "Responsible Disclosure",
  "ISO/IEC 27001",
  "Secure Coding",
  "Network Security",
  "Reconnaissance",
  "Privilege Escalation",
  "Active Directory",
  "Linux Hardening",
  "Burp Suite",
  "Nmap",
  "Wireshark",
  "Metasploit",
  "Hack The Box",
  "HTB Pro Labs",
  "Security Research",
  "SDR",
  "Optical ISL",
  "Satellite Networks",
  "Control Planes",
];

const Marquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const contentWidth = track.scrollWidth / 2;
    const tween = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -contentWidth,
        duration: contentWidth / 90,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (value) => `${parseFloat(value) % contentWidth}px`,
        },
      }
    );

    // Scroll-velocity skew
    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const v = gsap.utils.clamp(-2, 2, self.getVelocity() / 800);
        gsap.to(track, { skewX: v, duration: 0.4, overwrite: true });
        gsap.to(tween, {
          timeScale: 1 + Math.abs(self.getVelocity()) / 3500,
          duration: 0.25,
          overwrite: true,
        });
      },
    });

    return () => {
      tween.kill();
      st.kill();
    };
  }, []);

  const row = [...items, ...items];

  return (
    <section className="border-y border-border py-8 overflow-hidden bg-background/40 backdrop-blur-sm">
      <div ref={trackRef} className="flex w-max gap-10 whitespace-nowrap will-change-transform">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-normal text-foreground/90"
          >
            {t}
            <span className="text-muted-foreground mx-12">/</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
