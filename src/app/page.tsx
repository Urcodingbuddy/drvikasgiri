import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/ui/HeroSection';
import RibbonSection from '@/components/ui/RibbonSection';
import AboutSection from '@/components/sections/AboutSection';
import CredentialsSection from '@/components/sections/CredentialsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import VeneersSection from '@/components/sections/VeneersSection';
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
      <section id="service" aria-label="Services">
        <ServicesSection />
      </section>
      <section aria-label="Veneers and Smile Design">
        <VeneersSection />
      </section>
      <section id="about" aria-label="About Dr. Vikas Giri">
        <AboutSection />
      </section>
      <section aria-label="Credentials and Qualifications">
        <CredentialsSection />
      </section>
      <section aria-label="Why Choose Dr. Vikas Giri">
        <WhyUsSection />
      </section>
      <section aria-label="Practice Highlights">
        <StatsSection />
      </section>
      <section id="testimonial" aria-label="Patient Testimonials">
        <TestimonialsSection />
      </section>
      <section aria-label="Gallery">
        <GallerySection />
      </section>
      <section aria-label="Consultation Call To Action">
        <CTASection />
      </section>
      <section id="contact" aria-label="Contact and Booking">
        <ContactSection />
      </section>
      <Footer />
      <RibbonSection />
    </main>
  );
}
