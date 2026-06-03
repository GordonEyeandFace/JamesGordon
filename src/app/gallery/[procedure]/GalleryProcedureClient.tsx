'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { type ProcedureConfig, procedureConfig } from './config';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const procedureOptions = Object.entries(procedureConfig)
    .map(([slug, cfg]) => ({ slug, title: cfg.title.replace(/\.$/, '') }))
    .sort((a, b) => a.title.localeCompare(b.title));

export default function GalleryProcedureClient({ config, slug }: { config: ProcedureConfig; slug: string }) {
    const router = useRouter();
    const procedureLabels = Array.from(new Set(config.cases.map(c => c.procedure)));
    const procedureCounts = config.cases.reduce<Record<string, number>>((acc, c) => {
        acc[c.procedure] = (acc[c.procedure] ?? 0) + 1;
        return acc;
    }, {});

    const [activeProcedure, setActiveProcedure] = useState<string | null>(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImageUrl, setLightboxImageUrl] = useState<string>('');
    const [lightboxCaseIndex, setLightboxCaseIndex] = useState<number | null>(null);

    const filtered = config.cases.filter(c => {
        const procOk = !activeProcedure || c.procedure === activeProcedure;
        return procOk;
    });

    // Lightbox handlers
    const openLightbox = (caseIndex: number, imageUrl: string) => {
        setLightboxCaseIndex(caseIndex);
        setLightboxImageUrl(imageUrl);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setLightboxCaseIndex(null);
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
        if (lightboxCaseIndex === null) return;
        if (lightboxCaseIndex > 0) {
            const prevCase = filtered[lightboxCaseIndex - 1];
            setLightboxCaseIndex(lightboxCaseIndex - 1);
            setLightboxImageUrl(prevCase.image || prevCase.beforeImage || '');
        }
    };

    const goToNextImage = () => {
        if (lightboxCaseIndex === null) return;
        if (lightboxCaseIndex < filtered.length - 1) {
            const nextCase = filtered[lightboxCaseIndex + 1];
            setLightboxCaseIndex(lightboxCaseIndex + 1);
            setLightboxImageUrl(nextCase.image || nextCase.beforeImage || '');
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
    }, [lightboxOpen, lightboxCaseIndex, filtered]);

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
                        src={config.heroImage}
                        alt={`${config.title} Before and After Gallery`}
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
                                    {config.title}
                                </motion.h1>
                                <motion.p
                                    variants={fadeUp}
                                    className="block font-medium tracking-normal normal-case opacity-90 text-secondary"
                                    style={{ fontSize: 'clamp(13px, 1.8vw, 26px)' }}
                                >
                                    {config.subtitle}
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
                        &#8592; BACK TO GALLERIES
                    </Link>

                    {/* Procedure Selector */}
                    <label className="relative flex items-center gap-2 border border-[#2A2E37] rounded-full px-6 py-3 min-w-[220px] justify-between cursor-pointer hover:border-[#8B1D2D] transition-colors">
                        <span className="font-sans font-extrabold text-[11px] uppercase tracking-[0.18em] text-[#070707] truncate">
                            {config.title}
                        </span>
                        <svg className="shrink-0" width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden>
                            <path d="M1 1L6 6L11 1" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <select
                            aria-label="Jump to another procedure gallery"
                            value={slug}
                            onChange={e => {
                                const next = e.target.value;
                                if (next && next !== slug) router.push(`/gallery/${next}`);
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
                        href={config.treatmentHref}
                        className="bg-[#8B1D2D] text-white font-sans font-extrabold text-[11px] uppercase tracking-[0.2em] px-8 py-3 rounded-full hover:bg-[#2A2E37] transition-colors whitespace-nowrap"
                    >
                        GO TO PROCEDURE &#8594;
                    </Link>

                </div>
            </div>

            {/* ─── FILTER BAR ─────────────────────────────────────────────────────── */}
            {procedureLabels.length > 1 && (
                <div className="bg-white border-b border-[#2A2E37]/10 py-6">
                    <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                            {procedureLabels.map(proc => {
                                const isActive = activeProcedure === proc;
                                return (
                                    <button
                                        key={proc}
                                        onClick={() => setActiveProcedure(prev => (prev === proc ? null : proc))}
                                        className={`inline-flex items-center justify-center gap-2 min-h-[46px] px-6 md:px-7 py-3 rounded-full border font-sans font-extrabold text-[10px] md:text-[11px] uppercase tracking-[0.18em] transition-all duration-200 shadow-sm ${
                                            isActive
                                                ? 'bg-[#8B1D2D] text-white border-[#8B1D2D] shadow-md'
                                                : 'bg-[#F7F5F2] text-[#2A2E37] border-[#ECE6DD] hover:bg-white hover:border-[#2A2E37] hover:shadow-md'
                                        }`}
                                    >
                                        <span>{proc}</span>
                                        <span className={`text-[10px] md:text-[11px] ${isActive ? 'text-white/80' : 'text-[#2A2E37]/60'}`}>
                                            ({procedureCounts[proc] ?? 0})
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* ─── PHOTO GRID ─────────────────────────────────────────────────────── */}
            <section className="pt-16 pb-16 bg-[#F7F5F2]">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProcedure ?? 'all'}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        >
                            {filtered.map((c, idx) => (
                                <motion.div
                                    key={`${c.procedure}-${c.id}-${idx}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                                    onClick={() => openLightbox(idx, c.image || c.beforeImage || '')}
                                >
                                    <div className="relative w-full overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={c.image || c.beforeImage || ''}
                                            alt={`${config.title} - Case ${c.id}`}
                                            className="w-full h-auto object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-[#2A2E37]/40 font-sans text-sm uppercase tracking-wider">
                            No cases available for this category yet.
                        </div>
                    )}
                </div>
            </section>

            {/* ─── FOOTER CTA ───────────────────────────────────────────────────────── */}
            <section className="relative w-full cursor-pointer">
                <Image
                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/page/image78.png"
                    alt="Book Your Personalized Consultation with Dr. James Gordon"
                    width={1440}
                    height={540}
                    className="w-full h-auto"
                />
                <a href="https://calendly.com/drjamesgordon/consult" target="_blank" rel="noopener noreferrer" className="absolute inset-0" aria-label="Book a consultation" />
            </section>

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
                    {lightboxCaseIndex !== null && lightboxCaseIndex > 0 && (
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
                    {lightboxCaseIndex !== null && lightboxCaseIndex < filtered.length - 1 && (
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
                            alt={`${config.title} - Case ${lightboxCaseIndex !== null ? lightboxCaseIndex + 1 : ''}`}
                            className="w-full h-auto max-h-[90vh] object-contain"
                        />
                    </div>

                    {/* Image Counter */}
                    {lightboxCaseIndex !== null && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
                            {lightboxCaseIndex + 1} / {filtered.length}
                        </div>
                    )}
                </motion.div>
            )}
        </main>
    );
}
