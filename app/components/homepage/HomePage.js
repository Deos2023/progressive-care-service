import React from 'react'
import HeroSection from '../hero/HeroSection'
import ServicesSection from '../services/ServicePage'
import WhyChooseUs from '../about/AboutUs'
import CommonPests from '../CommonPests'
import Testimonial from '../testimonials/Testimonial'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <CommonPests/>
      <Testimonial/>
    </div>
  )
}

export default HomePage
