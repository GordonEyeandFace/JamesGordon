import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">

        {/* Address */}
        <div className="mb-8">
          <p className="text-black text-lg font-normal">1 Byram Brook Pl, Armonk, NY 10504</p>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center mb-8 opacity-90">
          <img
            src="/assets/13 - Footer/Gordon Eye & Face Logo.svg"
            alt="Gordon Eye & Face Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Contact */}
        <div className="mb-8 space-y-2">
          <a href="mailto:info@gordoneye.com" className="text-black block hover:text-primary text-lg">info@gordoneye.com</a>
          <p className="text-black text-lg">FAX: 914-219-5824</p>
          <p className="text-black text-lg">914-597-1088</p>
          {/* Phone Number: Playfair Display Semibold Italic, Text Color: #882225 */}
          <p className="text-primary font-serif italic font-semibold text-2xl">914-820-0000</p>
        </div>

        {/* Socials */}
        <div className="flex gap-6 mb-12">
          <a href="#" className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/assets/13 - Footer/49. FB Logo.png" alt="Facebook" className="w-full h-full object-contain" />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/assets/13 - Footer/50. IG Logo.png" alt="Instagram" className="w-full h-full object-contain" />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/assets/13 - Footer/51. LinkedIn Logo.png" alt="LinkedIn" className="w-full h-full object-contain" />
          </a>
        </div>

        {/* Legal */}
        <div className="text-xs text-gray-500 space-y-2 font-medium">
          <p>© 2026 Gordon Eye&Face | All Rights Reserved | Privacy Policy | Privacy Notice</p>
          <p>Accessibility | Terms & Conditions | Sitemap</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;