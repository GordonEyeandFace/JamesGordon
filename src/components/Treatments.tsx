'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const treatments = [
    {
        title: "Medical Eye Care",
        slug: "medical-eye-care",
        description: "Protect your vision with Dr. Gordon\u2019s expert eye care \u2014 where precision meets compassion. Personalized visits ensure early treatment for lasting clarity and comfort.",
        image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/12-medical-eye-care.svg",
        procedures: [
            "Cataract Surgery",
            "Blepharoplasty",
            "Ptosis Repair",
            "Ectropion & Entropion Repair",
            "Dry Eye Management",
            "Stye Removal",
            "Treatment of Blepharospasm",
            "Tumor Removal & Reconstruction",
            "Routine Eye Exams",
            "Orbital Fracture Evaluation",
            "Thyroid Eye Disease Management",
        ],
    },
    {
        title: "Eyelid Surgery",
        slug: "eyelid-surgery",
        description: "Refined techniques that restore youthful appearance while preserving natural expression.",
        image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/13-eyelid-surgery.png",
        procedures: [
            "Upper & Lower Eyelid Blepharoplasty",
            "Revision Blepharoplasty",
            "Aesthetic Ptosis Repair",
            "Brow Lift",
            "Festoon Treatment",
            "Double Eyelid Surgery",
            "Canthoplasty & Canthopexy",
            "Eyelid Fat Transfer or Removal",
        ],
    },
    {
        title: "Non-Surgical Rejuvenation",
        slug: "non-surgical",
        description: "Reawaken your eyes and skin with advanced radiofrequency, laser, PDO Threads and injectable technologies \u2014 minimally invasive treatments that lift, tighten, and revitalize with little to no downtime.",
        image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/treatments/14-non-surgical-rejuvenation.png",
        procedures: [
            "5D Eye Bag Removal",
            "5D Face Lift",
            "Mini & Mid Face Lift",
            "Laser Skin Resurfacing",
            "PDO Thread Lift",
            "RF Microneedling",
            "Jowl & Double Chin Reduction",
            "PRP Therapy",
            "Drop N\u2019 Lift & Upneeq",
        ],
    },
    {
        title: "Neuromodulators & Dermal Fillers",
        slug: "injectables",
        description: "Dr. Gordon\u2019s expert touch delivers smooth, natural results that enhance harmony and balance while safely preserving individuality. Each injectable is delivered with precision, offering a subtle lift that still feels authentically you.",
        image: "https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/treatments/Injectables-2-NEW.webp",
        procedures: [
            "Tear Trough Filler",
            "BOTOX for Wrinkles & Brow Lift",
            "Dysport for Dynamic Wrinkles",
            "Dermal Fillers",
            "Filler Revision & Correction",
            "Hyaluronidase for Filler Dissolution",
        ],
    }
];

interface TreatmentsProps {
    showCTAs?: boolean;
}

const Treatments = ({ showCTAs = false }: TreatmentsProps) => {
    return (
        <section id="treatments" className="pt-10 pb-10 md:py-16 relative overflow-hidden bg-light-cream">


            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-10 md:mb-10">
                    <h2 className="text-2xl md:text-5xl lg:text-[70px] font-black font-sans uppercase text-near-black tracking-tight leading-none mb-4">
                        <span className="block">DR. GORDON&apos;S</span>
                        <span className="block">SIGNATURE TREATMENTS.</span>
                    </h2>
                    <p className="text-primary font-extrabold font-sans text-sm md:text-[20px] tracking-[0.2em] uppercase">Expert Care for Every Patient.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-[1240px] mx-auto">

                    {/* Left Column */}
                    <div className="flex flex-col justify-between gap-y-12 md:gap-y-8 h-full">
                        {/* Medical Eye Care - Tall (4/5) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center w-full group"
                        >
                            <Link href={`/treatments/${treatments[0].slug}`} className="w-full">
                                <div className="relative w-full aspect-[4/5] overflow-hidden shadow-xl bg-white">
                                    <Image
                                        src={treatments[0].image}
                                        alt={treatments[0].title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        style={{ objectPosition: '65% center' }}
                                    />
                                    {/* Hover Overlay — hidden on mobile, hover on desktop */}
                                    <div className="absolute inset-0 bg-primary/95 opacity-0 hidden md:flex group-hover:opacity-100 transition-all duration-500 flex-col items-center justify-center p-6 text-white text-center z-10">
                                        <h4 className="text-secondary font-black text-[20px] uppercase tracking-widest mb-4">Procedures</h4>
                                        <ul className="flex flex-col gap-y-2 text-[16px] font-medium w-fit mx-auto">
                                            {treatments[0].procedures.map((proc, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                                                    {proc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full bg-white shadow-2xl pt-3 px-6 pb-6 md:p-8 text-center flex flex-col items-center">
                                    <h3 className="text-primary font-bold text-[20px] uppercase mb-4 tracking-wider leading-tight text-center mt-[40px] md:mt-0">
                                        {treatments[0].title}
                                    </h3>
                                    <p className="text-dark/80 leading-relaxed text-[16px] font-semibold mb-8 text-center">
                                        {treatments[0].description}
                                    </p>
                                    <span className="inline-block md:hidden text-primary font-bold text-xs uppercase tracking-[0.15em] mb-2">View Procedures &rarr;</span>
                                    {showCTAs && (
                                        <span
                                            className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300"
                                        >
                                            Explore Procedures
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </motion.div>

                        {/* Non-Surgical Rejuvenation - Short (4/3) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center w-full group"
                        >
                            <Link href={`/treatments/${treatments[2].slug}`} className="w-full">
                                <div className="relative w-full aspect-[4/3] overflow-hidden shadow-xl bg-white">
                                    <Image
                                        src={treatments[2].image}
                                        alt={treatments[2].title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Hover Overlay — hidden on mobile, hover on desktop */}
                                    <div className="absolute inset-0 bg-primary/95 opacity-0 hidden md:flex group-hover:opacity-100 transition-all duration-500 flex-col items-center justify-center p-6 text-white text-center z-10">
                                        <h4 className="text-secondary font-black text-[20px] uppercase tracking-widest mb-4">Procedures</h4>
                                        <ul className="flex flex-col gap-y-2 text-[16px] font-medium w-fit mx-auto">
                                            {treatments[2].procedures.map((proc, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                                                    {proc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full bg-white shadow-2xl pt-3 px-6 pb-6 md:p-8 text-center flex flex-col items-center">
                                    <h3 className="text-primary font-bold text-[20px] uppercase mb-4 tracking-wider leading-tight text-center mt-[40px] md:mt-0">
                                        {treatments[2].title}
                                    </h3>
                                    <p className="text-dark/80 leading-relaxed text-[16px] font-semibold mb-8 text-center">
                                        {treatments[2].description}
                                    </p>
                                    <span className="inline-block md:hidden text-primary font-bold text-xs uppercase tracking-[0.15em] mb-2">View Procedures &rarr;</span>
                                    {showCTAs && (
                                        <span
                                            className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300"
                                        >
                                            Explore Procedures
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-between gap-y-12 md:gap-y-8 h-full">
                        {/* Eyelid Surgery - Short (4/3) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center w-full group"
                        >
                            <Link href={`/treatments/${treatments[1].slug}`} className="w-full">
                                <div className="relative w-full aspect-[4/3] overflow-hidden shadow-xl bg-white">
                                    <Image
                                        src={treatments[1].image}
                                        alt={treatments[1].title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Hover Overlay — hidden on mobile, hover on desktop */}
                                    <div className="absolute inset-0 bg-primary/95 opacity-0 hidden md:flex group-hover:opacity-100 transition-all duration-500 flex-col items-center justify-center p-6 text-white text-center z-10">
                                        <h4 className="text-secondary font-black text-[20px] uppercase tracking-widest mb-4">Procedures</h4>
                                        <ul className="flex flex-col gap-y-2 text-[16px] font-medium w-fit mx-auto">
                                            {treatments[1].procedures.map((proc, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                                                    {proc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full bg-white shadow-2xl pt-3 px-6 pb-6 md:p-8 text-center flex flex-col items-center">
                                    <h3 className="text-primary font-bold text-[20px] uppercase mb-4 tracking-wider leading-tight text-center mt-[40px] md:mt-0">
                                        {treatments[1].title}
                                    </h3>
                                    <p className="text-dark/80 leading-relaxed text-[16px] font-semibold mb-8 text-center">
                                        {treatments[1].description}
                                    </p>
                                    <span className="inline-block md:hidden text-primary font-bold text-xs uppercase tracking-[0.15em] mb-2">View Procedures &rarr;</span>
                                    {showCTAs && (
                                        <span
                                            className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300"
                                        >
                                            Explore Procedures
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </motion.div>

                        {/* Injectables - Tall (4/5) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center w-full group"
                        >
                            <Link href={`/treatments/${treatments[3].slug}`} className="w-full">
                                <div className="relative w-full aspect-[4/5] overflow-hidden shadow-xl bg-white">
                                    <Image
                                        src={treatments[3].image}
                                        alt={treatments[3].title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Hover Overlay — hidden on mobile, hover on desktop */}
                                    <div className="absolute inset-0 bg-primary/95 opacity-0 hidden md:flex group-hover:opacity-100 transition-all duration-500 flex-col items-center justify-center p-6 text-white text-center z-10">
                                        <h4 className="text-secondary font-black text-[20px] uppercase tracking-widest mb-4">Procedures</h4>
                                        <ul className="flex flex-col gap-y-2 text-[16px] font-medium w-fit mx-auto">
                                            {treatments[3].procedures.map((proc, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                                                    {proc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full bg-white shadow-2xl pt-3 px-6 pb-6 md:p-8 text-center flex flex-col items-center">
                                    <h3 className="text-primary font-bold text-[20px] uppercase mb-4 tracking-wider leading-tight text-center mt-[40px] md:mt-0">
                                        {treatments[3].title}
                                    </h3>
                                    <p className="text-dark/80 leading-relaxed text-[16px] font-semibold mb-8 text-center">
                                        {treatments[3].description}
                                    </p>
                                    <span className="inline-block md:hidden text-primary font-bold text-xs uppercase tracking-[0.15em] mb-2">View Procedures &rarr;</span>
                                    {showCTAs && (
                                        <span
                                            className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-[0.15em] transition-all duration-300"
                                        >
                                            Explore Procedures
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Treatments;
