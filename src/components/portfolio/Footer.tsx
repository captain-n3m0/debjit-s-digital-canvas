const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-8 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl font-bold text-foreground">
          DN<span className="text-muted-foreground">.</span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {currentYear} Debjit Naskar. All rights reserved.
        </p>

        <p className="text-sm text-muted-foreground">
          Cybersecurity Engineer & Ethical Hacker
        </p>
      </div>
    </footer>
  );
};

export default Footer;
