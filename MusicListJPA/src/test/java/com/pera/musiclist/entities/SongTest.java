package com.pera.musiclist.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.pera.musiclist.entities.Song;

class SongTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Song song;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf=Persistence.createEntityManagerFactory("MusicPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
	em = emf.createEntityManager();
	song = em.find(Song.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
	em.close();
	}

	@Test
	void testEntity() {
		
		assertNotNull(song);
		assertEquals("Digital Love", song.getTitle());
		assertEquals("Daft Punk", song.getArtist());
		assertEquals(1.99, song.getPrice());
		assertEquals(2001, song.getReleaseDate().getYear());
	}

}
