'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cases = [
    { title: "5D Eye Bag Removal & Eyelift", imgBefore: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/new/03-5d-eyebag-before.svg", imgAfter: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/new/04-5d-eyebag-after.svg" },
    { title: "Lower Eyelid Blepharoplasty", imgBefore: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/new/01-lower-eyelid-before.svg", imgAfter: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/new/02-lower-eyelid-after.svg" },
    { title: "Drop n' Lift & Upneeq", imgBefore: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/new/05-drop-n-lift-before.svg", imgAfter: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/new/06-drop-n-lift-after.svg" },
    { title: "Tear Trough Filler", imgBefore: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/new/07-tear-trough-before.svg", imgAfter: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/new/08-tear-trough-after.svg" },
];

const Gallery = () => {
    return (
        <section id="gallery" className="pt-0 pb-10 md:pb-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-5xl lg:text-[70px] font-black font-sans uppercase mb-4 text-dark tracking-tight leading-none">REAL PATIENTS. <span className="text-dark">REAL RESULTS.</span></h2>
                    <p className="text-primary font-bold text-sm md:text-[20px] tracking-[0.1em] uppercase mx-auto mb-10 md:mb-10">
                        <span className="block md:whitespace-nowrap">PERSONALLY PERFORMED BY DR. GORDON WITH PRECISION AND CARE.</span>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-16 mb-10">
                    {cases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="gallery-card flex flex-col cursor-pointer">
                                <h3 className="text-primary font-bold text-xl uppercase mb-1 tracking-wide text-center px-2">{item.title}</h3>
                                <div className="flex w-full aspect-[2/1] shadow-lg group">
                                    {/* Before */}
                                    <div className="w-1/2 relative border-r border-white overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={item.imgBefore}
                                            alt="Before"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.3]"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 text-center text-xs font-bold text-white bg-black/50 py-2 uppercase tracking-wider backdrop-blur-sm">Before</div>
                                    </div>
                                    {/* After */}
                                    <div className="w-1/2 relative overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={item.imgAfter}
                                            alt="After"
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.3]"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 text-center text-xs font-bold text-white bg-primary/80 py-2 uppercase tracking-wider backdrop-blur-sm">After</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-sm text-dark uppercase">
                    Real patients of Dr. James Gordon. Individual results may vary.
                </p>
            </div>
        </section>
    );
};

export default Gallery;
