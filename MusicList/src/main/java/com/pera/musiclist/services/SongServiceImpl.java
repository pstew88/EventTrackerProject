package com.pera.musiclist.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pera.musiclist.entities.Song;
import com.pera.musiclist.repositiories.SongRepository;

@Service
public class SongServiceImpl implements SongService {

	@Autowired
	private SongRepository song;

	public List<Song> getAllSongs() {
		return song.findAll();
	}

	public Song findSongById(Integer id) {
		Optional<Song> managedSong = song.findById(id);
		return managedSong.get();
	}

	public Song create(Song newSong) {
		song.saveAndFlush(newSong);
		return newSong;
	}

	public void delete(Integer id) {
		Optional<Song> songOpt = song.findById(id);
		Song managedSong = null;
		if (songOpt.isPresent()) {
			managedSong = songOpt.get();
			song.deleteById(managedSong.getId());
		}
	}

	public Song update(Integer id, Song upSong) {
		Optional<Song> songOpt = song.findById(id);
		Song managedSong = null;
		if (songOpt.isPresent()) {
			managedSong = songOpt.get();

			managedSong.setTitle(upSong.getTitle());
			managedSong.setArtist(upSong.getArtist());
			managedSong.setPrice(upSong.getPrice());
			managedSong.setReleaseDate(upSong.getReleaseDate());
		}
		song.saveAndFlush(managedSong);
		return managedSong;
	}

	@Override
	public List<Song> titleAsc() {
		return song.findAllByOrderByTitleAsc();
	}

	@Override
	public List<Song> titleDesc() {
		return song.findAllByOrderByTitleDesc();
	}

	@Override
	public List<Song> artistAsc() {
		return song.findAllByOrderByArtistAsc();
	}

	@Override
	public List<Song> artistDesc() {
		return song.findAllByOrderByArtistDesc();
	}

	@Override
	public List<Song> releaseDateAsc() {
		return song.findAllByOrderByReleaseDateAsc();
	}

	@Override
	public List<Song> releaseDateDesc() {
		return song.findAllByOrderByReleaseDateDesc();
	}

	@Override
	public List<Song> priceAsc() {
		return song.findAllByOrderByPriceAsc();
	}

	@Override
	public List<Song> priceDesc() {
		return song.findAllByOrderByPriceDesc();
	}
}
