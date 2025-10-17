import React from 'react';
import { TelegramIcon, HeartIcon, InstagramIcon, YouTubeIcon, WhatsAppIcon } from './IconComponents';

const Connect: React.FC = () => {
  return (
    <section id="connect" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 font-serif">💫 Connect & Support</h2>
          <p className="text-lg text-stone-600 mt-4 max-w-2xl mx-auto">
            Join our Telegram for class recordings and consider supporting our mission.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg border border-stone-200/50 p-8 text-center flex flex-col items-center">
            <TelegramIcon className="h-12 w-12 text-teal-600 mb-4" />
            <h3 className="text-2xl font-bold text-stone-800 font-serif mb-2">Class Recordings</h3>
            <p className="text-stone-600 mb-6">
              Missed a class? Catch up with all our recordings on Telegram.
            </p>
            <a 
              href="https://t.me/updeshclasses"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md"
            >
              Join on Telegram
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-stone-200/50 p-8 text-center flex flex-col items-center">
            <HeartIcon className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-2xl font-bold text-stone-800 font-serif mb-2">Support / Donation</h3>
            <p className="text-stone-600 mb-6">
              Your generous support helps us maintain our online platforms, organize events, and continue to share these timeless teachings.
            </p>
            <div className="mb-6">
                <p className="text-sm font-medium text-stone-500 mb-3">Suggested contributions:</p>
                <div className="flex justify-center gap-3">
                    <span className="bg-teal-50 text-teal-800 px-4 py-2 rounded-full font-semibold">₹101</span>
                    <span className="bg-teal-50 text-teal-800 px-4 py-2 rounded-full font-semibold">₹51</span>
                    <span className="bg-teal-50 text-teal-800 px-4 py-2 rounded-full font-semibold">₹21</span>
                </div>
            </div>
            <div className="w-48 h-48 bg-stone-200 rounded-lg flex items-center justify-center flex-col p-4">
              <span className="text-stone-500">[ QR Code Here ]</span>
              <p className="text-xs text-stone-400 mt-2">Scan to donate securely</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
            <h3 className="text-xl font-semibold text-stone-700 mb-4">Follow us on Social Media</h3>
            <div className="flex justify-center items-center space-x-8">
              <a 
                href="https://www.instagram.com/pareshdasupdesh?igsh=MTNmcWd10GJhM3htMw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="inline-block text-stone-500 hover:text-pink-600 transition-colors duration-300 transform hover:scale-110"
              >
                  <InstagramIcon className="h-10 w-10" />
              </a>
              <a 
                href="https://youtube.com/@pareshdasupdesh?si=PZIqh2gMnOgked_J"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on YouTube"
                className="inline-block text-stone-500 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
              >
                  <YouTubeIcon className="h-10 w-10" />
              </a>
              <a 
                href="https://wa.me/919999059445"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-block text-stone-500 hover:text-green-600 transition-colors duration-300 transform hover:scale-110"
              >
                  <WhatsAppIcon className="h-10 w-10" />
              </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Connect;