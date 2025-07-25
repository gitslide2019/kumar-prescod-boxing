import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Image as ImageIcon, Video, Camera, Dumbbell } from 'lucide-react';
type MediaType = 'all' | 'training' | 'fights';
interface MediaItem {
  id: number;
  type: 'image' | 'video';
  category: 'training' | 'fights';
  title: string;
  thumbnail: string;
  videoUrl?: string;
}
const MediaGallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<MediaType>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Mock data - replace with actual media
  const mediaItems: MediaItem[] = [{
    id: 1,
    type: 'video',
    category: 'training',
    title: 'Training Session Highlights',
    thumbnail: '/api/placeholder/400/300',
    videoUrl: 'https://www.youtube.com/embed/CE4dtgPuiZY?mute=1&autoplay=1&loop=1&playlist=CE4dtgPuiZY'
  }, {
    id: 2,
    type: 'video',
    category: 'fights',
    title: 'Championship Fight Highlights',
    thumbnail: '/api/placeholder/400/300',
    videoUrl: 'https://www.youtube.com/embed/RxKScq1U8m8?autoplay=1&loop=1&playlist=RxKScq1U8m8'
  }, {
    id: 3,
    type: 'video',
    category: 'training',
    title: 'Intense Training Footage',
    thumbnail: '/api/placeholder/400/300',
    videoUrl: 'https://www.youtube.com/embed/pJ91DV4rXww?autoplay=1&loop=1&playlist=pJ91DV4rXww'
  }];
  const filteredMedia = mediaItems.filter(item => activeFilter === 'all' || item.category === activeFilter);
  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
  };
  const closeModal = () => {
    setSelectedMedia(null);
  };
  return <section id="media" className="py-20 bg-black relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe src="https://www.youtube.com/embed/sU-8e47CT1w?autoplay=1&mute=0&loop=1&playlist=sU-8e47CT1w&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1" className="w-full h-full object-cover opacity-30" allow="autoplay; encrypted-media" allowFullScreen title="Background Video" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

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
          <button onClick={() => setActiveFilter('training')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'training' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <Dumbbell size={20} />
            <span>TRAINING</span>
          </button>
          <button onClick={() => setActiveFilter('fights')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'fights' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <Camera size={20} />
            <span>FIGHTS</span>
          </button>
        </motion.div>

        {/* Media Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredMedia.map((item, index) => <motion.div key={item.id} layout initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.8
          }} transition={{
            duration: 0.4,
            delay: index * 0.1
          }} className="relative group cursor-pointer" onClick={() => openModal(item)}>
                <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
                    <div className="text-center">
                      {item.type === 'video' ? <Video className="text-orange-500 mx-auto mb-2" size={32} /> : <ImageIcon className="text-orange-500 mx-auto mb-2" size={32} />}
                      <p className="text-white text-sm">{item.title}</p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === 'video' ? <Play className="text-white" size={48} /> : <ImageIcon className="text-white" size={48} />}
                  </div>

                  {/* Media Type Badge */}
                  <div className="absolute top-2 right-2">
                    <div className={`px-2 py-1 rounded text-xs font-semibold ${item.type === 'video' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}`}>
                      {item.type === 'video' ? 'VIDEO' : 'PHOTO'}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-2 left-2">
                    <div className={`px-2 py-1 rounded text-xs font-semibold ${item.category === 'training' ? 'bg-green-600 text-white' : 'bg-orange-600 text-white'}`}>
                      {item.category.toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm capitalize">{item.category}</p>
                </div>
              </motion.div>)}
          </AnimatePresence>
        </motion.div>

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
                  {selectedMedia.type === 'video' ? <iframe src={selectedMedia.videoUrl} className="w-full h-full" allowFullScreen title={selectedMedia.title} /> : <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="text-orange-500 mx-auto mb-4" size={64} />
                        <p className="text-white text-lg">{selectedMedia.title}</p>
                      </div>
                    </div>}
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