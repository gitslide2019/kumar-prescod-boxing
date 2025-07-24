import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import MediaGallerySection from './MediaGallerySection';
const BoxerWebsite: React.FC = () => {
  return <div className="min-h-screen bg-background" data-magicpath-id="0" data-magicpath-path="BoxerWebsite.tsx">
      <Header data-magicpath-id="1" data-magicpath-path="BoxerWebsite.tsx" />
      <main data-magicpath-id="2" data-magicpath-path="BoxerWebsite.tsx">
        <HeroSection data-magicpath-id="3" data-magicpath-path="BoxerWebsite.tsx" />
        <AboutSection data-magicpath-id="4" data-magicpath-path="BoxerWebsite.tsx" />
        <MediaGallerySection data-magicpath-id="5" data-magicpath-path="BoxerWebsite.tsx" />
      </main>
      <footer className="bg-gray-900 text-white py-8" data-magicpath-id="6" data-magicpath-path="BoxerWebsite.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="7" data-magicpath-path="BoxerWebsite.tsx">
          <div className="flex flex-col md:flex-row justify-between items-center" data-magicpath-id="8" data-magicpath-path="BoxerWebsite.tsx">
            <div className="mb-4 md:mb-0" data-magicpath-id="9" data-magicpath-path="BoxerWebsite.tsx">
              <p className="text-sm text-gray-400" data-magicpath-id="10" data-magicpath-path="BoxerWebsite.tsx">
                © 2024 Kumar Prescod. All rights reserved.
              </p>
            </div>
            <nav className="flex space-x-6" data-magicpath-id="11" data-magicpath-path="BoxerWebsite.tsx">
              <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#fights" className="text-sm text-gray-400 hover:text-white transition-colors">
                Fights
              </a>
              <a href="#media" className="text-sm text-gray-400 hover:text-white transition-colors">
                Media
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>;
};
export default BoxerWebsite;