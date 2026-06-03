'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="pt-0 -mt-8 pb-0 md:pt-16 md:pb-0 relative overflow-hidden bg-gradient-to-r from-[#ECE6DB] to-[#E2D6C5]">
            {/* Background — mobile uses Intro_BG_Mobile.svg, desktop uses meet-drgordon-bg.svg */}
            <div className="absolute inset-0 z-0">
                {/* Mobile only */}
                <img
                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/meet/intro-bg-mobile-new.svg"
                    alt="Meet Dr. James R. Gordon background"
                    className="md:hidden absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Desktop only */}
                <Image
                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/meet/intro-bg-new.svg"
                    alt="Meet Dr. James R. Gordon background"
                    fill
                    className="hidden md:block object-cover object-center"
                />
            </div>

            <div className="container mx-auto px-6 h-full relative z-10 flex flex-col md:flex-row items-stretch gap-10 md:gap-16">

                {/* Text Content */}
                <div className="md:w-1/2 pt-8 pb-0 md:py-12 order-2 md:order-1 relative flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Overlay Text "Meet" - 119px (15% reduction from 140px) and aligned left-0 with header margin */}
                        <span className="font-serif italic font-semibold text-7xl md:text-[119px] opacity-40 absolute top-0 left-0 select-none pointer-events-none leading-none" style={{ color: '#C5A55A' }}>
                            Meet
                        </span>

                        <h2 className="font-sans text-[22px] md:text-5xl lg:text-[54px] font-extrabold text-dark mb-4 md:mb-1 relative z-10 leading-none drop-shadow-sm mt-10 md:mt-[60px] md:whitespace-nowrap">
                            James R. Gordon, <span className="font-black text-[22px] md:text-5xl lg:text-[54px]">MD, FACS</span>
                        </h2>

                        {/* Subtitle color deep crimson, italicized */}
                        <h3 className="text-[#8B1D2D] font-extrabold font-sans text-sm md:text-[20px] mb-10 md:mb-8 tracking-wide leading-tight italic">
                            Board Certified &amp; Multi-Award Winning<br />
                            Oculofacial Plastic and Cataract Surgeon
                        </h3>

                        {/* Body copy */}
                        <div className="text-dark text-[15px] md:text-[16px] leading-relaxed font-sans font-normal mb-10">
                            <p>
                                With over 25 years of experience, Dr. James R. Gordon is a nationally recognized expert in cataracts, eyelids and facial rejuvenation. Known for his meticulous artistry and natural results, he is consistently honored among America&apos;s Top 1% of Doctors and has received accolades from Newsweek Best Doctors, Castle Connolly Top Doctors, Westchester&apos;s Top Cosmetic Doctors, Super Doctors, and Vitals Most Compassionate Doctors. Trusted by patients and peers alike, Dr. Gordon blends surgical precision with genuine compassion to help each individual see, look and feel their best.
                            </p>
                        </div>

                        {/* Learn More button deeper maroon, rounded, less padding */}
                        <motion.a
                            href="/about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-[#8B1D2D] text-white font-bold py-4 px-10 text-sm md:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:bg-[#2A2E37] transition-all rounded-full mb-[40px]"
                        >
                            Learn More
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right side — empty spacer to maintain layout balance with the background image */}
                <div className="md:w-1/2 order-1 md:order-2 hidden md:block md:min-h-full" />

            </div>
        </section>
    );
};

export default About;
