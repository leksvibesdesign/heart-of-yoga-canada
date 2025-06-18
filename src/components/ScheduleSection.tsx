
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-earth-brown mb-4 sm:mb-6">
            Schedule & Location
          </h2>
          <div className="w-20 sm:w-24 h-1 gradient-golden mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <Card className="border-0 shadow-xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-soft-cream to-warm-beige overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 sm:p-8">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-amber flex-shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-earth-brown">Classes & Trial Offer</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-earth-brown/80 font-inter leading-relaxed">
                    Weekly classes take place near Kensington Market in downtown Toronto, with some online classes also available.
                  </p>
                  <div className="bg-golden/20 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                    <h4 className="font-playfair font-semibold text-earth-brown mb-2 text-sm sm:text-base">Trial Classes Welcome!</h4>
                    <p className="text-sm text-earth-brown/80 font-inter">
                      New to our community? Come experience a class and see if our heart-centered approach resonates with you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-2 gradient-golden"></div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-soft-cream to-warm-beige overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 sm:p-8">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-amber flex-shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-playfair font-semibold text-earth-brown">Studio Location</h3>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base text-earth-brown font-inter font-medium">283 Spadina Avenue (3rd Floor)</p>
                    <p className="text-sm text-earth-brown/80 font-inter">Toronto, Ontario, Canada</p>
                    <p className="text-sm text-earth-brown/80 font-inter">M5T 2E3</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-amber text-amber hover:bg-amber hover:text-white font-medium px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base"
                  >
                    View Map
                  </Button>
                </div>
              </div>
              <div className="h-2 gradient-golden"></div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
            <Button 
              size="lg" 
              className="gradient-golden text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Book a Class Today
              <Calendar className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-amber text-amber hover:bg-amber hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
            >
              Join Online Group
              <Users className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
