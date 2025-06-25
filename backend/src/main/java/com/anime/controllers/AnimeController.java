package com.anime.controllers;

import com.anime.models.Anime;
import com.anime.services.AnimeService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/anime")
public class AnimeController {
    private final AnimeService animeService;
    private final Path videoPath = Paths.get("src/main/resources/static/videos/");

    public AnimeController(AnimeService animeService) {
        this.animeService = animeService;
    }

    @GetMapping
    public List<Anime> getAllAnime() {
        return animeService.getAllAnime();
    }

    @GetMapping("/{id}")
    public Optional<Anime> getAnimeById(@PathVariable Long id) {
        return animeService.getAnimeById(id);
    }

    // ✅ Serve a video file from the backend
    @GetMapping("/videos/{filename}")
    public Resource getVideo(@PathVariable String filename) throws Exception {
        Path file = videoPath.resolve(filename).normalize();
        return new UrlResource(file.toUri());
    }

    @PostMapping
    public Anime addAnime(@RequestBody Anime anime) {
        return animeService.saveAnime(anime);
    }
}
