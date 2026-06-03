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

const navColumns = [
    { image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/injectables.png',     mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/updated-photos/medical-eyecare.svg',  title: 'Medical\nEye Care',          tagline: 'Vision & Precision',  href: '/treatments/medical-eye-care' },
    { image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/eyelid-surgery.png',  mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/updated-photos/eyelid-surgery.svg',   title: 'Eyelid\nSurgery',            tagline: 'Surgical Artistry',   href: '/treatments/eyelid-surgery', objectPosition: '25% 55%', imageScale: 1.2 },
    { image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',    mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/hero/non-surgical.png',        title: 'Non-Surgical\nRejuvenation', tagline: 'Minimal Downtime',    href: '/treatments/non-surgical' },
    { image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero_section_injectables.svg', mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero_section_injectables.svg', title: 'Neuromodulators\n& Dermal Fillers', tagline: 'Natural Results',     href: '/treatments/injectables', imageScale: 1.0 },
];

const procedures = [
    {
        title: 'Upper and Lower Eyelid Blepharoplasty',
        recoveryTime: '1–2 weeks',
        description: 'Upper and Lower Eyelid Blepharoplasty is a surgical procedure that removes or repositions excess skin and fat from the upper and lower eyelids to improve vision obstruction and create a more youthful eye appearance.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/eyelid-surgery/eyelid-surgery-01.svg',
        learnMoreHref: '/treatments/eyelid-surgery/upper-lower-blepharoplasty',
        patientPhotosHref: '/gallery/blepharoplasty',
    },
    {
        title: 'Revision Blepharoplasty',
        recoveryTime: '1–2 weeks',
        description: 'Revision Blepharoplasty is a corrective eyelid surgery performed to improve or fix the results of a previous blepharoplasty, addressing issues such as asymmetry, excess skin, or functional concerns.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/eyelid-surgery/eyelid-surgery-02.svg',
        learnMoreHref: '/treatments/eyelid-surgery/revision-blepharoplasty',
        patientPhotosHref: null,
    },
    {
        title: 'Aesthetic Ptosis Repair',
        recoveryTime: '1–2 weeks',
        description: 'Aesthetic Ptosis Repair is a surgical procedure that lifts a drooping upper eyelid to improve eye symmetry and create a more alert, balanced appearance while preserving natural eyelid function.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/eyelid-surgery/eyelid-surgery-03.svg',
        learnMoreHref: '/treatments/eyelid-surgery/aesthetic-ptosis-repair',
        patientPhotosHref: '/gallery/aesthetic-ptosis-repair',
    },
    {
        title: 'Brow Lift',
        recoveryTime: '1–2 weeks',
        description: 'Brow Lift is a surgical procedure that elevates a sagging brow to reduce forehead wrinkles and create a more refreshed, youthful appearance around the eyes.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/eyelid-surgery/eyelid-surgery-04.svg',
        learnMoreHref: '/treatments/eyelid-surgery/brow-lift',
        patientPhotosHref: '/gallery/brow-lift',
    },
    {
        title: 'Festoon Treatment',
        recoveryTime: '1–2 weeks',
        description: 'Festoon Treatment is a procedure that reduces swollen or sagging bags on the upper cheek and lower eyelid area to restore a smoother, more youthful contour under the eyes.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/eyelid-surgery/eyelid-surgery-05.svg',
        learnMoreHref: '/treatments/eyelid-surgery/festoon-treatment',
        patientPhotosHref: null,
    },
    {
        title: 'Double Eyelid Surgery',
        recoveryTime: '1–2 weeks',
        description: 'Double Eyelid Surgery is a cosmetic procedure that creates a defined crease in the upper eyelid to form a double eyelid and enhance eye shape and symmetry.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/eyelid-surgery/eyelid-surgery-06.svg',
        learnMoreHref: '/treatments/eyelid-surgery/double-eyelid-surgery',
        patientPhotosHref: null,
    },
    {
        title: 'Canthoplasty and Canthopexy',
        recoveryTime: '1–2 weeks',
        description: 'Canthoplasty and Canthopexy are procedures that tighten or reshape the outer corner of the eyelids to improve eye support, enhance eye shape, and correct eyelid laxity.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/eyelid-surgery/eyelid-surgery-07.svg',
        learnMoreHref: '/treatments/eyelid-surgery/canthoplasty-canthopexy',
        patientPhotosHref: null,
    },
    {
        title: 'Eyelid Fat Transfer or Removal',
        recoveryTime: '1–2 weeks',
        description: 'Eyelid Fat Transfer or Removal is a procedure that either removes excess fat or redistributes fat around the eyelids to reduce puffiness, smooth under-eye hollows, and create a more balanced eye contour.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/eyelid-surgery/eyelid-surgery-08.svg',
        learnMoreHref: '/treatments/eyelid-surgery/eyelid-fat-transfer',
        patientPhotosHref: null,
    },
];

export default function EyelidSurgeryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

                        {/* ─── CATEGORY NAV ────────────────────────────────────────────────────── */}
            <section className="relative w-full h-[90vh] min-h-[500px] grid grid-cols-2 md:flex overflow-hidden">
                {navColumns.map((col, idx) => (
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
                                alt={col.title.replace('\\n', ' ')}
                                className="md:hidden absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ objectPosition: col.objectPosition ?? 'center', transform: col.imageScale ? `scale(${col.imageScale})` : undefined }}
                            />
                            {/* Desktop image */}
                            <Image
                                src={col.image}
                                alt={col.title.replace('\\n', ' ')}
                                fill
                                className="hidden md:block object-cover transition-transform duration-700 group-hover:scale-105"
                                style={{ objectPosition: col.objectPosition ?? 'center', transform: col.imageScale ? `scale(${col.imageScale})` : undefined }}
                                priority={idx === 1}
                            />
                            <div className="absolute inset-0 bg-[#2A2E37]/60 group-hover:bg-[#2A2E37]/75 transition-colors duration-500" />
                            {idx < navColumns.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-[15%] bottom-[15%] w-px bg-white/20 z-10" />
                            )}
                            <div className="absolute bottom-0 left-0 right-0 z-10 px-2 pb-2 md:px-6 md:pb-10">
                                <div className="w-4 h-px bg-[#CEB776] mb-1 md:w-10 md:mb-4" />
                                <h3 className="font-sans font-extrabold text-white uppercase leading-tight mb-1 md:mb-3 whitespace-pre-line text-sm md:text-[clamp(22px,2.5vw,40px)]">
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

            {/* ─── PAGE HEADER ─────────────────────────────────────────────────────── */}
            <section className="bg-white pt-10 pb-10 md:py-20">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="font-sans font-black text-4xl md:text-[64px] uppercase leading-none text-[#070707] mb-4"
                        >
                            EYELID SURGERY.
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans text-[16px] md:text-[20px] text-[#2A2E37] leading-relaxed max-w-[860px] mx-auto"
                        >
                            Refine and restore your eyes with Dr. Gordon&apos;s precision-driven approach.<br className="hidden md:block" /> Each procedure is customized to create natural, youthful results while preserving your unique features.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ─── PROCEDURE CARDS ─────────────────────────────────────────────────── */}
            <section className="bg-[#F7F5F2] pt-10 pb-10 md:pb-20">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col gap-6">
                    {procedures.map((proc, idx) => (
                        <motion.div
                            key={proc.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.04 }}
                            className="bg-white shadow-sm flex flex-col md:flex-row overflow-hidden"
                        >
                            <div className="w-full md:w-[280px] h-[200px] md:h-auto flex-shrink-0 bg-gray-50 flex items-center justify-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={proc.image} alt={proc.title} className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1 p-7 md:p-10 flex flex-col justify-between">
                                <div>
                                    <h2 className="font-sans font-black text-[22px] md:text-[28px] uppercase text-[#070707] leading-tight mb-2">
                                        {proc.title}
                                    </h2>
                                    <p className="font-sans font-bold text-[16px] uppercase tracking-[0.18em] text-[#8B1D2D] mb-4">
                                        Recovery Time &nbsp;|&nbsp; {proc.recoveryTime}
                                    </p>
                                    <p className="font-sans text-[15px] md:text-[16px] text-[#2A2E37] leading-relaxed">
                                        {proc.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3 mt-6">
                                    {proc.patientPhotosHref && (
                                        <Link href={proc.patientPhotosHref} className="inline-block bg-[#8B1D2D] text-white font-bold uppercase tracking-wider text-xs py-3 px-6 rounded-full hover:bg-[#2A2E37] transition-colors">
                                            Actual Patient Photos
                                        </Link>
                                    )}
                                    <Link href={proc.learnMoreHref} className="inline-block bg-[#8B1D2D] text-white font-bold uppercase tracking-wider text-xs py-3 px-6 rounded-full hover:bg-[#2A2E37] transition-colors">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <BookingCTA />
            <CherryFinancing />
            <Footer />
        </main>
    );
}
