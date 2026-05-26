import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Play, X } from 'lucide-react';
import { useState } from 'react';

const galleryItems = [
  { 
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=100&w=7680&auto=format&fit=crop", 
    span: "md:col-span-2 md:row-span-2", 
    resolution: "8K PHOTO",
    title: "The High-Tech Object" 
  },
  { 
    img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=100&w=7680&auto=format&fit=crop", 
    span: "md:col-span-1 md:row-span-1", 
    resolution: "8K PHOTO",
    title: "Urban Environment"
  },
  { 
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=100&w=7680&auto=format&fit=crop", 
    span: "md:col-span-1 md:row-span-1", 
    resolution: "8K PHOTO",
    title: "The Target"
  },
  { 
    img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=100&w=7680&auto=format&fit=crop", 
    span: "md:col-span-2 md:row-span-1", 
    resolution: "4K VIDEO",
    title: "The Digital Interface"
  },
  { 
    img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=100&w=7680&auto=format&fit=crop", 
    span: "md:col-span-1 md:row-span-2", 
    resolution: "4K VIDEO",
    title: "The Vehicle in Motion"
  },
  { 
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=100&w=7680&auto=format&fit=crop", 
    span: "md:col-span-1 md:row-span-1", 
    resolution: "8K PHOTO",
    title: "A Cybernetic Implant" 
  },
  { 
    img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=100&w=7680&auto=format&fit=crop", 
    span: "md:col-span-2 md:row-span-1", 
    resolution: "8K PHOTO",
    title: "A Secure Document" 
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 relative bg-brand-navy/30 border-y border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-blue font-mono tracking-widest text-xs font-bold uppercase mb-2 block">
            Visual Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Digital <span className="text-gradient">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[250px] gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group rounded-xl overflow-hidden glass-card cursor-pointer border-0 ${item.span}`}
              onClick={() => setSelectedImage(item.img)}
            >
              <img 
                src={item.img} 
                alt={`Gallery visual ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-brand-black/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-brand-blue/50 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 shadow-[0_0_20px_rgba(0,210,255,0.4)] z-20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                <span className="text-[10px] font-mono text-white font-bold tracking-widest uppercase">
                  QUALITY: <span className="text-brand-blue drop-shadow-[0_0_5px_rgba(0,210,255,0.8)]">{item.resolution}</span>
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-brand-black/80 backdrop-blur-md px-4 py-3 rounded-lg border border-brand-blue/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[10px] group-hover:translate-y-0 z-20">
                <h4 className="text-white font-bold font-display tracking-wide">{item.title}</h4>
              </div>
              <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 backdrop-blur-sm border border-brand-blue flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300 ease-out">
                  {index % 3 === 0 ? <Play className="w-5 h-5 ml-1" /> : <Maximize2 className="w-5 h-5" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen Preview"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10 cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
