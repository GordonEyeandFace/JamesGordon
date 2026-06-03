'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BookingCTA = () => {
    return (
        <section className="bg-light relative overflow-hidden pt-10 pb-10 md:py-24 px-4 md:px-12">
            {/* Background Image - spans whole section */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/booking/16-marble-background-2.svg"
                    alt="Marble Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:min-h-[400px] bg-warm-beige/95 shadow-2xl rounded-2xl border border-white/20 max-w-[1100px] mx-auto">

                {/* Left Content */}
                <div className="w-full md:w-[60%] py-10 md:py-10 px-8 md:px-16 lg:px-20 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-[42px] font-black font-sans uppercase leading-[1.1] mb-6 tracking-tight">
                            <span className="block text-dark">BOOK YOUR</span>
                            <span className="block text-dark">PERSONALIZED</span>
                            <span className="block text-dark">CONSULTATION</span>
                            <span className="block text-primary">WITH DR GORDON.</span>
                        </h2>

                        <p className="text-dark mb-6 text-base md:text-[16px] leading-relaxed font-normal font-sans max-w-xl">
                            Each visit with Dr. Gordon is thoughtfully structured to ensure privacy, comfort, and dedicated time for individualized care and discussion of your goals, desired look, and treatment options.
                        </p>

                        <div className="mb-0">
                            <a href="https://calendly.com/drjamesgordon/consult" target="_blank" rel="noopener noreferrer">
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block bg-primary text-white font-bold py-4 px-12 text-sm md:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:bg-near-black transition-all rounded-full"
                                >
                                    BOOK NOW!
                                </motion.span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-[40%] relative aspect-[4/3] md:aspect-auto md:min-h-full">
                    <Image
                        src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/booking/consultation.svg"
                        alt="Dr. James Gordon in consultation"
                        fill
                        className="object-contain object-top md:object-center"
                    />
                </div>

            </div>

        </section>
    );
};

export default BookingCTA;
