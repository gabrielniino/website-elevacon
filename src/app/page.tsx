import ServicesSection from '@/components/sections/Services'
import AboutUsSection from '@/components/sections/About'
import React from 'react'
import TestimonialsSection from '@/components/sections/Testimonials'
import ContactSection from '@/components/sections/Contact'
import FAQSection from '@/components/sections/faqSection'
import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}