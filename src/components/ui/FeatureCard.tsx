
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  index 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={cn(
        "border border-white/10 p-6 rounded-xl transition-all duration-700 ease-out relative overflow-hidden",
        "opacity-0 translate-y-8",
        isVisible && "opacity-100 translate-y-0",
        "group hover:-translate-y-1"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-antimony/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-antimony/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
      
      <span className="text-antimony font-mono text-sm mb-4 inline-block">
        {(index + 1).toString().padStart(2, '0')}
      </span>
      
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
