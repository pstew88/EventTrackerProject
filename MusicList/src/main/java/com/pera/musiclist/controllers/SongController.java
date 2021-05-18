package com.pera.musiclist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pera.musiclist.entities.Song;
import com.pera.musiclist.services.SongServiceImpl;

@CrossOrigin({ "*", "http://localhost:4205" })
@RequestMapping("api")
@RestController
public class SongController {

	@Autowired
	private SongServiceImpl svc;

	@GetMapping("ping")
	public String ping() {
		return "pong!";
	}

	// songs
	@GetMapping("songs")
	public List<Song> getAllSongs() {
		return svc.getAllSongs();
	}

	// songs
	@GetMapping("songs/{id}")
	public Song findSongById(@PathVariable Integer id) {
		return svc.findSongById(id);
	}

	// songs
	@PostMapping("songs")
	public Song create(@RequestBody Song newSong) {
		//to create random failure
		if (Math.random()<0.2) {
			throw new RuntimeException("Random add failure");
		}
		return svc.create(newSong);
	}

	// songs
	@DeleteMapping("songs/{id}")
	public void delete(@PathVariable Integer id) {
		svc.delete(id);
	}

	// songs
	@PutMapping("songs/{id}")
	public Song update(@PathVariable int id, @RequestBody Song upSong) {
		return svc.update(id, upSong);
	}
	
	@GetMapping("songs/titleAsc")
	public List<Song> titleAsc() {
		return svc.titleAsc();
	}
	
	@GetMapping("songs/titleDesc")
	public List<Song> titleDesc() {
		return svc.titleDesc();
	}
	
	@GetMapping("songs/artistAsc")
	public List<Song> artistAsc() {
		return svc.artistAsc();
	}
	
	@GetMapping("songs/artistDesc")
	public List<Song> artistDesc() {
		return svc.artistDesc();
	}
	
	@GetMapping("songs/releaseDateAsc")
	public List<Song> releaseDateAsc() {
		return svc.releaseDateAsc();
	}
	
	@GetMapping("songs/releaseDateDesc")
	public List<Song> releaseDateDesc() {
		return svc.releaseDateDesc();
	}
	
	@GetMapping("songs/priceAsc")
	public List<Song> priceAsc() {
		return svc.priceAsc();
	}
	
	@GetMapping("songs/priceDesc")
	public List<Song> priceDesc() {
		return svc.priceDesc();
	}
}
