import { useState, useEffect } from 'react';

interface Video {
  id: string;
  title: string;
}

export function useVideoRotation(videos: Video[], intervalMs: number = 30000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (videos.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % videos.length);
    }, intervalMs);
    
    return () => clearInterval(interval);
  }, [videos.length, intervalMs]);
  
  return {
    currentIndex,
    currentVideo: videos[currentIndex],
    setCurrentIndex
  };
} 