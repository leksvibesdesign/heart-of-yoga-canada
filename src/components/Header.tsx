
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-warm-beige z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/dc69a65d-d7cd-4ec6-981f-7dbee77d54a5.png" 
              alt="Yoga from the Heart Canada Logo" 
              className="h-10 sm:h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-sm xl:text-base">
              Home
            </button>
            <button onClick={() => scrollToSection('what-we-teach')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-sm xl:text-base">
              Yoga Description
            </button>
            <button onClick={() => scrollToSection('about')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-sm xl:text-base">
              About the Teacher
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-sm xl:text-base">
              Schedule & Fees
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-sm xl:text-base">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-sm xl:text-base">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-earth-brown hover:text-amber transition-colors p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop CTA Button */}
          <Button className="hidden sm:flex gradient-golden text-white font-medium px-4 lg:px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 text-sm lg:text-base">
            Book a Class
          </Button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-warm-beige">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-center py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('what-we-teach')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-center py-2">
                Yoga Description
              </button>
              <button onClick={() => scrollToSection('about')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-center py-2">
                About the Teacher
              </button>
              <button onClick={() => scrollToSection('schedule')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-center py-2">
                Schedule & Fees
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-center py-2">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-earth-brown hover:text-amber transition-colors font-inter font-medium text-center py-2">
                Contact
              </button>
              <Button className="gradient-golden text-white font-medium px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 mx-auto">
                Book a Class
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
