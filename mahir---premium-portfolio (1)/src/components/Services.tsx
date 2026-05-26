import { motion } from 'motion/react';
import { Video, PenTool, Code2, PenLine, Image as ImageIcon, Layers, Share2, TerminalSquare } from 'lucide-react';

const services = [
  {
    title: 'Video Editing',
    description: 'Cinematic color grading, seamless transitions, and professional cuts.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop',
    icon: Video,
  },
  {
    title: 'Logo Design',
    description: 'Memorable, scalable, and premium brand identities.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
    icon: PenTool,
  },
  {
    title: 'Web Development',
    description: 'High-performance, modern, and interactive portfolio sites.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    icon: Code2,
  },
  {
    title: 'AI Creations',
    description: 'AI Generated concept art, avatars, and high-fidelity visuals.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    icon: ImageIcon,
  },
  {
    title: 'Graphic Design',
    description: 'Digital art, posters, and creative marketing material.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop',
    icon: Layers,
  },
  {
    title: 'Content Writing',
    description: 'Engaging scripts, blogs, and creative professional writing.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2073&auto=format&fit=crop',
    icon: PenLine,
  },
  {
    title: 'Social Media',
    description: 'Strategic growth and profile management.',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop',
    icon: Share2,
  },
  {
    title: 'Coding Projects',
    description: 'Custom scripts, tools, and technical solutions.',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop',
    icon: TerminalSquare,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-navy/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-purple/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block mb-4 relative"
          >
            <div className="absolute inset-0 bg-brand-blue/20 blur-md rounded-full" />
            <span className="relative text-brand-blue font-mono tracking-widest text-xs font-bold uppercase border border-brand-blue/30 px-4 py-1.5 rounded-full bg-brand-black/50 backdrop-blur-md">
              Agency Capabilities
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Delivering high-end cinematic quality across multiple digital mediums.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
             <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              style={{ perspective: 1000 }}
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden glass-card hover:neon-border transition-all duration-500 bg-brand-black/60"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10" />
                <img 
                  src={service.image} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale-[50%] group-hover:grayscale-0"
                  alt={service.title} 
                />
              </div>
              <div className="p-6 relative z-20 flex-1 flex flex-col justify-end bg-gradient-to-t from-brand-black via-brand-navy/90 to-transparent -mt-24 pt-16">
                <div className="w-12 h-12 rounded-xl bg-brand-black/80 backdrop-blur-md border border-brand-blue/30 flex items-center justify-center mb-4 group-hover:border-brand-blue group-hover:shadow-[0_0_15px_rgba(0,210,255,0.5)] transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <service.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
