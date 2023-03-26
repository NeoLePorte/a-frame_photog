import React, { createContext, useState } from 'react';

export const VideoContext = createContext({
  isPlaying: false,
  playVideo: () => {},
  pauseVideo: () => {},
});

export const VideoProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
    console.log('playVideo', "isPlaying: ", isPlaying);
  };

  const pauseVideo = () => {
    setIsPlaying(false);
    console.log('pauseVideo', "isPlaying: ", isPlaying);
  };

  return (
    <VideoContext.Provider value={{ isPlaying, playVideo, pauseVideo }}>
      {children}
    </VideoContext.Provider>
  );
};