import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatCard from './components/statCard';

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <HeroSection/>
        <StatCard/>
      </main>
    </>
  )
}

export default App
