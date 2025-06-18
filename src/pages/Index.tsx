
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeTeachSection from "@/components/WhatWeTeachSection";
import AboutTeacherSection from "@/components/AboutTeacherSection";
import ScheduleSection from "@/components/ScheduleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-soft-cream">
      <Header />
      <HeroSection />
      <WhatWeTeachSection />
      <AboutTeacherSection />
      <ScheduleSection />
      <TestimonialsSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
