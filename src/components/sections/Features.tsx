
import React from 'react';
import FeatureCard from '../ui/FeatureCard';

const featuresData = [
  {
    title: 'Custom Development',
    description: 'Tailored solutions built with cutting-edge technology to meet your specific business requirements.'
  },
  {
    title: 'Responsive Design',
    description: 'Interfaces that work flawlessly across all devices, from desktop to mobile.'
  },
  {
    title: 'Performance Optimization',
    description: 'Blazing-fast loading speeds and smooth user experiences to keep your audience engaged.'
  },
  {
    title: 'Accessibility Compliance',
    description: 'Inclusive designs that ensure your digital products are usable by everyone.'
  },
  {
    title: 'API Integration',
    description: 'Seamless connections with third-party services to enhance your application functionality.'
  },
  {
    title: 'Continuous Support',
    description: 'Ongoing maintenance and updates to keep your digital assets secure and current.'
  }
];

const Features: React.FC = () => {
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
    <section id="features" ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 bg-accent/10 rounded-full text-sm font-medium text-accent border border-accent/20 mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Why Choose Us
          </span>
          <h2 className={`heading-lg mb-4 text-foreground transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Features That <span className="text-gradient-primary">Set Us Apart</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Antimony delivers exceptional digital experiences with attention to detail and commitment to quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
