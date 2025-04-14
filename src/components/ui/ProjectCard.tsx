import React from 'react';
import { cn } from '@/lib/utils';
import GlassCard from './GlassCard';
import { ExternalLink, Github, Info } from 'lucide-react';
import { Button } from './button';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id,
  title, 
  description, 
  image,
  technologies,
  liveUrl,
  githubUrl,
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
      <GlassCard hover={true} className="h-full overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg relative">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-white/10 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2 py-1 bg-white/10 rounded-full text-xs">
                +{technologies.length - 3} more
              </span>
            )}
          </div>
          
          <div className="mt-auto flex gap-2 flex-wrap">
            <Link to={`/project/${id}`}>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1.5 bg-[#031D44] text-white border-[#031D44] hover:bg-[#031D44]/90 transition-colors"
              >
                <Info size={14} />
                Details
              </Button>
            </Link>
            {githubUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1.5 bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                onClick={() => window.open(githubUrl, '_blank')}
              >
                <Github size={14} />
                Code
              </Button>
            )}
            {liveUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-1.5 bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                onClick={() => window.open(liveUrl, '_blank')}
              >
                <ExternalLink size={14} />
                Demo
              </Button>
            )}
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default ProjectCard;
