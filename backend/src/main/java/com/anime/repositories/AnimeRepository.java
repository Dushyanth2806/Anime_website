package com.anime.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.anime.models.Anime;

public interface AnimeRepository extends JpaRepository<Anime, Long> {}
