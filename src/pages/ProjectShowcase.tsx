
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { projectsData } from '@/data/projects';

const ProjectShowcase: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isVisible, setIsVisible] = useState(false);
  
  // Find the project by ID
  const project = projectsData.find((p) => p.id === id);
  
  useEffect(() => {
    // Animation effect on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-8">We couldn't find the project you're looking for.</p>
            <Link to="/#projects">
              <Button>
                <ArrowLeft className="mr-2" size={16} />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      <Navbar />
      <main className="flex-1 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            {/* Back button */}
            <Link to="/#projects" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2" size={16} />
              Back to Projects
            </Link>
            
            {/* Title Section */}
            <div className="mb-12">
              <h1 className="heading-lg mb-6 text-gradient">{project.title}</h1>
            </div>
            
            {/* Image Section */}
            <div className="mb-16 overflow-hidden rounded-2xl border border-white/10">
              <img 
                src={`.${project.image}`} 
                alt={project.title} 
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ maxHeight: '500px' }}
              />
            </div>
            
            {/* Description Section */}
            <GlassCard className="mb-16">
              <h2 className="text-2xl font-bold mb-4">Project Description</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                {project.description}
              </p>
              <p className="text-white/80 leading-relaxed">
                This is an extended description that provides more details about the project. 
                Here we can discuss the challenges faced, the solutions implemented, and the 
                overall impact of the project. This section gives a comprehensive understanding 
                of the project's scope and execution.
              </p>
            </GlassCard>
            
            {/* Tech Stack Section */}
            <GlassCard>
              <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center transition-all hover:bg-white/10"
                  >
                    <div className="bg-antimony/20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <span className="text-antimony">{tech.charAt(0)}</span>
                    </div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectShowcase;
