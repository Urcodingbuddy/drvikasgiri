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
import ContactSection from '@/components/sections/ContactSection';
import InstagramCard from '@/components/ui/InstagramCard';
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
      <section id="credentials" aria-label="Credentials and Qualifications">
        <CredentialsSection />
      </section>
      <section id="why-us" aria-label="Why Choose Dr. Vikas Giri">
        <WhyUsSection />
      </section>
      <section aria-label="Practice Highlights">
        <StatsSection />
      </section>
      <section id="testimonial" aria-label="Patient Testimonials">
        <TestimonialsSection />
      </section>
      <section id="gallery" aria-label="Gallery">
        <GallerySection />
      </section>
      <section id="contact" aria-label="Contact and Booking">
        <ContactSection />
      </section>
      <InstagramCard />
      <Footer />
      <RibbonSection />
    </main>
  );
}
