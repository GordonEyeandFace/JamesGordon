'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import InfiniteSlider from './InfiniteSlider';

const certifications = [
    { name: "HEALTHGRADES", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/23-healthgrades.png" },
    { name: "NEW YORK STATE OPHTHALMOLOGICAL", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/24-nys-ophthalmological.png" },
    { name: "WHITE PLAINS HOSPITAL", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/25-wph.png" },
    { name: "CASTLE CONNOLLY", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/14-castle-connoly.png" },
    { name: "AMERICAN BOARD OF OPHTHALMOLOGY", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/15-aboo.png" },
    { name: "U.S. NEWS & WORLD REPORT", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/16-us-news.png" },
    { name: "NEW BEAUTY", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/17-beauty-seal.png" },
    { name: "AMERICAN COLLEGE OF SURGEONS", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/18-acs.png" },
    { name: "VITALS PATIENT'S CHOICE", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/19-patient-s-choice.png" },
    { name: "VITALS TOP 10 DOCTOR", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/20-vitals.png" },
    { name: "AMERICAN SOCIETY FOR LASER MEDICINE & SURGERY", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/21-aslms.png" },
    { name: "REALSELF", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/22-top-doctor-badge.png" },
];

const Hallmark = () => {
    return (
        <section className="pt-10 pb-10 md:py-16 bg-white overflow-hidden">
            {/* Heading inside container */}
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[32px] md:text-[48px] lg:text-[70px] font-black font-sans uppercase text-dark tracking-tight leading-none mb-4">
                        THE HALLMARK OF EXCELLENCE.
                    </h2>
                    <p className="text-primary font-extrabold text-sm md:text-[20px] tracking-[0.2em] uppercase mb-0">
                        CREDENTIALS THAT DEFINE THE HIGHEST STANDARDS OF CARE.
                    </p>
                </motion.div>
            </div>

            {/* Marquee — full-width, smooth infinite scroll with hover deceleration */}
            <InfiniteSlider speed={140} hoverSpeed={16} gap={64} fadeMask={false} className="w-full mt-[40px] pb-0">
                {certifications.map((cert) => (
                    <div
                        key={cert.name}
                        className="flex flex-col items-center justify-center flex-shrink-0 w-[140px] transition-all duration-300 group"
                    >
                        <div className="relative h-16 md:h-20 w-full mb-3 flex items-center justify-center">
                            <Image
                                src={cert.image}
                                alt={cert.name}
                                width={120}
                                height={80}
                                className="object-contain h-full w-auto"
                            />
                        </div>
                        <span className="text-gray-400 text-[11px] md:text-xs font-medium uppercase tracking-wider group-hover:text-primary transition-colors text-center leading-tight whitespace-normal">
                            {cert.name}
                        </span>
                    </div>
                ))}
            </InfiniteSlider>
        </section>
    );
};

export default Hallmark;
