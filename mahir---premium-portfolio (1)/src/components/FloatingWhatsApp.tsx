import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      href="https://wa.me/918221038164"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:bg-[#1ebd5b] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className="group-hover:rotate-12 transition-transform duration-300"
      >
        <path d="M11.99 2C6.47 2 2 6.48 2 12c0 1.76.46 3.42 1.25 4.89L2 22l5.24-1.21c1.42.74 3.03 1.16 4.75 1.16 5.52 0 10-4.48 10-10S17.51 2 11.99 2zm0 18.06c-1.46 0-2.86-.38-4.09-1.07l-2.92.68.7-2.82c-.78-1.26-1.19-2.73-1.19-4.27 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.33-5.75c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12s-.61.77-.75.93c-.14.16-.28.18-.52.06-1.31-.66-2.34-1.51-3.21-2.9-.14-.22 0-.34.11-.45.06-.06.12-.13.18-.2.06-.07.09-.12.14-.2.05-.08.02-.15-.01-.21-.06-.11-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41-.12 0-.27 0-.41 0-.15 0-.39.06-.6.28-.21.22-.81.79-.81 1.93s.83 2.24.95 2.4c.12.16 1.63 2.49 3.95 3.49.55.24 1.05.39 1.48.51.6.19 1.14.16 1.57.1.48-.07 1.4-.57 1.59-1.12.19-.55.19-1.02.13-1.12-.05-.11-.2-.17-.44-.29z"/>
      </svg>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border border-brand-black"></span>
      </span>
    </motion.a>
  );
}
