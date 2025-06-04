import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AnimeDetail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/anime/${id}`)
      .then((res) => setAnime(res.data))
      .catch((err) => console.error("Error fetching anime:", err));
  }, [id]);

  if (!anime) return <p>Loading...</p>;

  return (
    <div>
      <h1>{anime.title}</h1>
      <p>{anime.description}</p>
      <p><strong>Episodes:</strong> {anime.episodes} | <strong>Rating:</strong> {anime.rating}⭐</p>

      {/* 🎬 Offline Video Player */}
      <video width="800" controls>
        <source src={`*${anime.videoFilename}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AnimeDetail;
