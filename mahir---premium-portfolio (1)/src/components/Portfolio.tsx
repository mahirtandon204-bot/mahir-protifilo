import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    category: 'YouTube Editing',
    title: 'Gaming & Cinematics',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'Web Development',
    title: 'Modern Websites',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'Graphic Design',
    title: 'Logo Collections',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
  },
  {
    category: 'Video Editing',
    title: 'Editing Before/After',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'Digital Art',
    title: 'Gaming Graphics',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'Social Media',
    title: 'Instagram Post Designs',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
  },
  {
    category: 'Motion Design',
    title: 'Motion Posters',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'AI Creations',
    title: 'AI-Generated Artwork',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-brand-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/10 via-brand-black to-brand-black pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Selected <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              A showcase of premium projects crafted with attention to detail.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-brand-blue hover:text-white transition-colors border-b border-brand-blue/30 pb-1">
              View All Projects <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
              style={{ perspective: 1000 }}
              className={`group relative rounded-3xl overflow-hidden glass-card cursor-pointer border-white/5 ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              <div className="h-[300px] md:h-[450px] w-full relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-blue font-mono tracking-widest text-xs font-bold uppercase mb-3 block drop-shadow-md">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2 drop-shadow-lg">
                  {project.title}
                </h3>
                <div className="w-max opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-2 text-white hover:text-brand-blue mt-4">
                  <span className="font-bold tracking-wide">Explore Case Study</span>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-brand-blue/0 group-hover:border-brand-blue/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
