import React from "react";
import { useNavigate } from "react-router-dom";
import "./AnimeRow.css";

const AnimeRow = ({ title, animes }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/player?video=/videos/episode1.mp4');
  };

  return (
    <div className="anime-row">
      <h2>{title}</h2>
      <div className="anime-list">
        {animes.map((anime, index) => (
          <img
            key={index}
            src={anime.image}
            alt={anime.name}
            className="anime-image"
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeRow;
