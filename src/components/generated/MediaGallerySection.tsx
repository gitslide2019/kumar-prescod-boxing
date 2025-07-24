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
  mpid?: string;
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
    videoUrl: 'https://www.youtube.com/embed/CE4dtgPuiZY?mute=1&autoplay=1&loop=1&playlist=CE4dtgPuiZY',
    mpid: "e15d4651-e2b0-474e-bf9c-beff23734649"
  }, {
    id: 2,
    type: 'video',
    category: 'fights',
    title: 'Championship Fight Highlights',
    thumbnail: '/api/placeholder/400/300',
    videoUrl: 'https://www.youtube.com/embed/RxKScq1U8m8?autoplay=1&loop=1&playlist=RxKScq1U8m8',
    mpid: "07ce5083-e4b1-41e4-9f33-700f7872e913"
  }, {
    id: 3,
    type: 'video',
    category: 'training',
    title: 'Intense Training Footage',
    thumbnail: '/api/placeholder/400/300',
    videoUrl: 'https://www.youtube.com/embed/pJ91DV4rXww?autoplay=1&loop=1&playlist=pJ91DV4rXww',
    mpid: "edf23080-789c-4e40-a5f1-9b65d381dc00"
  }];
  const filteredMedia = mediaItems.filter(item => activeFilter === 'all' || item.category === activeFilter);
  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
  };
  const closeModal = () => {
    setSelectedMedia(null);
  };
  return <section id="media" className="py-20 bg-black relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="MediaGallerySection.tsx">
      {/* Background Video */}
      <div className="absolute inset-0 z-0" data-magicpath-id="1" data-magicpath-path="MediaGallerySection.tsx">
        <iframe src="https://www.youtube.com/embed/sU-8e47CT1w?autoplay=1&mute=0&loop=1&playlist=sU-8e47CT1w&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1" className="w-full h-full object-cover opacity-30" allow="autoplay; encrypted-media" allowFullScreen title="Background Video" data-magicpath-id="2" data-magicpath-path="MediaGallerySection.tsx" />
        <div className="absolute inset-0 bg-black/60" data-magicpath-id="3" data-magicpath-path="MediaGallerySection.tsx" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-magicpath-id="4" data-magicpath-path="MediaGallerySection.tsx">
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
      }} className="text-center mb-16" data-magicpath-id="5" data-magicpath-path="MediaGallerySection.tsx">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" data-magicpath-id="6" data-magicpath-path="MediaGallerySection.tsx">
            MEDIA <span className="text-orange-500" data-magicpath-id="7" data-magicpath-path="MediaGallerySection.tsx">GALLERY</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" data-magicpath-id="8" data-magicpath-path="MediaGallerySection.tsx"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-magicpath-id="9" data-magicpath-path="MediaGallerySection.tsx">
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
      }} className="flex flex-wrap justify-center gap-4 mb-12" data-magicpath-id="10" data-magicpath-path="MediaGallerySection.tsx">
          <button onClick={() => setActiveFilter('all')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'all' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`} data-magicpath-id="11" data-magicpath-path="MediaGallerySection.tsx">
            <ImageIcon size={20} data-magicpath-id="12" data-magicpath-path="MediaGallerySection.tsx" />
            <span data-magicpath-id="13" data-magicpath-path="MediaGallerySection.tsx">ALL MEDIA</span>
          </button>
          <button onClick={() => setActiveFilter('training')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'training' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`} data-magicpath-id="14" data-magicpath-path="MediaGallerySection.tsx">
            <Dumbbell size={20} data-magicpath-id="15" data-magicpath-path="MediaGallerySection.tsx" />
            <span data-magicpath-id="16" data-magicpath-path="MediaGallerySection.tsx">TRAINING</span>
          </button>
          <button onClick={() => setActiveFilter('fights')} className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'fights' ? 'bg-orange-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`} data-magicpath-id="17" data-magicpath-path="MediaGallerySection.tsx">
            <Camera size={20} />
            <span data-magicpath-id="18" data-magicpath-path="MediaGallerySection.tsx">FIGHTS</span>
          </button>
        </motion.div>

        {/* Media Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="19" data-magicpath-path="MediaGallerySection.tsx">
          <AnimatePresence data-magicpath-id="20" data-magicpath-path="MediaGallerySection.tsx">
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
          }} className="relative group cursor-pointer" onClick={() => openModal(item)} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="MediaGallerySection.tsx">
                <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="MediaGallerySection.tsx">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="MediaGallerySection.tsx">
                    <div className="text-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="MediaGallerySection.tsx">
                      {item.type === 'video' ? <Video className="text-orange-500 mx-auto mb-2" size={32} /> : <ImageIcon className="text-orange-500 mx-auto mb-2" size={32} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="MediaGallerySection.tsx" />}
                      <p className="text-white text-sm" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="26" data-magicpath-path="MediaGallerySection.tsx">{item.title}</p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="27" data-magicpath-path="MediaGallerySection.tsx">
                    {item.type === 'video' ? <Play className="text-white" size={48} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="MediaGallerySection.tsx" /> : <ImageIcon className="text-white" size={48} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="MediaGallerySection.tsx" />}
                  </div>

                  {/* Media Type Badge */}
                  <div className="absolute top-2 right-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="30" data-magicpath-path="MediaGallerySection.tsx">
                    <div className={`px-2 py-1 rounded text-xs font-semibold ${item.type === 'video' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="31" data-magicpath-path="MediaGallerySection.tsx">
                      {item.type === 'video' ? 'VIDEO' : 'PHOTO'}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-2 left-2" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="32" data-magicpath-path="MediaGallerySection.tsx">
                    <div className={`px-2 py-1 rounded text-xs font-semibold ${item.category === 'training' ? 'bg-green-600 text-white' : 'bg-orange-600 text-white'}`} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="33" data-magicpath-path="MediaGallerySection.tsx">
                      {item.category.toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="mt-3" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="34" data-magicpath-path="MediaGallerySection.tsx">
                  <h3 className="text-white font-semibold" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="35" data-magicpath-path="MediaGallerySection.tsx">{item.title}</h3>
                  <p className="text-gray-400 text-sm capitalize" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="36" data-magicpath-path="MediaGallerySection.tsx">{item.category}</p>
                </div>
              </motion.div>)}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence data-magicpath-id="37" data-magicpath-path="MediaGallerySection.tsx">
          {selectedMedia && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={closeModal} data-magicpath-id="38" data-magicpath-path="MediaGallerySection.tsx">
              <motion.div initial={{
            scale: 0.8
          }} animate={{
            scale: 1
          }} exit={{
            scale: 0.8
          }} className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden" onClick={e => e.stopPropagation()} data-magicpath-id="39" data-magicpath-path="MediaGallerySection.tsx">
                <button onClick={closeModal} className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors" data-magicpath-id="40" data-magicpath-path="MediaGallerySection.tsx">
                  <X size={24} data-magicpath-id="41" data-magicpath-path="MediaGallerySection.tsx" />
                </button>

                <div className="aspect-video" data-magicpath-id="42" data-magicpath-path="MediaGallerySection.tsx">
                  {selectedMedia.type === 'video' ? <iframe src={selectedMedia.videoUrl} className="w-full h-full" allowFullScreen title={selectedMedia.title} data-magicpath-id="43" data-magicpath-path="MediaGallerySection.tsx" /> : <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center" data-magicpath-id="44" data-magicpath-path="MediaGallerySection.tsx">
                      <div className="text-center" data-magicpath-id="45" data-magicpath-path="MediaGallerySection.tsx">
                        <ImageIcon className="text-orange-500 mx-auto mb-4" size={64} data-magicpath-id="46" data-magicpath-path="MediaGallerySection.tsx" />
                        <p className="text-white text-lg" data-magicpath-id="47" data-magicpath-path="MediaGallerySection.tsx">{selectedMedia.title}</p>
                      </div>
                    </div>}
                </div>

                <div className="p-6" data-magicpath-id="48" data-magicpath-path="MediaGallerySection.tsx">
                  <h3 className="text-white text-xl font-bold mb-2" data-magicpath-id="49" data-magicpath-path="MediaGallerySection.tsx">{selectedMedia.title}</h3>
                  <p className="text-gray-400 capitalize" data-magicpath-id="50" data-magicpath-path="MediaGallerySection.tsx">{selectedMedia.category}</p>
                </div>
              </motion.div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </section>;
};
export default MediaGallerySection;