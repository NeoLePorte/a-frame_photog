import React from 'react';

export default function PlayButton({ isPlaying, onClick }) {
  const playButton = isPlaying ? (
    <svg viewBox="0 0 24 24">
      <path fill="#fff" d="M3 22v-20l18 10-18 10z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24">
      <path fill="#fff" d="M3 22h18v-20h-18v20z" />
    </svg>
  );

  return (
    <button onClick={onClick}>
      {playButton}
    </button>
  );
}
