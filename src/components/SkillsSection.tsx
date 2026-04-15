import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Machine Learning",
    color: "from-primary to-neon-cyan",
    borderColor: "border-primary/30",
    skills: ["Python", "Scikit-learn", "Pandas / NumPy", "Feature Engineering", "Model Evaluation", "Supervised Learning", "Unsupervised Learning"],
  },
  {
    title: "Generative AI",
    color: "from-accent to-primary",
    borderColor: "border-accent/30",
    skills: ["LLMs / LLaMA", "LangChain", "RAG / FAISS", "Transformers / NLP", "Groq / SpeechT5", "Prompt Engineering"],
  },
  {
    title: "Backend Development",
    color: "from-neon-cyan to-accent",
    borderColor: "border-neon-cyan/30",
    skills: ["Django", "FastAPI / Flask", "REST APIs", "SQL / MySQL", "Authentication (JWT)", "API Integration", "Database Design"],
  },
  {
    title: "Tools & Deployment",
    color: "from-primary to-accent",
    borderColor: "border-primary/30",
    skills: ["Git / GitHub", "Streamlit", "Render / Vercel", "Postman", "VS Code / Colab", "Google Colab"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">Technical Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass neon-border p-6 hover:bg-card/80 transition-all ${cat.borderColor}`}
            >
              <h3 className="font-bold text-lg mb-4 text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm px-3 py-1.5 rounded-full bg-gradient-to-r ${cat.color} bg-opacity-10 border border-border text-foreground font-medium`}
                    style={{ background: `linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
