
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import GlassCard from '@/components/ui/GlassCard';
import { Database } from '@/integrations/supabase/types';

interface ContactFormProps {
  className?: string;
  showHeader?: boolean;
}

type ContactSubmission = Database['public']['Tables']['contact_submissions']['Insert'];

const ContactForm: React.FC<ContactFormProps> = ({ className = '', showHeader = false }) => {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

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
        .insert(formData);
      
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
    <div ref={sectionRef} className={className}>
      {showHeader && (
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 bg-accent/10 rounded-full text-sm font-medium text-accent border border-accent/20 mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Get In Touch
          </span>
          <h2 className={`heading-lg mb-4 text-foreground transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Ready to <span className="text-gradient-primary">Transform</span> Your Digital Presence?
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Contact us today and let's discuss how Antimony can help you achieve your digital goals.
          </p>
        </div>
      )}
      
      <div className="max-w-3xl mx-auto">
        <GlassCard className={`transition-all duration-1000 bg-white shadow-lg border border-border ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none text-foreground"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#031D44] hover:bg-[#031D44]/90 text-white font-medium transition-all duration-300 rounded-lg"
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </Button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default ContactForm;
