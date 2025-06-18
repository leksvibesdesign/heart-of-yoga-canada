
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, MapPin, Phone, Mail, Calendar, Users, Sparkles, Star, ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-soft-cream">
      {/* Header Navigation */}
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

      {/* Hero Section */}
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

      {/* What We Teach Section */}
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

      {/* About the Teacher Section */}
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

      {/* Schedule & Location Section */}
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

      {/* Testimonials Section */}
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

      {/* Newsletter Section */}
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

      {/* Contact Section */}
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;
