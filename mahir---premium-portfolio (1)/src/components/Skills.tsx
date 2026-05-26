import { motion } from 'motion/react';
import { Code2, Film, Palette, Sparkles, PenTool } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: "WEB DEVELOPMENT",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "GSAP", "Framer Motion"],
    examples: ["Portfolio websites", "Business websites", "Luxury landing pages", "Interactive web apps"]
  },
  {
    icon: Film,
    title: "VIDEO EDITING",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    skills: ["Premiere Pro", "CapCut", "After Effects"],
    examples: ["Reels & Shorts", "YouTube edits", "Cinematic trailers", "Gaming edits"]
  },
  {
    icon: Palette,
    title: "GRAPHIC DESIGN",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    skills: ["Photoshop", "Canva", "Illustrator"],
    examples: ["Logos & Branding", "Posters", "Thumbnails", "Social media design"]
  },
  {
    icon: Sparkles,
    title: "AI CONTENT CREATION",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    skills: ["Midjourney", "Stable Diffusion", "Prompt Engineering"],
    examples: ["AI posters", "AI videos", "AI thumbnails", "AI artwork", "AI cinematic scenes"]
  },
  {
    icon: PenTool,
    title: "CONTENT WRITING",
    color: "from-yellow-500/20 to-amber-500/20",
    border: "border-yellow-500/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]",
    skills: ["SEO", "Copywriting", "Storytelling"],
    examples: ["Blog writing", "Script writing", "SEO articles", "Brand storytelling", "Social media captions"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-brand-black border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      <div className="absolute top-[30%] left-[10%] w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-blue font-mono tracking-widest text-xs font-bold uppercase mb-4 block">
            Digital Creator Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group glass-card p-8 rounded-3xl border ${category.border} bg-gradient-to-br ${category.color} backdrop-blur-xl relative overflow-hidden transition-all duration-300 ${category.glow}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl bg-black/40 border border-white/10 group-hover:border-white/30 transition-colors`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-white tracking-wide">{category.title}</h3>
              </div>
              
              <div className="mb-6">
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-3">Tools & Tech</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium bg-black/40 border border-white/10 rounded-full text-gray-300 group-hover:border-white/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                 <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-3">Deliverables</p>
                 <ul className="space-y-2">
                   {category.examples.map(example => (
                     <li key={example} className="text-sm text-gray-400 flex items-center gap-2">
                       <span className="w-1 h-1 rounded-full bg-white/50" /> {example}
                     </li>
                   ))}
                 </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
