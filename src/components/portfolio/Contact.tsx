import { Mail, ArrowUpRight, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const links = [
    {
      icon: Mail,
      label: "Email me at",
      value: "debjitnaskar@icloud.com",
      href: "mailto:debjitnaskar@icloud.com",
    },
    {
      icon: Phone,
      label: "Call me at",
      value: "+91 82404 88126",
      href: "tel:+918240488126",
    },
    {
      icon: Linkedin,
      label: "Connect on",
      value: "linkedin.com/in/debjit-naskar",
      href: "https://linkedin.com/in/debjit-naskar",
    },
    {
      icon: Github,
      label: "Code on",
      value: "github.com/captain-n3m0",
      href: "https://github.com/captain-n3m0",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Let's Work Together
          </h2>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Open to security research collaborations, bug bounty engagements, and
              cybersecurity opportunities. Based in Kolkata, India.
            </p>
            <p className="text-sm text-muted-foreground">Kolkata, West Bengal, India</p>
          </div>

          <div className="space-y-4">
            {links.map((item, i) => (
              <a
                key={item.value}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between p-6 bg-background border border-border rounded-lg hover:border-muted-foreground/30 transition-all duration-300 hover-lift animate-fade-in"
                style={{ animationDelay: `${0.3 + i * 0.05}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <item.icon size={20} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-display text-lg text-foreground break-all">{item.value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={24}
                  className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
