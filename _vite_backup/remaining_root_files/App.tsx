import React from 'react';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import Hero from './components/Hero';
import Legacy from './components/Legacy';
import About from './components/About';
import Treatments from './components/Treatments';
import BookingCTA from './components/BookingCTA';
import Difference from './components/Difference';
import Testimonials from './components/Testimonials';
import Hallmark from './components/Hallmark';
import Press from './components/Press';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden text-gray-800 antialiased">
      <Navbar />
      <Hero />
      <Reveal delay={200}>
        <Legacy />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Treatments />
      </Reveal>
      <Reveal>
        <BookingCTA />
      </Reveal>
      <Reveal>
        <Difference />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Hallmark />
      </Reveal>
      <Reveal>
        <Press />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </div>
  );
}

export default App;