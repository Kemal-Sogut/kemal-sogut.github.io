
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <main className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <h1 className="heading-lg mb-4 text-foreground">
              Contact <span className="text-gradient-primary">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you! Get in touch with our team and let's start a conversation about your needs.
            </p>
          </div>

          <ContactForm className="mt-12" showHeader={false} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
