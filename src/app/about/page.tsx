'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingCTA from '@/components/BookingCTA';
import InfiniteSlider from '@/components/InfiniteSlider';
import CherryFinancing from '@/components/CherryFinancing';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

const awardBadges = [
    { name: 'HEALTHGRADES', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/23-healthgrades.png' },
    { name: 'NEW YORK STATE OPHTHALMOLOGICAL', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/24-nys-ophthalmological.png' },
    { name: 'WHITE PLAINS HOSPITAL', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/25-wph.png' },
    { name: 'CASTLE CONNOLLY', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/14-castle-connoly.png' },
    { name: 'AMERICAN BOARD OF OPHTHALMOLOGY', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/15-aboo.png' },
    { name: 'U.S. NEWS & WORLD REPORT', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/16-us-news.png' },
    { name: 'NEW BEAUTY', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/17-beauty-seal.png' },
    { name: 'AMERICAN COLLEGE OF SURGEONS', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/18-acs.png' },
    { name: "VITALS PATIENT'S CHOICE", image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/19-patient-s-choice.png' },
    { name: 'VITALS TOP 10 DOCTOR', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/20-vitals.png' },
    { name: 'AMERICAN SOCIETY FOR LASER MEDICINE & SURGERY', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/21-aslms.png' },
    { name: 'REALSELF', image: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hallmark/22-top-doctor-badge.png' },
];

const legacyFrames = [
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/4-new-york-magazine-frame.webp',    alt: 'New York Magazine' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/5-best-cataract-surgeon-frame.webp', alt: 'Best Cataract Surgeon' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/6-new-york-top-doctors-frame.webp',  alt: 'New York Top Doctors' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/7-super-doctors-frame.webp',         alt: 'Super Doctors' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/8-westchester-frame.webp',           alt: 'Westchester' },
    { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/legacy/9-america-s-top-doctor-frame.webp',  alt: "America's Top Doctor" },
];



export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* ─── 1. HERO ─────────────────────────────────────────────────────────── */}
            <div className="relative w-full pt-[50px]">
                {/* Static background image */}
                <div
                    className="relative z-[2] w-full overflow-hidden min-h-[320px] sm:min-h-[400px]"
                    style={{ aspectRatio: '16 / 7.5', maxHeight: 'calc(100vh - 120px)' }}
                >
                    <Image
                        src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/introduction/image1.svg"
                        alt="Dr. James R. Gordon"
                        fill
                        priority
                        className="object-cover object-[center_35%]"
                    />
                    <div className="absolute inset-0 bg-black/15 z-[1]" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-[1]" />

                    {/* Magazine logos — floating animation */}
                    <div className="absolute bottom-14 md:bottom-24 left-0 right-0 py-3 md:py-4 z-[2]">
                        <div className="max-w-[1440px] mx-auto px-4 md:px-16 flex items-center justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-16">
                            {[
                                { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero-section/newsweek-logo.svg', alt: 'Newsweek', heightClass: 'h-[32px] sm:h-[50px] md:h-[70px] lg:h-[85px]' },
                                { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero-section/castle-connoly-logo.svg', alt: 'Castle Connolly', heightClass: 'h-[42px] sm:h-[65px] md:h-[95px] lg:h-[120px]' },
                                { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero-section/super-doctors-logo.svg', alt: 'Super Doctors', heightClass: 'h-[36px] sm:h-[55px] md:h-[80px] lg:h-[100px]' },
                                { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero-section/new-york-logo.svg', alt: 'New York', heightClass: 'h-[40px] sm:h-[60px] md:h-[90px] lg:h-[115px]' },
                            ].map((logo) => (
                                <div key={logo.alt}>
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={360}
                                        height={110}
                                        className={`${logo.heightClass} w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
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
                            style={{ minHeight: 'clamp(90px, 12vw, 160px)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 0px 60px inset' }}
                        >
                            <h2
                                className="font-bold text-white tracking-[0.12em] font-sans uppercase drop-shadow-lg"
                                style={{ fontSize: 'clamp(14px, 2.8vw, 36px)' }}
                            >
                                James R. Gordon, MD, FACS
                            </h2>
                            <span
                                className="block font-medium tracking-normal normal-case mt-2 opacity-90 text-secondary"
                                style={{ fontSize: 'clamp(13px, 1.8vw, 26px)' }}
                            >
                                Board-Certified, Multi-Award-Winning Oculofacial Plastic &amp; Cataract Surgeon
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── 2. INTRODUCTION ─────────────────────────────────────────────────── */}
            <section className="bg-warm-beige pt-10 pb-10 md:pt-16 md:pb-6 text-center">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                        className="max-w-[1150px]"
                    >
                        {/* Bio Paragraph 1 */}
                        <motion.p
                            variants={fadeUp}
                            className="font-sans text-[16px] text-near-black leading-relaxed mb-10 text-justify"
                        >
                            Internationally recognized oculofacial plastic surgeon Dr. James R. Gordon is known for delivering natural, refined results in eyelid and facial rejuvenation. Patients, physicians, and high-profile individuals seek his expertise for complex cases and advanced techniques that combine surgical precision with artistic judgment.
                        </motion.p>

                        {/* Main Headline */}
                        <motion.h2
                            variants={fadeUp}
                            className="font-sans font-black text-4xl md:text-[70px] text-near-black leading-none mb-4 uppercase tracking-tighter"
                        >
                            MEET DR. GORDON.
                        </motion.h2>

                        {/* Subheadline Tagline */}
                        <motion.p
                            variants={fadeUp}
                            className="font-sans font-extrabold text-[16px] md:text-[20px] text-primary uppercase tracking-[0.2em] mb-10 md:mb-16"
                        >
                            THE EXPERIENCE AND VISION BEHIND GORDON EYE AND FACE.
                        </motion.p>

                        {/* Bio Paragraph 2 */}
                        <motion.p
                            variants={fadeUp}
                            className="font-sans text-[16px] text-near-black leading-relaxed mb-10 text-justify"
                        >
                            Award-winning oculofacial plastic and cataract surgeon, and board-certified ophthalmologist Dr. James R. Gordon brings more than twenty-five years of specialized experience in eyelid and facial rejuvenation. Over the course of his career, he has performed tens of thousands of successful procedures, ranging from common eyelid enhancements to complex reconstructive surgeries.
                        </motion.p>

                        {/* Bio Paragraph 3 */}
                        <motion.p
                            variants={fadeUp}
                            className="font-sans text-[16px] text-near-black leading-relaxed text-justify"
                        >
                            Dr. Gordon is particularly recognized for his expertise in challenging and complex cases and is widely known as the &ldquo;physician&apos;s physician,&rdquo; having operated on many doctors and their family members. His patients also include numerous well-known celebrities and high-profile business executives.
                        </motion.p>
                    </motion.div>
                </div>

            </section>

            {/* ─── 3. LEGACY OF EXCELLENCE ─────────────────────────────────────────── */}
            <section className="bg-warm-beige pt-10 pb-0 overflow-hidden relative">
                {/* Marble background */}
                <div className="absolute inset-0 z-0">
                    <Image src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/page/marble-bg.png" alt="" fill className="object-cover object-center opacity-30" />
                </div>
                <div className="max-w-[1600px] relative z-10 mx-auto px-6 text-center pt-5 md:pt-7">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-4xl md:text-[70px] font-black font-sans uppercase text-near-black tracking-tight leading-none mb-4"
                        >
                            AWARDS &amp; HONORS.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-primary font-extrabold font-sans text-[16px] md:text-[20px] tracking-[0.2em] uppercase mb-0 leading-tight"
                        >
                            RECOGNITION FOR SURGICAL EXCELLENCE AND PATIENT CARE.
                        </motion.p>
                    </motion.div>
                </div>

                <InfiniteSlider speed={140} hoverSpeed={30} gap={32} className="w-full leading-none block mt-0 mb-0">
                    {legacyFrames.map((frame) => (
                        <div
                            key={frame.alt}
                            className="flex-shrink-0 w-[232px] pt-10 pb-10 rounded-md transform hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src={frame.src}
                                alt={frame.alt}
                                width={232}
                                height={285}
                                className="w-full h-auto drop-shadow-md"
                            />
                        </div>
                    ))}
                </InfiniteSlider>

                {/* Legacy body copy */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    className="max-w-[1000px] mx-auto px-6 text-center pt-0 pb-0 relative z-10"
                >
                    <motion.p variants={fadeUp} className="font-sans text-[16px] text-near-black leading-relaxed text-justify mb-[40px]">
                        Dr. Gordon is honored to be recognized by physicians and patients as being among the Top 1% of Most Honored Doctors in the nation. Recognized as one of the top cosmetic doctors in The New York Times, he has been consistently named to Castle Connolly&apos;s Top Doctors, Westchester Magazine&apos;s Top Docs, and Super Doctors.
                    </motion.p>
                    <motion.p variants={fadeUp} className="font-sans text-[16px] text-near-black leading-relaxed text-justify mb-[40px]">
                        He has earned many prestigious awards and distinctions, including Newsweek Best Doctors, America&apos;s Best Cataract Surgeon, Vitals&apos; Most Compassionate Doctor Award, Patients&apos; Choice Award, Top 10 Doctor Award, NewBeauty Magazine&apos;s Top Beauty Doctor, RealSelf Top Doctor, and Expert Injector for cosmetic facial fillers and injectables.
                    </motion.p>
                    <motion.p variants={fadeUp} className="font-sans text-[16px] text-near-black leading-relaxed text-justify mb-[40px]">
                        Dr. Gordon is also among the 3% of physicians qualified as an ExpertInjector by the American Society for Aesthetic Plastic Surgery (ASAPS) and the American Society for Dermatologic Surgery (ASDS). He frequently appears in major media outlets, including CBS, OK! Magazine, Good Housekeeping, NewBeauty, Woman&apos;s Day, and Redbook.
                    </motion.p>
                </motion.div>
            </section>

            {/* ─── 4. QUOTE BLOCK ──────────────────────────────────────────────────── */}
            <section className="bg-dark py-10 md:py-16 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                    <div className="flex flex-col md:flex-row items-center gap-0 md:gap-20">
                        {/* Quote — LEFT */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
                        >
                            <motion.div variants={fadeUp} className="flex justify-center mb-6 md:mb-8 select-none" aria-hidden="true">
                                <Image
                                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/trusted/12-quotation-mark.png"
                                    alt=""
                                    width={96}
                                    height={72}
                                    className="h-12 md:h-20 w-auto"
                                />
                            </motion.div>
                            <motion.p
                                variants={fadeUp}
                                className="font-sans font-bold text-xl md:text-[36px] text-white leading-snug md:-mt-2"
                            >
                                When I joined my father in practice, he gave me advice that guides me to this day: Treat every patient as if they were your mother. This philosophy has truly served me well as I strive to connect with every patient.
                            </motion.p>
                            <motion.p
                                variants={fadeUp}
                                className="font-sans font-bold text-xl md:text-[36px] text-white leading-snug mt-6"
                            >
                                — James R. Gordon, MD, FACS
                            </motion.p>
                        </motion.div>

                        {/* Portrait — RIGHT */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="w-full md:w-[380px] flex-shrink-0"
                        >
                            <Image
                                src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/meet/Dr.%20James%20x%20Dr.%20Bruce%20Gordon_Mobile%20Version.webp"
                                alt="Dr. James R. Gordon in consultation"
                                width={1920}
                                height={1920}
                                className="md:hidden w-full h-auto rounded-[24px] my-10"
                            />
                            <div className="relative hidden md:block w-full h-[560px] rounded-[24px] overflow-hidden">
                                <Image
                                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/meet/Dr.%20James%20x%20Dr.%20Bruce%20Gordon.webp"
                                    alt="Dr. James R. Gordon in consultation"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ─── 5. PRACTICE PHILOSOPHY ──────────────────────────────────────────── */}
            <section className="bg-warm-beige py-10 md:py-16">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                        className="max-w-[1000px] mx-auto"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-sans font-black text-4xl md:text-[70px] text-near-black leading-none mb-4"
                        >
                            PRACTICE PHILOSOPHY.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans font-extrabold text-[18px] md:text-[20px] text-primary uppercase tracking-[0.2em] mb-10"
                        >
                            NATURAL RESULTS THROUGH PRECISION AND PATIENT-FOCUSED CARE.
                        </motion.p>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans text-[16px] text-near-black leading-relaxed mb-10 text-justify"
                        >
                            He dedicates his time to listening to each patient&apos;s unique story and partners with them to develop individualized treatment plans. When appropriate, Dr. Gordon explains why some patients may not be ideal candidates for surgery and recommends alternative solutions without upselling unnecessary procedures.
                        </motion.p>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans text-[16px] text-near-black leading-relaxed text-justify"
                        >
                            Dr. Gordon performs a procedure only when he truly believes he can achieve the desired results. His goal is to enhance and refine a patient&apos;s natural beauty without altering their unique features. With his impeccable surgical skill, keen artistic eye, and warm bedside manner, Dr. Gordon continues to be recognized as a Top Doctor by peers and patients from around the world.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ─── 6. SPECIALTIES & EXPERTISE ──────────────────────────────────────── */}
            <section className="bg-white py-10 md:py-16">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col items-center text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                        className="w-full mb-10 md:mb-12"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-sans font-black text-4xl md:text-[70px] text-near-black leading-none mb-4"
                        >
                            SPECIALTIES &amp; EXPERTISE.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans font-extrabold text-[18px] md:text-[20px] text-primary uppercase tracking-[0.2em]"
                        >
                            ADVANCED EYELID, FACIAL REJUVENATION, AND OCULOFACIAL SURGERY.
                        </motion.p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16 w-full max-w-[1200px] mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="relative w-full lg:w-1/2 flex-shrink-0 h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/meet/about-specialty-expertise.png"
                                alt="Dr. Gordon in surgery"
                                fill
                                className="object-cover object-center"
                                unoptimized={true}
                            />
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                            className="w-full lg:w-1/2 flex flex-col text-center"
                        >
                            <motion.p variants={fadeUp} className="font-sans text-[16px] text-near-black leading-relaxed px-4 md:px-8 lg:px-0 mb-[40px]">
                                Dr. Gordon specializes exclusively in procedures for the eyes and face. Physicians throughout the region frequently refer their most complex and challenging cases to Dr. Gordon because of his exceptional ability and extensive experience in addressing both medical and cosmetic concerns.
                            </motion.p>
                            <motion.p variants={fadeUp} className="font-sans text-[16px] text-near-black leading-relaxed px-4 md:px-8 lg:px-0 mb-[40px]">
                                Often described as the &ldquo;un-plastic&rdquo; plastic surgeon, Dr. Gordon personally performs all procedures—both surgical and non-surgical—including his proprietary 5D Eyebag Removal, 5D Eye &amp; Face Rejuvenation, lasers, thread lifting, microneedling, Botox, fillers, and facelifts to ensure the most natural and beautiful results.
                            </motion.p>
                            <motion.p variants={fadeUp} className="font-sans text-[16px] text-near-black leading-relaxed px-4 md:px-8 lg:px-0">
                                He is dedicated to helping each patient achieve their individual aesthetic goals using the latest technologies and remains closely involved throughout the entire recovery process. Dr. Gordon is frequently recognized in the press for his conservative approach and minimally invasive techniques that achieve a youthful yet natural appearance.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── 7. EDUCATION & TRAINING ─────────────────────────────────────────── */}
            <section className="bg-warm-beige py-10 md:py-16">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                        className="max-w-[900px] mx-auto"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-sans font-black text-4xl md:text-[70px] text-near-black leading-none mb-4"
                        >
                            EDUCATION &amp; TRAINING.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans font-extrabold text-[18px] md:text-[20px] text-primary uppercase tracking-[0.2em] mb-10"
                        >
                            RIGOROUS MEDICAL EDUCATION AND SPECIALIZED SURGICAL TRAINING.
                        </motion.p>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans text-[16px] text-near-black leading-relaxed text-justify"
                        >
                            Dr. Gordon received his Bachelor of Arts degree from Emory University and his Doctor of Medicine from the Sackler School of Medicine at Tel Aviv University, an internationally acclaimed medical program. During his residency at St. Vincent&apos;s Hospital in New York City, Dr. Gordon was appointed Chief Resident and founded the Cosmetic Clinic at Cabrini Hospital. He later completed a fellowship in Oculoplastic Surgery, further advancing his surgical expertise and passion for eyelid and facial aesthetics. Since then, Dr. Gordon has published research papers and delivered numerous lectures on ocular disease, eyelid surgery, and facial cosmetic procedures.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ─── 8. PROFESSIONAL CERTIFICATIONS ──────────────────────────────────── */}
            <section className="bg-white py-10 md:py-16">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-sans font-black text-4xl md:text-[70px] text-near-black leading-none mb-4"
                        >
                            PROFESSIONAL CERTIFICATIONS.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans font-extrabold text-[18px] md:text-[20px] text-primary uppercase tracking-[0.2em] mb-10"
                        >
                            BOARD CERTIFICATIONS AND PROFESSIONAL CREDENTIALS.
                        </motion.p>
                    </motion.div>

                </div>

                <div className="mt-8 overflow-hidden w-full">
                    <InfiniteSlider speed={140} hoverSpeed={8} gap={64} fadeMask={false}>
                        {awardBadges.map((cert) => (
                            <div
                                key={cert.name}
                                className="flex flex-col items-center justify-center flex-shrink-0 w-[140px] transition-all duration-300 group"
                            >
                                <div className="relative h-16 md:h-20 w-full mb-3 flex items-center justify-center">
                                    <Image
                                        src={cert.image}
                                        alt={cert.name}
                                        width={120}
                                        height={80}
                                        className="object-contain h-full w-auto"
                                    />
                                </div>
                                <span className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wider group-hover:text-primary transition-colors text-center leading-tight whitespace-normal">
                                    {cert.name}
                                </span>
                            </div>
                        ))}
                    </InfiniteSlider>
                </div>

                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center mt-8 md:mt-10">
                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="font-sans text-[16px] text-near-black leading-relaxed max-w-[900px] mx-auto"
                    >
                        Dr. Gordon is board-certified by the American Board of Ophthalmology and is fellowship-trained in Oculoplastic Surgery. In addition to holding medical licenses in New York and Connecticut, Dr. Gordon is a Fellow of the American College of Cosmetic Surgery, the American Academy of Cosmetic Surgery (AACS), and the American Society for Laser Medicine and Surgery (ASLMS). He is also a member of the American Academy of Ophthalmology (AAO) and the New York State Ophthalmological Society.
                    </motion.p>
                </div>
            </section>

            {/* ─── 9. PIONEER & INNOVATOR ──────────────────────────────────────────── */}
            <section className="bg-dark py-10 md:py-16 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                        className="mb-10 md:mb-12"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-sans font-black text-4xl md:text-[70px] text-white leading-none mb-4"
                        >
                            PIONEER &amp; INNOVATOR.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans font-extrabold text-[18px] md:text-[20px] text-secondary uppercase tracking-[0.2em]"
                        >
                            ADVANCING TECHNIQUES IN OCULOFACIAL SURGERY.
                        </motion.p>
                    </motion.div>

                    <div className="flex flex-col gap-12 md:gap-16">
                        {/* 1st Featured Item — LightPod Era */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="max-w-[900px] mx-auto w-full flex flex-col items-center"
                        >
                            <div className="relative w-full aspect-video md:aspect-[16/10] mb-8 overflow-hidden">
                                <img
                                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/meet/aerolase.svg"
                                    alt="Aerolase"
                                    className="absolute inset-0 w-full h-full object-contain object-center"
                                />
                            </div>
                            <p className="font-sans font-medium text-[16px] text-white leading-relaxed mb-0 px-4 md:px-10">
                                Dr. Gordon pioneered the research and development of the LightPod Era and was the first doctor in the U.S. to utilize the world&apos;s only portable erbium laser for skin resurfacing. Today, he trains many physicians throughout the country in its use. Dr. Gordon also serves on the Aerolase Medical Advisory Board to share key insights and industry trends. Most recently, Dr. Gordon held the position of Section Chair at the 1st International Laser Summit held in Cornell Club in New York City.
                            </p>
                        </motion.div>

                        {/* 2nd Featured Item — Drop N' Lift */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="max-w-[900px] mx-auto w-full flex flex-col items-center"
                        >
                            <div className="relative w-full aspect-video md:aspect-[16/10] mb-8 overflow-hidden">
                                <Image
                                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/meet/img-2787.jpeg"
                                    alt="Times Square Billboard"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <p className="font-sans font-medium text-[16px] text-white leading-relaxed mb-0 px-4 md:px-10">
                                Live in Times Square New York, Dr. Gordon unveils Drop N&apos; Lift™ — a method to instantly lift droopy eyelids with use of an eye drop. The results are amazing and his patients are thrilled by their makeover &ldquo;in the blink of an eye&rdquo;.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── 10. HOSPITAL PRIVILEGES ─────────────────────────────────────────── */}
            <section className="bg-warm-beige py-10 md:py-16">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                        className="mb-10 md:mb-10"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="font-sans font-black text-4xl md:text-[70px] text-near-black leading-none mb-4"
                        >
                            DR. GORDON PRIVILEGES.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="font-sans font-extrabold text-[18px] md:text-[20px] text-primary uppercase tracking-[0.2em]"
                        >
                            AFFILIATED WITH LEADING HOSPITALS AND SURGICAL CENTERS.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* White Plains Hospital */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm"
                        >
                            <div className="relative h-[260px]">
                                <Image
                                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/privilages/white-plains-hospital.svg"
                                    alt="White Plains Hospital"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="px-8 pb-8 pt-6">
                                <p className="font-sans font-bold text-[20px] text-near-black uppercase tracking-wide mb-4">
                                    White Plains Hospital
                                </p>
                                <Link
                                    href="/about/white-plains-hospital"
                                    className="inline-block bg-primary text-white font-bold uppercase tracking-wider text-sm py-4 px-10 rounded-full hover:bg-near-black transition-colors"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>

                        {/* Surgical Specialty Center */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm"
                        >
                            <div className="relative h-[260px]">
                                <Image
                                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/privilages/surgical-specialty-center-of-westchester-2.svg"
                                    alt="Surgical Specialty Center of Westchester"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="px-8 pb-8 pt-6">
                                <p className="font-sans font-bold text-[20px] text-near-black uppercase tracking-wide mb-4">
                                    Surgical Specialty Center of Westchester
                                </p>
                                <Link
                                    href="/about/surgical-specialty-center"
                                    className="inline-block bg-primary text-white font-bold uppercase tracking-wider text-sm py-4 px-10 rounded-full hover:bg-near-black transition-colors"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <BookingCTA />
            <CherryFinancing />
            <Footer />
        </main>
    );
}
