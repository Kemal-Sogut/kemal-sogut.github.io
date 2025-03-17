
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  words?: boolean;
  gradient?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className, 
  delay = 0, 
  words = false,
  gradient = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const elements = container.children;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          Array.from(elements).forEach((el, i) => {
            const htmlEl = el as HTMLElement;
            setTimeout(() => {
              htmlEl.style.opacity = '1';
              htmlEl.style.transform = 'translateY(0)';
            }, delay + (i * 50));
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(container);
    
    return () => observer.disconnect();
  }, [delay]);
  
  const renderContent = () => {
    if (words) {
      return text.split(' ').map((word, i) => (
        <span 
          key={i} 
          className={cn(
            "inline-block opacity-0 transform translate-y-[15px] transition-all duration-500 ease-out",
            gradient && "text-gradient-primary"
          )}
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          {word}{' '}
        </span>
      ));
    }
    
    return text.split('').map((char, i) => (
      <span 
        key={i} 
        className={cn(
          "inline-block opacity-0 transform translate-y-[15px] transition-all duration-300 ease-out",
          gradient && "text-gradient-primary"
        )}
        style={{ transitionDelay: `${i * 30}ms` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };
  
  return (
    <div ref={containerRef} className={className}>
      {renderContent()}
    </div>
  );
};

export default AnimatedText;
