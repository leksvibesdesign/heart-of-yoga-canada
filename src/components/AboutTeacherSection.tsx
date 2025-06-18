
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users } from "lucide-react";

const AboutTeacherSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 gradient-soft">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 gradient-golden rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-10"></div>
            <img 
              src="/lovable-uploads/4e521c8c-12fd-4a42-b64c-654462fd86ea.png" 
              alt="Anne Parsonage, Yoga Teacher" 
              className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-earth-brown mb-4 sm:mb-6">
                Meet Anne Parsonage
              </h2>
              <div className="w-20 sm:w-24 h-1 gradient-golden rounded-full mx-auto lg:mx-0"></div>
            </div>
            
            <Card className="border-0 shadow-xl rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-golden mt-1 flex-shrink-0" />
                  <blockquote className="text-base sm:text-lg text-earth-brown/90 font-inter italic leading-relaxed">
                    "My goal is to provide inspirational, challenging, and playful yoga classes in a kind and respectful manner. It is my wish that each student experience greater peace and confidence."
                  </blockquote>
                </div>
                <p className="text-right text-earth-brown font-playfair font-semibold text-sm sm:text-base">
                  — Anne Parsonage, R.Y.T.
                </p>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-earth-brown/80 font-inter leading-relaxed">
                Anne brings a heart-centered approach to yoga, rooted in devotion, awareness, and spiritual exploration. Her teaching style is both grounding and uplifting, creating a safe space for students to explore their practice with compassion and curiosity.
              </p>
              <div className="bg-golden/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-amber flex-shrink-0" />
                  <h4 className="font-playfair font-semibold text-earth-brown text-sm sm:text-base">Free Online Spirituality Group</h4>
                </div>
                <p className="text-sm text-earth-brown/80 font-inter">
                  Join our complimentary online community featuring Bhagavad Gita book study and guided meditation practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeacherSection;
