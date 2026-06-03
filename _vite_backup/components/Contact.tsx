import React from 'react';

const Contact: React.FC = () => {
   return (
      <section id="contact" className="py-20 relative">
         <div className="absolute inset-0 z-0">
            <img src="/assets/12 - Where Science Meets Art/46. Gradient Background.png" alt="Background" className="w-full h-full object-cover" />
         </div>
         <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16 relative z-10">

            {/* Left Column: Mission */}
            <div className="md:w-1/2 pt-10">
               <div className="mb-8">
                  <img src="/assets/12 - Where Science Meets Art/47. Where Science Meets Art.png" alt="Where Science Meets Art" className="w-full max-w-md" />
               </div>

               <p className="text-black text-lg font-light leading-relaxed mb-6 font-sans">
                  Guided by precision, compassion, and decades of expertise, Dr. James Gordon approaches every patient with a philosophy instilled by his father, an ophthalmologist: <span className="italic">"Treat every patient like your mother."</span>
               </p>
               <p className="text-black text-lg font-light leading-relaxed">
                  With this deeply personal standard, Dr. Gordon prioritizes listening, offers honest and thoughtful guidance, and tailors every treatment to the individual — so patients achieve the best possible results. His goal is simple and unwavering: to help every patient see great, look natural, and feel like the best version of themselves.
               </p>
            </div>

            {/* Right Column: Form */}
            <div className="md:w-1/2 bg-white p-8 md:p-12 shadow-xl border-t-4 border-primary">
               <h3 className="text-2xl font-bold uppercase mb-6 text-black">Information</h3>
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name*</label>
                        <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-primary outline-none transition-colors" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone Number*</label>
                        <input type="tel" className="w-full border-b border-gray-300 py-2 focus:border-primary outline-none transition-colors" />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email Address*</label>
                        <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-primary outline-none transition-colors" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Procedure of Interest*</label>
                        <select className="w-full border-b border-gray-300 py-2 focus:border-primary outline-none transition-colors bg-white">
                           <option>Select...</option>
                           <option>Eyelid Surgery</option>
                           <option>Medical Eye Care</option>
                           <option>Injectables</option>
                           <option>Laser Treatments</option>
                        </select>
                     </div>
                  </div>

                  <div>
                     <label className="block text-xs font-bold uppercase text-gray-500 mb-1">How can we assist your medical/aesthetic needs?</label>
                     <textarea className="w-full border-b border-gray-300 py-2 focus:border-primary outline-none transition-colors h-24 resize-none"></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                     <input type="checkbox" className="mt-1" />
                     <div className="flex flex-col gap-4">
                        <p className="text-xs text-gray-500 leading-tight">
                           Opt in for Gordon Eye & Face Newsletter. By submitting this you agree to be contacted by Gordon Eye & Face via text, call or email. Standard rates may apply. For more details, read our Privacy Policy.
                        </p>
                        <div className="mt-2">
                           <p className="text-lg font-serif italic font-semibold text-primary">Phone Number:</p>
                           <p className="text-3xl font-serif italic font-semibold text-primary">914-820-0000</p>
                        </div>
                     </div>
                  </div>

                  <button className="w-full bg-primary text-white font-bold py-4 uppercase tracking-widest hover:bg-black transition-colors">
                     Submit
                  </button>
               </form>
            </div>

         </div>
      </section>
   );
};

export default Contact;