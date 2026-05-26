import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Download, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ParticlesBackground } from './ParticlesBackground';

const roles = [
  "Video Editor",
  "Designer",
  "Website Developer",
  "Content Creator"
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Cinematic Image overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/80 to-brand-black z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-brand-black to-brand-black z-10 opacity-70 pointer-events-none" />
        <img
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
          alt="Cinematic Workspace Background"
          className="w-full h-full object-cover opacity-30"
        />
        <ParticlesBackground />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-6 pt-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border-brand-blue/30 w-max">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-sm font-medium text-blue-200 tracking-wide">AVAILABLE FOR WORK</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold leading-tight min-h-[140px] md:min-h-[180px]">
            Hi, I'm <span className="text-white">Mahir</span> <br />
            <span className="block h-16">
               <AnimatePresence mode="wait">
                 <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-gradient block -mt-4 md:-mt-6"
                 >
                   {roles[currentRoleIndex]}
                 </motion.span>
               </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-lg leading-relaxed">
            I craft ultra-premium cinematic digital galleries, edit compelling videos, and build modern interactive web experiences that feel incredibly expensive.
          </motion.p>


          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#hire"
              className="px-8 py-4 rounded-xl bg-brand-blue text-brand-black font-bold flex items-center gap-2 hover:neon-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              Hire Me <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918221038164"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl glass-card flex items-center gap-2 hover:bg-[#25D366]/20 transition-all duration-300 border border-[#25D366]/50 text-white"
            >
              WhatsApp Me
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-xl glass-card flex items-center gap-2 hover:bg-white/10 transition-all duration-300 border border-white/20 text-white"
            >
              View Portfolio
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-12">
            <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">Follow Me</p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((Social, i) => (
                <a
                  key={i}
                  href={Social.href}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue transition-colors group relative"
                >
                  <Social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="absolute inset-0 rounded-full group-hover:neon-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Portrait / Artistic Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-brand-blue blur-[120px] opacity-20 rounded-full" />
          <div className="relative z-10 glass-panel p-2 rounded-[2.5rem] transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:neon-glow">
            <div className="rounded-[2rem] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                alt="Mahir Portrait Coding"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Element */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-[-30px] z-20 glass-card p-4 flex items-center gap-4 rounded-2xl neon-border"
              >
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Experience</p>
                  <p className="text-lg font-bold text-white">5+ Years</p>
                </div>
              </motion.div>
              
               {/* Floating Element 2 */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-[-40px] z-20 glass-card p-4 flex items-center gap-4 rounded-2xl neon-border"
              >
                 <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Completed</p>
                  <p className="text-lg font-bold text-white">120+ Projects</p>
                </div>
              </motion.div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
