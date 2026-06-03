import React from 'react';

const frames = [
  { name: "New York Magazine", image: "/assets/3 - A Legacy of Excellence/4. New York Magazine Frame.png" },
  { name: "Best Cataract Surgeon", image: "/assets/3 - A Legacy of Excellence/5. Best Cataract Surgeon Frame.png" },
  { name: "New York Top Doctors", image: "/assets/3 - A Legacy of Excellence/6. New York Top Doctors Frame.png" },
  { name: "Super Doctors", image: "/assets/3 - A Legacy of Excellence/7. Super Doctors Frame.png" },
  { name: "Westchester", image: "/assets/3 - A Legacy of Excellence/8. Westchester Frame.png" },
  { name: "America's Top Doctor", image: "/assets/3 - A Legacy of Excellence/9. America_s Top Doctor Frame.png" },
];

const Legacy: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative" style={{ backgroundImage: 'url("/assets/3 - A Legacy of Excellence/3. Marble Background 1.png")', backgroundSize: 'cover' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-sans uppercase text-black tracking-tight mb-2">
          A LEGACY OF EXCELLENCE
        </h2>
        <p className="text-primary font-bold text-sm md:text-lg tracking-widest uppercase mb-12 md:mb-16">
          RECOGNIZED BY PEERS AND PATIENTS FOR OVER 25 YEARS.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center">
          {frames.map((frame, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-full max-w-[160px] aspect-[3/4] flex items-center justify-center relative transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src={frame.image}
                  alt={frame.name}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy;