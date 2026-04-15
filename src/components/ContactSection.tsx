import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

type ContactSubmission = { name: string; email: string; message: string; submittedAt: string };

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/bharani-10",
    color: "hsl(195 100% 50%)",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bharani-r-70932b2b4/",
    color: "hsl(280 80% 65%)",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Bharani-10/",
    color: "hsl(180 100% 55%)",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/bharanir1010",
    color: "hsl(320 100% 65%)",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.143-.117-.258-.258-.258h-1.2c-.141 0-.258.115-.258.258v9.886c0 .143.117.258.258.258h1.2c.141 0 .258-.115.258-.258v-3.875h4.074v3.875c0 .143.117.258.258.258h1.2c.141 0 .258-.115.258-.258V7.057c0-.143-.117-.258-.258-.258h-1.2z" />
      </svg>
    ),
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(() => {
    try { return JSON.parse(window.localStorage.getItem("contact-submissions") || "[]"); }
    catch { return []; }
  });

  useEffect(() => {
    window.localStorage.setItem("contact-submissions", JSON.stringify(submissions));
  }, [submissions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissions((prev) => [{ ...form, submittedAt: new Date().toLocaleString() }, ...prev].slice(0, 5));
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="floating-orb w-96 h-96 bg-primary/8 -bottom-20 -left-20" style={{ animationDuration: "13s" }} />
      <div className="floating-orb w-64 h-64 bg-accent/8 top-20 right-0" style={{ animationDuration: "9s", animationDelay: "3s" }} />

      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing ML projects, collaboration opportunities, or just tech in general. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "bharanir1010@gmail.com", href: "mailto:bharanir1010@gmail.com", color: "hsl(195 100% 50%)" },
                { icon: Phone, label: "+91 6374924571", href: undefined, color: "hsl(280 80% 65%)" },
                { icon: MapPin, label: "Coimbatore, India", href: undefined, color: "hsl(180 100% 55%)" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg" style={{ background: `${item.color}15` }}>
                    <item.icon size={16} style={{ color: item.color }} />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">{item.label}</a>
                  ) : (
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-xl transition-all hover:scale-110 hover:-translate-y-1"
                  style={{ border: `1px solid ${s.color}25`, color: s.color }}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-6 rounded-xl space-y-4 relative overflow-hidden"
            style={{ border: "1px solid hsl(195 100% 50% / 0.2)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, hsl(195 100% 50%), hsl(280 80% 60%))" }} />

            {["name", "email"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field === "name" ? "Your Name" : "Your Email"}
                value={form[field as "name" | "email"]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all"
                style={{
                  background: "hsl(230 25% 8% / 0.8)",
                  border: "1px solid hsl(230 20% 18%)",
                }}
                onFocus={(e) => { e.target.style.borderColor = "hsl(195 100% 50% / 0.5)"; e.target.style.boxShadow = "0 0 15px hsl(195 100% 50% / 0.1)"; }}
                onBlur={(e) => { e.target.style.borderColor = "hsl(230 20% 18%)"; e.target.style.boxShadow = "none"; }}
              />
            ))}

            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all resize-none"
              style={{ background: "hsl(230 25% 8% / 0.8)", border: "1px solid hsl(230 20% 18%)" }}
              onFocus={(e) => { e.target.style.borderColor = "hsl(195 100% 50% / 0.5)"; e.target.style.boxShadow = "0 0 15px hsl(195 100% 50% / 0.1)"; }}
              onBlur={(e) => { e.target.style.borderColor = "hsl(230 20% 18%)"; e.target.style.boxShadow = "none"; }}
            />

            <button
              type="submit"
              className="w-full py-3.5 font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 relative overflow-hidden group"
              style={{
                background: submitted
                  ? "linear-gradient(135deg, hsl(150 100% 40%), hsl(150 100% 30%))"
                  : "linear-gradient(135deg, hsl(195 100% 50%), hsl(280 80% 60%))",
                color: "black",
                boxShadow: "0 0 20px hsl(195 100% 50% / 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              <span className="relative z-10 flex items-center gap-2">
                {submitted ? "✓ Message Sent!" : <><Send size={16} /> Send Message</>}
              </span>
            </button>

            {submissions.length > 0 && (
              <div className="mt-2 space-y-2 rounded-xl border border-border p-4" style={{ background: "hsl(230 25% 5% / 0.5)" }}>
                <h3 className="text-xs font-semibold text-muted-foreground">Recent submissions</h3>
                {submissions.map((item, index) => (
                  <div key={index} className="rounded-lg border border-border/50 p-3 text-xs space-y-0.5">
                    <p className="text-foreground"><span className="text-muted-foreground">Name: </span>{item.name}</p>
                    <p className="text-foreground"><span className="text-muted-foreground">Email: </span>{item.email}</p>
                    <p className="text-muted-foreground text-[10px] mt-1">{item.submittedAt}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
