package com.skilldistillery.raid.entities;

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

class RaidTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Raid raid;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf=Persistence.createEntityManagerFactory("RaidPU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
	em = emf.createEntityManager();
	raid = em.find(Raid.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
	em.close();
	}

	@Test
	void testEntity() {
		
		assertNotNull(raid);
		assertEquals("ShirtlessGorefist", raid.getName());
		assertEquals(2020, raid.getTimeStarted().getYear());
		assertEquals(2020, raid.getTimeEnded().getYear());
		assertEquals(20, raid.getNumberOfAttendees());
		assertEquals(4, raid.getNumberOfTanks());
		assertEquals(3, raid.getNumberOfHealers());
		assertEquals(13, raid.getNumberOfDps());
		assertEquals(6, raid.getNumberBossesKilled());
		assertEquals("Bracer of Brutality", raid.getBestItemDropped());
	}

}
