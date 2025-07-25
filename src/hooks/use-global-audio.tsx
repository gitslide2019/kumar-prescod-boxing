import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface GlobalAudioContextType {
  // Master audio control (sponsor video)
  masterAudioEnabled: boolean;
  setMasterAudioEnabled: (enabled: boolean) => void;
  
  // Section-specific audio controls
  sectionAudio: Record<string, boolean>;
  setSectionAudio: (section: string, enabled: boolean) => void;
  
  // Helper to manage audio conflicts
  playSection: (section: string) => void;
  stopSection: (section: string) => void;
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
  const [masterAudioEnabled, setMasterAudioEnabled] = useState(true); // Sponsor video starts with sound
  const [sectionAudio, setSectionAudioState] = useState<Record<string, boolean>>({});

  const setSectionAudio = useCallback((section: string, enabled: boolean) => {
    setSectionAudioState(prev => ({
      ...prev,
      [section]: enabled
    }));
  }, []);

  const playSection = useCallback((section: string) => {
    // When a section starts playing audio, optionally mute master audio
    setSectionAudio(section, true);
    // Optionally pause master audio when section audio plays
    // setMasterAudioEnabled(false);
  }, [setSectionAudio]);

  const stopSection = useCallback((section: string) => {
    setSectionAudio(section, false);
  }, [setSectionAudio]);

  const value = {
    masterAudioEnabled,
    setMasterAudioEnabled,
    sectionAudio,
    setSectionAudio,
    playSection,
    stopSection,
  };

  return (
    <GlobalAudioContext.Provider value={value}>
      {children}
    </GlobalAudioContext.Provider>
  );
}