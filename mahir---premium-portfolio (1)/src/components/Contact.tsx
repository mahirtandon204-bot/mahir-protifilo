import { motion } from 'motion/react';
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-navy/30">
      <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-brand-brand-blue/5 to-transparent pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to elevate your digital presence? Drop a message and let's craft something cinematic.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="https://wa.me/918221038164" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Chat on</p>
                  <p className="text-white font-bold font-display">WhatsApp</p>
                </div>
              </a>
              
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F56040] to-[#E1306C] opacity-80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white">IG</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Follow on</p>
                  <p className="text-white font-bold font-display">Instagram</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-white/5">
               <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">Direct Mail</p>
                  <a href="mailto:mahirtandon2026@gmail.com" className="text-white font-bold font-display cursor-pointer hover:text-brand-blue transition-colors">mahirtandon2026@gmail.com</a>
                </div>
            </div>

            {/* Empty Map Placeholder with cinematic look */}
            <div className="h-48 md:h-64 rounded-2xl overflow-hidden glass-card relative group">
               <div className="absolute inset-0 bg-brand-black/60 z-10 flex flex-col items-center justify-center group-hover:bg-brand-black/40 transition-colors">
                 <MapPin className="text-brand-blue w-8 h-8 mb-2" />
                 <p className="text-white font-display font-bold">Global Coverage</p>
               </div>
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Map Location" />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 flex flex-col space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">Send a Message</h3>
            
            <div className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:bg-white/10 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:bg-white/10 transition-colors"
                />
              </div>
              <div>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 focus:outline-none focus:border-brand-blue focus:bg-white/10 transition-colors appearance-none">
                  <option value="" disabled selected>Select Service Required</option>
                  <option value="video">Video Editing</option>
                  <option value="web">Web Development</option>
                  <option value="design">Graphic/Logo Design</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea 
                  rows={4}
                  placeholder="Project details..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:bg-white/10 transition-colors resize-none"
                />
              </div>
            </div>
            
            <button className="w-full py-4 rounded-xl bg-brand-blue text-brand-black font-bold flex items-center justify-center gap-2 hover:neon-glow transition-all duration-300">
              Send Request <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
