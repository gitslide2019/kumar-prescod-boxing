import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Clock } from 'lucide-react';
const HeroSection: React.FC = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
        <div className="absolute inset-0 bg-black/30" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8" data-magicpath-id="3" data-magicpath-path="HeroSection.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-6" data-magicpath-id="4" data-magicpath-path="HeroSection.tsx">
          {/* Main Fighter Image Placeholder */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }} className="relative mx-auto w-80 h-96 bg-gradient-to-b from-orange-500/20 to-red-600/20 rounded-lg border border-orange-500/30" data-magicpath-id="5" data-magicpath-path="HeroSection.tsx">
            <div className="absolute inset-0 flex items-center justify-center" data-magicpath-id="6" data-magicpath-path="HeroSection.tsx">
              <div className="text-center" data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
                <div className="w-32 h-32 bg-orange-500/30 rounded-full mx-auto mb-4 flex items-center justify-center" data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">
                  <span className="text-white text-4xl font-bold" data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">KP</span>
                </div>
                <p className="text-orange-400 text-sm" data-magicpath-id="10" data-magicpath-path="HeroSection.tsx">Fighter Image</p>
              </div>
            </div>
          </motion.div>

          {/* "Straight Outta Oakland" Badge */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="inline-block" data-magicpath-id="11" data-magicpath-path="HeroSection.tsx">
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 px-6 py-3 rounded-lg" data-magicpath-id="12" data-magicpath-path="HeroSection.tsx">
              <h2 className="text-gray-300 text-lg font-bold tracking-wider" data-magicpath-id="13" data-magicpath-path="HeroSection.tsx">
                STRAIGHT OUTTA
              </h2>
              <h3 className="text-white text-2xl font-bold tracking-wider" data-magicpath-id="14" data-magicpath-path="HeroSection.tsx">
                OAKLAND
              </h3>
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} className="text-center space-y-2" data-magicpath-id="15" data-magicpath-path="HeroSection.tsx">
            <p className="text-white text-lg tracking-wider" data-magicpath-id="16" data-magicpath-path="HeroSection.tsx">DOORS OPEN 3PM</p>
            <p className="text-white text-lg tracking-wider" data-magicpath-id="17" data-magicpath-path="HeroSection.tsx">FIRST FIGHT 4PM</p>
          </motion.div>

          {/* Fighter Name */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.6
        }} data-magicpath-id="18" data-magicpath-path="HeroSection.tsx">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text tracking-wider" data-magicpath-id="19" data-magicpath-path="HeroSection.tsx">
              KUMAR PRESCOD
            </h1>
          </motion.div>

          {/* Fight Date */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.0,
          duration: 0.6
        }} data-magicpath-id="20" data-magicpath-path="HeroSection.tsx">
            <h2 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wider mb-2" data-magicpath-id="21" data-magicpath-path="HeroSection.tsx">
              AUGUST 19TH
            </h2>
            <div className="bg-red-700 text-white px-6 py-2 inline-block rounded-md" data-magicpath-id="22" data-magicpath-path="HeroSection.tsx">
              <span className="text-lg font-bold tracking-wider" data-magicpath-id="23" data-magicpath-path="HeroSection.tsx">PROFESSIONAL BOXING</span>
            </div>
          </motion.div>

          {/* Venue Information */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.2,
          duration: 0.6
        }} className="space-y-4" data-magicpath-id="24" data-magicpath-path="HeroSection.tsx">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-300 tracking-wider" data-magicpath-id="25" data-magicpath-path="HeroSection.tsx">
              OAKLAND MARRIOTT CITY CENTER
            </h3>
            <p className="text-gray-400 text-lg tracking-wider" data-magicpath-id="26" data-magicpath-path="HeroSection.tsx">
              1001 BROADWAY, OAKLAND, CA 94607
            </p>
          </motion.div>

          {/* Fight Details Cards */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.4,
          duration: 0.6
        }} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto" data-magicpath-id="27" data-magicpath-path="HeroSection.tsx">
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-4 rounded-lg" data-magicpath-id="28" data-magicpath-path="HeroSection.tsx">
              <Calendar className="text-orange-500 mx-auto mb-2" size={24} data-magicpath-id="29" data-magicpath-path="HeroSection.tsx" />
              <p className="text-white font-semibold" data-magicpath-id="30" data-magicpath-path="HeroSection.tsx">August 19, 2024</p>
              <p className="text-gray-400 text-sm" data-magicpath-id="31" data-magicpath-path="HeroSection.tsx">Fight Night</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-4 rounded-lg" data-magicpath-id="32" data-magicpath-path="HeroSection.tsx">
              <Clock className="text-orange-500 mx-auto mb-2" size={24} data-magicpath-id="33" data-magicpath-path="HeroSection.tsx" />
              <p className="text-white font-semibold" data-magicpath-id="34" data-magicpath-path="HeroSection.tsx">Doors 3PM</p>
              <p className="text-gray-400 text-sm" data-magicpath-id="35" data-magicpath-path="HeroSection.tsx">First Fight 4PM</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-4 rounded-lg" data-magicpath-id="36" data-magicpath-path="HeroSection.tsx">
              <MapPin className="text-orange-500 mx-auto mb-2" size={24} data-magicpath-id="37" data-magicpath-path="HeroSection.tsx" />
              <p className="text-white font-semibold" data-magicpath-id="38" data-magicpath-path="HeroSection.tsx">Oakland, CA</p>
              <p className="text-gray-400 text-sm" data-magicpath-id="39" data-magicpath-path="HeroSection.tsx">Marriott City Center</p>
            </div>
          </motion.div>

          {/* Get Tickets Button */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 1.6,
          duration: 0.6
        }} data-magicpath-id="40" data-magicpath-path="HeroSection.tsx">
            <motion.a href="https://tickets.example.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} data-magicpath-id="41" data-magicpath-path="HeroSection.tsx">
              <span data-magicpath-id="42" data-magicpath-path="HeroSection.tsx">GET TICKETS NOW</span>
              <ExternalLink size={24} data-magicpath-id="43" data-magicpath-path="HeroSection.tsx" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 2,
      duration: 1
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-magicpath-id="44" data-magicpath-path="HeroSection.tsx">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }} className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center" data-magicpath-id="45" data-magicpath-path="HeroSection.tsx">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          repeat: Infinity,
          duration: 2
        }} className="w-1 h-3 bg-white/50 rounded-full mt-2" data-magicpath-id="46" data-magicpath-path="HeroSection.tsx" />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;