import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "Building RAG-Powered Chatbots: A Practical Guide",
    excerpt: "Explore how Retrieval-Augmented Generation combines LLMs with vector search to build intelligent Q&A systems that ground responses in your own documents.",
    tags: ["Generative AI", "RAG", "LangChain"],
    gradient: "from-primary to-accent",
  },
  {
    title: "From Jupyter to Production: Deploying ML Models",
    excerpt: "A step-by-step walkthrough on taking ML models from experimentation to production-ready APIs using FastAPI, Docker, and cloud platforms.",
    tags: ["Machine Learning", "Deployment", "FastAPI"],
    gradient: "from-accent to-neon-cyan",
  },
  {
    title: "Designing Scalable REST APIs with Django",
    excerpt: "Best practices for building maintainable and performant backend systems with Django REST Framework, including authentication, pagination, and error handling.",
    tags: ["Backend", "Django", "REST API"],
    gradient: "from-neon-cyan to-primary",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 px-4 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 gradient-text">Blog</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass neon-border p-6 flex flex-col hover:bg-card/80 transition-all group cursor-pointer"
            >
              <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${blog.gradient} mb-4`} />
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{blog.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{blog.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((t) => (
                  <span key={t} className="code-font text-[10px] px-2 py-1 bg-muted rounded-md text-muted-foreground">{t}</span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
