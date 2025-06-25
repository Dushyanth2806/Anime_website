import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import AnimeRow from "./components/AnimeRow";
import SearchBar from "./components/SearchBar";
import VideoPlayer from "./pages/VideoPlayer";
import "./App.css";

const animeCategories = [
  {
    title: "Favorites",
    animes: [
      { name: "Solo Leveling", image: "/images/Solo Leveling.jpg", link: "" },
      { name: "The Beginning After The End", image: "/images/Beginning After The End.jpg", link: "" },
      { name: "Naruto Shippuden", image: "/images/Naruto Shippuden.jpg", link: "" },
      { name: "Vinland Saga", image: "/images/Vinland Saga.jpg", link: "" },
      { name: "God Of High School", image: "/images/God Of High School.jpg", link: "" },
      { name: "One Piece", image: "/images/One Piece.jpg", link: "" },
      { name: "Dragon Ball Super", image: "/images/Dragon Ball Super.jpg", link: "" },
    ],
  },
  {
    title: "Trending",
    animes: [
      { name: "Demon Slayer", image: "/images/Demon Slayer.jpg", link: "" },
      { name: "Bleach", image: "/images/Bleach.jpg", link: "" },
      { name: "Boruto", image: "/images/Boruto.jpg", link: "" },
      { name: "Blue Lock", image: "/images/Blue Lock.jpg", link: "" },
      { name: "JJK", image: "/images/JJK.jpg", link: "" },
      { name: "Black Clover", image: "/images/Black Clover.jpg", link: "" },
      { name: "SAO", image: "/images/SAO.jpg", link: "" },
    ],
  },
  {
    title: "Popular",
    animes: [
      { name: "Vinland Saga", image: "/images/Vinland Saga.jpg", link: "" },
      { name: "MDragon Ball", image: "/images/Dragon Ball Super.jpg", link: "" },
      { name: "God of High School", image: "/images/God Of High School.jpg", link: "" },
      { name: "One piece", image: "/images/One Piece.jpg", link: "" },
      { name: "Naruto", image: "/images/Naruto Shippuden.jpg", link: "" },
      { name: "New Gate", image: "/images/New Gate.jpg", link: "" },
      { name: "Tower Of God", image: "/images/Tower Of God.jpg", link: "" },
    ],
  },
  {
    title: "Top Rated",
    animes: [
      { name: "Hunter X Hunter", image: "/images/HxH.jpg", link: "" },
      { name: "Naruto ", image: "/images/Naruto Shippuden.jpg", link: "" },
      { name: "One Piece", image: "/images/One Piece.jpg", link: "" },
      { name: "Bleach", image: "/images/Bleach.jpg", link: "" },
      { name: "Boruto", image: "/images/Boruto.jpg", link: "" },
      { name: "Blue Lock", image: "/images/Blue Lock.jpg", link: "" },
      { name: "JJK", image: "/images/JJK.jpg", link: "" },
    ],
  },
  {
    title: "New Releases",
    animes: [
      { name: "2099", image: "/images/2099.jpg", link: "" },
      { name: "SAO", image: "/images/SAO.jpg", link: "" },
      { name: "Undead", image: "/images/Undead.jpg", link: "" },
      { name: "Sakamoto", image: "/images/Sakamoto.jpg", link: "" },
      { name: "Your Name", image: "/images/Your Name.jpg", link: "" },
      { name: "One piece", image: "/images/DS Training.jpg", link: "" },
      { name: "Naruto", image: "/images/Steins Gate.jpg", link: "" },
    ],
  }
];

const Home = () => (
  <div className="app">
    <Header />
    <SearchBar />
    <HeroSlider />
    {animeCategories.map((category, index) => (
      <AnimeRow key={index} title={category.title} animes={category.animes} />
    ))}
  </div>
);

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/player" element={<VideoPlayer />} />
  </Routes>
);

export default App;