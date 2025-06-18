
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 gradient-soft">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-earth-brown mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 gradient-golden mx-auto rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="border-0 shadow-lg rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="bg-golden/20 p-3 sm:p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-amber" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-semibold text-earth-brown mb-2">Phone</h3>
              <p className="text-sm sm:text-base text-earth-brown/80 font-inter">(416) 538-7079</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="bg-amber/20 p-3 sm:p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-golden" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-semibold text-earth-brown mb-2">Email</h3>
              <p className="text-xs sm:text-sm text-earth-brown/80 font-inter break-all">anne@yogafromtheheartcanada.com</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="bg-golden/20 p-3 sm:p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-amber" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-semibold text-earth-brown mb-2">Location</h3>
              <p className="text-sm text-earth-brown/80 font-inter">Near Kensington Market, Downtown Toronto</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
