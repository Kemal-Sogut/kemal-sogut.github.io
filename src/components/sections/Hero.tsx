
import React, { useEffect, useState } from 'react';
import AnimatedText from '../ui/AnimatedText';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-20">
      {/* Background with light pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300c3ff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[80px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-4 inline-block">
          <div className={`px-4 py-1.5 rounded-full bg-white neo-blur text-sm font-medium backdrop-blur-sm border border-accent/20 transition-all duration-700 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <span className="text-accent neon-glow">Accelerate Your Digital Growth</span>
          </div>
        </div>
        
        <h1 className="heading-xl mb-6 mt-4 text-slate-900">
          <AnimatedText 
            text="The world of custom" 
            className="block mb-2"
            gradient={false}
            words={true}
          />
          <AnimatedText 
            text="Software Solutions" 
            className="block font-bold neon-glow text-accent"
            words={true}
            delay={200}
          />
        </h1>
        
        <div className={`max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-slate-700">
            Antimony crafts exceptional web applications, websites, and mobile apps
            while optimizing SEO and automating workflows for businesses worldwide.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="#services" 
            className="px-8 py-3 rounded-full bg-accent hover:bg-accent-light text-white font-medium transition-all duration-300 neon-box animate-glow"
          >
            Explore Services
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full bg-transparent border border-accent/30 hover:border-accent/60 text-slate-900 font-medium transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-sm mb-2 text-slate-700">Scroll to explore</span>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-accent/40 flex justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
