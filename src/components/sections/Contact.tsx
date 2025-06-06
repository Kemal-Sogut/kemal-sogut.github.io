import React, { useEffect } from 'react';
import ContactForm from '../forms/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.onload = () => {
      // @ts-ignore
      if (window.jotformEmbedHandler) {
        // @ts-ignore
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-251559179255265']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

      {/* Gradient orb */}
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-antimony/5 blur-[80px] animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto space-y-10">
        <ContactForm showHeader={true} />

        {/* Embedded JotForm iframe */}
        <div className="w-full">
          <iframe
            id="JotFormIFrame-251559179255265"
            title="Information Request Form"
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/251559179255265"
            frameBorder="0"
            style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
            scrolling="no"
            allowTransparency={true}
            onLoad={() => window.scrollTo(0, 0)}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
