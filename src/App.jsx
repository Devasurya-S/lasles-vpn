import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatCard from './components/StatCard';
import Feature from './components/Feature';
import PriceSection from './components/PriceSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <HeroSection/>
        <StatCard/>
        <Feature/>
        <PriceSection/>
        <MapSection/>
        <Testimonial/>
      </main>
      <Footer/>
    </>
  )
}

export default App
