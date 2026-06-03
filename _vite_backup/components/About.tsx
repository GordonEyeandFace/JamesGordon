import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -left-20 top-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* Text Content */}
        <div className="md:w-1/2 order-2 md:order-1 relative">
          {/* Overlay Text "Meet" - Font: Playfair Display SemiBold Italic, Text Color: #CEB776, Opacity: 50% */}
          <span className="font-serif italic font-semibold text-6xl md:text-9xl text-secondary opacity-50 absolute -top-12 md:-top-20 -left-4 md:-left-10 select-none pointer-events-none">
            Meet
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-black mb-2 relative z-10">
            James R. Gordon, <span className="text-2xl md:text-3xl font-normal">MD, FACS</span>
          </h2>

          <h3 className="text-lg md:text-xl text-primary font-semibold italic font-serif mb-6 md:mb-8">
            Board-Certified & Multi-Award-Winning Oculofacial Plastic Surgeon
          </h3>

          <div className="space-y-6 text-black text-base md:text-lg leading-relaxed font-normal">
            <p>
              With over 25 years of experience, Dr. James R. Gordon is a nationally recognized expert in eyelid and facial rejuvenation. Known for his meticulous artistry and natural results, he is consistently honored among America's Top 1% of Doctors and has received accolades from Newsweek Best Doctors, Castle Connolly Top Doctors, Westchester's Top Cosmetic Doctors, Super Doctors, and Vitals Most Compassionate Doctors.
            </p>
            <p>
              Trusted by patients and peers alike, Dr. Gordon blends surgical precision with genuine compassion to help each individual look and feel their best.
            </p>
          </div>

          <button className="mt-10 bg-accent text-white font-bold py-4 px-10 text-sm uppercase tracking-wider transition-colors shadow-lg hover:bg-red-700 mix-blend-multiply">
            LEARN MORE
          </button>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center relative">
          {/* Portrait Image */}
          <div className="md:w-full"> {/* Adjusted to take full width within its parent for better centering */}
            <div className="rounded-2xl overflow-hidden shadow-2xl relative group max-w-md mx-auto"> {/* Added max-w-md and mx-auto for centering */}
              <img
                src="/assets/4 - Introduction/11. Dr. James Portrait.png"
                alt="Dr. James R. Gordon"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;