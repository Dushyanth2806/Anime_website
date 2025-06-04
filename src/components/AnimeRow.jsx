

// const AnimeRow = ({ title, animes }) => {
//   return (
//     <div className="anime-row">
//       <h2>{title}</h2>
//       <div className="row__posters">
//         {animes.map((anime, index) => (
//           <a key={index} className="animelink" href={anime.link}>
//             <img className="row__poster" src={anime.image} alt={anime.name} />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnimeRow;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./AnimeRow.css";

const AnimeRow = ({ title, animes }) => {
  const navigate = useNavigate();

  const handleClick = (anime) => {
    navigate(`/player?video=${encodeURIComponent(anime.link)}`);
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
            onClick={() => handleClick(anime)}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeRow;



// import { useNavigate } from "react-router-dom";

// const AnimeRow = () => {
//   const navigate = useNavigate();

//   const goToAnime = (animeName) => {
//     navigate(`/video/${animeName.toLowerCase().replace(" ", "-")}`);
//   };

//   return (
//     <div className="anime-row">
//       <img
//         src="/images/Naruto.jpg"
//         alt="Naruto"
//         className="anime-image"
//         onClick={() => goToAnime("Naruto")}
//       />
//     </div>
//   );
// };

// export default AnimeRow;
