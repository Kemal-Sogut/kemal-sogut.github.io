
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ease-in-out",
        isScrolled ? "py-4 glass-morphism" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-gradient">
            Antimony
          </a>
        </div>

        <nav className="hidden md:flex space-x-8">
          {["Services", "Features", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div>
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-full bg-antimony hover:bg-antimony-light text-white text-sm font-medium transition-all duration-300 ease-in-out"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
