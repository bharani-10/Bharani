import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Weather Forecasting System",
    description: "Built an ML-powered weather prediction system using Random Forest regression and classification. Integrated OpenWeatherMap API for real-time data ingestion and weather forecasting. Deployed as a full-stack web application using Django on Render, enabling users to get accurate real-time weather predictions for any location.",
    tech: ["Python", "Scikit-learn", "Django", "Random Forest", "OpenWeatherMap API", "Render"],
    github: "https://github.com/bharani-10/Weather_Forecasting",
    demo: "https://ai-weather-forecasting.onrender.com/",
    gradient: "from-primary to-neon-cyan",
  },
  {
    title: "Exam Assistant Chatbot",
    description: "Built a RAG-based chatbot using LangChain, FAISS, Groq LLaMA 3.1, and Sentence Transformers. Implemented semantic search and document-based question answering for instant knowledge retrieval from study materials. Students can upload PDFs and get accurate, context-aware answers powered by retrieval-augmented generation.",
    tech: ["LangChain", "FAISS", "Groq LLaMA 3.1", "Sentence Transformers", "RAG", "Streamlit"],
    github: "https://github.com/bharani-10/Examchatbot",
    demo: "https://examchatbot-01.streamlit.app/",
    gradient: "from-accent to-primary",
  },
  {
    title: "AI Fantasy Storytelling Chatbot",
    description: "Developed an AI fantasy storytelling chatbot using Gemini 2.0 Flash and Hugging Face models for dynamic, interactive story generation. Featured a responsive and visually engaging chat interface for immersive storytelling experiences. Advanced to Round 2 at the CodHer'25 hackathon (ACM-CEG, Anna University).",
    tech: ["Gemini 2.0 Flash", "Hugging Face", "Streamlit", "NLP", "Prompt Engineering"],
    github: "https://github.com/bharani-10/Fantory",
    demo: "https://fantory.streamlit.app/",
    gradient: "from-neon-cyan to-accent",
  },
  {
    title: "Product Price Prediction App",
    description: "Developed a machine learning web application to predict product prices using multiple regression models including Linear Regression, Decision Tree, and Random Forest. Built an interactive Streamlit UI for real-time predictions, model comparison, and data visualization to help e-commerce sellers price products competitively.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Linear Regression", "Decision Tree", "Random Forest"],
    github: "https://github.com/bharani-10/product-price-prediction",
    demo: "https://price-predicto-magic.lovable.app/",
    gradient: "from-primary to-accent",
  },
  {
    title: "Elegant Stitch — Boutique E-Commerce",
    description: "Built a full-stack e-commerce web application for a boutique business with user authentication, shopping cart, checkout functionality, and an admin dashboard for managing products and orders. Designed with a professional UI and deployed on Vercel for seamless performance.",
    tech: ["Django", "REST API", "Authentication", "Vercel", "Full-Stack", "Database Design"],
    github: "https://github.com/bharani-10/eligantstitch",
    demo: "https://eligantstitch.vercel.app/",
    gradient: "from-accent to-neon-cyan",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass neon-border p-6 flex flex-col hover:bg-card/80 transition-all group"
            >
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-4`} />
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="code-font text-[10px] px-2 py-1 bg-muted rounded-md text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github size={15} /> GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
