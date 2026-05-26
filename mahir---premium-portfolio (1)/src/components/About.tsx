import { motion } from 'motion/react';
import { Award, Code, Globe2, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Successful Deployments', value: '100+' },
  { label: 'Active Proxies', value: '42' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Traceability', value: '0%' },
];

const specialties = [
  { 
    title: 'Cinematic Prompt Engineering', 
    desc: 'Mastering high-contrast noir, cel-shaded, and graphic novel styles to create striking, narrative-driven imagery and video.'
  },
  { 
    title: 'Web Architecture & Deployment', 
    desc: 'From stealthy, single-page drops to massive, encrypted professional networks.'
  },
  { 
    title: 'Rapid Asset Generation', 
    desc: "Producing high-quality digital assets on demand—when the timeline is tight, I don't miss."
  },
  { 
    title: 'Audio/Visual Synchronization', 
    desc: 'Pairing gritty voiceovers, dark synth basslines, and hyper-specific SFX to make every second hit hard.'
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-black border-t border-white/5">
      <div className="absolute top-[20%] right[-10%] w-[600px] h-[600px] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: About Text & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-brand-blue/10 border border-brand-blue/30 text-brand-blue font-mono tracking-widest text-xs font-bold uppercase mb-6 shadow-[0_0_10px_rgba(0,210,255,0.2)]">
              <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse" />
              Creative Director
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              "I build the <br/>
              <span className="text-gradient">future of digital media.</span>"
            </h2>
            
            <div className="mb-10">
              <p className="text-gray-300 text-lg leading-relaxed font-mono">
                I create high-quality edits, premium websites, cinematic videos, logos, thumbnails, and creative digital content with modern futuristic design styles.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card p-5 border-white/5 bg-black/40 hover:border-brand-blue/50 transition-colors shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                  <h3 className="text-3xl font-display font-bold text-white mb-1 tracking-wider">{stat.value}</h3>
                  <p className="text-xs text-brand-blue uppercase font-mono tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right: Specialties */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 blur-[80px] -z-10" />
            
            <div className="glass-panel p-8 md:p-10 border border-white/10 relative overflow-hidden bg-brand-navy/50 backdrop-blur-xl rounded-3xl">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Code className="w-32 h-32 text-brand-blue" />
              </div>
              
              <h3 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                // Operational Specialties
              </h3>
              
              <div className="space-y-6 relative z-10">
                {specialties.map((spec, i) => (
                  <div key={i} className="group flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-brand-blue rounded-sm shadow-[0_0_8px_#00d2ff] group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 font-display tracking-wide group-hover:text-brand-blue transition-colors">
                        {spec.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {spec.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/10">
                 <a href="#hire" className="w-full py-4 rounded-sm border border-brand-blue/50 text-brand-blue font-bold tracking-[0.2em] uppercase text-sm hover:bg-brand-blue hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group shadow-[inset_0_0_20px_rgba(0,210,255,0.1)] hover:shadow-[0_0_20px_#00d2ff]">
                    Access The Ledger
                 </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
