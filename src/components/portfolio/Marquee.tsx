import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "Application Security",
  "API Penetration Testing",
  "OWASP Top 10",
  "Threat Analysis",
  "Bug Bounty",
  "ISO/IEC 27001",
  "Secure Coding",
  "Network Security",
  "Reconnaissance",
  "Burp Suite",
  "Hack The Box",
];

const Marquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    // Scroll-velocity skew
    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        const v = gsap.utils.clamp(-2, 2, self.getVelocity() / 800);
        gsap.to(track, { skewX: v, duration: 0.4, overwrite: true });
        tween.timeScale(1 + Math.abs(self.getVelocity()) / 4000);
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
      <div ref={trackRef} className="flex gap-12 whitespace-nowrap will-change-transform">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground/90"
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