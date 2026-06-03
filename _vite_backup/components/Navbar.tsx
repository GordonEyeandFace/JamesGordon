import React, { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar styles based on scroll state
  const navClasses = scrolled
    ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100 transition-all duration-300 py-2"
    : "absolute top-0 left-0 right-0 bg-transparent z-50 transition-all duration-300 py-6";

  const textClasses = scrolled ? "text-black" : "text-white";
  const logoTextClasses = scrolled ? "text-primary" : "text-white";
  const logoSubTextClasses = scrolled ? "text-secondary" : "text-white/80";
  const logoBgClasses = scrolled ? "bg-secondary text-white" : "bg-white text-primary";

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center gap-4 lg:gap-8">
        {/* Logo */}
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/1 - Hero Section/0. Gordon Eye & Face Logo.png"
            alt="Gordon Eye & Face Logo"
            className="h-12 md:h-14 w-auto"
          />
        </div>

        {/* Desktop Links - REMOVED per redesign */}

        {/* CTA & Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className={`hidden md:flex items-center gap-2 font-medium text-lg ${scrolled ? "text-primary" : "text-white"}`}>
            <span>914-820-0000</span>
          </div>

          <button className="bg-[#882225] text-white px-6 py-2 md:py-3 font-bold text-xs md:text-sm uppercase tracking-wider hover:bg-red-900 transition-colors shadow-lg rounded-full hidden md:block">
            Book Your Consultation
          </button>

          <button
            className={`flex items-center gap-2 font-bold uppercase tracking-widest ${scrolled ? "text-black" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
            <span className="text-lg">MENU</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-xl">
          <div className="flex flex-col p-6 gap-4 text-center">
            <a href="#about" className="text-black font-bold hover:text-primary uppercase">About</a>
            <a href="#procedures" className="text-black font-bold hover:text-primary uppercase">Procedures</a>
            <a href="#gallery" className="text-black font-bold hover:text-primary uppercase">Gallery</a>
            <a href="#patient-info" className="text-black font-bold hover:text-primary uppercase">Patient Info</a>
            <a href="#contact" className="text-black font-bold hover:text-primary uppercase">Contact</a>
            <button className="bg-accent text-white px-6 py-3 font-bold text-sm uppercase tracking-wider mt-2 w-full">
              Book Your Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;