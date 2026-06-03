import React from 'react';
import { Play } from 'lucide-react';

const pressItems = [
  { name: "Westchester Magazine", image: "/assets/10 - In The Press/28. Westchester Magazine.JPG" },
  { name: "New York Times", image: "/assets/10 - In The Press/29. New York Times Magazine.jpeg" },
  { name: "Good Housekeeping", image: "/assets/10 - In The Press/30. Good Housekeeping.jpeg" },
  { name: "NewBeauty", image: "/assets/10 - In The Press/31. NewBeauty Magazine.jpeg" },
  { name: "OK Magazine", image: "/assets/10 - In The Press/32. OK Magazine.jpeg" },
  { name: "Greenwich Magazine", image: "/assets/10 - In The Press/33. Greenwich Magazine.jpeg" }
];

const Press: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background 1: Marble Background 3 */}
      <div className="absolute top-0 left-0 w-full h-1/2 z-0">
        <img src="/assets/10 - In The Press/26. Marble Background 3.png" alt="Marble BG" className="w-full h-full object-cover opacity-50" />
      </div>
      {/* Background 2: In The Press Background 2 */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 z-0">
        <img src="/assets/10 - In The Press/27. In The Press Background (Part 2).png" alt="Press BG" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-3 text-black tracking-tight">AS SEEN IN THE PRESS.</h2>
          <p className="text-primary font-bold text-sm uppercase tracking-widest">DR. GORDON'S EXPERTISE FEATURED BY LEADING MEDIA.</p>
        </div>

        {/* Video Placeholder */}
        <div className="max-w-4xl mx-auto mb-12 relative aspect-video bg-black rounded-sm overflow-hidden shadow-2xl group cursor-pointer border-4 border-white">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop"
            alt="Dr Gordon Video Thumbnail"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-16 bg-[#FF0000] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play size={32} fill="white" className="text-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white font-bold uppercase tracking-wider">CBS Video Feature</div>
        </div>

        <div className="flex justify-center mb-16">
          <button className="bg-accent hover:bg-red-700 text-white font-bold py-3 px-10 rounded-none uppercase tracking-wider transition-colors shadow-sm">
            LEARN MORE
          </button>
        </div>

        {/* Press Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto items-end">
          {pressItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-4 group">
              <div className="relative overflow-hidden shadow-lg border-4 border-white transform transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto object-cover"
                />
              </div>
              <span className="mt-4 text-sm md:text-base font-serif font-bold text-gray-400 uppercase text-center group-hover:text-primary transition-colors">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;