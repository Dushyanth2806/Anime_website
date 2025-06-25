import React from "react";
import { useLocation } from "react-router-dom";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const videoSrc = params.get("video") || "/videos/episode1.mp4";

  return (
    <div className="video-container">
      <h1>Zoro Anime</h1>
      
      {/* Video Player */}
      <video controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <a href="/">Go Back</a>
    </div>
  );
};

export default VideoPlayer;
