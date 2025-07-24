import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800" data-magicpath-id="0" data-magicpath-path="Header.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="1" data-magicpath-path="Header.tsx">
        <div className="flex justify-between items-center h-16" data-magicpath-id="2" data-magicpath-path="Header.tsx">
          {/* Logo/Name */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="flex-shrink-0" data-magicpath-id="3" data-magicpath-path="Header.tsx">
            <h1 className="text-xl font-bold text-white" data-magicpath-id="4" data-magicpath-path="Header.tsx">
              KUMAR <span className="text-orange-500" data-magicpath-id="5" data-magicpath-path="Header.tsx">PRESCOD</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" data-magicpath-id="6" data-magicpath-path="Header.tsx">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium" data-magicpath-id="7" data-magicpath-path="Header.tsx">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium" data-magicpath-id="8" data-magicpath-path="Header.tsx">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('fights')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium" data-magicpath-id="9" data-magicpath-path="Header.tsx">
              FIGHTS
            </button>
            <button onClick={() => scrollToSection('media')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium" data-magicpath-id="10" data-magicpath-path="Header.tsx">
              MEDIA
            </button>
          </nav>

          {/* Get Tickets Button */}
          <motion.a href="https://tickets.example.com" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} data-magicpath-id="11" data-magicpath-path="Header.tsx">
            <span data-magicpath-id="12" data-magicpath-path="Header.tsx">GET TICKETS</span>
            <ExternalLink size={16} data-magicpath-id="13" data-magicpath-path="Header.tsx" />
          </motion.a>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white p-2" aria-label="Toggle menu" data-magicpath-id="14" data-magicpath-path="Header.tsx">
            {isMenuOpen ? <X size={24} data-magicpath-id="15" data-magicpath-path="Header.tsx" /> : <Menu size={24} data-magicpath-id="16" data-magicpath-path="Header.tsx" />}
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
      }} className="md:hidden py-4 border-t border-gray-800" data-magicpath-id="17" data-magicpath-path="Header.tsx">
            <nav className="flex flex-col space-y-4" data-magicpath-id="18" data-magicpath-path="Header.tsx">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium text-left" data-magicpath-id="19" data-magicpath-path="Header.tsx">
                HOME
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium text-left" data-magicpath-id="20" data-magicpath-path="Header.tsx">
                ABOUT
              </button>
              <button onClick={() => scrollToSection('fights')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium text-left" data-magicpath-id="21" data-magicpath-path="Header.tsx">
                FIGHTS
              </button>
              <button onClick={() => scrollToSection('media')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium text-left" data-magicpath-id="22" data-magicpath-path="Header.tsx">
                MEDIA
              </button>
              <a href="https://tickets.example.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-fit">
                <span data-magicpath-id="23" data-magicpath-path="Header.tsx">GET TICKETS</span>
                <ExternalLink size={16} data-magicpath-id="24" data-magicpath-path="Header.tsx" />
              </a>
            </nav>
          </motion.div>}
      </div>
    </header>;
};
export default Header;