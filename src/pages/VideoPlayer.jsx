//1
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./VideoPlayer.css";

// const VideoPlayer = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const defaultVideo = params.get("video") || "/videos/episode1.mp4";

//   const [videoSrc, setVideoSrc] = useState(defaultVideo);

//   const changeEpisode = (episodeNumber) => {
//     setVideoSrc(`/videos/episode${episodeNumber}.mp4`);
//   };

//   return (
//     <div className="video-container">
//       <h1>Zoro Anime</h1>
      
//       {/* Video Player */}
//       <video key={videoSrc} controls>
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Episode Buttons */}
//       <div className="episodes">
//         {[...Array(10).keys()].map((i) => (
//           <span
//             key={i + 1}
//             className="episode"
//             onClick={() => changeEpisode(i + 1)}
//           >
//             Episode {i + 1}
//           </span>
//         ))}
//       </div>

//       <a href="/">Go Back</a>
//     </div>
//   );
// };

// export default VideoPlayer;



// import React, { useState } from "react";
// import "./VideoPlayer.css";

// const VideoPlayer = ({ animeId }) => {
//   const [videoSrc, setVideoSrc] = useState(`/videos/${animeId}-episode1.mp4`);

//   return (
//     <div className="video-container">
//       <a href="/" className="back-link">Go Back</a>
//       <h2 className="video-title">{animeId.replace("-", " ").toUpperCase()}</h2>
      
//       {/* Video Player */}
//       <div className="video-wrapper">
//         <video key={videoSrc} controls>
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Episode List */}
//       <div className="episodes">
//         {[...Array(10).keys()].map((i) => (
//           <span
//             key={i + 1}
//             className="episode"
//             onClick={() => setVideoSrc(`/videos/${animeId}-episode${i + 1}.mp4`)}
//           >
//             Episode {i + 1}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;


// import React, { useState } from "react";
// import "./VideoPlayer.css";

// const VideoPlayer = ({ animeId, onGoBack }) => {
//   const [videoSrc, setVideoSrc] = useState(`/videos/${animeId}-episode1.mp4`);

//   return (
//     <div className="video-container">
//       <a href="#" className="back-link" onClick={onGoBack}>Go Back</a>
//       <h2 className="video-title">{animeId.replace("-", " ").toUpperCase()}</h2>
      
//       <div className="video-wrapper">
//         <video key={videoSrc} controls>
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div className="episodes">
//         {[...Array(10).keys()].map((i) => (
//           <span
//             key={i + 1}
//             className="episode"
//             onClick={() => setVideoSrc(`/videos/${animeId}-episode${i + 1}.mp4`)}
//           >
//             Episode {i + 1}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;


// import React, { useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import "./VideoPlayer.css";

// const VideoPlayer = () => {
//   const { anime } = useParams(); // Get anime name from URL
//   const location = useLocation();
//   const navigate = useNavigate();

//   const params = new URLSearchParams(location.search);
//   const defaultVideo = params.get("video") || `/videos/${anime}/episode1.mp4`;

//   const [videoSrc, setVideoSrc] = useState(defaultVideo);

//   const changeEpisode = (episodeNumber) => {
//     setVideoSrc(`/videos/${anime}/episode${episodeNumber}.mp4`);
//   };

//   return (
//     <div className="video-container">
//       <h1>{anime.replace("-", " ")}</h1>

//       {/* Video Player */}
//       <video key={videoSrc} controls>
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Episode Buttons */}
//       <div className="episodes">
//         {[...Array(10).keys()].map((i) => (
//           <span
//             key={i + 1}
//             className="episode"
//             onClick={() => changeEpisode(i + 1)}
//           >
//             Episode {i + 1}
//           </span>
//         ))}
//       </div>

//       <a href="/">Go Back</a>
//     </div>
//   );
// };

// export default VideoPlayer;



// import React, { useState } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import "./VideoPlayer.css";

// const VideoPlayer = () => {
//   const { anime } = useParams(); // Get anime name from URL
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const defaultVideo = params.get("video") || `/videos/${anime}/episode1.mp4`;

//   const [videoSrc, setVideoSrc] = useState(defaultVideo);
//   const [message, setMessage] = useState(""); // State for "Coming Soon" message

//   const changeEpisode = (episodeNumber) => {
//     if (episodeNumber > 5) {
//       setMessage("Episode is coming soon...");
//       return;
//     }
//     setMessage(""); // Clear message when selecting available episodes
//     setVideoSrc(`/videos/${anime}/episode${episodeNumber}.mp4`);
//   };

//   return (
//     <div className="video-container">
//       <h1>{anime.replace("-", " ")}</h1>

//       {/* Video Player */}
//       <video key={videoSrc} controls>
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Display "Coming Soon" message if applicable */}
//       {message && <p className="coming-soon">{message}</p>}

//       {/* Episode Buttons */}
//       <div className="episodes">
//         {[...Array(10).keys()].map((i) => (
//           <span
//             key={i + 1}
//             className={`episode ${i + 1 > 5 ? "disabled" : ""}`}
//             onClick={() => changeEpisode(i + 1)}
//           >
//             Episode {i + 1}
//           </span>
//         ))}
//       </div>

//       <a href="/">Go Back</a>
//     </div>
//   );
// };

// export default VideoPlayer;



// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./VideoPlayer.css";

// const VideoPlayer = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const anime = params.get("anime") || "default-anime";

//   const [videoSrc, setVideoSrc] = useState(`/videos/${anime}/episode1.mp4`);

//   const changeEpisode = (episodeNumber) => {
//     setVideoSrc(`/videos/${anime}/episode${episodeNumber}.mp4`);
//   };

//   return (
//     <div className="video-container">
//       <h1>{anime.replace("-", " ").toUpperCase()}</h1>
      
//       {/* Video Player */}
//       <video key={videoSrc} controls>
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Episode Buttons */}
//       <div className="episodes">
//         {[...Array(12).keys()].map((i) => (
//           <span
//             key={i + 1}
//             className="episode"
//             onClick={() => changeEpisode(i + 1)}
//           >
//             Episode {i + 1}
//           </span>
//         ))}
//       </div>

//       <a href="/">Go Back</a>
//     </div>
//   );
// };

// export default VideoPlayer;
