import React from 'react';

const treatments = [
  {
    title: "Oculofacial Plastic Surgery",
    description: "Specialized eyelid surgery to restore a youthful, refreshed appearance.",
    image: "/assets/5 - Treatments/13. Eyelid Surgery.png",
    alignRight: false // Assuming a default or sequential alignment
  },
  {
    title: "Medical Eye Care",
    description: "Advanced care for complex eyelid and tear duct conditions.",
    image: "/assets/5 - Treatments/12. Medical Eye Care.png",
    alignRight: true
  },
  {
    title: "Non-Surgical Rejuvenation",
    description: "Minimally invasive treatments for total facial enhancement.",
    image: "/assets/5 - Treatments/14. Non-surgical Rejuvenation.png",
    alignRight: false
  },
  {
    title: "Injectables & Aesthetics",
    description: "Artistic application of fillers and neuromodulators for natural results.",
    image: "/assets/5 - Treatments/15. Injectables.png",
    alignRight: true
  }
];

const Treatments: React.FC = () => {
  return (
    <section id="procedures" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Header: "DR. GORDON'S" (Black) "SIGNATURE TREATMENTS" (Gold #CEB776) */}
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-2 text-black tracking-tight">
            DR. GORDON'S <span className="text-secondary">SIGNATURE</span>
          </h2>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-secondary mb-4 tracking-tight">
            TREATMENTS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          {/* Subtitle: Black */}
          <p className="text-sm md:text-lg font-extrabold tracking-wide uppercase text-black max-w-2xl mx-auto">
            DESIGNED FOR HOW YOU SEE, FEEL AND LOOK — AT YOUR BEST.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {treatments.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden shadow-xl min-h-[400px] md:min-h-[500px] flex items-end">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Item Text Content */}
              <div className={`relative z-10 p-8 md:p-12 w-full bg-white/95 m-4 md:m-8 ${item.alignRight ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
                {/* Title: #882225 */}
                <h3 className="text-primary font-bold text-2xl md:text-3xl uppercase mb-3 font-sans tracking-wide">{item.title}</h3>
                <div className={`h-1 bg-secondary mb-4 ${item.alignRight ? 'ml-auto' : 'mr-auto'} w-16`}></div>
                {/* Body: #000000 */}
                <p className="text-black leading-relaxed text-sm md:text-base font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;