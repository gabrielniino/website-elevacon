import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/Services'
import AboutUsSection from '@/components/sections/About'
import React from 'react'
import TestimonialsSection from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutUsSection />
      <TestimonialsSection />
    </>
  )
}