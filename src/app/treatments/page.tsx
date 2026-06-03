'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import CherryFinancing from '@/components/CherryFinancing';


const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const heroColumns = [
    {
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',
        mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/updated-photos/medical-eyecare.svg',
        title: 'Medical\nEye Care',
        tagline: 'Vision & Precision',
        href: '/treatments/medical-eye-care',
    },
    {
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/eyelid-surgery.png',
        mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/updated-photos/eyelid-surgery.svg',
        title: 'Eyelid\nSurgery',
        tagline: 'Surgical Artistry',
        href: '/treatments/eyelid-surgery',
        objectPosition: '25% 55%',
        imageScale: 1.2,
    },
    {
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
        mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',
        title: 'Non-Surgical\nRejuvenation',
        tagline: 'Minimal Downtime',
        href: '/treatments/non-surgical',
    },
    {
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero_section_injectables.svg',
        mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero_section_injectables.svg',
        title: 'Neuromodulators\n& Dermal Fillers',
        tagline: 'Natural Results',
        href: '/treatments/injectables',
        imageScale: 1.0,
    },
];

export default function TreatmentsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar darkText={true} />

            {/* ─── 1. SECTION TITLE ────────────────────────────────────────────────── */}
            <section className="pt-28 md:pt-48 pb-10 md:pb-12 bg-white text-center">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    className="max-w-[1440px] mx-auto px-8"
                >
                    <motion.h1
                        variants={fadeUp}
                        className="hidden md:block font-sans font-black text-4xl md:text-[70px] uppercase leading-none tracking-tight text-near-black"
                    >
                        DR. GORDON&apos;S
                    </motion.h1>
                    <motion.h1
                        variants={fadeUp}
                        className="font-sans font-black text-4xl md:text-[70px] uppercase leading-none tracking-tight text-near-black mb-4"
                    >
                        SIGNATURE TREATMENTS.
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        className="font-sans font-extrabold text-sm md:text-[20px] uppercase tracking-[0.2em] text-primary"
                    >
                        DESIGNED FOR HOW YOU SEE, FEEL AND LOOK — AT YOUR BEST.
                    </motion.p>
                </motion.div>
            </section>

            {/* ─── 2. HERO — 2x2 grid on mobile, 4-column flex on desktop ────────── */}
            <section className="relative w-full h-[90vh] min-h-[500px] grid grid-cols-2 md:flex overflow-hidden">
                {heroColumns.map((col, idx) => (
                    <Link
                        key={idx}
                        href={col.href}
                        className="relative flex-1 overflow-hidden group cursor-pointer"
                    >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: idx * 0.15 }}
                        className="relative w-full h-full"
                    >
                        {/* Mobile image */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={col.mobileImage}
                            alt={col.title.replace('\n', ' ')}
                            className="md:hidden absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            style={{ objectPosition: col.objectPosition ?? 'center', transform: col.imageScale ? `scale(${col.imageScale})` : undefined }}
                        />
                        {/* Desktop image */}
                        <Image
                            src={col.image}
                            alt={col.title.replace('\n', ' ')}
                            fill
                            className="hidden md:block object-cover transition-transform duration-700 group-hover:scale-105"
                            style={{ objectPosition: col.objectPosition ?? 'center', transform: col.imageScale ? `scale(${col.imageScale})` : undefined }}
                            priority={idx < 2}
                        />
                        <div className="absolute inset-0 bg-[#2A2E37]/60 group-hover:bg-[#2A2E37]/75 transition-colors duration-500" />
                        {/* Divider — desktop only */}
                        {idx < heroColumns.length - 1 && (
                            <div className="hidden md:block absolute right-0 top-[15%] bottom-[15%] w-px bg-white/20 z-10" />
                        )}
                        <div className="absolute bottom-0 left-0 right-0 z-10 px-2 pb-2 md:px-6 md:pb-10">
                            <div className="w-4 h-px bg-[#CEB776] mb-1 md:w-10 md:mb-4" />
                            <h3
                                className="font-sans font-extrabold text-white uppercase leading-tight mb-1 md:mb-3 whitespace-pre-line text-sm md:text-[clamp(22px,2.5vw,40px)]"
                            >
                                {col.title}
                            </h3>
                            <p className="block font-sans font-normal text-white/80 text-[10px] md:text-base lg:text-[20px] mb-1 md:mb-4">
                                {col.tagline}
                            </p>
                            <div className="w-4 h-px bg-[#CEB776] md:w-10" />
                        </div>
                    </motion.div>
                    </Link>
                ))}
            </section>



            <BookingCTA />
            <CherryFinancing />
            <Footer />
        </main>
    );
}
