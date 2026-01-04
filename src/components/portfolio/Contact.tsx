import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Have a project in mind or want to discuss a potential collaboration? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href="mailto:debjitnaskar@icloud.com"
              className="group flex items-center justify-between p-6 bg-background border border-border rounded-lg hover:border-muted-foreground/30 transition-all duration-300 hover-lift"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                  <p className="font-display text-lg text-foreground">debjitnaskar@icloud.com</p>
                </div>
              </div>
              <ArrowUpRight 
                size={24} 
                className="text-muted-foreground group-hover:text-foreground transition-colors duration-300" 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
