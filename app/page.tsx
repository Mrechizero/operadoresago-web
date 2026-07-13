import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import PlatformsSection from '@/components/platforms-section'
import ServicesSection from '@/components/services-section'
import PartnersSection from '@/components/partners-section'
import WhyUsSection from '@/components/why-us-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PlatformsSection />
      <ServicesSection />
      <PartnersSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
