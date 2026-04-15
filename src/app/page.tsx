import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/ui/HeroSection';
import RibbonSection from '@/components/ui/RibbonSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GallerySection from '@/components/sections/GallerySection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <div id="home" className="flex h-screen flex-col overflow-hidden">
        <HeroSection />
      </div>
      <section id="service"><ServicesSection /></section>
      <section id="about"><AboutSection /></section>
      <WhyUsSection />
      <StatsSection />
      <section id="testimonial"><TestimonialsSection /></section>
      <GallerySection />
      <CTASection />
      <section id="contact"><ContactSection /></section>
      <Footer />
      <RibbonSection />
    </main>
  );
}
