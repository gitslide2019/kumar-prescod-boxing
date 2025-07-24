import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap, Award } from 'lucide-react';
const AboutSection: React.FC = () => {
  const stats = [{
    icon: Trophy,
    label: '9x National Champion',
    value: '9',
    mpid: "efef1580-dac2-47ea-90c6-6d9b6abc7f4c"
  }, {
    icon: Target,
    label: 'Amateur Record',
    value: '63-8',
    mpid: "6c2e7e90-a185-452e-9bc4-efc0a6cfc1c7"
  }, {
    icon: Zap,
    label: 'Professional Record',
    value: '3-0',
    mpid: "c441a94d-5f3f-4971-ad44-2e0ebba57edd"
  }, {
    icon: Award,
    label: 'Professional KOs',
    value: '3',
    mpid: "4f2b9caa-06c1-40ef-9468-10669ef854f6"
  }] as any[];
  return <section id="about" className="py-20 bg-gray-900" data-magicpath-id="0" data-magicpath-path="AboutSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-magicpath-id="1" data-magicpath-path="AboutSection.tsx">
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
      }} className="text-center mb-16" data-magicpath-id="2" data-magicpath-path="AboutSection.tsx">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" data-magicpath-id="3" data-magicpath-path="AboutSection.tsx">
            ABOUT <span className="text-orange-500" data-magicpath-id="4" data-magicpath-path="AboutSection.tsx">KUMAR</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto" data-magicpath-id="5" data-magicpath-path="AboutSection.tsx"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-magicpath-id="6" data-magicpath-path="AboutSection.tsx">
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
        }} className="relative" data-magicpath-id="7" data-magicpath-path="AboutSection.tsx">
            <div className="relative w-full h-96 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg border border-orange-500/30 overflow-hidden" data-magicpath-id="8" data-magicpath-path="AboutSection.tsx">
              <div className="absolute inset-0 flex items-center justify-center" data-magicpath-id="9" data-magicpath-path="AboutSection.tsx">
                <div className="text-center" data-magicpath-id="10" data-magicpath-path="AboutSection.tsx">
                  <div className="w-32 h-32 bg-orange-500/30 rounded-full mx-auto mb-4 flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="AboutSection.tsx">
                    <span className="text-white text-4xl font-bold" data-magicpath-id="12" data-magicpath-path="AboutSection.tsx">KP</span>
                  </div>
                  <p className="text-orange-400 text-sm" data-magicpath-id="13" data-magicpath-path="AboutSection.tsx">Professional Photo</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white p-4 rounded-lg shadow-lg" data-magicpath-id="14" data-magicpath-path="AboutSection.tsx">
              <p className="text-sm font-bold" data-magicpath-id="15" data-magicpath-path="AboutSection.tsx">STRAIGHT OUTTA</p>
              <p className="text-lg font-bold" data-magicpath-id="16" data-magicpath-path="AboutSection.tsx">OAKLAND</p>
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
        }} className="space-y-6" data-magicpath-id="17" data-magicpath-path="AboutSection.tsx">
            <h3 className="text-2xl md:text-3xl font-bold text-white" data-magicpath-id="18" data-magicpath-path="AboutSection.tsx">
              From Oakland to the World
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed" data-magicpath-id="19" data-magicpath-path="AboutSection.tsx">
              From Oakland, CA. Started boxing at 6 years old. Been on Team USA 2x. 
              Went Pro at 17ys old. Currently 3-0 with 3 knockouts. Kumar Prescod is a 
              9x National Champion with an impressive amateur record of 63-8, representing 
              Oakland with pride and determination.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed" data-magicpath-id="20" data-magicpath-path="AboutSection.tsx">
              Known for his explosive power and technical precision, Kumar has quickly 
              made a name for himself in the professional boxing world. With his 
              undefeated professional record and perfect knockout ratio, he continues 
              to train relentlessly, always pushing the boundaries of what's possible 
              in the ring.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8" data-magicpath-id="21" data-magicpath-path="AboutSection.tsx">
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
            }} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="AboutSection.tsx">
                  <stat.icon className="text-orange-500 mb-2" size={24} data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="AboutSection.tsx" />
                  <p className="text-2xl font-bold text-white" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:unknown" data-magicpath-id="24" data-magicpath-path="AboutSection.tsx">{stat.value}</p>
                  <p className="text-gray-400 text-sm" data-magicpath-uuid={(stat as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="25" data-magicpath-path="AboutSection.tsx">{stat.label}</p>
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
          }} className="border-l-4 border-orange-500 pl-4 mt-8" data-magicpath-id="26" data-magicpath-path="AboutSection.tsx">
              <p className="text-gray-300 text-lg italic" data-magicpath-id="27" data-magicpath-path="AboutSection.tsx">
                "I've been grinding since I was 6 years old. From Team USA to turning 
                pro at 17, every fight is a chance to prove that Oakland breeds champions. 
                I carry my city's spirit with me into every ring."
              </p>
              <footer className="text-orange-500 font-semibold mt-2" data-magicpath-id="28" data-magicpath-path="AboutSection.tsx">
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
      }} className="mt-20" data-magicpath-id="29" data-magicpath-path="AboutSection.tsx">
          <h3 className="text-3xl font-bold text-white text-center mb-8" data-magicpath-id="30" data-magicpath-path="AboutSection.tsx">
            FIGHT <span className="text-orange-500" data-magicpath-id="31" data-magicpath-path="AboutSection.tsx">RECORD</span>
          </h3>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700" data-magicpath-id="32" data-magicpath-path="AboutSection.tsx">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center" data-magicpath-id="33" data-magicpath-path="AboutSection.tsx">
              <div data-magicpath-id="34" data-magicpath-path="AboutSection.tsx">
                <p className="text-4xl font-bold text-green-500" data-magicpath-id="35" data-magicpath-path="AboutSection.tsx">3</p>
                <p className="text-gray-400" data-magicpath-id="36" data-magicpath-path="AboutSection.tsx">PRO WINS</p>
              </div>
              <div data-magicpath-id="37" data-magicpath-path="AboutSection.tsx">
                <p className="text-4xl font-bold text-red-500" data-magicpath-id="38" data-magicpath-path="AboutSection.tsx">0</p>
                <p className="text-gray-400" data-magicpath-id="39" data-magicpath-path="AboutSection.tsx">PRO LOSSES</p>
              </div>
              <div data-magicpath-id="40" data-magicpath-path="AboutSection.tsx">
                <p className="text-4xl font-bold text-orange-500" data-magicpath-id="41" data-magicpath-path="AboutSection.tsx">3</p>
                <p className="text-gray-400" data-magicpath-id="42" data-magicpath-path="AboutSection.tsx">PRO KNOCKOUTS</p>
              </div>
              <div data-magicpath-id="43" data-magicpath-path="AboutSection.tsx">
                <p className="text-4xl font-bold text-blue-500" data-magicpath-id="44" data-magicpath-path="AboutSection.tsx">63-8</p>
                <p className="text-gray-400" data-magicpath-id="45" data-magicpath-path="AboutSection.tsx">AMATEUR RECORD</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;