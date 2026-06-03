'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import InfiniteSlider from './InfiniteSlider';

const awards = [
    { name: "New York Magazine", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/4-new-york-magazine-frame.webp" },
    { name: "Best Cataract Surgeon", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/5-best-cataract-surgeon-frame.webp" },
    { name: "New York Top Doctors", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/6-new-york-top-doctors-frame.webp" },
    { name: "Super Doctors", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/7-super-doctors-frame.webp" },
    { name: "Westchester", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/8-westchester-frame.webp" },
    { name: "America's Top Doctor", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/9-america-s-top-doctor-frame.webp" },
];

const Legacy = () => {
    return (
        <section className="relative pt-[300px] pb-5 -mt-[300px]">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/3-marble-background-1.png"
                    alt="Marble Background"
                    fill
                    className="object-cover"
                    quality={90}
                />
                <div className="absolute inset-0 bg-white/50" />
            </div>

            <div className="max-w-[1600px] relative z-10 mx-auto px-6 text-center pt-6 md:pt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-5xl lg:text-[70px] font-black font-sans uppercase text-dark tracking-tight leading-none mb-4">
                        A LEGACY OF EXCELLENCE.
                    </h2>
                    <p className="text-primary font-extrabold font-sans text-sm md:text-[20px] tracking-[0.18em] uppercase leading-tight mb-0">
                        RECOGNIZED BY PEERS AND PATIENTS FOR OVER 25 YEARS.
                    </p>
                </motion.div>

                <InfiniteSlider speed={140} hoverSpeed={30} gap={32} className="w-full leading-none block mt-0 mb-[10px]">
                    {awards.map((award) => (
                        <div
                            key={award.name}
                            className="flex-shrink-0 w-[132px] md:w-[232px] pt-10 pb-10 rounded-md transform hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src={award.image}
                                alt={award.name}
                                width={232}
                                height={285}
                                className="w-full h-auto drop-shadow-md"
                            />
                        </div>
                    ))}
                </InfiniteSlider>
            </div>
        </section>
    );
};

export default Legacy;
