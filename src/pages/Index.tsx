
import React, { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { lazy } from 'react';

// Lazy load the Hero component since it uses 3D libraries
const Hero = lazy(() => import('@/components/sections/Hero'));

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white overflow-hidden">
      <Navbar />
      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Hero />
        </Suspense>
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
