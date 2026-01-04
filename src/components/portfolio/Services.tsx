import { Paintbrush, Code, Layout, Smartphone, Layers, FileCode, Monitor } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Web Design",
      description: "Creating visually stunning and user-centric website designs that captivate audiences.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building robust, scalable web applications with clean and maintainable code.",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces and seamless user experiences that drive engagement.",
    },
    {
      icon: Smartphone,
      title: "Frontend Development",
      description: "Crafting responsive and interactive frontend experiences with modern technologies.",
    },
    {
      icon: Layers,
      title: "React/Next.js Development",
      description: "Specialized development using React and Next.js for high-performance applications.",
    },
    {
      icon: FileCode,
      title: "Figma to Code",
      description: "Pixel-perfect conversion of Figma designs into fully functional web applications.",
    },
    {
      icon: Monitor,
      title: "Responsive Design",
      description: "Ensuring your website looks and works flawlessly across all devices and screen sizes.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4 animate-fade-in">
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-background border border-border rounded-lg hover-lift hover:border-muted-foreground/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
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
