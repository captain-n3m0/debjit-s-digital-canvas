const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-5 py-8 sm:px-6 md:px-10 lg:px-16 xl:px-24 border-t border-border">
      <div className="content-shell flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="font-display text-xl font-bold text-foreground">
          DN<span className="text-muted-foreground">.</span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {currentYear} Debjit Naskar. All rights reserved.
        </p>

        <p className="text-sm text-muted-foreground md:text-right">
          Cybersecurity Engineer · Ethical Hacker · Fullstack Web Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
