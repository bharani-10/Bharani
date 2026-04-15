import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Trophy, FileText } from "lucide-react";

const certs = [
  { title: "NPTEL — Introduction to Large Language Models", date: "Jul – Oct 2025", icon: BookOpen, color: "hsl(195 100% 50%)" },
  { title: "GitHub — GitHub Foundations", date: "May 2025", icon: Award, color: "hsl(280 80% 65%)" },
  { title: "NPTEL — Introduction to IoT", date: "Jan – Apr 2025", icon: BookOpen, color: "hsl(180 100% 55%)" },
  { title: "HackerRank — Problem Solving", date: "Jan 2026", icon: Trophy, color: "hsl(320 100% 65%)" },
];

const achievements = [
  "Advanced to Round 2 in CodHer'25 hackathon (ACM-CEG, Anna University) — developed an AI fantasy storytelling chatbot using Gemini 2.0 Flash and Hugging Face models",
];

const publications = [
  {
    title: "Automated Attendance System Using Deep Learning-Based Face Recognition with InsightFace Model",
    venue: "Engineering Advances 2025 — Second International Conference, Pravara Rural Engineering College, Maharashtra",
    tech: ["Deep Learning", "InsightFace", "Python", "Computer Vision", "OpenCV"],
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 px-4 relative overflow-hidden">
      <div className="floating-orb w-72 h-72 bg-primary/8 bottom-20 right-0" style={{ animationDuration: "10s", animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Certifications & Achievements
        </motion.h2>

        {/* Certs grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass neon-border-hover p-5 flex gap-4 items-start rounded-xl group"
              style={{ border: `1px solid ${cert.color}20` }}
            >
              <div
                className="p-2.5 rounded-lg shrink-0 transition-all group-hover:scale-110"
                style={{ background: `${cert.color}15` }}
              >
                <cert.icon size={18} style={{ color: cert.color }} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm leading-snug">{cert.title}</h3>
                <p
                  className="code-font text-xs mt-1.5 px-2 py-0.5 rounded-full inline-block"
                  style={{ background: `${cert.color}10`, color: cert.color, border: `1px solid ${cert.color}25` }}
                >
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="orbitron text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Trophy size={18} className="text-primary" />
            Achievements
          </h3>
          {achievements.map((a, i) => (
            <div
              key={i}
              className="glass p-5 rounded-xl text-sm text-muted-foreground leading-relaxed"
              style={{ border: "1px solid hsl(195 100% 50% / 0.2)", background: "linear-gradient(135deg, hsl(195 100% 50% / 0.05), transparent)" }}
            >
              <span className="text-primary mr-2">🏆</span>
              {a}
            </div>
          ))}
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="orbitron text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText size={18} className="text-accent" />
            Publications & Conferences
          </h3>
          {publications.map((pub, i) => (
            <div
              key={i}
              className="glass neon-border-hover p-6 rounded-xl"
              style={{ border: "1px solid hsl(280 80% 60% / 0.2)" }}
            >
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-lg shrink-0" style={{ background: "hsl(280 80% 60% / 0.15)" }}>
                  <FileText size={18} style={{ color: "hsl(280 80% 65%)" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2 leading-snug">{pub.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{pub.venue}</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.tech.map((t) => (
                      <span
                        key={t}
                        className="code-font text-[10px] px-2.5 py-1 rounded-full"
                        style={{ background: "hsl(280 80% 60% / 0.1)", border: "1px solid hsl(280 80% 60% / 0.25)", color: "hsl(280 80% 65%)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
