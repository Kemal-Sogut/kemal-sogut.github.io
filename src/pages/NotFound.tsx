
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold mb-6 text-gradient-primary">404</h1>
          <p className="text-2xl text-foreground mb-8">Oops! Page not found</p>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="px-6 py-3 rounded-full bg-[#031D44] hover:bg-[#fff] text-white hover:border-black hover:text-black text-sm font-medium transition-all duration-300 ease-in-out border border-transparent hover:border-black"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
