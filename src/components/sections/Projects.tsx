
import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { projectsData } from '@/data/projects';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('all');
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

  const filteredProjects = activeTab === 'all' 
    ? projectsData.slice(0, 3) // Show only first 3 projects on homepage
    : projectsData.filter(project => project.category === activeTab).slice(0, 3);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 bg-accent/10 rounded-full text-sm font-medium text-accent border border-accent/20 mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Our Portfolio
          </span>
          <h2 className={`heading-lg mb-4 text-foreground transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <span className="text-gradient-primary">Recent Projects</span> <br />
            We've Delivered
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Explore our portfolio of successful projects that showcase our expertise in creating
            innovative and effective digital solutions for diverse industries.
          </p>
        </div>
        
        <div className={`flex justify-center mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-background/50 border border-border">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              delay={index * 100}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
        
        <div className={`mt-12 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          <Link to="/projects">
            <Button className="bg-antimony hover:bg-antimony-light text-white">
              View All Projects
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
