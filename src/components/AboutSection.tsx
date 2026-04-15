import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm an aspiring <span className="text-primary font-medium">Machine Learning Engineer</span> with a strong foundation in ML and Generative AI. Currently pursuing B.E. in Computer Science (AI & ML) at KPR Institute of Engineering and Technology, Coimbatore.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about building intelligent systems that solve real-world problems — from <span className="text-accent font-medium">RAG-based chatbots</span> and <span className="text-neon-cyan font-medium">ML prediction systems</span> to scalable backend architectures with Django and FastAPI.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work spans supervised/unsupervised learning, LLMs, NLP, and full-stack development. I believe in continuous learning, experimentation, and shipping products that create real impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4"
          >
            {[
              { icon: Brain, title: "Problem Solver", desc: "Strong analytical mindset for tackling complex ML and engineering challenges", color: "text-primary" },
              { icon: Code, title: "Full-Stack Builder", desc: "End-to-end development from ML models to production-ready APIs and UIs", color: "text-accent" },
              { icon: Lightbulb, title: "Continuous Learner", desc: "Always exploring cutting-edge AI research and emerging technologies", color: "text-neon-cyan" },
            ].map((item) => (
              <div key={item.title} className="glass neon-border p-5 flex gap-4 items-start hover:bg-card/80 transition-all group">
                <item.icon className={`${item.color} mt-1 group-hover:scale-110 transition-transform`} size={22} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
