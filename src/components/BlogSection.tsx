import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen } from "lucide-react";

const blogs = [
  {
    title: "Building RAG-Powered Chatbots: A Practical Guide",
    excerpt: "Explore how Retrieval-Augmented Generation combines LLMs with vector search to build intelligent Q&A systems grounded in your own documents.",
    tags: ["Generative AI", "RAG", "LangChain"],
    color: "hsl(195 100% 50%)",
    glow: "hsl(195 100% 50% / 0.12)",
    emoji: "🤖",
  },
  {
    title: "From Jupyter to Production: Deploying ML Models",
    excerpt: "A step-by-step walkthrough on taking ML models from experimentation to production-ready APIs using FastAPI, Docker, and cloud platforms.",
    tags: ["Machine Learning", "Deployment", "FastAPI"],
    color: "hsl(280 80% 65%)",
    glow: "hsl(280 80% 60% / 0.12)",
    emoji: "🚀",
  },
  {
    title: "Designing Scalable REST APIs with Django",
    excerpt: "Best practices for building maintainable and performant backend systems with Django REST Framework, including authentication, pagination, and error handling.",
    tags: ["Backend", "Django", "REST API"],
    color: "hsl(180 100% 55%)",
    glow: "hsl(180 100% 55% / 0.12)",
    emoji: "⚙️",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="floating-orb w-80 h-80 bg-accent/8 top-0 left-1/2" style={{ animationDuration: "11s", animationDelay: "4s" }} />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Blog
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass neon-border-hover p-6 flex flex-col rounded-xl group cursor-pointer relative overflow-hidden"
              style={{ border: `1px solid ${blog.color}20` }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
                style={{ background: `linear-gradient(90deg, transparent, ${blog.color}, transparent)` }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6"
                style={{ background: blog.glow }}
              >
                {blog.emoji}
              </div>

              <h3
                className="font-bold mb-2 transition-colors text-base leading-snug"
                style={{ color: blog.color }}
              >
                {blog.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{blog.excerpt}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {blog.tags.map((t) => (
                  <span
                    key={t}
                    className="code-font text-[10px] px-2.5 py-1 rounded-full"
                    style={{ background: `${blog.color}10`, border: `1px solid ${blog.color}25`, color: blog.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span
                className="flex items-center gap-1.5 text-sm font-medium group-hover:gap-3 transition-all"
                style={{ color: blog.color }}
              >
                <BookOpen size={14} />
                Read more
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
