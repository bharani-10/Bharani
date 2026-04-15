import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    title: "Machine Learning Intern",
    org: "Nitroware Technologies Pvt Ltd, Coimbatore",
    date: "Jan 2025 – Feb 2025",
    color: "hsl(195 100% 50%)",
    glow: "hsl(195 100% 50% / 0.15)",
    points: [
      "Worked on data preprocessing, feature engineering, and model development",
      "Applied regression and classification techniques with standard evaluation metrics",
      "Built and tested ML models on real-world datasets",
      "Contributed to deployment workflows for real-time prediction systems",
    ],
    tags: ["Python", "Scikit-learn", "Feature Engineering", "Model Deployment"],
  },
  {
    type: "edu",
    icon: GraduationCap,
    title: "B.E. Computer Science & Engineering (AI & ML)",
    org: "KPR Institute of Engineering and Technology, Coimbatore",
    date: "2023 – 2027",
    color: "hsl(280 80% 65%)",
    glow: "hsl(280 80% 60% / 0.15)",
    points: ["CGPA: 8.0"],
    tags: [],
  },
  {
    type: "edu",
    icon: GraduationCap,
    title: "HSC — 80.8%",
    org: "St. Joseph's Matriculation Higher Secondary School, Tirupur",
    date: "2019 – 2022",
    color: "hsl(180 100% 55%)",
    glow: "hsl(180 100% 55% / 0.15)",
    points: [],
    tags: [],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="floating-orb w-80 h-80 bg-accent/8 top-1/2 -left-40" style={{ animationDuration: "14s", animationDelay: "1s" }} />

      <div className="max-w-4xl mx-auto relative" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="w-full h-full origin-top"
              style={{ background: "linear-gradient(180deg, hsl(195 100% 50%), hsl(280 80% 60%), hsl(180 100% 55%))" }}
            />
          </div>

          <div className="space-y-8 pl-16">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[46px] top-4 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: item.glow,
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 15px ${item.color}40`,
                  }}
                >
                  <item.icon size={14} style={{ color: item.color }} />
                </div>

                <div
                  className="glass neon-border-hover p-6 rounded-xl group"
                  style={{ border: `1px solid ${item.color}20` }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-60"
                    style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                  />

                  <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                    <h3 className="font-bold text-foreground text-base">{item.title}</h3>
                    <span
                      className="code-font text-xs px-3 py-1 rounded-full"
                      style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                    >
                      {item.date}
                    </span>
                  </div>

                  <p className="text-sm font-medium mb-3" style={{ color: item.color }}>{item.org}</p>

                  {item.points.length > 0 && (
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-4">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span style={{ color: item.color }}>▸</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="code-font text-[10px] px-2.5 py-1 rounded-full"
                          style={{ background: `${item.color}10`, border: `1px solid ${item.color}25`, color: item.color }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
