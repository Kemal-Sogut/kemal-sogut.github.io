
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { projectsData } from '@/data/projects';
import GlassCard from '@/components/ui/GlassCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProjectsPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredProjects = activeTab === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    window.scrollTo(0, 0);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium border border-white/10 mb-4">
              Our Portfolio
            </span>
            <h1 className="heading-lg mb-4">
              <span className="text-gradient">Explore Our Projects</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover our portfolio of successful projects that showcase our expertise in creating
              innovative and effective digital solutions for diverse industries.
            </p>
          </div>
          
          {/* Tabs */}
          <div className={`flex justify-center mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10">
                <TabsTrigger value="all" className="data-[state=active]:bg-antimony data-[state=active]:text-white">
                  All
                </TabsTrigger>
                <TabsTrigger value="web" className="data-[state=active]:bg-antimony data-[state=active]:text-white">
                  Web
                </TabsTrigger>
                <TabsTrigger value="mobile" className="data-[state=active]:bg-antimony data-[state=active]:text-white">
                  Mobile
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Projects Grid */}
          <div className={`space-y-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            {filteredProjects.map((project, index) => (
              <GlassCard key={project.id} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      style={{ maxHeight: '400px' }}
                    />
                  </div>
                  
                  {/* Project Details */}
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                    
                    <p className="text-white/80 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 bg-white/10 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-white/70 mb-8">
                      This project showcases our ability to deliver high-quality solutions that meet client needs while maintaining excellent user experience and modern design principles.
                    </p>
                    
                    <div className="mt-auto flex gap-3">
                      <Link to={`/project/${project.id}`}>
                        <Button className="bg-antimony hover:bg-antimony-light text-white">
                          View Details
                          <ChevronRight size={16} className="ml-1" />
                        </Button>
                      </Link>
                      
                      {project.liveUrl && (
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-1.5 bg-white/5 border-white/10 hover:bg-white/10"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink size={16} />
                          Visit Website
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          
          {/* Pagination (for future use when there are more projects) */}
          {filteredProjects.length > 5 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
