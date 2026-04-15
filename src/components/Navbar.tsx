import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["hero", "about", "skills", "projects", "experience", "certifications", "blog", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-[0_4px_30px_hsl(195_100%_50%/0.08)]"
          : "bg-transparent"
      }`}
    >
      {scrolled && <div className="glow-line absolute bottom-0 left-0 right-0 opacity-50" />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleClick("#hero")}
            className="orbitron text-lg font-bold flex items-center gap-2 group"
            aria-label="Scroll to top"
          >
            <Zap size={18} className="text-primary group-hover:animate-pulse" />
            <span className="gradient-text">Portfolio</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`relative px-3 py-2 text-sm transition-all duration-300 rounded-lg ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "linear-gradient(135deg, hsl(195 100% 50% / 0.1), hsl(280 80% 60% / 0.1))",
                        border: "1px solid hsl(195 100% 50% / 0.2)",
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
            <a
              href="/Bharani_R_Resume.pdf"
              download
              className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, hsl(195 100% 50% / 0.15), hsl(280 80% 60% / 0.15))",
                border: "1px solid hsl(195 100% 50% / 0.3)",
                color: "hsl(195 100% 65%)",
                boxShadow: "0 0 15px hsl(195 100% 50% / 0.1)",
              }}
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-2 rounded-lg glass"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-4 py-2.5 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="/Bharani_R_Resume.pdf"
                download
                className="block w-full text-left px-4 py-2.5 font-semibold rounded-lg"
                style={{ color: "hsl(195 100% 65%)" }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
