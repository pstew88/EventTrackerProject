package com.pera.musiclist.services;

import java.util.List;

import com.pera.musiclist.entities.Song;

public interface SongService {
	
	public List<Song> getAllSongs();	
	public List<Song> titleAsc();
	public List<Song> titleDesc();
	public List<Song> artistAsc();
	public List<Song> artistDesc();
	public List<Song> releaseDateAsc();
	public List<Song> releaseDateDesc();
	public List<Song> priceAsc();
	public List<Song> priceDesc();
	public Song findSongById(Integer id);
	public Song create(Song newSong);
	public void delete(Integer id);
	public Song update(Integer id, Song upSong);
}
