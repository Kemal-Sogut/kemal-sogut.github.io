
import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform with product filtering, cart management, and secure checkout.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce',
  },
  {
    title: 'Healthcare Management System',
    description: 'A comprehensive healthcare management system for clinics to manage patient records, appointments, and billing.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500',
    technologies: ['React', 'Express', 'PostgreSQL', 'Docker'],
    category: 'web',
    liveUrl: 'https://example.com/healthcare',
    githubUrl: 'https://github.com/example/healthcare',
  },
  {
    title: 'Inventory Management App',
    description: 'A mobile application that helps businesses track inventory, manage suppliers, and generate reports.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=500',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'mobile',
    liveUrl: '',
    githubUrl: 'https://github.com/example/inventory',
  },
  {
    title: 'Business Analytics Dashboard',
    description: 'An interactive dashboard displaying real-time business metrics with customizable widgets and data visualization.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500',
    technologies: ['Vue.js', 'D3.js', 'GraphQL', 'AWS'],
    category: 'web',
    liveUrl: 'https://example.com/analytics',
    githubUrl: 'https://github.com/example/analytics',
  },
  {
    title: 'Social Media Scheduler',
    description: 'A web application for scheduling and managing social media posts across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=500',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'web',
    liveUrl: 'https://example.com/scheduler',
    githubUrl: 'https://github.com/example/scheduler',
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500',
    technologies: ['Flutter', 'Dart', 'Firebase', 'TensorFlow'],
    category: 'mobile',
    liveUrl: '',
    githubUrl: 'https://github.com/example/fitness',
  },
];

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
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium border border-white/10 mb-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Our Portfolio
          </span>
          <h2 className={`heading-lg mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <span className="text-gradient">Recent Projects</span> <br />
            We've Delivered
          </h2>
          <p className={`text-white/70 max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Explore our portfolio of successful projects that showcase our expertise in creating
            innovative and effective digital solutions for diverse industries.
          </p>
        </div>
        
        <div className={`flex justify-center mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className={`flex justify-center mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Button className="bg-antimony hover:bg-antimony-light text-white" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
