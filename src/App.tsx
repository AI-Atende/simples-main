import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import ResultsSection from './components/ResultsSection';
import DiferentialsSection from './components/DiferentialsSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <ResultsSection />
      <DiferentialsSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;