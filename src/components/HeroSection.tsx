import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profileImg from "@/assets/portfolioimg.jpeg";

const ROLES = ["ML Engineer", "GenAI Enthusiast", "Backend Developer", "AI Builder"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), { stiffness: 80, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), { stiffness: 80, damping: 25 });

  // Typewriter effect
  useEffect(() => {
    const role = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Ambient orbs */}
      <div className="floating-orb w-[500px] h-[500px] bg-primary/10 top-1/4 -left-48" style={{ animationDuration: "10s" }} />
      <div className="floating-orb w-[400px] h-[400px] bg-accent/10 bottom-1/4 -right-32" style={{ animationDuration: "13s", animationDelay: "2s" }} />
      <div className="floating-orb w-[300px] h-[300px]" style={{ background: "hsl(180 100% 55% / 0.06)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDuration: "7s", animationDelay: "1s", position: "absolute", borderRadius: "50%", filter: "blur(80px)" }} />

      {/* Rotating rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-primary/5 absolute -translate-x-1/2 -translate-y-1/2" style={{ animation: "spin 30s linear infinite" }} />
        <div className="w-[900px] h-[900px] rounded-full border border-accent/4 absolute -translate-x-1/2 -translate-y-1/2" style={{ animation: "spin 50s linear infinite reverse" }} />
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${1 + (i % 3)}px`,
            height: `${1 + (i % 3)}px`,
            left: `${(i * 7) % 100}%`,
            background: i % 3 === 0 ? "hsl(195 100% 50%)" : i % 3 === 1 ? "hsl(280 80% 60%)" : "hsl(180 100% 55%)",
            animation: `particle-float ${8 + (i * 1.3) % 10}s linear ${(i * 0.7) % 6}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* 3D Profile */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/40" style={{ animation: "pulse-ring 2.5s ease-out infinite" }} />
            <div className="absolute inset-0 rounded-full border-2 border-accent/30" style={{ animation: "pulse-ring 2.5s ease-out 0.8s infinite" }} />

            <div
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden relative"
              style={{
                border: "2px solid transparent",
                background: "linear-gradient(hsl(230 25% 6%), hsl(230 25% 6%)) padding-box, linear-gradient(135deg, hsl(195 100% 50%), hsl(280 80% 60%)) border-box",
                boxShadow: "0 0 30px hsl(195 100% 50% / 0.3), 0 0 80px hsl(280 80% 60% / 0.15)",
              }}
            >
              <img src={profileImg} alt="Bharani R" className="w-full h-full object-cover object-[50%_30%] scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>

            {/* Orbiting dot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-3 h-3 rounded-full bg-primary"
                style={{
                  boxShadow: "0 0 10px hsl(195 100% 50%)",
                  animation: "orbit 8s linear infinite",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="orbitron text-5xl sm:text-7xl lg:text-8xl font-black mb-4 tracking-tight leading-none gradient-text"
        >
          Bharani R
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="code-font text-xl sm:text-2xl mb-6 h-8 flex items-center justify-center gap-2"
        >
          <Sparkles size={18} className="text-primary animate-pulse" />
          <span style={{ color: "hsl(195 100% 60%)" }}>{displayed}</span>
          <span
            className="w-0.5 h-6 bg-primary inline-block"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg mb-10 leading-relaxed"
        >
          Building intelligent systems with AI and scalable backend solutions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="relative px-8 py-3.5 font-bold rounded-xl overflow-hidden group text-black"
            style={{
              background: "linear-gradient(135deg, hsl(195 100% 50%), hsl(280 80% 60%))",
              boxShadow: "0 0 20px hsl(195 100% 50% / 0.4), 0 0 60px hsl(195 100% 50% / 0.1)",
            }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
          </button>

          <a
            href="/Bharani_R_Resume.pdf"
            download
            className="px-8 py-3.5 glass font-medium flex items-center gap-2 transition-all hover:-translate-y-1 group rounded-xl"
            style={{ border: "1px solid hsl(195 100% 50% / 0.3)", color: "hsl(195 100% 60%)" }}
          >
            <Download size={16} className="group-hover:animate-bounce" />
            Download Resume
          </a>

          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 glass font-medium flex items-center gap-2 transition-all hover:-translate-y-1 group rounded-xl"
            style={{ border: "1px solid hsl(280 80% 60% / 0.3)", color: "hsl(280 80% 70%)" }}
          >
            <Mail size={16} className="group-hover:scale-110 transition-transform" />
            Contact Me
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="code-font text-xs text-muted-foreground tracking-widest">SCROLL</span>
          <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-primary" style={{ animation: "float 1.5s ease-in-out infinite" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
