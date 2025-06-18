
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const WhatWeTeachSection = () => {
  return (
    <section id="what-we-teach" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-earth-brown mb-4 sm:mb-6">
            What We Teach
          </h2>
          <div className="w-20 sm:w-24 h-1 gradient-golden mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <Card className="border-0 shadow-lg rounded-xl sm:rounded-2xl bg-gradient-to-br from-soft-cream to-warm-beige">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-golden/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-amber" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-playfair font-semibold text-earth-brown mb-2 sm:mb-3">Spiritual Yoga for Modern Life</h3>
                    <p className="text-sm sm:text-base text-earth-brown/80 font-inter leading-relaxed">
                      Yoga from the Heart Canada is an active form of spiritual yoga designed specifically to meet the needs of Westerners with their fast pace of life and relatively inflexible bodies. It combines the ancient wisdom of the East with the practical, down-to-earth approach of the West.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg rounded-xl sm:rounded-2xl bg-gradient-to-br from-soft-cream to-warm-beige">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-amber/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-golden" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-playfair font-semibold text-earth-brown mb-2 sm:mb-3">Gentle Strength & Inner Peace</h3>
                    <p className="text-sm sm:text-base text-earth-brown/80 font-inter leading-relaxed">
                      Our classes are physically challenging but emphasize gentleness and ease. We avoid competitiveness. It's a devotional expression of inner awareness that nurtures confidence and uncovers inner peace.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/401fe907-1ece-4355-b200-b1af384a8361.png" 
              alt="Group yoga class on rooftop with city view" 
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl sm:rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeTeachSection;
