import { motion } from 'motion/react';
import { Play, Star, Clock } from 'lucide-react';

const videoCategories = [
  { title: "Demo Portfolio & Video Editing Showcases", subtitle: "High-octane short-form delivery and premium 4K edits.", videos: [
    { 
      img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop", 
      title: "Cinematic Reel Edits", 
      time: "1:00", 
      quality: "4K",
      desc: "High-contrast cel-shaded animations and fast paced short-form editing."
    },
    { 
      img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop", 
      title: "Gaming & Anime Transitions", 
      time: "1:00", 
      quality: "4K",
      desc: "Fast, intense cyberpunk visual effects and premium seamless transitions."
    },
    { 
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop", 
      title: "Logo Animations", 
      time: "0:15", 
      quality: "4K",
      desc: "Custom 3D logo reveals and smooth motion graphics."
    },
    { 
      img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop", 
      title: "Web App Previews", 
      time: "1:30", 
      quality: "1080p",
      desc: "Showcase of animated portfolios, glassmorphism UI, and smooth scrolling experiences."
    },
  ]}
];

export function VideoShowcase() {
  return (
    <section id="videos" className="py-24 relative overflow-hidden bg-brand-black z-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-brand-purple/10 border border-brand-purple/30 text-brand-purple font-mono tracking-widest text-xs font-bold uppercase mb-6 shadow-[0_0_10px_rgba(206,140,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse"></span>
            Working Videos
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Cinematic <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-mono">
            Demo portfolio videos, editing previews, transitions, logo animations, and website previews showcasing my cinematic frames and premium hover effects.
          </p>
        </motion.div>

        <div className="space-y-16">
          {videoCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 border-l-4 border-brand-blue pl-4">
                  {category.title}
                </h3>
                <p className="text-brand-blue/80 font-mono text-sm ml-5">{category.subtitle}</p>
              </div>
              <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide py-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
                {category.videos.map((video, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex-none w-[280px] md:w-full snap-center group relative origin-center"
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden glass-card cursor-pointer border border-white/10 group-hover:border-brand-blue/50 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] transition-all duration-300">
                      <img 
                        src={video.img} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={video.title} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                        <div className="w-16 h-16 rounded-full bg-brand-blue/20 backdrop-blur-md border border-brand-blue flex items-center justify-center text-white neon-glow">
                          <Play className="w-6 h-6 ml-1 fill-white" />
                        </div>
                      </div>

                      <div className="absolute top-3 right-3 flex gap-2">
                        <span className="px-2 py-1 text-[10px] font-bold bg-brand-black/80 backdrop-blur-md text-[#00d2ff] uppercase rounded-md border border-[#00d2ff]/30">
                          {video.quality}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3 flex items-center gap-1 text-xs font-mono text-white/80 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                        <Clock className="w-3 h-3" /> {video.time}
                      </div>
                    </div>
                    
                    <div className="mt-5 p-4 rounded-xl border border-white/5 bg-black/40 group-hover:border-white/10 transition-colors h-[120px]">
                      <h4 className="text-white font-bold text-lg group-hover:text-brand-blue transition-colors line-clamp-1 mb-2 font-display">{video.title}</h4>
                      <p className="text-gray-400 text-xs font-mono line-clamp-3 leading-relaxed">
                        {video.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
