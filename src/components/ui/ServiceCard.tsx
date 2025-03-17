
import React from 'react';
import { cn } from '@/lib/utils';
import GlassCard from './GlassCard';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  delay = 0
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0 translate-y-8 transition-all duration-700 ease-out",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <GlassCard hover={true} className="h-full">
        <div className="flex flex-col h-full">
          <div className="mb-6 bg-antimony/10 p-3 rounded-full w-14 h-14 flex items-center justify-center">
            <div className="text-antimony">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">{description}</p>
        </div>
      </GlassCard>
    </div>
  );
};

export default ServiceCard;
