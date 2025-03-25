
import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { Button } from '../ui/button';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form data to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);
      
      if (error) {
        throw error;
      }
      
      // Show success toast
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Gradient orb */}
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-antimony/5 blur-[80px] animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium border border-white/10 mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Get In Touch
          </span>
          <h2 className={`heading-lg mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Ready to <span className="text-gradient">Transform</span> Your Digital Presence?
          </h2>
          <p className={`text-white/70 max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Contact us today and let's discuss how Antimony can help you achieve your digital goals.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <GlassCard className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-antimony/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-antimony/50"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-antimony/50 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-antimony hover:bg-antimony-light text-white font-medium transition-all duration-300 rounded-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
