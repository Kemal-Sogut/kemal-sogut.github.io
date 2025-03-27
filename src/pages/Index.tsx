
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
