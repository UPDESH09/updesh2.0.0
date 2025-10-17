import React from 'react';
import { FlowerLotusIcon, InstagramIcon, YouTubeIcon, PhoneIcon, WhatsAppIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300">
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <FlowerLotusIcon className="h-7 w-7 text-teal-500" />
          <span className="ml-2 text-xl font-bold text-white font-serif">UPDESH</span>
        </div>
        <p className="mb-4">
          Nurturing the soul, one day at a time.
        </p>
        <div className="flex justify-center items-center space-x-6 my-6">
            <a 
                href="https://www.instagram.com/pareshdasupdesh?igsh=MTNmcWd10GJhM3htMw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-stone-400 hover:text-white transition-colors duration-300"
            >
                <InstagramIcon className="h-6 w-6" />
            </a>
            <a 
                href="https://youtube.com/@pareshdasupdesh?si=PZIqh2gMnOgked_J"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on YouTube"
                className="text-stone-400 hover:text-white transition-colors duration-300"
            >
                <YouTubeIcon className="h-6 w-6" />
            </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 text-stone-400">
            <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5" />
                <a href="tel:9999059445" className="hover:text-white transition-colors duration-300">
                    9999059445
                </a>
            </div>
            <div className="flex items-center space-x-2">
                <WhatsAppIcon className="h-5 w-5" />
                <a href="https://wa.me/919999059445" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                    WhatsApp
                </a>
            </div>
        </div>
        <p className="text-sm text-stone-400">
          &copy; {new Date().getFullYear()} UPDESH. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;