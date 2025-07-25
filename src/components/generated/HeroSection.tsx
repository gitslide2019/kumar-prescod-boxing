import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Clock } from 'lucide-react';
const HeroSection: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [{
    id: '4jftcUAny5E',
    title: 'Kumar Prescod Training'
  }, {
    id: 'C3zE1Ol1ByA',
    title: 'Kumar Prescod Highlights'
  }, {
    id: 'fHaH1vGAhJc',
    title: 'Kumar Prescod Skills'
  }, {
    id: 'caOtbIMgDCQ',
    title: 'Kumar Prescod Boxing Video'
  }, {
    id: 'XrSmOWRP5kU',
    title: 'Kumar Prescod Short'
  }] as any[];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex(prevIndex => prevIndex === videos.length - 1 ? 0 : prevIndex + 1);
    }, 30000); // Change video every 30 seconds

    return () => clearInterval(interval);
  }, [videos.length]);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe key={currentVideoIndex} className="w-full h-full object-cover" src={`https://www.youtube.com/embed/${videos[currentVideoIndex].id}?autoplay=1&mute=1&loop=1&playlist=${videos[currentVideoIndex].id}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`} title={videos[currentVideoIndex].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-6">
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
        }} className="relative mx-auto w-80 h-96 bg-gradient-to-b from-orange-500/20 to-red-600/20 rounded-lg border border-orange-500/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-orange-500/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">KP</span>
                </div>
                <p className="text-orange-400 text-sm">Fighter Image</p>
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
        }} className="inline-block">
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 px-6 py-3 rounded-lg">
              <h2 className="text-gray-300 text-lg font-bold tracking-wider">
                STRAIGHT OUTTA
              </h2>
              <h3 className="text-white text-2xl font-bold tracking-wider">
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
        }} className="text-center space-y-2">
            <p className="text-white text-lg tracking-wider">DOORS OPEN 3PM</p>
            <p className="text-white text-lg tracking-wider">FIRST FIGHT 4PM</p>
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
        }}>
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text tracking-wider">
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
        }}>
            <h2 className="text-4xl md:text-6xl font-bold text-orange-500 tracking-wider mb-2">
              AUGUST 19TH
            </h2>
            <div className="bg-red-700 text-white px-6 py-2 inline-block rounded-md">
              <span className="text-lg font-bold tracking-wider">PROFESSIONAL BOXING</span>
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
        }} className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-300 tracking-wider">
              OAKLAND MARRIOTT CITY CENTER
            </h3>
            <p className="text-gray-400 text-lg tracking-wider">
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
        }} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-4 rounded-lg">
              <Calendar className="text-orange-500 mx-auto mb-2" size={24} />
              <p className="text-white font-semibold">August 19, 2024</p>
              <p className="text-gray-400 text-sm">Fight Night</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-4 rounded-lg">
              <Clock className="text-orange-500 mx-auto mb-2" size={24} />
              <p className="text-white font-semibold">Doors 3PM</p>
              <p className="text-gray-400 text-sm">First Fight 4PM</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-4 rounded-lg">
              <MapPin className="text-orange-500 mx-auto mb-2" size={24} />
              <p className="text-white font-semibold">Oakland, CA</p>
              <p className="text-gray-400 text-sm">Marriott City Center</p>
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
        }}>
            <motion.a href="https://www.paypal.com/ncp/payment/DE5Y9AGCDPUBY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <span>GET TICKETS NOW</span>
              <ExternalLink size={24} />
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
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }} className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div animate={{
          y: [0, 12, 0]
        }} transition={{
          repeat: Infinity,
          duration: 2
        }} className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;