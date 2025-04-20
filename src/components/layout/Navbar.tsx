
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
        isScrolled ? "py-4 bg-white/80 backdrop-blur-lg shadow-sm" : "py-6"
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
          <Link to="/" className="text-2xl font-bold text-foreground">
            Antimony
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link
            to="/#services"
            className="text-medium font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            to="/#features"
            className="text-medium font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            to="/#projects"
            className="text-medium font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/#contact"
            className="text-medium font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div>
          <Link 
            to="/#contact" 
            className="px-5 py-2.5 rounded-full bg-[#031D44] hover:bg-[#fff] text-white hover:border-black hover:text-black text-sm font-medium transition-all duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
