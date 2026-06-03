import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Legacy from '@/components/Legacy';
import About from '@/components/About';
import Treatments from '@/components/Treatments';
import BookingCTA from '@/components/BookingCTA';
import CherryFinancing from '@/components/CherryFinancing';
import Difference from '@/components/Difference';
import Testimonials from '@/components/Testimonials';
import Hallmark from '@/components/Hallmark';
import Press from '@/components/Press';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Legacy />
      <About />
      <Treatments />
      <BookingCTA />
      <Difference />
      <Testimonials showReviewsGrid={false} />
      <Hallmark />
      <Press />
      <Gallery />
      <Contact />
      <CherryFinancing />
      <Footer />
    </main>
  );
}
