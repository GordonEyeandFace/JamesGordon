import React from 'react';

const Difference: React.FC = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4 relative flex justify-center items-center">
        {/* Laurel Left */}
        <div className="hidden md:block w-32 h-64 bg-contain bg-no-repeat bg-center opacity-80" style={{ backgroundImage: 'url("/assets/7 - The Dr Gordon Difference/10. Laurel 1.png")' }}></div>

        <div className="mx-8">
          <span className="text-primary font-bold text-2xl uppercase tracking-widest block mb-2">The</span>
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-2 text-black">Dr. Gordon</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-primary italic font-bold">Difference</h3>
        </div>

        {/* Laurel Right (Flipped) */}
        <div className="hidden md:block w-32 h-64 bg-contain bg-no-repeat bg-center opacity-80 transform scale-x-[-1]" style={{ backgroundImage: 'url("/assets/7 - The Dr Gordon Difference/10. Laurel 1.png")' }}></div>
      </div>
    </section>
  );
};

export default Difference;