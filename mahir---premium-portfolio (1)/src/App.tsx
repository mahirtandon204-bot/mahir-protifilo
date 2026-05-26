/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { VideoShowcase } from './components/VideoShowcase';
import { Portfolio } from './components/Portfolio';
import { Gallery } from './components/Gallery';
import { HireSystem } from './components/HireSystem';
import { BlogSection } from './components/BlogSection';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="bg-brand-black text-gray-200 min-h-screen selection:bg-brand-blue/30 selection:text-white">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <VideoShowcase />
        <Portfolio />
        <Gallery />
        <HireSystem />
        <BlogSection />
        <About />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

