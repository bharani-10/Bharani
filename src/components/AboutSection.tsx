import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Lightbulb, Cpu } from "lucide-react";

const traits = [
  { icon: Brain, title: "Problem Solver", desc: "Strong analytical mindset for tackling complex ML and engineering challenges", color: "hsl(195 100% 50%)", glow: "hsl(195 100% 50% / 0.15)" },
  { icon: Code, title: "Full-Stack Builder", desc: "End-to-end development from ML models to production-ready APIs and UIs", color: "hsl(280 80% 60%)", glow: "hsl(280 80% 60% / 0.15)" },
  { icon: Lightbulb, title: "Continuous Learner", desc: "Always exploring cutting-edge AI research and emerging technologies", color: "hsl(180 100% 55%)", glow: "hsl(180 100% 55% / 0.15)" },
];

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "2+", label: "Years Coding" },
  { value: "8.0", label: "CGPA" },
  { value: "1", label: "Publication" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="floating-orb w-96 h-96 bg-primary/8 -top-20 -right-20" style={{ animationDuration: "12s" }} />
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-4 gap-4 mb-12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="glass neon-border-hover text-center p-4 rounded-xl"
              style={{ border: "1px solid hsl(195 100% 50% / 0.15)" }}
            >
              <div className="orbitron text-2xl sm:text-3xl font-black gradient-text">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-base">
              I am an aspiring{" "}
              <span className="font-semibold" style={{ color: "hsl(195 100% 60%)" }}>Machine Learning Engineer</span>{" "}
              with a strong foundation in ML and Generative AI. Currently pursuing B.E. in Computer Science (AI and ML) at KPR Institute of Engineering and Technology, Coimbatore.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              I am passionate about building intelligent systems from{" "}
              <span className="font-semibold" style={{ color: "hsl(280 80% 70%)" }}>RAG-based chatbots</span>{" "}
              and{" "}
              <span className="font-semibold" style={{ color: "hsl(180 100% 55%)" }}>ML prediction systems</span>{" "}
              to scalable backend architectures with Django and FastAPI.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              My work spans supervised/unsupervised learning, LLMs, NLP, and full-stack development. I believe in continuous learning, experimentation, and shipping products that create real impact.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Cpu size={16} className="text-primary" />
              <span className="code-font text-sm text-muted-foreground">Currently exploring: Advanced RAG and Agentic AI</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid gap-4"
          >
            {traits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                className="glass neon-border-hover p-5 flex gap-4 items-start rounded-xl group"
                style={{ border: "1px solid " + item.color + "30" }}
              >
                <div
                  className="p-2.5 rounded-lg shrink-0 transition-all group-hover:scale-110"
                  style={{ background: item.glow }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
