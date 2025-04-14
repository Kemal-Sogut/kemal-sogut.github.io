
import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const socialIcons = [
  { name: 'twitter', icon: Twitter, url: 'https://x.com/AntimonyCanada' },
  { name: 'linkedin', icon: Linkedin, url: 'https://www.linkedin.com/company/antimony-tech/' },
  { name: 'instagram', icon: Instagram, url: 'https://www.instagram.com/antimonycanada/' },
];

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 relative bg-secondary/50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-gradient-primary inline-block">
              Antimony
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Crafting exceptional digital experiences that transform businesses and delight users.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a 
                    key={item.name}
                    href={item.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-accent/10 hover:text-accent transition-colors duration-300"
                    aria-label={`Visit our ${item.name} page`}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Services</h3>
            <ul className="space-y-2">
              {['Web Applications', 'Website Development', 'Mobile Apps', 'SEO Optimization', 'Workflow Automation'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-accent mt-1">
                  <svg className="w-4 h-4">
                    <use href="#icon-map"></use>
                  </svg>
                </span>
                <span className="text-sm text-muted-foreground">
                  104 Goldridge Dr, Kanata ON K2T 1G1, Canada
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent">
                  <svg className="w-4 h-4">
                    <use href="#icon-mail"></use>
                  </svg>
                </span>
                <a href="mailto:info@antimonytech.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  info@antimonytech.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent">
                  <svg className="w-4 h-4">
                    <use href="#icon-phone"></use>
                  </svg>
                </span>
                <a href="tel:+18733551089" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  +1 (873) 355-1089
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={cn(
          "w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent my-8"
        )}></div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Antimony. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
