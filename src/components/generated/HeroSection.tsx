import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Clock, Volume2, VolumeX } from 'lucide-react';
import { useVideoRotation } from '@/hooks/use-video-rotation';
import { useGlobalAudio } from '@/hooks/use-global-audio';

interface Video {
  id: string;
  title: string;
}

const HeroSection: React.FC = () => {
  const videos: Video[] = [{
    id: '4jftcUAny5E',
    title: 'Kumar Prescod Boxing Short 1'
  }, {
    id: 'C6d7Q5Mal54',
    title: 'Kumar Prescod Boxing Short 2'
  }, {
    id: 'm5ZvGaWKrrQ',
    title: 'Kumar Prescod Elite Training From Nationals'
  }, {
    id: 'abEB1TwZPko',
    title: 'Skyler Mauller vs Kumar Prescod (Pro Debut KO)'
  }, {
    id: 'caOtbIMgDCQ',
    title: 'Kumar Prescod Boxing Highlight'
  }];

  const { currentIndex, currentVideo } = useVideoRotation(videos);
  const { sectionAudio, setSectionAudio } = useGlobalAudio();
  
  const heroAudioEnabled = sectionAudio['hero'] || false;

  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe key={currentIndex} className="w-full h-full object-cover" src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&mute=${heroAudioEnabled ? '0' : '1'}&loop=1&playlist=${currentVideo.id}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0&enablejsapi=1`} title={currentVideo.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Section Audio Control */}
        <div className="absolute top-4 left-4 z-20">
          <button
            onClick={() => setSectionAudio('hero', !heroAudioEnabled)}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-black/70 hover:bg-black/85 backdrop-blur-sm rounded-full text-white transition-all duration-300 border-2 border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
            aria-label={heroAudioEnabled ? 'Mute hero video audio' : 'Enable hero video audio'}
          >
            {heroAudioEnabled ? (
              <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
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
      }} className="space-y-8">
          {/* Fighter Name */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text tracking-wider">
              KUMAR PRESCOD
            </h1>
          </motion.div>

          {/* Fight Date & Type */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-orange-500 tracking-wider">
              AUGUST 16TH
            </h2>
            <div className="bg-red-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 inline-block rounded-md">
              <span className="text-lg sm:text-xl font-bold tracking-wider">PROFESSIONAL BOXING</span>
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
          delay: 0.6,
          duration: 0.6
        }} className="space-y-3">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 tracking-wider">
              OAKLAND MARRIOTT CITY CENTER
            </h3>
            <p className="text-gray-400 text-lg sm:text-xl tracking-wider">
              1001 BROADWAY, OAKLAND, CA 94607
            </p>
          </motion.div>

          {/* Event Timing */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.6
        }} className="text-center space-y-2">
            <p className="text-white text-xl sm:text-2xl font-bold tracking-wider">DOORS OPEN 3PM</p>
            <p className="text-white text-xl sm:text-2xl font-bold tracking-wider">FIRST FIGHT 4PM</p>
          </motion.div>

          {/* Get Tickets Button - Now Prominent */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 1.0,
          duration: 0.6
        }} className="pt-4">
            <motion.a 
              href="https://www.paypal.com/ncp/payment/DE5Y9AGCDPUBY" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 sm:space-x-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 sm:px-8 md:px-12 py-4 sm:py-6 rounded-lg text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 border-2 border-orange-500/20 hover:border-orange-500/40" 
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
              }} 
              whileTap={{
                scale: 0.95
              }}
            >
              <span>GET TICKETS NOW</span>
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.a>
          </motion.div>

          {/* Fight Details Cards */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.2,
          duration: 0.6
        }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-6 rounded-lg text-center hover:border-orange-500/50 transition-colors">
              <Calendar className="text-orange-500 mx-auto mb-3" size={32} />
              <p className="text-white font-bold text-lg">August 16, 2025</p>
              <p className="text-gray-400">Fight Night</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-6 rounded-lg text-center hover:border-orange-500/50 transition-colors">
              <Clock className="text-orange-500 mx-auto mb-3" size={32} />
              <p className="text-white font-bold text-lg">Doors 3PM</p>
              <p className="text-gray-400">First Fight 4PM</p>
            </div>
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-600 p-6 rounded-lg text-center hover:border-orange-500/50 transition-colors">
              <MapPin className="text-orange-500 mx-auto mb-3" size={32} />
              <p className="text-white font-bold text-lg">Oakland, CA</p>
              <p className="text-gray-400">Marriott City Center</p>
            </div>
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