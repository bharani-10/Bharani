import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Trophy, FileText } from "lucide-react";

const certs = [
  { title: "NPTEL — Introduction to Large Language Models", date: "Jul – Oct 2025", icon: BookOpen, color: "text-primary" },
  { title: "GitHub — GitHub Foundations", date: "May 2025", icon: Award, color: "text-accent" },
  { title: "NPTEL — Introduction to IoT", date: "Jan – Apr 2025", icon: BookOpen, color: "text-neon-cyan" },
  { title: "HackerRank — Problem Solving", date: "Jan 2026", icon: Trophy, color: "text-primary" },
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
    <section id="certifications" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">Certifications & Achievements</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass neon-border p-5 flex gap-4 items-start hover:bg-card/80 transition-all"
            >
              <cert.icon className={`${cert.color} mt-0.5 shrink-0`} size={20} />
              <div>
                <h3 className="font-semibold text-foreground text-sm">{cert.title}</h3>
                <p className="code-font text-xs text-muted-foreground mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>
          <h3 className="text-xl font-bold text-foreground mb-4">🏆 Achievements</h3>
          <div className="space-y-3 mb-12">
            {achievements.map((a, i) => (
              <div key={i} className="glass neon-border p-4 text-sm text-muted-foreground">
                {a}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }}>
          <h3 className="text-xl font-bold text-foreground mb-4">📄 Publications & Conferences</h3>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div key={i} className="glass neon-border p-5 hover:bg-card/80 transition-all">
                <div className="flex gap-3 items-start">
                  <FileText size={20} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{pub.title}</h4>
                    <p className="text-xs text-muted-foreground mb-3">{pub.venue}</p>
                    <div className="flex flex-wrap gap-2">
                      {pub.tech.map((t) => (
                        <span key={t} className="code-font text-[10px] px-2 py-1 bg-muted rounded-md text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
