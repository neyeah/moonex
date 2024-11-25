import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Features from './components/Features';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Comparison />
      <Features />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
