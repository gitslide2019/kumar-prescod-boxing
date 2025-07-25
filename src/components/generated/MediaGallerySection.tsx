import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Image as ImageIcon, Video, Camera, Dumbbell, MessageCircle, Zap, Heart, Star } from 'lucide-react';
type MediaType = 'all' | 'videos' | 'photos' | 'training' | 'fights' | 'journey';
interface MediaItem {
  id: number;
  type: 'image' | 'video';
  category: 'training' | 'fights' | 'journey';
  title: string;
  thumbnail: string;
  videoUrl?: string;
  imagePath?: string;
}

interface SocialReaction {
  id: number;
  platform: 'instagram' | 'twitter' | 'youtube' | 'generic';
  text: string;
  user: string;
  emoji: string;
  x: number;
  y: number;
}

const MediaGallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<MediaType>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeReactions, setActiveReactions] = useState<SocialReaction[]>([]);

  const socialReactionsData = [
    { platform: 'instagram', text: 'Fire!', user: '@oaklandboxing', emoji: '🔥' },
    { platform: 'twitter', text: 'Beast mode training!', user: '@boxingfan', emoji: '💪' },
    { platform: 'youtube', text: 'Future champion!', user: 'BoxingDaily', emoji: '👑' },
    { platform: 'instagram', text: 'Oakland pride!', user: '@bayareaboxing', emoji: '🥊' },
    { platform: 'twitter', text: 'This is incredible!', user: '@sportsfan2024', emoji: '😍' },
    { platform: 'youtube', text: 'Elite training right here', user: 'FightAnalysis', emoji: '⚡' },
    { platform: 'generic', text: 'Straight fire!', user: '@boxing_life', emoji: '🔥' },
    { platform: 'instagram', text: 'Next level skills', user: '@trainhard', emoji: '💯' },
    { platform: 'twitter', text: 'Oakland representing!', user: '@localpride', emoji: '🌟' },
    { platform: 'youtube', text: 'Unreal talent', user: 'BoxingExpert', emoji: '👏' },
    { platform: 'generic', text: 'Too good!', user: '@amazed_fan', emoji: '🤯' },
    { platform: 'instagram', text: 'Champion mindset', user: '@motivation', emoji: '🏆' },
    { platform: 'twitter', text: 'Raw talent on display', user: '@rawboxing', emoji: '💎' },
    { platform: 'youtube', text: 'Skills for days', user: 'TechniqueTV', emoji: '⭐' },
    { platform: 'generic', text: 'Legendary!', user: '@boxing_legend', emoji: '🔥' }
  ] as const;

  // Social reactions effect
  useEffect(() => {
    const spawnReaction = () => {
      if (activeReactions.length >= 4) return; // Max 4 concurrent reactions

      const randomReaction = socialReactionsData[Math.floor(Math.random() * socialReactionsData.length)];
      const newReaction: SocialReaction = {
        id: Date.now() + Math.random(),
        ...randomReaction,
        x: Math.random() * 80 + 10, // 10% to 90% of screen width
        y: Math.random() * 60 + 20  // 20% to 80% of screen height
      };

      setActiveReactions(prev => [...prev, newReaction]);

      // Remove reaction after 4 seconds
      setTimeout(() => {
        setActiveReactions(prev => prev.filter(r => r.id !== newReaction.id));
      }, 4000);
    };

    const interval = setInterval(spawnReaction, 3000); // New reaction every 3 seconds
    return () => clearInterval(interval);
  }, [activeReactions.length, socialReactionsData]);

  // Kumar Prescod Mixed Media Gallery
  const mediaItems: MediaItem[] = [
    // Fight Videos
    {
      id: 1,
      type: 'video',
      category: 'fights',
      title: 'Kumar Prescod 2023 Nationals Fight 1',
      thumbnail: 'https://img.youtube.com/vi/hlAeye4eW4o/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/hlAeye4eW4o?autoplay=1&loop=1&playlist=hlAeye4eW4o'
    },
    {
      id: 2,
      type: 'video',
      category: 'fights',
      title: 'Kumar Prescod 2023 Nationals Fight 2',
      thumbnail: 'https://img.youtube.com/vi/JkYKfcO4MEU/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/JkYKfcO4MEU?autoplay=1&loop=1&playlist=JkYKfcO4MEU'
    },
    {
      id: 3,
      type: 'video',
      category: 'fights',
      title: 'Kumar Prescod 2023 Nationals Championship Fight',
      thumbnail: 'https://img.youtube.com/vi/pJ91DV4rXww/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/pJ91DV4rXww?autoplay=1&loop=1&playlist=pJ91DV4rXww'
    },
    {
      id: 4,
      type: 'video',
      category: 'fights',
      title: 'Kumar Prescod vs. Andrew Fonseca',
      thumbnail: 'https://img.youtube.com/vi/gvyMvo_ynYA/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/gvyMvo_ynYA?autoplay=1&loop=1&playlist=gvyMvo_ynYA'
    },
    {
      id: 5,
      type: 'video',
      category: 'fights',
      title: 'Skyler Mauller vs Kumar Prescod (Pro Debut KO)',
      thumbnail: 'https://img.youtube.com/vi/abEB1TwZPko/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/abEB1TwZPko?autoplay=1&loop=1&playlist=abEB1TwZPko'
    },
    {
      id: 6,
      type: 'video',
      category: 'fights',
      title: 'Kumar Prescod vs Rueben Johnson Prefight Interview',
      thumbnail: 'https://img.youtube.com/vi/AxGJfPwO94Q/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/AxGJfPwO94Q?autoplay=1&loop=1&playlist=AxGJfPwO94Q'
    },
    // Fight Photos
    {
      id: 7,
      type: 'image',
      category: 'fights',
      title: 'Kumar Prescod Professional Fight Promo',
      thumbnail: '/images/fights/fight-promo.jpeg',
      imagePath: '/images/fights/fight-promo.jpeg'
    },
    {
      id: 8,
      type: 'image',
      category: 'fights',
      title: 'Kumar Prescod Fight Action Shot',
      thumbnail: '/images/fights/fight-12.png',
      imagePath: '/images/fights/fight-12.png'
    },
    // Training Videos
    {
      id: 9,
      type: 'video',
      category: 'training',
      title: 'Kumar Prescod Elite Training From Nationals',
      thumbnail: 'https://img.youtube.com/vi/m5ZvGaWKrrQ/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/m5ZvGaWKrrQ?autoplay=1&loop=1&playlist=m5ZvGaWKrrQ'
    },
    // Training Photos - Complete Collection
    {
      id: 10,
      type: 'image',
      category: 'training',
      title: 'Heavy Bag Training Fundamentals',
      thumbnail: '/images/training/training-1.jpeg',
      imagePath: '/images/training/training-1.jpeg'
    },
    {
      id: 11,
      type: 'image',
      category: 'training',
      title: 'Footwork and Movement Drills',
      thumbnail: '/images/training/training-2.jpeg',
      imagePath: '/images/training/training-2.jpeg'
    },
    {
      id: 12,
      type: 'image',
      category: 'training',
      title: 'Speed Bag Technique Work',
      thumbnail: '/images/training/training-3.jpeg',
      imagePath: '/images/training/training-3.jpeg'
    },
    {
      id: 13,
      type: 'image',
      category: 'training',
      title: 'Defensive Positioning Practice',
      thumbnail: '/images/training/training-4.jpeg',
      imagePath: '/images/training/training-4.jpeg'
    },
    {
      id: 14,
      type: 'image',
      category: 'training',
      title: 'Combination Punch Sequences',
      thumbnail: '/images/training/training-5.jpeg',
      imagePath: '/images/training/training-5.jpeg'
    },
    {
      id: 15,
      type: 'image',
      category: 'training',
      title: 'Ring Conditioning Session',
      thumbnail: '/images/training/training-6.jpeg',
      imagePath: '/images/training/training-6.jpeg'
    },
    {
      id: 28,
      type: 'image',
      category: 'training',
      title: 'Power Training Focus',
      thumbnail: '/images/training/training-7.jpeg',
      imagePath: '/images/training/training-7.jpeg'
    },
    {
      id: 29,
      type: 'image',
      category: 'training',
      title: 'Technical Precision Work',
      thumbnail: '/images/training/training-8.jpeg',
      imagePath: '/images/training/training-8.jpeg'
    },
    {
      id: 30,
      type: 'image',
      category: 'training',
      title: 'Sparring Preparation',
      thumbnail: '/images/training/training-9.jpeg',
      imagePath: '/images/training/training-9.jpeg'
    },
    {
      id: 31,
      type: 'image',
      category: 'training',
      title: 'Elite Training Intensity',
      thumbnail: '/images/training/training-10.jpeg',
      imagePath: '/images/training/training-10.jpeg'
    },
    {
      id: 32,
      type: 'image',
      category: 'training',
      title: 'Daily Routine Dedication',
      thumbnail: '/images/training/training-11.jpeg',
      imagePath: '/images/training/training-11.jpeg'
    },
    {
      id: 33,
      type: 'image',
      category: 'training',
      title: 'Focus and Determination',
      thumbnail: '/images/training/training-12.jpeg',
      imagePath: '/images/training/training-12.jpeg'
    },
    {
      id: 34,
      type: 'image',
      category: 'training',
      title: 'Strength Building Session',
      thumbnail: '/images/training/training-13.jpeg',
      imagePath: '/images/training/training-13.jpeg'
    },
    {
      id: 35,
      type: 'image',
      category: 'training',
      title: 'Professional Development',
      thumbnail: '/images/training/training-14.jpeg',
      imagePath: '/images/training/training-14.jpeg'
    },
    {
      id: 36,
      type: 'image',
      category: 'training',
      title: 'Ring Training Excellence',
      thumbnail: '/images/training/training-15.jpeg',
      imagePath: '/images/training/training-15.jpeg'
    },
    {
      id: 37,
      type: 'image',
      category: 'training',
      title: 'Tactical Training Session',
      thumbnail: '/images/training/training-16.jpeg',
      imagePath: '/images/training/training-16.jpeg'
    },
    {
      id: 38,
      type: 'image',
      category: 'training',
      title: 'Championship Preparation',
      thumbnail: '/images/training/training-17.jpeg',
      imagePath: '/images/training/training-17.jpeg'
    },
    {
      id: 39,
      type: 'image',
      category: 'training',
      title: 'Mental Focus Training',
      thumbnail: '/images/training/training-18.jpeg',
      imagePath: '/images/training/training-18.jpeg'
    },
    {
      id: 40,
      type: 'image',
      category: 'training',
      title: 'Endurance Building',
      thumbnail: '/images/training/training-19.jpeg',
      imagePath: '/images/training/training-19.jpeg'
    },
    {
      id: 41,
      type: 'image',
      category: 'training',
      title: 'Advanced Technique Work',
      thumbnail: '/images/training/training-20.jpeg',
      imagePath: '/images/training/training-20.jpeg'
    },
    {
      id: 42,
      type: 'image',
      category: 'training',
      title: 'Performance Analysis',
      thumbnail: '/images/training/training-21.jpeg',
      imagePath: '/images/training/training-21.jpeg'
    },
    {
      id: 43,
      type: 'image',
      category: 'training',
      title: 'Skills Refinement',
      thumbnail: '/images/training/training-22.jpeg',
      imagePath: '/images/training/training-22.jpeg'
    },
    {
      id: 44,
      type: 'image',
      category: 'training',
      title: 'Combat Readiness',
      thumbnail: '/images/training/training-23.jpeg',
      imagePath: '/images/training/training-23.jpeg'
    },
    {
      id: 45,
      type: 'image',
      category: 'training',
      title: 'Professional Training Standards',
      thumbnail: '/images/training/training-24.jpeg',
      imagePath: '/images/training/training-24.jpeg'
    },
    {
      id: 46,
      type: 'image',
      category: 'training',
      title: 'Elite Athlete Preparation',
      thumbnail: '/images/training/training-25.jpeg',
      imagePath: '/images/training/training-25.jpeg'
    },
    {
      id: 47,
      type: 'image',
      category: 'training',
      title: 'Championship Level Training',
      thumbnail: '/images/training/training-26.jpeg',
      imagePath: '/images/training/training-26.jpeg'
    },
    {
      id: 48,
      type: 'image',
      category: 'training',
      title: 'Technical Mastery Session',
      thumbnail: '/images/training/training-27.jpeg',
      imagePath: '/images/training/training-27.jpeg'
    },
    {
      id: 49,
      type: 'image',
      category: 'training',
      title: 'Career Progression Training',
      thumbnail: '/images/training/training-28.jpeg',
      imagePath: '/images/training/training-28.jpeg'
    },
    {
      id: 50,
      type: 'image',
      category: 'training',
      title: 'Professional Development Phase',
      thumbnail: '/images/training/training-29.jpeg',
      imagePath: '/images/training/training-29.jpeg'
    },
    {
      id: 51,
      type: 'image',
      category: 'training',
      title: 'Advanced Skill Building',
      thumbnail: '/images/training/training-30.jpeg',
      imagePath: '/images/training/training-30.jpeg'
    },
    {
      id: 52,
      type: 'image',
      category: 'training',
      title: 'Training Equipment Focus',
      thumbnail: '/images/training/training-31.jpeg',
      imagePath: '/images/training/training-31.jpeg'
    },
    {
      id: 53,
      type: 'image',
      category: 'training',
      title: 'Intensive Conditioning',
      thumbnail: '/images/training/training-32.jpeg',
      imagePath: '/images/training/training-32.jpeg'
    },
    {
      id: 54,
      type: 'image',
      category: 'training',
      title: 'Peak Performance Training',
      thumbnail: '/images/training/training-33.jpeg',
      imagePath: '/images/training/training-33.jpeg'
    },
    {
      id: 55,
      type: 'image',
      category: 'training',
      title: 'Elite Fighter Preparation',
      thumbnail: '/images/training/training-34.jpeg',
      imagePath: '/images/training/training-34.jpeg'
    },
    {
      id: 56,
      type: 'image',
      category: 'training',
      title: 'Professional Boxing Standards',
      thumbnail: '/images/training/training-35.jpeg',
      imagePath: '/images/training/training-35.jpeg'
    },
    {
      id: 57,
      type: 'image',
      category: 'training',
      title: 'Championship Training Regimen',
      thumbnail: '/images/training/training-36.jpeg',
      imagePath: '/images/training/training-36.jpeg'
    },
    {
      id: 58,
      type: 'image',
      category: 'training',
      title: 'Advanced Combat Training',
      thumbnail: '/images/training/training-37.jpeg',
      imagePath: '/images/training/training-37.jpeg'
    },
    {
      id: 59,
      type: 'image',
      category: 'training',
      title: 'Career Milestone Training',
      thumbnail: '/images/training/training-38.jpeg',
      imagePath: '/images/training/training-38.jpeg'
    },
    {
      id: 60,
      type: 'image',
      category: 'training',
      title: 'Professional Growth Session',
      thumbnail: '/images/training/training-39.jpeg',
      imagePath: '/images/training/training-39.jpeg'
    },
    {
      id: 61,
      type: 'image',
      category: 'training',
      title: 'Elite Training Excellence',
      thumbnail: '/images/training/training-40.jpeg',
      imagePath: '/images/training/training-40.jpeg'
    },
    // Journey Videos (Interview & Documentary)
    {
      id: 16,
      type: 'video',
      category: 'journey',
      title: 'The Young Raw One - Journey Documentary',
      thumbnail: 'https://img.youtube.com/vi/YKGBDJJjCxo/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/YKGBDJJjCxo?autoplay=1&loop=1&playlist=YKGBDJJjCxo'
    },
    {
      id: 17,
      type: 'video',
      category: 'journey',
      title: 'Ep. 1 Road To Greatness',
      thumbnail: 'https://img.youtube.com/vi/RxKScq1U8m8/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/RxKScq1U8m8?autoplay=1&loop=1&playlist=RxKScq1U8m8'
    },
    {
      id: 18,
      type: 'video',
      category: 'journey',
      title: 'Ep. 2 Road to Greatness',
      thumbnail: 'https://img.youtube.com/vi/CE4dtgPuiZY/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/CE4dtgPuiZY?autoplay=1&loop=1&playlist=CE4dtgPuiZY'
    },
    {
      id: 19,
      type: 'video',
      category: 'journey',
      title: 'The Raw Path to Pro',
      thumbnail: 'https://img.youtube.com/vi/v0rFe6cMvA4/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/v0rFe6cMvA4?autoplay=1&loop=1&playlist=v0rFe6cMvA4'
    },
    {
      id: 20,
      type: 'video',
      category: 'journey',
      title: 'Turning Pro the Raw Way',
      thumbnail: 'https://img.youtube.com/vi/C663b1dAhtA/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/C663b1dAhtA?autoplay=1&loop=1&playlist=C663b1dAhtA'
    },
    {
      id: 21,
      type: 'video',
      category: 'journey',
      title: 'Kumar Prescod Long-form Interview',
      thumbnail: 'https://img.youtube.com/vi/QcWImU0tA90/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/QcWImU0tA90?autoplay=1&loop=1&playlist=QcWImU0tA90'
    },
    {
      id: 22,
      type: 'video',
      category: 'journey',
      title: 'Kumar Prescod 2023 Junior Olympics National Champion Interview',
      thumbnail: 'https://img.youtube.com/vi/GA4bh6UBY-g/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/GA4bh6UBY-g?autoplay=1&loop=1&playlist=GA4bh6UBY-g'
    },
    {
      id: 23,
      type: 'video',
      category: 'journey',
      title: 'Kumar Prescod Documentary Content',
      thumbnail: 'https://img.youtube.com/vi/zNWskqkKxRc/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/zNWskqkKxRc?autoplay=1&loop=1&playlist=zNWskqkKxRc'
    },
    // Journey Photos
    {
      id: 24,
      type: 'image',
      category: 'journey',
      title: 'Kumar Prescod Boxing Journey 1',
      thumbnail: '/images/journey/journey-1.jpeg',
      imagePath: '/images/journey/journey-1.jpeg'
    },
    {
      id: 25,
      type: 'image',
      category: 'journey',
      title: 'Kumar Prescod Boxing Journey 2',
      thumbnail: '/images/journey/journey-2.jpeg',
      imagePath: '/images/journey/journey-2.jpeg'
    },
    {
      id: 26,
      type: 'image',
      category: 'journey',
      title: 'Kumar Prescod Boxing Journey 3',
      thumbnail: '/images/journey/journey-3.jpeg',
      imagePath: '/images/journey/journey-3.jpeg'
    },
    {
      id: 27,
      type: 'image',
      category: 'journey',
      title: 'Kumar Prescod Boxing Journey 4',
      thumbnail: '/images/journey/journey-4.jpeg',
      imagePath: '/images/journey/journey-4.jpeg'
    },
    {
      id: 62,
      type: 'image',
      category: 'journey',
      title: 'Professional Action Portrait',
      thumbnail: '/images/journey/journey-5.jpeg',
      imagePath: '/images/journey/journey-5.jpeg'
    }
  ];
  const filteredMedia = mediaItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'videos') return item.type === 'video';
    if (activeFilter === 'photos') return item.type === 'image';
    return item.category === activeFilter;
  });
  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
  };
  const closeModal = () => {
    setSelectedMedia(null);
  };
  return <section id="media" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            MEDIA <span className="text-orange-500">GALLERY</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore exclusive photos and videos from Kumar's training sessions and fight highlights
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => setActiveFilter('all')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'all' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <ImageIcon size={20} />
            <span>ALL MEDIA</span>
          </button>
          <button onClick={() => setActiveFilter('videos')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'videos' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <Video size={20} />
            <span>VIDEOS</span>
          </button>
          <button onClick={() => setActiveFilter('photos')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'photos' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <Camera size={20} />
            <span>PHOTOS</span>
          </button>
          <button onClick={() => setActiveFilter('training')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'training' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <Dumbbell size={20} />
            <span>TRAINING</span>
          </button>
          <button onClick={() => setActiveFilter('fights')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'fights' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <Zap size={20} />
            <span>FIGHTS</span>
          </button>
          <button onClick={() => setActiveFilter('journey')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'journey' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <MessageCircle size={20} />
            <span>THE JOURNEY</span>
          </button>
        </motion.div>

        {/* Media Statistics */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700">
            <p className="text-2xl font-bold text-orange-500">{mediaItems.filter(item => item.type === 'video').length}</p>
            <p className="text-gray-400 text-sm">Videos</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700">
            <p className="text-2xl font-bold text-blue-500">{mediaItems.filter(item => item.type === 'image').length}</p>
            <p className="text-gray-400 text-sm">Photos</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700">
            <p className="text-2xl font-bold text-green-500">{mediaItems.filter(item => item.category === 'training').length}</p>
            <p className="text-gray-400 text-sm">Training</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700">
            <p className="text-2xl font-bold text-red-500">{filteredMedia.length}</p>
            <p className="text-gray-400 text-sm">Showing</p>
          </div>
        </motion.div>

        {/* Media Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMedia.map((item, index) => <motion.div key={item.id} layout initial={{
            opacity: 0,
            scale: 0.8,
            y: 20
          }} animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }} exit={{
            opacity: 0,
            scale: 0.8,
            y: -20
          }} transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }} whileHover={{
            scale: 1.05,
            y: -10,
            transition: { duration: 0.2 }
          }} className="relative group cursor-pointer transform-gpu" onClick={() => openModal(item)}>
                <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video shadow-xl group-hover:shadow-2xl group-hover:shadow-orange-500/25 transition-all duration-300">
                  {/* Video thumbnail */}
                  <img 
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to hqdefault if maxresdefault fails
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('maxresdefault')) {
                        target.src = target.src.replace('maxresdefault', 'hqdefault');
                      } else if (target.src.includes('hqdefault')) {
                        // Ultimate fallback to gradient
                        target.style.display = 'none';
                        const fallbackDiv = target.nextElementSibling as HTMLElement;
                        if (fallbackDiv) fallbackDiv.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback gradient (hidden by default) */}
                  <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center absolute inset-0" style={{display: 'none'}}>
                    <div className="text-center">
                      {item.type === 'video' ? <Video className="text-orange-500 mx-auto mb-2" size={32} /> : <ImageIcon className="text-orange-500 mx-auto mb-2" size={32} />}
                      <p className="text-white text-sm">{item.title}</p>
                    </div>
                  </div>

                  {/* Interactive Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileHover={{ scale: 1.2, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="mb-2"
                    >
                      {item.type === 'video' ? 
                        <Play className="text-white drop-shadow-lg" size={56} /> : 
                        <ImageIcon className="text-white drop-shadow-lg" size={56} />
                      }
                    </motion.div>
                    <p className="text-white text-center text-sm font-medium px-4 drop-shadow-lg">
                      {item.type === 'video' ? 'Play Video' : 'View Photo'}
                    </p>
                  </div>

                  {/* Enhanced Media Type Badge */}
                  <div className="absolute top-3 right-3">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border ${
                        item.type === 'video' 
                          ? 'bg-red-600/90 text-white border-red-400' 
                          : 'bg-blue-600/90 text-white border-blue-400'
                      }`}
                    >
                      {item.type === 'video' ? '▶ VIDEO' : '📸 PHOTO'}
                    </motion.div>
                  </div>

                  {/* Enhanced Category Badge */}
                  <div className="absolute bottom-3 left-3">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border ${
                        item.category === 'training' ? 'bg-green-600/90 text-white border-green-400' :
                        item.category === 'fights' ? 'bg-orange-600/90 text-white border-orange-400' :
                        item.category === 'journey' ? 'bg-purple-600/90 text-white border-purple-400' :
                        'bg-gray-600/90 text-white border-gray-400'
                      }`}
                    >
                      {item.category.toUpperCase()}
                    </motion.div>
                  </div>
                </div>

                <motion.div 
                  className="mt-4 px-2"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-400 text-sm capitalize group-hover:text-gray-300 transition-colors duration-300">
                      {item.category}
                    </p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.type === 'video' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </motion.div>
              </motion.div>)}
          </AnimatePresence>
        </motion.div>

        {/* Floating Social Media Reactions */}
        <AnimatePresence>
          {activeReactions.map((reaction) => (
            <motion.div
              key={reaction.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                x: [0, Math.random() * 20 - 10, 0], // Gentle floating movement
                rotate: [0, Math.random() * 6 - 3, 0] // Subtle rotation
              }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ 
                duration: 0.6,
                x: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }}
              className="absolute pointer-events-none z-30"
              style={{
                left: `${reaction.x}%`,
                top: `${reaction.y}%`,
              }}
            >
              <div className={`
                flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border
                ${reaction.platform === 'instagram' ? 'bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white border-purple-300' : ''}
                ${reaction.platform === 'twitter' ? 'bg-blue-500/90 text-white border-blue-300' : ''}
                ${reaction.platform === 'youtube' ? 'bg-red-500/90 text-white border-red-300' : ''}
                ${reaction.platform === 'generic' ? 'bg-gray-800/90 text-white border-gray-600' : ''}
              `}>
                <span className="text-lg">{reaction.emoji}</span>
                <div className="flex flex-col">
                  <span className="text-xs opacity-75">{reaction.user}</span>
                  <span className="text-sm">{reaction.text}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Modal */}
        <AnimatePresence>
          {selectedMedia && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={closeModal}>
              <motion.div initial={{
            scale: 0.8
          }} animate={{
            scale: 1
          }} exit={{
            scale: 0.8
          }} className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
                <button onClick={closeModal} className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors">
                  <X size={24} />
                </button>

                <div className="aspect-video">
                  {selectedMedia.type === 'video' ? (
                    <iframe src={selectedMedia.videoUrl} className="w-full h-full" allowFullScreen title={selectedMedia.title} />
                  ) : (
                    <img 
                      src={selectedMedia.imagePath || selectedMedia.thumbnail} 
                      alt={selectedMedia.title}
                      className="w-full h-full object-contain bg-black"
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{selectedMedia.title}</h3>
                  <p className="text-gray-400 capitalize">{selectedMedia.category}</p>
                </div>
              </motion.div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </section>;
};
export default MediaGallerySection;