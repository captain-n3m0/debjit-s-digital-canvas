import { ArrowDown } from "lucide-react";

const Hero = () => {
  const stats = [
    { value: "1+", label: "Years of Experience" },
    { value: "10+", label: "Projects Completed" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center section-padding pt-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <div className="mb-12">
          <p className="text-muted-foreground text-lg mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-[0.9] animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Debjit
            <br />
            <span className="text-muted-foreground">Naskar</span>
          </h1>
        </div>

        {/* Role & Description */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Web Designer & Developer crafting beautiful digital experiences with{" "}
              <span className="text-foreground">Next.js</span>,{" "}
              <span className="text-foreground">React.js</span>, and modern web technologies.
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
        <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center animate-bounce">
            <ArrowDown size={20} className="text-muted-foreground" />
          </div>
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
