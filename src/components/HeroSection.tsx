
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-earth-brown leading-tight">
                Yoga from the <span className="text-golden">Heart</span> Canada
              </h1>
              <p className="text-lg sm:text-xl text-earth-brown/80 font-inter font-light leading-relaxed">
                with Anne Parsonage
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-earth-brown/70 font-inter leading-relaxed max-w-lg mx-auto lg:mx-0">
              Discover inner peace through heart-centered yoga that combines ancient wisdom with modern understanding. Join our community of mindful practitioners in downtown Toronto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-golden text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                onClick={() => scrollToSection('schedule')}
              >
                Try a Class
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-amber text-amber hover:bg-amber hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
                onClick={() => scrollToSection('schedule')}
              >
                See Class Schedule
              </Button>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 gradient-golden rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-20 animate-float"></div>
            <img 
              src="/lovable-uploads/00047610-16a8-4235-aa82-303fee71f7b2.png" 
              alt="Yoga practice in nature" 
              className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
