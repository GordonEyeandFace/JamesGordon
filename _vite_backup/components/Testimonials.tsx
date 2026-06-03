import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    text: "I had a Blepharoplasty with Dr. Gordon and couldn't be happier with the results! It took me five years to finally go through with the procedure, but I'm so glad I chose Dr. Gordon. The post-surgery recovery was smooth, and after just one week, my eyes looked amazing! Dr. Gordon mentioned that the full results would be visible in about three months, but honestly, I already look fantastic if I say so myself! I highly recommend Dr. Gordon to anyone considering this procedure: professional, skilled, and truly delivers outstanding results!",
    author: "Magdalena Sanchez",
    source: "RealSelf",
    highlight: "I highly recommend Dr. Gordon to anyone considering this procedure"
  },
  {
    text: "I just turned 40 a few months ago, felt I hit the big “milestone” of going downhill with dull skin and losing my youthful look and confidence, so I treated myself to a birthday gift that would make me look and feel younger, turned to RealSelf for options, saw Dr. Gordon’s free consultation, met him and was glad because he was knowledgeable, professional, relatable, understood my problems, so I booked Erbium Laser Skin Resurfacing with a couple of Botox shots, the whole process was easy and painless, and now 2 weeks later I’m healed, refreshed, and highly recommend him to anyone wanting a rejuvenated look.",
    author: "Lisa Ricks",
    source: "RealSelf",
    highlight: "he was knowledgeable, professional, relatable, understood my problems"
  },
  {
    text: "Dr. Gordon is the best, honestly. I see him for cosmetic touch ups and recently felt that at age 47, I have hollow, dark circles under my eyes that aren't so flattering. After a consult, he did a minor and super conservative tweak with a very modest amount of filler, and I look like I'm more rested. The results are instant and totally natural. He's so specialized and he also has the aesthetic artistry part that many doctors simply don't have. I also like that he's very honest and forthcoming - he will advise you against things that won't look natural or get the results you're hoping for. He's awesome!",
    author: "Heather Reasonover",
    source: "Google Reviews",
    highlight: "Dr. Gordon is the best, honestly."
  },
  {
    text: "Dr. Gordon performed cataract surgery on my eye yesterday and I couldn’t be happier. Honestly, my eyesight improved beyond anything I expected or hoped for…it’s literally like night and day. His surgical decisions during the procedure demonstrated his skill and experience. If you are looking for a Dr. with great ability and proficiency, Dr.James Gordon is the one to put at the top of you list.",
    author: "Barbara Tessler",
    source: "Google Reviews",
    highlight: "Dr.James Gordon is the one to put at the top of you list."
  },
  {
    text: "Been seeing Dr Gordon for 6 years now. Good bye dark circles and eye hollowness. So thrilled with my results always. Looked good when I left the office. Did not hurt at all. Dr. Gordon is amazing. I was so sick of people telling me I looked tired. I also wish I had not wasted so much money on creams that did nothing. No cream will replace volume. Fillers just give you a refreshed look. He's the best. I would never let anyone else touch me.",
    author: "Victoria Pepin",
    source: "Google Reviews",
    highlight: "He's the best. I would never let anyone else touch me."
  },
  {
    text: "Dr. Gordon is the very epitome of what healthcare should be all about - compassion, professionalism and expertise. I feel very fortunate to have found a physician who made me absolutely certain I was in great hands throughout my visit. Dr. Gordon was extremely personable and empathetic, really taking the time to get to know me and my concerns. That alone was incredibly refreshing in this age of blink-and-you'll-miss-it doctor visits. He went above and beyond in checking on my eye health (I was there for a cosmetic issue), and addressed all my questions with great detail and competence. I highly recommend Dr. Gordon for all your ophtamological and occuloplastic needs.",
    author: "Aleksey Gring",
    source: "Google Reviews",
    highlight: "compassion, professionalism and expertise"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-review-bg relative" style={{ backgroundColor: '#EBE5DE' }}>
      <div className="container mx-auto px-4 text-center max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 text-black tracking-tight">TRUSTED BY PATIENTS.</h2>
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-16">Over 2,000 Five-Star Reviews across the most trusted sources.</p>

        <div className="flex justify-center mb-10">
          <img src="/assets/8 - Trusted by Patients/12. Quotation Mark.png" alt="Quote" className="h-16 w-auto opacity-30" />
        </div>

        <div className="min-h-[300px] flex flex-col justify-center items-center px-4 md:px-12">
          <p className="text-lg md:text-2xl text-black leading-relaxed font-normal mb-8 italic font-sans">
            "{reviews[currentIndex].text}"
          </p>

          <div className="flex justify-center mb-4">
            <img src="/assets/8 - Trusted by Patients/13. Stars.png" alt="5 Stars" className="h-6 w-auto" />
          </div>

          <p className="font-medium text-black text-lg">{reviews[currentIndex].author} - <span className="text-gray-600 font-normal">{reviews[currentIndex].source}</span></p>
        </div>

        {/* Navigation Arrows */}
        <button onClick={prev} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors p-2">
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        <button onClick={next} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors p-2">
          <ChevronRight size={48} strokeWidth={1} />
        </button>

      </div>
    </section>
  );
};

export default Testimonials;