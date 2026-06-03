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

type ProcedureFilter = 'ECTROPION' | 'ENTROPION' | 'ALL';

const filterOptions: ProcedureFilter[] = ['ALL', 'ECTROPION', 'ENTROPION'];

// Cases array - composite before/after images
const cases = [
    { id: 1, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/1-ectropion.webp', procedure: 'ECTROPION' },
    { id: 2, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/2-ectropion.webp', procedure: 'ECTROPION' },
    { id: 3, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/3-ectropion.webp', procedure: 'ECTROPION' },
    { id: 4, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/4-ectropion.webp', procedure: 'ECTROPION' },
    { id: 5, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/5-ectropion.webp', procedure: 'ECTROPION' },
    { id: 6, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/6-ectropion.webp', procedure: 'ECTROPION' },
    { id: 7, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/7-ectropion.webp', procedure: 'ECTROPION' },
    { id: 8, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/8-ectropion.webp', procedure: 'ECTROPION' },
    { id: 9, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/9-ectropion.webp', procedure: 'ECTROPION' },
    { id: 10, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/10-ectropion.webp', procedure: 'ECTROPION' },
    { id: 11, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/11-ectropion.webp', procedure: 'ECTROPION' },
    { id: 12, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/12-ectropion.webp', procedure: 'ECTROPION' },
    { id: 13, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/13-ectropion.webp', procedure: 'ECTROPION' },
    { id: 14, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/14-entropion.webp', procedure: 'ENTROPION' },
    { id: 15, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/15-entropion.webp', procedure: 'ENTROPION' },
    { id: 16, image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/gallery/drive-gallery/ectropion-entropion/16-entropion.webp', procedure: 'ENTROPION' },
] as const;

export default function EctropionEntropionGalleryPage() {
    const router = useRouter();
    const [activeFilter, setActiveFilter] = useState<ProcedureFilter>('ALL');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxCaseId, setLightboxCaseId] = useState<number | null>(null);

    const filterCounts = cases.reduce<Record<ProcedureFilter, number>>(
        (acc, c) => {
            acc[c.procedure] += 1;
            acc.ALL += 1;
            return acc;
        },
        { ALL: 0, ECTROPION: 0, ENTROPION: 0 }
    );

    // Filter cases based on active filter
    const filteredCases = activeFilter === 'ALL'
        ? cases
        : cases.filter(c => c.procedure === activeFilter);

    // Lightbox handlers
    const openLightbox = (caseId: number) => {
        setLightboxCaseId(caseId);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setLightboxCaseId(null);
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
        if (lightboxCaseId === null) return;
        const currentIndex = filteredCases.findIndex(c => c.id === lightboxCaseId);
        if (currentIndex > 0) {
            setLightboxCaseId(filteredCases[currentIndex - 1].id);
        }
    };

    const goToNextImage = () => {
        if (lightboxCaseId === null) return;
        const currentIndex = filteredCases.findIndex(c => c.id === lightboxCaseId);
        if (currentIndex < filteredCases.length - 1) {
            setLightboxCaseId(filteredCases[currentIndex + 1].id);
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
    }, [lightboxOpen, lightboxCaseId, filteredCases]);

    const currentLightboxCase = lightboxCaseId !== null
        ? cases.find(c => c.id === lightboxCaseId)
        : null;

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
                        alt="Ectropion & Entropion Repair Before and After Gallery"
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
                                    ECTROPION & ENTROPION REPAIR
                                </motion.h1>
                                <motion.p
                                    variants={fadeUp}
                                    className="block font-medium tracking-normal normal-case opacity-90 text-secondary"
                                    style={{ fontSize: 'clamp(13px, 1.8vw, 26px)' }}
                                >
                                    BEFORE & AFTER PHOTOS
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
                            ECTROPION & ENTROPION
                        </span>
                        <svg className="shrink-0" width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
                            <path d="M1 1L6 6L11 1" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <select
                            aria-label="Jump to another procedure gallery"
                            value="ectropion-entropion"
                            onChange={e => {
                                const next = e.target.value;
                                if (next && next !== 'ectropion-entropion') router.push(`/gallery/${next}`);
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
                        href="/treatments/medical-eye-care/ectropion-entropion-repair"
                        className="bg-[#8B1D2D] text-white font-sans font-extrabold text-[11px] uppercase tracking-[0.2em] px-8 py-3 rounded-full hover:bg-[#2A2E37] transition-colors whitespace-nowrap"
                    >
                        GO TO PROCEDURE →
                    </Link>

                </div>
            </div>

            {/* ─── FILTER BAR ─────────────────────────────────────────────────────────── */}
            <div className="bg-white border-b border-[#2A2E37]/10 py-6">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                    <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                        {filterOptions.map((filter) => {
                            const isActive = activeFilter === filter;
                            const label = filter === 'ALL'
                                ? 'All Procedures'
                                : filter === 'ECTROPION'
                                    ? 'Ectropion'
                                    : 'Entropion';

                            return (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`inline-flex items-center justify-center gap-2 min-h-[46px] px-6 md:px-7 py-3 rounded-full border font-sans font-extrabold text-[10px] md:text-[11px] uppercase tracking-[0.18em] transition-all duration-200 shadow-sm ${
                                        isActive
                                            ? 'bg-[#8B1D2D] text-white border-[#8B1D2D] shadow-md'
                                            : 'bg-[#F7F5F2] text-[#2A2E37] border-[#ECE6DD] hover:bg-white hover:border-[#2A2E37] hover:shadow-md'
                                    }`}
                                >
                                    <span>{label}</span>
                                    <span className={`text-[10px] md:text-[11px] ${isActive ? 'text-white/80' : 'text-[#2A2E37]/60'}`}>
                                        ({filterCounts[filter]})
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* ─── PHOTO GRID ─────────────────────────────────────────────────────── */}
            <section className="pt-16 pb-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        >
                            {filteredCases.map((caseItem, idx) => (
                                <motion.div
                                    key={caseItem.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className="relative w-full cursor-pointer"
                                    onClick={() => openLightbox(caseItem.id)}
                                >
                                    {/* Composite before/after image */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={caseItem.image}
                                        alt={`${caseItem.procedure} Repair - Case ${caseItem.id}`}
                                        className="w-full h-auto hover:opacity-90 transition-opacity"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredCases.length === 0 && (
                        <div className="text-center py-20 text-[#2A2E37]/40 font-sans text-sm uppercase tracking-wider">
                            No cases available for this filter.
                        </div>
                    )}
                </div>
            </section>

            {/* ─── CTA ─────────────────────────────────────────────────────── */}
            <BookingCTA />
            <CherryFinancing />

            <Footer />

            {/* ─── LIGHTBOX OVERLAY ────────────────────────────────────────────── */}
            {lightboxOpen && currentLightboxCase && (
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
                    {filteredCases.findIndex(c => c.id === lightboxCaseId) > 0 && (
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
                    {filteredCases.findIndex(c => c.id === lightboxCaseId) < filteredCases.length - 1 && (
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
                            src={currentLightboxCase.image}
                            alt={`${currentLightboxCase.procedure} Repair - Case ${currentLightboxCase.id}`}
                            className="w-full h-auto max-h-[90vh] object-contain"
                        />
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                        {filteredCases.findIndex(c => c.id === lightboxCaseId) + 1} / {filteredCases.length}
                    </div>
                </motion.div>
            )}
        </main>
    );
}
