

import React from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import AnimeRow from "./components/AnimeRow";
import SearchBar from "./components/SearchBar";
import "./App.css";

const animeCategories = [
  {
    title: "Favorites",
    animes: [
      { name: "Solo Leveling", image: "/images/Solo Leveling.jpg", link: "https://hianime.to/watch/magi-the-labyrinth-of-magic-425?ep=9236&ep=9236" },
      { name: "The Beginning After The End", image: "/images/Beginning After The End.jpg", link: "anime/backend/src/main/resourses/static/videos/zoro.mp4" },
      { name: "Naruto Shippuden", image: "/images/Naruto Shippuden.jpg", link: "" },
      { name: "Vinland Saga", image: "/images/Vinland Saga.jpg", link: "/anime/vinland-saga" },
      { name: "God Of High School", image: "/images/God Of High School.jpg", link: "/anime/god-of-high-school" },
      { name: "One Piece", image: "/images/One Piece.jpg", link: "" },
      { name: "Dragon Ball Super", image: "/images/Dragon Ball Super.jpg", link: "anime/backend/src/main/resourses/static/videos/zoro.mp4" },
    ],
  },
  {
    title: "Trending",
    animes: [
      { name: "Demon Slayer", image: "/images/Demon Slayer.jpg", link: "/anime/demon-slayer" },
      { name: "Bleach", image: "/images/Bleach.jpg", link: "/anime/bleach" },
      { name: "Boruto", image: "/images/Boruto.jpg", link: "/anime/boruto" },
      { name: "Blue Lock", image: "/images/Blue Lock.jpg", link: "/anime/blue-lock" },
      { name: "JJK", image: "/images/JJK.jpg", link: "/anime/jjk" },
      { name: "Black Clover", image: "/images/Black Clover.jpg", link: "/anime/black-clover" },
      { name: "SAO", image: "/images/SAO.jpg", link: "/anime/sao" },
    ],
  },
  {
  title: "Popular",
  animes: [
      { name: "Vinland Saga", image: "/images/Vinland Saga.jpg", link: "/anime/vinland-saga" },
      { name: "MDragon Ball", image: "/images/Dragon Ball Super.jpg", link: "/anime/dragon-ball-super" },
      { name: "God of High School", image: "/images/God Of High School.jpg", link: "/anime/god-of-high-school" },
      { name: "One piece", image: "/images/One Piece.jpg", link: "/anime/one-piece" },
      { name: "Naruto", image: "/images/Naruto Shippuden.jpg", link: "/anime/naruto" },
      { name: "New Gate", image: "/images/New Gate.jpg", link: "/anime/new-gate" },
      { name: "Tower Of God", image: "/images/Tower Of God.jpg", link: "/anime/tower-of-god" },
    ],
  },
  {
    title: "Top Rated",
    animes: [
      { name: "Hunter X Hunter", image: "/images/HxH.jpg", link: "/anime/hunter-x-hunter" },
      { name: "Naruto ", image: "/images/Naruto Shippuden.jpg", link: "/anime/naruto-shippuden" },
      { name: "One Piece", image: "/images/One Piece.jpg", link: "/anime/one-piece" },
      { name: "Bleach", image: "/images/Bleach.jpg", link: "/anime/bleach" },
      { name: "Boruto", image: "/images/Boruto.jpg", link: "/anime/boruto" },
      { name: "Blue Lock", image: "/images/Blue Lock.jpg", link: "/anime/blue-lock" },
      { name: "JJK", image: "/images/JJK.jpg", link: "/anime/jjk" },
    ],
  },
  {
    title: "New Releases",
    animes: [
      { name: "2099", image: "/images/2099.jpg", link: "/anime/2099" },
      { name: "SAO", image: "/images/SAO.jpg", link: "/anime/sao" },
      { name: "Undead", image: "/images/Undead.jpg", link: "/anime/undead" },
      { name: "Sakamoto", image: "/images/Sakamoto.jpg", link: "/anime/sakamoto" },
      { name: "Your Name", image: "/images/Your Name.jpg", link: "/anime/your-name" },
      { name: "One piece", image: "/images/DS Training.jpg", link: "/anime/demon-slayer-training" },
      { name: "Naruto", image: "/images/Steins Gate.jpg", link: "/anime/steins-gate" },
    ],
  }
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <HeroSlider />
      {animeCategories.map((category, index) => (
        <AnimeRow key={index} title={category.title} animes={category.animes} />
      ))}
    </div>
  );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import HeroSlider from "./components/HeroSlider";
// import AnimeRow from "./components/AnimeRow";
// import SearchBar from "./components/SearchBar";
// import VideoPlayer from "./pages/VideoPlayer"; // Import Video Player
// import "./App.css";

// const animeCategories = [
//   {
//     title: "Favorites",
//     animes: [
//       { name: "Solo Leveling", image: "/images/Solo Leveling.jpg", link: "https://hianime.to/watch/magi-the-labyrinth-of-magic-425?ep=9236&ep=9236" },
//       { name: "The Beginning After The End", image: "/images/Beginning After The End.jpg", link: "anime/backend/src/main/resourses/static/videos/zoro.mp4" },
//       { name: "Naruto Shippuden", image: "/images/Naruto Shippuden.jpg", link: "" },
//       { name: "Vinland Saga", image: "/images/Vinland Saga.jpg", link: "/anime/vinland-saga" },
//       { name: "God Of High School", image: "/images/God Of High School.jpg", link: "/anime/god-of-high-school" },
//       { name: "One Piece", image: "/images/One Piece.jpg", link: "" },
//       { name: "Dragon Ball Super", image: "/images/Dragon Ball Super.jpg", link: "anime/backend/src/main/resourses/static/videos/zoro.mp4" },
//     ],
//   },
//   {
//     title: "Trending",
//     animes: [
//       { name: "Demon Slayer", image: "/images/Demon Slayer.jpg", link: "/anime/demon-slayer" },
//       { name: "Bleach", image: "/images/Bleach.jpg", link: "/anime/bleach" },
//       { name: "Boruto", image: "/images/Boruto.jpg", link: "/anime/boruto" },
//       { name: "Blue Lock", image: "/images/Blue Lock.jpg", link: "/anime/blue-lock" },
//       { name: "JJK", image: "/images/JJK.jpg", link: "/anime/jjk" },
//       { name: "Black Clover", image: "/images/Black Clover.jpg", link: "/anime/black-clover" },
//       { name: "SAO", image: "/images/SAO.jpg", link: "/anime/sao" },
//     ],
//   },
//   {
//   title: "Popular",
//   animes: [
//       { name: "Vinland Saga", image: "/images/Vinland Saga.jpg", link: "/anime/vinland-saga" },
//       { name: "MDragon Ball", image: "/images/Dragon Ball Super.jpg", link: "/anime/dragon-ball-super" },
//       { name: "God of High School", image: "/images/God Of High School.jpg", link: "/anime/god-of-high-school" },
//       { name: "One piece", image: "/images/One Piece.jpg", link: "/anime/one-piece" },
//       { name: "Naruto", image: "/images/Naruto Shippuden.jpg", link: "/anime/naruto" },
//       { name: "New Gate", image: "/images/New Gate.jpg", link: "/anime/new-gate" },
//       { name: "Tower Of God", image: "/images/Tower Of God.jpg", link: "/anime/tower-of-god" },
//     ],
//   },
//   {
//     title: "Top Rated",
//     animes: [
//       { name: "Hunter X Hunter", image: "/images/HxH.jpg", link: "/anime/hunter-x-hunter" },
//       { name: "Naruto ", image: "/images/Naruto Shippuden.jpg", link: "/anime/naruto-shippuden" },
//       { name: "One Piece", image: "/images/One Piece.jpg", link: "/anime/one-piece" },
//       { name: "Bleach", image: "/images/Bleach.jpg", link: "/anime/bleach" },
//       { name: "Boruto", image: "/images/Boruto.jpg", link: "/anime/boruto" },
//       { name: "Blue Lock", image: "/images/Blue Lock.jpg", link: "/anime/blue-lock" },
//       { name: "JJK", image: "/images/JJK.jpg", link: "/anime/jjk" },
//     ],
//   },
//   {
//     title: "New Releases",
//     animes: [
//       { name: "2099", image: "/images/2099.jpg", link: "/anime/2099" },
//       { name: "SAO", image: "/images/SAO.jpg", link: "/anime/sao" },
//       { name: "Undead", image: "/images/Undead.jpg", link: "/anime/undead" },
//       { name: "Sakamoto", image: "/images/Sakamoto.jpg", link: "/anime/sakamoto" },
//       { name: "Your Name", image: "/images/Your Name.jpg", link: "/anime/your-name" },
//       { name: "One piece", image: "/images/DS Training.jpg", link: "/anime/demon-slayer-training" },
//       { name: "Naruto", image: "/images/Steins Gate.jpg", link: "/anime/steins-gate" },
//     ],
//   }
// ];


// const Home = () => (
//   <div className="app">
//     <Header />
//     <SearchBar />
//     <HeroSlider />
//     {animeCategories.map((category, index) => (
//       <AnimeRow key={index} title={category.title} animes={category.animes} />
//     ))}
//   </div>
// );

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/player" element={<VideoPlayer />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import HeroSlider from "./components/HeroSlider";
// import AnimeRow from "./components/AnimeRow";
// import SearchBar from "./components/SearchBar";
// import VideoPlayer from "./pages/VideoPlayer"; // Import Video Player
// import "./App.css";

// const animeCategories = [
//   {
//     title: "Favorites",
//     animes: [
//       { name: "Solo Leveling", image: "/images/Solo Leveling.jpg", link: "/player?anime=solo-leveling" },
//       { name: "The Beginning After The End", image: "/images/Beginning After The End.jpg", link: "/player?anime=beginning-after-the-end" },
//       { name: "Naruto Shippuden", image: "/images/Naruto Shippuden.jpg", link: "/player?anime=naruto-shippuden" },
//       { name: "Vinland Saga", image: "/images/Vinland Saga.jpg", link: "/player?anime=vinland-saga" },
//       { name: "God Of High School", image: "/images/God Of High School.jpg", link: "/player?anime=god-of-high-school" },
//       { name: "One Piece", image: "/images/One Piece.jpg", link: "/player?anime=one-piece" },
//     ],
//   },
// ];

// const Home = () => (
//   <div className="app">
//     <Header />
//     <SearchBar />
//     <HeroSlider />
//     {animeCategories.map((category, index) => (
//       <AnimeRow key={index} title={category.title} animes={category.animes} />
//     ))}
//   </div>
// );

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/player" element={<VideoPlayer />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
