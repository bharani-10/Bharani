import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Weather Forecasting System",
    description: "ML-powered weather prediction using Random Forest regression. Integrated OpenWeatherMap API for real-time data ingestion. Deployed as a full-stack Django app on Render.",
    tech: ["Python", "Scikit-learn", "Django", "Random Forest", "OpenWeatherMap API"],
    github: "https://github.com/bharani-10/Weather_Forecasting",
    demo: "https://ai-weather-forecasting.onrender.com/",
    color: "hsl(195 100% 50%)",
    glow: "hsl(195 100% 50% / 0.15)",
    icon: "🌦️",
  },
  {
    title: "Exam Assistant Chatbot",
    description: "RAG-based chatbot using LangChain, FAISS, Groq LLaMA 3.1, and Sentence Transformers. Students upload PDFs and get context-aware answers via retrieval-augmented generation.",
    tech: ["LangChain", "FAISS", "Groq LLaMA 3.1", "Sentence Transformers", "RAG"],
    github: "https://github.com/bharani-10/Examchatbot",
    demo: "https://examchatbot-01.streamlit.app/",
    color: "hsl(280 80% 65%)",
    glow: "hsl(280 80% 60% / 0.15)",
    icon: "🤖",
  },
  {
    title: "AI Fantasy Storytelling Chatbot",
    description: "AI fantasy storytelling chatbot using Gemini 2.0 Flash and Hugging Face models. Advanced to Round 2 at CodHer'25 hackathon (ACM-CEG, Anna University).",
    tech: ["Gemini 2.0 Flash", "Hugging Face", "Streamlit", "NLP", "Prompt Engineering"],
    github: "https://github.com/bharani-10/Fantory",
    demo: "https://fantory.streamlit.app/",
    color: "hsl(180 100% 55%)",
    glow: "hsl(180 100% 55% / 0.15)",
    icon: "🧙",
  },
  {
    title: "Product Price Prediction App",
    description: "ML web app predicting product prices using Linear Regression, Decision Tree, and Random Forest. Interactive Streamlit UI for real-time predictions and model comparison.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Linear Regression", "Random Forest"],
    github: "https://github.com/bharani-10/product-price-prediction",
    demo: "https://price-predicto-magic.lovable.app/",
    color: "hsl(320 100% 65%)",
    glow: "hsl(320 100% 65% / 0.15)",
    icon: "💰",
  },
  {
    title: "Elegant Stitch — Boutique E-Commerce",
    description: "Full-stack e-commerce app with user authentication, shopping cart, checkout, and admin dashboard. Professional UI deployed on Vercel for seamless performance.",
    tech: ["Django", "REST API", "Authentication", "Vercel", "Full-Stack"],
    github: "https://github.com/bharani-10/eligantstitch",
    demo: "https://eligantstitch.vercel.app/",
    color: "hsl(150 100% 50%)",
    glow: "hsl(150 100% 50% / 0.15)",
    icon: "👗",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="floating-orb w-96 h-96 bg-primary/8 top-20 -right-32" style={{ animationDuration: "9s" }} />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass neon-border-hover p-6 flex flex-col rounded-xl group relative overflow-hidden"
              style={{ border: `1px solid ${project.color}20` }}
            >
              {/* Holographic shimmer on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 70%)`,
                }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: project.glow }}
                >
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass transition-all hover:scale-110"
                    style={{ border: `1px solid ${project.color}20`, color: project.color }}
                  >
                    <Github size={15} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg glass transition-all hover:scale-110"
                      style={{ border: `1px solid ${project.color}20`, color: project.color }}
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              <h3
                className="text-lg font-bold mb-2 transition-colors group-hover:text-foreground"
                style={{ color: project.color }}
              >
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="code-font text-[10px] px-2.5 py-1 rounded-full"
                    style={{
                      background: `${project.color}10`,
                      border: `1px solid ${project.color}25`,
                      color: project.color,
                    }}
                  >
                    {t}
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

export default ProjectsSection;
