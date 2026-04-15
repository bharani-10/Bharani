import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 relative overflow-hidden">
      <div className="glow-line absolute top-0 left-0 right-0 opacity-40" />

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-primary" />
          <span className="orbitron text-sm font-bold gradient-text">Bharani R</span>
        </div>

        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} · Built with{" "}
          <span className="gradient-text-static font-semibold">React + Framer Motion</span>
          {" "}· Powered by{" "}
          <span className="gradient-text-static font-semibold">AI</span>
        </p>

        <div className="flex gap-4">
          {[
            { label: "GitHub", href: "https://github.com/bharani-10" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/bharani-r-70932b2b4/" },
            { label: "Email", href: "mailto:bharanir1010@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
