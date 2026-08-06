import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ImpactStrip from '@/components/impact-strip'
import PrioritySolutionsSection from '@/components/priority-solutions-section'
import BusinessUseCasesSection from '@/components/business-use-cases-section'
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
      <ImpactStrip />
      <PrioritySolutionsSection />
      <BusinessUseCasesSection />
      <PlatformsSection />
      <ServicesSection />
      <PartnersSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
