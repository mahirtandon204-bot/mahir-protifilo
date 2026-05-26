import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Videos', href: '#videos' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Hire Me', href: '#hire' },
  { name: 'Blog', href: '#blog' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-4 glass-card border-x-0 border-t-0 rounded-none bg-black/60' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-sm neon-glow group-hover:scale-110 transition-transform">
            M
          </span>
          Mahir<span className="text-brand-blue">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex justify-center flex-1 gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group font-mono uppercase tracking-wider"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#hire"
            className="px-6 py-2.5 rounded-full text-sm font-mono font-bold uppercase tracking-widest border border-brand-blue/30 text-brand-blue hover:text-brand-black hover:bg-brand-blue hover:neon-glow transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,210,255,0.1)] hover:shadow-none"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mx-4 mt-4 overflow-hidden border-white/10 relative z-50 bg-brand-black/90 backdrop-blur-xl"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-mono uppercase tracking-wider font-bold text-gray-300 hover:text-brand-blue transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#hire"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 border border-brand-blue/30 text-white hover:border-brand-blue transition-all"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
