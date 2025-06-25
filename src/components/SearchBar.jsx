import React, { useState, useMemo } from "react";
import "./SearchBar.css";

const animeList = [
  "Your Name",
  "Solo Leveling",
  "Dandadan",
  "Attack on Titan",
  "Demon Slayer",
  "One Piece",
  "Jujutsu Kaisen",
  "Naruto",
  "Death Note",
  "Chainsaw Man",
  "Tokyo Ghoul",
];

const SearchBar = () => {
  const [search, setSearch] = useState("");

  // Filter results dynamically as the user types
  const filteredAnime = useMemo(() => {
    return animeList.filter((anime) =>
      anime.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="search-results">
        {search.length > 0 ? (
          filteredAnime.length > 0 ? (
            filteredAnime.map((anime, index) => (
              <p key={index} className="result-item">{anime}</p>
            ))
          ) : (
            <p className="no-results">No results found</p>
          )
        ) : (
          <p className="placeholder-text">Start typing to search...</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
