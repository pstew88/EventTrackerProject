package com.skilldistillery.raid.services;

import java.util.List;

import com.skilldistillery.raid.entities.Raid;

public interface RaidService {
	
	public List<Raid> getAllRaids();	
	public Raid findRaidById(Integer id);
	public Raid create(Raid newRaid);
	public void delete(Integer id);
	 public Raid update(Integer id, Raid upRaid);
}
