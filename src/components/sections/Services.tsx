
import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { Code, Globe, Smartphone, Award, Settings, Database } from 'lucide-react';

const servicesData = [
  {
    title: 'Web Application Development',
    description: 'Custom web applications with modern frameworks and cutting-edge technologies for seamless user experiences.',
    icon: <Code size={24} />,
  },
  {
    title: 'Website Development',
    description: 'Responsive and performance-optimized websites with beautiful UI/UX design that converts visitors to customers.',
    icon: <Globe size={24} />,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide exceptional user experience across all devices.',
    icon: <Smartphone size={24} />,
  },
  {
    title: 'SEO Optimization',
    description: 'Comprehensive search engine optimization to improve your visibility and drive organic traffic to your business.',
    icon: <Award size={24} />,
  },
  {
    title: 'Workflow Automation',
    description: 'Custom automation solutions to streamline your business processes and increase operational efficiency.',
    icon: <Settings size={24} />,
  },
  {
    title: 'Database Solutions',
    description: 'Robust database architecture, optimization, and management services to ensure your data is secure, accessible, and efficient.',
    icon: <Database size={24} />,
  },
];

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
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

  return (
    <section id="services" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium border border-white/10 mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Our Services
          </span>
          <h2 className={`heading-lg mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <span className="text-gradient">Comprehensive Solutions</span> <br />
            for Your Digital Needs
          </h2>
          <p className={`text-white/70 max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            We provide end-to-end digital solutions that help businesses grow, optimize operations,
            and create meaningful connections with their audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
