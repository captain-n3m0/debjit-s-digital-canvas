import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const syncPointer = () => setEnabled(pointerQuery.matches);

    syncPointer();
    pointerQuery.addEventListener("change", syncPointer);

    return () => {
      pointerQuery.removeEventListener("change", syncPointer);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { x: pos.x, y: pos.y };

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      gsap.to(dot, { x: pos.x, y: pos.y, duration: 0.15, ease: "power3.out" });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='hover']")) {
        gsap.to(ring, { scale: 2.2, opacity: 0.6, duration: 0.3 });
      } else {
        gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3 });
      }
    };

    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.12;
      ringPos.y += (pos.y - ringPos.y) * 0.12;
      gsap.set(ring, { x: ringPos.x, y: ringPos.y });
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.classList.add("custom-cursor-active");
    document.body.style.cursor = "none";

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("custom-cursor-active");
      document.body.style.cursor = "";
    };
  }, [enabled]);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[100] ${enabled ? "block" : "hidden"}`}
        style={{
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          border: "1px solid hsl(var(--foreground))",
          borderRadius: "9999px",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[100] ${enabled ? "block" : "hidden"}`}
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          background: "hsl(var(--foreground))",
          borderRadius: "9999px",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
};

export default CustomCursor;
