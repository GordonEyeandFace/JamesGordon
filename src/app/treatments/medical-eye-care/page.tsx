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
        title: 'Cataract Surgery',
        recoveryTime: '4–6 weeks',
        description: 'Cataract surgery is a safe, outpatient procedure that removes the eye\'s cloudy, natural lens and replaces it with a clear artificial lens (intraocular lens) to restore clear vision.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/medical-eye-care/medical-eyecare-01.svg',
        learnMoreHref: '/treatments/medical-eye-care/cataract-surgery',
        patientPhotosHref: null,
    },
    {
        title: 'Blepharoplasty',
        recoveryTime: '1–2 weeks',
        description: 'Blepharoplasty is performed to reverse the effects of ptosis by restoring the function of the eyelid and improving the patient\'s overall appearance.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/medical-eye-care/medical-eyecare-02.svg',
        learnMoreHref: '/treatments/medical-eye-care/blepharoplasty',
        patientPhotosHref: '/gallery/blepharoplasty',
    },
    {
        title: 'Ptosis Repair',
        recoveryTime: '1–2 weeks',
        description: 'Ptosis repair surgery tightens the upper eyelid to correct a drooping eyelid caused by a weakness or separation of muscles within the eyelid.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/medical-eye-care/medical-eyecare-03.svg',
        learnMoreHref: '/treatments/medical-eye-care/ptosis-repair',
        patientPhotosHref: '/gallery/ptosis-repair',
    },
    {
        title: 'Ectropion and Entropion Repair',
        recoveryTime: '1–2 weeks',
        description: 'Ectropion and Entropion repair is a surgical procedure that corrects eyelids that turn outward (ectropion) or inward (entropion) to restore proper eyelid position, protect the eye surface, and relieve irritation or vision problems.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/medical-eye-care/medical-eyecare-04.svg',
        learnMoreHref: '/treatments/medical-eye-care/ectropion-entropion-repair',
        patientPhotosHref: '/gallery/ectropion-entropion',
    },
    {
        title: 'Dry Eye Management',
        recoveryTime: '1–2 weeks',
        description: 'Dry Eye Management is the treatment of insufficient or poor-quality tears using therapies such as lubricating drops, medications, or procedures to relieve irritation, improve tear stability, and protect the eye surface.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/medical-eye-care/medical-eyecare-05.svg',
        learnMoreHref: '/treatments/medical-eye-care/dry-eye-management',
        patientPhotosHref: null,
    },
    {
        title: 'Stye Removal',
        recoveryTime: '1–2 weeks',
        description: 'Stye Removal is a minor procedure that drains or removes an infected oil gland on the eyelid to relieve swelling, pain, and irritation.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/medical-eye-care/medical-eyecare-06.svg',
        learnMoreHref: '/treatments/medical-eye-care/stye-removal',
        patientPhotosHref: null,
    },
    {
        title: 'Treatment of Blepharospasm',
        recoveryTime: '1–2 weeks',
        description: 'Blepharospasm treatment addresses involuntary eyelid spasms through targeted therapies including Botox injections or surgical intervention to restore normal eyelid function and improve quality of life.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/medical-eye-care/medical-eyecare-07.svg',
        learnMoreHref: '/treatments/medical-eye-care/blepharospasm',
        patientPhotosHref: null,
    },
    {
        title: 'Tumor Removal and Reconstruction',
        recoveryTime: '1–2 weeks',
        description: 'Tumor Removal and Reconstruction is a surgical procedure that removes abnormal growths around the eye or eyelid and restores the area\'s structure and function for proper healing and appearance.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/medical-eye-care/medical-eyecare-08.svg',
        learnMoreHref: '/treatments/medical-eye-care/tumor-removal',
        patientPhotosHref: '/gallery/tumor-removal',
    },
    {
        title: 'Routine Eye Exams',
        recoveryTime: '1–2 weeks',
        description: 'Routine Eye Exams are comprehensive evaluations of eye health and vision used to detect vision problems, monitor eye conditions, and identify diseases early.',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/medical-eye-care/medical-eyecare-09.svg',
        learnMoreHref: '/treatments/medical-eye-care/routine-eye-exams',
        patientPhotosHref: null,
    },
];

export default function MedicalEyeCarePage() {
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
                                priority={idx === 0}
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
                            MEDICAL EYE CARE.
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans text-[16px] md:text-[20px] text-[#2A2E37] leading-relaxed max-w-[860px] mx-auto"
                        >
                            Protect your vision with Dr. Gordon&apos;s expert eye care — where precision meets compassion. Personalized visits ensure early treatment for lasting clarity and comfort.
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
                            {/* Photo */}
                            <div className="w-full md:w-[280px] h-[200px] md:h-auto flex-shrink-0 bg-gray-50 flex items-center justify-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={proc.image}
                                    alt={proc.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Content */}
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
                                        <Link
                                            href={proc.patientPhotosHref}
                                            className="inline-block bg-[#8B1D2D] text-white font-bold uppercase tracking-wider text-xs py-3 px-6 rounded-full hover:bg-[#2A2E37] transition-colors"
                                        >
                                            Actual Patient Photos
                                        </Link>
                                    )}
                                    <Link
                                        href={proc.learnMoreHref}
                                        className="inline-block bg-[#8B1D2D] text-white font-bold uppercase tracking-wider text-xs py-3 px-6 rounded-full hover:bg-[#2A2E37] transition-colors"
                                    >
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
