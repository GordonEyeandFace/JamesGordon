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

export default function WhitePlainsHospitalPage() {
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

            {/* ─── DARK HEADER BAR: "WHITE PLAINS HOSPITAL" ──────────────────────── */}
            <section className="bg-dark pt-10 pb-10 md:py-16">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="font-sans font-black text-3xl md:text-[54px] text-white leading-none uppercase tracking-tight"
                    >
                        WHITE PLAINS HOSPITAL
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
                            Location &bull; 41 East Post Road
                        </motion.p>

                        <motion.div variants={fadeUp} className="w-16 h-[3px] bg-primary mb-10" />

                        <motion.p
                            variants={fadeUp}
                            className="text-[15px] md:text-[16px] leading-relaxed font-sans text-dark"
                        >
                            Conveniently located only 5 miles from his office, Dr. James Gordon is pleased to have full medical privileges at White Plains Hospital. WP Hospital is open 24 hours a day, 7 days a week with a full range of hospital services. The largest healthcare provider in Westchester County, WP Hospital focuses on patient care, comfort, and safety in all of their renowned programs and services. WP Hospital has earned many awards and honors, including The Joint Commission&apos;s Gold Seal of Approval, several Women&apos;s Choice Awards, recognition from U.S. News &amp; World Report, and more. White Plains Hospital is a non-profit health care organization with a dedicated staff that provide compassionate care to all patients. For more information, visit{' '}
                            <a
                                href="https://www.wphospital.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary underline hover:text-near-black transition-colors"
                            >
                                www.wphospital.org
                            </a>
                            .
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ─── HOSPITAL PHOTO ─────────────────────────────────────────────────── */}
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
                            src={`${SUPABASE_BASE}/privilages/white-plains/white-plains-hospital.svg`}
                            alt="White Plains Hospital Building"
                            fill
                            className="object-cover object-center"
                        />
                    </motion.div>
                </div>
            </section>

            {/* ─── FACILITY GALLERY ─────────────────────────────────────────────────── */}
            <section className="bg-light-cream pt-10 pb-10 md:py-16">
                <div className="max-w-[1200px] mx-auto px-8 md:px-16">
                    <motion.h3
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="font-sans font-black text-2xl md:text-[40px] text-dark leading-none mb-10 uppercase tracking-tight text-center"
                    >
                        STATE-OF-THE-ART FACILITIES
                    </motion.h3>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <motion.div variants={fadeUp} className="relative w-full aspect-[16/10] overflow-hidden shadow-lg group">
                            <Image
                                src={`${SUPABASE_BASE}/white-plains-hospital/IMG_9014.jpeg`}
                                alt="White Plains Hospital Reception Lobby"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full aspect-[16/10] overflow-hidden shadow-lg group">
                            <Image
                                src={`${SUPABASE_BASE}/white-plains-hospital/IMG_9015.jpeg`}
                                alt="White Plains Hospital Patient Room"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full aspect-[16/10] overflow-hidden shadow-lg group">
                            <Image
                                src={`${SUPABASE_BASE}/white-plains-hospital/IMG_9016.jpeg`}
                                alt="White Plains Hospital Waiting Area"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                        <motion.div variants={fadeUp} className="relative w-full aspect-[16/10] overflow-hidden shadow-lg group">
                            <Image
                                src={`${SUPABASE_BASE}/white-plains-hospital/IMG_9018.jpeg`}
                                alt="White Plains Hospital Treatment Room"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                    </motion.div>
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
                            className="font-sans font-extrabold text-sm md:text-[18px] text-white uppercase tracking-[0.2em] mb-10"
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
