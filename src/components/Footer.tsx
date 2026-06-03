'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-dark text-white relative">
            {/* Top accent line */}
            <div className="h-[3px] bg-gradient-to-r from-transparent via-[#8B1D2D] to-transparent" />

            {/* Main Footer Body */}
            <div className="max-w-[1500px] mx-auto px-8 md:px-16 pt-10 pb-10">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 mb-10 md:mb-14">

                    {/* Brand Column — wider */}
                    <div className="flex flex-col gap-10 md:max-w-[300px] shrink-0">
                        <Image
                            src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero-section/0-gordon-eye-and-face-logo.png"
                            alt="Gordon Eye & Face"
                            width={300}
                            height={80}
                            className="h-[52px] md:h-12 w-auto max-w-[234px] md:max-w-none object-contain"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            With over 25 years of experience, Dr. James Gordon is a nationally recognized expert in cataract, eyelid, and facial rejuvenation, known for delivering refined, natural results to patients throughout Westchester County and the tri-state area.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 items-center mt-2">
                            <a href="https://www.facebook.com/dr.jamesrgordon" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity" aria-label="Facebook">
                                <Image src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/footer/49-fb-logo.png" alt="Facebook" width={22} height={22} className="h-5 w-auto brightness-0 invert" />
                            </a>
                            <a href="https://www.instagram.com/dr.jamesrgordon/" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity" aria-label="Instagram">
                                <Image src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/footer/50-ig-logo.png" alt="Instagram" width={22} height={22} className="h-5 w-auto brightness-0 invert" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#CEB776] font-extrabold font-sans text-[20px] uppercase tracking-[0.25em] mb-6">Explore</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Meet Dr. Gordon', href: '/about' },
                                { name: 'Treatments', href: '/treatments' },
                                { name: 'Gallery', href: '/gallery' },
                                { name: 'As Seen in the Press', href: '/press' },
                                { name: 'Patient Reviews', href: '/reviews' },
                                { name: 'Contact Us', href: '/contact' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Treatments */}
                    <div>
                        <h4 className="text-[#CEB776] font-extrabold font-sans text-[20px] uppercase tracking-[0.25em] mb-6">Treatments</h4>
                        <ul className="space-y-3">
                            {[
                                'Medical Eye Care',
                                'Eyelid Surgery',
                                'Non-Surgical Rejuvenation',
                                'Neuromodulators & Dermal Fillers',
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/treatments"
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="shrink-0">
                        <h4 className="text-[#CEB776] font-extrabold font-sans text-[20px] uppercase tracking-[0.25em] mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <p className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Address</p>
                                <span>1 Byram Brook Pl, Armonk, NY 10504</span>
                            </li>
                            <li>
                                <p className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Phone</p>
                                <a href="tel:914-820-0000" className="hover:text-[#CEB776] transition-colors font-medium text-white">
                                    914-820-0000
                                </a>
                            </li>
                            <li>
                                <p className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Fax</p>
                                <span>914-219-5824</span>
                            </li>
                            <li>
                                <p className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Email</p>
                                <a href="mailto:info@gordoneye.com" className="hover:text-[#CEB776] transition-colors">
                                    info@gordoneye.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; 2026 Gordon Eye &amp; Face | All Rights Reserved</p>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                        <span className="text-white/20">|</span>
                        <Link href="/privacy-notice" className="hover:text-gray-300 transition-colors">Privacy Notice</Link>
                        <span className="text-white/20">|</span>
                        <Link href="/accessibility" className="hover:text-gray-300 transition-colors">Accessibility</Link>
                        <span className="text-white/20">|</span>
                        <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms &amp; Conditions</Link>
                        <span className="text-white/20">|</span>
                        <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
