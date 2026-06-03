import React from 'react';

const cases = [
  { title: "5D Eye Bag Removal & Eyelift", imgBefore: "/assets/11 - Before and After/38. 5D Eye Bag (Before).png", imgAfter: "/assets/11 - Before and After/39. 5D Eye Bag (After).png" },
  { title: "Lower Eyelid Blepharoplasty", imgBefore: "/assets/11 - Before and After/40. Lower Eyelid (Before).png", imgAfter: "/assets/11 - Before and After/41. Lower Eyelid (After).png" },
  { title: "Drop n' Lift & Upneeq", imgBefore: "/assets/11 - Before and After/42. Drop n_ Lift (Before).png", imgAfter: "/assets/11 - Before and After/43. Drop n_ Lift (After).png" },
  { title: "Tear Trough Filler", imgBefore: "/assets/11 - Before and After/44. Tear Through (Before).png", imgAfter: "/assets/11 - Before and After/45. Tear Through (After).png" },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-2 text-black tracking-tight">REAL PATIENTS. REAL RESULTS.</h2>
        <p className="text-primary font-bold text-sm uppercase tracking-widest max-w-3xl mx-auto mb-16">
          PERSONALLY PERFORMED BY DR. GORDON WITH PRECISION, ADVANCED TECHNOLOGY AND INDIVIDUALIZED CARE.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {cases.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-primary font-bold text-xl uppercase mb-4 tracking-wide">{item.title}</h3>
              <div className="flex w-full aspect-[2/1] relative shadow-lg">
                {/* Before */}
                <div className="w-1/2 relative border-r border-white">
                  <img src={item.imgBefore} alt="Before" className="w-full h-full object-cover filter contrast-125 sepia-[.1]" />
                  <div className="absolute bottom-0 left-0 right-0 text-center text-xs font-bold text-white bg-black/50 py-2 uppercase tracking-wider">Before</div>
                </div>
                {/* After */}
                <div className="w-1/2 relative">
                  <img src={item.imgAfter} alt="After" className="w-full h-full object-cover filter brightness-105 saturate-110" />
                  <div className="absolute bottom-0 left-0 right-0 text-center text-xs font-bold text-white bg-primary/80 py-2 uppercase tracking-wider">After</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-gray-500 italic">
          *Note: Patient results may vary. Images are for illustrative purposes.
        </p>
      </div>
    </section>
  );
};

export default Gallery;