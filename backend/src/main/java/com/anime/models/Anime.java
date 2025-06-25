package com.anime.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "anime")
@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
public class Anime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String videoFilename; // Stores the filename (e.g., "naruto.mp4")
    private int episodes;
    private double rating;
    private String lastUpdated;
}
