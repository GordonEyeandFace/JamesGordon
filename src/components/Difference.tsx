'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Difference = () => {
    return (
        <section className="py-0 bg-white text-center relative overflow-hidden">
            <div className="container mx-auto px-4 relative flex justify-center items-center">

                {/* Laurel Left */}
                <motion.div
                    initial={{ opacity: 0, x: -20, rotate: -10 }}
                    whileInView={{ opacity: 0.8, x: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block relative w-32 h-64"
                >
                    <Image
                        src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/difference/10-laurel-1.png"
                        alt="Laurel"
                        fill
                        className="object-contain"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-8 z-10 relative w-[85vw] max-w-[340px] md:max-w-[480px] aspect-[340/160] md:aspect-[480/220]"
                >
                    <Image
                        src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/difference/9-the-dr-gordon-difference.png"
                        alt="The Dr. Gordon Difference"
                        fill
                        className="object-contain"
                    />
                </motion.div>

                {/* Laurel Right */}
                <motion.div
                    initial={{ opacity: 0, x: 20, rotate: 10 }}
                    whileInView={{ opacity: 0.8, x: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block relative w-32 h-64"
                >
                    <Image
                        src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/difference/11-laurel-2.png"
                        alt="Laurel"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Difference;
