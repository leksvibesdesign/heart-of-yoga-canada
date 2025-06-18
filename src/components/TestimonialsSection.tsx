
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 gradient-soft">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-earth-brown mb-12 sm:mb-16">
          What Students Say
        </h2>
        
        <Card className="border-0 shadow-2xl rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 sm:p-12">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-golden fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-playfair italic text-earth-brown leading-relaxed mb-6 sm:mb-8">
              "Anne's classes have transformed not just my flexibility, but my entire approach to life. The combination of physical practice and spiritual guidance creates a deeply nourishing experience that stays with me long after I leave the mat."
            </blockquote>
            <p className="text-sm sm:text-base text-earth-brown/80 font-inter font-medium">
              — Sarah M., Toronto
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;
