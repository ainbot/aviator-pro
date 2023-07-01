import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import "./AudioPlayer.css";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="./ainbot-intro.mp3"
        onEnded={handleAudioEnd}
      />
      <button className={`play-button ${isPlaying ? "playing" : ""}`} onClick={togglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default AudioPlayer;
