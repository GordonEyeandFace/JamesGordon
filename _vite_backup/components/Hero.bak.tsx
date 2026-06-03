import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* Background Image Container */}
      <div className="relative h-[700px] md:h-[850px] w-full bg-gray-100 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/4 - Introduction/10. Introduction Background.png?v=111")'
          }}
          aria-label="Dr. Gordon Office"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

        {/* Magazine Logos - Bottom Left */}
        <div className="absolute bottom-32 md:bottom-40 left-0 right-0 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10 opacity-90 drop-shadow-md grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 opacity-90 transition-all duration-500">
                <img src="/assets/3 - A Legacy of Excellence/4. New York Magazine Frame.png" alt="New York Magazine" className="h-16 md:h-20 w-auto object-contain" />
                <img src="/assets/3 - A Legacy of Excellence/5. Best Cataract Surgeon Frame.png" alt="Best Cataract Surgeon" className="h-16 md:h-20 w-auto object-contain" />
                <img src="/assets/3 - A Legacy of Excellence/6. New York Top Doctors Frame.png" alt="NY Top Doctors" className="h-16 md:h-20 w-auto object-contain" />
                <img src="/assets/3 - A Legacy of Excellence/7. Super Doctors Frame.png" alt="Super Doctors" className="h-16 md:h-20 w-auto object-contain" />
                <img src="/assets/3 - A Legacy of Excellence/8. Westchester Frame.png" alt="Westchester" className="h-16 md:h-20 w-auto object-contain" />
                <img src="/assets/3 - A Legacy of Excellence/9. America_s Top Doctor Frame.png" alt="America's Top Doctor" className="h-16 md:h-20 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Red Box Transition Container */}
      <div className="relative -mt-20 md:-mt-28 z-10 px-4 md:px-12">
        <div className="max-w-5xl mx-auto bg-primary shadow-2xl overflow-hidden min-h-[200px] md:min-h-[240px] flex items-center justify-center relative">

          {/* Slide 1: Logo White */}
          <div className={`transition-all duration-700 absolute inset-0 flex items-center justify-center p-8 ${currentSlide === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
            <img src="/assets/2 - Red box/Gordon Eye & Face Logo White.png" alt="Gordon Eye & Face Logo" className="h-24 md:h-32 w-auto" />
          </div>

          {/* Slide 2: Name & Title */}
          <div className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${currentSlide === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-sans">James R. Gordon, MD, FACS</h2>
            <p className="text-white text-base md:text-xl font-medium tracking-wide">Board-Certified & Multi-Award-Winning Oculofacial Plastic Surgeon</p>
          </div>

          {/* Slide 3: Tagline */}
          <div className={`transition-all duration-700 absolute inset-0 flex items-center justify-center p-8 text-center ${currentSlide === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            <h2 className="text-2xl md:text-5xl font-bold text-white tracking-widest font-sans uppercase">
              TRUSTED. COMPASSIONATE. RECOGNIZED.
            </h2>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${currentSlide === idx ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;