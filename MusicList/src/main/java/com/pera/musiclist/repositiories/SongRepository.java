package com.pera.musiclist.repositiories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pera.musiclist.entities.Song;

public interface SongRepository extends JpaRepository<Song, Integer> {

	List<Song> findSongByReleaseDateLike(String releaseDate);
	List<Song> findAllByOrderByTitleAsc();
	List<Song> findAllByOrderByTitleDesc();
	List<Song> findAllByOrderByArtistAsc();
	List<Song> findAllByOrderByArtistDesc();
	List<Song> findAllByOrderByReleaseDateAsc();
	List<Song> findAllByOrderByReleaseDateDesc();
	List<Song> findAllByOrderByPriceAsc();
	List<Song> findAllByOrderByPriceDesc();
}
