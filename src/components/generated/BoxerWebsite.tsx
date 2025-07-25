import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import MediaGallerySection from './MediaGallerySection';
import SponsorSection from './SponsorSection';
import ShopSection from './ShopSection';
import AIChatAssistant from '../ai/AIChatAssistant';
import { ErrorBoundary } from '../ErrorBoundary';
import { GlobalAudioProvider } from '@/hooks/use-global-audio';

const BoxerWebsite: React.FC = () => {
  return (
    <ErrorBoundary>
      <GlobalAudioProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <MediaGallerySection />
            <SponsorSection />
            <ShopSection />
          </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm text-gray-400">
                  © 2024 Kumar Prescod. All rights reserved.
                </p>
              </div>
              <nav className="flex space-x-6">
                <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </a>
                <a href="#media" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Media
                </a>
                <a href="#sponsors" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Sponsors
                </a>
                <a href="#shop" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Shop
                </a>
              </nav>
            </div>
          </div>
        </footer>
        
        {/* AI Chat Assistant */}
        <AIChatAssistant />
        </div>
      </GlobalAudioProvider>
    </ErrorBoundary>
  );
};

export default BoxerWebsite;