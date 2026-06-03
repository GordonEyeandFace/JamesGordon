'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, ArrowLeft, ArrowRight } from 'lucide-react';
import BookingCTA from '@/components/BookingCTA';
import CherryFinancing from '@/components/CherryFinancing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const sectionFade = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
};

// ─── DATA ────────────────────────────────────────────────────────────────────

type Section = 'videos' | 'appearances' | 'awards' | 'publications';

const SECTIONS: { id: Section; label: string }[] = [
    { id: 'publications', label: 'Publications' },
    { id: 'appearances',  label: 'Appearances' },
    { id: 'awards',       label: 'Awards' },
    { id: 'videos',       label: 'Videos' },
];

const videoItems = [
    { thumb: 'https://img.youtube.com/vi/UErGkb1JKCA/hqdefault.jpg', src: 'https://www.youtube.com/embed/UErGkb1JKCA', url: 'https://youtu.be/UErGkb1JKCA', label: 'Dr. James R. Gordon on CBS' },
    { thumb: 'https://img.youtube.com/vi/Se8pjz4xH4U/hqdefault.jpg', src: 'https://www.youtube.com/embed/Se8pjz4xH4U', url: 'https://youtu.be/Se8pjz4xH4U', label: "Dr. Gordon\u2019s Guide to Blepharoplasty" },
    { thumb: 'https://img.youtube.com/vi/C5QQujXh0mE/hqdefault.jpg', src: 'https://www.youtube.com/embed/C5QQujXh0mE', url: 'https://youtu.be/C5QQujXh0mE', label: "Dr. Gordon\u2019s Guide to Laser Skin Resurfacing" },
    { thumb: 'https://img.youtube.com/vi/DpKYtsM6YOg/hqdefault.jpg', src: 'https://www.youtube.com/embed/DpKYtsM6YOg', url: 'https://youtu.be/DpKYtsM6YOg', label: "Dr. Gordon\u2019s Guide to Injectables \u0026 Fillers" },
];

const BASE = 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/publications';
const publicationItems = [
    // ── ADD FIRST (positions 1-7 per PM — Apr 13) ─────────────────────────────
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/westchester-magazine.jpg`,    label: 'Westchester Magazine',    objectFit: 'object-cover' },    // pos 1
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/greenwich-magazine.jpeg`,     label: 'Greenwich Magazine',       objectFit: 'object-cover' },    // pos 2
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/ny-times-magazine.jpeg`,      label: 'NEW YORK TIMES MAGAZINE',  objectFit: 'object-cover' },    // pos 3
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/newbeauty-magazine.jpeg`,     label: 'NewBeauty',                objectFit: 'object-cover' },    // pos 4
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/good-housekeeping.jpeg`,      label: 'Good Housekeeping',        objectFit: 'object-cover' },    // pos 5
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/new-york-magazine.jpeg`,      label: 'New York Magazine',        objectFit: 'object-cover' },    // pos 6
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/womens-day.jpeg`,             label: "Woman's Day",              objectFit: 'object-cover' },    // pos 7
    // ── KEEP EXISTING — PM-confirmed order ────────────────────────────────────
    { img: `${BASE}/media-ok-magazine-expert-insight-by-dr.-gordon.svg`,                     label: 'OK! Magazine' },
    { img: `${BASE}/media-newbeauty-magazine-interview-with-dr.-gordon.svg`,                    label: 'NewBeauty Magazine' },
    { img: `${BASE}/media-the-beauty-authority-newbeauty-magazine.svg`,             label: 'The Beauty Authority' },
    { img: `${BASE}/media-dr.-gordon-featured-in-redbook.svg`,                                    label: 'Redbook' },
    { img: `${BASE}/media-dr.-gordon-featured-in-westchester-ultimate-guide.svg`,             label: 'Westchester Ultimate Guide' },
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/updated-photos/publication-spring-allergies-westchester-magazine.svg`,      label: 'Spring Allergies' },
    { img: `${BASE}/looking-youthful-without-surgery.svg`,                                             label: 'Looking Youthful Without Surgery' },
    { img: `${BASE}/media-the-face-of-eye-rejuvenation-dr.-gordon.svg`,           label: 'The Face of Eye Rejuvenation' },
    { img: `${BASE}/media-cover-story-on-dr.-james-gordon.svg`,                                 label: 'Cover Story' },
    { img: `${BASE}/media-dr.-gordon-s-publication-on-erbium-laser-resurfacing.svg`,          label: 'Erbium Laser Resurfacing' },
    { img: `${BASE}/media-success-stories-by-dr.-gordon.svg`,                                   label: 'Success Stories' },
    { img: `${BASE}/media-drop-n-lifttm-news-release.svg`,                                label: "Drop N\u2019 Lift News Release" },
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/updated-photos/shine-publication.svg`,                                        label: 'Shine Through Your Eyes' },
    { img: `${BASE}/media-dr.-gordon-quoted-in-what-the-experts-say.svg`,                 label: 'What The Experts Say' },
    { img: `${BASE}/media-dr.-gordon-profiled-as-greenwichs-top-rated-doctors.svg`,      label: "Greenwich's Top Rated" },
    { img: `${BASE}/media-dr.-gordon-featured-as-aesthetics-expert.svg`,                        label: 'Aesthetics Expert' },
    { img: `${BASE}/media-spotlight-on-dr.-gordons-work.svg`,                                  label: 'Spotlight' },
    { img: `${BASE}/media-ask-the-expert-by-dr.-gordon.svg`,                                  label: 'Ask The Expert' },
    { img: `${BASE}/media-beauty-without-surgery-qanda-with-dr.-gordon.svg`,                label: 'Beauty Without Surgery' },
    { img: `${BASE}/media-dr.-gordon-on-stem-cell-injections.svg`,                            label: 'Stem Cell Injections' },
    { img: `${BASE}/media-erasing-blemishes-creating-confidence.svg`,                         label: 'Erasing Blemishes' },
    { img: `${BASE}/media-eye-drops-that-lift-by-dr.-gordon.svg`,                           label: 'Eye Drops That Lift' },
    { img: `${BASE}/media-summer-eye-health-tips-by-dr.-gordon.svg`,                        label: 'Summer Eye Health' },
    { img: `${BASE}/media-dr.-gordon-s-patient-featured-in-age-rewinders.svg`,              label: 'Age Rewinders' },
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/updated-photos/puffy-eyes-publication.svg`,                                   label: 'Puffy Eyes' },
];

const AW = 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/awards';
const awardsItems = [
    // ── NEW AWARD FRAMES (add images here when assets arrive) ──────────────────
    { img: `${AW}/best-cataract-surgeon-frame.png`,         label: 'Best Cataract Surgeon',        scale: 'scale-[1.6]' },
    { img: `${AW}/castle-connolly-top-doctors-2026.png`,    label: 'Castle Connolly Top Doctors 2026',   scale: 'scale-[1.6]' },
    { img: `${AW}/new-york-magazine-frame.png`,             label: 'New York Magazine',             scale: 'scale-[1.6]' },
    { img: `${AW}/super-doctors-frame.png`,                 label: 'Super Doctors',                       scale: 'scale-[1.6]' },
    { img: `${AW}/westchester-frame.png`,                   label: 'Westchester',                   scale: 'scale-[1.6]' },
    { img: `${AW}/americas-top-doctor-frame.png`,           label: "America's Top Doctor",          scale: 'scale-[1.6]' },
    // ──────────────────────────────────────────────────────────────────────────
    { img: `${AW}/castle-connolly-top-doctor-for-10-years.svg`,                        label: 'Castle Connolly 10 Years' },
    { img: `${AW}/castle-connolly-top-doctors-for-5-years.svg`,                        label: 'Castle Connolly 5 Years' },
    { img: `${AW}/castle-connolly-regional-top-doctors-2023.svg`,                        label: 'Castle Connolly Regional 2023' },
    { img: `${AW}/castle-connolly-regional-top-doctor-2022.svg`,                         label: 'Castle Connolly Regional 2022' },
    { img: `${AW}/castle-connolly-regional-top-doctor-2021.svg`,                         label: 'Castle Connolly Regional 2021' },
    { img: `${AW}/castle-connolly-regional-top-doctor-2020.svg`,                         label: 'Castle Connolly Regional 2020' },
    { img: `${AW}/castle-connolly-regional-top-doctor-2019.svg`,                         label: 'Castle Connolly Regional 2019' },
    { img: `${AW}/top-doctors-castle-connolly-2018.svg`,                               label: 'Castle Connolly 2018' },
    { img: `${AW}/top-doctors-castle-connolly-2017.svg`,                               label: 'Castle Connolly 2017' },
    { img: `${AW}/top-doctors-castle-connolly-2016.svg`,                               label: 'Castle Connolly 2016' },
    { img: `${AW}/top-doctors-castle-connolly-2013.svg`,                               label: 'Castle Connolly 2013' },
    { img: `${AW}/top-doctors-castle-connolly-2012.svg`,                            label: 'Castle Connolly 2012' },
    { img: `${AW}/new-york-top-doctors-for-5-years.svg`,                               label: 'NY Top Doctors For 5 Years' },
    { img: `${AW}/new-york-area-s-top-doctors-2022.svg`,                                 label: 'NY Area Top Doctors 2022' },
    { img: `${AW}/new-york-metro-area-s-top-doctors-2021.svg`,                         label: 'NY Metro Top Doctors 2021' },
    { img: `${AW}/new-york-metro-area-s-top-doctors-2020.svg`,                         label: 'NY Metro Top Doctors 2020' },
    { img: `${AW}/new-york-metro-area-s-top-doctors-2019.svg`,                         label: 'NY Metro Top Doctors 2019' },
    { img: `${AW}/top-doctors-new-york-metro-2018.svg`,                              label: 'NY Metro Top Doctors 2018' },
    { img: `${AW}/top-doctors-new-york-metro-2017.svg`,                              label: 'NY Metro Top Doctors 2017' },
    { img: `${AW}/top-doctors-new-york-metro-2016.svg`,                              label: 'NY Metro Top Doctors 2016' },
    { img: `${AW}/top-doctors-new-york-metro-2015.svg`,                              label: 'NY Metro Top Doctors 2015' },
    { img: `${AW}/top-doctors-new-york-metro-2014.svg`,                              label: 'NY Metro Top Doctors 2014' },
    { img: `${AW}/top-doctors-new-york-metro-2013.svg`,                              label: 'NY Metro Top Doctors 2013' },
    { img: `${AW}/new-york-magazine-top-doctors-2022.svg`,                               label: 'NY Magazine Top Doctors 2022' },
    { img: `${AW}/new-york-magazine-top-doctors-2021.svg`,                               label: 'NY Magazine Top Doctors 2021' },
    { img: `${AW}/new-york-magazine-top-doctors-2020.svg`,                               label: 'NY Magazine Top Doctors 2020' },
    { img: `${AW}/newsweek-america-s-best-eye-doctors-2022.svg`,                         label: 'Newsweek Best Eye Doctors' },
    { img: `${AW}/super-doctors-new-york-2023.svg`,                                        label: 'Super Doctors NY 2023' },
    { img: `${AW}/america-s-most-honored-doctors-top-1-2022.svg`,                 label: "America\u2019s Most Honored 2022" },
    { img: `${AW}/america-s-most-honored-doctors-top-1-2021.svg`,                 label: "America\u2019s Most Honored 2021" },
    { img: `${AW}/america-s-most-honored-doctors-2020-top-1.svg`,                 label: "America\u2019s Most Honored 2020" },
    { img: `${AW}/america-s-most-honored-professionals-2019-top-1.svg`,           label: "America\u2019s Most Honored 2019" },
    { img: `${AW}/westchester-magazine-top-doctors-2022-2.svg`,                            label: 'Westchester Top Doctors 2022' },
    { img: `${AW}/westchester-magazine-cosmetic-surgery-top-doctors-2021.svg`,   label: 'Westchester Cosmetic 2021' },
    { img: `${AW}/westchester-magazine-top-doctors-2020.svg`,                              label: 'Westchester Top Doctors 2020' },
    { img: `${AW}/westchester-magazine-top-doctors-2019.svg`,                              label: 'Westchester Top Doctors 2019' },
    { img: `${AW}/super-doctors-new-york-2023.svg`,                                        label: 'Super Doctors NY 2023' },
    { img: `${AW}/newsweek-america-s-best-eye-doctors-2022.svg`,                         label: 'Newsweek Best Eye Doctors' },
    { img: `${AW}/vitals-patients-choice-award-2022.svg`,                                 label: "Vitals Patient\u2019s Choice" },
    { img: `${AW}/patient-s-choice-award-5-year-honoree.svg`,                        label: "Patient\u2019s Choice 5 Years" },
    { img: `${AW}/patient-s-choice-award-2018.svg`,                                          label: "Patient\u2019s Choice 2018" },
    { img: `${AW}/compassionate-doctor-award-5-year-honoree.svg`,                    label: 'Compassionate Doctor 5 Years' },
    { img: `${AW}/vitals-compassionate-doctor-award-2022.svg`,                             label: 'Vitals Compassionate Doctor' },
    { img: `${AW}/top-doctors-westchester-magazine-2018.svg`,                          label: 'Westchester Top Doctors 2018' },
    { img: `${AW}/top-doctors-westchester-magazine-2017.svg`,                          label: 'Westchester Top Doctors 2017' },
    { img: `${AW}/top-doctors-westchester-magazine-2016.svg`,                          label: 'Westchester Top Doctors 2016' },
    { img: `${AW}/top-doctors-westchester-magazine-2015.svg`,                          label: 'Westchester Top Doctors 2015' },
    { img: `${AW}/top-doctors-westchester-magazine-2014.svg`,                          label: 'Westchester Top Doctors 2014' },
    { img: `${AW}/top-doctors-westchester-magazine-2013.svg`,                          label: 'Westchester Top Doctors 2013' },
    { img: `${AW}/top-doctors-westchester-magazine-2012.svg`,                          label: 'Westchester Top Doctors 2012' },
    { img: `${AW}/castle-connolly-new-york-metro-top-doctors.svg`,                     label: 'Castle Connolly NY Metro' },
    { img: `${AW}/castle-connolly-america-s-top-doctors.svg`,                              label: 'Castle Connolly Top Doctors' },
    { img: `${AW}/the-new-york-times-top-cosmetic-doctor.svg`,                         label: 'NY Times Top Cosmetic Doctor' },
    { img: `${AW}/the-new-york-times-best-of-2019.svg`,                            label: 'NY Times Best of 2019' },
    { img: `${AW}/new-york-magazine-top-doctor.svg`,                                   label: 'New York Magazine Top Doctor' },
    { img: `${AW}/realself-top-100-doctors.svg`,                                             label: 'RealSelf Top 100 Doctors' },
    { img: `${AW}/white-plains-hospital-top-doctor.svg`,                                   label: 'White Plains Hospital Top Doctor' },
    { img: `${AW}/white-plains-hospital-top-doctor-ii.svg`,                              label: 'White Plains Hospital Top Doctor II' },
];

const EV = 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/events/3-events';
const appearanceItems = [
    { img: `${EV}/osn-new-york.svg`,          label: 'OSN New York',          objectFit: 'object-cover' },
    { img: `${EV}/agnes-workshop.svg`,           label: 'Agnes Workshop',         objectFit: 'object-cover' },
    { img: `${EV}/new-york-top-doctor.svg`,  label: 'New York Top Doctor',    objectFit: 'object-cover' },
    { img: `${EV}/aerolase.svg`,                   label: 'Aerolase',               objectFit: 'object-cover' },
    { img: `${EV}/asoprs.svg`,                     label: 'ASOPRS',                 objectFit: 'object-cover' },
    { img: `${EV}/media-dr.-gordon-s-appearance-on-cbs.svg`,                           label: "Dr. Gordon\u2019s Appearance on CBS" },
    { img: `${EV}/media-section-chair-at-aerolase-international-summit.svg`,         label: 'Aerolase International Summit' },
    { img: `${EV}/media-sponsor-of-voice-of-flushing-talent-competition.svg`,   label: 'Voice of Flushing' },
    { img: `https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/meet/img-2787.jpeg`, label: "Drop N\u2019 Lift at Times Square", objectFit: 'object-cover' },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

type MediaItem = {
    img: string;
    label: string;
    objectFit?: string;
    scale?: string;
};

function MagazineGrid({ items }: { items: MediaItem[] }) {
    return (
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
            {items.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx % 5) * 0.08 }}
                    className="w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] lg:w-[calc(20%-26px)] flex flex-col group cursor-pointer"
                >
                    <div className="relative aspect-[3/4] overflow-hidden shadow-xl border-[5px] border-white bg-white group-hover:-translate-y-2 transition-transform duration-500">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.img} alt={item.label} className={`w-full h-full ${item.objectFit ?? 'object-contain'} ${item.scale ?? ''}`} />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-[14px] md:text-[20px] font-extrabold text-near-black uppercase tracking-[0.2em] leading-tight">
                            {item.label}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function VideosSection() {
    return (
        <div className="space-y-16">
            {/* Featured video — first item */}
            {videoItems[0].src ? (
                <motion.div
                    initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                    className="max-w-5xl mx-auto aspect-video rounded-sm overflow-hidden shadow-2xl border-[12px] border-white bg-dark"
                >
                    <iframe
                        className="w-full h-full"
                        src={videoItems[0].src}
                        title={videoItems[0].label}
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </motion.div>
            ) : null}

            {/* Remaining video cards (skip first — already shown as featured above) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {videoItems.slice(1).map((v, idx) => (
                    <motion.a
                        key={idx}
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative aspect-video overflow-hidden shadow-md border-2 border-white bg-dark group-hover:scale-[1.02] transition-transform duration-500">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={v.thumb} alt={v.label} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <Play size={20} className="text-white fill-current ml-1" />
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-4 text-[16px] font-black text-near-black uppercase tracking-tight text-center">{v.label}</h4>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function PressPage() {
    const [active, setActive] = useState<Section>('publications');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const activeSection = SECTIONS.find(s => s.id === active)!;

    useEffect(() => {
        const handleClickOutside = (e: Event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <main className="min-h-screen bg-light-cream">
            <Navbar darkText={false} />

            {/* ─── 1. MAGAZINE HERO ──────────────────────────────────────────────── */}
            <section className="relative w-full pt-[50px]">
                {/* Background: Isometric magazine spread */}
                <div
                    className="relative z-[2] w-full overflow-hidden min-h-[320px] sm:min-h-[400px]"
                    style={{ aspectRatio: '16 / 7.5', maxHeight: 'calc(100vh - 120px)' }}
                >
                    <Image
                        src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/introduction/image7.png"
                        alt="Press Editorial Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    {/* Overlays for depth */}
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
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="font-bold text-white tracking-[0.12em] font-sans uppercase drop-shadow-lg mb-2"
                                style={{ fontSize: 'clamp(14px, 2.8vw, 36px)' }}
                            >
                                AS SEEN IN THE PRESS
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="block font-medium tracking-normal normal-case opacity-90 text-secondary"
                                style={{ fontSize: 'clamp(13px, 1.8vw, 26px)' }}
                            >
                                Dr. Gordon&apos;s expertise featured by leading media.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 2. STICKY EDITORIAL TOOLBAR ─────────────────────────────────── */}
            <section className="sticky top-16 z-30 bg-white shadow-lg py-4 border-b border-light-cream">
                <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
                    {/* Back to Home */}
                    <div className="flex-1 hidden md:block">
                        <Link href="/" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-black text-[12px] uppercase tracking-widest px-8 py-3.5 rounded-full transition-all">
                            <ArrowLeft size={16} />
                            BACK TO HOME
                        </Link>
                    </div>

                    {/* Section Dropdown Selector */}
                    <div className="flex-1 flex justify-center">
                        <div ref={dropdownRef} className="relative w-full max-w-[400px]">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-full bg-white border-2 border-secondary/30 rounded-sm px-6 py-3 text-center text-near-black font-black uppercase tracking-[0.2em] text-[14px] cursor-pointer focus:outline-none focus:border-secondary transition-colors flex items-center justify-center gap-3"
                            >
                                {activeSection.label}
                                <ChevronDown size={20} className={`text-secondary transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute top-full left-0 right-0 z-50 bg-white border-2 border-secondary/30 border-t-0 shadow-lg">
                                    {SECTIONS.map(s => (
                                        <button
                                            key={s.id}
                                            onClick={() => { setActive(s.id); setDropdownOpen(false); }}
                                            className={`w-full text-center py-3 px-6 font-black uppercase tracking-[0.2em] text-[14px] transition-colors hover:bg-primary hover:text-white ${active === s.id ? 'text-primary' : 'text-near-black'}`}
                                        >
                                            {s.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Go to Procedures */}
                    <div className="flex-1 hidden md:flex justify-end">
                        <Link href="/treatments" className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-black text-[12px] uppercase tracking-widest px-8 py-3.5 rounded-full transition-all">
                            GO TO PROCEDURE
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── 3. MEDIA CONTENT ────────────────────────────────────────────── */}
            <section className="pt-10 pb-10 md:py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            variants={sectionFade}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                        >
                            {active === 'publications' && <MagazineGrid items={publicationItems} />}
                            {active === 'appearances'  && <MagazineGrid items={appearanceItems} />}
                            {active === 'awards'       && <MagazineGrid items={awardsItems} />}
                            {active === 'videos'       && <VideosSection />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            <BookingCTA />
            <CherryFinancing />
            <Footer />
        </main>
    );
}
