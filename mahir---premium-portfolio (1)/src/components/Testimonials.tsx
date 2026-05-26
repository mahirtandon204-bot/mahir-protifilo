import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    text: 'Mahir completely transformed our brand identity. The attention to detail in the logo and website design was nothing short of cinematic. Truly a premium experience.',
  },
  {
    name: 'David Chen',
    role: 'Content Creator (2M+ Subs)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    text: 'My channel exploded after Mahir took over the video editing and thumbnail direction. The retention rates skyrocketed. He knows exactly what the audience wants.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    text: 'Working with Mahir is a breeze. The web development process was smooth, and the final product is so fast and beautiful. Our conversion rates are up 40%.',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-purple font-mono tracking-widest text-xs font-bold uppercase mb-2 block">
            Client Success
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            What <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="absolute -top-5 -right-2 text-brand-blue/20 blur-[2px] group-hover:text-brand-blue/40 transition-colors">
                <Quote size={80} />
              </div>
              
              <div className="flex gap-1 text-yellow-500 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed font-light">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/50"
                />
                <div>
                  <h4 className="font-bold text-white font-display text-sm">{testimonial.name}</h4>
                  <p className="text-brand-blue text-xs">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/0 to-brand-blue/0 group-hover:from-brand-blue/5 group-hover:to-brand-purple/5 transition-colors duration-500 pointer-events-none" />
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-blue/30 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
