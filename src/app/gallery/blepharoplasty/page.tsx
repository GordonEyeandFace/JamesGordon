'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import CherryFinancing from '@/components/CherryFinancing';
import { procedureConfig } from '../[procedure]/config';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const procedureOptions = Object.entries(procedureConfig)
    .map(([slug, cfg]) => ({ slug, title: cfg.title.replace(/\.$/, '') }))
    .sort((a, b) => a.title.localeCompare(b.title));

type CategoryKey = 'upper' | 'lower' | 'both';

type ImageIdentifier = number | string;

// Image data - each image is a complete before/after composite
const categoryData: Record<CategoryKey, { title: string; images: ImageIdentifier[] }> = {
    upper: {
        title: 'Upper Blepharoplasty',
        images: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 'ana-bulzomi', 'erica-pettigrew', 'leslyn-roman', 'lucia-fierro-vogel'],
    },
    lower: {
        title: 'Lower Blepharoplasty',
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    both: {
        title: 'Upper and Lower Blepharoplasty',
        images: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 'carol-marash', 'gloria-gordillo'],
    },
};

function getImageUrl(category: CategoryKey, imageId: ImageIdentifier): string {
    const SUPABASE_BASE = 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets';

    // Upper blepharoplasty from Supabase
    if (category === 'upper') {
        if (imageId === 'ana-bulzomi') {
            return `${SUPABASE_BASE}/gallery/upper-blepharoplasty/2 - Upper Blepharoplasty (Ana Bulzomi).webp`;
        }
        if (imageId === 'erica-pettigrew') {
            return `${SUPABASE_BASE}/gallery/upper-blepharoplasty/3 - Upper Blepharoplasty (Erica Pettigrew).webp`;
        }
        if (imageId === 'leslyn-roman') {
            return `${SUPABASE_BASE}/gallery/upper-blepharoplasty/4 - Upper Blepharoplasty (Leslyn Roman).webp`;
        }
        if (imageId === 'lucia-fierro-vogel') {
            return `${SUPABASE_BASE}/gallery/upper-blepharoplasty/5 - Upper Blepharoplasty (Lucia Fierro-Vogel).webp`;
        }
        return `${SUPABASE_BASE}/gallery/upper-blepharoplasty/Upper Blepharoplasty (${imageId}).webp`;
    }

    // Lower blepharoplasty from Supabase
    if (category === 'lower') {
        return `${SUPABASE_BASE}/gallery/lower-blepharoplasty/Blepharoplasty (${imageId}).webp`;
    }

    // Upper and lower blepharoplasty from Supabase
    if (category === 'both') {
        if (imageId === 'carol-marash') {
            return `${SUPABASE_BASE}/gallery/upper-and-lower-blepharoplasty/1 - Upper & Lower Blepharoplasty (Carol Marash).webp`;
        }
        if (imageId === 'gloria-gordillo') {
            return `${SUPABASE_BASE}/gallery/upper-and-lower-blepharoplasty/1 - Upper & Lower Blepharoplasty (Gloria Gordillo).webp`;
        }
        return `${SUPABASE_BASE}/gallery/upper-and-lower-blepharoplasty/Upper & Lower Blepharoplasty (${imageId}).webp`;
    }

    return '';
}

export default function BlepharoplastyGalleryPage() {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState<CategoryKey>('upper');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImageNum, setLightboxImageNum] = useState<ImageIdentifier | null>(null);
    const [lightboxImageUrl, setLightboxImageUrl] = useState<string>('');

    const currentData = categoryData[activeCategory];

    // Lightbox handlers
    const openLightbox = (imageId: ImageIdentifier) => {
        setLightboxImageNum(imageId);
        setLightboxImageUrl(getImageUrl(activeCategory, imageId));
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setLightboxImageNum(null);
    };

    // Handle body scroll lock when lightbox opens/closes
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [lightboxOpen]);

    const goToPrevImage = () => {
        if (lightboxImageNum === null) return;
        const currentImages = categoryData[activeCategory].images;
        const currentIndex = currentImages.indexOf(lightboxImageNum);
        if (currentIndex > 0) {
            const prevImageNum = currentImages[currentIndex - 1];
            setLightboxImageNum(prevImageNum);
            setLightboxImageUrl(getImageUrl(activeCategory, prevImageNum));
        }
    };

    const goToNextImage = () => {
        if (lightboxImageNum === null) return;
        const currentImages = categoryData[activeCategory].images;
        const currentIndex = currentImages.indexOf(lightboxImageNum);
        if (currentIndex < currentImages.length - 1) {
            const nextImageNum = currentImages[currentIndex + 1];
            setLightboxImageNum(nextImageNum);
            setLightboxImageUrl(getImageUrl(activeCategory, nextImageNum));
        }
    };

    // Keyboard handlers
    useEffect(() => {
        if (!lightboxOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') goToPrevImage();
            if (e.key === 'ArrowRight') goToNextImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lightboxOpen, lightboxImageNum, activeCategory]);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
            <section className="relative w-full">
                {/* Hero Image Container */}
                <div
                    className="relative z-[2] w-full overflow-hidden min-h-[320px] sm:min-h-[400px]"
                    style={{ aspectRatio: '16 / 7.5', maxHeight: 'calc(100vh - 120px)', paddingTop: 'var(--navbar-height, 80px)' }}
                >
                    <Image
                        src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/actual-patient-photos.webp"
                        alt="Blepharoplasty Before and After Gallery"
                        fill
                        className="object-cover object-[center_40%]"
                        style={{ top: 'var(--navbar-height, 80px)' }}
                        priority
                    />
                    <div className="absolute inset-0 bg-black/15 z-[1]" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-[1]" />
                </div>

                {/* Glassmorphism frame */}
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
                                    BLEPHAROPLASTY GALLERY
                                </motion.h1>
                                <motion.p
                                    variants={fadeUp}
                                    className="block font-medium tracking-normal normal-case opacity-90 text-secondary"
                                    style={{ fontSize: 'clamp(13px, 1.8vw, 26px)' }}
                                >
                                    Real Patients. Real Results. Personally Performed by Dr. Gordon.
                                </motion.p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── ACTION BAR ───────────────────────────────────────────────────────── */}
            <div className="bg-white border-b border-[#2A2E37]/10 pt-10 pb-10">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6">

                    {/* Back to Galleries */}
                    <Link
                        href="/gallery"
                        className="bg-[#8B1D2D] text-white font-sans font-extrabold text-[11px] uppercase tracking-[0.2em] px-8 py-3 rounded-full hover:bg-[#2A2E37] transition-colors whitespace-nowrap"
                    >
                        ← BACK TO GALLERIES
                    </Link>

                    {/* Procedure Selector */}
                    <label className="relative flex items-center gap-2 border border-[#2A2E37] rounded-full px-6 py-3 min-w-[220px] justify-between cursor-pointer hover:border-[#8B1D2D] transition-colors">
                        <span className="font-sans font-extrabold text-[11px] uppercase tracking-[0.18em] text-[#070707] truncate">
                            BLEPHAROPLASTY
                        </span>
                        <svg className="shrink-0" width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
                            <path d="M1 1L6 6L11 1" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <select
                            aria-label="Jump to another procedure gallery"
                            value="blepharoplasty"
                            onChange={e => {
                                const next = e.target.value;
                                if (next && next !== 'blepharoplasty') router.push(`/gallery/${next}`);
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none"
                        >
                            {procedureOptions.map(opt => (
                                <option key={opt.slug} value={opt.slug}>{opt.title}</option>
                            ))}
                        </select>
                    </label>

                    {/* Go to Procedure */}
                    <Link
                        href="/treatments/eyelid-surgery"
                        className="bg-[#8B1D2D] text-white font-sans font-extrabold text-[11px] uppercase tracking-[0.2em] px-8 py-3 rounded-full hover:bg-[#2A2E37] transition-colors whitespace-nowrap"
                    >
                        GO TO PROCEDURE →
                    </Link>

                </div>
            </div>

            {/* ─── FILTER TABS ─────────────────────────────────────────────────────── */}
            <div className="bg-white border-b border-[#2A2E37]/10 py-6">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {(['upper', 'lower', 'both'] as CategoryKey[]).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-full font-sans font-extrabold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                                    activeCategory === cat
                                        ? 'bg-[#8B1D2D] text-white shadow-lg'
                                        : 'bg-[#F7F5F2] text-[#2A2E37] hover:bg-[#2A2E37] hover:text-white'
                                }`}
                            >
                                {categoryData[cat].title}
                                <span className="ml-2 opacity-70">({categoryData[cat].images.length})</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── PHOTO GRID ─────────────────────────────────────────────────────── */}
            <section className="pt-16 pb-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        >
                            {currentData.images.map((imageId, idx) => (
                                <motion.div
                                    key={`${activeCategory}-${imageId}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className="relative w-full cursor-pointer"
                                    onClick={() => openLightbox(imageId)}
                                >
                                    {/* Each image already contains before/after combined */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={getImageUrl(activeCategory, imageId)}
                                        alt={`${currentData.title} - Case ${imageId}`}
                                        className="w-full h-auto hover:opacity-90 transition-opacity"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {currentData.images.length === 0 && (
                        <div className="text-center py-20 text-[#2A2E37]/40 font-sans text-sm uppercase tracking-wider">
                            No cases available for this category yet.
                        </div>
                    )}
                </div>
            </section>

            {/* ─── CTA ─────────────────────────────────────────────────────── */}
            <BookingCTA />
            <CherryFinancing />

            <Footer />

            {/* ─── LIGHTBOX OVERLAY ────────────────────────────────────────────── */}
            {lightboxOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors"
                        aria-label="Close lightbox"
                    >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Prev Button */}
                    {lightboxImageNum !== null && categoryData[activeCategory].images.indexOf(lightboxImageNum) > 0 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
                            className="absolute left-4 z-50 text-white hover:text-gray-300 transition-colors"
                            aria-label="Previous image"
                        >
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                    )}

                    {/* Next Button */}
                    {lightboxImageNum !== null && categoryData[activeCategory].images.indexOf(lightboxImageNum) < categoryData[activeCategory].images.length - 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
                            className="absolute right-4 z-50 text-white hover:text-gray-300 transition-colors"
                            aria-label="Next image"
                        >
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    )}

                    {/* Image */}
                    <div
                        className="relative max-w-6xl max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={lightboxImageUrl}
                            alt={`${currentData.title} - Case ${lightboxImageNum}`}
                            className="w-full h-auto max-h-[90vh] object-contain"
                        />
                    </div>

                    {/* Image Counter */}
                    {lightboxImageNum !== null && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                            {categoryData[activeCategory].images.indexOf(lightboxImageNum) + 1} / {categoryData[activeCategory].images.length}
                        </div>
                    )}
                </motion.div>
            )}
        </main>
    );
}
