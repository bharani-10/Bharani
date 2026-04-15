import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImg from "@/assets/portfolioimg.jpeg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 flex justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-primary/40 shadow-lg shadow-primary/20">
              <img src={profileImg} alt="Bharani R" className="w-full h-full object-cover object-[50%_30%] scale-110" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-4 tracking-tight">
            <span className="gradient-text">Bharani R</span>
          </h1>
          <div className="code-font text-lg sm:text-xl text-muted-foreground mb-6">
            <span className="text-primary">ML Engineer</span>
            <span className="text-border mx-3">|</span>
            <span className="text-accent">GenAI Enthusiast</span>
            <span className="text-border mx-3">|</span>
            <span className="text-neon-cyan">Backend Developer</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
            Building intelligent systems with AI and scalable backend solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <a
            href="/Bharani_R_Resume.pdf"
            download
            className="px-6 py-3 glass border-primary/30 text-primary font-medium flex items-center gap-2 hover:bg-primary/10 transition-all hover:-translate-y-0.5"
          >
            <Download size={16} /> Download Resume
          </a>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 glass border-accent/30 text-accent font-medium flex items-center gap-2 hover:bg-accent/10 transition-all hover:-translate-y-0.5"
          >
            <Mail size={16} /> Contact Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={20} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
