// // import React, { useState } from "react";
// // import VideoPlayer from "./components/VideoPlayer";
// // import "./VideoPlayer.css";

// // const animeList = [
// //   { name: "Naruto", image: "/images/naruto.jpg", id: "naruto" },
// //   { name: "One Piece", image: "/images/onepiece.jpg", id: "onepiece" },
// // ];

// // function App() {
// //   const [selectedAnime, setSelectedAnime] = useState(null);

// //   return (
// //     <div className="app-container">
// //       <h1 className="title">Anime Library</h1>

// //       {!selectedAnime ? (
// //         <div className="anime-list">
// //           {animeList.map((anime) => (
// //             <img
// //               key={anime.id}
// //               src={anime.image}
// //               alt={anime.name}
// //               className="anime-image"
// //               onClick={() => setSelectedAnime(anime.id)}
// //             />
// //           ))}
// //         </div>
// //       ) : (
// //         <VideoPlayer animeId={selectedAnime} />
// //       )}
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState } from "react";
// import HeroSlider from "./components/HeroSlider";
// import VideoPlayer from "./components/VideoPlayer";
// import "./VideoPlayer.css";

// const animeList = [
//   { name: "Naruto", image: "/images/naruto.jpg", id: "naruto" },
//   { name: "One Piece", image: "/images/onepiece.jpg", id: "onepiece" },
//   { name: "Attack on Titan", image: "/images/aot.jpg", id: "aot" },
// ];

// function App() {
//   const [selectedAnime, setSelectedAnime] = useState(null);

//   return (
//     <div className="app-container">
//       <h1 className="title">Anime Streaming</h1>

//       {!selectedAnime ? (
//         <HeroSlider animeList={animeList} onSelectAnime={setSelectedAnime} />
//       ) : (
//         <VideoPlayer animeId={selectedAnime} onGoBack={() => setSelectedAnime(null)} />
//       )}
//     </div>
//   );
// }

// export default App;


// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import VideoPlayer from "./VideoPlayer";
// // import Home from "./Home";

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/video/:anime" element={<VideoPlayer />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
