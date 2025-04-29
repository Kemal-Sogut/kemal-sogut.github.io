
import React from 'react';
import ContactForm from '../forms/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      
      {/* Gradient orb */}
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-antimony/5 blur-[80px] animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto">
        <ContactForm showHeader={true} />
      </div>
    </section>
  );
};

export default Contact;
