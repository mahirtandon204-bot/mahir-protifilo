import { motion } from 'motion/react';
import { BookOpen, User, Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: "The Future of AI Content Creation: A Developer's Perspective",
    category: "AI & Tech",
    date: "May 24, 2026",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=100&w=3000&auto=format&fit=crop",
    excerpt: "Exploring how generative AI is shifting the paradigm from manual video editing to prompt-engineered cinematic experiences.",
  },
  {
    title: "Cinematic Lighting in a Cyberpunk World",
    category: "Storytelling",
    date: "May 18, 2026",
    readTime: "12 min read",
    img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=100&w=3000&auto=format&fit=crop",
    excerpt: "Behind the scenes on how I color grade and light my physical workspaces to mimic high-budget indie films.",
  },
  {
    title: "From Freelancer to Million-Dollar Agency",
    category: "Journey",
    date: "May 10, 2026",
    readTime: "15 min read",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=100&w=3000&auto=format&fit=crop",
    excerpt: "The raw truth about scaling a creative business in the digital age. What worked, what failed, and what's next.",
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-brand-navy/20">
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-brand-purple font-mono tracking-widest text-xs font-bold uppercase mb-2 block">
              Digital Chronicles
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Storytelling & <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Deep dives into AI, creative business, building premium tech, and the art of modern digital aesthetics.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-brand-blue hover:text-white transition-colors pb-1 border-b border-brand-blue/30 hover:border-white">
              Read All Stories <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group glass-card rounded-3xl overflow-hidden hover:neon-border transition-all duration-500 flex flex-col cursor-pointer bg-brand-black/40"
            >
              <div className="h-60 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={blog.img} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-brand-blue border border-brand-blue/30">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col relative">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono font-medium">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {blog.readTime}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center p-[1px]">
                       <div className="w-full h-full bg-brand-black rounded-full flex items-center justify-center">
                         <User className="w-4 h-4 text-gray-300" />
                       </div>
                    </div>
                    <span className="text-xs font-bold text-white">Mahir</span>
                  </div>
                  
                  <span className="text-brand-blue flex items-center gap-1 text-sm font-bold group-hover:translate-x-2 transition-transform">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
