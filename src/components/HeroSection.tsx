
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 sm:pt-36 sm:pb-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8 sm:space-y-12">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-earth-brown leading-tight">
                Yoga from the <span className="text-golden">Heart</span> Canada
              </h1>
              <p className="text-xl sm:text-2xl text-earth-brown/80 font-inter font-light leading-relaxed">
                with Anne Parsonage
              </p>
            </div>
            
            <p className="text-lg sm:text-xl text-earth-brown/70 font-inter leading-relaxed max-w-2xl mx-auto">
              Discover inner peace through heart-centered yoga that combines ancient wisdom with modern understanding. Join our community of mindful practitioners in downtown Toronto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gradient-golden text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
                onClick={() => scrollToSection('schedule')}
              >
                Try a Class
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-amber text-amber hover:bg-amber hover:text-white font-semibold px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 text-base sm:text-lg"
                onClick={() => scrollToSection('schedule')}
              >
                See Class Schedule
              </Button>
            </div>
          </div>
          
          <div className="relative mt-12 sm:mt-16">
            <div className="absolute inset-0 gradient-golden rounded-3xl sm:rounded-[2rem] blur-3xl sm:blur-[4rem] opacity-20 animate-float"></div>
            <img 
              src="/lovable-uploads/00047610-16a8-4235-aa82-303fee71f7b2.png" 
              alt="Yoga practice in nature" 
              className="relative rounded-3xl sm:rounded-[2rem] shadow-2xl w-full max-w-2xl mx-auto h-auto animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
