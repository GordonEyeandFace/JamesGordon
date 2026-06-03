'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import InfiniteSlider from '@/components/InfiniteSlider';

const reviews = [
    {
        text: "I had a Blepharoplasty with Dr. Gordon and couldn't be happier with the results! It took me five years to finally go through with the procedure, but I'm so glad I chose Dr. Gordon. The post-surgery recovery was smooth, and after just one week, my eyes looked amazing! Dr. Gordon mentioned that the full results would be visible in about three months, but honestly, I already look fantastic if I say so myself! I highly recommend Dr. Gordon to anyone considering this procedure: professional, skilled, and truly delivers outstanding results!",
        author: "Magdalena Sanchez",
        source: "RealSelf",
        highlight: ["I had a Blepharoplasty with Dr. Gordon and couldn't be happier with the results!", "I highly recommend Dr. Gordon to anyone considering this procedure"]
    },
    {
        text: "I just turned 40 a few months ago, felt I hit the big \u201cmilestone\u201d of going downhill with dull skin and losing my youthful look and confidence, so I treated myself to a birthday gift that would make me look and feel younger, turned to RealSelf for options, saw Dr. Gordon\u2019s free consultation, met him and was glad because he was knowledgeable, professional, relatable, understood my problems, so I booked Erbium Laser Skin Resurfacing with a couple of Botox shots, the whole process was easy and painless, and now 2 weeks later I\u2019m healed, refreshed, and highly recommend him to anyone wanting a rejuvenated look.",
        author: "Lisa Ricks",
        source: "RealSelf",
        highlight: "he was knowledgeable, professional, relatable, understood my problems"
    },
    {
        text: "Dr. Gordon is the best, honestly. I see him for cosmetic touch ups and recently felt that at age 47, I have hollow, dark circles under my eyes that aren\u2019t so flattering. After a consult, he did a minor and super conservative tweak with a very modest amount of filler, and I look like I\u2019m more rested. The results are instant and totally natural. He\u2019s so specialized and he also has the aesthetic artistry part that many doctors simply don\u2019t have. I also like that he\u2019s very honest and forthcoming - he will advise you against things that won\u2019t look natural or get the results you\u2019re hoping for. He\u2019s awesome!",
        author: "Heather Reasonover",
        source: "Google Reviews",
        highlight: "Dr. Gordon is the best, honestly."
    },
    {
        text: "Dr. Gordon performed cataract surgery on my eye yesterday and I couldn\u2019t be happier. Honestly, my eyesight improved beyond anything I expected or hoped for\u2026it\u2019s literally like night and day. His surgical decisions during the procedure demonstrated his skill and experience. If you are looking for a Dr. with great ability and proficiency, Dr.James Gordon is the one to put at the top of you list.",
        author: "Barbara Tessler",
        source: "Google Reviews",
        highlight: "Dr.James Gordon is the one to put at the top of you list."
    },
    {
        text: "Been seeing Dr Gordon for 6 years now. Good bye dark circles and eye hollowness. So thrilled with my results always. Looked good when I left the office. Did not hurt at all. Dr. Gordon is amazing. I was so sick of people telling me I looked tired. I also wish I had not wasted so much money on creams that did nothing. No cream will replace volume. Fillers just give you a refreshed look. He\u2019s the best. I would never let anyone else touch me.",
        author: "Victoria Pepin",
        source: "Google Reviews",
        highlight: "He\u2019s the best. I would never let anyone else touch me."
    },
    {
        text: "Dr. Gordon is the very epitome of what healthcare should be all about - compassion, professionalism and expertise. I feel very fortunate to have found a physician who made me absolutely certain I was in great hands throughout my visit. Dr. Gordon was extremely personable and empathetic, really taking the time to get to know me and my concerns. That alone was incredibly refreshing in this age of blink-and-you\u2019ll-miss-it doctor visits. He went above and beyond in checking on my eye health (I was there for a cosmetic issue), and addressed all my questions with great detail and competence. I highly recommend Dr. Gordon for all your ophtamological and occuloplastic needs.",
        author: "Aleksey Gring",
        source: "Google Reviews",
        highlight: "compassion, professionalism and expertise"
    }
];

const renderWithHighlight = (text: string, highlight: string | string[]) => {
    const phrases = Array.isArray(highlight) ? highlight : [highlight];

    // Split text into segments: { content, bold }
    type Segment = { content: string; bold: boolean };
    let segments: Segment[] = [{ content: text, bold: false }];

    for (const phrase of phrases) {
        segments = segments.flatMap((seg) => {
            if (seg.bold) return [seg];
            const idx = seg.content.indexOf(phrase);
            if (idx === -1) return [seg];
            return [
                { content: seg.content.slice(0, idx), bold: false },
                { content: phrase, bold: true },
                { content: seg.content.slice(idx + phrase.length), bold: false },
            ];
        });
    }

    return (
        <>&quot;{segments.map((seg, i) =>
            seg.bold
                ? <span key={i} className="font-bold text-primary">{seg.content}</span>
                : seg.content
        )}&quot;</>
    );
};

interface TestimonialsProps {
    showReviewsGrid?: boolean;
}

const Testimonials = ({ showReviewsGrid = true }: TestimonialsProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, []);

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }, []);

    // Auto-play — pauses on hover, resets timer on manual navigation
    useEffect(() => {
        if (isHovered) return;
        intervalRef.current = setInterval(next, 8000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered, next, currentIndex]);

    return (
        <section
            id="reviews"
            className="pt-10 pb-10 md:py-16 bg-review-bg relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-[70px] font-extrabold uppercase mb-4 text-dark tracking-tight leading-none">TRUSTED BY PATIENTS.</h2>
                    <p className="text-primary font-extrabold text-sm md:text-[20px] tracking-[0.2em] uppercase mb-10 md:mb-8">Over 2,000 Five-Star Reviews across the most trusted sources.</p>
                </motion.div>
            </div>

            {/* Review Source Logo Carousel */}
            <div className="w-full mb-10 md:mb-12 py-0">
                <InfiniteSlider speed={80} hoverSpeed={15} gap={16} fadeMask={true}>
                    {[
                        { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-healthgrades.svg', alt: 'Healthgrades' },
                        { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-navmds.svg', alt: 'NavMDs' },
                        { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-ratedmds.svg', alt: 'RatedMDs' },
                        { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-realself.svg', alt: 'RealSelf' },
                        { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-us-news.svg', alt: 'US News' },
                        { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-vitals-01.svg', alt: 'Vitals' },
                        { src: 'https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/carousel/media-webmd.svg', alt: 'WebMD' },
                    ].map((logo) => (
                        <div key={logo.alt} className="flex items-center justify-center px-2">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={140}
                                height={50}
                                className="h-14 w-auto object-contain opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </InfiniteSlider>
            </div>

            <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center mb-10 md:mb-6">
                        <Image
                            src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/trusted/12-quotation-mark.png"
                            alt="Quote"
                            width={96}
                            height={72}
                            className="h-20 w-auto"
                        />
                    </div>
                </motion.div>

                <div className="flex flex-col justify-center items-center px-4 md:px-12 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="flex flex-col items-center"
                        >
                            <p className="text-lg md:text-[20px] text-dark leading-relaxed font-normal mb-10 md:mb-8 italic font-sans max-w-4xl">
                                {renderWithHighlight(reviews[currentIndex].text, reviews[currentIndex].highlight as string | string[])}
                            </p>

                            <div className="flex justify-center gap-1 mb-10 md:mb-4 text-secondary">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={24} fill="currentColor" />
                                ))}
                            </div>

                            <p className="font-medium text-dark text-lg md:text-[20px] mb-10 md:mb-4">
                                {reviews[currentIndex].author} - <span className="text-gray-600 font-normal">{reviews[currentIndex].source}</span>
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-0">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? 'bg-primary w-6'
                                : 'bg-gray-300 hover:bg-gray-400 w-2'
                                }`}
                            aria-label={`Go to review ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows — absolute on lg+, inline below on mobile/tablet */}
                <div className="flex justify-center gap-8 mt-10 lg:hidden">
                    <button
                        onClick={prev}
                        className="text-gray-400 hover:text-primary transition-colors p-3 hover:bg-white/50 rounded-full border border-gray-200"
                        aria-label="Previous Review"
                    >
                        <ChevronLeft size={28} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={next}
                        className="text-gray-400 hover:text-primary transition-colors p-3 hover:bg-white/50 rounded-full border border-gray-200"
                        aria-label="Next Review"
                    >
                        <ChevronRight size={28} strokeWidth={1.5} />
                    </button>
                </div>
                <button
                    onClick={prev}
                    className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors p-4 hover:bg-white/50 rounded-full"
                    aria-label="Previous Review"
                >
                    <ChevronLeft size={48} strokeWidth={1.5} />
                </button>
                <button
                    onClick={next}
                    className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors p-4 hover:bg-white/50 rounded-full"
                    aria-label="Next Review"
                >
                    <ChevronRight size={48} strokeWidth={1.5} />
                </button>

            </div>
        </section>
    );
};

export default Testimonials;
