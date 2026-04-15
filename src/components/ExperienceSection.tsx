import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-4xl mx-auto relative" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">Experience & Education</h2>
        </motion.div>

        <div className="relative border-l-2 border-border pl-8 space-y-10">
          {/* Experience */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <Briefcase size={10} className="text-primary" />
            </div>
            <div className="glass neon-border p-5">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="font-bold text-foreground">Machine Learning Intern</h3>
                <span className="code-font text-xs text-primary">Jan 2025 – Feb 2025</span>
              </div>
              <p className="text-sm text-accent mb-3">Nitroware Technologies Pvt Ltd, Coimbatore</p>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>• Worked on data preprocessing, feature engineering, and model development</li>
                <li>• Applied regression and classification techniques with standard evaluation metrics</li>
                <li>• Built and tested ML models on real-world datasets</li>
                <li>• Contributed to deployment workflows for real-time prediction systems</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Python", "Scikit-learn", "Feature Engineering", "Model Deployment"].map((t) => (
                  <span key={t} className="code-font text-[10px] px-2 py-1 bg-muted rounded-md text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.35 }} className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
              <GraduationCap size={10} className="text-accent" />
            </div>
            <div className="glass neon-border p-5">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="font-bold text-foreground">B.E. Computer Science & Engineering (AI & ML)</h3>
                <span className="code-font text-xs text-accent">2023 – 2027</span>
              </div>
              <p className="text-sm text-accent mb-1">KPR Institute of Engineering and Technology, Coimbatore</p>
              <p className="text-sm text-muted-foreground">CGPA: 8.0</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="relative">
            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center">
              <GraduationCap size={10} className="text-neon-cyan" />
            </div>
            <div className="glass neon-border p-5">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h3 className="font-bold text-foreground">HSC — 80.8%</h3>
                <span className="code-font text-xs text-neon-cyan">2019 – 2022</span>
              </div>
              <p className="text-sm text-neon-cyan">St. Joseph's Matriculation Higher Secondary School, Tirupur</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
