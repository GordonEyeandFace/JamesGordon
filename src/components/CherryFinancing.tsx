'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CherryFinancing() {
  return (
    <div className="relative z-10 my-10 max-w-[1100px] mx-auto px-0">
      <motion.a
        href="https://pay.withcherry.com/gordon-eye--face"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.995 }}
        className="group block relative overflow-hidden border-0 bg-white shadow-none"
        aria-label="Apply for Cherry Financing"
      >
        <Image
          src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/Dr.%20James_Cataract%20Surgery%20Landing%20Page-09.png"
          alt="Cherry Financing"
          width={1200}
          height={480}
          className="block w-full h-auto object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-[3px]"
          sizes="(max-width: 768px) 100vw, 1100px"
        />
        <div className="pointer-events-none absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl">
            Open
          </span>
        </div>
      </motion.a>
    </div>
  );
}
