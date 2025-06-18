
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-earth-brown mb-4 sm:mb-6">
              Stay Connected
            </h2>
            <p className="text-lg sm:text-xl text-earth-brown/80 font-inter">
              Subscribe to receive occasional updates on events and offerings
            </p>
          </div>
          
          <Card className="border-0 shadow-xl rounded-2xl sm:rounded-3xl bg-gradient-to-br from-soft-cream to-warm-beige max-w-2xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-0 bg-white/80 text-earth-brown placeholder:text-earth-brown/50 font-inter text-sm sm:text-base"
                />
                <Button 
                  className="gradient-golden text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
