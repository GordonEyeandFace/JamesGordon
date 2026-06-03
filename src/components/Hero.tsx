'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const SUPABASE_BASE = 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero-section';

const desktopIndices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
const desktopImages = desktopIndices.map((i) => ({
    src: `${SUPABASE_BASE}/desktop/${i}.webp`,
    alt: `Dr. Gordon practice ${i}`,
}));

const mobileIndices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];
const mobileImages = mobileIndices.map((i) => ({
    src: `${SUPABASE_BASE}/mobile/${String(i).padStart(3, '0')}.webp`,
    alt: `Dr. Gordon practice ${i}`,
}));

const magazineLogos = [
    { src: `${SUPABASE_BASE}/newsweek-logo.svg`, alt: "Newsweek", heightClass: "h-[32px] sm:h-[50px] md:h-[70px] lg:h-[85px]" },
    { src: `${SUPABASE_BASE}/castle-connoly-logo.svg`, alt: "Castle Connolly", heightClass: "h-[42px] sm:h-[65px] md:h-[95px] lg:h-[120px]" },
    { src: `${SUPABASE_BASE}/super-doctors-logo.svg`, alt: "Super Doctors", heightClass: "h-[36px] sm:h-[55px] md:h-[80px] lg:h-[100px]" },
    { src: `${SUPABASE_BASE}/new-york-logo.svg`, alt: "New York", heightClass: "h-[40px] sm:h-[60px] md:h-[90px] lg:h-[115px]" },
];

const SLIDES = ["values", "doctor", "logo"] as const;
type SlideId = typeof SLIDES[number];

const Hero = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slideId: SlideId = SLIDES[slideIndex];

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % SLIDES.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    const renderSlide = (id: SlideId) => {
        switch (id) {
            case "values":
                return (
                    <motion.div
                        key="values"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } },
                            exit: { opacity: 0, transition: { duration: 0.5 } },
                        }}
                        className="absolute inset-0 flex items-center justify-center px-2 md:px-10 text-center"
                    >
                        <div className="flex flex-nowrap items-center justify-center gap-x-2">
                            {["Trusted.", "Compassionate.", "Recognized."].map((text) => (
                                <React.Fragment key={text}>
                                    <motion.h2
                                        variants={{
                                            hidden: { opacity: 0, y: 15 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                                        }}
                                        className="font-bold text-white tracking-[0.02em] sm:tracking-[0.05em] md:tracking-[0.1em] font-sans uppercase drop-shadow-lg"
                                        style={{ fontSize: 'clamp(12px, 3vw, 42px)' }}
                                    >
                                        {text}
                                    </motion.h2>
                                </React.Fragment>
                            ))}
                        </div>
                    </motion.div>
                );

            case "doctor":
                return (
                    <motion.div
                        key="doctor"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.22 } },
                            exit: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
                        }}
                        className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16 text-center"
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
                                exit: { opacity: 0, y: -12, transition: { duration: 0.38 } },
                            }}
                            className="font-bold text-white tracking-[0.12em] font-sans uppercase drop-shadow-lg text-center"
                            style={{ fontSize: 'clamp(14px, 2.8vw, 36px)' }}
                        >
                            James R. Gordon, MD, FACS
                        </motion.h2>
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 14 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                                exit: { opacity: 0, y: -8, transition: { duration: 0.32 } },
                            }}
                            className="block font-medium tracking-normal normal-case mt-2 opacity-90 text-white text-center"
                            style={{ fontSize: 'clamp(13px, 1.8vw, 26px)' }}
                        >
                            <span className="sm:hidden">Board-Certified, Multi-Award-Winning<br />Oculofacial Plastic &amp; Cataract Surgeon</span>
                            <span className="hidden sm:inline">Board-Certified, Multi-Award-Winning Oculofacial Plastic &amp; Cataract Surgeon</span>
                        </motion.span>
                    </motion.div>
                );

            case "logo":
                return (
                    <motion.div
                        key="logo"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center px-10 md:px-16"
                    >
                        <Image
                            src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero-section/0-gordon-eye-and-face-logo.png"
                            alt="Gordon Eye & Face"
                            width={300}
                            height={80}
                            className="h-8 sm:h-12 md:h-16 w-auto"
                            style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.95)) drop-shadow(0 0 14px rgba(255,255,255,0.6)) drop-shadow(0 0 28px rgba(255,255,255,0.3))' }}
                        />
                    </motion.div>
                );
        }
    };

    return (
        <div className="relative w-full pb-0 -mb-[90px] md:-mb-[160px] border-b-4 border-black">
            {/* Background -- Ken Burns image slideshow for both mobile and desktop */}
            <div
                className="relative z-[2] w-full overflow-hidden min-h-[320px] sm:min-h-[400px] h-auto md:!h-screen"
                style={{ aspectRatio: '4 / 5' }}
            >
                {/* Mobile slideshow -- starts below navbar */}
                <div className="absolute left-0 right-0 bottom-0 md:hidden" style={{ top: 'var(--navbar-height, 96px)' }}>
                    {mobileImages.map((img, index) => (
                        <div
                            key={`mobile-${index}`}
                            className="absolute inset-0 hero-slide"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                                className="object-cover object-center"
                                quality={90}
                            />
                        </div>
                    ))}
                </div>

                {/* Desktop slideshow -- starts below navbar */}
                <div className="absolute left-0 right-0 bottom-0 hidden md:block" style={{ top: 'var(--navbar-height, 120px)' }}>
                    {desktopImages.map((img, index) => (
                        <div
                            key={`desktop-${index}`}
                            className="absolute inset-0 hero-slide"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                                className="object-cover object-center"
                                quality={90}
                            />
                        </div>
                    ))}
                </div>

                {/* Dim overlay */}
                <div className="absolute inset-0 bg-black/15 z-[1]" />

                {/* Top gradient for navbar readability */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-[1]" />

                {/* Magazine logos -- static, bottom of hero */}
                <div className="absolute bottom-14 md:bottom-24 left-0 right-0 py-3 md:py-4 z-[2]">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-16 flex items-center justify-center gap-4 sm:gap-6 md:gap-12 lg:gap-16">
                        {magazineLogos.map((logo) => (
                            <div key={logo.alt}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={360}
                                    height={110}
                                    className={`${logo.heightClass} w-auto object-contain brightness-0 invert opacity-90`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Red Box -- glassmorphism frame, pulled up into hero image area */}
            <div className="relative z-20 -mt-[60px] md:-mt-[77px] px-4 md:px-16 lg:px-24 drop-shadow-2xl">
                <div
                    className="relative isolate z-10 w-full max-w-[1300px] mx-auto rounded-[28px] p-[12px] md:p-[17px] overflow-hidden"
                    style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2), 0 0 40px rgba(255,255,255,0.15)' }}
                >
                    <div
                        className="absolute inset-0 -z-30 rounded-[28px]"
                        style={{
                            backdropFilter: 'blur(4px)',
                            WebkitBackdropFilter: 'blur(4px)',
                        }}
                    />
                    <div
                        className="absolute inset-0 -z-10 rounded-[28px] border border-white/20"
                    />

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-primary/90 rounded-[22px] relative overflow-hidden px-6 md:px-12 transition-transform duration-500"
                        style={{ minHeight: 'clamp(90px, 12vw, 160px)', boxShadow: 'inset 0 0 60px rgba(0,0,0,0.28), inset 0 2px 8px rgba(0,0,0,0.18)' }}
                    >
                        <AnimatePresence mode="wait">
                            {renderSlide(slideId)}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
