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
  return (
    <section className="border-y border-border py-8 overflow-hidden bg-background/40 backdrop-blur-sm">
      <div className="marquee-track flex w-max whitespace-nowrap will-change-transform">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center gap-10 pr-10">
            {items.map((t) => (
              <span
                key={`${group}-${t}`}
                className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-normal text-foreground/90"
              >
                {t}
                <span className="text-muted-foreground mx-12">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
