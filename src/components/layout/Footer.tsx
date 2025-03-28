
import React from 'react';
import { cn } from '@/lib/utils';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-gradient inline-block">
              Antimony
            </a>
            <p className="text-white/70 text-sm max-w-xs">
              Crafting exceptional digital experiences that transform businesses and delight users.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'github', 'instagram'].map((platform) => (
                <a 
                  key={platform}
                  href={`https://${platform}.com`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="w-5 h-5 text-white/70">
                    <use href={`#icon-${platform}`}></use>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Services</h3>
            <ul className="space-y-2">
              {['Web Applications', 'Website Development', 'Mobile Apps', 'SEO Optimization', 'Workflow Automation'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/70 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-antimony mt-1">
                  <svg className="w-4 h-4">
                    <use href="#icon-map"></use>
                  </svg>
                </span>
                <span className="text-sm text-white/70">
                  123 Innovation Street, Tech City, TC 10101
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-antimony">
                  <svg className="w-4 h-4">
                    <use href="#icon-mail"></use>
                  </svg>
                </span>
                <a href="mailto:hello@antimony.com" className="text-sm text-white/70 hover:text-white transition-colors">
                  hello@antimony.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-antimony">
                  <svg className="w-4 h-4">
                    <use href="#icon-phone"></use>
                  </svg>
                </span>
                <a href="tel:+1234567890" className="text-sm text-white/70 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={cn(
          "w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"
        )}></div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Antimony. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
