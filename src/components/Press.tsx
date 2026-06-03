'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const pressItems = [
    { name: "Westchester Magazine", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/28-westchester-magazine.jpg" },
    { name: "New York Times", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/29-new-york-times-magazine.jpeg" },
    { name: "Good Housekeeping", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/30-good-housekeeping.jpeg" },
    { name: "NewBeauty", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/31-newbeauty-magazine.jpeg" },
    { name: "OK Magazine", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/32-ok-magazine.jpeg" },
    { name: "Greenwich Magazine", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/33-greenwich-magazine.jpeg" },
    { name: "New York Magazine", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/2-new-york-magazine.jpeg" },
    { name: "Women's Day", image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/10-womens-day.jpeg" },
];

const Press = () => {
    return (
        <section id="press" className="pt-10 pb-10 md:py-16 relative overflow-hidden bg-white">
            {/* Background 1: Marble Background 3 */}
            <div className="absolute top-0 left-0 w-full h-1/2 z-0">
                <Image
                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/26-marble-background-3.png"
                    alt="Marble BG"
                    fill
                    className="object-cover opacity-40"
                />
            </div>
            {/* Background 2: In The Press Background 2 */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 z-0">
                <Image
                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/27-in-the-press-background-part-2.png"
                    alt="Press BG"
                    fill
                    className="object-cover opacity-10"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-10"
                >
                    <h2 className="text-[32px] md:text-[48px] lg:text-[70px] font-black uppercase text-dark tracking-tight leading-none mb-4">
                        AS SEEN IN THE PRESS.
                    </h2>
                    <p className="text-primary font-extrabold text-sm md:text-[20px] tracking-[0.2em] uppercase">
                        DR. GORDON&apos;S EXPERTISE FEATURED BY LEADING MEDIA.
                    </p>
                </motion.div>

                {/* CBS Video — YouTube embed */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-10 md:mb-12 aspect-video rounded-sm overflow-hidden shadow-2xl border-[4px] md:border-[10px] border-white bg-dark"
                >
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/UErGkb1JKCA?si=dKaPpcdXqHWYk8gJ"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </motion.div>

                <div className="flex justify-center mb-10 md:mb-12">
                    <Link
                        href="/press"
                        className="bg-primary hover:bg-secondary text-white font-bold py-4 px-12 rounded-full uppercase tracking-[0.15em] transition-all duration-300 shadow-lg text-xs"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Press Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto items-start lg:items-end mb-10 md:mb-8">
                    {pressItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center justify-center group"
                        >
                            <div className="relative w-full aspect-[4/5] overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-500 group-hover:-translate-y-2">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-near-black opacity-0 group-hover:opacity-10 transition-opacity" />
                            </div>
                            <span className="mt-6 text-[14px] font-black text-dark uppercase tracking-wider text-center transition-colors group-hover:text-primary">
                                {item.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Drop N' Lift Feature Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl mx-auto flex flex-col items-center gap-0 text-center pt-0 pb-0"
                >
                    {/* Logo */}
                    <div className="relative w-full max-w-[315px] md:max-w-[470px] aspect-[4/1]">
                        <Image
                            src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/gallery/DropNLift_logo.webp"
                            alt="Drop N' Lift"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Times Square Photo */}
                    <div className="w-full max-w-[800px] relative aspect-[16/9] mt-5 md:mt-10 overflow-hidden shadow-2xl border-[12px] border-white group transform transition-transform duration-700 hover:scale-[1.02]">
                        <Image
                            src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/press/magazines/drop-and-life-timesquare.svg"
                            alt="Dr. Gordon unveils Drop N' Lift in Times Square"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Caption */}
                    <div className="w-full max-w-[800px] space-y-3.5 md:space-y-3.5 px-2 sm:px-0">
                        <p className="text-secondary font-black text-[20px] uppercase tracking-[0.2em] text-center mt-5">Live in Times Square</p>
                        <p className="text-dark text-[15px] sm:text-[16px] leading-relaxed font-sans font-medium italic text-center">
                            &quot;Dr. Gordon unveils Drop N&apos; Lift™ — a method to instantly lift droopy eyelids with use of an eye drop. The results are amazing and his patients are thrilled by their makeover in the blink of an eye.&quot;
                        </p>
                        <div className="w-full h-1 bg-primary mx-auto rounded-full mb-0" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Press;
