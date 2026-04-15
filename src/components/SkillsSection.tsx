import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Machine Learning",
    icon: "🧠",
    color: "hsl(195 100% 50%)",
    glow: "hsl(195 100% 50% / 0.15)",
    border: "hsl(195 100% 50% / 0.25)",
    skills: ["Python", "Scikit-learn", "Pandas / NumPy", "Feature Engineering", "Model Evaluation", "Supervised Learning", "Unsupervised Learning"],
  },
  {
    title: "Generative AI",
    icon: "✨",
    color: "hsl(280 80% 65%)",
    glow: "hsl(280 80% 60% / 0.15)",
    border: "hsl(280 80% 60% / 0.25)",
    skills: ["LLMs / LLaMA", "LangChain", "RAG / FAISS", "Transformers / NLP", "Groq / SpeechT5", "Prompt Engineering"],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    color: "hsl(180 100% 55%)",
    glow: "hsl(180 100% 55% / 0.15)",
    border: "hsl(180 100% 55% / 0.25)",
    skills: ["Django", "FastAPI / Flask", "REST APIs", "SQL / MySQL", "Authentication (JWT)", "API Integration", "Database Design"],
  },
  {
    title: "Tools & Deployment",
    icon: "🚀",
    color: "hsl(320 100% 65%)",
    glow: "hsl(320 100% 65% / 0.15)",
    border: "hsl(320 100% 65% / 0.25)",
    skills: ["Git / GitHub", "Streamlit", "Render / Vercel", "Postman", "VS Code / Colab", "Google Colab"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="floating-orb w-80 h-80 bg-accent/8 bottom-0 left-0" style={{ animationDuration: "11s", animationDelay: "3s" }} />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Technical Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass neon-border-hover p-6 rounded-xl group"
              style={{
                border: `1px solid ${cat.border}`,
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-110 group-hover:rotate-12"
                  style={{ background: cat.glow, boxShadow: `0 0 20px ${cat.glow}` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg text-foreground orbitron text-sm">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.12 + j * 0.04 }}
                    className="text-xs px-3 py-1.5 rounded-full font-medium transition-all hover:scale-105 cursor-default"
                    style={{
                      background: `linear-gradient(135deg, ${cat.color}15, ${cat.color}08)`,
                      border: `1px solid ${cat.color}30`,
                      color: cat.color,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Animated bottom bar */}
              <div className="mt-5 h-0.5 rounded-full overflow-hidden bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: i * 0.12 + 0.3 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
