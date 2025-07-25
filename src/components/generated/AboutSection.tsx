import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap, Award } from 'lucide-react';
const AboutSection: React.FC = () => {
  const stats = [{
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
  }] as any[];
  return <section id="about" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Videos */}
      <div className="absolute inset-0 opacity-60">
        <iframe className="absolute top-0 left-0 w-1/2 h-full object-cover" src="https://www.youtube.com/embed/m5ZvGaWKrrQ?autoplay=1&mute=1&loop=1&playlist=m5ZvGaWKrrQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1" title="Kumar's Journey Video 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <iframe className="absolute top-0 right-0 w-1/2 h-full object-cover" src="https://www.youtube.com/embed/3mj7iYfKQxE?autoplay=1&mute=1&loop=1&playlist=3mj7iYfKQxE&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1" title="Kumar's Journey Video 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <div className="absolute inset-0 bg-gray-900/50" />
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
            <div className="relative w-full h-96 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg border border-orange-500/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-orange-500/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">KP</span>
                  </div>
                  <p className="text-orange-400 text-sm">Professional Photo</p>
                </div>
              </div>
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