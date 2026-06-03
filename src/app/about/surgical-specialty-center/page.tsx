'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import CherryFinancing from '@/components/CherryFinancing';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const SUPABASE_BASE = 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets';

const galleryImages = [
    { src: `${SUPABASE_BASE}/privilages/surgical-specialty/surgical-specialty-2.svg`, alt: 'Surgical Specialty Center Operating Suite' },
    { src: `${SUPABASE_BASE}/privilages/surgical-specialty/surgical-specialty-3.svg`, alt: 'Surgical Specialty Center Recovery Area' },
    { src: `${SUPABASE_BASE}/privilages/surgical-specialty/surgical-specialty-4.svg`, alt: 'Surgical Specialty Center Interior' },
    { src: `${SUPABASE_BASE}/privilages/surgical-specialty/surgical-specialty-5.svg`, alt: 'Surgical Specialty Center Facility' },
];

export default function SurgicalSpecialtyCenterPage() {
    return (
        <main className="min-h-screen">
            <Navbar darkText />

            {/* ─── HERO: Dr. Gordon portrait with dark overlay ───────────────────── */}
            <section className="relative w-full pt-[var(--navbar-height,96px)]">
                <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
                    <Image
                        src={`${SUPABASE_BASE}/meet/dr-gordon-about-page.jpg`}
                        alt="Dr. James R. Gordon"
                        fill
                        priority
                        className="object-cover object-[center_35%]"
                    />
                    <div className="absolute inset-0 bg-black/50 z-[1]" />
                    <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-6">
                        <motion.h1
                            initial="hidden"
                            animate="show"
                            variants={fadeUp}
                            className="font-sans font-black text-3xl md:text-[70px] text-white leading-none mb-4 uppercase tracking-tight"
                        >
                            DR. GORDON&apos;S PRIVILEGES.
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate="show"
                            variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay: 0.15 } } }}
                            className="font-sans font-extrabold text-sm md:text-[20px] text-secondary uppercase tracking-[0.2em]"
                        >
                            TRUSTED HOSPITAL PRIVILEGES FOR SAFE, EXPERT SURGICAL CARE.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ─── DARK HEADER BAR: "SURGICAL SPECIALTY CENTER OF ARMONK" ────────── */}
            <section className="bg-dark pt-10 pb-10 md:py-16">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="font-sans font-black text-3xl md:text-[54px] text-white leading-none uppercase tracking-tight"
                    >
                        SURGICAL SPECIALTY CENTER OF ARMONK
                    </motion.h2>
                </div>
            </section>

            {/* ─── BODY CONTENT ──────────────────────────────────────────────────── */}
            <section className="bg-light-cream pt-10 pb-10 md:py-16">
                <div className="max-w-[900px] mx-auto px-8 md:px-16">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.p
                            variants={fadeUp}
                            className="font-sans font-bold text-[14px] md:text-[16px] text-primary uppercase tracking-wider mb-4"
                        >
                            Location &bull; 440 Mamaroneck Avenue, #410, Harrison, NY 10528
                        </motion.p>

                        <motion.div variants={fadeUp} className="w-16 h-[3px] bg-primary mb-10" />

                        <motion.p
                            variants={fadeUp}
                            className="text-[15px] md:text-[16px] leading-relaxed font-sans text-dark"
                        >
                            Conveniently located near his Armonk Office, Dr. James Gordon operates out of the private surgical rooms of the Surgical Specialty Center of Westchester (SSCW). This specialized facility, designed by surgeons, is dedicated to providing excellence in eyelid and facial surgery with the most advanced medical technology. It also includes a private recovery area where patients can be monitored closely after their surgery. The SSCW is nationally accredited and licensed by the state of New York for their commitment to patient care and safety.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ─── FEATURED PHOTO ────────────────────────────────────────────────── */}
            <section className="bg-white pt-10 pb-10 md:py-16">
                <div className="max-w-[1100px] mx-auto px-8 md:px-16">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="relative w-full aspect-[16/9] overflow-hidden shadow-xl"
                    >
                        <Image
                            src={`${SUPABASE_BASE}/privilages/surgical-specialty/surgical-specialty-1.svg`}
                            alt="Surgical Specialty Center of Armonk"
                            fill
                            className="object-cover object-center"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ─── PHOTO GALLERY ──────────────────────────────────────────────────── */}
            <section className="bg-white pb-10 md:pb-16">
                <div className="max-w-[1100px] mx-auto px-8 md:px-16">
                    <div className="grid grid-cols-2 gap-6">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={img.alt}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={{ ...fadeUp, show: { ...fadeUp.show, transition: { ...fadeUp.show.transition, delay: index * 0.1 } } }}
                                className="relative aspect-[3/2] overflow-hidden shadow-md"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA: Ready to Get Started? ────────────────────────────────────── */}
            <section className="bg-primary pt-10 pb-10 md:py-16">
                <div className="max-w-[900px] mx-auto px-8 md:px-16 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-sans font-black text-2xl md:text-[50px] text-white leading-none mb-4 uppercase tracking-tight"
                        >
                            READY TO GET STARTED?
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans font-extrabold text-sm md:text-[18px] text-secondary uppercase tracking-[0.2em] mb-10"
                        >
                            BOOK A PERSONALIZED CONSULTATION WITH DR. GORDON.
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <a
                                href="https://calendly.com/drjamesgordon/consult"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block bg-white text-primary font-bold py-4 px-12 text-sm md:text-base uppercase tracking-wider shadow-lg hover:shadow-xl hover:bg-near-black hover:text-white transition-all rounded-full"
                                >
                                    BOOK YOUR CONSULTATION
                                </motion.span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <BookingCTA />
            <CherryFinancing />
            <Footer />
        </main>
    );
}
