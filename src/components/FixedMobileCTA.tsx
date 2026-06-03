'use client';

import { useEffect, useState } from 'react';

export default function FixedMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade-in animation on mount - use requestAnimationFrame to avoid setState in useEffect body
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    // Set CSS custom property for dynamic viewport height (iOS fix)
    const updateVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVH();
    window.addEventListener('resize', updateVH);

    // For iOS, also listen to orientationchange
    window.addEventListener('orientationchange', updateVH);

    return () => {
      cancelAnimationFrame(timer);
      window.removeEventListener('resize', updateVH);
      window.removeEventListener('orientationchange', updateVH);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-50 h-12 flex md:hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        bottom: '0',
        position: 'fixed'
      }}
    >
      {/* Book Now Button (Left) */}
      <a
        href="https://calendly.com/drjamesgordon/consult"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center font-poppins font-semibold text-white bg-[#882225] hover:bg-[#6d1b1e] active:bg-[#5a1619] transition-colors duration-200"
        aria-label="Book Appointment"
      >
        BOOK NOW
      </a>

      {/* Phone Section (Right) */}
      <a
        href="tel:914-820-0000"
        className="flex-1 flex items-center justify-center font-poppins font-semibold text-[#2A2E37] bg-[#CEB776] hover:bg-[#c4ad6b] active:bg-[#b9a360] transition-colors duration-200"
        aria-label="Call 914-820-0000"
      >
        <span>914-820-0000</span>
      </a>
    </div>
  );
}
