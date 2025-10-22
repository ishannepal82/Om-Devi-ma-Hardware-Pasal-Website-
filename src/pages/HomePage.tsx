import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProductsSection from '../components/ProductsSection'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="mx-auto w-full">
          <ProductsSection />
        </div>
        <div className="mx-auto w-full">
          <Testimonials />
        </div>
        <div className="mx-auto w-full">
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  )
}
