package com.anime.services;

import com.anime.models.Anime;
import com.anime.repositories.AnimeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimeService {
    private final AnimeRepository animeRepository;

    public AnimeService(AnimeRepository animeRepository) {
        this.animeRepository = animeRepository;
    }

    // ✅ Get all anime
    public List<Anime> getAllAnime() {
        return animeRepository.findAll();
    }

    // ✅ Get anime by ID
    public Optional<Anime> getAnimeById(Long id) {
        return animeRepository.findById(id);
    }

    // ✅ Add or update an anime
    public Anime saveAnime(Anime anime) {
        return animeRepository.save(anime);
    }

    // ✅ Delete anime by ID
    public void deleteAnime(Long id) {
        animeRepository.deleteById(id);
    }
}
