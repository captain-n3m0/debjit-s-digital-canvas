import { useEffect, useRef, ElementType, Ref } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: string;
  as?: ElementType;
  className?: string;
  type?: "chars" | "words" | "lines";
  delay?: number;
  stagger?: number;
}

const SplitReveal = ({
  children,
  as: Tag = "div",
  className,
  type = "chars",
  delay = 0,
  stagger = 0.025,
}: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const split = new SplitType(el, { types: type === "lines" ? "lines" : type });
    const targets =
      type === "chars" ? split.chars : type === "words" ? split.words : split.lines;
    if (!targets) return;

    gsap.set(targets, { yPercent: 110, opacity: 0 });

    const tween = gsap.to(targets, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "expo.out",
      stagger,
      delay,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      split.revert();
    };
  }, [children, type, delay, stagger]);

  return (
    <Tag ref={ref as Ref<HTMLElement>} className={className} style={{ overflow: "hidden" }}>
      {children}
    </Tag>
  );
};

export default SplitReveal;
