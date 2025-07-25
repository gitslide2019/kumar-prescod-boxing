import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap, Award } from 'lucide-react';
import { useVideoRotation } from '@/hooks/use-video-rotation';

interface Video {
  id: string;
  title: string;
}

interface Stat {
  icon: React.ComponentType;
  label: string;
  value: string;
}

const AboutSection: React.FC = () => {
  const aboutVideos: Video[] = [{
    id: 'm5ZvGaWKrrQ',
    title: 'Kumar Prescod Elite Training From Nationals'
  }, {
    id: 'YKGBDJJjCxo',
    title: 'The Young Raw One'
  }];
  
  const { currentIndex, currentVideo } = useVideoRotation(aboutVideos);

  const stats: Stat[] = [{
    icon: Trophy,
    label: '9x National Champion',
    value: '9'
  }, {
    icon: Target,
    label: 'Amateur Record',
    value: '63-8'
  }, {
    icon: Zap,
    label: 'Professional Record',
    value: '3-0'
  }, {
    icon: Award,
    label: 'Professional KOs',
    value: '3'
  }];

  return <section id="about" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe 
          key={currentIndex} 
          className="w-full h-full object-cover" 
          src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&mute=1&loop=1&playlist=${currentVideo.id}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0&enablejsapi=1`} 
          title={currentVideo.title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ABOUT <span className="text-orange-500">KUMAR</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Fighter Image */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="relative">
            <div className="relative w-full h-96 rounded-lg border border-orange-500/30 overflow-hidden">
              <img 
                src="/images/fights/kumar-about-photo.png" 
                alt="Kumar Prescod About Photo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-bold">STRAIGHT OUTTA</p>
              <p className="text-lg font-bold">OAKLAND</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              From Oakland to the World
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              From Oakland, CA. Started boxing at 6 years old. Been on Team USA 2x. 
              Went Pro at 17ys old. Currently 3-0 with 3 knockouts. Kumar Prescod is a 
              9x National Champion with an impressive amateur record of 63-8, representing 
              Oakland with pride and determination.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Known for his explosive power and technical precision, Kumar has quickly 
              made a name for himself in the professional boxing world. With his 
              undefeated professional record and perfect knockout ratio, he continues 
              to train relentlessly, always pushing the boundaries of what's possible 
              in the ring.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors">
                  <stat.icon className="text-orange-500 mb-2" size={24} />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>)}
            </div>

            {/* Quote */}
            <motion.blockquote initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} viewport={{
            once: true
          }} className="border-l-4 border-orange-500 pl-4 mt-8">
              <p className="text-gray-300 text-lg italic">
                "I've been grinding since I was 6 years old. From Team USA to turning 
                pro at 17, every fight is a chance to prove that Oakland breeds champions. 
                I carry my city's spirit with me into every ring."
              </p>
              <footer className="text-orange-500 font-semibold mt-2">
                - Kumar Prescod
              </footer>
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Interactive Career Timeline */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            CAREER <span className="text-orange-500">TIMELINE</span>
          </h3>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-500 h-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Age 6 - Started Boxing */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors">
                    <h4 className="text-xl font-bold text-orange-500 mb-2">Age 6</h4>
                    <p className="text-white font-semibold">Started Boxing</p>
                    <p className="text-gray-400 text-sm">Oakland, CA - The journey begins</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900"></div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* Amateur Career */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
                    <h4 className="text-xl font-bold text-blue-500 mb-2">Amateur Years</h4>
                    <p className="text-white font-semibold">9x National Champion</p>
                    <p className="text-gray-400 text-sm">Record: 63-8 | Dominated amateur boxing</p>
                  </div>
                </div>
              </motion.div>

              {/* Team USA */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors">
                    <h4 className="text-xl font-bold text-red-500 mb-2">Team USA</h4>
                    <p className="text-white font-semibold">2x Team USA Member</p>
                    <p className="text-gray-400 text-sm">Represented the United States internationally</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-gray-900"></div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* Turned Pro at 17 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-500/50 transition-colors">
                    <h4 className="text-xl font-bold text-green-500 mb-2">Age 17</h4>
                    <p className="text-white font-semibold">Turned Professional</p>
                    <p className="text-gray-400 text-sm">Youngest to turn pro in his class</p>
                  </div>
                </div>
              </motion.div>

              {/* Professional Record */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors">
                    <h4 className="text-xl font-bold text-orange-500 mb-2">Present</h4>
                    <p className="text-white font-semibold">Professional Record</p>
                    <p className="text-gray-400 text-sm">3-0 with 3 KOs | 100% Knockout Rate</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 animate-pulse"></div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Fight Record Section */}
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            FIGHT <span className="text-orange-500">RECORD</span>
          </h3>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-green-500">3</p>
                <p className="text-gray-400">PRO WINS</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-500">0</p>
                <p className="text-gray-400">PRO LOSSES</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-500">3</p>
                <p className="text-gray-400">PRO KNOCKOUTS</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-500">63-8</p>
                <p className="text-gray-400">AMATEUR RECORD</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;