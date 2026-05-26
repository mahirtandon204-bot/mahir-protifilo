import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Copy, CreditCard, DollarSign, Upload, Send, Sparkles, QrCode, ShieldCheck, ChevronRight, X, IndianRupee } from 'lucide-react';

const pricingPlansBase = [
  { 
    title: "10 Edited Photos", 
    basePrice: 1, 
    time: "Instant Delivery", 
    features: ["8K Ultra High Resolution", "AI Concept Generation", "Color Graded", "Commercial Rights"],
    bgImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=100&w=1000&auto=format&fit=crop"
  },
  { 
    title: "1 Minute Video Editing", 
    basePrice: 1, 
    time: "24 Hours", 
    features: ["4K Resolution Export", "Cinematic Color Grade", "Motion Graphics", "Premium Sound Design"],
    bgImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=100&w=1000&auto=format&fit=crop"
  },
  { 
    title: "2 Minute Video Editing", 
    basePrice: 2, 
    time: "24-48 Hours", 
    features: ["4K/8K Video Support", "Advanced VFX & Transitions", "Unlimited Revisions", "Dedicated Project Manager"],
    bgImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=100&w=1000&auto=format&fit=crop"
  },
  { 
    title: "Normal Website Development", 
    basePrice: 20, 
    time: "3-5 Days", 
    features: ["Custom React/Next.js", "Responsive Design", "Basic Animations", "SEO Setup"],
    bgImage: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=100&w=1000&auto=format&fit=crop"
  },
  { 
    title: "Pro Premium Website Development", 
    basePrice: 50, 
    time: "1-2 Weeks", 
    features: ["Full Network Architecture", "GSAP / Framer Animations", "Cyberpunk/Luxury UI/UX", "High Performance Backend"],
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=100&w=1000&auto=format&fit=crop"
  },
  { 
    title: "Everything Else", 
    basePrice: 6, 
    time: "Flat Rate", 
    features: ["Graphic Designing", "Logo & Thumbnails", "Social Media Content", "Content Writing"],
    bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=100&w=1000&auto=format&fit=crop"
  },
];

const availableServices = [
  { id: 'video_1', name: '1 Minute Video Edit', price: 1 },
  { id: 'video_2', name: '2 Minute Video Edit', price: 2 },
  { id: 'photo_8k', name: '10 AI Photos (8K)', price: 1 },
  { id: 'web_base', name: 'Basic Web App', price: 20 },
  { id: 'web_pro', name: 'Pro Web Framework', price: 50 },
  { id: 'other', name: 'Custom Asset / Other', price: 6 },
];

const availableAddons = [
  { id: 'source', name: 'Raw Source Files', price: 2 },
  { id: 'fast', name: '24 Hour Rush Delivery', price: 5 },
  { id: 'social', name: 'Social Media Formatting', price: 2 },
];

const EXCHANGE_RATE = 83; // 1 USD ≈ 83 INR
const formatCurrency = (amount: number, currency: 'USD' | 'INR') => {
  if (currency === 'INR') {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount * EXCHANGE_RATE);
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
};

export function HireSystem() {
  const [copied, setCopied] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(availableServices[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [currency, setCurrency] = useState<'USD'|'INR'>('USD');

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const handleOrderClick = (plan: any) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  const currentService = availableServices.find(s => s.id === selectedServiceId) || availableServices[0];
  const addonsTotal = selectedAddons.reduce((total, addonId) => {
    const addon = availableAddons.find(a => a.id === addonId);
    return total + (addon ? addon.price : 0);
  }, 0);
  const estimatedTotal = currentService.price + addonsTotal;
  const formattedEstimatedTotal = formatCurrency(estimatedTotal, currency);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText("mahir@upi");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaymentSimulation = () => {
    setPaymentSuccess(true);
    setTimeout(() => setPaymentSuccess(false), 5000);
  };

  return (
    <section id="hire" className="py-24 relative overflow-hidden bg-brand-black">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-purple/5 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border flex border-[#00d2ff]/30 w-max mx-auto mb-6 bg-brand-blue/5">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-sm font-medium text-blue-200 tracking-wide font-mono uppercase">Available for Work • Instant Response</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 drop-shadow-xl tracking-widest">
            HIRE <span className="text-gradient">MAHIR</span>
          </h2>
          <p className="text-brand-blue max-w-3xl mx-auto text-lg font-bold uppercase tracking-widest mb-4">
            Professional AI Creator • Video Editor • Web Developer • Digital Designer
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Choose a digital service, process the secure payment, and let's craft something cinematic.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="flex justify-center items-center gap-4 mb-10 text-white">
          <span className={`text-sm font-bold ${currency === 'USD' ? 'text-brand-blue' : 'text-gray-500'}`}>USD ($)</span>
          <button 
            onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
            className="w-14 h-7 rounded-full bg-black/50 border border-white/20 p-1 flex items-center transition-all duration-300 relative focus:outline-none"
          >
            <motion.div 
              className="w-5 h-5 rounded-full bg-brand-blue"
              animate={{ x: currency === 'USD' ? 0 : 26 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </button>
          <span className={`text-sm font-bold ${currency === 'INR' ? 'text-brand-blue' : 'text-gray-500'}`}>INR (₹)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {pricingPlansBase.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="glass-card rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all duration-300 relative group overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${plan.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/95 to-brand-black z-0 pointer-events-none group-hover:from-brand-black/80 group-hover:to-brand-black/90 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-purple/0 group-hover:from-brand-blue/10 group-hover:to-brand-purple/10 transition-colors duration-500 z-0" />
              
              <div className="relative z-10 p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-blue transition-colors">{plan.title}</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold font-mono text-white block">{formatCurrency(plan.basePrice, currency)}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">{plan.time}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-brand-blue" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleOrderClick({...plan, price: formatCurrency(plan.basePrice, currency)})}
                  className="w-full py-3 rounded-xl border border-white/10 text-white font-bold tracking-wide hover:bg-brand-blue hover:text-brand-black hover:border-brand-blue transition-all duration-300 flex items-center justify-center gap-2 group-hover:neon-glow"
                >
                  Order Now <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 md:p-10 rounded-3xl border border-white/5 bg-brand-navy/30 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-purple" />
            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <Sparkles className="text-brand-blue w-6 h-6" /> Contract Details
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Client Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Secure Email</label>
                  <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors" placeholder="client@agency.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Select Core Service</label>
                  <select 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors appearance-none cursor-pointer"
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                  >
                    {availableServices.map(s => (
                      <option key={s.id} value={s.id} className="bg-brand-black">{s.name} - {formatCurrency(s.price, currency)}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Premium Add-ons</label>
                  <div className="space-y-3 bg-black/40 border border-white/10 rounded-xl p-3 h-full">
                    {availableAddons.map(addon => (
                      <label key={addon.id} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            className="w-4 h-4 rounded-sm border-white/20 bg-brand-black checked:bg-brand-blue accent-brand-blue cursor-pointer"
                            checked={selectedAddons.includes(addon.id)}
                            onChange={(e) => {
                              if (e.target.checked) setSelectedAddons([...selectedAddons, addon.id]);
                              else setSelectedAddons(selectedAddons.filter(id => id !== addon.id));
                            }}
                          />
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{addon.name}</span>
                        </div>
                        <span className="text-xs font-mono text-brand-blue">+{formatCurrency(addon.price, currency)}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Mission Brief</label>
                <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-blue outline-none transition-colors resize-none" placeholder="Target objectives and aesthetic requirements..." />
              </div>
              <div className="border border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-brand-blue/50 hover:bg-brand-blue/5 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Upload className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />
                </div>
                <p className="text-sm text-gray-400 font-medium mb-1">Secure Intel Upload</p>
                <p className="text-xs text-gray-600">Drag files here or click to browse (Max 500MB)</p>
              </div>

              <div className="p-5 rounded-xl border border-brand-blue/30 bg-[rgba(0,210,255,0.05)] flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-brand-blue uppercase tracking-widest mb-1">Project Budget Estimate</p>
                  <p className="text-sm text-gray-400">Final price verified via WhatsApp</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-display font-bold text-white drop-shadow-[0_0_10px_rgba(0,210,255,0.3)]">{formattedEstimatedTotal}</span>
                </div>
              </div>

              <a 
                href={`https://wa.me/918221038164?text=${encodeURIComponent(`Hey Mahir! I am interested in the ${currentService.name} service${selectedAddons.length > 0 ? ` with ${selectedAddons.length} add-ons` : ''}. The estimated budget is ${formattedEstimatedTotal}. Let's discuss!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-brand-blue text-brand-black font-bold tracking-wide flex items-center justify-center gap-2 hover:neon-glow transition-all duration-300"
              >
                Initialize Contract <Send className="w-5 h-5" />
              </a>
            </form>
          </motion.div>

          {/* UPI Payment System */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-brand-black/80 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-blue/10 blur-[50px] rounded-full group-hover:bg-brand-blue/20 transition-colors" />
              
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="text-green-400 w-5 h-5" /> Secure Checkout
                </h3>
                <div className="flex gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-4 opacity-70" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mb-8 bg-white p-4 rounded-2xl w-max mx-auto shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300">
                <QrCode className="w-48 h-48 text-brand-black" />
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-4 flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase mb-1">Official UPI ID</p>
                  <p className="text-white font-bold tracking-wide">mahir@upi</p>
                </div>
                <button 
                  onClick={handleCopyUPI}
                  className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-brand-black transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <button 
                onClick={handlePaymentSimulation}
                className="w-full py-4 rounded-xl bg-white text-black font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors relative overflow-hidden"
              >
                Simulate Payment Processing
              </button>

              <AnimatePresence>
                {paymentSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-brand-black/90 backdrop-blur-md flex flex-col items-center justify-center z-20 rounded-3xl"
                  >
                     <motion.div 
                       initial={{ scale: 0 }}
                       animate={{ scale: 1 }}
                       transition={{ type: "spring", damping: 15 }}
                       className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mb-4 neon-glow"
                     >
                       <Check className="w-8 h-8 text-green-400" />
                     </motion.div>
                     <h4 className="text-white font-bold font-display text-xl mb-1">Transaction Verified</h4>
                     <p className="text-green-400 text-sm font-mono tracking-widest">FUNDS SECURED</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Hire Contact Options */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              <a href="https://wa.me/918221038164" target="_blank" rel="noopener noreferrer" className="glass-card p-3 rounded-2xl flex items-center justify-center gap-2 border border-white/5 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-colors group">
                <span className="w-2 h-2 rounded-full bg-[#25D366] group-hover:shadow-[0_0_10px_#25D366]"></span>
                <span className="text-xs font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp</span>
              </a>
              <a href="#" className="glass-card p-3 rounded-2xl flex items-center justify-center gap-2 border border-white/5 hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 transition-colors group">
                <span className="w-2 h-2 rounded-full bg-[#E1306C] group-hover:shadow-[0_0_10px_#E1306C]"></span>
                <span className="text-xs font-bold text-white group-hover:text-[#E1306C] transition-colors">Instagram</span>
              </a>
              <a href="#" className="glass-card p-3 rounded-2xl flex items-center justify-center gap-2 border border-white/5 hover:border-[#0088cc]/50 hover:bg-[#0088cc]/10 transition-colors group">
                <span className="w-2 h-2 rounded-full bg-[#0088cc] group-hover:shadow-[0_0_10px_#0088cc]"></span>
                <span className="text-xs font-bold text-white group-hover:text-[#0088cc] transition-colors">Telegram</span>
              </a>
              <a href="mailto:MAHIRTANDON2026@GMAIL.COM" className="glass-card p-3 rounded-2xl flex items-center justify-center gap-2 border border-white/5 hover:border-brand-blue/50 hover:bg-brand-blue/10 transition-colors group">
                <span className="w-2 h-2 rounded-full bg-brand-blue group-hover:shadow-[0_0_10px_#00d2ff]"></span>
                <span className="text-xs font-bold text-white group-hover:text-brand-blue transition-colors">Email</span>
              </a>
              <a href="#" className="glass-card p-3 rounded-2xl flex items-center justify-center gap-2 border border-white/5 hover:border-[#1DBF73]/50 hover:bg-[#1DBF73]/10 transition-colors group">
                <span className="w-2 h-2 rounded-full bg-[#1DBF73] group-hover:shadow-[0_0_10px_#1DBF73]"></span>
                <span className="text-xs font-bold text-white group-hover:text-[#1DBF73] transition-colors">Fiverr</span>
              </a>
              <a href="#" className="glass-card p-3 rounded-2xl flex items-center justify-center gap-2 border border-white/5 hover:border-[#14A800]/50 hover:bg-[#14A800]/10 transition-colors group">
                <span className="w-2 h-2 rounded-full bg-[#14A800] group-hover:shadow-[0_0_10px_#14A800]"></span>
                <span className="text-xs font-bold text-white group-hover:text-[#14A800] transition-colors">Upwork</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showPaymentModal && selectedPlan && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-brand-black border border-white/10 rounded-3xl p-6 md:p-8 max-w-md w-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00b9f1] to-[#002e6e] z-0" />
              
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              <div className="text-center mt-2 mb-6 relative z-10">
                <div className="flex justify-center mb-4">
                  <h3 className="text-2xl font-bold font-display text-white tracking-wide">Paytm</h3>
                </div>
                <h4 className="text-xl font-bold text-white mb-1">Scan to Pay</h4>
                <p className="text-brand-blue font-mono font-bold text-2xl">{selectedPlan.price}</p>
                <p className="text-gray-400 text-sm mt-1">{selectedPlan.title}</p>
              </div>

              <div className="bg-white rounded-2xl p-4 w-64 h-64 mx-auto mb-6 relative group shadow-[0_0_30px_rgba(0,185,241,0.15)] flex items-center justify-center">
                <img 
                  src="/paytm-qr.png" 
                  alt="Paytm QR Code Scanner"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg";
                  }}
                />
                
                {/* Fallback Instruction Overlay visible only if original fails or as tooltip */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center p-4 text-center">
                  <p className="text-xs text-white">Upload your QR to <span className="text-brand-blue font-mono">/public/paytm-qr.png</span> to display here permanently.</p>
                </div>
              </div>

              <div className="bg-black/50 border border-white/10 rounded-xl p-4 flex items-center justify-between mb-6 relative z-10">
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase mb-1">Official UPI ID</p>
                  <p className="text-white font-bold tracking-wide">mahir@upi</p>
                </div>
                <button 
                  onClick={handleCopyUPI}
                  className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-brand-black transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <button 
                onClick={() => {
                  handlePaymentSimulation();
                  setTimeout(() => setShowPaymentModal(false), 5000);
                }}
                className="w-full py-4 rounded-xl bg-[#00b9f1] text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-[#00a8dc] transition-colors relative z-10"
              >
                Simulate Payment Success
              </button>

              <AnimatePresence>
                {paymentSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-brand-black/95 backdrop-blur-md flex flex-col items-center justify-center z-20"
                  >
                     <motion.div 
                       initial={{ scale: 0 }}
                       animate={{ scale: 1 }}
                       transition={{ type: "spring", damping: 15 }}
                       className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                     >
                       <Check className="w-8 h-8 text-green-400" />
                     </motion.div>
                     <h4 className="text-white font-bold font-display text-xl mb-1">Payment Received</h4>
                     <p className="text-green-400 text-sm font-mono tracking-widest">ORDER CONFIRMED</p>
                     <p className="text-gray-400 text-xs mt-4">Redirecting...</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
