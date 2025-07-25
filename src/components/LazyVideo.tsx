import React, { useState } from 'react';

interface LazyVideoProps {
  videoId: string;
  title: string;
  className?: string;
  allowFullScreen?: boolean;
  frameBorder?: string;
  allow?: string;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  videoId,
  title,
  className = '',
  allowFullScreen = true,
  frameBorder = '0',
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0&enablejsapi=1`;

  if (hasError) {
    return (
      <div className={`${className} bg-gray-800 flex items-center justify-center`}>
        <div className="text-center text-white">
          <p>Failed to load video</p>
          <button
            onClick={() => setHasError(false)}
            className="mt-2 bg-orange-500 px-3 py-1 rounded text-sm hover:bg-orange-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-2"></div>
            <p>Loading video...</p>
          </div>
        </div>
      )}
      
      <iframe
        src={videoUrl}
        title={title}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        frameBorder={frameBorder}
        allow={allow}
        allowFullScreen={allowFullScreen}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}; 