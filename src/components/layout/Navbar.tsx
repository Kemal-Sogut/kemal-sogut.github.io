
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
          <Link to="/">
            <img 
              className="h-8 w-auto mr-3" 
              src="/antimony-logo-colour-transparent.png" 
              alt="Antimony logo" 
            />
          </Link>
          <Link to="/" className="text-2xl font-bold text-gradient">
            Antimony
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/#services"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            to="/#features"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            to="/projects"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/#contact"
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div>
          <Link 
            to="/#contact" 
            className="px-5 py-2.5 rounded-full bg-antimony hover:bg-antimony-light text-white text-sm font-medium transition-all duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
