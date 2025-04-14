import React, { useEffect, useState } from 'react';
import AnimatedText from '../ui/AnimatedText';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./hero-background.jpg')" }}
        />
        <div className="absolute inset-0" /> {/* Slightly darker overlay for better contrast */}
      </div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-4 inline-block">
          <div className={`px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium backdrop-blur-sm border border-white/10 transition-all duration-700 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <span className="text-antimony">Accelerate Your Digital Growth</span>
          </div>
        </div>
        
        <h1 className="heading-xl mb-6 mt-4">
          <AnimatedText 
            text="Built for You" 
            className="block mb-2"
            gradient={false}
            words={true}
          />
          <AnimatedText 
            text="Backed by Code." 
            className="block text-white font-bold"
            words={true}
            delay={200}
          />
        </h1>
        
        <div className={`max-w-2xl mx-auto mb-13 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-white/80">
          Scalable, maintainable, and professionally designed software solutions.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="#services" 
            className="px-8 py-3 rounded-full bg-[#031D44] hover:bg-[#031D44]/90 text-white font-medium transition-all duration-300"
          >
            Explore Services
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full bg-transparent border border-white/20 hover:border-white/40 text-white font-medium transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-sm text-white mb-2">Scroll to explore</span>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
