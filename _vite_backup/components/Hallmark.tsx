import React from 'react';

const Hallmark: React.FC = () => {
  const certifications = [
    { name: "Castle Connolly Top Doctor", image: "/assets/9 - Hallmark of Excellence/14. Castle Connoly.png" },
    { name: "American Board of Ophthalmology", image: "/assets/9 - Hallmark of Excellence/15. aboo.png" },
    { name: "US News & World Report", image: "/assets/9 - Hallmark of Excellence/16. US News.png" },
    { name: "New Beauty", image: "/assets/9 - Hallmark of Excellence/17. Beauty Seal.png" },
    { name: "American College of Surgeons", image: "/assets/9 - Hallmark of Excellence/18. ACS.png" },
    { name: "Patient's Choice", image: "/assets/9 - Hallmark of Excellence/19. Patient_s Choice.png" },
    { name: "Vitals", image: "/assets/9 - Hallmark of Excellence/20. Vitals.png" },
    { name: "ASLMS", image: "/assets/9 - Hallmark of Excellence/21. ASLMS.png" },
    { name: "Top Doctor Badge", image: "/assets/9 - Hallmark of Excellence/22. Top Doctor badge.png" },
    { name: "Healthgrades", image: "/assets/9 - Hallmark of Excellence/23. healthgrades.png" },
    { name: "NYS Ophthalmological", image: "/assets/9 - Hallmark of Excellence/24. NYS Ophthalmological.png" },
    { name: "White Plains Hospital", image: "/assets/9 - Hallmark of Excellence/25. WPH.png" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-black tracking-tight mb-3">
          THE HALLMARK OF EXCELLENCE.
        </h2>
        <p className="text-primary font-bold text-sm md:text-base tracking-widest uppercase mb-12">
          CREDENTIALS THAT DEFINE THE HIGHEST STANDARDS OF CARE.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto items-center">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 group">
              <img
                src={cert.image}
                alt={cert.name}
                className="h-16 md:h-24 w-auto object-contain mb-4 opacity-80 group-hover:opacity-100"
              />
              <span className="text-gray-500 text-xs md:text-sm font-medium uppercase tracking-wider group-hover:text-primary transition-colors">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hallmark;