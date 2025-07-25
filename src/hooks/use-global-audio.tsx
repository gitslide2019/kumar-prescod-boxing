import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect, useRef } from 'react';

interface GlobalAudioContextType {
  // Master audio control (sponsor video audio for entire site)
  masterAudioEnabled: boolean;
  setMasterAudioEnabled: (enabled: boolean) => void;
  
  // Global user interaction tracking
  userHasInteracted: boolean;
  setUserHasInteracted: (interacted: boolean) => void;
  
  // Audio notification state
  showAudioNotification: boolean;
  setShowAudioNotification: (show: boolean) => void;
  
  // Section-specific audio controls
  sectionAudio: Record<string, boolean>;
  setSectionAudio: (section: string, enabled: boolean) => void;
  
  // Master audio video reference
  sponsorVideoId: string;
  
  // Mobile detection and audio fallback
  isMobile: boolean;
  audioElement: HTMLAudioElement | null;
  
  // Helper to manage audio conflicts
  playSection: (section: string) => void;
  stopSection: (section: string) => void;
  enableMasterAudio: () => void;
  enableMobileAudio: () => void;
}

const GlobalAudioContext = createContext<GlobalAudioContextType | undefined>(undefined);

export function useGlobalAudio() {
  const context = useContext(GlobalAudioContext);
  if (context === undefined) {
    throw new Error('useGlobalAudio must be used within a GlobalAudioProvider');
  }
  return context;
}

export function GlobalAudioProvider({ children }: { children: ReactNode }) {
  const [masterAudioEnabled, setMasterAudioEnabled] = useState(false); // Start muted, enable after interaction
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [showAudioNotification, setShowAudioNotification] = useState(true);
  const [sectionAudio, setSectionAudioState] = useState<Record<string, boolean>>({});
  
  // Mobile detection
  const [isMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
    return false;
  });

  // HTML5 audio element for mobile fallback
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Sponsor video that serves as master audio for entire site
  const sponsorVideoId = 'C663b1dAhtA'; // "Turning Pro the Raw Way"

  // Global click listener for user interaction detection
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!userHasInteracted) {
        setUserHasInteracted(true);
        setShowAudioNotification(false);
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    if (!userHasInteracted) {
      document.addEventListener('click', handleFirstInteraction);
      document.addEventListener('touchstart', handleFirstInteraction);
    }

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [userHasInteracted]);

  const setSectionAudio = useCallback((section: string, enabled: boolean) => {
    setSectionAudioState(prev => ({
      ...prev,
      [section]: enabled
    }));
  }, []);

  const playSection = useCallback((section: string) => {
    setSectionAudio(section, true);
    // Optionally lower master audio when section audio plays
  }, [setSectionAudio]);

  const stopSection = useCallback((section: string) => {
    setSectionAudio(section, false);
  }, [setSectionAudio]);

  const enableMasterAudio = useCallback(() => {
    if (userHasInteracted) {
      setMasterAudioEnabled(true);
    }
  }, [userHasInteracted]);

  // Mobile audio activation - creates HTML5 audio element for mobile fallback
  const enableMobileAudio = useCallback(() => {
    if (isMobile && userHasInteracted && !audioElementRef.current) {
      // Create HTML5 audio element for mobile compatibility
      const audio = new Audio();
      audio.src = `https://www.youtube.com/watch?v=${sponsorVideoId}`;
      audio.loop = true;
      audio.volume = 0.7;
      audioElementRef.current = audio;
      
      // Try to play the audio
      audio.play().catch(error => {
        console.log('Mobile audio autoplay blocked:', error);
      });
    }
    setMasterAudioEnabled(true);
  }, [isMobile, userHasInteracted, sponsorVideoId]);

  const value = {
    masterAudioEnabled,
    setMasterAudioEnabled,
    userHasInteracted,
    setUserHasInteracted,
    showAudioNotification,
    setShowAudioNotification,
    sectionAudio,
    setSectionAudio,
    sponsorVideoId,
    isMobile,
    audioElement: audioElementRef.current,
    playSection,
    stopSection,
    enableMasterAudio,
    enableMobileAudio,
  };

  return (
    <GlobalAudioContext.Provider value={value}>
      {children}
    </GlobalAudioContext.Provider>
  );
}