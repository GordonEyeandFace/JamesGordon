'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import Contact from '@/components/Contact';
import CherryFinancing from '@/components/CherryFinancing';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const officePhotos = [
    {
        src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/offices/Office_1.webp',
        alt: 'Gordon Eye and Face office interior 1',
    },
    {
        src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/offices/Office_2.webp',
        alt: 'Gordon Eye and Face office interior 2',
    },
    {
        src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/offices/Office_3.webp',
        alt: 'Gordon Eye and Face office interior 3',
    },
    {
        src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/offices/Office_4.webp',
        alt: 'Gordon Eye and Face office interior 4',
    },
    {
        src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/offices/Office_5.webp',
        alt: 'Gordon Eye and Face office interior 5',
    },
    {
        src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/offices/Office_6.webp',
        alt: 'Gordon Eye and Face exterior office',
    },
];

export default function ContactPage() {
    const [activePhoto, setActivePhoto] = useState<{ src: string; alt: string } | null>(null);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ─── 1. HERO ─────────────────────────────────────────────────────────── */}
            <div className="relative w-full">
                <section className="relative w-full">
                    <div
                        className="relative z-[2] w-full overflow-hidden min-h-[320px] sm:min-h-[400px]"
                        style={{ aspectRatio: '16 / 7.5', maxHeight: 'calc(100vh - 120px)' }}
                    >
                        <img
                            src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/contact/contact-hero.webp"
                            alt="Dr. James R. Gordon"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/15 z-[1]" />
                        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-[1]" />
                    </div>
                </section>

                {/* Glassmorphism source-of-truth frame */}
                <div className="relative z-20 -mt-[60px] md:-mt-[77px] px-4 md:px-16 lg:px-24 drop-shadow-2xl">
                    <div
                        className="relative isolate z-10 w-full max-w-[1300px] mx-auto rounded-[28px] p-[12px] md:p-[17px] overflow-hidden"
                        style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(255, 255, 255, 0.1) 0px 0px 40px' }}
                    >
                        <div className="absolute inset-0 -z-30 rounded-[28px] backdrop-blur-[4px]" />
                        <div className="absolute inset-0 -z-10 rounded-[28px] border border-white/20" />
                        <div
                            className="bg-dark/95 rounded-[22px] relative overflow-hidden py-4 md:py-8 px-8 md:px-12 flex flex-col items-center justify-center text-center shadow-2xl"
                            style={{ minHeight: 'clamp(90px, 12vw, 160px)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 60px inset' }}
                        >
                            <h1
                                className="font-bold text-white tracking-[0.12em] font-sans uppercase drop-shadow-lg mb-2"
                                style={{ fontSize: 'clamp(14px, 2.8vw, 36px)' }}
                            >
                                CONTACT US
                            </h1>
                            <span
                                className="block font-medium tracking-normal normal-case opacity-90 text-secondary"
                                style={{ fontSize: 'clamp(13px, 1.8vw, 26px)' }}
                            >
                                OUR TEAM IS HERE TO HELP
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── 2. MAIN CONTENT (SINGLE COLUMN FLOW) ────────────────────────────── */}
            <section className="pt-10 pb-10 bg-white px-8 w-full">
                <div className="max-w-[1000px] mx-auto">
                    
                    {/* Schedule a Consultation */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.h2 variants={fadeUp} className="font-sans font-black text-2xl md:text-[30px] text-near-black mb-4">
                            Schedule a Consultation
                        </motion.h2>
                        <motion.p variants={fadeUp} className="font-sans text-[14px] md:text-[16px] text-near-black mb-10 leading-relaxed">
                            Ready to take the next step toward clearer vision or refreshed eyes? Schedule a consultation with Dr. James Gordon, a board-certified ophthalmologist and multi-award-winning oculofacial plastic and cataract surgeon with more than 25 years of experience.
                        </motion.p>
                        <motion.p variants={fadeUp} className="font-sans text-[14px] md:text-[16px] text-near-black mb-10 leading-relaxed">
                            During your consultation, Dr. Gordon will:
                        </motion.p>
                        <motion.ul variants={fadeUp} className="list-disc pl-5 mb-10 space-y-1 font-sans text-[14px] md:text-[16px] text-near-black">
                            <li>Evaluate your eye health and facial anatomy</li>
                            <li>Discuss your concerns and goals</li>
                            <li>Recommend personalized treatment options</li>
                            <li>Explain expected outcomes and recovery</li>
                        </motion.ul>
                        <motion.p variants={fadeUp} className="font-sans text-[14px] md:text-[16px] text-near-black leading-relaxed">
                            Our goal is to provide clear guidance so you can make informed decisions about your care.
                        </motion.p>
                    </motion.div>

                    {/* Contact Info & Office Hours Side-by-Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16"
                    >
                        <motion.div variants={fadeUp}>
                            <h3 className="font-sans font-black text-xl md:text-[24px] text-near-black mb-5">
                                Contact Information
                            </h3>
                            <div className="font-sans text-[14px] md:text-[16px] text-near-black space-y-2">
                                <p className="font-bold">Gordon Eye and Face</p>
                                <p>📍 1 Byram Brook Place, Armonk, NY 10504</p>
                                <p>📞 Phone: 914-820-0000</p>
                                <p>📠 Fax: 914-219-5824</p>
                                <p>✉️ Email: <a href="mailto:info@gordoneye.com" className="underline hover:text-primary transition-colors">info@gordoneye.com</a></p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <h3 className="font-sans font-black text-xl md:text-[24px] text-near-black mb-5">
                                Office Hours
                            </h3>
                            <div className="font-sans text-[14px] md:text-[16px] text-near-black space-y-2">
                                <p>Monday–Thursday: 8:00 AM – 5:00 PM</p>
                                <p>Saturday: 8:00 AM – 1:00 PM</p>
                                <p>Friday &amp; Sunday: By scheduled procedures only</p>
                                <p className="pt-2">*Office hours are subject to change. Please call ahead to confirm before coming.</p>
                            </div>
                        </motion.div>
                    </motion.div>


                    {/* Map & Get Directions */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="mt-20 flex flex-col items-center"
                    >
                        <div className="w-full aspect-[21/9] min-h-[300px] relative border border-gray-200 bg-gray-100 overflow-hidden">
                            <iframe
                                title="Gordon Eye and Face Location"
                                className="absolute inset-0 w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.7!2d-73.7218!3d41.1287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMUJ5cmFtIEJyb29rIFBsYWNlLCBBcm1vbmssIE5ZIDEwNTA0!5e0!3m2!1sen!2sus!4v1"
                            />
                        </div>

                        <a 
                            href="https://maps.google.com/?q=1+Byram+Brook+Place+Armonk+NY+10504"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#8B1D2D] text-white px-10 py-4 rounded-full font-bold text-[14px] mt-8 hover:bg-[#6A1622] transition-colors inline-block"
                        >
                            GET DIRECTIONS
                        </a>
                    </motion.div>

                    {/* Office Photos */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                        className="mt-20"
                    >
                        <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-8">
                            <h3 className="font-sans font-black text-2xl md:text-[30px] text-near-black mb-3 uppercase tracking-tight">
                                Office Photos
                            </h3>
                            <p className="font-sans text-[14px] md:text-[16px] text-near-black leading-relaxed">
                                Take a look inside our office and exterior entrance before your visit.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                            {officePhotos.map((photo) => (
                                <motion.button
                                    key={photo.src}
                                    type="button"
                                    onClick={() => setActivePhoto(photo)}
                                    variants={fadeUp}
                                    className="relative overflow-hidden rounded-[22px] bg-white shadow-xl border border-black/5 aspect-[4/3] cursor-zoom-in"
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {activePhoto && (
                        <div
                            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                            role="dialog"
                            aria-modal="true"
                            onClick={() => setActivePhoto(null)}
                        >
                            <div
                                className="relative w-full max-w-5xl max-h-[85vh] rounded-[24px] overflow-hidden bg-black shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    onClick={() => setActivePhoto(null)}
                                    className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-near-black hover:bg-white transition-colors"
                                >
                                    Close
                                </button>
                                <div className="relative w-full h-[70vh]">
                                    <Image
                                        src={activePhoto.src}
                                        alt={activePhoto.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </section>

            <Contact />

            <CherryFinancing />
            <BookingCTA />
            <Footer />
        </main>
    );
}
