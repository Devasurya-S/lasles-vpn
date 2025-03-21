import React from 'react'
import HeroSection from './HeroSection'
import StatCard from './StatCard';
import Feature from './Feature';
import PriceSection from './PriceSection';
import MapSection from './MapSection';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <main>
        <HeroSection/>
        <StatCard/>
        <Feature/>
        <PriceSection/>
        <MapSection/>
        <Testimonial/>
    </main>
  )
}

export default Home
