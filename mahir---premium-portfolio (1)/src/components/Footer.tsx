import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent blur-sm" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <a href="#home" className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-sm neon-glow group-hover:scale-110 transition-transform">
              M
            </span>
            Mahir<span className="text-brand-blue">.</span>
          </a>
          <p className="text-sm text-gray-400">
            Click to Call / WhatsApp: <a href="https://wa.me/918221038164" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">+91 8221038164</a>
          </p>
          <p className="text-sm text-gray-400">
            Email: <a href="mailto:mahirtandon2026@gmail.com" className="text-brand-blue hover:underline">mahirtandon2026@gmail.com</a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          {[Github, Twitter, Instagram, Linkedin].map((Icon, i) => (
             <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 text-center border-t border-white/5 pt-8">
        <p className="text-xs text-gray-600 uppercase tracking-widest font-mono">
          &copy; {new Date().getFullYear()} Mahir Portfolio. All rights reserved. Built with ❤️ and Code.
        </p>
      </div>
    </footer>
  );
}
