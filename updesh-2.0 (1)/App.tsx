
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Connect from './components/Connect';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <Hero />
        <Schedule />
        <About />
        <Gallery />
        <Contact />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default App;