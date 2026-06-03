import React from 'react';

const BookingCTA: React.FC = () => {
  return (
    <section className="bg-light relative overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row min-h-[550px]">

        {/* Left Content */}
        <div className="w-full md:w-1/2 py-20 px-8 md:px-16 flex flex-col justify-center bg-white z-10 relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary"></div>

          <h2 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight mb-2 text-black">
            BOOK YOUR PERSONALIZED CONSULTATION
          </h2>
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase leading-tight mb-6 text-secondary">
            WITH DR. JAMES GORDON.
          </h2>

          <p className="text-black mb-10 text-base leading-relaxed max-w-lg font-normal">
            Each visit with Dr. Gordon is thoughtfully structured to ensure privacy, comfort, and dedicated time for individualized care and discussion of your goals, desired look, and treatment options.
          </p>

          <div>
            <button className="bg-accent text-white font-bold py-4 px-12 text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:bg-red-700">
              BOOK NOW!
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
          <img
            src="/assets/3 - A Legacy of Excellence/3. Marble Background 1.png"
            alt="Dr Gordon Smiling"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>

      </div>
    </section>
  );
};

export default BookingCTA;