'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
    darkText?: boolean;
}

const Navbar = ({ darkText = false }: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = React.useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const updateNavHeight = () => {
            if (navRef.current) {
                document.documentElement.style.setProperty('--navbar-height', `${navRef.current.offsetHeight}px`);
            }
        };
        updateNavHeight();
        window.addEventListener('resize', updateNavHeight);
        return () => window.removeEventListener('resize', updateNavHeight);
    }, [isScrolled]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Meet Dr. James R. Gordon', href: '/about' },
        { name: 'Signature Treatments', href: '/treatments' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'As Seen in the Press', href: '/press' },
        { name: 'Patient Reviews', href: '/reviews' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <>
            <motion.nav
                ref={navRef}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white shadow-md py-2'
                        : 'bg-white py-4'
                    }`}
            >
                {/* SITE 2.0: Soft light-beam texture for Navbar background */}
                <div
                    className={`absolute inset-0 -z-10 transition-opacity duration-1000 hidden md:block ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                        background: 'radial-gradient(circle at 20% -20%, rgba(255,255,255,0.15) 0%, transparent 50%)',
                        pointerEvents: 'none'
                    }}
                />
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative z-50">
                        <Image
                            src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/hero-section/0-gordon-eye-and-face-logo.png"
                            alt="Gordon Eye & Face"
                            width={300}
                            height={80}
                            className="h-10 md:h-16 w-auto"
                            priority
                        />
                    </Link>

                    {/* Right side: Phone + CTA + Menu */}
                    <div className="flex items-center gap-3 md:gap-8">
                        {/* Phone number — no icon, white text */}
                        <a
                            href="tel:914-820-0000"
                            className={`hidden sm:block font-medium text-base tracking-tight transition-colors ${isMenuOpen ? 'text-dark' : (isScrolled || darkText) ? 'text-dark' : 'text-primary'
                                }`}
                        >
                            914-820-0000
                        </a>

                        {/* Book Consultation CTA — unified glossy red, glow on hover */}
                        <motion.div
                            className="glossy-cta hidden md:flex"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <a href="https://calendly.com/drjamesgordon/consult" target="_blank" rel="noopener noreferrer" className="relative block cursor-pointer">
                                <div className="glossy-cta-inner rounded-full py-2 md:py-3.5 px-5 md:px-8">
                                    <span className="relative z-10 text-white font-extrabold tracking-wider uppercase select-none whitespace-nowrap"
                                        style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(255,255,255,0.3)' }}
                                    >
                                        <span className="hidden sm:inline">BOOK YOUR CONSULTATION</span>
                                        <span className="sm:hidden">BOOK NOW</span>
                                    </span>
                                </div>
                            </a>
                        </motion.div>

                        {/* Call icon — mobile only */}
                        <a
                            href="tel:914-820-0000"
                            className={`md:hidden flex items-center transition-colors ${(isScrolled || darkText) ? 'text-dark' : 'text-primary'}`}
                            aria-label="Call us"
                        >
                            <Phone size={22} />
                        </a>

                        {/* Menu Button — with MENU text */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`relative z-50 flex items-center gap-2 transition-colors ${isMenuOpen ? 'text-dark' : (isScrolled || darkText) ? 'text-dark' : 'text-primary'
                                }`}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X size={26} />
                            ) : (
                                <>
                                    <Menu size={28} />
                                    <span className="hidden md:inline text-base font-semibold uppercase tracking-wider">Menu</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-white pt-32 px-6 flex flex-col items-center gap-8"
                    >
                        <div className="flex flex-col items-center gap-6 w-full max-w-md">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-base font-sans font-semibold text-dark hover:text-primary transition-colors uppercase tracking-wider"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="h-px w-20 bg-gray-200 my-4" />

                            <a href="tel:914-820-0000" className="flex items-center gap-2 text-base font-medium text-primary">
                                <Phone size={24} />
                                914-820-0000
                            </a>

                            <a
                                href="https://calendly.com/drjamesgordon/consult"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full max-w-xs bg-accent text-white py-4 text-center font-bold tracking-widest uppercase mt-4 rounded-full hover:bg-[#6b1b1d] transition-colors"
                            >
                                Book Your Consultation
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
