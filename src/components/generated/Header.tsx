import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import { useGlobalAudio } from '@/hooks/use-global-audio';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { masterAudioEnabled, setMasterAudioEnabled, userHasInteracted, isMobile, enableMobileAudio } = useGlobalAudio();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">
              KUMAR <span className="text-orange-500">"THE RAW ONE"</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-red-400 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-white hover:text-red-400 transition-colors font-medium">
              About
            </a>
            <a href="#media" className="text-white hover:text-red-400 transition-colors font-medium">
              Media
            </a>
            <a href="#sponsors" className="text-white hover:text-red-400 transition-colors font-medium">
              Sponsors
            </a>
            <a href="#shop" className="text-white hover:text-red-400 transition-colors font-medium">
              Shop
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Master Audio Control */}
            {userHasInteracted && (
              <button
                onClick={() => setMasterAudioEnabled(!masterAudioEnabled)}
                className="flex items-center justify-center w-10 h-10 bg-gray-800/70 hover:bg-gray-700 backdrop-blur-sm rounded-full text-white transition-all duration-300 border border-gray-600 hover:border-orange-500"
                aria-label={masterAudioEnabled ? 'Mute master audio' : 'Enable master audio'}
                title="Master Audio Control"
              >
                {masterAudioEnabled ? (
                  <Volume2 size={16} />
                ) : (
                  <VolumeX size={16} />
                )}
              </button>
            )}

            {/* Get Tickets Button */}
            <motion.a href="https://tickets.example.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <span>GET TICKETS</span>
              <ExternalLink size={16} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium text-left">
                HOME
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium text-left">
                ABOUT
              </button>
              <button onClick={() => scrollToSection('fights')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium text-left">
                FIGHTS
              </button>
              <button onClick={() => scrollToSection('media')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium text-left">
                MEDIA
              </button>
              
              {/* Mobile Master Audio Control */}
              {userHasInteracted && (
                <button
                  onClick={() => isMobile ? enableMobileAudio() : setMasterAudioEnabled(!masterAudioEnabled)}
                  className="flex items-center space-x-3 bg-gray-800/70 hover:bg-gray-700 backdrop-blur-sm rounded-lg text-white transition-all duration-300 border border-gray-600 hover:border-orange-500 px-4 py-3 w-fit"
                  aria-label={masterAudioEnabled ? 'Mute master audio' : 'Enable master audio'}
                >
                  {masterAudioEnabled ? (
                    <Volume2 size={20} />
                  ) : (
                    <VolumeX size={20} />
                  )}
                  <span className="text-sm font-medium">
                    {masterAudioEnabled ? 'MUTE AUDIO' : 'ENABLE AUDIO'}
                  </span>
                </button>
              )}

              <a href="https://tickets.example.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-fit">
                <span>GET TICKETS</span>
                <ExternalLink size={16} />
              </a>
            </nav>
          </motion.div>}
      </div>
    </header>;
};
export default Header;