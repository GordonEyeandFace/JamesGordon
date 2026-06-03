'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import CherryFinancing from '@/components/CherryFinancing';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

type ProcedureLink = { label: string; gallerySlug?: string };

interface CategoryCard {
    title: string;
    galleryHref: string;
    image: string;
    mobileImage: string;
    description: string;
    objectPosition?: string;
    imageScale?: number;
    procedures: ProcedureLink[];
}

const categoryCards: CategoryCard[] = [
    {
        title: 'Medical Eye Care',
        galleryHref: '/gallery/blepharoplasty',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/12-medical-eye-care.svg',
        mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/12-medical-eye-care.svg',
        description: 'Protect your vision with Dr. Gordon’s expert eye care — where precision meets compassion. Personalized visits ensure early treatment for lasting clarity and comfort.',
        objectPosition: '65% center',
        procedures: [
            { label: 'Cataract Surgery' },
            { label: 'Blepharoplasty', gallerySlug: 'blepharoplasty' },
            { label: 'Ptosis Repair', gallerySlug: 'ptosis-repair' },
            { label: 'Ectropion & Entropion Repair', gallerySlug: 'ectropion-entropion' },
            { label: 'Dry Eye Management' },
            { label: 'Stye Removal' },
            { label: 'Treatment of Blepharospasm' },
            { label: 'Tumor Removal & Reconstruction', gallerySlug: 'tumor-removal' },
            { label: 'Routine Eye Exams' },
            { label: 'Orbital Fracture Evaluation' },
            { label: 'Thyroid Eye Disease Management' },
        ],
    },
    {
        title: 'Eyelid Surgery',
        galleryHref: '/gallery/blepharoplasty',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/13-eyelid-surgery.png',
        mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/13-eyelid-surgery.png',
        description: 'Refined techniques that restore youthful appearance while preserving natural expression.',
        objectPosition: '25% 55%',
        imageScale: 1.2,
        procedures: [
            { label: 'Upper and Lower Eyelid Blepharoplasty', gallerySlug: 'blepharoplasty' },
            { label: 'Revision Blepharoplasty' },
            { label: 'Blepharoplasty & Ptosis', gallerySlug: 'bleph-and-ptosis' },
            { label: 'Festoon Treatment' },
            { label: 'Double Eyelid Surgery' },
            { label: 'Canthoplasty and Canthopexy' },
            { label: 'Eyelid Fat Transfer or Removal' },
        ],
    },
    {
        title: 'Non-Surgical Rejuvenation',
        galleryHref: '/gallery/5d-eyebag-removal',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/14-non-surgical-rejuvenation.png',
        mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/14-non-surgical-rejuvenation.png',
        description: 'Reawaken your eyes and skin with advanced radiofrequency, laser, PDO Threads and injectable technologies — minimally invasive treatments that lift, tighten, and revitalize with little to no downtime.',
        procedures: [
            { label: '5D Eye Bag Removal', gallerySlug: '5d-eyebag-removal' },
            { label: '5D Face Lift', gallerySlug: '5d-face-lift' },
            { label: 'Laser Skin Resurfacing', gallerySlug: 'laser-skin-resurfacing' },
            { label: 'PDO Thread Lift for Skin Tightening', gallerySlug: 'pdo-thread-lift' },
            { label: 'RF Microneedling' },
            { label: 'Jowl and Double Chin Reduction' },
            { label: 'PRP (Platelet-Rich Plasma) Therapy' },
            { label: "Drop N' Lift & Upneeq (Eye Lift Drops)", gallerySlug: 'drop-n-lift' },
        ],
    },
    {
        title: 'Neuromodulators & Dermal Fillers',
        galleryHref: '/gallery/botox',
        image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/treatments/Injectables-2-NEW.webp',
        mobileImage: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/treatments/Injectables-2-NEW.webp',
        description: 'Dr. Gordon’s expert touch delivers smooth, natural results that enhance harmony and balance while safely preserving individuality. Each injectable is delivered with precision, offering a subtle lift that still feels authentically you.',
        procedures: [
            { label: 'Tear Trough Filler for Under-Eye Hollows' },
            { label: 'Neuromodulators & Dermal Fillers', gallerySlug: 'botox' },
            { label: 'Dysport for Dynamic Wrinkles' },
            { label: 'Filler Revision and Correction' },
            { label: 'Hyaluronidase for Filler Dissolution' },
            { label: 'Dermal Fillers' },
        ],
    },
];

export default function GalleryPage() {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ─── 1. HERO SECTION ──────────────────────────────────────────────── */}
            <section className="relative w-full">
                {/* Hero Image Container */}
                <div
                    className="relative z-[2] w-full overflow-hidden min-h-[320px] sm:min-h-[400px]"
                    style={{ aspectRatio: '16 / 7.5', maxHeight: 'calc(100vh - 120px)', paddingTop: 'var(--navbar-height, 80px)' }}
                >
                    <img
                        src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/page/injectables-landscape.svg"
                        alt="Gallery Hero"
                        className="absolute left-0 right-0 bottom-0 w-full h-full object-cover object-[center_40%]"
                        style={{ top: 'var(--navbar-height, 80px)' }}
                    />
                    <div className="absolute inset-0 bg-black/15 z-[1]" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-[1]" />
                </div>

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
                            style={{
                                minHeight: 'clamp(90px, 12vw, 160px)',
                                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 60px inset'
                            }}
                        >
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={{ show: { transition: { staggerChildren: 0.15 } } }}
                            >
                                <motion.h1
                                    variants={fadeUp}
                                    className="font-bold text-white tracking-[0.12em] font-sans uppercase drop-shadow-lg mb-2"
                                    style={{ fontSize: 'clamp(14px, 2.8vw, 36px)' }}
                                >
                                    REAL PATIENTS.&nbsp;<span className="text-white">REAL RESULTS.</span>
                                </motion.h1>
                                <motion.p
                                    variants={fadeUp}
                                    className="block font-medium tracking-normal normal-case opacity-90 text-secondary"
                                    style={{ fontSize: 'clamp(13px, 1.8vw, 26px)' }}
                                >
                                    Personally performed by Dr. Gordon with precision, advanced technology and individualized care.
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 2. CATEGORY IMAGES ─────────────────────────────────────── */}
            <section className="pt-10 pb-10 md:py-16 relative overflow-hidden bg-light-cream">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                        className="text-center mb-10 md:mb-10"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-2xl md:text-5xl lg:text-[70px] font-black font-sans uppercase text-near-black tracking-tight leading-none mb-4"
                        >
                            <span className="block">DR. GORDON&apos;S</span>
                            <span className="block">SIGNATURE TREATMENTS.</span>
                        </motion.h2>
                        <motion.div variants={fadeUp} className="w-20 h-1 bg-primary mx-auto mb-4" />
                        <motion.p
                            variants={fadeUp}
                            className="text-primary font-extrabold font-sans text-sm md:text-[20px] tracking-[0.2em] uppercase"
                        >
                            Expert Care for Every Patient.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-[1240px] mx-auto">
                        {categoryCards.map((card, idx) => (
                            <motion.div
                                key={`${card.galleryHref}-${idx}`}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="flex flex-col items-center w-full group"
                            >
                                <div
                                    className="w-full cursor-pointer"
                                    role="link"
                                    tabIndex={0}
                                    onClick={() => router.push(card.galleryHref)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            router.push(card.galleryHref);
                                        }
                                    }}
                                >
                                    <div className="relative w-full aspect-[4/5] overflow-hidden shadow-xl bg-white">
                                        {/* Mobile image */}
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={card.mobileImage}
                                            alt={card.title}
                                            className="md:hidden absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            style={{ objectPosition: card.objectPosition ?? 'center', transform: card.imageScale ? `scale(${card.imageScale})` : undefined }}
                                        />
                                        {/* Desktop image */}
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="hidden md:block object-cover transition-transform duration-700 group-hover:scale-105"
                                            style={{ objectPosition: card.objectPosition ?? 'center', transform: card.imageScale ? `scale(${card.imageScale})` : undefined }}
                                            priority={idx < 2}
                                        />
                                        <div className="absolute inset-0 bg-primary/95 opacity-0 hidden md:flex group-hover:opacity-100 transition-all duration-500 flex-col items-center justify-center p-6 text-white text-center z-10">
                                            <h4 className="text-secondary font-black text-[20px] uppercase tracking-widest mb-4">Procedures</h4>
                                            <ul className="flex flex-col gap-y-2 text-[16px] font-medium w-fit mx-auto">
                                                {card.procedures.map((proc, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2"></span>
                                                        {proc.gallerySlug ? (
                                                            <Link
                                                                href={`/gallery/${proc.gallerySlug}`}
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="inline-flex origin-center transition-transform duration-300 hover:scale-110 hover:text-white focus-visible:scale-110 focus-visible:text-white"
                                                            >
                                                                {proc.label}
                                                            </Link>
                                                        ) : (
                                                            <span className="inline-flex transition-transform duration-300 group-hover:scale-[1.02]">
                                                                {proc.label}
                                                            </span>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 z-10 px-2 pb-2 md:px-6 md:pb-10">
                                            <div className="w-4 h-px bg-[#CEB776] mb-1 md:w-10 md:mb-4" />
                                            <div className="w-4 h-px bg-[#CEB776] md:w-10" />
                                        </div>
                                    </div>
                                    <div className="w-full bg-white shadow-2xl pt-3 px-6 pb-6 md:p-8 text-center flex flex-col items-center">
                                        <h3 className="text-primary font-bold text-[20px] uppercase mb-4 tracking-wider leading-tight text-center mt-[40px] md:mt-0">
                                            {card.title}
                                        </h3>
                                        <p className="text-dark/80 leading-relaxed text-[16px] font-semibold mb-8 text-center">
                                            {card.description}
                                        </p>
                                        <span className="inline-block md:hidden text-primary font-bold text-xs uppercase tracking-[0.15em] mb-2">
                                            View Procedures &rarr;
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 4. CTA: Book Your Personalized Consultation ─────────────────────────── */}
            <BookingCTA />
            <CherryFinancing />

            <Footer />
        </main>
    );
}
