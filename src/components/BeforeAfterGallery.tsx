'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
    {
        title: "5D Eye Bag Removal",
        imgBefore: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/38-5d-eye-bag-before.png",
        imgAfter: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/39-5d-eye-bag-after.png",
    },
    {
        title: "Lower Eyelid Blepharoplasty",
        imgBefore: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/40-lower-eyelid-before.png",
        imgAfter: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/41-lower-eyelid-after.png",
    },
    {
        title: "Drop n' Lift & Upneeq",
        imgBefore: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/42-drop-n-lift-before.png",
        imgAfter: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/43-drop-n-lift-after.png",
    },
    {
        title: "Tear Trough Filler",
        imgBefore: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/44-tear-through-before.png",
        imgAfter: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/45-tear-through-after.png",
    },
];

const BeforeAfterGallery = () => {
    const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);

    // Handle escape key to close lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedCase(null);
        };
        if (selectedCase) document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selectedCase]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (selectedCase) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedCase]);

    return (
        <section className="pt-10 pb-10 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {cases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedCase(item)}
                        >
                            <div className="flex flex-col">
                                <h3 className="font-sans font-extrabold text-primary text-xl md:text-[22px] uppercase tracking-wide mb-6">
                                    {item.title}
                                </h3>
                                <div className="relative flex aspect-[16/9] w-full overflow-hidden shadow-2xl rounded-sm">
                                    {/* Before */}
                                    <div className="relative w-1/2 h-full border-r border-secondary/20 overflow-hidden">
                                        <Image
                                            src={item.imgBefore}
                                            alt={`${item.title} Before`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white md:text-[10px] text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm">
                                                Before
                                            </span>
                                        </div>
                                    </div>
                                    {/* After */}
                                    <div className="relative w-1/2 h-full overflow-hidden">
                                        <Image
                                            src={item.imgAfter}
                                            alt={`${item.title} After`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                                        <div className="absolute top-4 right-4 z-10 text-right">
                                            <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white md:text-[10px] text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm">
                                                After
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Expand hint */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                        <div className="bg-white/90 backdrop-blur-md text-dark px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs shadow-xl flex items-center gap-2">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m-3-3h6"/></svg>
                                            View Details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="font-sans text-[13px] text-near-black/60 italic tracking-wide">
                        *Individual results may vary. Every procedure is tailored to the patient&apos;s unique anatomy and goals.
                    </p>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCase && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-xl p-4 md:p-12"
                        onClick={() => setSelectedCase(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors"
                            onClick={() => setSelectedCase(null)}
                            aria-label="Close modal"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        <motion.div 
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative w-full max-w-6xl aspect-[3/2] md:aspect-[16/9] flex bg-dark shadow-2xl rounded-sm overflow-hidden"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            {/* Before (Full) */}
                            <div className="relative w-1/2 h-full border-r-2 border-secondary/30">
                                <Image
                                    src={selectedCase.imgBefore}
                                    alt={`${selectedCase.title} Before`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, 50vw"
                                />
                                <div className="absolute bottom-6 left-6 z-10">
                                    <span className="px-4 py-2 bg-black/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                                        Before
                                    </span>
                                </div>
                            </div>
                            {/* After (Full) */}
                            <div className="relative w-1/2 h-full">
                                <Image
                                    src={selectedCase.imgAfter}
                                    alt={`${selectedCase.title} After`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, 50vw"
                                />
                                <div className="absolute bottom-6 right-6 z-10 text-right">
                                    <span className="px-4 py-2 bg-primary backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-lg">
                                        After
                                    </span>
                                </div>
                            </div>
                            
                            {/* Title bar */}
                            <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 to-transparent p-6 pointer-events-none">
                                <h3 className="text-white font-sans font-black text-xl md:text-2xl tracking-wider uppercase text-center shadow-black drop-shadow-lg">
                                    {selectedCase.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default BeforeAfterGallery;
