
import React from 'react';
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className,
  hover = false
}) => {
  return (
    <div 
      className={cn(
        "glass-morphism p-6 rounded-2xl relative overflow-hidden", 
        hover && "group transition-all duration-300 hover:-translate-y-2",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    </div>
  );
};

export default GlassCard;
