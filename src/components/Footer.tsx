
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-earth-brown text-white py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <img 
              src="/lovable-uploads/dc69a65d-d7cd-4ec6-981f-7dbee77d54a5.png" 
              alt="Yoga from the Heart Canada Logo" 
              className="h-12 sm:h-16 w-auto mb-4 mx-auto sm:mx-0"
            />
            <p className="text-sm sm:text-base text-white/80 font-inter leading-relaxed">
              Heart-centered yoga combining ancient wisdom with modern understanding for inner peace and spiritual growth.
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-playfair font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><button onClick={() => scrollToSection('what-we-teach')} className="text-sm sm:text-base text-white/80 hover:text-golden transition-colors font-inter">Yoga Description</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-sm sm:text-base text-white/80 hover:text-golden transition-colors font-inter">About Anne</button></li>
              <li><button onClick={() => scrollToSection('schedule')} className="text-sm sm:text-base text-white/80 hover:text-golden transition-colors font-inter">Schedule & Fees</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-sm sm:text-base text-white/80 hover:text-golden transition-colors font-inter">Contact</button></li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-playfair font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Contact Info</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-golden flex-shrink-0" />
                <span className="text-sm sm:text-base text-white/80 font-inter">(416) 538-7079</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-golden flex-shrink-0" />
                <span className="text-xs sm:text-sm text-white/80 font-inter break-all">anne@yogafromtheheartcanada.com</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start space-x-2 sm:space-x-3">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-golden mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-white/80 font-inter text-center sm:text-left">283 Spadina Avenue<br />Toronto, ON M5T 2E3</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-white/60 font-inter">
            © {new Date().getFullYear()} Yoga from the Heart Canada. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
